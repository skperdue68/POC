import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs';

function fixture() {
 const properties={ARCHIVE_SECRET:'secret',SOURCE_SPREADSHEET_ID:'live',ARCHIVE_FOLDER_ID:'folder'};
 const files=new Map(), calls=[], dates={biweekly:'2026-10-10',monthly:'2026-10-24'};
 const context=vm.createContext({console:{log(){},error(){}},
  ContentService:{MimeType:{JSON:'json'},createTextOutput:text=>({setMimeType:()=>JSON.parse(text)})},
  PropertiesService:{getScriptProperties:()=>({getProperty:key=>properties[key]})},
  LockService:{getScriptLock:()=>({tryLock:()=>true,releaseLock(){}})},
  SpreadsheetApp:{openById:id=>({getSheetByName:tab=>({getRange:address=>({
   getDisplayValue:()=>{const date=dates[tab==='Bi'?'biweekly':'monthly'];return date.slice(5,7)+'/'+date.slice(8,10)+'/'+date.slice(2,4);},
   getValues:()=>address==='Q33:Q52'?[['Alice'],['']]:address==='J5:K254'?[[true,0]]:[]
  })})})},
  Drive:{Files:{list:options=>{
   assert.match(options.q,/'folder' in parents and trashed=false/);
   assert.match(options.q,/name='260926 Raffle'/);
   assert.doesNotMatch(options.q,/guildsyncRaffleDate| or /);
   return {files:[...files.values()].filter(file=>!file.trashed && file.parents?.includes('folder') &&
    file.name==='260926 Raffle').map(file=>({id:file.id,name:file.name}))};
  },
   copy:(body,id)=>{calls.push(['copy',id]);const file={id:'copy',mimeType:'application/vnd.google-apps.spreadsheet',...body};files.set(file.id,file);return file;},
   get:id=>files.get(id),update:(body,id)=>{assert.equal(body.trashed,undefined);Object.assign(files.get(id),body);calls.push(['update',id]);}},
   Permissions:{list:()=>({permissions:[]})}}
 });
 vm.runInContext(fs.readFileSync(new URL('../../scripts/google-apps-script/Archive.gs',import.meta.url),'utf8'),context);
 const payload={secret:'secret',sourceId:'live',key:'a'.repeat(32)+':raffle-history-2026-09-26',drawDates:{biweekly:'2026-09-26',monthly:'2026-09-26'},biweeklyTab:'Bi',fiftyFiftyTab:'50/50'};
 const call=(action,extra={})=>context.doPost({postData:{contents:JSON.stringify({...payload,action,...extra})}});
 return {files,calls,dates,call,context};
}
test('historical copy retry reuses preparing file and only becomes ready with correct dates',()=>{
 const f=fixture();const first=f.call('historical-resolve',{allowCreate:true});
 assert.equal(first.ok,true);assert.equal(first.ready,false);assert.equal(first.created,true);
 assert.equal(f.call('historical-resolve',{allowCreate:true}).created,false);
 assert.equal(f.calls.filter(c=>c[0]==='copy').length,1);
 assert.equal(f.call('historical-read',{archiveId:'copy'}).ok,false);
 assert.equal(f.call('historical-complete',{archiveId:'copy'}).ok,false);
 Object.assign(f.dates,{biweekly:'2026-09-26',monthly:'2026-09-26'});
 assert.equal(f.call('historical-complete',{archiveId:'copy'}).ready,true);
 const captured=f.call('historical-read',{archiveId:'copy'});
 assert.equal(captured.ok,true);
 assert.ok(captured.diagnosticCells.some(c=>c.cell==='K5'&&c.value==='0'));
});
test('failure to search the archive folder does not create a replacement',()=>{
 const f=fixture();f.context.Drive.Files.list=()=>{throw Error('Temporary permission failure');};
 assert.equal(f.call('historical-resolve',{allowCreate:true,archiveId:'registered'}).ok,false);
 assert.equal(f.calls.filter(c=>c[0]==='copy').length,0);
});
test('exactly named archive is found in the archive folder and repeated loads/saves keep its ID',()=>{
 const f=fixture();Object.assign(f.dates,{biweekly:'2026-09-26',monthly:'2026-09-26'});
 f.files.set('existing',{id:'existing',name:'260926 Raffle',mimeType:'application/vnd.google-apps.spreadsheet',parents:['folder'],appProperties:{guildsyncSource:'live'}});
 for(const allowCreate of [true,false,true]) {
  const result=f.call('historical-resolve',{allowCreate});assert.equal(result.ok,true);assert.equal(result.archiveId,'existing');assert.equal(result.created,false);assert.equal(result.lookupMethod,'archive-name');assert.equal(result.fileName,'260926 Raffle');assert.equal(result.matches[0].id,'existing');
 }
 assert.equal(f.call('historical-resolve',{allowCreate:false,archiveId:'existing'}).lookupMethod,'archive-name');
 f.dates.monthly='2026-10-24';assert.equal(f.call('historical-resolve',{allowCreate:true,archiveId:'existing'}).ok,false);
 assert.equal(f.calls.filter(c=>c[0]==='copy').length,0);
});
test('save lookup does not create and archive identity/date failures reject writes',()=>{
 const f=fixture();assert.equal(f.call('historical-resolve',{allowCreate:false}).ok,false);assert.equal(f.calls.length,0);
 assert.equal(f.call('historical-read',{archiveId:'live'}).ok,false);
 f.call('historical-resolve',{allowCreate:true});
 f.files.get('copy').appProperties.guildsyncSource='other';
 assert.equal(f.call('historical-complete',{archiveId:'copy'}).ok,false);
 f.files.get('copy').appProperties.guildsyncSource='live';
 f.files.set('duplicate',{...f.files.get('copy'),id:'duplicate'});
 assert.match(f.call('historical-resolve',{allowCreate:true}).error,/Multiple/);
});
test('stale registry falls back to folder lookup while unrelated files are ignored',()=>{
 const f=fixture();
 f.files.set('old',{id:'old',trashed:true,name:'260926 Raffle',parents:['folder']});
 f.files.set('unrelated',{id:'unrelated',name:'261010 Raffle',parents:['folder']});
 const result=f.call('historical-resolve',{allowCreate:true,archiveId:'old'});
 assert.equal(result.ok,true);assert.equal(result.archiveId,'copy');assert.equal(result.created,true);
 assert.equal(f.call('historical-resolve',{allowCreate:true,archiveId:'old'}).archiveId,'copy');
 assert.equal(f.calls.filter(c=>c[0]==='copy').length,1);
});

test('renamed or outside-folder files are not substituted for the expected archive name',()=>{
 const f=fixture();
 f.files.set('renamed',{id:'renamed',name:'Renamed raffle',parents:['folder'],appProperties:{guildsyncSource:'live',guildsyncRaffleDate:'2026-09-26'}});
 f.files.set('outside',{id:'outside',name:'260926 Raffle',parents:['other']});
 const missing=f.call('historical-resolve',{allowCreate:false,archiveId:'renamed'});
 assert.equal(missing.ok,false);assert.match(missing.error,/260926 Raffle.*archive folder/);
 assert.equal(f.calls.length,0);
 const created=f.call('historical-resolve',{allowCreate:true,archiveId:'renamed'});
 assert.equal(created.ok,true);assert.equal(created.created,true);assert.equal(created.name,'260926 Raffle');
 assert.deepEqual(Array.from(f.files.get('copy').parents),['folder']);
 assert.equal(created.archiveFolderId,'folder');assert.equal(created.matches.length,0);
});

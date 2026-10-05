import { createHash } from 'node:crypto';
import { googleContext, config, sheetsRequest } from './google-sheets-banking-sync.js';
import { requestArchive } from './apps-script-archive.js';
import { saveArchiveCells, loadArchiveCells } from './raffle-archive-cells.js';

export function raffleDrawDates(selection) {
 const formatter = new Intl.DateTimeFormat('en-US', {timeZone:'America/New_York', year:'numeric', month:'2-digit', day:'2-digit'});
 return Object.fromEntries(selection.raffles.map(period => {
  const parts=formatter.formatToParts(new Date(period.end*1000));
  const part=key=>parts.find(item=>item.type===key).value;
  return [period.type,part('year')+'-'+part('month')+'-'+part('day')];
 }));
}

async function workingDrawDates() {
 const {settings,token,url}=await googleContext();
 const result={};
 for (const [type,tab,address] of [['biweekly',settings.biweeklyTab,'R7'],['monthly',settings.fiftyFiftyTab,'P7']]) {
  const range="'"+tab.replace(/'/g,"''")+"'!"+address;
  const data=await sheetsRequest(token,url+'/values/'+encodeURIComponent(range)+'?valueRenderOption=FORMATTED_VALUE');
  const match=/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/.exec(String(data.values?.[0]?.[0]||'').trim());
  if (match) result[type]=(match[3].length===2?'20':'')+match[3]+'-'+match[1].padStart(2,'0')+'-'+match[2].padStart(2,'0');
 }
 return result;
}

export function createHistoricalRaffles(db, {settings=config, currentSelection, workingDates=workingDrawDates, request=requestArchive, capture=saveArchiveCells, loadCells=loadArchiveCells} = {}) {
 const url=id=>'https://docs.google.com/spreadsheets/d/'+encodeURIComponent(id)+'/edit';
 const registryKey=date=>'raffle_archive_'+createHash('sha256').update(settings().spreadsheetId+':'+date).digest('hex');
 const record=async(target,status)=>db.execute('INSERT INTO guildsync_settings (setting_key,value) VALUES (?,?) ON DUPLICATE KEY UPDATE value=VALUES(value)',
  [registryKey(target.drawDates.biweekly),JSON.stringify({sourceId:settings().spreadsheetId,archiveId:target.spreadsheetId,drawDates:target.drawDates,periods:target.periods,status})]);
 const args=selection=>{
  const sourceId=settings().spreadsheetId, drawDates=raffleDrawDates(selection);
  const hash=createHash('sha256').update(sourceId).digest('hex').slice(0,32);
  return {sourceId,drawDates,key:hash+':raffle-history-'+drawDates.biweekly,biweeklyTab:settings().biweeklyTab,fiftyFiftyTab:settings().fiftyFiftyTab,details:true};
 };
 const captureArchive=async(result)=>{
  const connection=await db.getConnection();
  try { return await capture(connection,result,result.archiveId,settings().spreadsheetId,settings()); }
  finally { connection.release(); }
 };
 async function resolve(selection,allowCreate) {
  const parameters=args(selection);
  const [rows]=await db.execute('SELECT value FROM guildsync_settings WHERE setting_key=?',[registryKey(parameters.drawDates.biweekly)]);
  const saved=rows.length ? JSON.parse(rows[0].value) : null;
  const result=await request('historical-resolve',{...parameters,allowCreate,archiveId:saved?.archiveId});
  if(result.archiveId===settings().spreadsheetId)throw Error('Historical archive cannot be the working spreadsheet.');
  return {...result,spreadsheetId:result.archiveId,historical:true,sheetUrl:url(result.archiveId),drawDates:parameters.drawDates,periods:selection.raffles};
 }
 return {
  async prepare(selection,date) {
   const sourceId=settings().spreadsheetId;
   const selectedDates=raffleDrawDates(selection);
   if(date===undefined)return {spreadsheetId:sourceId,historical:false,sheetUrl:url(sourceId)};
   const current=raffleDrawDates(currentSelection());
   const working=await workingDates();
   if(selectedDates.biweekly===current.biweekly && ['biweekly','monthly'].every(type=>selectedDates[type]===working[type]))
    return {spreadsheetId:sourceId,historical:false,sheetUrl:url(sourceId)};
   const target=await resolve(selection,true);
   await record(target,'preparing');
   if(target.ready) {
    const captured=await request('historical-read',{...args(selection),archiveId:target.spreadsheetId});
    await captureArchive(captured);
   }
   // A preparing copy may still contain the current working raffle. Never capture it.
   const results=await loadCells(db,selection.raffles,sourceId);
   return {...target,results};
  },
  async complete(selection,target) {
   if(!target.historical)return;
   await request('historical-complete',{...args(selection),archiveId:target.spreadsheetId});
   // Only after the historical write succeeds may a new copy become the saved snapshot's archive ID.
   if (!target.ready) {
    const captured=await request('historical-read',{...args(selection),archiveId:target.spreadsheetId});
    await captureArchive(captured);
   }
   await record(target,'ready');
  },
  async save(selection) {
   if(settings().enabled===false)throw Error('Enable Google Sheets on the backend first.');
   const target=await resolve(selection,false);
   if(!target.ready)throw Error('Archive load is incomplete. Run the matching load before saving.');
   const captured=await request('historical-read',{...args(selection),archiveId:target.spreadsheetId});
   const saved=await captureArchive(captured);
   await request('historical-complete',{...args(selection),archiveId:target.spreadsheetId});
   await record(target,'ready');
   return {...target,saved};
  }
 };
}

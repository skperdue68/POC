import test from 'node:test';
import assert from 'node:assert/strict';
import { createHistoricalRaffles } from './historical-raffles.js';

const selected = { raffles: [{type:'biweekly',start:1789254000,end:1790463600},{type:'monthly',start:1788044400,end:1790463600}] };
const dates = {biweekly:'2026-09-26',monthly:'2026-09-26'};
function fixture({current=false,created=false,saveFails=false,stale=false}={}) {
 const calls=[];
 const db={async execute(sql,args){calls.push(['db',sql,args]);return [sql.startsWith('SELECT')&&stale?[{value:JSON.stringify({archiveId:'old-copy'})}]:[]];},async getConnection(){return db;},async beginTransaction(){},async commit(){},async rollback(){},release(){}};
 const service=createHistoricalRaffles(db,{
  settings:()=>({spreadsheetId:'live',biweeklyTab:'Bi',fiftyFiftyTab:'50/50'}),
  currentSelection:()=>current?selected:{raffles:selected.raffles.map(p=>({...p,end:p.end+1209600}))},
  workingDates:async()=>current?dates:{biweekly:'2026-10-10',monthly:'2026-10-24'},
  request:async(action,payload)=>{calls.push([action,payload]);return {archiveId:'copy',name:'260926 Raffle',created,ready:!created,drawDates:dates,diagnosticCells:[],sourceId:'live'};},
  capture:async()=>{calls.push(['capture']);if(saveFails)throw Error('save failed');},
  loadCells:async()=>{calls.push(['load']);return{};}
 });
 return {service,calls};
}
test('historical target captures an existing archive before loading saved results',async()=>{
 const f=fixture();const target=await f.service.prepare(selected,'091526');
 assert.equal(target.spreadsheetId,'copy');assert.equal(target.historical,true);
 assert.ok(f.calls.findIndex(c=>c[0]==='capture')<f.calls.findIndex(c=>c[0]==='load'));
});
test('stale registry hint can resolve a replacement and registry points to the returned ID',async()=>{
 const f=fixture({stale:true,created:true});const target=await f.service.prepare(selected,'091526');
 assert.equal(f.calls.find(c=>c[0]==='historical-resolve')[1].archiveId,'old-copy');
 assert.equal(target.spreadsheetId,'copy');
 assert.equal(JSON.parse(f.calls.find(c=>c[0]==='db'&&c[1].startsWith('INSERT'))[2][1]).archiveId,'copy');
});
test('new copy never captures inherited current results and retains a recoverable target',async()=>{
 const f=fixture({created:true});const target=await f.service.prepare(selected,'091526');
 assert.equal(target.spreadsheetId,'copy');assert.ok(!f.calls.some(c=>c[0]==='capture'));
 assert.ok(f.calls.some(c=>c[0]==='db'&&c[1].includes('INSERT')));
 await f.service.complete(selected,target);
 assert.ok(f.calls.findIndex(c=>c[0]==='historical-complete')<f.calls.findIndex(c=>c[0]==='capture'));
});
test('current dated load stays on working sheet without archive requests',async()=>{
 const f=fixture({current:true});assert.equal((await f.service.prepare(selected,'091526')).historical,false);
 assert.ok(!f.calls.some(c=>c[0].startsWith('historical-')));
});
test('failed capture prevents historical load and save never creates a missing archive',async()=>{
 const f=fixture({saveFails:true});await assert.rejects(f.service.prepare(selected,'091526'),/save failed/);
 assert.ok(!f.calls.some(c=>c[0]==='load'));
 const g=fixture();await g.service.save(selected);
 assert.equal(g.calls.find(c=>c[0]==='historical-resolve')[1].allowCreate,false);
 assert.ok(!g.calls.some(c=>c[0]==='load'));
});

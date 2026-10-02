import test from 'node:test';
import assert from 'node:assert/strict';
import { saveArchiveCells, loadArchiveCells } from './raffle-archive-cells.js';
test('archive cells save their own draw date, tab and address transactionally', async()=>{
 const calls=[];const db={beginTransaction:async()=>calls.push('begin'),execute:async(sql,params)=>calls.push(params),commit:async()=>calls.push('commit'),rollback:async()=>calls.push('rollback')};
 await saveArchiveCells(db,{diagnosticCells:[{tab:'Bi',cell:'Q33',value:'Alice'},{tab:'Monthly',cell:'P25',value:'Bob'}],drawDates:{biweekly:'2026-10-10',monthly:'2026-09-26'}},'archive','source',{biweeklyTab:'Bi',fiftyFiftyTab:'Monthly'});
 assert.equal(calls[0],'begin'); assert.equal(calls.at(-1),'commit');
 assert.deepEqual(calls[1],['source','biweekly','2026-10-10']);
 assert.deepEqual(calls[2],['source','monthly','2026-09-26']);
 assert.deepEqual(calls[3],['archive','biweekly','2026-10-10','source','Bi','Q33','Alice']);
 assert.deepEqual(calls[4],['archive','monthly','2026-09-26','source','Monthly','P25','Bob']);
 db.execute=async()=>{throw Error('database failed');};
 await assert.rejects(saveArchiveCells(db,{diagnosticCells:[{tab:'Bi',cell:'Q33',value:'Alice'}],drawDates:{biweekly:'2026-10-10'}},'archive','source',{biweeklyTab:'Bi',fiftyFiftyTab:'Monthly'}),/database failed/);
 assert.equal(calls.at(-1),'rollback');
 await assert.rejects(saveArchiveCells(db,{diagnosticCells:[],drawDates:{}},'archive','source',{}),/draw date metadata/);
 await assert.rejects(saveArchiveCells(db,{},'archive','source',{}),/update the Apps Script/);
});

test('empty replacement still deletes the raffle snapshot',async()=>{
 const calls=[];const db={beginTransaction:async()=>{},execute:async(sql,args)=>calls.push([sql,args]),commit:async()=>{},rollback:async()=>{}};
 await saveArchiveCells(db,{diagnosticCells:[],drawDates:{biweekly:'2026-10-10',monthly:'2026-09-26'}},'new','source',{biweeklyTab:'Bi',fiftyFiftyTab:'Monthly'});
 assert.equal(calls.length,2);assert.ok(calls.every(([sql])=>sql.startsWith('DELETE')));
});


test('load matches source and each selected raffle date and retains exact locations',async()=>{
 const calls=[];const db={execute:async(sql,args)=>{calls.push(args);return [args[1]==='biweekly'?[{cell_address:'Q52',cell_value:'Winner'},{cell_address:'J254',cell_value:'Member'},{cell_address:'K254',cell_value:'3'}]:[{cell_address:'P25',cell_value:'Monthly Winner'},{cell_address:'M28',cell_value:'Sender'}]];}};
 const result=await loadArchiveCells(db,[{type:'biweekly',end:Date.parse('2026-10-10T16:00:00Z')/1000},{type:'monthly',end:Date.parse('2026-09-26T16:00:00Z')/1000}],'source');
 assert.deepEqual(calls[0].slice(0,3),['source','biweekly','2026-10-10']);
 assert.deepEqual(calls[1].slice(0,3),['source','monthly','2026-09-26']);
 assert.deepEqual(result.biweekly,[{address:'Q52',value:'Winner'},{address:'J254',value:'Member'},{address:'K254',value:3}]);
 assert.deepEqual(result.monthly,[{address:'P25',value:'Monthly Winner'},{address:'M28',value:'Sender'}]);
});


test('replacement reconciles old archive IDs and removes their cell rows',async()=>{
 const calls=[];const db={beginTransaction:async()=>{},execute:async(sql,args)=>{calls.push([sql,args]);return [{}];},commit:async()=>{},rollback:async()=>{}};
 await saveArchiveCells(db,{diagnosticCells:[],drawDates:{biweekly:'2026-10-10'},replacedArchiveIds:['old']},'new','source',{});
 assert.ok(calls.some(([sql,args])=>sql.includes('DELETE') && sql.includes('archive_id=?') && args.includes('old')));
 assert.ok(calls.some(([sql,args])=>sql.includes('UPDATE guildsync_raffle_results') && args[0]==='new' && args.includes('old')));
});

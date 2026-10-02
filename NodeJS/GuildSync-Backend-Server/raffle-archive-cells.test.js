import test from 'node:test';
import assert from 'node:assert/strict';
import { saveArchiveCells } from './raffle-archive-cells.js';
test('archive cells save their own draw date, tab and address transactionally', async()=>{
 const calls=[];const db={beginTransaction:async()=>calls.push('begin'),execute:async(sql,params)=>calls.push(params),commit:async()=>calls.push('commit'),rollback:async()=>calls.push('rollback')};
 await saveArchiveCells(db,{diagnosticCells:[{tab:'Bi',cell:'Q33',value:'Alice'},{tab:'Monthly',cell:'P25',value:'Bob'}],drawDates:{biweekly:'2026-10-10',monthly:'2026-09-26'}},'archive','source',{biweeklyTab:'Bi',fiftyFiftyTab:'Monthly'});
 assert.equal(calls[0],'begin'); assert.equal(calls.at(-1),'commit');
 assert.deepEqual(calls[1],['archive','biweekly','2026-10-10','source','Bi','Q33','Alice']);
 assert.deepEqual(calls[2],['archive','monthly','2026-09-26','source','Monthly','P25','Bob']);
 db.execute=async()=>{throw Error('database failed');};
 await assert.rejects(saveArchiveCells(db,{diagnosticCells:[{tab:'Bi',cell:'Q33',value:'Alice'}],drawDates:{biweekly:'2026-10-10'}},'archive','source',{biweeklyTab:'Bi',fiftyFiftyTab:'Monthly'}),/database failed/);
 assert.equal(calls.at(-1),'rollback');
 await assert.rejects(saveArchiveCells(db,{diagnosticCells:[],drawDates:{}},'archive','source',{}),/draw date metadata/);
 await assert.rejects(saveArchiveCells(db,{},'archive','source',{}),/update the Apps Script/);
});

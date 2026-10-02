import test from 'node:test';
import assert from 'node:assert/strict';
import { resultPeriods, resultRequests, saveRaffleResults, readResultFormulas, loadRaffleResults } from './raffle-results.js';
process.env.MARIADB_USER ||= 'test';
process.env.MARIADB_PASSWORD ||= 'test';
const { getRaffleRefreshSelection } = await import('./guildsync-database-actions.js');

test('draw date selects ending period, and ongoing 50/50 is not captured', () => {
  const data = { biweekly: { date: '2026-09-26', cells: [] }, monthly: { date: '2026-10-24', cells: [] } };
  const selected = resultPeriods(data, getRaffleRefreshSelection, Date.parse('2026-09-27T02:00:00Z')/1000);
  assert.equal(selected.length, 1);
  assert.equal(selected[0].period.type, 'biweekly');
  assert.equal(selected[0].period.end, Date.parse('2026-09-26T23:00:00Z')/1000);
  data.monthly.date = '2026-09-26';
  assert.equal(resultPeriods(data, getRaffleRefreshSelection, Date.parse('2026-09-27T02:00:00Z')/1000).length, 2);
  assert.throws(() => resultPeriods({ ...data, biweekly: { date: '2026-09-25', cells: [] } }, getRaffleRefreshSelection), /draw date/);
});
test('restoration retains exact sparse rows, types and zero; rejects out of range cells', () => {
  const requests = resultRequests(7, 'biweekly', [
    { address: 'Q48', value: 'Winner' }, { address: 'K200', value: 0 }, { address: 'S31', value: 200000 }
  ]);
  assert.equal(requests[0].updateCells.start.rowIndex, 47);
  assert.equal(requests[1].updateCells.start.rowIndex, 199);
  assert.equal(requests[1].updateCells.rows[0].values[0].userEnteredValue.numberValue, 0);
  assert.throws(() => resultRequests(7, 'monthly', [{ address: 'Q48', value: 'bad' }]), /cell/);
});
test('snapshot upsert stores empty replacement and rollback on failure', async () => {
  const calls = [];
  const db = { beginTransaction: async()=>calls.push('begin'), commit: async()=>calls.push('commit'),
    rollback: async()=>calls.push('rollback'), execute: async(sql,args)=>calls.push(args) };
  const items = [{ period: { type:'biweekly', start:1,end:2 }, cells:[] }];
  await saveRaffleResults(db, items, 'copy', 'source');
  assert.equal(calls[0], 'begin'); assert.equal(calls.at(-1), 'commit');
  assert.equal(calls[1][5], '[]');
  db.execute = async()=>{throw Error('database unavailable');};
  await assert.rejects(saveRaffleResults(db, items, 'copy','source'), /database unavailable/);
  assert.equal(calls.at(-1), 'rollback');
});

test('formula capture preserves sparse positions and snapshot lookup uses type and full period', async()=>{
 const formulas=await readResultFormulas(async()=>({valueRanges:[{}, {}, {values:[['=SUM(A1:A2)'],[],['=A3']]}, {},{},{}]}),
   'token','url',{biweeklyTab:'bi-weekly raffle',fiftyFiftyTab:'50/50'});
 assert.deepEqual(formulas.biweekly.map(c=>c.address),['S31','S33']);
 const calls=[];
 const db={execute:async(sql,args)=>{calls.push(args);return [[{cells_json:'[{"address":"L23","value":"Winner"}]'}]];}};
 const result=await loadRaffleResults(db,[{type:'monthly',start:100,end:200}]);
 assert.deepEqual(calls,[['monthly',100,200]]);
 assert.equal(result.monthly[0].address,'L23');
});

test('historical values are frozen while formula templates can be restored explicitly',()=>{
 const cells=[{address:'S31',value:200000,formula:'=RANDBETWEEN(1,999999)'}];
 assert.equal(resultRequests(1,'biweekly',cells)[0].updateCells.rows[0].values[0].userEnteredValue.numberValue,200000);
 assert.equal(resultRequests(1,'biweekly',cells,true)[0].updateCells.rows[0].values[0].userEnteredValue.formulaValue,cells[0].formula);
});

test('existing-deployment migration matches automatic schema initialization', async()=>{
 const {readFile}=await import('node:fs/promises');
 const {RAFFLE_RESULTS_SCHEMA,RAFFLE_FORMULAS_SCHEMA}=await import('./raffle-results.js');
 const sql=await readFile(new URL('./migrations/20261001_raffle_results.sql',import.meta.url),'utf8');
 const normalize=s=>s.replace(/\s+/g,' ').trim();
 assert.equal(normalize(sql),normalize(RAFFLE_RESULTS_SCHEMA+'; '+RAFFLE_FORMULAS_SCHEMA+';'));
});


test('explicitly skipped monthly results require no date and save only biweekly',()=>{
 const result=resultPeriods({biweekly:{date:'2026-09-26',cells:[]},monthly:{skipped:true,reason:'invalid-date'}},getRaffleRefreshSelection);
 assert.deepEqual(result.map(item=>item.period.type),['biweekly']);
});


test('eligible monthly dates use actual variable-length schedule and exact draw boundary',async()=>{
 const {completedMonthlyDrawDates}=await import('./raffle-results.js');
 const now=Date.parse('2026-09-26T23:00:00Z')/1000;
 const dates=completedMonthlyDrawDates(getRaffleRefreshSelection,now);
 assert.ok(dates.includes('2026-07-18'));
 assert.ok(dates.includes('2026-09-26'));
 assert.ok(!dates.includes('2026-08-01'));
 assert.ok(!dates.includes('2026-10-24'));
 assert.ok(!completedMonthlyDrawDates(getRaffleRefreshSelection,now-1).includes('2026-09-26'));
});

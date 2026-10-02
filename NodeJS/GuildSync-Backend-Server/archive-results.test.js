import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
test('Apps Script reads dates and sparse values without compacting cell addresses', async()=>{
 const context=vm.createContext({Date, Utilities:{ formatDate:(date)=>date.toISOString().slice(0,10)}});
 vm.runInContext(await readFile(new URL('../../scripts/google-apps-script/Archive.gs',import.meta.url),'utf8'),context);
 const sheet={getRange:address=>({getValue:()=>new Date('2026-09-26T12:00:00Z'),
   getValues:()=>address==='J5:K254'?[['Alice',0],[],['Bob',2]]:[],
   getFormulas:()=>[],getRow:()=>5,getColumn:()=>10})};
 const book={getSheetByName:()=>sheet,getSpreadsheetTimeZone:()=> 'America/New_York'};
 const results=context.readRaffleArchive(book,'bi-weekly raffle','50/50');
 assert.equal(results.biweekly.date,'2026-09-26');
 assert.equal(results.biweekly.cells[2].address,'J7');
 assert.equal(results.biweekly.cells[1].value,0);
 assert.equal(context.raffleArchiveName(results.biweekly.date),'260926 Raffle');
});


test('archive dates use Eastern time even when spreadsheet timezone is empty', async () => {
 const context = vm.createContext({ Date, Utilities: { formatDate: (date, zone, format) => {
   assert.equal(zone, 'America/New_York'); assert.equal(format, 'yyyy-MM-dd');
   const parts = new Intl.DateTimeFormat('en-US', { timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(date);
   const part = type => parts.find(p => p.type === type).value;
   return part('year') + '-' + part('month') + '-' + part('day');
 } } });
 vm.runInContext(await readFile(new URL('../../scripts/google-apps-script/Archive.gs', import.meta.url), 'utf8'), context);
 let value = new Date('2026-09-26T03:30:00Z');
 const book = { getSpreadsheetTimeZone: () => '', getSheetByName: () => ({ getRange: () => ({
   getValue: () => value, getValues: () => [[value]], getFormulas: () => [], getRow: () => 5, getColumn: () => 10
 }) }) };
 for (const [instant, expected] of [['2026-09-26T03:30:00Z', '2026-09-25'], ['2026-01-26T04:30:00Z', '2026-01-25']]) {
   value = new Date(instant);
   assert.equal(context.raffleSheetDate(book, 'Bi-Weekly Raffle', 'R7', 'working spreadsheet'), expected);
   const results = context.readRaffleArchive(book, 'Bi-Weekly Raffle', '50/50');
   assert.equal(results.biweekly.date, expected); assert.equal(results.monthly.date, expected);
   assert.equal(results.biweekly.cells[0].value, expected);
 }
 value = '09/26/26';
 assert.equal(context.raffleSheetDate(book, 'Bi-Weekly Raffle', 'R7'), '2026-09-26');
 context.Utilities.formatDate = () => { throw Error('format failure'); };
 value = new Date('2026-09-26T12:00:00Z');
 assert.throws(() => context.raffleSheetDate(book, 'Bi-Weekly Raffle', 'R7', 'working spreadsheet'), /working spreadsheet.*R7.*Utilities.formatDate.*America\/New_York.*format failure/);
});


test('ongoing or undated monthly raffle never reads winner fields', async()=>{
 const logs=[];
 const context=vm.createContext({Date,console:{log:line=>logs.push(line)}});
 vm.runInContext(await readFile(new URL('../../scripts/google-apps-script/Archive.gs',import.meta.url),'utf8'),context);
 for (const monthlyDate of ['10/24/26','', 'not a date', '09/25/26', '08/01/26']) {
  const book={getSheetByName:tab=>({getRange:address=>{
   if(tab==='50/50' && address!=='P7') assert.fail('ongoing monthly results must not be read');
   return {getValue:()=>tab==='50/50'?monthlyDate:'09/26/26',getValues:()=>[],getFormulas:()=>[],getRow:()=>1,getColumn:()=>1};
  }})};
  const results=context.readRaffleArchive(book,'bi-weekly raffle','50/50',['2026-09-26','2026-08-29','2026-07-18']);
  assert.equal(results.monthly.skipped,true);
  assert.equal(results.monthly.cells,undefined);
 }
 assert.ok(logs.some(line=>line.includes('P7')));
});

test('completed monthly raffle reads results and range failures identify their location', async()=>{
 const logs=[]; let fail=false;
 const context=vm.createContext({Date,console:{log:line=>logs.push(line)}});
 vm.runInContext(await readFile(new URL('../../scripts/google-apps-script/Archive.gs',import.meta.url),'utf8'),context);
 const book={getSheetByName:tab=>({getRange:address=>{
  if(fail && address==='L23') throw Error('sensitive cell content');
  return {getValue:()=> '09/26/26',getValues:()=>address==='L23'?[['Winner']]:[],getFormulas:()=>[],getRow:()=>23,getColumn:()=>12};
 }})};
 const result=context.readRaffleArchive(book,'bi-weekly raffle','50/50',['2026-09-26','2026-08-29','2026-07-18']);
 assert.equal(result.monthly.cells[0].address,'L23');
 assert.ok(logs.some(line=>line.includes('50/50') && line.includes('L23')));
 fail=true;
 assert.throws(()=>context.readRaffleArchive(book,'bi-weekly raffle','50/50',['2026-09-26','2026-08-29','2026-07-18']),/Unable to read 50\/50 L23/);
 assert.ok(logs.every(line=>!line.includes('Winner')));
});

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

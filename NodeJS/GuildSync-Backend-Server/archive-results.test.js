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

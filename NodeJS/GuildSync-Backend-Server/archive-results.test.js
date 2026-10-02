import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
test('Apps Script reads dates and sparse values without compacting cell addresses', async()=>{
 const context=vm.createContext({Date, Utilities:{ formatDate:(date)=>date.toISOString().slice(0,10)}});
 vm.runInContext(await readFile(new URL('../../scripts/google-apps-script/Archive.gs',import.meta.url),'utf8'),context);
 const sheet={getRange:address=>({getDisplayValue:()=> '09/26/26',
   getValues:()=>address==='J5:K254'?[['Alice',0],[],['Bob',2]]:[],
   getFormulas:()=>[],getRow:()=>5,getColumn:()=>10})};
 const book={getSheetByName:()=>sheet,getSpreadsheetTimeZone:()=> 'America/New_York'};
 const results=context.readRaffleArchive(book,'bi-weekly raffle','50/50');
 assert.equal(results.biweekly.date,'2026-09-26');
 assert.equal(results.biweekly.cells[2].address,'J7');
 assert.equal(results.biweekly.cells[1].value,0);
 assert.equal(context.raffleArchiveName(results.biweekly.date),'260926 Raffle');
});


test('displayed draw dates validate real calendar dates without consulting a timezone',async()=>{
 const context=vm.createContext({Date});
 vm.runInContext(await readFile(new URL('../../scripts/google-apps-script/Archive.gs',import.meta.url),'utf8'),context);
 let display='10/10/26';
 const book={getSpreadsheetTimeZone:()=>{throw Error('must not convert date-only cell');},getSheetByName:()=>({getRange:()=>({getDisplayValue:()=>display})})};
 for(const value of ['10/10/26','10/10/2026']) {
  display=value; assert.equal(context.raffleSheetDate(book,'bi-weekly raffle','R7'),'2026-10-10');
 }
 for(const value of ['', '02/31/26']) {
  display=value; assert.throws(()=>context.raffleSheetDate(book,'bi-weekly raffle','R7'),/Cannot archive: the raffle sheet has no valid draw date/);
 }
});

test('ongoing or undated monthly raffle never reads winner fields', async()=>{
 const logs=[];
 const context=vm.createContext({Date,console:{log:line=>logs.push(line)}});
 vm.runInContext(await readFile(new URL('../../scripts/google-apps-script/Archive.gs',import.meta.url),'utf8'),context);
 for (const monthlyDate of ['10/24/26','', 'not a date', '09/25/26', '08/01/26']) {
  const book={getSheetByName:tab=>({getRange:address=>{
   if(tab==='50/50' && address!=='P7') assert.fail('ongoing monthly results must not be read');
   return {getDisplayValue:()=>tab==='50/50'?monthlyDate:'09/26/26',getValues:()=>[],getFormulas:()=>[],getRow:()=>1,getColumn:()=>1};
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
  return {getDisplayValue:()=> '09/26/26',getValues:()=>address==='L23'?[['Winner']]:[],getFormulas:()=>[],getRow:()=>23,getColumn:()=>12};
 }})};
 const result=context.readRaffleArchive(book,'bi-weekly raffle','50/50',['2026-09-26','2026-08-29','2026-07-18']);
 assert.equal(result.monthly.cells[0].address,'L23');
 assert.ok(logs.some(line=>line.includes('50/50') && line.includes('L23')));
 fail=true;
 assert.throws(()=>context.readRaffleArchive(book,'bi-weekly raffle','50/50',['2026-09-26','2026-08-29','2026-07-18']),/Unable to read 50\/50 L23/);
 assert.ok(logs.every(line=>!line.includes('Winner')));
});


test('archive naming preserves displayed date instead of shifting midnight UTC into yesterday',async()=>{
 const context=vm.createContext({Date, Utilities:{formatDate:()=> '2026-10-09'}});
 vm.runInContext(await readFile(new URL('../../scripts/google-apps-script/Archive.gs',import.meta.url),'utf8'),context);
 const book={getSheetByName:()=>({getRange:()=>({getValue:()=>new Date('2026-10-10T00:00:00Z'),getDisplayValue:()=> '10/10/26'})})};
 assert.equal(context.raffleArchiveName(context.raffleSheetDate(book,'bi-weekly raffle','R7')),'261010 Raffle');
});


test('temporary archive diagnostics read requested tabs/ranges and preserve sparse addresses', async () => {
 const context = vm.createContext({});
 vm.runInContext(await readFile(new URL('../../scripts/google-apps-script/Archive.gs', import.meta.url), 'utf8'), context);
 const reads = [];
 const fixtures = {'Q33:Q52':[['Alice'],[''],[null],[0]], 'J5:K254':[['Attendee',0],['',null],['Next',false]], 'O55':[['Officer']], 'P25':[['Winner']], 'M28':[['Sender']]};
 const book = {getSheetByName:tab=>({getRange:range=>{reads.push(tab+':'+range);return {getValues:()=>fixtures[range]};}})};
 const result = JSON.parse(JSON.stringify(context.readArchiveDiagnosticCells(book,'Bi-Weekly Raffle','50/50')));
 assert.deepEqual(reads,['Bi-Weekly Raffle:Q33:Q52','Bi-Weekly Raffle:J5:K254','Bi-Weekly Raffle:O55','50/50:P25','50/50:M28']);
 assert.deepEqual(result.map(item=>item.cell),['Q33','Q36','J5','K5','J7','K7','O55','P25','M28']);
 assert.equal(result.find(item=>item.cell==='K5').value,'0');
 assert.equal(result.find(item=>item.cell==='K7').value,'false');
 assert.equal(result.find(item=>item.cell==='P25').tab,'50/50');
});

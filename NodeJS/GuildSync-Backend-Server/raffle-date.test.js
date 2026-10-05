import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeRaffleDate } from './raffle-date.js';

test('zero-padded compact and separated dates normalize without a padding confirmation',()=>{
 for(const input of ['092526','09/25/26','09-25-26',' 09/25/26 ']) {
  const result=normalizeRaffleDate(input);
  assert.equal(result.value,'092526');assert.equal(result.requiresConfirmation,false);
 }
 assert.equal(normalizeRaffleDate('02/29/28').value,'022928');
});

test('only unique valid unpadded interpretations are offered for confirmation',()=>{
 for(const [input,value] of [['9/5/26','090526'],['9-25-26','092526'],['92526','092526'],['9526','090526'],['13126','013126'],['01226','010226']]) {
  const result=normalizeRaffleDate(input);
  assert.equal(result.value,value);assert.equal(result.requiresConfirmation,true);
 }
});

test('ambiguous and impossible dates fail with an explicit zero-padded format',()=>{
 for(const input of ['11226','11126','10126'])assert.throws(()=>normalizeRaffleDate(input),/ambiguous.*MMDDYY/i);
 for(const input of ['02/29/26','023126','13-01-26','00/01/26','01/00/26','09/25/2026','9/25/6','09/25-26','926','','yesterday',92526,null])
  assert.throws(()=>normalizeRaffleDate(input),/valid.*MMDDYY/i);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {createOnboardingStore} from './discord-onboarding-store.js';
test('SQL claims lock guild state and commit or roll back before releasing',async()=>{
 for(const fail of [false,true]) {
  const calls=[];const connection={beginTransaction:async()=>calls.push('begin'),execute:async(sql,args)=>{calls.push(sql);return [[]];},
   commit:async()=>calls.push('commit'),rollback:async()=>calls.push('rollback'),release:()=>calls.push('release')};
  const store=createOnboardingStore({getConnection:async()=>connection});
  const run=store.atomic('123',async()=>{calls.push('work');if(fail)throw Error('failed');return 7;});
  if(fail)await assert.rejects(run,/failed/);else assert.equal(await run,7);
  assert.ok(calls[2].endsWith('FOR UPDATE'));assert.deepEqual(calls.slice(-3),['work',fail?'rollback':'commit','release']);
 }
});
test('SQL store retains completed state and queries confirmed links only',async()=>{
 const queries=[];const db={execute:async(sql,args)=>{
  queries.push({sql,args});
  if(sql.startsWith('SELECT * FROM guildsync_discord_onboarding_deliveries'))return [[{delivery_id:'job',guild_id:'g',discord_id:'u',kind:'reminder',status:'done',payload_json:'{"threadId":"thread","messageId":"message"}',claim_token:null,lease_until:0,retry_at:0}]];
  return [[]];
 }};
 const store=createOnboardingStore(db);const job=await store.job('job');assert.equal(job.status,'done');assert.equal(job.threadId,'thread');
 await store.confirmed('u');assert.match(queries.at(-1).sql,/link_status='linked' AND auto_link_blocked=0/);
 await store.promotionCandidates({gangsterRoleId:'role'});assert.match(queries.at(-1).sql,/r.role_id=\?/);assert.deepEqual(queries.at(-1).args,['role']);
 await store.putJob(job);assert.ok(queries.at(-1).args.every(value=>value!==undefined));
});

test('default promotion candidates use the plural Gangsters Discord rank',async()=>{
 const queries=[];const store=createOnboardingStore({execute:async(sql,args)=>{queries.push({sql,args});return [[]];}});
 await store.promotionCandidates({});assert.deepEqual(queries.at(-1).args,['gangsters']);
});

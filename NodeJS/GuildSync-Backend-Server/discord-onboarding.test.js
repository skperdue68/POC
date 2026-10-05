import test from 'node:test';
import assert from 'node:assert/strict';
import { createDiscordOnboarding } from './discord-onboarding.js';
import { registerDiscordOnboardingSocket } from './discord-onboarding-socket.js';

function fixture() {
 let now=1000;const states=new Map(),members=new Map(),jobs=new Map(),links=new Map(),gangsters=new Set();
 const key=(g,u)=>g+':'+u;
 const store={atomic:async(g,fn)=>fn(store),states:async()=>[...states.values()],state:async g=>states.get(g),putState:async s=>states.set(s.guildId,s),
  member:async(g,u)=>members.get(key(g,u)),putMember:async m=>members.set(key(m.guildId,m.userId),m),members:async g=>[...members.values()].filter(m=>m.guildId===g),
  confirmed:async u=>links.get(u),promotionCandidates:async()=>[...gangsters].filter(u=>links.has(u)),
  job:async id=>jobs.get(id),putJob:async j=>jobs.set(j.id,j),jobs:async g=>[...jobs.values()].filter(j=>j.guildId===g)};
 const service=createDiscordOnboarding(null,{store,now:()=>now});
 const config={enabled:true,promotionEnabled:true,promotionNotifyEnabled:true,reminderEnabled:true,reminderHours:24,mode:'private_thread',channelId:'123',gangsterRoleId:'',associateRoleId:''};
 return {service,config,members,jobs,links,gangsters,setNow:n=>now=n};
}
test('new joins alone qualify and restarting or re-enabling preserves one-time history',async()=>{
 const f=fixture();await f.service.configure('1',f.config);
 await f.service.observeMember('1',{discord_id:'old',joined_at:999});
 await f.service.observeMember('1',{discord_id:'new',joined_at:1001});
 f.setNow(1001+86400);const job=await f.service.claim('1');assert.equal(job.userId,'new');assert.equal(job.kind,'reminder');
 await f.service.finish('1',job.id,job.claimToken,{done:true,messageId:'sent'});
 assert.equal(await f.service.claim('1'),null);
 await f.service.configure('1',f.config);assert.equal(f.members.get('1:old').eligibleSince,null);
 await f.service.configure('1',{...f.config,enabled:false});f.setNow(100000);
 await f.service.configure('1',f.config);await f.service.observeMember('1',{discord_id:'during-off',joined_at:99999});
 assert.equal(f.members.get('1:during-off').eligibleSince,null);
 await f.service.observeMember('1',{discord_id:'new',joined_at:100001});f.setNow(200000);
 assert.equal(await f.service.claim('1'),null);
});
test('link or departure cancels reminders, candidates do not count as linked',async()=>{
 const f=fixture();await f.service.configure('1',f.config);
 await f.service.observeMember('1',{discord_id:'new',joined_at:1001});f.setNow(100000);
 const job=await f.service.claim('1');f.links.set('new','ESO');
 assert.equal((await f.service.validate('1',job.id,job.claimToken)).valid,false);
 f.links.delete('new');await f.service.observeMember('1',{discord_id:'new',joined_at:1001,present:false});
 assert.equal(await f.service.claim('1'),null);
});
test('confirmed Gangster links promote independently of reminder enrollment and leases protect progress',async()=>{
 const f=fixture();await f.service.configure('1',f.config);f.links.set('old','ESO');f.gangsters.add('old');
 const job=await f.service.claim('1');assert.equal(job.kind,'promotion');assert.equal(job.esoName,'ESO');
 assert.equal(await f.service.claim('1'),null);
 await assert.rejects(f.service.progress('1',job.id,'wrong',{threadId:'t'}),/claim/);
 await assert.rejects(f.service.progress('2',job.id,job.claimToken,{threadId:'t'}),/claim/);
 await f.service.progress('1',job.id,job.claimToken,{threadId:'t',roleChanged:true});
 await f.service.finish('1',job.id,job.claimToken,{error:'temporary'});
 f.setNow(2000);const retry=await f.service.claim('1');assert.equal(retry.threadId,'t');assert.equal(retry.roleChanged,true);
 await f.service.finish('1',retry.id,retry.claimToken,{done:true});f.gangsters.delete('old');assert.equal(await f.service.claim('1'),null);
});
test('onboarding endpoints reject unauthenticated and cross-guild callers',async()=>{
 const handlers={};const f=fixture();const socket={on:(name,fn)=>handlers[name]=fn};
 registerDiscordOnboardingSocket(socket,f.service);
 const call=(name,payload)=>new Promise(resolve=>handlers['guildsync:onboarding-'+name](payload,resolve));
 assert.equal((await call('configure',{guildId:'1',config:f.config})).ok,false);
 socket.guildSyncAuthenticated=true;socket.guildSyncAuthType='discord-bot';
 assert.equal((await call('configure',{guildId:'1',config:f.config})).ok,true);
 assert.equal((await call('claim',{guildId:'2'})).ok,false);
 assert.equal((await call('configure',{guildId:'2',config:f.config})).ok,false);
});
test('unattempted canceled jobs resume after re-enabling or an eligible rejoin',async()=>{
 const f=fixture();await f.service.configure('1',f.config);f.links.set('old','ESO');f.gangsters.add('old');
 let job=await f.service.claim('1');await f.service.finish('1',job.id,job.claimToken,{cancelled:true});
 f.setNow(1061);job=await f.service.claim('1');assert.equal(job?.kind,'promotion');await f.service.finish('1',job.id,job.claimToken,{done:true});f.gangsters.delete('old');
 await f.service.observeMember('1',{discord_id:'new',joined_at:1001});f.setNow(100000);
 job=await f.service.claim('1');await f.service.finish('1',job.id,job.claimToken,{cancelled:true});
 await f.service.observeMember('1',{discord_id:'new',joined_at:100001});f.setNow(200000);
 assert.equal((await f.service.claim('1'))?.userId,'new');
});
test('completed promotion can occur again, retaining both notification identities and one-time reminders',async()=>{
 const f=fixture();await f.service.configure('1',f.config);f.links.set('old','ESO');f.gangsters.add('old');
 const first=await f.service.claim('1');await f.service.finish('1',first.id,first.claimToken,{done:true,messageId:'first-message'});
 await f.service.observeMember('1',{discord_id:'old',joined_at:1002,present:false});
 await f.service.observeMember('1',{discord_id:'old',joined_at:1003,present:true});
 f.setNow(1004);const second=await f.service.claim('1');assert.equal(second?.kind,'promotion');assert.notEqual(second.id,first.id);
 assert.equal(f.jobs.get(first.id).messageId,'first-message');assert.deepEqual(second.previousMessageIds,['first-message']);
});
test('fresh work and older retries are processed before recently failed jobs',async()=>{
 const f=fixture();await f.service.configure('1',f.config);f.links.set('old','ESO');f.gangsters.add('old');
 const first=await f.service.claim('1');await f.service.finish('1',first.id,first.claimToken,{error:'permission problem'});
 f.links.set('new','ESO2');f.gangsters.add('new');f.setNow(1100);
 const next=await f.service.claim('1');assert.equal(next.userId,'new');
});
test('a missed rejoin restarts the reminder delay without losing new enrollment',async()=>{
 const f=fixture();await f.service.configure('1',f.config);await f.service.observeMember('1',{discord_id:'new',joined_at:1001});
 f.setNow(100000);const old=await f.service.claim('1');
 await f.service.observeMember('1',{discord_id:'new',joined_at:100001});f.setNow(100002);
 assert.equal((await f.service.validate('1',old.id,old.claimToken)).valid,false);
 await f.service.finish('1',old.id,old.claimToken,{cancelled:true});f.setNow(186401);
 assert.equal((await f.service.claim('1'))?.userId,'new');
});

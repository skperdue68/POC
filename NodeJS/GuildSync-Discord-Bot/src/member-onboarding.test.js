import test from 'node:test';
import assert from 'node:assert/strict';
import {Collection,PermissionFlagsBits,ChannelType} from 'discord.js';
import {processOnboardingDelivery,createOnboardingWorker} from './member-onboarding.js';
import {readOnboardingConfig} from './member-onboarding-config.js';

function fixture(kind='promotion') {
 const config=readOnboardingConfig({GUILDSYNC_ONBOARDING_ENABLED:'true',GUILDSYNC_ONBOARDING_CHANNEL_ID:'123'});
 const actions=[],progress=[],finishes=[],messages=new Collection();
 const roles=new Collection([['g',{id:'g',name:'Gangsters',editable:true}],['a',{id:'a',name:'Associates',editable:true}],['other',{id:'other',name:'Other',editable:true}]]);
 const member={id:'user',guild:{id:'guild'},user:{bot:false},manageable:true,joinedTimestamp:1001000,roles:{cache:new Collection([['g',roles.get('g')],['other',roles.get('other')]]),
  add:async id=>{actions.push('add:'+id);member.roles.cache.set(id,roles.get(id));},remove:async id=>{actions.push('remove:'+id);member.roles.cache.delete(id);}}};
 const permissions={has:()=>true};
 const thread={id:'thread',guildId:'guild',parentId:'123',type:ChannelType.PrivateThread,name:'guildsync-user',ownerId:'bot',archived:false,
  members:{add:async id=>actions.push('invite:'+id)},permissionsFor:()=>permissions,messages:{fetch:async()=>messages},
  send:async value=>{actions.push('send');messages.set('message',{id:'message',author:{id:'bot'},content:value.content,createdTimestamp:2000000});return{id:'message'};}};
 const parent={id:'123',guildId:'guild',type:ChannelType.GuildText,permissionsFor:()=>permissions,
  threads:{fetchActive:async()=>({threads:new Collection()}),fetchArchived:async()=>({threads:new Collection(),hasMore:false}),create:async options=>{assert.equal(options.type,ChannelType.PrivateThread);assert.equal(options.invitable,false);actions.push('create');return thread;}}};
 const guild={id:'guild',roles:{fetch:async()=>roles},members:{fetch:async()=>member}};
 const client={user:{id:'bot'},guilds:{fetch:async()=>guild},channels:{fetch:async id=>id==='123'?parent:thread}};
 let valid=true,notificationEnabled=true;
 const socket={connected:true,timeout(){return this;},emit(event,payload,cb){
  const action=event.split('-').at(-1);
  if(action==='progress')progress.push(payload.patch);
  if(action==='finish')finishes.push(payload.result);
  cb(null,{ok:true,result:action==='validate'?{valid,notificationEnabled,esoName:'ESO'}:{}});
 }};
 const job={id:'job',userId:'user',guildId:'guild',kind,claimToken:'claim',esoName:'ESO'};
 const context={client,socket,guildId:'guild',config,log:()=>{},now:()=>2000};
 return {config,actions,progress,finishes,messages,roles,member,parent,thread,guild,client,socket,job,context,setValid:v=>valid=v,setNotificationEnabled:v=>notificationEnabled=v};
}
test('promotion adds Associate before removing Gangster, preserving other roles, then privately notifies',async()=>{
 const f=fixture();await processOnboardingDelivery(f.context,f.job);
 assert.deepEqual(f.actions.slice(0,2),['add:a','remove:g']);assert.ok(f.member.roles.cache.has('other'));
 assert.equal(f.finishes.at(-1).done,true);assert.ok(f.progress.some(p=>p.roleChanged));
 assert.deepEqual(f.actions.slice(2),['create','invite:user','send']);
});
test('partial promotion retries removal and never announces premature success',async()=>{
 const f=fixture();f.member.roles.remove=async()=>{throw Error('cannot remove');};
 await processOnboardingDelivery(f.context,f.job);assert.equal(f.actions.includes('send'),false);assert.match(f.finishes.at(-1).error,/cannot remove/);
 f.member.roles.remove=async id=>{f.actions.push('remove:'+id);f.member.roles.cache.delete(id);};
 await processOnboardingDelivery(f.context,{...f.job,roleStarted:true});assert.equal(f.actions.filter(a=>a==='add:a').length,1);assert.equal(f.finishes.at(-1).done,true);
});
test('missing Gangster or unconfirmed links do not promote or send',async()=>{
 for(const cause of ['role','link']) {
  const f=fixture();if(cause==='role')f.member.roles.cache.delete('g');else f.setValid(false);
  await processOnboardingDelivery(f.context,f.job);assert.equal(f.actions.length,0);
 }
});
test('private thread reuse and accepted-message reconciliation avoid duplicates after acknowledgement failure',async()=>{
 const f=fixture('reminder');f.messages.set('old',{id:'old',author:{id:'bot'},content:'**Account linking reminder**\n<@user> reminder',createdTimestamp:2000000});
 await processOnboardingDelivery(f.context,{...f.job,threadId:'thread',content:'**Account linking reminder**\n<@user> reminder',attemptAt:1999});
 assert.equal(f.actions.includes('create'),false);assert.equal(f.actions.includes('send'),false);assert.equal(f.finishes.at(-1).messageId,'old');
});
test('permission or history failures never send publicly, and mentions are restricted',async()=>{
 const blocked=fixture('reminder');blocked.parent.permissionsFor=()=>({has:flag=>flag!==PermissionFlagsBits.ViewChannel});
 await processOnboardingDelivery(blocked.context,blocked.job);assert.equal(blocked.actions.includes('send'),false);assert.ok(blocked.finishes.at(-1).error);
 const history=fixture('reminder');history.thread.messages.fetch=async()=>{throw Error('history unavailable');};
 await processOnboardingDelivery(history.context,{...history.job,threadId:'thread',content:'old',attemptAt:1000});assert.equal(history.actions.includes('send'),false);
 const normal=fixture('reminder');normal.thread.send=async msg=>{assert.deepEqual(msg.allowedMentions,{parse:[],users:['user']});return{id:'message'};};
 await processOnboardingDelivery(normal.context,normal.job);assert.equal(normal.finishes.at(-1).done,true);
});
test('role-only promotion does not need notification permissions',async()=>{
 const f=fixture();f.config.promotionNotifyEnabled=false;await processOnboardingDelivery(f.context,f.job);
 assert.deepEqual(f.actions,['add:a','remove:g']);assert.equal(f.finishes.at(-1).done,true);
});
test('notification retry refuses changed destinations and handles missing members without notifying',async()=>{
 const moved=fixture('reminder');await processOnboardingDelivery(moved.context,{...moved.job,threadId:'thread',destinationId:'other',attemptAt:1000,content:'already attempted'});
 assert.equal(moved.actions.includes('send'),false);assert.match(moved.finishes.at(-1).error,/destination/);
 const gone=fixture('reminder');gone.guild.members.fetch=async()=>{throw Object.assign(Error('Unknown member'),{code:10007});};
 await processOnboardingDelivery(gone.context,gone.job);assert.equal(gone.finishes.at(-1).cancelled,true);assert.equal(gone.actions.length,0);
});
test('ambiguous role names and role hierarchy failures stop promotion',async()=>{
 const duplicate=fixture();duplicate.roles.set('g2',{id:'g2',name:'Gangsters',editable:true});
 await processOnboardingDelivery(duplicate.context,duplicate.job);assert.match(duplicate.finishes.at(-1).error,/unambiguous/);assert.equal(duplicate.actions.length,0);
 const hierarchy=fixture();hierarchy.roles.get('a').editable=false;
 await processOnboardingDelivery(hierarchy.context,hierarchy.job);assert.match(hierarchy.finishes.at(-1).error,/hierarchy/);assert.equal(hierarchy.actions.length,0);
});
test('existing private threads are discovered before copying and archived threads are reopened',async()=>{
 const f=fixture('reminder');f.thread.archived=true;f.thread.setArchived=async()=>{f.thread.archived=false;f.actions.push('unarchive');};
 f.parent.threads.fetchArchived=async()=>({threads:new Collection([['thread',f.thread]]),hasMore:false});
 await processOnboardingDelivery(f.context,f.job);assert.equal(f.actions.includes('create'),false);assert.ok(f.actions.includes('unarchive'));assert.equal(f.finishes.at(-1).done,true);
});
test('private archive pagination requests all private threads with timestamp cursor',async()=>{
 const f=fixture('reminder');let pages=0;
 f.parent.threads.fetchArchived=async options=>{
  assert.equal(options.fetchAll,true);
  if(pages++===0)return {threads:new Collection([['other',{id:'other',name:'other',archiveTimestamp:1500000}]]),hasMore:true};
  if(options.type==='private')assert.equal(options.before,1500000);return {threads:new Collection(),hasMore:false};
 };
 await processOnboardingDelivery(f.context,f.job);assert.equal(f.finishes.at(-1).done,true);assert.equal(pages,3);
});
test('message recovery does not adopt another recipient or a different delivery nonce',async()=>{
 for(const cause of ['recipient','nonce']) {
  const f=fixture('reminder');const content=cause==='recipient'?'Identical custom message':'**Account linking reminder**\n<@user> reminder';
  f.messages.set('wrong',{id:'wrong',author:{id:'bot'},content,createdTimestamp:2000000,...(cause==='nonce'?{nonce:'different-job'}:{})});
  await processOnboardingDelivery(f.context,{...f.job,threadId:'thread',content,attemptAt:1999});
  assert.notEqual(f.finishes.at(-1).messageId,'wrong');
 }
});
test('fresh join timestamps are observed and eligibility rechecked before notification',async()=>{
 const f=fixture('reminder');const emit=f.socket.emit;
 f.socket.emit=(event,payload,cb)=>{if(event.endsWith('observe')){assert.equal(payload.member.joined_at,1001);f.setValid(false);}emit(event,payload,cb);};
 await processOnboardingDelivery(f.context,f.job);assert.equal(f.actions.includes('send'),false);assert.equal(f.finishes.at(-1).cancelled,true);
});
test('disabled worker registers configuration but never observes or claims',async()=>{
 const events=new Map(),calls=[];const client={isReady:()=>true,on:(name,fn)=>events.set(name,fn),off(){}};
 const socket={connected:true,id:'socket',on(){},off(){},timeout(){return this;},emit(event,payload,cb){calls.push(event);cb(null,{ok:true,result:{}});}};
 const worker=createOnboardingWorker({client,socket,guildId:'123',config:readOnboardingConfig({}),log:()=>{}});
 await worker.tick();worker.stop();assert.deepEqual(calls,['guildsync:onboarding-configure']);
});

test('recovery excludes successful messages from earlier promotion generations',async()=>{
 const f=fixture('promotion');const content='**Account linked**\n<@user> linked';
 f.messages.set('prior',{id:'prior',author:{id:'bot'},content,createdTimestamp:2000000});
 await processOnboardingDelivery(f.context,{...f.job,threadId:'thread',content,attemptAt:1999,previousMessageIds:['prior']});
 assert.ok(f.actions.includes('send'));assert.notEqual(f.finishes.at(-1).messageId,'prior');
});

test('default role resolution promotes Gangsters to Associates',async()=>{
 const f=fixture();f.roles.get('g').name='Gangsters';f.roles.get('a').name='Associates';
 await processOnboardingDelivery(f.context,f.job);assert.equal(f.finishes.at(-1).done,true);assert.deepEqual(f.actions.slice(0,2),['add:a','remove:g']);
});

test('missing private-thread creation permission creates and reuses a public thread in the configured channel',async()=>{
 const f=fixture('reminder');f.parent.permissionsFor=()=>({has:flags=>!([].concat(flags).includes(PermissionFlagsBits.CreatePrivateThreads))});
 f.thread.type=ChannelType.PublicThread;f.parent.threads.create=async options=>{assert.equal(options.type,ChannelType.PublicThread);assert.equal(options.invitable,undefined);f.actions.push('create-public');return f.thread;};
 await processOnboardingDelivery(f.context,f.job);assert.equal(f.finishes.at(-1).done,true);assert.ok(f.actions.includes('create-public'));
 f.actions.length=0;await processOnboardingDelivery(f.context,{...f.job,threadId:'thread'});assert.equal(f.actions.includes('create-public'),false);assert.equal(f.finishes.at(-1).done,true);
});

test('private creation permission rejection falls back to a public thread but network failures do not',async()=>{
 for(const code of [50013,'ECONNRESET']) {
  const f=fixture('reminder');let calls=0;f.parent.threads.create=async options=>{calls++;if(options.type===ChannelType.PrivateThread)throw Object.assign(Error('create rejected'),{code});f.thread.type=ChannelType.PublicThread;return f.thread;};
  await processOnboardingDelivery(f.context,f.job);
  assert.equal(calls,code===50013?2:1);assert.equal(Boolean(f.finishes.at(-1).done),code===50013);
 }
});

test('a discovered public fallback is reused and unavailable public permission stops delivery',async()=>{
 const reuse=fixture('reminder');reuse.thread.type=ChannelType.PublicThread;reuse.parent.threads.fetchActive=async()=>({threads:new Collection([['thread',reuse.thread]])});
 await processOnboardingDelivery(reuse.context,reuse.job);assert.equal(reuse.actions.includes('create'),false);assert.equal(reuse.finishes.at(-1).done,true);
 const denied=fixture('reminder');denied.parent.permissionsFor=()=>({has:flags=>!([].concat(flags).some(flag=>[PermissionFlagsBits.CreatePrivateThreads,PermissionFlagsBits.CreatePublicThreads].includes(flag)))});
 await processOnboardingDelivery(denied.context,denied.job);assert.equal(denied.actions.includes('send'),false);assert.ok(denied.finishes.at(-1).error);
});

test('public fallback works without Manage Threads and privately enumerates only joined threads',async()=>{
 const f=fixture('reminder');f.parent.permissionsFor=()=>({has:flags=>!([].concat(flags).some(flag=>[PermissionFlagsBits.CreatePrivateThreads,PermissionFlagsBits.ManageThreads].includes(flag)))});
 f.parent.threads.fetchArchived=async options=>{if(options.type==='private')assert.equal(options.fetchAll,false);return {threads:new Collection(),hasMore:false};};
 f.thread.type=ChannelType.PublicThread;f.parent.threads.create=async options=>{assert.equal(options.type,ChannelType.PublicThread);return f.thread;};
 await processOnboardingDelivery(f.context,f.job);assert.equal(f.finishes.at(-1).done,true);
});

test('notification disable preserves role promotion but pauses the saved delivery before thread/send',async()=>{const f=fixture();f.setNotificationEnabled(false);await processOnboardingDelivery(f.context,f.job);assert.deepEqual(f.actions,['add:a','remove:g']);assert.match(f.finishes.at(-1).error,/notifications.*disabled/i);assert.equal(f.finishes.at(-1).done,undefined);});

test('higher guild ranks only lose Gangsters, never receive Associates or promotion notices',async()=>{
 for(const name of ['Soldier','Soldiers','Capo','Capos','Caporegime','Capo Regimes','Caporegieme','Caporegiemes','Consigliere','Consiglieri','Consiglieres','Kingpin','Kingpins','  SOLDIERS  ']) {
  const f=fixture();const higher={id:'higher',name,editable:false};f.roles.set(higher.id,higher);f.member.roles.cache.set(higher.id,higher);
  await processOnboardingDelivery(f.context,f.job);
  assert.deepEqual(f.actions,['remove:g'],name);assert.ok(f.member.roles.cache.has(higher.id),name);assert.ok(f.member.roles.cache.has('other'),name);
  assert.equal(f.member.roles.cache.has('a'),false,name);assert.equal(f.finishes.at(-1).done,true,name);assert.equal(f.finishes.at(-1).promoted,false,name);
 }
});
test('higher-rank cleanup does not require a manageable member or an editable Associate role',async()=>{
 const f=fixture();const higher={id:'higher',name:'Kingpin',editable:false};f.roles.set(higher.id,higher);f.member.roles.cache.set(higher.id,higher);f.member.manageable=false;f.roles.delete('a');
 await processOnboardingDelivery(f.context,f.job);assert.deepEqual(f.actions,['remove:g']);assert.equal(f.finishes.at(-1).done,true);
});
test('uncertain Gangsters removal resumes cleanup without adding Associates or notifying',async()=>{
 const f=fixture();const higher={id:'higher',name:'Soldiers',editable:false};f.roles.set(higher.id,higher);f.member.roles.cache.set(higher.id,higher);
 f.member.roles.remove=async id=>{f.actions.push('remove:'+id);f.member.roles.cache.delete(id);throw Error('uncertain acknowledgement');};
 await processOnboardingDelivery(f.context,f.job);assert.match(f.finishes.at(-1).error,/uncertain/);
 await processOnboardingDelivery(f.context,f.job);assert.deepEqual(f.actions,['remove:g']);assert.equal(f.finishes.at(-1).done,true);assert.equal(f.finishes.at(-1).promoted,false);
});
test('existing Associates are retained during higher-rank cleanup and uneditable Gangsters fail safely',async()=>{
 for(const editable of [true,false]){const f=fixture();const higher={id:'higher',name:'Capo',editable:false};f.roles.set(higher.id,higher);f.member.roles.cache.set(higher.id,higher);f.member.roles.cache.set('a',f.roles.get('a'));f.roles.get('g').editable=editable;
  await processOnboardingDelivery(f.context,f.job);assert.ok(f.member.roles.cache.has('a'));assert.ok(f.member.roles.cache.has('higher'));
  if(editable)assert.deepEqual(f.actions,['remove:g']);else{assert.deepEqual(f.actions,[]);assert.match(f.finishes.at(-1).error,/Gangsters/);}
 }
});

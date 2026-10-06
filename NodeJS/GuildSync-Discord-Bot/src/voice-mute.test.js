import test from 'node:test';
import assert from 'node:assert/strict';
import {createVoiceMuteController,createVoiceMuteWorker,readVoiceMuteConfig} from './voice-mute.js';
import {EventEmitter} from 'node:events';

test('worker logs received hotkey edges and rejection without heartbeat noise',async()=>{
 const f=fixture(),logs=[];f.guild.members.fetchMe=async()=>f.guild.members.me;
 const client=new EventEmitter();client.isReady=()=>true;client.user={id:'bot'};client.guilds={fetch:async()=>f.guild};
 const socket=new EventEmitter();socket.connected=true;socket.id='logging';socket.timeout=()=>({emit(_event,payload,ack){Promise.resolve(payload.action==='save'?f.store.save(payload.state):f.store.claim()).then(state=>ack(null,{ok:true,state}));}});
 const worker=createVoiceMuteWorker({client,socket,guildId:'g',config:readVoiceMuteConfig({GUILDSYNC_VOICE_MUTE_ENABLED:'true',GUILDSYNC_VOICE_MUTE_ALLOWED_ROLE_IDS:'allowed'}),log:message=>logs.push(message)});
 try {
  await worker.tick();const request=state=>new Promise(resolve=>socket.emit('guildsync:voice-mute-request',{state,sessionId:'debug',connectionId:'c',requesterId:'r'},resolve));
  assert.equal((await request('pressed')).ok,true);await request('heartbeat');assert.equal((await request('released')).ok,true);
  const received=logs.filter(line=>line.includes('Voice hotkey')&&line.includes('received'));assert.equal(received.length,2);assert.match(received[0],/pressed/);assert.match(received[0],/requester.*r/);assert.match(received[1],/released/);assert.equal(logs.some(line=>line.includes('heartbeat')),false);
  socket.connected=false;socket.emit('disconnect');assert.equal((await request('pressed')).ok,false);assert.ok(logs.some(line=>line.includes('Voice hotkey pressed rejected')));
 } finally {await worker.stop();}
});

test('heartbeats received during a slow mute keep the held session alive',async()=>{
 const f=fixture();f.member('next','soldiers');let finish,began;const begun=new Promise(resolve=>began=resolve),low=f.members.get('low');
 low.voice.setMute=async value=>{if(value){began();await new Promise(resolve=>finish=resolve);}low.voice.serverMute=value;};
 await f.controller.start();const pressing=f.press();await begun;f.advance(7000);
 const heartbeat=f.controller.request({state:'heartbeat',sessionId:'s',requesterId:'r',connectionId:'c'});f.advance(2000);finish();
 await Promise.all([pressing,heartbeat]);assert.equal(f.members.get('next').voice.serverMute,true);
});
test('a received release stops additional mutes before the slow request finishes',async()=>{
 const f=fixture();f.member('next','soldiers');let finish,began;const begun=new Promise(resolve=>began=resolve),low=f.members.get('low');
 low.voice.setMute=async value=>{if(value){began();await new Promise(resolve=>finish=resolve);}low.voice.serverMute=value;};
 await f.controller.start();const pressing=f.press();await begun;
 const release=f.controller.request({state:'released',sessionId:'s',requesterId:'r',connectionId:'c'});finish();
 await Promise.all([pressing,release]);assert.equal(f.calls.some(c=>c.id==='next'&&c.value),false);assert.equal(low.voice.serverMute,false);
});

test('worker renews its lease while initial audit reconciliation is still waiting',async()=>{
 const f=fixture();let finish,began;const begun=new Promise(resolve=>began=resolve),timers=[];
 f.guild.members.fetchMe=async()=>f.guild.members.me;
 f.guild.fetchAuditLogs=async()=>{began();await new Promise(resolve=>finish=resolve);return {entries:new Map()};};
 let claims=0;const client=new EventEmitter();client.isReady=()=>true;client.user={id:'bot'};client.guilds={fetch:async()=>f.guild};
 const socket=new EventEmitter();socket.connected=true;socket.id='one';socket.timeout=()=>({emit(_event,payload,ack){if(payload.action==='claim')claims++;Promise.resolve(payload.action==='save'?f.store.save(payload.state):f.store.claim()).then(state=>ack(null,{ok:true,state}));}});
 const worker=createVoiceMuteWorker({client,socket,guildId:'g',config:readVoiceMuteConfig({}),log:()=>{},setIntervalFn:(fn,ms)=>{timers.push({fn,ms});return {unref(){}};},clearIntervalFn:()=>{}});
 await begun;
 try {const renewal=timers.find(t=>t.ms===5000);assert.ok(renewal,'lease renewal is independent of startup');await renewal.fn();assert.ok(claims>=2);}
 finally {finish();f.guild.fetchAuditLogs=async()=>({entries:new Map()});await worker.stop();}
});

test('delayed older audit for a different member still updates moderator state',async()=>{
 const f=fixture();await f.controller.start();
 await f.controller.audit({id:'21',action:24,target:{id:'equal'},executor:{id:'mod'},changes:[{key:'mute',new:true}],createdTimestamp:100001});
 await f.controller.audit({id:'20',action:24,target:{id:'low'},executor:{id:'mod'},changes:[{key:'mute',new:true}],createdTimestamp:100000});
 assert.equal(f.state.moderatorMutes.some(m=>m.userId==='low'),true);
 await f.controller.audit({id:'19',action:24,target:{id:'low'},executor:{id:'mod'},changes:[{key:'mute',new:false}],createdTimestamp:99999});
 assert.equal(f.state.moderatorMutes.some(m=>m.userId==='low'),true);
});
test('channel entry reconciles a moderator unmute before restoring persisted mutes',async()=>{
 const f=fixture({revision:0,moderatorMutes:[{userId:'low',auditEntryId:'5'}],sessions:[],targets:[],auditCursor:'5'});await f.controller.start();
 f.guild.fetchAuditLogs=async()=>({entries:new Map([['6',{id:'6',action:24,target:{id:'low'},executor:{id:'mod'},changes:[{key:'mute',new:false}],createdTimestamp:100000}]])});
 await f.controller.channelChanged('low');assert.equal(f.calls.length,0);assert.equal(f.state.moderatorMutes.length,0);
});

function fixture(saved) {
 let time=100000, state=saved || {revision:0,moderatorMutes:[],sessions:[],targets:[]};
 const calls=[], logs=[], members=new Map();
 const member=(id,rank,channel='a',muted=false)=>{const m={id,user:{bot:false},roles:{cache:new Map([[rank,{id:rank,name:rank}]])},voice:{channelId:channel,serverMute:muted,async setMute(value,reason){calls.push({id,value,reason,stored:structuredClone(state)});m.voice.serverMute=value;}},manageable:true};members.set(id,m);return m;};
 const requester=member('r','kingpin'); requester.roles.cache.set('allowed',{id:'allowed'});
 member('low','soldiers');member('equal','kingpin');member('unknown','pretty');member('mod','soldiers','a',true);
 const guild={id:'g',ownerId:'owner',members:{fetch:async id=>members.get(id),me:{permissions:{has:()=>true}}},roles:{cache:new Map()},channels:{fetch:async id=>({id,permissionsFor:()=>({has:()=>true}),members:new Map([...members].filter(([,m])=>m.voice.channelId===id))})},fetchAuditLogs:async()=>({entries:new Map()})};
 const store={async claim(){return state;},async save(next){state=structuredClone({...next,revision:state.revision+1});return state;}};
 const controller=createVoiceMuteController({guild,botId:'bot',store,config:readVoiceMuteConfig({GUILDSYNC_VOICE_MUTE_ENABLED:'true',GUILDSYNC_VOICE_MUTE_ALLOWED_ROLE_IDS:'allowed'}),now:()=>time,log:s=>logs.push(s)});
 const press=(id='s',connectionId='c')=>controller.request({state:'pressed',sessionId:id,connectionId,requesterId:'r'});
 return {controller,press,calls,member,members,requester,logs,store,guild,get state(){return state;},advance:n=>time+=n};
}
test('disabled defaults and strictly lower guild ranks; durable intent precedes API',async()=>{
 assert.equal(readVoiceMuteConfig({}).enabled,false);
 const f=fixture();await f.controller.start();await f.press();assert.deepEqual(f.calls.map(c=>c.id),['low']);assert.equal(f.calls[0].stored.targets[0].state,'pending');
 await f.controller.request({state:'released',sessionId:'s',connectionId:'c',requesterId:'r'});assert.deepEqual(f.calls.map(c=>c.value),[true,false]);
});
test('heartbeat expiry cleans applied targets and a different connection cannot release',async()=>{
 const f=fixture();await f.controller.start();await f.press();await assert.rejects(f.controller.request({state:'released',sessionId:'s',connectionId:'other',requesterId:'r'}));f.advance(8001);await f.controller.tick();assert.equal(f.members.get('low').voice.serverMute,false);
});
test('late mute acknowledgement is followed by queued release cleanup',async()=>{
 const f=fixture();let finish, began;const begun=new Promise(r=>began=r);const low=f.members.get('low');low.voice.setMute=async value=>{f.calls.push({value});if(value){began();await new Promise(r=>finish=r);}low.voice.serverMute=value;};await f.controller.start();const pressing=f.press();await begun;const release=f.controller.request({state:'released',sessionId:'s',connectionId:'c',requesterId:'r'});finish();await Promise.all([pressing,release]);assert.equal(low.voice.serverMute,false);
});
test('external unmute overrides an active session; external mute remains after release',async()=>{
 const f=fixture();await f.controller.start();await f.press();f.members.get('low').voice.serverMute=false;await f.controller.audit({id:'10',action:24,target:{id:'low'},executor:{id:'moderator'},changes:[{key:'mute',new:false}],createdTimestamp:100001});await f.controller.channelChanged('low');assert.equal(f.calls.length,1);
 await f.controller.audit({id:'11',action:24,target:{id:'low'},executor:{id:'moderator'},changes:[{key:'mute',new:true}],createdTimestamp:100002});f.members.get('low').voice.serverMute=true;await f.controller.request({state:'released',sessionId:'s',connectionId:'c',requesterId:'r'});assert.equal(f.members.get('low').voice.serverMute,true);assert.equal(f.state.moderatorMutes.length,1);
});
test('restart cleans applied ownership but holds unknown pending ownership',async()=>{
 const f=fixture({revision:1,moderatorMutes:[],sessions:[{id:'old',state:'active',channelId:'a'}],targets:[{sessionId:'old',userId:'low',state:'applied'},{sessionId:'old',userId:'mod',state:'pending'}]});f.members.get('low').voice.serverMute=true;await f.controller.start();assert.equal(f.members.get('low').voice.serverMute,false);assert.equal(f.members.get('mod').voice.serverMute,true);assert.equal(f.state.targets[0].state,'unresolved');
});
test('unmute failure remains durable and retry clears it',async()=>{
 const f=fixture();await f.controller.start();await f.press();const m=f.members.get('low'),original=m.voice.setMute;let fail=true;m.voice.setMute=async(...a)=>{if(fail)throw Error('rate limit');return original(...a);};await f.controller.request({state:'released',sessionId:'s',connectionId:'c',requesterId:'r'});assert.equal(f.state.targets[0].state,'releasing');fail=false;f.advance(10000);await f.controller.tick();assert.equal(m.voice.serverMute,false);assert.equal(f.state.targets.length,0);
});
test('requester departure ends session without following; destination ownership transfers without flicker',async()=>{
 const f=fixture();await f.controller.start();await f.press();const other=f.member('r2','kingpin','b');other.roles.cache.set('allowed',{id:'allowed'});await f.controller.request({state:'pressed',sessionId:'s2',connectionId:'c2',requesterId:'r2'});f.members.get('low').voice.channelId='b';await f.controller.channelChanged('low');f.requester.voice.channelId='b';await f.controller.channelChanged('r');assert.deepEqual(f.calls.map(c=>c.value),[true]);assert.equal(f.state.targets[0].sessionId,'s2');await assert.rejects(f.controller.request({state:'heartbeat',sessionId:'s',connectionId:'c',requesterId:'r'}));
});
test('unattributed voice mute change holds cleanup until delayed audit attribution',async()=>{
 const f=fixture();await f.controller.start();await f.press();await f.controller.muteChanged('low',true,false);await f.controller.request({state:'released',sessionId:'s',connectionId:'c',requesterId:'r'});assert.equal(f.calls.length,1);await f.controller.audit({id:'21',action:24,target:{id:'low'},executor:{id:'mod'},changes:[{key:'mute',new:true}],createdTimestamp:100001});await f.controller.tick();assert.equal(f.calls.length,1);
});
test('target leaving active channel is cleaned; disconnected target waits for reconnect',async()=>{const f=fixture();await f.controller.start();await f.press();const low=f.members.get('low');low.voice.channelId=null;await f.controller.channelChanged('low');assert.equal(low.voice.serverMute,true);low.voice.channelId='outside';await f.controller.channelChanged('low');assert.equal(low.voice.serverMute,false);assert.equal(f.state.targets.length,0);});
test('paused backend refuses requests and performs no cleanup until durable restart',async()=>{const f=fixture();await f.controller.start();await f.press();f.controller.pause();await f.controller.tick();await assert.rejects(f.press('new'));assert.equal(f.calls.length,1);await f.controller.start();assert.equal(f.members.get('low').voice.serverMute,false);});
test('sessionless authenticated disconnect cleans connection ownership',async()=>{const f=fixture();await f.controller.start();await f.press();await f.controller.request({state:'disconnected',connectionId:'c',requesterId:'r'});assert.equal(f.members.get('low').voice.serverMute,false);});
test('failed durable pending save prevents all Discord changes',async()=>{const f=fixture();await f.controller.start();const save=f.store.save;f.store.save=async state=>{if(state.targets.length)throw Error('database unavailable');return save(state);};await assert.rejects(f.press(),/database unavailable/);assert.equal(f.calls.length,0);});
test('join policy excludes owner and bots and ends session on requester role loss',async()=>{const f=fixture();await f.controller.start();await f.press();const bot=f.member('robot','gangsters');bot.user.bot=true;f.member('owner','gangsters');await f.controller.channelChanged('robot');await f.controller.channelChanged('owner');const joiner=f.member('joiner','associates');await f.controller.channelChanged('joiner');assert.equal(joiner.voice.serverMute,true);assert.equal(f.calls.length,2);f.requester.roles.cache.delete('allowed');await f.controller.tick();assert.equal(joiner.voice.serverMute,false);assert.equal(f.members.get('low').voice.serverMute,false);});
test('worker pauses on disconnect and resumes durable cleanup after fresh claim',async()=>{
 const f=fixture();f.guild.members.fetchMe=async()=>f.guild.members.me;const client=new EventEmitter();client.isReady=()=>true;client.user={id:'bot'};client.guilds={fetch:async()=>f.guild};const socket=new EventEmitter();socket.connected=true;socket.id='one';socket.timeout=()=>({emit(_event,payload,ack){Promise.resolve(payload.action==='save'?f.store.save(payload.state):f.store.claim()).then(state=>ack(null,{ok:true,state}));}});const worker=createVoiceMuteWorker({client,socket,guildId:'g',config:readVoiceMuteConfig({GUILDSYNC_VOICE_MUTE_ENABLED:'true',GUILDSYNC_VOICE_MUTE_ALLOWED_ROLE_IDS:'allowed'}),log:()=>{}});
 await worker.tick();const request=payload=>new Promise(resolve=>socket.emit('guildsync:voice-mute-request',payload,resolve));assert.equal((await request({state:'pressed',sessionId:'w',connectionId:'c',requesterId:'r'})).ok,true);socket.connected=false;socket.emit('disconnect');assert.equal((await request({state:'pressed',sessionId:'no',connectionId:'c',requesterId:'r'})).ok,false);assert.equal(f.members.get('low').voice.serverMute,true);socket.id='two';socket.connected=true;await worker.tick();assert.equal(f.members.get('low').voice.serverMute,false);await worker.stop();assert.equal(socket.listenerCount('guildsync:voice-mute-request'),0);
});

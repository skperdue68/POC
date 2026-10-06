import test from 'node:test';
import assert from 'node:assert/strict';
import {registerVoiceMuteSocket} from './voice-mute-socket.js';

function harness(overrides={}) {
 const handlers=new Map(); const forwarded=[];
 const socket={id:'connection-1',guildSyncAuthenticated:true,guildSyncAuthType:'GuildSync user',guildSyncUser:{discord_user_id:'123',role:'user'},on:(event,fn)=>handlers.set(event,fn),...overrides};
 const store={claim:async()=>({revision:0}),read:async()=>({revision:1}),save:async()=>({revision:2}),release:async()=>{}};
 const bot={id:'bot-1',connected:true,guildSyncAuthenticated:true,guildSyncAuthType:'discord-bot',guildSyncBot:{guild_id:'999'},timeout:()=>({emit(event,payload,ack){forwarded.push({event,payload});ack(null,{ok:true,result:{channelId:'456'}});}})};
 registerVoiceMuteSocket(socket,store,{getBot:()=>bot,authorizeUser:async()=>true,now:()=>1000});
 return {socket,handlers,forwarded,store,call:async(event,payload)=>{let result;await handlers.get(event)(payload,r=>result=r);return result;}};
}
test('hotkey request uses authenticated identity, never the supplied identity/channel',async()=>{
 const h=harness();const result=await h.call('guildsync:voice-mute-hotkey',{state:'pressed',sessionId:'test-session',requesterId:'attacker',channelId:'other'});
 assert.equal(result.ok,true);assert.deepEqual(h.forwarded[0].payload,{state:'pressed',sessionId:'test-session',requesterId:'123',connectionId:'connection-1'});
});
test('unauthenticated and bot callers cannot use the client hotkey',async()=>{
 for(const override of [{guildSyncAuthenticated:false},{guildSyncAuthType:'discord-bot'}]) {const h=harness(override);assert.equal((await h.call('guildsync:voice-mute-hotkey',{state:'pressed',sessionId:'s'})).ok,false);assert.equal(h.forwarded.length,0);}
});
test('unapproved/revoked/viewer callers are checked at request time',async()=>{
 const h=harness();const handlers=new Map();registerVoiceMuteSocket({...h.socket,on:(event,fn)=>handlers.set(event,fn)},h.store,{getBot:()=>null,authorizeUser:async()=>false});
 let result;await handlers.get('guildsync:voice-mute-hotkey')({state:'pressed',sessionId:'s'},r=>result=r);assert.equal(result.ok,false);
});
test('rejects invalid states, session IDs and unavailable bots',async()=>{
 const h=harness();for(const p of [{state:'mute',sessionId:'s'},{state:'pressed',sessionId:''},{state:'pressed',sessionId:'x'.repeat(65)}])assert.equal((await h.call('guildsync:voice-mute-hotkey',p)).ok,false);
});
test('database snapshot RPC is restricted to a bot with its own numeric guild',async()=>{
 const h=harness();assert.equal((await h.call('guildsync:voice-mute-state',{action:'claim'})).ok,false);
 const b=harness({guildSyncAuthType:'discord-bot',guildSyncBot:{guild_id:'999'}});assert.equal((await b.call('guildsync:voice-mute-state',{action:'claim',guildId:'111'})).ok,false);
 const result=await b.call('guildsync:voice-mute-state',{action:'claim'});assert.equal(result.ok,true);assert.equal(result.state.revision,0);
});
test('client disconnect forwards cleanup independent of current account authorization',async()=>{
 const h=harness();await h.handlers.get('disconnect')();assert.equal(h.forwarded[0].payload.state,'disconnected');assert.equal(h.forwarded[0].payload.connectionId,'connection-1');
});

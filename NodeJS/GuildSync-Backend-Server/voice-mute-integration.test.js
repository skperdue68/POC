import test from 'node:test';
import assert from 'node:assert/strict';
import {registerVoiceMuteSocket} from './voice-mute-socket.js';
import {validateVoiceMuteSnapshot} from './voice-mute-store.js';
import {createVoiceMuteController,readVoiceMuteConfig} from '../GuildSync-Discord-Bot/src/voice-mute.js';

test('authenticated route and bot share a valid durable snapshot for press, moderation, move and disconnect',async()=>{
 let state={revision:0,moderatorMutes:[],sessions:[],targets:[],auditCursor:null};
 const store={claim:async()=>structuredClone(state),save:async next=>{validateVoiceMuteSnapshot(next);assert.equal(next.revision,state.revision);state=structuredClone({...next,revision:next.revision+1});return state;}};
 const calls=[],members=new Map();
 function member(id,role,name,channelId='50') {
  const m={id,user:{bot:false},roles:{cache:new Map([[role,{id:role,name}]])},voice:{channelId,serverMute:false,async setMute(value){calls.push({id,value});m.voice.serverMute=value;}},manageable:true};members.set(id,m);return m;
 }
 const requester=member('10','101','Kingpins'),target=member('20','102','Soldiers'),equal=member('30','101','Kingpins');
 const guild={id:'99',ownerId:'40',members:{fetch:async id=>members.get(id),me:{permissions:{has:()=>true}}},channels:{fetch:async id=>({id,permissionsFor:()=>({has:()=>true}),members:new Map([...members].filter(([,m])=>m.voice.channelId===id))})},fetchAuditLogs:async()=>({entries:new Map()})};
 const controller=createVoiceMuteController({guild,botId:'77',store,config:readVoiceMuteConfig({GUILDSYNC_VOICE_MUTE_ENABLED:'true',GUILDSYNC_VOICE_MUTE_ALLOWED_ROLE_IDS:'101'}),now:()=>100000,log:()=>{}});
 await controller.start();
 const bot={connected:true,guildSyncAuthenticated:true,guildSyncAuthType:'discord-bot',timeout:()=>({emit(event,payload,callback){controller.request(payload).then(result=>callback(null,{ok:true,result})).catch(error=>callback(null,{ok:false,message:error.message}));}})};
 const handlers=new Map();const socket={id:'connection-1',guildSyncAuthenticated:true,guildSyncAuthType:'GuildSync user',guildSyncUser:{discord_user_id:'10'},on:(key,handler)=>handlers.set(key,handler)};
 registerVoiceMuteSocket(socket,{}, {getBot:async()=>bot,authorizeUser:async()=>true});
 const request=payload=>new Promise(resolve=>handlers.get('guildsync:voice-mute-hotkey')(payload,resolve));
 assert.equal((await request({state:'pressed',sessionId:'session-1',requesterId:'30',channelId:'999'})).ok,true);
 assert.equal(target.voice.serverMute,true);assert.equal(equal.voice.serverMute,false);assert.equal(requester.voice.serverMute,false);assert.equal(state.targets[0].state,'applied');
 target.voice.channelId='51';await controller.channelChanged('20');assert.equal(target.voice.serverMute,false);
 target.voice.channelId='50';await controller.channelChanged('20');assert.equal(target.voice.serverMute,true);
 await controller.audit({id:'1000',action:24,executor:{id:'40'},target:{id:'20'},changes:[{key:'mute',new:true}],createdTimestamp:100001});
 await handlers.get('disconnect')();assert.equal(target.voice.serverMute,true);assert.equal(state.moderatorMutes[0].userId,'20');assert.equal(state.sessions[0].state,'ended');assert.equal(state.targets.length,0);
 assert.equal((await request({state:'heartbeat',sessionId:'session-1'})).ok,false);
});

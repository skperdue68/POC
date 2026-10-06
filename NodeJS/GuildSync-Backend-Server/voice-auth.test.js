import test from 'node:test';import assert from 'node:assert/strict';import jwt from 'jsonwebtoken';
import {createVoiceIdentityService,initializeVoiceIdentitySchema,registerVoiceIdentityRoutes,registerVoiceOnlyConnection,authorizeVoiceRequester,authenticateVoiceSocket} from './voice-auth.js';
import express from 'express';
import {readFileSync} from 'node:fs';import vm from 'node:vm';
import {canPerformGuildSyncEvent} from './role-permissions.js';
function database(){const trace=[],sessions=new Map();return {trace,query:async sql=>trace.push(sql),execute:async(sql,args)=>{trace.push(sql);if(sql.startsWith('INSERT INTO guildsync_voice_login_sessions'))sessions.set(args[0],args[1]);if(sql.startsWith('DELETE FROM guildsync_voice_login_sessions'))sessions.delete(args[0]);if(sql.startsWith('SELECT'))return [[...(sessions.get(args[0])===args[1]?[{session_id:args[0]}]:[])]];return [{}];}};}
test('standalone sessions use separate tables and cannot become GuildSync tokens',async()=>{
 const db=database();await initializeVoiceIdentitySchema(db);const service=createVoiceIdentityService(db,{secret:'test-secret'});
 const session=await service.issue({id:'123',username:'Discord member',global_name:'Member'});
 assert.equal((await service.verify(session.token)).sub,'123');assert.equal(session.user.role,'voice');
 assert.ok(db.trace.every(sql=>!sql.includes('guildsync_users')&&!sql.includes('guildsync_login_sessions ')));
 assert.throws(()=>jwt.verify(session.token,'test-secret',{issuer:'guildsync-auth-server',audience:'guildsync-desktop'}));
 await assert.rejects(service.verify(jwt.sign({sub:'123',jti:'other'},'test-secret',{issuer:'guildsync-auth-server',audience:'guildsync-desktop'})));
 await service.revoke(session.token);await assert.rejects(service.verify(session.token));
});
test('only explicit voice events are added to viewer permissions',()=>{
 assert.equal(canPerformGuildSyncEvent('viewer','guildsync:voice-mute-access'),true);
 assert.equal(canPerformGuildSyncEvent('viewer','guildsync:voice-mute-hotkey'),true);
 assert.equal(canPerformGuildSyncEvent('viewer','guildsync:voice-mute-state'),false);
 assert.equal(canPerformGuildSyncEvent('viewer','guildsync:change-user'),false);
});

test('voice socket authentication is explicit and rejects GuildSync tokens and missing credentials',async()=>{
 const service=createVoiceIdentityService(database(),{secret:'test-secret'}),session=await service.issue({id:'123',username:'Member'});
 const socket={handshake:{auth:{source:'voice-mute',token:session.token}}};assert.equal(await authenticateVoiceSocket(socket,service),true);
 assert.equal(socket.guildSyncAuthType,'voice-mute');assert.equal(socket.guildSyncUser.discord_user_id,'123');assert.equal(socket.guildSyncUser.role,'voice');
 await assert.rejects(authenticateVoiceSocket({handshake:{auth:{source:'voice-mute'}}},service));
 await assert.rejects(authenticateVoiceSocket({handshake:{auth:{source:'voice-mute',token:jwt.sign({sub:'123'},'test-secret',{audience:'guildsync-desktop',issuer:'guildsync-auth-server'})}}},service));
 assert.equal(await authenticateVoiceSocket({handshake:{auth:{token:session.token}}},service),false,'normal GuildSync authentication must independently reject its wrong audience');
});

test('an invalid legacy GuildSync token cannot disconnect a standalone voice session',async()=>{
 const source=readFileSync(new URL('./guildsync-backend-server.js',import.meta.url),'utf8');
 const start=source.indexOf('async function verifyGuildSyncSession(token)'),end=source.indexOf('function getBearerToken',start);
 let voiceDisconnected=false,guildDisconnected=false;
 const sockets=new Map([['voice',{guildSyncAuthType:'voice-mute',guildSyncUser:{discord_user_id:'123'},disconnect(){voiceDisconnected=true;}}],['guild',{guildSyncAuthType:'GuildSync user',guildSyncUser:{discord_user_id:'123'},disconnect(){guildDisconnected=true;}}]]);
 const context=vm.createContext({jwt:{verify:()=>({sub:'123',iat:1})},GUILDSYNC_JWT_SECRET:'secret',loginDB:{execute:async()=>[[]]},io:{sockets:{sockets}}});
 const verify=vm.runInContext(source.slice(start,end)+';verifyGuildSyncSession',context);
 await assert.rejects(verify('old-guildsync-token'),/logged out/);assert.equal(voiceDisconnected,false);assert.equal(guildDisconnected,true);
});
test('voice-only sockets register no GuildSync handlers or rooms',()=>{
 const handlers=new Map(),rooms=[],socket={guildSyncAuthType:'voice-mute',join:room=>rooms.push(room),on:(event,fn)=>handlers.set(event,fn),use:fn=>socket.middleware=fn};
 let normal=0;assert.equal(registerVoiceOnlyConnection(socket,s=>{s.on('guildsync:voice-mute-hotkey',()=>{});},()=>normal++),true);
 assert.equal(normal,0);assert.deepEqual(rooms,['GuildSyncVoiceClient']);assert.deepEqual([...handlers.keys()],['guildsync:voice-mute-hotkey']);
 let next=false,denied;socket.middleware(['guildsync:request-banking-data',{},r=>denied=r],()=>next=true);assert.equal(next,false);assert.equal(denied.ok,false);
 socket.middleware(['guildsync:voice-mute-hotkey',{}],()=>next=true);assert.equal(next,true);
});

test('voice request authorization permits approved viewers but rechecks approval and standalone session identity',async()=>{
 let allowed=1,queries=0;const loginDB={execute:async()=>{queries++;return [[{role:'viewer',allowed}]];}},roleViews={effective:(_,role)=>role};
 const socket={guildSyncAuthType:'GuildSync user',guildSyncUser:{discord_user_id:'123'}};
 assert.equal(await authorizeVoiceRequester(socket,{loginDB,roleViews}),true);allowed=0;assert.equal(await authorizeVoiceRequester(socket,{loginDB,roleViews}),false);
 socket.guildSyncAuthType='voice-mute';socket.guildSyncSessionId='session';socket.voiceSessionToken='token';
 const service={verify:async()=>({sub:'123',jti:'session'})};assert.equal(await authorizeVoiceRequester(socket,{service,loginDB,roleViews}),true);assert.equal(queries,2);
 socket.guildSyncUser.discord_user_id='456';assert.equal(await authorizeVoiceRequester(socket,{service,loginDB,roleViews}),false);
});

test('dedicated OAuth routes issue and revoke only voice sessions and enforce redirect URI',async t=>{
 const db=database(),service=createVoiceIdentityService(db,{secret:'test-secret'}),app=express();app.use(express.json());let exchanges=0,disconnected;
 registerVoiceIdentityRoutes(app,{service,redirectURI:'http://127.0.0.1:53682/callback',exchangeCode:async()=>{exchanges++;return {access_token:'discord-token'};},fetchUser:async()=>({id:'123',username:'No GuildSync Account'}),disconnect:id=>disconnected=id});
 const server=app.listen(0,'127.0.0.1');await new Promise(r=>server.once('listening',r));t.after(()=>{server.closeAllConnections();server.close();});const base='http://127.0.0.1:'+server.address().port;
 const post=body=>fetch(base+'/api/auth/discord/voice-token',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
 assert.equal((await post({code:'code',redirect_uri:'https://attacker'})).status,400);assert.equal(exchanges,0);
 const response=await post({code:'code',redirect_uri:'http://127.0.0.1:53682/callback'}),session=await response.json();assert.equal(session.allowed,true);
 const headers={Authorization:'Bearer '+session.token};assert.equal((await fetch(base+'/api/voice/auth/session',{headers})).status,200);
 assert.equal((await fetch(base+'/api/voice/auth/logout',{method:'POST',headers})).status,200);assert.equal(disconnected,jwt.decode(session.token).jti);
 assert.equal((await fetch(base+'/api/voice/auth/session',{headers})).status,401);
 assert.ok(db.trace.every(sql=>!sql.includes('guildsync_users')));
});

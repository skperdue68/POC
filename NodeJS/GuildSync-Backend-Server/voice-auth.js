import jwt from 'jsonwebtoken';
import {randomUUID} from 'node:crypto';

const audience='guildsync-voice-mute',issuer='guildsync-auth-server';
export async function initializeVoiceIdentitySchema(db){
 await db.query(`CREATE TABLE IF NOT EXISTS guildsync_voice_identities (
 discord_user_id VARCHAR(32) NOT NULL PRIMARY KEY, username VARCHAR(255) NOT NULL,
 global_name VARCHAR(255) NOT NULL DEFAULT '', avatar VARCHAR(128) NOT NULL DEFAULT '',
 updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);
 await db.query(`CREATE TABLE IF NOT EXISTS guildsync_voice_login_sessions (
 session_id VARCHAR(36) NOT NULL PRIMARY KEY, discord_user_id VARCHAR(32) NOT NULL,
 expires_at BIGINT NOT NULL, created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 FOREIGN KEY (discord_user_id) REFERENCES guildsync_voice_identities(discord_user_id) ON DELETE CASCADE
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);
}
export function createVoiceIdentityService(db,{secret}={}){
 if(!secret)throw Error('Voice authentication requires a signing secret.');
 const verify=async token=>{
  const claims=jwt.verify(token,secret,{issuer,audience,algorithms:['HS256']});
  if(claims.scope!=='voice-mute'||!/^\d{1,32}$/.test(claims.sub||'')||typeof claims.jti!=='string')throw Error('Invalid voice session.');
  const [rows]=await db.execute('SELECT session_id FROM guildsync_voice_login_sessions WHERE session_id = ? AND discord_user_id = ? AND expires_at > UNIX_TIMESTAMP()',[claims.jti,claims.sub]);
  if(!rows.length)throw Error('Voice session has ended.');
  return claims;
 };
 return {verify,
  async issue(discordUser){
   const id=String(discordUser.id||'');if(!/^\d{1,32}$/.test(id))throw Error('Discord did not return a valid identity.');
   const user={discord_user_id:id,username:String(discordUser.username||'').slice(0,255),global_name:String(discordUser.global_name||'').slice(0,255),role:'voice'};
   user.display_name=user.global_name||user.username;
   await db.execute('INSERT INTO guildsync_voice_identities (discord_user_id, username, global_name, avatar) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE username = VALUES(username), global_name = VALUES(global_name), avatar = VALUES(avatar)',[id,user.username,user.global_name,String(discordUser.avatar||'').slice(0,128)]);
   const jti=randomUUID(),token=jwt.sign({sub:id,jti,scope:'voice-mute',username:user.username,display_name:user.display_name},secret,{issuer,audience,expiresIn:'30d',algorithm:'HS256'});
   const exp=jwt.decode(token).exp;
   await db.execute('INSERT INTO guildsync_voice_login_sessions (session_id, discord_user_id, expires_at) VALUES (?, ?, ?)',[jti,id,exp]);
   return {ok:true,allowed:true,token,expires_at:new Date(exp*1000).toISOString(),user,message:'Signed in with Discord for voice mute.'};
  },
  async revoke(token){const claims=await verify(token);await db.execute('DELETE FROM guildsync_voice_login_sessions WHERE session_id = ? AND discord_user_id = ?',[claims.jti,claims.sub]);return claims;}
 };
}
export function registerVoiceIdentityRoutes(app,{service,exchangeCode,fetchUser,redirectURI,disconnect=()=>{}}){
 const bearer=req=>String(req.headers.authorization||'').replace(/^Bearer /i,'');
 app.post('/api/auth/discord/voice-token',async(req,res)=>{
  const {code,redirect_uri}=req.body||{};
  if(typeof code!=='string'||!code||code.length>4096||redirect_uri!==redirectURI)return res.status(400).json({ok:false,error:'Invalid Discord authorization code or redirect URI.'});
  try{const token=await exchangeCode(code,redirectURI);return res.json(await service.issue(await fetchUser(token.access_token)));}
  catch{return res.status(401).json({ok:false,error:'Discord voice login could not be verified. Please sign in again.'});}
 });
 app.get('/api/voice/auth/session',async(req,res)=>{
  try{const claims=await service.verify(bearer(req));return res.json({ok:true,user:{discord_user_id:claims.sub,username:claims.username,display_name:claims.display_name,role:'voice'}});}
  catch{return res.status(401).json({ok:false,message:'Voice session could not be verified. Sign in again.'});}
 });
 app.post('/api/voice/auth/logout',async(req,res)=>{
  try{const claims=await service.revoke(bearer(req));disconnect(claims.jti);return res.json({ok:true});}
  catch{return res.status(401).json({ok:false,message:'Voice session could not be revoked.'});}
 });
}
// Invoke before any GuildSync handlers/rooms/data are registered.
export function registerVoiceOnlyConnection(socket,registerVoice){
 if(socket.guildSyncAuthType!=='voice-mute')return false;
 socket.use?.((packet,next)=>{
  if(['guildsync:voice-mute-access','guildsync:voice-mute-hotkey'].includes(packet[0]))return next();
  const response={ok:false,message:'Standalone voice sessions cannot access GuildSync data.'};
  if(typeof packet.at(-1)==='function')packet.at(-1)(response);
 });
 registerVoice(socket);socket.join('GuildSyncVoiceClient');return true;
}

export async function authorizeVoiceRequester(socket,{service,loginDB,roleViews}){
 if(socket.guildSyncAuthType==='voice-mute'){
  const claims=await service.verify(socket.voiceSessionToken);
  return claims.sub===socket.guildSyncUser?.discord_user_id&&claims.jti===socket.guildSyncSessionId;
 }
 const [rows]=await loginDB.execute('SELECT role, allowed FROM guildsync_users WHERE discord_user_id = ? LIMIT 1',[socket.guildSyncUser.discord_user_id]);
 const role=roleViews.effective(socket.guildSyncRoleViewId,rows[0]?.role);
 return Number(rows[0]?.allowed)===1&&['viewer','user','admin'].includes(role);
}

export async function authenticateVoiceSocket(socket,service){
 const auth=socket.handshake.auth||{};if(auth.source!=='voice-mute')return false;
 if(typeof auth.token!=='string'||!auth.token||auth.token.length>8192)throw Error('Discord voice login is required.');
 const claims=await service.verify(auth.token);
 socket.guildSyncAuthenticated=true;socket.guildSyncAuthType='voice-mute';
 socket.guildSyncSessionId=claims.jti;socket.voiceSessionToken=auth.token;
 socket.guildSyncUser={discord_user_id:claims.sub,username:claims.username,display_name:claims.display_name,role:'voice'};
 return true;
}

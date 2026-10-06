// The client cannot select its requester, guild or channel. Discord decides the channel.
export function registerVoiceMuteSocket(socket, store, {getBot, authorizeUser, now=Date.now, log=()=>{}}) {
 let windowAt=0, requests=0;
 const reply=(callback,value)=>{if(typeof callback==='function')callback(value);};
 const forward=async payload=>{
  const bot=await getBot();
  if(!bot?.connected || !bot.guildSyncAuthenticated || bot.guildSyncAuthType!=='discord-bot')throw Error('Discord mute service is unavailable.');
  return new Promise((resolve,reject)=>{
  bot.timeout(15000).emit('guildsync:voice-mute-request',payload,(error,result)=>error?reject(Error('Discord mute request timed out; recovery will reconcile it.')):resolve(result || {ok:false,message:'Discord mute service did not respond.'}));
  });
 };
 socket.on('guildsync:voice-mute-hotkey',async(payload={},callback)=>{
  try {
   if(!socket.guildSyncAuthenticated || socket.guildSyncAuthType==='discord-bot' || !socket.guildSyncUser?.discord_user_id || !await authorizeUser(socket))throw Error('Approved User or Admin access is required for voice mute.');
   if(!payload || !['pressed','released','heartbeat'].includes(payload.state) || typeof payload.sessionId!=='string' || !/^[A-Za-z0-9_-]{1,64}$/.test(payload.sessionId))throw Error('Invalid voice mute request.');
   if(now()-windowAt>=10000){windowAt=now();requests=0;}
   if(++requests>100)throw Error('Too many voice mute requests. Release the shortcut and try again.');
   reply(callback,await forward({state:payload.state,sessionId:payload.sessionId,requesterId:socket.guildSyncUser.discord_user_id,connectionId:socket.id}));
  }catch(error){reply(callback,{ok:false,message:error.message});}
 });
 socket.on('guildsync:voice-mute-state',async(payload={},callback)=>{
  try {
   const guildId=socket.guildSyncBot?.guild_id;
   if(!socket.guildSyncAuthenticated || socket.guildSyncAuthType!=='discord-bot' || !/^\d{1,32}$/.test(guildId || '') || (payload.guildId && payload.guildId!==guildId))throw Error('Authenticated bot for this guild required.');
   if(!['claim','read','save'].includes(payload.action))throw Error('Invalid voice mute storage action.');
   const state=payload.action==='save'?await store.save(guildId,socket.id,payload.state):await store[payload.action](guildId,socket.id);
   reply(callback,{ok:true,state});
  }catch(error){reply(callback,{ok:false,message:error.message});}
 });
 socket.on('disconnect',async()=>{
  try {
   if(socket.guildSyncAuthType==='discord-bot')await store.release(socket.guildSyncBot?.guild_id,socket.id);
   else if(socket.guildSyncAuthenticated && socket.guildSyncUser?.discord_user_id)await forward({state:'disconnected',requesterId:socket.guildSyncUser.discord_user_id,connectionId:socket.id});
  }catch(error){log('Voice mute disconnect cleanup deferred to lease expiry: '+error.message);}
 });
}

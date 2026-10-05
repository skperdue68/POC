export function registerDiscordOnboardingSocket(socket,service) {
 const actions={configure:async p=>{
  if(!/^\d+$/.test(p.guildId || ''))throw Error('Invalid onboarding guild ID.');
  if(socket.guildSyncBot?.guild_id && socket.guildSyncBot.guild_id!==p.guildId)throw Error('Onboarding guild mismatch.');
  if(socket.onboardingGuildId && socket.onboardingGuildId!==p.guildId)throw Error('Onboarding guild mismatch.');
  const result=await service.configure(p.guildId,p.config);socket.onboardingGuildId=p.guildId;return result;
 },observe:p=>service.observeMember(p.guildId,p.member),claim:p=>service.claim(p.guildId),validate:p=>service.validate(p.guildId,p.deliveryId,p.claimToken),
 progress:p=>service.progress(p.guildId,p.deliveryId,p.claimToken,p.patch || {}),finish:p=>service.finish(p.guildId,p.deliveryId,p.claimToken,p.result || {})};
 for(const [action,fn]of Object.entries(actions))socket.on('guildsync:onboarding-'+action,async(payload={},callback)=>{
  if(typeof callback!=='function')return;
  try {
   if(!socket.guildSyncAuthenticated || socket.guildSyncAuthType!=='discord-bot')throw Error('Authenticated Discord bot required.');
   if(action!=='configure' && (!socket.onboardingGuildId || socket.onboardingGuildId!==payload.guildId))throw Error('Onboarding guild mismatch; configure first.');
   callback({ok:true,result:await fn(payload)});
  }catch(error){callback({ok:false,message:error.message});}
 });
}

export function registerConfigurationSocket(socket,service,{authorizeAdmin,authorizeViewer=authorizeAdmin,broadcast=()=>{}}){
 const handler=(event,authorize,action)=>socket.on(event,async(payload={},callback)=>{
  if(typeof callback!=='function')return;
  try {await authorize();callback({ok:true,configuration:await action(payload)});}catch(error){callback({ok:false,message:error.message});}
 });
 const admin=async()=>{if(!socket.guildSyncAuthenticated||socket.guildSyncAuthType==='discord-bot'||!socket.guildSyncUser?.discord_user_id||!await authorizeAdmin(socket.guildSyncUser.discord_user_id))throw Error('Admin access is required to manage configuration.');};
 const viewer=async()=>{if(!socket.guildSyncAuthenticated||socket.guildSyncAuthType==='discord-bot'||!socket.guildSyncUser?.discord_user_id||!await authorizeViewer(socket.guildSyncUser.discord_user_id))throw Error('Approved GuildSync access is required to view configuration.');};
 const bot=async()=>{if(!socket.guildSyncAuthenticated||socket.guildSyncAuthType!=='discord-bot')throw Error('Authenticated Discord bot required.');};
 handler('guildsync:request-admin-configuration',viewer,()=>service.view());
 handler('guildsync:save-admin-configuration',admin,async p=>{const view=await service.save(p);broadcast(await service.botConfiguration());return view;});
 handler('guildsync:request-bot-configuration',bot,()=>service.botConfiguration());
 handler('guildsync:register-configuration-defaults',bot,async p=>{await service.registerBotDefaults(p.defaults || {});return service.botConfiguration();});
}

import {Events,AuditLogEvent,PermissionFlagsBits} from 'discord.js';
const csv=value=>String(value || '').split(',').map(s=>s.trim()).filter(Boolean);
export function readVoiceMuteConfig(env=process.env){return {enabled:String(env.GUILDSYNC_VOICE_MUTE_ENABLED).toLowerCase()==='true',allowedRoleIds:csv(env.GUILDSYNC_VOICE_MUTE_ALLOWED_ROLE_IDS),rankRoleIds:csv(env.GUILDSYNC_VOICE_MUTE_RANK_ROLE_IDS)};}
const ranks=[['gangster','gangsters'],['associate','associates'],['soldier','soldiers'],['capo','capos'],['caporegime','caporegimes','caporegieme','caporegiemes'],['consigliere','consiglieri','consiglieres'],['kingpin','kingpins']];
function matchesRole(role,ref){return String(role.id)===ref || (!/^\d+$/.test(ref)&&String(role.name || '').trim().toLowerCase()===ref.trim().toLowerCase());}
function hasAllowedRole(member,config){return config.allowedRoleIds.some(ref=>[...member.roles.cache.values()].some(role=>matchesRole(role,ref)));}
function rank(member,config){let result=-1;for(const role of member.roles.cache.values()){const n=config.rankRoleIds.length?config.rankRoleIds.findIndex(ref=>matchesRole(role,ref)):ranks.findIndex(a=>a.includes(String(role.name || '').toLowerCase().replace(/[^a-z0-9]/g,'')));result=Math.max(result,n);}return result;}
export function voiceMuteAccessReason(config,member){
 if(!config.enabled)return 'Voice mute is disabled.';
 if(!member)return 'Discord membership could not be found.';
 if(member.user.bot)return 'Bot accounts cannot request voice mute.';
 if(!hasAllowedRole(member,config))return 'None of your Discord roles match the allowed voice-mute roles.';
 if(rank(member,config)<0)return 'Your Discord guild rank is not recognized; check the configured rank order.';
 return 'Voice mute access is allowed.';
}
export function voiceMuteAccess(config,member){return {enabled:config.enabled,allowed:voiceMuteAccessReason(config,member)==='Voice mute access is allowed.'};}
export function createVoiceMuteController({guild,botId,store,config,now=Date.now,log=console.log}) {
 let state,ready=false,paused=false,tail=Promise.resolve(),lastAuditAt=0;const ownChanges=new Map(),heartbeatReceipts=new Map(),endSignals=new Map();
 const serial=fn=>{const job=tail.then(fn);tail=job.catch(()=>{});return job;};
 const persist=async()=>{try{const saved=await store.save(state);state.revision=saved.revision;}catch(error){ready=false;throw error;}};
 const active=id=>state.sessions.find(s=>s.id===id&&s.state==='active'&&
  !(endSignals.get(id)?.connectionId===s.connectionId&&endSignals.get(id)?.requesterId===s.requesterId)&&
  Math.max(s.expiresAt,(heartbeatReceipts.get(id)||0)+8000)>now());
 const moderator=id=>state.moderatorMutes.some(m=>m.userId===id);
 const fetchMember=async id=>{try{return await guild.members.fetch(id);}catch(error){if(error.code===10007)return null;throw error;}};
 const authorized=member=>voiceMuteAccess({...config,enabled:true},member).allowed;
 async function skipReason(member,session){
  const requester=await fetchMember(session.requesterId);
  if(!authorized(requester))return 'Requester no longer has an allowed role and recognized guild rank.';
  if(requester.voice.channelId!==session.channelId)return 'Requester has left the session voice channel.';
  if(member.voice.channelId!==session.channelId)return 'Member is no longer in the session voice channel.';
  if(member.id===requester.id)return 'Requester is never muted.';
  if(member.user.bot)return 'Bot accounts are protected.';
  if(member.id===guild.ownerId)return 'Server owner is protected.';
  const r=rank(requester,config),t=rank(member,config);
  if(t<0)return 'Member guild rank is unrecognized; unknown ranks are protected.';
  if(r<=t)return 'Member guild rank is equal to or higher than requester rank.';
  if(member.manageable===false)return 'Bot role hierarchy cannot manage this member.';
  return null;
 }
 async function permitted(member,session){return !await skipReason(member,session);}
 function targetLog(session,member,outcome,reason){log('Voice mute member '+outcome+' '+JSON.stringify({guildName:guild.name,guildId:guild.id,channelName:session.channelName||guild.channels.cache?.get(session.channelId)?.name||'Unknown channel',channelId:session.channelId,requesterId:session.requesterId,requesterName:guild.members.cache?.get(session.requesterId)?.displayName,memberId:member.id,memberName:member.displayName||member.user.globalName||member.user.username||member.id,memberRank:rank(member,config),memberRoles:[...member.roles.cache.values()].map(role=>role.name||role.id),sessionId:session.id,reason}));}
 async function permissions(channel){if(!guild.members.me?.permissions.has(PermissionFlagsBits.ViewAuditLog)||!channel.permissionsFor(guild.members.me)?.has(PermissionFlagsBits.MuteMembers))throw Error('Voice mute requires View Audit Log and Mute Members permissions.');}
 async function auditEntry(entry,save=true) {
  if(entry.action!==AuditLogEvent.MemberUpdate || state.auditState.seenIds.includes(entry.id))return false;
  const change=entry.changes?.find(c=>c.key==='mute');
  // Unknown actors are retried on later history reads, never silently attributed.
  if(change && (!entry.executor?.id || !entry.target?.id))return false;
  state.auditState.seenIds.push(entry.id);
  state.auditState.seenIds=state.auditState.seenIds.slice(-10000);
  if(!state.auditCursor || BigInt(entry.id)>BigInt(state.auditCursor))state.auditCursor=entry.id;
  if(change && typeof change.new==='boolean') {
   const id=entry.target.id;
   if(entry.executor.id!==botId) {
    const last=state.auditState.lastExternalByUser[id];
    if(!last || BigInt(entry.id)>BigInt(last)) {
     state.auditState.lastExternalByUser[id]=entry.id;
     state.moderatorMutes=state.moderatorMutes.filter(m=>m.userId!==id);
     if(change.new)state.moderatorMutes.push({userId:id,actorId:entry.executor.id,mutedAt:entry.createdTimestamp,reason:entry.reason || '',auditEntryId:entry.id});
     for(const t of state.targets.filter(t=>t.userId===id)) {
      // An old unmute predating this feature's mute is not a current override.
      if(change.new || entry.createdTimestamp >= (t.createdAt || t.appliedAt || t.lastAttemptAt || 0)) {
       t.externalOverride=true;t.auditHold=false;t.state='overridden';
      }
     }
    }
   }else {
    const t=state.targets.find(t=>t.userId===id && entry.reason===(t.muteReason || 'GuildSync voice '+t.sessionId));
    if(t){t.auditHold=false;if(change.new && ['pending','unresolved'].includes(t.state)){t.state='applied';t.appliedAt=entry.createdTimestamp;t.uncertain=false;}}
   }
  }
  if(save)await persist();
  return true;
 }
 async function audits(force=true) {
  if(!force && now()-lastAuditAt<5000)return;
  // Read an overlapping 15-minute window to catch delayed/out-of-order entries.
  const overlap=BigInt(15*60*1000)<<22n;
  const cursor=state.auditCursor?BigInt(state.auditCursor):0n;
  const cutoff=cursor>overlap?cursor-overlap:0n;
  const entries=[];let before;
  for(let page=0;;page++) {
   const batch=[...(await guild.fetchAuditLogs({type:AuditLogEvent.MemberUpdate,limit:100,...(before?{before}:{})})).entries.values()];
   entries.push(...batch.filter(e=>BigInt(e.id)>=cutoff));
   if(batch.length<100 || batch.some(e=>BigInt(e.id)<cutoff))break;
   if(page>=99)throw Error('Audit history exceeds reconciliation window; retaining mutes for review.');
   before=batch.reduce((a,e)=>BigInt(a)<BigInt(e.id)?a:e.id,batch[0].id);
  }
  let changed=false;
  for(const e of entries.sort((a,b)=>BigInt(a.id)<BigInt(b.id)?-1:1))changed=await auditEntry(e,false)||changed;
  if(changed)await persist();
  lastAuditAt=now();
 }
 async function mute(session,member){
  const reason=!active(session.id)?'Session ended or expired.':await skipReason(member,session);
  if(reason){targetLog(session,member,'skipped',reason);return;}
  if(moderator(member.id)){targetLog(session,member,'skipped','Existing moderator mute is protected.');return;}
  let owned=state.targets.find(t=>t.userId===member.id);
  if(owned){if(owned.externalOverride || owned.uncertain){targetLog(session,member,'skipped',owned.externalOverride?'External moderation overrides this session.':'Previous mute API outcome is uncertain; awaiting reconciliation.');return;}if(owned.state==='applied'){owned.sessionId=session.id;await persist();}targetLog(session,member,'skipped','Member already tracked by a voice mute session ('+owned.state+').');return;}
  if(member.voice.serverMute){targetLog(session,member,'skipped','Member is already server-muted; existing mute is preserved.');return;}
  const channel=await guild.channels.fetch(session.channelId);await permissions(channel);
  owned={sessionId:session.id,userId:member.id,state:'pending',createdAt:now(),lastAttemptAt:now(),muteReason:'GuildSync voice '+session.id};state.targets.push(owned);await persist();
  // Durable intent is the boundary: an uncertain API outcome can never authorize an unmute.
  if(paused||!ready){targetLog(session,member,'skipped','Worker paused or backend unavailable before mute.');return;}
  const lateReason=!active(session.id)?'Session ended before mute.':await skipReason(member,session);
  if(lateReason){state.targets=state.targets.filter(t=>t!==owned);await persist();targetLog(session,member,'skipped',lateReason);return;}
  if(paused||!ready){targetLog(session,member,'skipped','Worker paused or backend unavailable before mute.');return;}
  targetLog(session,member,'attempting','Eligible lower-ranked member; requesting Discord server mute.');
  try{ownChanges.set(member.id,{value:true,expiresAt:now()+30000});await member.voice.setMute(true,'GuildSync voice '+session.id);owned.state='applied';owned.appliedAt=now();await persist();targetLog(session,member,'applied','Discord mute request succeeded.');}catch(error){owned.state='unresolved';owned.uncertain=true;owned.lastError=error.message;await persist();targetLog(session,member,'failed',error.message);log('Voice mute uncertain '+member.id+': '+error.message);}
 }
 async function cleanup(){for(const target of [...state.targets]){
  if(paused||!ready)return;
  if(target.externalOverride&&active(target.sessionId))continue;
  if(target.externalOverride || moderator(target.userId)){state.targets=state.targets.filter(t=>t!==target);await persist();continue;}
  if(target.state==='pending'||target.uncertain){target.state='unresolved';target.uncertain=true;await persist();log('Voice mute retained uncertain ownership '+target.userId+'/'+target.sessionId);continue;}
  const member=await fetchMember(target.userId);if(!member?.voice.channelId)continue;
  const owner=active(target.sessionId);if(owner&&config.enabled&&member.voice.channelId===owner.channelId&&await permitted(member,owner))continue;
  const destination=state.sessions.find(s=>s.channelId===member.voice.channelId&&active(s.id));if(destination&&await permitted(member,destination)){target.sessionId=destination.id;await persist();continue;}
  if(target.lastAttemptAt && target.state==='releasing' && now()-target.lastAttemptAt<5000)continue;
  // Fetch attribution immediately before clearing any feature-owned mute.
  try{await audits();}catch(error){log('Voice mute cleanup waiting for audit history: '+error.message);continue;}
  if(moderator(target.userId)||target.externalOverride||target.auditHold)continue;
  target.state='releasing';target.lastAttemptAt=now();await persist();
  try{if(member.voice.serverMute){await permissions(await guild.channels.fetch(member.voice.channelId));if(paused||!ready)return;ownChanges.set(member.id,{value:false,expiresAt:now()+30000});await member.voice.setMute(false,'GuildSync voice '+target.sessionId+' cleanup');}state.targets=state.targets.filter(t=>t!==target);await persist();}catch(error){target.lastError=error.message;await persist();log('Voice mute cleanup retry '+target.userId+': '+error.message);}
 }}
 async function end(session){session.state='ended';session.endedAt=now();await persist();await cleanup();}
 return {
  start:()=>serial(async()=>{paused=false;ready=false;state=await store.claim();state.moderatorMutes ||= [];state.sessions ||= [];state.targets ||= [];state.auditState ||= {seenIds:[],lastExternalByUser:Object.fromEntries(state.moderatorMutes.filter(m=>m.auditEntryId).map(m=>[m.userId,m.auditEntryId]))};for(const s of state.sessions)s.state='ended';for(const t of state.targets)if(t.state==='pending'){t.state='unresolved';t.uncertain=true;}ready=true;await persist();await audits();await cleanup();}),
  pause(){paused=true;ready=false;},
  isReady:()=>ready&&!paused,
  drain:()=>tail,
  request(payload){
   const receivedAt=now(),record=state?.sessions.find(s=>s.id===payload.sessionId);
   const ownsRecord=record&&record.connectionId===payload.connectionId&&record.requesterId===payload.requesterId;
   // Receipt signals are independent of slow API work. Durable writes remain serialized.
   if(ready&&!paused&&ownsRecord&&payload.state==='heartbeat'&&active(record.id))heartbeatReceipts.set(record.id,receivedAt);
   if(ready&&!paused&&payload.state==='released'&&(!record||ownsRecord))endSignals.set(payload.sessionId,{connectionId:payload.connectionId,requesterId:payload.requesterId});
   if(ready&&!paused&&payload.state==='disconnected')for(const s of state.sessions.filter(s=>s.connectionId===payload.connectionId&&s.requesterId===payload.requesterId))endSignals.set(s.id,{connectionId:s.connectionId,requesterId:s.requesterId});
   return serial(async()=>{if(paused||!ready)throw Error('Voice mute backend is unavailable.');const {sessionId,connectionId,requesterId}=payload;if(payload.state==='disconnected'&&connectionId&&requesterId){for(const s of state.sessions.filter(s=>s.connectionId===connectionId&&s.requesterId===requesterId&&s.state==='active'))await end(s);return {state:'released'};}if(!sessionId||!connectionId||!requesterId)throw Error('Invalid voice mute session.');const existing=state.sessions.find(s=>s.id===sessionId);if(existing&&(existing.connectionId!==connectionId||existing.requesterId!==requesterId))throw Error('Voice mute session belongs to another connection.');
   if(payload.state==='released'||payload.state==='disconnected'){if(existing)await end(existing);return {state:'released'};}
   if(payload.state==='heartbeat'){if(!existing || !active(sessionId))throw Error('Voice mute session has ended; release and press again.');const member=await fetchMember(requesterId);if(!authorized(member)||member.voice.channelId!==existing.channelId){await end(existing);throw Error('Voice mute session authorization ended; release and press again.');}existing.lastHeartbeatAt=Math.max(receivedAt,heartbeatReceipts.get(sessionId)||0);existing.expiresAt=existing.lastHeartbeatAt+8000;await persist();return {state:'active'};}
   if(payload.state!=='pressed')throw Error('Invalid voice mute state.');if(existing){if(active(sessionId))return {state:'active'};throw Error('Voice mute session has ended; release and press again.');}
   if(!config.enabled)throw Error('Voice mute is disabled.');const member=await fetchMember(requesterId);
   if(!member)throw Error('Your Discord account is not a member of this server.');
   if(member.user.bot)throw Error('Bot accounts cannot request voice mute.');
   if(!hasAllowedRole(member,config))throw Error('None of your Discord roles match the allowed voice-mute roles.');
   if(rank(member,config)<0)throw Error('Your Discord guild rank is not recognized; check the configured rank order.');
   if(!member.voice.channelId)throw Error('Join a Discord voice channel before using the mute hotkey.');
   const channel=await guild.channels.fetch(member.voice.channelId);await permissions(channel);if(state.sessions.some(s=>s.channelId===channel.id&&active(s.id)))throw Error('This voice channel already has an active session.');
   log('Voice mute channel selected '+JSON.stringify({guildName:guild.name,guildId:guild.id,requesterName:member.displayName||member.user.username,requesterId,requesterRank:rank(member,config),channelName:channel.name,channelId:channel.id,memberCount:channel.members.size,sessionId}));
   const session={id:sessionId,channelId:channel.id,channelName:channel.name,requesterId,connectionId,lastHeartbeatAt:now(),expiresAt:now()+8000,state:'active'};state.sessions.push(session);await persist();for(const m of channel.members.values()){if(paused)break;await mute(session,m);}return {state:'active',channelId:channel.id};
  });},
  tick:()=>serial(async()=>{if(paused||!ready)return;for(const s of state.sessions.filter(s=>s.state==='active')){const member=await fetchMember(s.requesterId);if(!config.enabled||!authorized(member)||!active(s.id)||member?.voice.channelId!==s.channelId){s.state='ended';s.endedAt=now();await persist();}}await audits(false);await cleanup();const retained=state.sessions.filter(s=>s.state==='active'||state.targets.some(t=>t.sessionId===s.id)||now()-(s.endedAt || s.expiresAt || now())<60000);if(retained.length!==state.sessions.length){const retainedIds=new Set(retained.map(s=>s.id));for(const map of [heartbeatReceipts,endSignals])for(const id of map.keys())if(!retainedIds.has(id))map.delete(id);state.sessions=retained;await persist();}}),
  audit:entry=>serial(async()=>{if(ready&&!paused){await audits();await auditEntry(entry);}}),
  muteChanged(id,value,recognizeOwn=true){const own=ownChanges.get(id);if(recognizeOwn&&own?.value===value&&own.expiresAt>=now()){ownChanges.delete(id);return Promise.resolve();}return serial(async()=>{if(!ready||paused)return;for(const target of state.targets.filter(t=>t.userId===id))target.auditHold=true;await persist();await audits();});},
  channelChanged:id=>serial(async()=>{if(paused||!ready)return;await audits();const member=await fetchMember(id);for(const s of state.sessions.filter(s=>s.requesterId===id&&s.state==='active'&&member?.voice.channelId!==s.channelId)){s.state='ended';await persist();}await cleanup();if(!member?.voice.channelId)return;const session=state.sessions.find(s=>s.channelId===member.voice.channelId&&active(s.id));if(session)await mute(session,member);})
 };
}

export function createVoiceMuteWorker({client,socket,guildId,config,log=console.log,setIntervalFn=setInterval,clearIntervalFn=clearInterval}) {
 let controller,recovering,stopped=false,starting,connectionId,leased=false,renewing=false,ticking=false;
 const rpc=(action,state)=>new Promise((resolve,reject)=>{
  if(!socket.connected)return reject(Error('Voice mute backend disconnected.'));
  const identity=socket.id;
  socket.timeout(15000).emit('guildsync:voice-mute-state',{action,state},(error,response)=>{
   if(error)return reject(error);
   if(!socket.connected || socket.id!==identity)return reject(Error('Voice mute backend connection changed.'));
   if(!response?.ok)return reject(Error(response?.message || 'Voice mute state unavailable.'));
   if(action==='claim')leased=true;
   resolve(response.state);
  });
 });
 const pause=()=>{controller?.pause();recovering?.pause();controller=undefined;leased=false;connectionId=undefined;};
 const start=async()=>{
  if(stopped||!client.isReady()||!socket.connected)return;
  if(starting)return starting;
  const identity=socket.id;
  starting=(async()=>{
   try {
    const guild=await client.guilds.fetch(guildId);await guild.members.fetchMe();
    if(stopped||identity!==socket.id||!socket.connected)return;
    const next=createVoiceMuteController({guild,botId:client.user.id,config,log,store:{claim:()=>rpc('claim'),save:state=>rpc('save',state)}});
    recovering=next;await next.start();
    if(stopped||!socket.connected||identity!==socket.id||!next.isReady()){next.pause();return;}
    controller=next;connectionId=identity;
   }catch(error){pause();log('Voice mute startup deferred: '+error.message);}
   finally{recovering=undefined;starting=undefined;}
  })();
  return starting;
 };
 // This timer runs during startup and slow Discord calls, independent of the controller queue.
 const renew=async()=>{
  if(stopped||!leased||renewing||!socket.connected)return;
  renewing=true;
  try{await rpc('claim');}catch(error){pause();log('Voice mute lease lost: '+error.message);}finally{renewing=false;}
 };
 const tick=async()=>{
  if(stopped||!socket.connected||!client.isReady()||ticking)return;
  ticking=true;
  try {
   if(controller&&!controller.isReady())pause();
   if(!controller||connectionId!==socket.id)await start();else await controller.tick();
  }catch(error){pause();log('Voice mute worker paused: '+error.message);}
  finally{ticking=false;}
 };
 const request=async(payload,ack)=>{
  const hotkeyEdge=['pressed','released'].includes(payload?.state);
  // Cached names keep diagnostics from delaying release or triggering extra API calls.
  const guild=hotkeyEdge?client.guilds.cache?.get(guildId):null;
  const member=guild?.members.cache?.get(payload.requesterId);
  const user=member?.user||client.users?.cache?.get(payload?.requesterId);
  const context=hotkeyEdge?JSON.stringify({guildName:guild?.name||'Unknown guild',guildId,requesterName:member?.displayName||user?.globalName||user?.username||'Unknown requester',requesterId:payload.requesterId,channelName:member?.voice.channel?.name||guild?.channels.cache?.get(member?.voice.channelId)?.name||'Unknown channel',channelId:member?.voice.channelId||null,connectionId:payload.connectionId,sessionId:payload.sessionId}):'';
  if(hotkeyEdge)log('Voice hotkey '+payload.state+' received '+context);
  try{if(!controller)throw Error('Voice mute is recovering; try again shortly.');const result=await controller.request(payload);ack?.({ok:true,result});}
  catch(error){if(hotkeyEdge)log('Voice hotkey '+payload.state+' rejected: '+error.message+' '+context);ack?.({ok:false,message:error.message});}
 };
 const accessDiagnostics=new Map();
 const access=async(payload,ack)=>{
  try {
   const identity=socket.id;
   if(stopped||!socket.connected||!client.isReady())throw Error('Discord mute service is unavailable.');
   if(!config.enabled){const diagnostic='Voice mute is disabled.';if(accessDiagnostics.get(payload.requesterId)!==diagnostic){accessDiagnostics.set(payload.requesterId,diagnostic);log('Voice mute access checked '+JSON.stringify({guildId,requesterId:payload.requesterId,reason:diagnostic}));}ack?.({ok:true,enabled:false,allowed:false});return;}
   const guild=await client.guilds.fetch(guildId);
   const member=await guild.members.fetch({user:payload.requesterId,force:true});
   if(stopped||!socket.connected||socket.id!==identity)throw Error('Discord mute policy or connection changed.');
   const details={guildName:guild.name,guildId,requesterName:member?.displayName||member?.user.username,requesterId:payload.requesterId,enabled:config.enabled,allowedRoles:config.allowedRoleIds,rankRoles:config.rankRoleIds.length?config.rankRoleIds:ranks.map(aliases=>aliases.join(' / ')),memberRoles:[...(member?.roles.cache.values()||[])].map(role=>({id:role.id,name:role.name})),reason:voiceMuteAccessReason(config,member)};
   const diagnostic=JSON.stringify(details);
   if(accessDiagnostics.get(payload.requesterId)!==diagnostic){accessDiagnostics.set(payload.requesterId,diagnostic);log('Voice mute access checked '+diagnostic);}
   ack?.({ok:true,...voiceMuteAccess(config,member)});
  }catch(error){const diagnostic='Failed: '+error.message;if(accessDiagnostics.get(payload?.requesterId)!==diagnostic){accessDiagnostics.set(payload?.requesterId,diagnostic);log('Voice mute access failed '+JSON.stringify({guildId,requesterId:payload?.requesterId,reason:error.message}));}ack?.({ok:false,enabled:false,allowed:false,message:error.message});}
 };
 const voice=(before,after)=>{
  if(after.guild.id!==guildId)return;
  if(before.serverMute!==after.serverMute)void controller?.muteChanged(after.id,after.serverMute).catch(error=>log('Voice mute attribution: '+error.message));
  if(before.channelId!==after.channelId)void controller?.channelChanged(after.id).catch(error=>log('Voice mute member reconcile: '+error.message));
 };
 const audit=(entry,guild)=>{if(guild.id===guildId)void controller?.audit(entry).catch(error=>log('Voice mute audit reconcile: '+error.message));};
 socket.on('guildsync:voice-mute-request',request);socket.on('guildsync:voice-mute-access-request',access);socket.on('connect',start);socket.on('disconnect',pause);
 client.on(Events.ClientReady,start);client.on(Events.VoiceStateUpdate,voice);client.on(Events.GuildAuditLogEntryCreate,audit);
 const timer=setIntervalFn(()=>void tick(),1000),leaseTimer=setIntervalFn(renew,5000);
 timer.unref?.();leaseTimer.unref?.();void start();
 return {tick,async stop(){
  stopped=true;clearIntervalFn(timer);clearIntervalFn(leaseTimer);
  socket.off('guildsync:voice-mute-request',request);socket.off('guildsync:voice-mute-access-request',access);socket.off('connect',start);socket.off('disconnect',pause);
  client.off(Events.ClientReady,start);client.off(Events.VoiceStateUpdate,voice);client.off(Events.GuildAuditLogEntryCreate,audit);
  const previous=controller;pause();await previous?.drain();await starting;
 }};
}

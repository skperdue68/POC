import {ChannelType,Events,PermissionFlagsBits} from 'discord.js';
import {renderOnboardingMessage} from './member-onboarding-config.js';

function request(socket,action,payload) {
 return new Promise((resolve,reject)=>{
  if(!socket.connected)return reject(Error('Onboarding backend is disconnected.'));
  socket.timeout(30000).emit('guildsync:onboarding-'+action,payload,(error,response)=>{
   if(error)return reject(error);
   if(!response?.ok)return reject(Error(response?.message || 'Onboarding backend request failed.'));
   resolve(response.result);
  });
 });
}
function roleByName(roles,id,name) {
 const matches=id?[roles.get(id)].filter(Boolean):[...roles.values()].filter(role=>role.name.toLowerCase()===name.toLowerCase());
 if(matches.length!==1)throw Error('Onboarding needs one unambiguous '+name+' role; configure its role ID.');
 return matches[0];
}
// Match guild ranks, not decorative roles or arbitrary Discord role positions.
const HIGHER_GUILD_RANKS=new Set([
 'soldier','soldiers','capo','capos','caporegime','caporegimes','caporegieme','caporegiemes',
 'consigliere','consiglieri','consiglieres','kingpin','kingpins'
]);
function higherGuildRank(member) {
 return member.roles.cache.find(role=>HIGHER_GUILD_RANKS.has(String(role.name || '').trim().toLowerCase().replace(/[^a-z0-9]+/g,'')));
}
function requirePermissions(channel,subject,flags,label) {
 if(!channel.permissionsFor(subject)?.has(flags))throw Error('Onboarding missing '+label+' permissions in channel '+channel.id+'.');
}

async function notificationDestination(context,job,member,progress) {
 const {client,config,guildId}=context;
 const parent=await client.channels.fetch(config.channelId);
 if(!parent || parent.guildId!==guildId)throw Error('Onboarding destination is not in the configured Discord guild.');
 requirePermissions(parent,member,PermissionFlagsBits.ViewChannel,'member View Channel');
 if(config.mode==='channel') {
  if(typeof parent.send!=='function' || !parent.messages)throw Error('Onboarding destination must be a message channel or thread.');
  requirePermissions(parent,client.user,[PermissionFlagsBits.ViewChannel,PermissionFlagsBits.ReadMessageHistory,
   parent.isThread?.()?PermissionFlagsBits.SendMessagesInThreads:PermissionFlagsBits.SendMessages],'bot delivery');
  if(parent.archived)await parent.setArchived(false);
  return parent;
 }
 if(parent.type!==ChannelType.GuildText)throw Error('Private onboarding threads require a text parent channel.');
 requirePermissions(parent,client.user,[PermissionFlagsBits.ViewChannel,
  PermissionFlagsBits.SendMessagesInThreads,PermissionFlagsBits.ReadMessageHistory],'bot thread delivery');
 let thread;
 if(job.threadId) {
  try {thread=await client.channels.fetch(job.threadId);}catch(error){if(error.code!==10003)throw error;}
 }
 if(!thread) {
  const name='guildsync-'+job.userId;
  const matches=[...(await parent.threads.fetchActive()).threads.values()].filter(t=>t.name===name && t.ownerId===client.user.id && [ChannelType.PrivateThread,ChannelType.PublicThread].includes(t.type));
  for(const archiveType of ['private','public']) {
   const fetchAll=archiveType==='public' || parent.permissionsFor(client.user)?.has(PermissionFlagsBits.ManageThreads);
   let before;
   do {
    const page=await parent.threads.fetchArchived({type:archiveType,fetchAll,limit:100,...(before?{before}:{} )});
    matches.push(...[...page.threads.values()].filter(t=>t.name===name && t.ownerId===client.user.id && [ChannelType.PrivateThread,ChannelType.PublicThread].includes(t.type)));
    if(!page.hasMore)break;
    const last=page.threads.last();
    const cursor=fetchAll?last?.archiveTimestamp:last?.id;
    if(!cursor || cursor===before)throw Error('Could not reconcile archived onboarding threads.');
    before=cursor;
   }while(true);
  }
  const unique=[...new Map(matches.map(t=>[t.id,t])).values()];
  if(unique.length>1)throw Error('Multiple onboarding threads exist for '+job.userId+'; resolve before retrying.');
  thread=unique[0];
  if(!thread) {
   const createPublic=async()=>{
    requirePermissions(parent,client.user,PermissionFlagsBits.CreatePublicThreads,'bot public-thread fallback');
    context.log?.('Onboarding private-thread creation unavailable; using a public thread in '+parent.id+' for '+job.userId+'.');
    return parent.threads.create({name,type:ChannelType.PublicThread,autoArchiveDuration:1440,reason:'GuildSync member onboarding fallback'});
   };
   if(!parent.permissionsFor(client.user)?.has(PermissionFlagsBits.CreatePrivateThreads))thread=await createPublic();
   else {
    try {thread=await parent.threads.create({name,type:ChannelType.PrivateThread,invitable:false,autoArchiveDuration:1440,reason:'GuildSync member onboarding'});}
    catch(error){if(![50013,50001].includes(error.code))throw error;thread=await createPublic();}
   }
  }
  await progress({threadId:thread.id});job.threadId=thread.id;
 }
 if(thread.guildId!==guildId || thread.parentId!==parent.id || ![ChannelType.PrivateThread,ChannelType.PublicThread].includes(thread.type) || thread.ownerId!==client.user.id)
  throw Error('Stored onboarding thread does not match its configured onboarding destination.');
 if(thread.archived)await thread.setArchived(false);
 await thread.members.add(job.userId);
 requirePermissions(thread,client.user,[PermissionFlagsBits.ViewChannel,PermissionFlagsBits.SendMessagesInThreads,PermissionFlagsBits.ReadMessageHistory],'bot thread delivery');
 return thread;
}

async function acceptedMessage(channel,client,job,progress) {
 const heading=job.kind==='promotion'?'**Account linked**':'**Account linking reminder**';
 if(!job.content.includes('<@'+job.userId+'>') || !job.content.startsWith(heading))throw Error('Stored notification lacks recipient or delivery context; cannot reconcile safely.');
 let before;
 while(true) {
  const messages=await channel.messages.fetch({limit:100,...(before?{before}:{})});
  const found=messages.find(message=>message.author.id===client.user.id && !message.interactionMetadata &&
   !(job.previousMessageIds || []).includes(message.id) && message.content===job.content && (message.nonce==null || String(message.nonce)===job.id.slice(0,24)) && message.createdTimestamp>=(job.attemptAt-60)*1000);
  if(found)return found;
  const oldest=messages.last();
  if(!oldest || messages.size<100 || oldest.createdTimestamp<(job.attemptAt-60)*1000)return null;
  if(oldest.id===before)throw Error('Could not finish onboarding message reconciliation.');
  before=oldest.id;await progress({});
 }
}

export async function processOnboardingDelivery(context,job) {
 const {client,socket,guildId,config,log=console.log,now=()=>Math.floor(Date.now()/1000)}=context;
 const payload={guildId,deliveryId:job.id,claimToken:job.claimToken};
 const progress=patch=>request(socket,'progress',{...payload,patch});
 const finish=result=>request(socket,'finish',{...payload,result});
 try {
  let validity=await request(socket,'validate',payload);
  if(!validity.valid){await finish({cancelled:true});return;}
  const guild=await client.guilds.fetch(guildId);
  let member;
  try {member=await guild.members.fetch({user:job.userId,force:true});}catch(error){if(error.code!==10007)throw error;}
  if(!member || member.user.bot){await request(socket,'observe',{guildId,member:{discord_id:job.userId,present:false}});await finish({cancelled:true});return;}
  await request(socket,'observe',{guildId,member:{discord_id:job.userId,joined_at:member.joinedTimestamp?Math.floor(member.joinedTimestamp/1000):undefined,present:true}});
  validity=await request(socket,'validate',payload);
  if(!validity.valid){await finish({cancelled:true});return;}
  let associateName='Associates';
  if(job.kind==='promotion') {
   const roles=await guild.roles.fetch(),gangster=roleByName(roles,config.gangsterRoleId,'Gangsters');
   const higherRank=higherGuildRank(member);
   if(higherRank) {
    if(member.roles.cache.has(gangster.id)) {
     // Only Gangsters must be editable; higher ranks and Associates are untouched.
     if(!gangster.editable)throw Error('Bot cannot remove the Gangsters role; check Manage Roles and role hierarchy.');
     validity=await request(socket,'validate',payload);
     if(!validity.valid){await finish({cancelled:true});return;}
     await progress({roleStarted:true});job.roleStarted=true;
     await member.roles.remove(gangster.id,'GuildSync confirmed ESO link; higher guild rank retained');
    }else if(!(job.roleStarted || job.roleChanged)) {
     await finish({cancelled:true});return;
    }
    await progress({roleChanged:true});job.roleChanged=true;
    await finish({done:true,promoted:false});
    log('Onboarding removed '+gangster.name+' from '+job.userId+'; retained higher guild rank '+higherRank.name+'.');
    return; // No Associate-promotion message for a member whose rank was retained.
   }
   const associate=roleByName(roles,config.associateRoleId,'Associates');
   associateName=associate.name;
   if(gangster.id===associate.id)throw Error('Gangsters and Associates must be different roles.');
   if(!member.roles.cache.has(gangster.id)) {
    if(!(job.roleStarted || job.roleChanged)){await finish({cancelled:true});return;}
    if(!member.roles.cache.has(associate.id))throw Error('Interrupted promotion no longer has the Associate role.');
   }else {
    if(!gangster.editable || !associate.editable || !member.manageable)throw Error('Bot cannot manage onboarding roles; check Manage Roles and role hierarchy.');
    validity=await request(socket,'validate',payload);
    if(!validity.valid){await finish({cancelled:true});return;}
    await progress({roleStarted:true});job.roleStarted=true;
    if(!member.roles.cache.has(associate.id))await member.roles.add(associate.id,'GuildSync confirmed ESO link');
    await member.roles.remove(gangster.id,'GuildSync promotion to Associate');
    log('Onboarding promoted '+job.userId+' to '+associate.name+'; removed '+gangster.name+'.');
   }
   await progress({roleChanged:true});job.roleChanged=true;
   if(!config.promotionNotifyEnabled){await finish({done:true});return;}
   validity=await request(socket,'validate',payload);
   if(!validity.valid){await finish({cancelled:true});return;}
   if(validity.notificationEnabled===false){await finish({error:'Promotion notifications are disabled; saved delivery is paused.'});return;}
  }
  const destination=await notificationDestination(context,job,member,progress);
  if(job.destinationId && job.destinationId!==destination.id)throw Error('Onboarding notification destination changed; restore its original destination before retrying.');
  if(!job.destinationId){job.destinationId=destination.id;await progress({destinationId:destination.id});}
  if(!job.content) {
   const rendered=renderOnboardingMessage(job.kind==='promotion'?config.promotionMessage:config.reminderMessage,
    {userId:job.userId,esoName:validity.esoName || job.esoName,associateRole:associateName,hours:config.reminderHours});
   job.content=(job.kind==='promotion'?'**Account linked**':'**Account linking reminder**')+'\n'+rendered.content;if(job.content.length>2000)throw Error('Onboarding notification exceeds Discord message length.');await progress({content:job.content});
  }
  if(job.attemptAt) {
   const existing=await acceptedMessage(destination,client,job,progress);
   if(existing){await finish({done:true,messageId:existing.id});log('Onboarding recovered '+job.kind+' notification for '+job.userId+'.');return;}
  }
  validity=await request(socket,'validate',payload);
  if(!validity.valid){await finish({cancelled:true});return;}
  if(job.kind==='promotion' && validity.notificationEnabled===false){await finish({error:'Promotion notifications are disabled; saved delivery is paused.'});return;}
  // Re-fetch membership immediately before a reminder is sent.
  await guild.members.fetch({user:job.userId,force:true});
  job.attemptAt=job.attemptAt || now();await progress({attemptAt:job.attemptAt});
  const message=await destination.send({content:job.content,allowedMentions:{parse:[],users:[job.userId]},nonce:job.id.slice(0,24),enforceNonce:true});
  await finish({done:true,messageId:message.id});
  log('Onboarding '+job.kind+' notification sent for '+job.userId+' in '+destination.id+'.');
 }catch(error){
  log('Onboarding '+job.kind+' for '+job.userId+' failed: '+error.message);
  try {await finish({error:error.message});}catch(ackError){log('Onboarding retry acknowledgement failed: '+ackError.message);}
 }
}

export function createOnboardingWorker({client,socket,guildId,config,log=console.log,now=()=>Math.floor(Date.now()/1000)}) {
 let running=false,stopped=false,configuredId=null,snapshotDone=false;const drain=[];
 const send=(action,payload={})=>request(socket,action,{guildId,...payload});
 async function configure() {
  if(configuredId===socket.id)return;
  if(!guildId)throw Error('DISCORD_GUILD_ID is required for onboarding configuration.');
  await send('configure',{config});configuredId=socket.id;snapshotDone=false;
 }
 async function observeMember(member,present=true) {
  if(!config.enabled || member.guild.id!==guildId || member.user.bot || !client.isReady() || !socket.connected)return;
  try {await configure();await send('observe',{member:{discord_id:member.id,joined_at:member.joinedTimestamp?Math.floor(member.joinedTimestamp/1000):undefined,present}});}
  catch(error){log('Onboarding member observation failed: '+error.message);}
  void tick();
 }
 async function tick() {
  if(running || stopped || !client.isReady() || !socket.connected)return;
  running=true;
  try {
   await configure();if(!config.enabled)return;
   if(!snapshotDone) {
    const guild=await client.guilds.fetch(guildId);let after='0';
    while(true) {
     const page=await guild.members.list({limit:300,after});
     for(const member of page.values())if(!member.user.bot)await send('observe',{member:{discord_id:member.id,joined_at:member.joinedTimestamp?Math.floor(member.joinedTimestamp/1000):undefined,present:true}});
     if(page.size<300)break;
     const last=page.last();if(!last || last.id===after)throw Error('Onboarding member pagination did not advance.');after=last.id;
    }snapshotDone=true;
   }
   for(let count=0;count<10 && !stopped;count++) {
    const job=await send('claim');if(!job)break;
    await processOnboardingDelivery({client,socket,guildId,config:job.config || config,log,now},job);
   }
  }catch(error){log('Onboarding worker failed: '+error.message);}finally{running=false;for(const resolve of drain.splice(0))resolve();}
 }
 const disconnected=()=>{configuredId=null;snapshotDone=false;};
 const joined=member=>void observeMember(member),left=member=>void observeMember(member,false);
 const start=()=>void tick();
 client.on(Events.ClientReady,start);client.on(Events.GuildMemberAdd,joined);client.on(Events.GuildMemberRemove,left);
 socket.on('connect',start);socket.on('disconnect',disconnected);socket.on('guildsync:onboarding-wake',start);
 const timer=setInterval(start,60000);timer.unref();
 return {tick,observeMember,async stop(){stopped=true;clearInterval(timer);client.off(Events.ClientReady,start);client.off(Events.GuildMemberAdd,joined);client.off(Events.GuildMemberRemove,left);socket.off('connect',start);socket.off('disconnect',disconnected);socket.off('guildsync:onboarding-wake',start);if(running)await new Promise(resolve=>drain.push(resolve));}};
}

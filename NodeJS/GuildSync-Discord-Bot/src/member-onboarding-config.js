export const PROMOTION_MESSAGE = '{mention}, your Discord account is now linked to ESO account **{eso_name}**. You have been promoted to {associate_role} and should now have full server access.';
export const REMINDER_MESSAGE = '{mention}, please update your Discord server nickname to match your ESO account name so GuildSync can link your accounts and grant full server access.';

export function readOnboardingConfig(env = process.env) {
 const get = (key,fallback='') => String(env['GUILDSYNC_ONBOARDING_'+key] ?? fallback).trim();
 const bool = (key,fallback) => {
  const value=get(key,String(fallback)).toLowerCase();
  if (!['true','false'].includes(value)) throw Error('GUILDSYNC_ONBOARDING_'+key+' must be true or false.');
  return value==='true';
 };
 const config={enabled:bool('ENABLED',false),promotionEnabled:bool('PROMOTION_ENABLED',true),promotionNotifyEnabled:bool('PROMOTION_NOTIFY_ENABLED',true),
  reminderEnabled:bool('REMINDER_ENABLED',true),reminderHours:Number(get('REMINDER_HOURS','24')),mode:get('NOTIFICATION_MODE','private_thread'),
  channelId:get('CHANNEL_ID'),gangsterRoleId:get('GANGSTER_ROLE_ID'),associateRoleId:get('ASSOCIATE_ROLE_ID'),
  promotionMessage:get('PROMOTION_MESSAGE') || PROMOTION_MESSAGE,reminderMessage:get('REMINDER_MESSAGE') || REMINDER_MESSAGE};
 if (!Number.isFinite(config.reminderHours) || config.reminderHours<=0 || config.reminderHours>8760) throw Error('Onboarding REMINDER_HOURS must be positive and at most 8760.');
 if (!['private_thread','channel'].includes(config.mode)) throw Error('Onboarding NOTIFICATION_MODE must be private_thread or channel.');
 if (config.enabled && (config.reminderEnabled || (config.promotionEnabled && config.promotionNotifyEnabled)) && !config.channelId)
  throw Error('GUILDSYNC_ONBOARDING_CHANNEL_ID is required for enabled notifications.');
 for (const key of ['channelId','gangsterRoleId','associateRoleId']) if(config[key] && !/^\d+$/.test(config[key])) throw Error('Onboarding '+key+' must be a Discord ID.');
 for(const template of [config.promotionMessage,config.reminderMessage]) {
  if(template.length>1800) throw Error('Onboarding message templates must be at most 1800 characters.');
  for(const match of template.matchAll(/\{([^{}]+)\}/g)) if(!['mention','eso_name','associate_role','hours'].includes(match[1])) throw Error('Unknown onboarding placeholder: '+match[1]);
 }
 return config;
}

export function renderOnboardingMessage(template,{userId,esoName='',associateRole='Associates',hours=24}) {
 const escape=value=>String(value).replace(/@/g,'@\u200b').replace(/([\\`*_~|<>])/g,'\\$1');
 const values={mention:'<@'+userId+'>',eso_name:escape(esoName),associate_role:escape(associateRole),hours:String(hours)};
 let content=template.replace(/\{(mention|eso_name|associate_role|hours)\}/g,(_,key)=>values[key]);
 if(!content.includes(values.mention))content=values.mention+' '+content;
 if(content.length>2000)throw Error('Rendered onboarding message exceeds Discord length limit.');
 return {content,allowedMentions:{parse:[],users:[String(userId)]}};
}

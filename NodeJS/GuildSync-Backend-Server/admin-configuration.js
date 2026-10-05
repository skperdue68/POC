// Only these operational settings may be displayed or overridden. Never accept arbitrary env keys.
const define=(owner,group,key,label,type,defaultValue,extra={})=>({owner,group,key,label,type,defaultValue,...extra});
const onboarding=(key,label,type,value,extra)=>define('bot','Member onboarding','GUILDSYNC_ONBOARDING_'+key,label,type,value,extra);
const raffle=(key,label,type,value,extra)=>define('bot','Raffle announcements','GUILDSYNC_RAFFLE_'+key,label,type,value,extra);
export const configurationCatalog=[
 onboarding('ENABLED','Enable member onboarding','boolean',false),
 onboarding('PROMOTION_ENABLED','Promote linked Gangsters to Associates','boolean',true),
 onboarding('PROMOTION_NOTIFY_ENABLED','Notify members after promotion','boolean',true),
 onboarding('REMINDER_ENABLED','Send unlinked member reminders','boolean',true),
 onboarding('REMINDER_HOURS','Reminder delay (hours)','number',24,{min:0.01,max:8760}),
 onboarding('CHANNEL_ID','Notification channel ID','id',''),
 onboarding('NOTIFICATION_MODE','Notification delivery','select','private_thread',{options:['private_thread','channel']}),
 onboarding('GANGSTER_ROLE_ID','Gangsters role ID (blank: discover by name)','id',''),
 onboarding('ASSOCIATE_ROLE_ID','Associates role ID (blank: discover by name)','id',''),
 onboarding('PROMOTION_MESSAGE','Promotion message','template','{mention}, your Discord account is now linked to ESO account **{eso_name}**. You have been promoted to {associate_role} and should now have full server access.',{placeholders:['mention','eso_name','associate_role','hours'],maxLength:1800}),
 onboarding('REMINDER_MESSAGE','Unlinked member reminder','template','{mention}, please update your Discord server nickname to match your ESO account name so GuildSync can link your accounts and grant full server access.',{placeholders:['mention','eso_name','associate_role','hours'],maxLength:1800}),
 raffle('ANNOUNCEMENTS_ENABLED','Enable raffle announcements','boolean',true),
 raffle('CHANNEL_ID','Raffle announcement channel ID','id',''),
 raffle('INTERVAL_HOURS','Announcement interval (hours)','number',48,{min:0.01,max:8760}),
 raffle('BIWEEKLY_THRESHOLD','Bi-Weekly prize milestone (gold)','number',200000,{min:1,max:1000000000000}),
 raffle('MONTHLY_THRESHOLD','50/50 prize milestone (gold)','number',500000,{min:1,max:1000000000000}),
 raffle('BONUS_REMINDER_HOURS','Bonus reminder lead hours (comma separated)','hours','1'),
 raffle('SALES_CLOSE_REMINDER_HOURS','Sales closing reminder lead hours (comma separated)','hours','2'),
 define('bot','Archive notifications','GUILDSYNC_RAFFLE_ARCHIVE_ANNOUNCEMENTS_ENABLED','Enable archive notifications','boolean',true),
 define('bot','Archive notifications','GUILDSYNC_RAFFLE_ARCHIVE_CHANNEL_IDS','Archive notification channel IDs (comma separated)','ids',''),
 define('backend','Spreadsheet automation','GUILDSYNC_GOOGLE_SHEETS_ENABLED','Enable ordinary spreadsheet writes','boolean',false),
 define('backend','Spreadsheet automation','GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_ENABLED','Enable automatic raffle rollover','boolean',false),
 define('backend','Spreadsheet automation','GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_DELAY_HOURS','Rollover delay (hours)','number',4,{min:0,max:8760}),
 define('backend','Receipt messages','GUILDSYNC_DEPOSIT_MAIL_SUBJECT_TEMPLATE','Receipt subject','template','Raffle ticket deposit received',{maxLength:200,placeholders:['recipient','amount','ticket_quantity','event_id','ticket_type','ticket_type_raw','transaction_type','account_name','display_name','deposit_amount','raw_amount','raw_deposit_amount','tickets','purchased_tickets','gold_cost','raw_ticket_gold_cost','raw_gold_cost','purchase_date','data_source','event_datetime','event_timestamp','raffle_datetime_eastern','raffle_date_time_eastern','raffle_datetime','mail_request_id','mail_batch_id','ticket_gold_cost','bonus_percent','bonus_tickets','total_tickets','bonus_deadline','bonus_block','note','note_block']}),
 define('backend','Receipt messages','GUILDSYNC_DEPOSIT_MAIL_BODY_TEMPLATE','Receipt body','template','Hi {recipient},\n\nThank you for supporting Alphabet Mafia!\n\nWe received your guild bank deposit of {amount} gold.\nTicket Credit Earned: {ticket_quantity}\n{bonus_block}\n{note_block}\n\nTransaction ID: {event_id}\n\n-- Alphabet Mafia',{maxLength:10000,placeholders:['recipient','amount','ticket_quantity','event_id','ticket_type','ticket_type_raw','transaction_type','account_name','display_name','deposit_amount','raw_amount','raw_deposit_amount','tickets','purchased_tickets','gold_cost','raw_ticket_gold_cost','raw_gold_cost','purchase_date','data_source','event_datetime','event_timestamp','raffle_datetime_eastern','raffle_date_time_eastern','raffle_datetime','mail_request_id','mail_batch_id','ticket_gold_cost','bonus_percent','bonus_tickets','total_tickets','bonus_deadline','bonus_block','note','note_block']})
];
const byKey=new Map(configurationCatalog.map(item=>[item.key,item]));
const recordKey='admin_configuration';
function typed(item,value){
 if(item.type==='boolean'){if(value===true||typeof value==='string'&&value.trim().toLowerCase()==='true')return true;if(value===false||typeof value==='string'&&value.trim().toLowerCase()==='false')return false;throw Error(item.label+' must be true or false.');}
 if(item.type==='number'){const n=Number(value);if(String(value).trim()===''||!Number.isFinite(n)||n<item.min||n>item.max || (item.key.endsWith('DELAY_HOURS')&&!Number.isSafeInteger(n*3600)))throw Error(item.label+' is outside its allowed range.');if(item.key.endsWith('THRESHOLD')&&!Number.isSafeInteger(n))throw Error(item.label+' must be a whole number.');return n;}
 if(typeof value!=='string')throw Error(item.label+' must be text.');
 const text=item.type==='template'?value:value.trim();
 if(text.length>(item.maxLength || 2000))throw Error(item.label+' is too long.');
 if(item.type==='id' && text && !/^\d+$/.test(text))throw Error(item.label+' must be a Discord ID.');
 if(item.type==='ids' && text && text.split(',').some(id=>!/^\d+$/.test(id.trim())))throw Error(item.label+' must contain comma-separated Discord IDs.');
 if(item.type==='hours' && (!text || text.split(',').some(v=>!v.trim() || !Number.isFinite(Number(v))||Number(v)<=0||Number(v)>8760)))throw Error(item.label+' must contain positive hours.');
 if(item.type==='select'&&!item.options.includes(text))throw Error('Invalid '+item.label+'.');
 if(item.type==='template'&&!text.trim())throw Error(item.label+' cannot be blank; use the .env default instead.');
 if(item.type==='template')for(const match of text.matchAll(/\{([^{}]+)\}/g))if(!item.placeholders.includes(match[1]))throw Error('Unknown placeholder: '+match[1]);
 return text;
}
export function createConfigurationService(db,{env=process.env,onApply=()=>{},applyAtBoundary=async fn=>fn()}={}){
 const baseline=Object.fromEntries(configurationCatalog.filter(i=>i.owner==='backend').map(i=>[i.key,env[i.key]]));
 let current={revision:0,overrides:{},botDefaults:{}};
 const defaultFor=(i,record=current)=>{const raw=i.owner==='backend'?baseline[i.key]:record.botDefaults[i.key];return typed(i,raw===undefined||raw===null||raw===''?i.defaultValue:raw);};
 const effective=(i,record=current)=>Object.hasOwn(record.overrides,i.key)?record.overrides[i.key]:defaultFor(i,record);
 const validate=record=>{
  for(const [key,value] of Object.entries(record.overrides)){const item=byKey.get(key);if(!item)throw Error('Unknown configuration setting: '+key);typed(item,value);}
  const get=k=>effective(byKey.get(k),record);
  if(get('GUILDSYNC_ONBOARDING_ENABLED')&&(get('GUILDSYNC_ONBOARDING_REMINDER_ENABLED')||(get('GUILDSYNC_ONBOARDING_PROMOTION_ENABLED')&&get('GUILDSYNC_ONBOARDING_PROMOTION_NOTIFY_ENABLED')))&&!get('GUILDSYNC_ONBOARDING_CHANNEL_ID'))throw Error('Select an onboarding notification channel before enabling notifications.');
 };
 const apply=async()=>applyAtBoundary(()=>{for(const item of configurationCatalog.filter(i=>i.owner==='backend')){
  if(Object.hasOwn(current.overrides,item.key))env[item.key]=String(current.overrides[item.key]);
  else if(baseline[item.key]===undefined)delete env[item.key];else env[item.key]=baseline[item.key];
 }onApply(current);});
 const read=async connection=>{const [rows]=await connection.execute('SELECT value FROM guildsync_settings WHERE setting_key = ? FOR UPDATE',[recordKey]);return rows.length?JSON.parse(rows[0].value):{revision:0,overrides:{},botDefaults:{}};};
 const view=()=>({revision:current.revision,botDefaultsReported:!!current.botReportedAt,settings:configurationCatalog.map(i=>({...i,value:effective(i),defaultValue:defaultFor(i),source:Object.hasOwn(current.overrides,i.key)?'GuildSync override':'.env'}))});
 const mutate=async fn=>{const connection=await db.getConnection();let next;try{await connection.beginTransaction();next=await read(connection);await fn(next);await connection.execute('INSERT INTO guildsync_settings (setting_key, value) VALUES (?, ?) ON DUPLICATE KEY UPDATE value = VALUES(value)',[recordKey,JSON.stringify(next)]);await connection.commit();}catch(error){await connection.rollback();throw error;}finally{connection.release();}current=next;await apply();return view();};
 return {async initialize(){await db.execute('INSERT IGNORE INTO guildsync_settings (setting_key, value) VALUES (?, \'{"revision":0,"overrides":{},"botDefaults":{}}\')',[recordKey]);current=await read(db);validate(current);await apply();return view();},view,
 async save(input){return mutate(async next=>{if(input?.revision!==next.revision)throw Error('Configuration changed. Reload before saving.');if(!input.changes||typeof input.changes!=='object'||Array.isArray(input.changes))throw Error('Provide configuration changes.');for(const [key,value]of Object.entries(input.changes)){const i=byKey.get(key);if(!i)throw Error('Unknown configuration setting: '+key);if(value===null)delete next.overrides[key];else next.overrides[key]=typed(i,value);}validate(next);next.revision++;});},
 async registerBotDefaults(defaults){return mutate(async next=>{for(const[key,value]of Object.entries(defaults)){const i=byKey.get(key);if(!i||i.owner!=='bot')throw Error('Only bot configuration defaults may be reported.');next.botDefaults[key]=typed(i,value);}next.botReportedAt=new Date().toISOString();validate(next);});},
 async botConfiguration(){return {revision:current.revision,keys:configurationCatalog.filter(i=>i.owner==='bot').map(i=>({key:i.key,defaultValue:i.defaultValue})),overrides:Object.fromEntries(Object.entries(current.overrides).filter(([key])=>byKey.get(key)?.owner==='bot'))};}
 };
}

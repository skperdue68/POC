const allowed=new Set([
 ...['ENABLED','PROMOTION_ENABLED','PROMOTION_NOTIFY_ENABLED','REMINDER_ENABLED','REMINDER_HOURS','NOTIFICATION_MODE','CHANNEL_ID','GANGSTER_ROLE_ID','ASSOCIATE_ROLE_ID','PROMOTION_MESSAGE','REMINDER_MESSAGE'].map(k=>'GUILDSYNC_ONBOARDING_'+k),
 ...['ANNOUNCEMENTS_ENABLED','CHANNEL_ID','INTERVAL_HOURS','BIWEEKLY_THRESHOLD','MONTHLY_THRESHOLD','BONUS_REMINDER_HOURS','SALES_CLOSE_REMINDER_HOURS','ARCHIVE_ANNOUNCEMENTS_ENABLED','ARCHIVE_CHANNEL_IDS'].map(k=>'GUILDSYNC_RAFFLE_'+k)
]);
export function createLiveConfiguration({env=process.env,start}){
 const baseline={...env};let tail=Promise.resolve(),stops=[],signature;
 const defaults=keys=>Object.fromEntries(keys.filter(i=>allowed.has(i.key)).map(i=>[i.key,baseline[i.key]===undefined||baseline[i.key]===''?i.defaultValue:baseline[i.key]]));
 return {defaults,apply(configuration,{force=false}={}){
  const job=tail.then(async()=>{
   const effective={...baseline,...defaults(configuration.keys || [])};
   for(const[key,value]of Object.entries(configuration.overrides || {})){if(!allowed.has(key))throw Error('Unsupported bot configuration setting.');effective[key]=String(value);}
   const next=JSON.stringify(Object.fromEntries([...allowed].map(k=>[k,effective[k]])));
   if(!force&&signature===next)return;
   await Promise.all(stops.map(stop=>stop()));stops=[];
   // Each generation receives a separate snapshot; active jobs cannot see later mutations.
   stops=(await start(effective)) || [];signature=next;
  });tail=job.catch(()=>{});return job;
 }};
}

const id=value=>typeof value==='string' && /^\d{1,32}$/.test(value);
const key=value=>typeof value==='string' && /^[A-Za-z0-9_-]{1,64}$/.test(value);
const timestamp=value=>Number.isSafeInteger(value) && value>=0;
export function validateVoiceMuteSnapshot(state) {
 if(!state || !Number.isSafeInteger(state.revision) || state.revision<0)throw Error('Invalid voice state revision.');
 for(const field of ['moderatorMutes','sessions','targets'])if(!Array.isArray(state[field]) || state[field].length>5000)throw Error('Invalid voice state records.');
 if(JSON.stringify(state).length>750000)throw Error('Voice state is too large.');
 if(state.auditCursor!=null && !id(state.auditCursor))throw Error('Invalid audit cursor ID.');
 if(state.auditState) {
  if(!Array.isArray(state.auditState.seenIds) || state.auditState.seenIds.length>10000 || state.auditState.seenIds.some(v=>!id(v)))throw Error('Invalid audit history IDs.');
  const latest=state.auditState.lastExternalByUser;
  if(!latest || typeof latest!=='object' || Array.isArray(latest) || Object.keys(latest).length>5000 || Object.entries(latest).some(([user,entry])=>!id(user)||!id(entry)))throw Error('Invalid member audit order.');
 }
 const unique=(records,identity)=>{const ids=records.map(identity);if(new Set(ids).size!==ids.length)throw Error('Duplicate voice state record.');};
 unique(state.moderatorMutes,m=>m.userId);unique(state.sessions,s=>s.id);unique(state.targets,t=>t.sessionId+':'+t.userId);
 for(const m of state.moderatorMutes)if(!id(m.userId) || m.actorId!=null && !id(m.actorId) || !timestamp(m.mutedAt) || m.auditEntryId!=null && !id(m.auditEntryId))throw Error('Invalid moderator mute ID or timestamp.');
 for(const s of state.sessions)if(!key(s.id) || !id(s.channelId) || !id(s.requesterId) || !key(s.connectionId) || !timestamp(s.lastHeartbeatAt) || !timestamp(s.expiresAt) || !['active','ending','ended'].includes(s.state))throw Error('Invalid voice mute session.');
 const sessions=new Set(state.sessions.map(s=>s.id));
 for(const t of state.targets)if(!key(t.sessionId) || !sessions.has(t.sessionId) || !id(t.userId) || !['pending','applied','releasing','unresolved','overridden'].includes(t.state))throw Error('Invalid voice mute target/session.');
 return state;
}

export function createVoiceMuteStore(db,{now=Date.now,leaseMs=20000}={}) {
 const tables=['guildsync_discord_mutes','guildsync_voice_mute_sessions','guildsync_voice_mute_targets'];
 const atomic=async(guildId,fn)=>{
  if(!id(guildId))throw Error('Invalid voice mute guild ID.');
  const connection=await db.getConnection();
  try {
   await connection.beginTransaction();
   await connection.execute('INSERT IGNORE INTO guildsync_voice_mute_state (guild_id) VALUES (?)',[guildId]);
   const [rows]=await connection.execute('SELECT * FROM guildsync_voice_mute_state WHERE guild_id=? FOR UPDATE',[guildId]);
   const result=await fn(connection,rows[0]);await connection.commit();return result;
  }catch(error){await connection.rollback();throw error;}finally{connection.release();}
 };
 const snapshot=async(connection,guildId,row)=>{
  const lists=[];
  for(const table of tables){const [rows]=await connection.execute(`SELECT data_json FROM ${table} WHERE guild_id=?`,[guildId]);lists.push(rows.map(r=>JSON.parse(r.data_json)));}
  return {revision:Number(row.revision),moderatorMutes:lists[0],sessions:lists[1],targets:lists[2],auditCursor:row.audit_cursor,
   auditState:row.audit_state_json?JSON.parse(row.audit_state_json):{seenIds:[],lastExternalByUser:{}}};
 };
 const owns=(row,owner)=>{if(row.owner_id!==owner || Number(row.lease_until)<=now())throw Error('Voice mute worker lease is unavailable; reclaim before continuing.');};
 return {
  async owner(guildId) {
   if(!id(guildId))return null;
   const [rows]=await db.execute('SELECT owner_id FROM guildsync_voice_mute_state WHERE guild_id=? AND lease_until>?',[guildId,now()]);
   return rows[0]?.owner_id || null;
  },
  claim:async(guildId,owner)=>atomic(guildId,async(c,row)=>{
   if(!key(owner))throw Error('Invalid voice mute owner ID.');
   if(row.owner_id && row.owner_id!==owner && Number(row.lease_until)>now())throw Error('Another Discord worker controls voice mute for this guild.');
   await c.execute('UPDATE guildsync_voice_mute_state SET owner_id=?, lease_until=? WHERE guild_id=?',[owner,now()+leaseMs,guildId]);
   return snapshot(c,guildId,row);
  }),
  read:async(guildId,owner)=>atomic(guildId,async(c,row)=>{owns(row,owner);return snapshot(c,guildId,row);}),
  save:async(guildId,owner,state)=>{
   validateVoiceMuteSnapshot(state);
   return atomic(guildId,async(c,row)=>{
    owns(row,owner);if(Number(row.revision)!==state.revision)throw Error('Voice state revision changed; reload before saving.');
    for(const table of tables)await c.execute(`DELETE FROM ${table} WHERE guild_id=?`,[guildId]);
    for(const m of state.moderatorMutes)await c.execute(`INSERT INTO guildsync_discord_mutes
     (guild_id,discord_user_id,muted_by_discord_id,muted_at,reason,audit_entry_id,data_json) VALUES (?,?,?,?,?,?,?)`,
     [guildId,m.userId,m.actorId??null,m.mutedAt,m.reason??null,m.auditEntryId??null,JSON.stringify(m)]);
    for(const s of state.sessions)await c.execute(`INSERT INTO guildsync_voice_mute_sessions
     (guild_id,session_id,channel_id,requester_discord_id,connection_id,last_heartbeat_at,expires_at,state,data_json) VALUES (?,?,?,?,?,?,?,?,?)`,
     [guildId,s.id,s.channelId,s.requesterId,s.connectionId,s.lastHeartbeatAt,s.expiresAt,s.state,JSON.stringify(s)]);
    for(const t of state.targets)await c.execute(`INSERT INTO guildsync_voice_mute_targets
     (guild_id,session_id,discord_user_id,state,last_attempt_at,last_error,data_json) VALUES (?,?,?,?,?,?,?)`,
     [guildId,t.sessionId,t.userId,t.state,t.lastAttemptAt??null,t.lastError??null,JSON.stringify(t)]);
    const revision=state.revision+1;
    await c.execute('UPDATE guildsync_voice_mute_state SET revision=?, audit_cursor=?, audit_state_json=? WHERE guild_id=?',[revision,state.auditCursor??null,JSON.stringify(state.auditState || {seenIds:[],lastExternalByUser:{}}),guildId]);
    return {...state,revision};
   });
  },
  release:async(guildId,owner)=>{if(!id(guildId))return;return atomic(guildId,async(c,row)=>{
   if(row.owner_id===owner)await c.execute('UPDATE guildsync_voice_mute_state SET owner_id=?, lease_until=? WHERE guild_id=?',[null,0,guildId]);
  });}
 };
}

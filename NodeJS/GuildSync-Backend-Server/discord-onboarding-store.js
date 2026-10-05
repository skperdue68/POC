// Guild state row locks serialize claims and updates across bot connections.
export function createOnboardingStore(db) {
 const rows=async(sql,args=[]) => (await db.execute(sql,args))[0];
 const decode=row=>row && {...JSON.parse(row.payload_json),id:row.delivery_id,guildId:row.guild_id,userId:row.discord_id,kind:row.kind,
  status:row.status,claimToken:row.claim_token,leaseUntil:Number(row.lease_until),retryAt:Number(row.retry_at),lastError:row.last_error};
 return {
  async atomic(guildId,fn) {
   const connection=await db.getConnection();
   try {
    await connection.beginTransaction();
    await connection.execute('INSERT IGNORE INTO guildsync_discord_onboarding_state (guild_id,config_json,reminder_since,updated_at) VALUES (?, ?, NULL, 0)',[guildId,'{}']);
    await connection.execute('SELECT guild_id FROM guildsync_discord_onboarding_state WHERE guild_id=? FOR UPDATE',[guildId]);
    const result=await fn(createOnboardingStore(connection));await connection.commit();return result;
   } catch(error) { await connection.rollback();throw error; } finally { connection.release(); }
  },
  async states() {return (await rows('SELECT * FROM guildsync_discord_onboarding_state')).map(r=>({guildId:r.guild_id,config:JSON.parse(r.config_json),reminderSince:r.reminder_since===null?null:Number(r.reminder_since)}));},
  async state(guildId) {return (await this.states()).find(s=>s.guildId===guildId);},
  async putState(s) {await db.execute('UPDATE guildsync_discord_onboarding_state SET config_json=?,reminder_since=?,updated_at=? WHERE guild_id=?',
   [JSON.stringify(s.config),s.reminderSince,s.updatedAt,s.guildId]);},
  async members(guildId) {return (await rows('SELECT * FROM guildsync_discord_onboarding_members WHERE guild_id=?',[guildId])).map(r=>({
   guildId:r.guild_id,userId:r.discord_id,joinedAt:Number(r.joined_at),eligibleSince:r.eligible_since===null?null:Number(r.eligible_since),present:Boolean(r.present),
   threadId:r.thread_id,promotedAt:r.promoted_at===null?null:Number(r.promoted_at),remindedAt:r.reminded_at===null?null:Number(r.reminded_at)}));},
  async member(g,u) {return (await this.members(g)).find(m=>m.userId===u);},
  async putMember(m) {await db.execute(`INSERT INTO guildsync_discord_onboarding_members
   (guild_id,discord_id,joined_at,eligible_since,present,thread_id,promoted_at,reminded_at) VALUES (?,?,?,?,?,?,?,?)
   ON DUPLICATE KEY UPDATE joined_at=VALUES(joined_at),eligible_since=VALUES(eligible_since),present=VALUES(present),
   thread_id=VALUES(thread_id),promoted_at=VALUES(promoted_at),reminded_at=VALUES(reminded_at)`,
   [m.guildId,m.userId,m.joinedAt,m.eligibleSince,m.present?1:0,m.threadId??null,m.promotedAt??null,m.remindedAt??null]);},
  async confirmed(u) {return (await rows("SELECT eso_account_name FROM guildsync_member_links WHERE discord_user_id=? AND link_status='linked' AND auto_link_blocked=0 ORDER BY eso_account_name LIMIT 1",[u]))[0]?.eso_account_name;},
  async promotionCandidates(config) {return (await rows(`SELECT DISTINCT l.discord_user_id FROM guildsync_member_links l
   JOIN discord_members m ON m.discord_id=l.discord_user_id JOIN discord_member_roles mr ON mr.discord_id=m.discord_id
   JOIN discord_roles r ON r.role_id=mr.role_id WHERE l.link_status='linked' AND l.auto_link_blocked=0
   AND ${config.gangsterRoleId?'r.role_id=?':'LOWER(r.role_name)=?'} ORDER BY l.discord_user_id`,[config.gangsterRoleId || 'gangsters'])).map(r=>r.discord_user_id);},
  async jobs(g) {return (await rows('SELECT * FROM guildsync_discord_onboarding_deliveries WHERE guild_id=? ORDER BY retry_at, delivery_id',[g])).map(decode);},
  async job(id) {return decode((await rows('SELECT * FROM guildsync_discord_onboarding_deliveries WHERE delivery_id=?',[id]))[0]);},
  async putJob(j) {await db.execute(`INSERT INTO guildsync_discord_onboarding_deliveries
   (delivery_id,guild_id,discord_id,kind,generation,status,payload_json,claim_token,lease_until,retry_at,last_error,completed_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
   ON DUPLICATE KEY UPDATE status=VALUES(status),payload_json=VALUES(payload_json),claim_token=VALUES(claim_token),
   lease_until=VALUES(lease_until),retry_at=VALUES(retry_at),last_error=VALUES(last_error),completed_at=VALUES(completed_at)`,
   [j.id,j.guildId,j.userId,j.kind,j.generation??0,j.status,JSON.stringify(j),j.claimToken??null,j.leaseUntil??0,j.retryAt??0,j.lastError??null,j.completedAt??null]);}
 };
}

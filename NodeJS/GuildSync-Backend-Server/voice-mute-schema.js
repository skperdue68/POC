// Additive startup migration; no foreign keys to account rows that may be revoked.
export async function initializeVoiceMuteSchema(db) {
 const options=' ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci';
 for(const sql of [
  `CREATE TABLE IF NOT EXISTS guildsync_voice_mute_state (
   guild_id VARCHAR(32) PRIMARY KEY, revision BIGINT NOT NULL DEFAULT 0,
   owner_id VARCHAR(64) NULL, lease_until BIGINT NOT NULL DEFAULT 0, audit_cursor VARCHAR(32) NULL,
   audit_state_json LONGTEXT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS guildsync_discord_mutes (
   guild_id VARCHAR(32) NOT NULL, discord_user_id VARCHAR(32) NOT NULL,
   muted_by_discord_id VARCHAR(32) NULL, muted_at BIGINT NOT NULL,
   reason TEXT NULL, audit_entry_id VARCHAR(32) NULL, data_json LONGTEXT NOT NULL,
   PRIMARY KEY (guild_id, discord_user_id)
  )`,
  `CREATE TABLE IF NOT EXISTS guildsync_voice_mute_sessions (
   guild_id VARCHAR(32) NOT NULL, session_id VARCHAR(64) NOT NULL, channel_id VARCHAR(32) NOT NULL,
   requester_discord_id VARCHAR(32) NOT NULL, connection_id VARCHAR(64) NOT NULL,
   last_heartbeat_at BIGINT NOT NULL, expires_at BIGINT NOT NULL, state VARCHAR(32) NOT NULL,
   data_json LONGTEXT NOT NULL, PRIMARY KEY (guild_id, session_id)
  )`,
  `CREATE TABLE IF NOT EXISTS guildsync_voice_mute_targets (
   guild_id VARCHAR(32) NOT NULL, session_id VARCHAR(64) NOT NULL, discord_user_id VARCHAR(32) NOT NULL,
   state VARCHAR(32) NOT NULL, last_attempt_at BIGINT NULL, last_error TEXT NULL, data_json LONGTEXT NOT NULL,
   PRIMARY KEY (guild_id, session_id, discord_user_id)
  )`
 ])await db.query(sql+options);
}

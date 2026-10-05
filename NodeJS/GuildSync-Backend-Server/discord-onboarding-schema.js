export async function initializeDiscordOnboardingSchema(db) {
 for(const sql of [
  `CREATE TABLE IF NOT EXISTS guildsync_discord_onboarding_state (
    guild_id VARCHAR(32) PRIMARY KEY, config_json LONGTEXT NOT NULL,
    reminder_since BIGINT NULL, updated_at BIGINT NOT NULL
  ) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS guildsync_discord_onboarding_members (
    guild_id VARCHAR(32) NOT NULL, discord_id VARCHAR(32) NOT NULL,
    joined_at BIGINT NOT NULL, eligible_since BIGINT NULL, present TINYINT NOT NULL DEFAULT 1,
    thread_id VARCHAR(32) NULL, promoted_at BIGINT NULL, reminded_at BIGINT NULL,
    PRIMARY KEY (guild_id, discord_id)
  ) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS guildsync_discord_onboarding_deliveries (
    delivery_id VARCHAR(64) PRIMARY KEY, guild_id VARCHAR(32) NOT NULL, discord_id VARCHAR(32) NOT NULL,
    kind VARCHAR(16) NOT NULL, status VARCHAR(16) NOT NULL DEFAULT 'pending', payload_json LONGTEXT NOT NULL,
    claim_token VARCHAR(64) NULL, lease_until BIGINT NOT NULL DEFAULT 0, retry_at BIGINT NOT NULL DEFAULT 0,
    last_error TEXT NULL, completed_at BIGINT NULL,
    UNIQUE KEY onboarding_member_kind (guild_id, discord_id, kind),
    INDEX onboarding_pending (guild_id, status, retry_at)
  ) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
 ]) await db.query(sql);
}

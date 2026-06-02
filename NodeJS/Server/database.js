import fs from 'node:fs';
import path from 'node:path';
import Database from 'better-sqlite3';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
export const DB_PATH = process.env.DB_PATH || path.join(DATA_DIR, 'guildsync.db');

export function openDatabase() {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  const db = new Database(DB_PATH);

  db.pragma('journal_mode = WAL');
  db.pragma('busy_timeout = 5000');
  db.pragma('foreign_keys = ON');

  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      discord_user_id TEXT PRIMARY KEY,
      username TEXT NOT NULL,
      display_name TEXT,
      email TEXT,
      avatar TEXT,
      allowed INTEGER NOT NULL DEFAULT 0,
      role TEXT NOT NULL DEFAULT 'pending',
      requested_at TEXT NOT NULL,
      approved_at TEXT,
      last_login_at TEXT,
      updated_at TEXT NOT NULL,
      guild_member_name TEXT
    );

    CREATE INDEX IF NOT EXISTS idx_users_allowed
      ON users (allowed);

    CREATE INDEX IF NOT EXISTS idx_users_role
      ON users (role);
  `);

  return db;
}

export function upsertDiscordUser(db, discordUser) {
  const now = new Date().toISOString();

  const existing = db.prepare(`
    SELECT *
    FROM users
    WHERE discord_user_id = ?
  `).get(discordUser.id);

  const username = discordUser.username || 'unknown';
  const displayName = discordUser.global_name || discordUser.username || 'Unknown Discord User';
  const email = discordUser.email || null;
  const avatar = discordUser.avatar || null;

  if (!existing) {
    db.prepare(`
      INSERT INTO users (
        discord_user_id,
        username,
        display_name,
        email,
        avatar,
        allowed,
        role,
        requested_at,
        last_login_at,
        updated_at
      )
      VALUES (?, ?, ?, ?, ?, 0, 'pending', ?, ?, ?)
    `).run(
      discordUser.id,
      username,
      displayName,
      email,
      avatar,
      now,
      now,
      now
    );

    return db.prepare(`
      SELECT *
      FROM users
      WHERE discord_user_id = ?
    `).get(discordUser.id);
  }

  db.prepare(`
    UPDATE users
    SET username = ?,
        display_name = ?,
        email = ?,
        avatar = ?,
        last_login_at = ?,
        updated_at = ?
    WHERE discord_user_id = ?
  `).run(
    username,
    displayName,
    email,
    avatar,
    now,
    now,
    discordUser.id
  );

  return db.prepare(`
    SELECT *
    FROM users
    WHERE discord_user_id = ?
  `).get(discordUser.id);
}

export function approveUser(db, discordUserId, role = 'member') {
  const now = new Date().toISOString();

  const result = db.prepare(`
    UPDATE users
    SET allowed = 1,
        role = ?,
        approved_at = COALESCE(approved_at, ?),
        updated_at = ?
    WHERE discord_user_id = ?
  `).run(role, now, now, discordUserId);

  return result.changes > 0;
}

export function denyUser(db, discordUserId) {
  const now = new Date().toISOString();

  const result = db.prepare(`
    UPDATE users
    SET allowed = 0,
        role = 'pending',
        approved_at = NULL,
        updated_at = ?
    WHERE discord_user_id = ?
  `).run(now, discordUserId);

  return result.changes > 0;
}

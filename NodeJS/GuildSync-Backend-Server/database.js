import fs from 'node:fs';
import path from 'node:path';
import Database from 'better-sqlite3';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
export const LOGIN_DB_PATH = process.env.DB_PATH || path.join(DATA_DIR, 'guildsyncloginusers.db');
export const GUILDSYNC_DB_PATH = process.env.DB_PATH || path.join(DATA_DIR, 'guildsyncappdata.db');

export function openLoginDatabase() {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  const db = new Database(LOGIN_DB_PATH);

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

export function upsertLoginUser(db, discordUser) {
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

export function processDiscordRolesPayload(db2, payload) {
  const roles = Array.isArray(payload.roles) ? payload.roles : [];

  const upsertRole = db2.prepare(`INSERT INTO roles (role_id, role_name) VALUES (@role_id, @role_name) ON CONFLICT(role_id) DO UPDATE SET role_name = excluded.role_name`);

  const transaction = db2.transaction(() => {
    for (const role of roles) {
      const roleID = String(role.role_id || role.id || '').trim();
      const roleName = String(role.role_name || role.name || '').trim();

      if (!roleID) {
        continue;
      }

      upsertRole.run({
        role_id: roleID,
        role_name: roleName || 'Unnamed Role'
      });
    }
  });

  transaction();
  ensureRoleColumnsOnMembersTable(db2, roles);

  return {
    roles_processed: roles.length
  };
}

export function openAppDataDatabase() {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  const db2 = new Database(GUILDSYNC_DB_PATH);

  db2.pragma('journal_mode = WAL');
  db2.pragma('busy_timeout = 5000');
  db2.pragma('foreign_keys = ON');

  db2.exec(`
    CREATE TABLE IF NOT EXISTS roles (role_id TEXT PRIMARY KEY, role_name TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS discordMembers (discord_id TEXT PRIMARY KEY, username TEXT NOT NULL, display_name TEXT, server_nickname TEXT);
    CREATE INDEX IF NOT EXISTS idx_roles ON roles (role_name);
    CREATE INDEX IF NOT EXISTS idx_discord_members ON discordMembers (username);
  `);

  return db2;
}

export function upsertDiscordRoles(db2, role) {
  const existing = db.prepare(`SELECT * FROM roles WHERE role_id = ?`).get(role.id);
  if (!existing) {
    db2.prepare(`INSERT INTO roles (role_id, role_name) VALUES (?, ?)`).run(role.id, role.name);
    return db2.prepare(`SELECT * FROM roles WHERE role_id = ? `).get(role.id);
  } else {
    db2.prepare(`UPDATE roles SET role_name = ? WHERE role_id = ? `).run(role.name, role.id);
    return db2.prepare(`SELECT * FROM roles WHERE role_id = ?`).get(role.id);
  }
}

function ensureRoleColumnsOnMembersTable(db2, roles) {
  const existingColumns = db2.prepare(`PRAGMA table_info(discordMembers)`).all().map(column => column.name);
  const existingColumnSet = new Set(existingColumns);
  for (const role of roles) {
    const columnName = 'r_' + `${role.role_id}`;
    if (!existingColumnSet.has(columnName)) {
      db2.prepare(`ALTER TABLE discordMembers ADD COLUMN ${quoteIdentifier(columnName)} BOOLEAN NOT NULL DEFAULT 0`).run();
      existingColumnSet.add(columnName);
    }
  }

  return db2;
}

function quoteIdentifier(identifier) {
  return `"${String(identifier).replaceAll('"', '""')}"`;
}

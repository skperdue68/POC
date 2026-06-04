import fs from 'node:fs';
import path from 'node:path';
import Database from 'better-sqlite3';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function findDatabaseDataDir(startDir) {
  let currentDir = startDir;

  while (true) {
    const candidate = path.join(currentDir, 'Database', 'SQLite', 'data');

    if (fs.existsSync(path.join(currentDir, 'Database'))) {
      fs.mkdirSync(candidate, { recursive: true });
      return candidate;
    }

    const parentDir = path.dirname(currentDir);

    // Stop when we reach the drive/root folder
    if (parentDir === currentDir) {
      throw new Error(
        `Could not find a Database folder above ${startDir}`
      );
    }

    currentDir = parentDir;
  }
}

const DATA_DIR =
  process.env.DATA_DIR || findDatabaseDataDir(__dirname);

export const LOGIN_DB_PATH =
  process.env.LOGIN_DB_PATH || path.join(DATA_DIR, 'guildSync_loginDB.db');

export const GUILDSYNC_DB_PATH =
  process.env.GUILDSYNC_DB_PATH || path.join(DATA_DIR, 'guildSync_applicationDB.db');


// Will Create the Login Database if it does not yet exist, and leave it open for querrying.
export function openLoginDB() {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  const loginDB = new Database(LOGIN_DB_PATH);

  loginDB.pragma('journal_mode = WAL');
  loginDB.pragma('busy_timeout = 5000');


  loginDB.exec(`
    CREATE TABLE IF NOT EXISTS users (
      discord_user_id TEXT PRIMARY KEY,
      username TEXT NOT NULL,
      global_name TEXT,
      guild_user_name TEXT,
      email TEXT,
      avatar TEXT,
      allowed INTEGER NOT NULL DEFAULT 0,
      role TEXT NOT NULL DEFAULT 'user',
      requested_at TEXT NOT NULL,
      approved_at TEXT,
      last_login_at TEXT,
      updated_at TEXT NOT NULL
    );
  `);
  return loginDB;
}

export function upsertLoginUser(loginDB, discordUser) {
  const now = new Date().toISOString();
  const record = loginDB.prepare(`
  SELECT COUNT(*) AS admin_count
  FROM users
  WHERE allowed = 1
    AND role = 'admin'
  `).get();

  // If there are no admin users, and you are inserting one auto approve and make them admin otherwise they are pending and not allowed
  const isFirstAdmin = record.admin_count === 0;

  const allowed = isFirstAdmin ? 1 : 0;
  const role = isFirstAdmin ? 'admin' : 'pending';

  const username = discordUser.username;
  const global_name = discordUser.global_name;

  const email = discordUser.email || null;
  const avatar = discordUser.avatar || null;

  loginDB.prepare(`
    INSERT INTO users (
      discord_user_id,
      username,
      global_name,
      email,
      avatar,
      allowed,
      role,
      requested_at,
      last_login_at,
      updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

    ON CONFLICT(discord_user_id) DO UPDATE SET
      username = excluded.username,
      global_name = excluded.global_name,
      email = excluded.email,
      avatar = excluded.avatar,
      last_login_at = excluded.last_login_at,
      updated_at = excluded.updated_at
  `).run(
    discordUser.id,
    username,
    global_name,
    email,
    avatar,
    allowed,
    role,
    now,
    now,
    now
  );

  // Return the updated / aaded user
  return loginDB.prepare(`
    SELECT *
    FROM users
    WHERE discord_user_id = ?
  `).get(discordUser.id);
}

export function openAppDataDB() {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  const applicationDB = new Database(GUILDSYNC_DB_PATH);

  applicationDB.pragma('journal_mode = WAL');
  applicationDB.pragma('busy_timeout = 5000');

  applicationDB.exec(`CREATE TABLE IF NOT EXISTS roles (
    role_id TEXT PRIMARY KEY,
    role_name TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS discordMembers (
    discord_id TEXT PRIMARY KEY,
    username TEXT NOT NULL,
    global_name TEXT,
    server_nickname TEXT);
    CREATE INDEX IF NOT EXISTS idx_roles ON roles (role_name);
    CREATE INDEX IF NOT EXISTS idx_discord_members ON discordMembers (username);
  `);

  return applicationDB;
}

export function upsertDiscordRoles(applicationDB, payload) {
  const roles = Array.isArray(payload.roles) ? payload.roles : [];

  const upsertRole = applicationDB.prepare(`
    INSERT INTO roles (
      role_id,
      role_name
    )
    VALUES (
      @role_id,
      @role_name
    )
    ON CONFLICT(role_id) DO UPDATE SET
      role_name = excluded.role_name
  `);

  const transaction = applicationDB.transaction(() => {
    for (const role of roles) {
      const roleID = String(role.role_id || role.id || '').trim();
      const roleName = String(role.role_name || role.name || '').trim();

      if (!roleID) {
        continue;
      }

      upsertRole.run({
        role_id: roleID,
        role_name: roleName
      });
    }
  });
  transaction();
  addRoleColumnsToMembers(applicationDB, roles);

  return {
    roles_processed: roles.length
  };
}

function addRoleColumnsToMembers(applicationDB, roles) {
  const existingColumns = applicationDB
    .prepare(`
      PRAGMA table_info(discordMembers)
    `)
    .all()
    .map((column) => column.name);

  const existingColumnSet = new Set(existingColumns);

  for (const role of roles) {
    const columnName = 'r_' + `${role.role_id}`;

    if (!existingColumnSet.has(columnName)) {
      applicationDB
        .prepare(`
          ALTER TABLE discordMembers
          ADD COLUMN ${quoteIdentifier(columnName)}
          BOOLEAN NOT NULL DEFAULT 0
        `)
        .run();

      existingColumnSet.add(columnName);
    }
  }

  return applicationDB;
}

export function upsertDiscordMembers(applicationDB, members) {
  if (!Array.isArray(members) || members.length === 0) {
    return {
      members_processed: 0,
      members_removed: 0
    };
  }

  const existingColumns = applicationDB
    .prepare(`
      PRAGMA table_info(discordMembers)
    `)
    .all()
    .map((column) => column.name);

  const existingColumnSet = new Set(existingColumns);

  if (!existingColumnSet.has('isImported')) {
    applicationDB
      .prepare(`
        ALTER TABLE discordMembers
        ADD COLUMN isImported BOOLEAN NOT NULL DEFAULT 0
      `)
      .run();
  }

  applicationDB
    .prepare(`
      UPDATE discordMembers
      SET isImported = 0
    `)
    .run();

  const baseColumns = [
    'discord_id',
    'username',
    'global_name',
    'server_nickname',
    'isImported'
  ];

  const roleColumns = [
    ...new Set(
      members.flatMap((member) =>
        Object.keys(member).filter((key) => key.startsWith('r_'))
      )
    )
  ];

  const columns = [
    ...baseColumns,
    ...roleColumns
  ];

  const quotedColumns = columns
    .map((column) => quoteIdentifier(column))
    .join(', ');

  const placeholders = columns
    .map(() => '?')
    .join(', ');

  const replaceMember = applicationDB.prepare(`
    REPLACE INTO discordMembers (
      ${quotedColumns}
    )
    VALUES (
      ${placeholders}
    )
  `);

  const transaction = applicationDB.transaction(() => {
    for (const member of members) {
      const values = columns.map((column) => {
        if (column === 'isImported') {
          return 1;
        }

        if (column.startsWith('r_')) {
          return member[column] ? 1 : 0;
        }

        return member[column] ?? '';
      });

      replaceMember.run(...values);
    }
  });

  transaction();

  const deleted_records =
    applicationDB.prepare(`
        DELETE FROM discordMembers
        WHERE isImported = 0
      `)
      .run();

  applicationDB
    .prepare(`
        ALTER TABLE discordMembers
        DROP COLUMN isImported
      `)
    .run();


  return {
    members_processed: members.length,
    members_removed: deleted_records.changes
  };
}

function quoteIdentifier(identifier) {
  return `"${String(identifier).replaceAll('"', '""')}"`;
}

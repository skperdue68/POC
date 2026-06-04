import mysql from 'mysql2/promise';

export const MARIADB_HOST = process.env.MARIADB_HOST || '127.0.0.1';
export const MARIADB_PORT = Number(process.env.MARIADB_PORT || 3306);
export const MARIADB_USER = requiredDatabaseEnv('MARIADB_USER');
export const MARIADB_PASSWORD = requiredDatabaseEnv('MARIADB_PASSWORD');
export const GUILDSYNC_DB_NAME = process.env.MARIADB_DATABASE || 'guildsync';
export const MARIADB_CONNECTION_LIMIT = Number(
  process.env.MARIADB_CONNECTION_LIMIT || 10
);

let guildSyncPoolPromise = null;

export async function openGuildSyncDB() {
  if (!guildSyncPoolPromise) {
    guildSyncPoolPromise = createAndInitializePool();
  }

  return guildSyncPoolPromise;
}

export async function openLoginDB() {
  return openGuildSyncDB();
}

export async function openAppDataDB() {
  return openGuildSyncDB();
}

async function createAndInitializePool() {
  const adminConnection = await mysql.createConnection({
    host: MARIADB_HOST,
    port: MARIADB_PORT,
    user: MARIADB_USER,
    password: MARIADB_PASSWORD,
    multipleStatements: false
  });

  try {
    await adminConnection.query(`
      CREATE DATABASE IF NOT EXISTS ${quoteIdentifier(GUILDSYNC_DB_NAME)}
      CHARACTER SET utf8mb4
      COLLATE utf8mb4_unicode_ci
    `);
  } finally {
    await adminConnection.end();
  }

  const pool = mysql.createPool({
    host: MARIADB_HOST,
    port: MARIADB_PORT,
    user: MARIADB_USER,
    password: MARIADB_PASSWORD,
    database: GUILDSYNC_DB_NAME,
    waitForConnections: true,
    connectionLimit: MARIADB_CONNECTION_LIMIT,
    queueLimit: 0,
    charset: 'utf8mb4'
  });

  await initializeSchema(pool);

  return pool;
}

async function initializeSchema(db) {
  await db.query(`
    CREATE TABLE IF NOT EXISTS guildsyncusers (
      discord_user_id VARCHAR(32) PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      global_name VARCHAR(255),
      guild_member_name VARCHAR(255),
      email VARCHAR(255),
      avatar TEXT,
      allowed TINYINT(1) NOT NULL DEFAULT 0,
      role VARCHAR(50) NOT NULL DEFAULT 'user',
      requested_at VARCHAR(32) NOT NULL,
      approved_at VARCHAR(32),
      last_login_at VARCHAR(32)
    )
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS discordroles (
      role_id VARCHAR(32) PRIMARY KEY,
      role_name VARCHAR(255) NOT NULL,
      role_color VARCHAR(32)
    )
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS discordmembers (
      discord_id VARCHAR(32) PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      global_name VARCHAR(255),
      server_nickname VARCHAR(255),
      avatar TEXT NULL,
      import_current BOOLEAN NOT NULL DEFAULT FALSE
    )
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS discordmemberroles (
      discord_id VARCHAR(32),
      role_id VARCHAR(32),
      PRIMARY KEY (discord_id, role_id),
      CONSTRAINT discordmembers_to_discordmemberroles FOREIGN KEY (discord_id) REFERENCES discordmembers (discord_id) ON DELETE CASCADE ON UPDATE CASCADE,
      CONSTRAINT discordroles_to_discordmemberroles FOREIGN KEY (role_id) REFERENCES discordroles (role_id) ON DELETE CASCADE ON UPDATE CASCADE
    )
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS settings (
      data VARCHAR(255) PRIMARY KEY,
      value TEXT
    )
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci
  `);

  await db.query(`
    CREATE INDEX IF NOT EXISTS idx_roles
    ON discordroles (role_name)
  `);

  await db.query(`
    CREATE INDEX IF NOT EXISTS idx_discord_members
    ON discordmembers (username)
  `);
}

export async function upsertLoginUser(loginDB, discordUser) {
  const now = new Date().toISOString();

  const [adminRows] = await loginDB.execute(`
    SELECT COUNT(*) AS admin_count
    FROM guildsyncusers
    WHERE allowed = 1
      AND role = 'admin'
  `);

  const isFirstAdmin = Number(adminRows[0]?.admin_count || 0) === 0;

  const allowed = isFirstAdmin ? 1 : 0;
  const role = isFirstAdmin ? 'admin' : 'pending';

  const username = discordUser.username || '';
  const globalName = discordUser.global_name || null;
  const email = discordUser.email || null;
  const avatar = discordUser.avatar || null;

  await loginDB.execute(
    `
      INSERT INTO guildsyncusers (
        discord_user_id,
        username,
        global_name,
        email,
        avatar,
        allowed,
        role,
        requested_at,
        last_login_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        username = VALUES(username),
        global_name = VALUES(global_name),
        email = VALUES(email),
        avatar = VALUES(avatar),
        last_login_at = VALUES(last_login_at)
      `,
    [
      discordUser.id,
      username,
      globalName,
      email,
      avatar,
      allowed,
      role,
      now,
      now
    ]
  );

  const [rows] = await loginDB.execute(
    `
      SELECT *
      FROM guildsyncusers
      WHERE discord_user_id = ?
    `,
    [discordUser.id]
  );

  return rows[0] || null;
}

export async function upsertDiscordRoles(applicationDB, payload) {
  const roles = Array.isArray(payload.roles) ? payload.roles : [];

  const connection = await applicationDB.getConnection();

  try {
    await connection.beginTransaction();

    for (const role of roles) {
      const roleID = String(role.role_id || role.id || '').trim();
      const roleName = String(role.role_name || role.name || '').trim();
      const roleColor = role.role_color ?? null;

      if (!roleID) {
        continue;
      }

      await connection.execute(
        `
          INSERT INTO discordroles (
            role_id,
            role_name,
            role_color
          )
          VALUES (
            ?,
            ?,
            ?
          )
          ON DUPLICATE KEY UPDATE
            role_name = VALUES(role_name),
            role_color = VALUES(role_color)
        `,
        [
          roleID,
          roleName || 'Unnamed Role',
          roleColor
        ]
      );
    }

    await connection.commit();
  } catch (error) {
    await safeRollback(connection);
    throw error;
  } finally {
    connection.release();
  }

  return {
    roles_processed: roles.length
  };
}

export async function upsertDiscordMembers(applicationDB, payload) {
  const members = Array.isArray(payload?.members)
    ? payload.members
    : Array.isArray(payload)
      ? payload
      : [];

  if (members.length === 0) {
    return {
      members_processed: 0,
      members_removed: 0,
      member_roles_processed: 0
    };
  }

  const memberSql = `
    INSERT INTO discordmembers (
      discord_id,
      avatar,
      username,
      global_name,
      server_nickname,
      import_current
    )
    VALUES (
      ?,
      ?,
      ?,
      ?,
      ?,
      ?
    )
    ON DUPLICATE KEY UPDATE
      avatar = VALUES(avatar),
      username = VALUES(username),
      global_name = VALUES(global_name),
      server_nickname = VALUES(server_nickname),
      import_current = VALUES(import_current)
  `;

  const memberRoleSql = `
    INSERT IGNORE INTO discordmemberroles (
      discord_id,
      role_id
    )
    VALUES (
      ?,
      ?
    )
  `;

  const connection = await applicationDB.getConnection();

  let membersRemoved = 0;
  let memberRolesProcessed = 0;

  try {
    await connection.beginTransaction();

    await connection.execute(`
      UPDATE discordmembers
      SET import_current = 0
    `);

    for (const member of members) {
      const discordID = String(member.discord_id || member.id || '').trim();

      if (!discordID) {
        continue;
      }

      await connection.execute(
        memberSql,
        [
          discordID,
          member.avatar || null,
          member.username || '',
          member.global_name || null,
          member.server_nickname || null,
          1
        ]
      );

      await connection.execute(
        `
          DELETE FROM discordmemberroles
          WHERE discord_id = ?
        `,
        [discordID]
      );

      const roleIDs = getRoleIDsFromMember(member);

      for (const roleID of roleIDs) {
        await connection.execute(
          memberRoleSql,
          [
            discordID,
            roleID
          ]
        );

        memberRolesProcessed += 1;
      }
    }

    const [deleteResult] = await connection.execute(`
      DELETE FROM discordmembers
      WHERE import_current = 0
    `);

    membersRemoved = deleteResult.affectedRows || 0;

    await connection.commit();
  } catch (error) {
    await safeRollback(connection);
    throw error;
  } finally {
    connection.release();
  }

  await setSetting(
    applicationDB,
    'discord_refresh',
    new Date().toISOString()
  );

  return {
    members_processed: members.length,
    members_removed: membersRemoved,
    member_roles_processed: memberRolesProcessed
  };
}

function getRoleIDsFromMember(member) {
  if (!Array.isArray(member.roles)) {
    return [];
  }

  const roleIDs = new Set();

  for (const role of member.roles) {
    const roleID = typeof role === 'object' && role !== null
      ? String(role.role_id || role.id || '').trim()
      : String(role || '').trim();

    if (roleID) {
      roleIDs.add(roleID);
    }
  }

  return [...roleIDs];
}

export async function getDiscordDataDate(applicationDB) {
  const [rows] = await applicationDB.execute(
    `
      SELECT
        data,
        value
      FROM settings
      WHERE data = ?
      LIMIT 1
    `,
    [
      'discord_refresh'
    ]
  );

  return rows[0] || {
    data: 'discord_refresh',
    value: null
  };
}

export async function getDiscordMemberDataJSON(applicationDB) {
  const [rows] = await applicationDB.execute(`
    SELECT JSON_ARRAYAGG(
      JSON_OBJECT(
        'discord_id', member_rows.discord_id,
        'username', member_rows.username,
        'global_name', member_rows.global_name,
        'server_nickname', member_rows.server_nickname,
        'avatar', member_rows.avatar,
        'roles', member_rows.roles
      )
    ) AS members_json
    FROM (
      SELECT
        dm.discord_id,
        dm.username,
        dm.global_name,
        dm.server_nickname,
        dm.avatar,
        COALESCE(r.roles, JSON_ARRAY()) AS roles
      FROM discordmembers dm
      LEFT JOIN (
        SELECT
          dmr.discord_id,
          JSON_ARRAYAGG(
            JSON_OBJECT(
              'role_id', dr.role_id,
              'role_name', dr.role_name,
              'role_color', dr.role_color
            )
          ) AS roles
        FROM discordmemberroles dmr
        JOIN discordroles dr
          ON dmr.role_id = dr.role_id
        GROUP BY dmr.discord_id
      ) r
        ON dm.discord_id = r.discord_id
      ORDER BY
        dm.server_nickname,
        dm.username
    ) AS member_rows
  `);

  const membersJson = rows[0]?.members_json;

  if (!membersJson) {
    return [];
  }

  if (typeof membersJson === 'string') {
    return JSON.parse(membersJson);
  }

  return membersJson;
}

async function safeRollback(connection) {
  try {
    await connection.rollback();
  } catch {
    // Ignore rollback failures so the original error can be thrown.
  }
}

function quoteIdentifier(identifier) {
  return `\`${String(identifier).replaceAll('`', '``')}\``;
}

function requiredDatabaseEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(
      `Missing required MariaDB environment variable: ${name}`
    );
  }

  return value;
}

async function setSetting(db, data, value) {
  await db.execute(
    `
      INSERT INTO settings (
        data,
        value
      )
      VALUES (
        ?,
        ?
      )
      ON DUPLICATE KEY UPDATE
        value = VALUES(value)
    `,
    [
      data,
      value
    ]
  );
}

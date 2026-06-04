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
    CREATE TABLE IF NOT EXISTS users (
      discord_user_id VARCHAR(32) PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      global_name VARCHAR(255),
      guild_user_name VARCHAR(255),
      email VARCHAR(255),
      avatar TEXT,
      allowed TINYINT(1) NOT NULL DEFAULT 0,
      role VARCHAR(50) NOT NULL DEFAULT 'user',
      requested_at VARCHAR(32) NOT NULL,
      approved_at VARCHAR(32),
      last_login_at VARCHAR(32),
      updated_at VARCHAR(32) NOT NULL
    )
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS roles (
      role_id VARCHAR(32) PRIMARY KEY,
      role_name VARCHAR(255) NOT NULL
    )
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS discordMembers (
      discord_id VARCHAR(32) PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      global_name VARCHAR(255),
      server_nickname VARCHAR(255)
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
    ON roles (role_name)
  `);

  await db.query(`
    CREATE INDEX IF NOT EXISTS idx_discord_members
    ON discordMembers (username)
  `);
}

export async function upsertLoginUser(loginDB, discordUser) {
  const now = new Date().toISOString();

  const [adminRows] = await loginDB.execute(`
    SELECT COUNT(*) AS admin_count
    FROM users
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
      ON DUPLICATE KEY UPDATE
        username = VALUES(username),
        global_name = VALUES(global_name),
        email = VALUES(email),
        avatar = VALUES(avatar),
        last_login_at = VALUES(last_login_at),
        updated_at = VALUES(updated_at)
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
      now,
      now
    ]
  );

  const [rows] = await loginDB.execute(
    `
      SELECT *
      FROM users
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

      if (!roleID) {
        continue;
      }

      await connection.execute(
        `
          INSERT INTO roles (
            role_id,
            role_name
          )
          VALUES (
            ?,
            ?
          )
          ON DUPLICATE KEY UPDATE
            role_name = VALUES(role_name)
        `,
        [
          roleID,
          roleName || 'Unnamed Role'
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

  await addRoleColumnsToMembers(applicationDB, roles);

  return {
    roles_processed: roles.length
  };
}

async function addRoleColumnsToMembers(applicationDB, roles) {
  const existingColumns = await getTableColumns(applicationDB, 'discordMembers');
  const existingColumnSet = new Set(existingColumns);

  for (const role of roles) {
    const roleID = String(role.role_id || role.id || '').trim();
    const roleName = String(role.role_name || role.name || 'Unnamed Role').trim() || 'Unnamed Role';

    if (!roleID) {
      continue;
    }

    const columnName = `r_${roleID}`;
    const columnComment = quoteStringForSqlComment(roleName);

    if (!existingColumnSet.has(columnName)) {
      await applicationDB.query(`
        ALTER TABLE discordMembers
        ADD COLUMN ${quoteIdentifier(columnName)}
        TINYINT(1) NOT NULL DEFAULT 0
        COMMENT ${columnComment}
      `);

      existingColumnSet.add(columnName);
    } else {
      await applicationDB.query(`
        ALTER TABLE discordMembers
        MODIFY COLUMN ${quoteIdentifier(columnName)}
        TINYINT(1) NOT NULL DEFAULT 0
        COMMENT ${columnComment}
      `);
    }
  }

  return applicationDB;
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
      members_removed: 0
    };
  }

  let existingColumns = await getTableColumns(applicationDB, 'discordMembers');
  const existingColumnSet = new Set(existingColumns);

  if (!existingColumnSet.has('isImported')) {
    await applicationDB.query(`
      ALTER TABLE discordMembers
      ADD COLUMN isImported TINYINT(1) NOT NULL DEFAULT 0
    `);

    existingColumnSet.add('isImported');
  }

  const payloadRoleColumns = [
    ...new Set(
      members.flatMap((member) =>
        Object.keys(member).filter((key) => key.startsWith('r_'))
      )
    )
  ];

  for (const columnName of payloadRoleColumns) {
    if (!existingColumnSet.has(columnName)) {
      await applicationDB.query(`
        ALTER TABLE discordMembers
        ADD COLUMN ${quoteIdentifier(columnName)} TINYINT(1) NOT NULL DEFAULT 0
      `);

      existingColumnSet.add(columnName);
    }
  }

  existingColumns = await getTableColumns(applicationDB, 'discordMembers');

  const existingRoleColumns = existingColumns.filter((column) =>
    column.startsWith('r_')
  );

  const baseColumns = [
    'discord_id',
    'username',
    'global_name',
    'server_nickname',
    'isImported'
  ];

  const columns = [
    ...baseColumns,
    ...existingRoleColumns
  ];

  const quotedColumns = columns
    .map((column) => quoteIdentifier(column))
    .join(', ');

  const placeholders = columns
    .map(() => '?')
    .join(', ');

  const replaceSql = `
    REPLACE INTO discordMembers (
      ${quotedColumns}
    )
    VALUES (
      ${placeholders}
    )
  `;

  const connection = await applicationDB.getConnection();

  let membersRemoved = 0;

  try {
    await connection.beginTransaction();

    await connection.execute(`
      UPDATE discordMembers
      SET isImported = 0
    `);

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

      await connection.execute(replaceSql, values);
    }

    const [deleteResult] = await connection.execute(`
      DELETE FROM discordMembers
      WHERE isImported = 0
    `);

    membersRemoved = deleteResult.affectedRows || 0;

    await connection.commit();
  } catch (error) {
    await safeRollback(connection);
    throw error;
  } finally {
    connection.release();
  }

  if (await columnExists(applicationDB, 'discordMembers', 'isImported')) {
    await applicationDB.query(`
      ALTER TABLE discordMembers
      DROP COLUMN isImported
    `);
  }

  await setSetting(
    applicationDB,
    'discord_refresh',
    new Date().toISOString()
  );

  return {
    members_processed: members.length,
    members_removed: membersRemoved
  };
}

async function getTableColumns(db, tableName) {
  const [rows] = await db.execute(
    `
      SELECT COLUMN_NAME AS column_name
      FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_SCHEMA = ?
        AND TABLE_NAME = ?
      ORDER BY ORDINAL_POSITION
    `,
    [
      GUILDSYNC_DB_NAME,
      tableName
    ]
  );

  return rows.map((row) => row.column_name);
}

async function columnExists(db, tableName, columnName) {
  const [rows] = await db.execute(
    `
      SELECT COUNT(*) AS column_count
      FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_SCHEMA = ?
        AND TABLE_NAME = ?
        AND COLUMN_NAME = ?
    `,
    [
      GUILDSYNC_DB_NAME,
      tableName,
      columnName
    ]
  );

  return Number(rows[0]?.column_count || 0) > 0;
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

function quoteStringForSqlComment(value) {
  const comment = String(value || '')
    .replaceAll("'", "''")
    .slice(0, 1024);

  return `'${comment}'`;
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

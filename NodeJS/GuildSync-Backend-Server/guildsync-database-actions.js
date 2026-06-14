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

  await db.query(`
    CREATE TABLE IF NOT EXISTS  guildsyncbanking (
      eventId varchar(32) NOT NULL,
      transactionType varchar(32) NOT NULL,
      receivedFrom varchar(255) NOT NULL,
      eventTimestamp varchar(32) NOT NULL,
      dateTime datetime NOT NULL,
      depositAmount int(10) unsigned NOT NULL,
      ticketQuantity int(10) unsigned DEFAULT NULL,
      dataSource varchar(64) NOT NULL,
      note varchar(255) DEFAULT NULL,
      emailRequested tinyint(1) NOT NULL DEFAULT 0,
      PRIMARY KEY (eventId)
    )
    CHARSET=utf8mb4
    COLLATE=utf8mb4_unicode_ci
  `);


  await db.query(`
    CREATE TABLE IF NOT EXISTS rosterstreamhistory (
      event_id VARCHAR(32) PRIMARY KEY NOT NULL,
      account_name VARCHAR(64) NOT NULL,
      event_type VARCHAR(32) NOT NULL,
      rank VARCHAR(20),
      timestamp VARCHAR(32) NOT NULL,
      officer VARCHAR(64)
    )
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS rosterrankhistory (
      account_name VARCHAR(64) PRIMARY KEY NOT NULL,
      rank VARCHAR(20)
    )
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS guildsyncroster (
      account_name VARCHAR(32) PRIMARY KEY NOT NULL,
      rank VARCHAR(20),
      joined VARCHAR(32),
      in_roster TINYINT(1) NOT NULL DEFAULT 1
    )
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci
  `);



  await db.query(`
    CREATE TABLE IF NOT EXISTS guildsyncmemberlinks (
      eso_account_name VARCHAR(64) PRIMARY KEY NOT NULL,
      discord_user_id VARCHAR(32),
      discord_username VARCHAR(255),
      discord_display_name VARCHAR(255),
      discord_server_nickname VARCHAR(255),
      link_status VARCHAR(20) NOT NULL DEFAULT 'unlinked',
      link_method VARCHAR(20) NOT NULL DEFAULT 'none',
      match_confidence DECIMAL(5,2) NOT NULL DEFAULT 0,
      match_reason VARCHAR(255),
      match_field VARCHAR(64),
      locked TINYINT(1) NOT NULL DEFAULT 0,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_guildsyncmemberlinks_discord_user_id (discord_user_id),
      INDEX idx_guildsyncmemberlinks_status (link_status),
      INDEX idx_guildsyncmemberlinks_locked (locked)
    )
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci
  `);


  await db.query(`
    ALTER TABLE guildsyncmemberlinks
      ADD COLUMN IF NOT EXISTS match_field VARCHAR(64) NULL
  `);

  await db.query(`
    UPDATE guildsyncmemberlinks
    SET link_status = 'unlinked',
        link_method = CASE WHEN link_method = 'manual_unlink' THEN link_method ELSE 'manual_unlink' END,
        match_reason = COALESCE(match_reason, 'Auto-link disabled by user')
    WHERE link_status = 'blocked'
  `);


  await db.query(`
    ALTER TABLE guildsyncbanking
    ADD COLUMN IF NOT EXISTS note VARCHAR(255) DEFAULT NULL
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

  await setDiscordRefreshNow(applicationDB);
  await runMemberAutoLinking(applicationDB);

  return {
    members_processed: members.length,
    members_removed: membersRemoved,
    member_roles_processed: memberRolesProcessed
  };
}


export async function upsertDiscordMember(applicationDB, member) {
  const discordID = String(member?.discord_id || member?.id || '').trim();

  if (!discordID) {
    return {
      members_processed: 0,
      member_roles_processed: 0
    };
  }

  const connection = await applicationDB.getConnection();
  let memberRolesProcessed = 0;

  try {
    await connection.beginTransaction();

    await connection.execute(
      `
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
      `,
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
        `
          INSERT IGNORE INTO discordmemberroles (
            discord_id,
            role_id
          )
          VALUES (
            ?,
            ?
          )
        `,
        [
          discordID,
          roleID
        ]
      );

      memberRolesProcessed += 1;
    }

    await connection.commit();
  } catch (error) {
    await safeRollback(connection);
    throw error;
  } finally {
    connection.release();
  }

  await setDiscordRefreshNow(applicationDB);

  return {
    members_processed: 1,
    member_roles_processed: memberRolesProcessed
  };
}

export async function deleteDiscordMember(applicationDB, discordID) {
  const memberID = String(discordID || '').trim();

  if (!memberID) {
    return {
      members_removed: 0
    };
  }

  const [result] = await applicationDB.execute(
    `
      DELETE FROM discordmembers
      WHERE discord_id = ?
    `,
    [memberID]
  );

  await setDiscordRefreshNow(applicationDB);

  return {
    members_removed: result.affectedRows || 0
  };
}

export async function upsertDiscordRole(applicationDB, role) {
  const roleID = String(role?.role_id || role?.id || '').trim();
  const roleName = String(role?.role_name || role?.name || '').trim();
  const roleColor = role?.role_color ?? null;

  if (!roleID) {
    return {
      roles_processed: 0
    };
  }

  await applicationDB.execute(
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

  await setDiscordRefreshNow(applicationDB);

  return {
    roles_processed: 1
  };
}

export async function deleteDiscordRole(applicationDB, roleID) {
  const discordRoleID = String(roleID || '').trim();

  if (!discordRoleID) {
    return {
      roles_removed: 0
    };
  }

  const [result] = await applicationDB.execute(
    `
      DELETE FROM discordroles
      WHERE role_id = ?
    `,
    [discordRoleID]
  );

  await setDiscordRefreshNow(applicationDB);

  return {
    roles_removed: result.affectedRows || 0
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







export async function getBankingDataDate(applicationDB) {
  const [rows] = await applicationDB.execute(`
    SELECT
      data,
      value
    FROM settings
    WHERE data = ?
    LIMIT 1
  `,
    [
      'banking_refresh'
    ]
  );

  return rows[0] || {
    data: 'banking_refresh',
    value: null
  };
}

export async function getBankingDataJSON(applicationDB) {
  const [rows] = await applicationDB.execute(`
    SELECT JSON_ARRAYAGG(
      JSON_OBJECT(
        'type', banking_rows.transactionType,
        'eventId', banking_rows.eventId,
        'time', CAST(banking_rows.eventTimestamp AS UNSIGNED),
        'displayName', banking_rows.receivedFrom,
        'amount', banking_rows.depositAmount,
        'ticketAmount', COALESCE(banking_rows.ticketQuantity, 0),
        'dataSource', banking_rows.dataSource,
        'emailRequested', banking_rows.emailRequested,
        'note', banking_rows.note
      )
    ) AS banking_json
    FROM (
      SELECT
        eventId,
        transactionType,
        receivedFrom,
        eventTimestamp,
        depositAmount,
        ticketQuantity,
        dataSource,
        emailRequested,
        note
      FROM guildsyncbanking
      ORDER BY CAST(eventTimestamp AS UNSIGNED) DESC, CAST(eventId AS UNSIGNED) DESC
    ) AS banking_rows
  `);

  const bankingJson = rows[0]?.banking_json;

  if (!bankingJson) {
    return [];
  }

  if (typeof bankingJson === 'string') {
    return JSON.parse(bankingJson);
  }

  return bankingJson;
}

export async function insertBankingEntries(applicationDB, payload) {
  const entries = Array.isArray(payload?.entries)
    ? payload.entries
    : [];

  if (entries.length === 0) {
    return {
      banking_entries_received: 0,
      banking_entries_inserted: 0,
      banking_entries_ignored: 0
    };
  }

  const connection = await applicationDB.getConnection();
  let insertedCount = 0;

  try {
    await connection.beginTransaction();

    for (const entry of entries) {
      const eventId = Number(entry.eventId);
      const transactionType = String(entry.type || entry.transactionType || '').trim();
      const receivedFrom = String(entry.displayName || entry.receivedFrom || '').trim();
      const eventTimestamp = Number(entry.time || entry.eventTimestamp);
      const depositAmount = Number(entry.amount || entry.depositAmount);

      const ticketQuantityRaw =
        entry.ticketAmount ??
        entry.ticketQuantity ??
        null;

      const ticketQuantity =
        ticketQuantityRaw === null || ticketQuantityRaw === undefined
          ? null
          : Number(ticketQuantityRaw);

      if (!eventId || !transactionType || !receivedFrom || !eventTimestamp || !depositAmount) {
        continue;
      }

      const [result] = await connection.execute(
        `
          INSERT IGNORE INTO guildsyncbanking (
            eventId,
            transactionType,
            receivedFrom,
            eventTimestamp,
            dateTime,
            depositAmount,
            ticketQuantity,
            dataSource,
            note,
            emailRequested
          )
          VALUES (
            ?,
            ?,
            ?,
            ?,
            FROM_UNIXTIME(?),
            ?,
            ?,
            ?,
            ?,
            0
          )
        `,
        [
          eventId,
          transactionType,
          receivedFrom,
          eventTimestamp,
          eventTimestamp,
          depositAmount,
          ticketQuantity,
          String(payload?.source || 'GuildSyncBanking').trim(),
          String(entry.note || '').trim() || null
        ]
      );

      insertedCount += result.affectedRows || 0;
    }

    if (entries.length > 0) {
      await connection.execute(
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
          'banking_refresh',
          new Date().toISOString()
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
    banking_entries_received: entries.length,
    banking_entries_inserted: insertedCount,
    banking_entries_ignored: entries.length - insertedCount
  };
}


























export async function getRosterDataDate(applicationDB) {
  const [rows] = await applicationDB.execute(`
    SELECT
      data,
      value
    FROM settings
    WHERE data = ?
    LIMIT 1
  `,
    [
      'roster_refresh'
    ]
  );

  return rows[0] || {
    data: 'roster_refresh',
    value: null
  };
}

export async function getRosterDataJSON(applicationDB) {
  const [rows] = await applicationDB.execute(`
    SELECT JSON_ARRAYAGG(
      JSON_OBJECT(
        'account_name', roster_rows.account_name,
        'rank', roster_rows.rank,
        'joined', roster_rows.joined,
        'in_roster', roster_rows.in_roster
      )
    ) AS roster_json
    FROM (
      SELECT
        account_name,
        rank,
        joined,
        in_roster
      FROM guildsyncroster
      WHERE in_roster = 1
      ORDER BY account_name ASC
    ) AS roster_rows
  `);

  const rosterJson = rows[0]?.roster_json;

  if (!rosterJson) {
    return [];
  }

  if (typeof rosterJson === 'string') {
    return JSON.parse(rosterJson);
  }

  return rosterJson;
}
export async function getRosterRankHistoryMatches(applicationDB, query = '') {
  const cleanQuery = normalizeRosterAccountName(query);

  if (!cleanQuery) {
    return [];
  }

  const [rows] = await applicationDB.execute(
    `
      SELECT
        account_name,
        rank
      FROM rosterrankhistory
      WHERE account_name LIKE ?
      ORDER BY account_name ASC
      LIMIT 50
    `,
    [`%${cleanQuery}%`]
  );

  return rows;
}

export async function getRosterStreamHistoryForAccount(applicationDB, accountName = '') {
  const cleanAccountName = normalizeRosterAccountName(accountName);

  if (!cleanAccountName) {
    return [];
  }

  const [rows] = await applicationDB.execute(
    `
      SELECT
        event_type,
        rank,
        timestamp,
        officer
      FROM rosterstreamhistory
      WHERE account_name = ?
      ORDER BY CAST(timestamp AS UNSIGNED) DESC, timestamp DESC
      LIMIT 250
    `,
    [cleanAccountName]
  );

  return rows;
}


export async function processRosterData(applicationDB, payload = {}) {
  const data = payload?.data && typeof payload.data === 'object'
    ? payload.data
    : payload;

  const guildDump = data?.guildDump && typeof data.guildDump === 'object'
    ? data.guildDump
    : null;

  const rosterEvents = normalizeRosterEvents(data?.rosterEvents);

  const connection = await applicationDB.getConnection();
  const result = {
    dump_received: Boolean(guildDump),
    dump_processed: false,
    dump_skipped_stale: false,
    dump_members_received: 0,
    dump_members_upserted: 0,
    automatic_removals_inserted: 0,
    stream_events_received: rosterEvents.length,
    stream_events_inserted: 0,
    roster_members_returned: 0
  };

  try {
    await connection.beginTransaction();

    if (guildDump) {
      const dumpTimestamp = normalizeRosterTimestamp(guildDump.dumpTimestamp);
      const guildMembers = normalizeGuildDumpMembers(guildDump.guildMembers);
      result.dump_members_received = guildMembers.length;

      if (dumpTimestamp) {
        const [settingRows] = await connection.execute(
          `
            SELECT value
            FROM settings
            WHERE data = ?
            LIMIT 1
          `,
          ['lastDump']
        );

        const lastDump = Number(settingRows[0]?.value || 0);

        if (lastDump > Number(dumpTimestamp)) {
          result.dump_skipped_stale = true;
        } else {
          await connection.execute(
            `
              INSERT INTO settings (data, value)
              VALUES (?, ?)
              ON DUPLICATE KEY UPDATE
                value = VALUES(value)
            `,
            ['lastDump', String(dumpTimestamp)]
          );

          await connection.execute(`UPDATE guildsyncroster SET in_roster = 0`);

          for (const member of guildMembers) {
            const accountName = normalizeRosterAccountName(member.accountName);
            const rankName = normalizeRosterRank(member.rankName || member.rank);

            if (!accountName) {
              continue;
            }

            const [upsertResult] = await connection.execute(
              `
                INSERT INTO guildsyncroster (
                  account_name,
                  rank,
                  joined,
                  in_roster
                )
                VALUES (?, ?, ?, 1)
                ON DUPLICATE KEY UPDATE
                  rank = VALUES(rank),
                  in_roster = 1
              `,
              [accountName, rankName, String(dumpTimestamp)]
            );

            result.dump_members_upserted += upsertResult.affectedRows || 0;

            await connection.execute(
              `
                INSERT IGNORE INTO rosterrankhistory (
                  account_name,
                  rank
                )
                VALUES (?, ?)
              `,
              [accountName, rankName]
            );
          }

          const [removedRows] = await connection.execute(
            `
              SELECT account_name, rank
              FROM guildsyncroster
              WHERE in_roster = 0
            `
          );

          for (const removed of removedRows) {
            const accountName = normalizeRosterAccountName(removed.account_name);
            const rankName = normalizeRosterRank(removed.rank);
            const generatedEventId = createAutomaticRosterEventId(dumpTimestamp);

            await connection.execute(
              `
                INSERT IGNORE INTO rosterstreamhistory (
                  event_id,
                  account_name,
                  event_type,
                  rank,
                  timestamp,
                  officer
                )
                VALUES (?, ?, ?, ?, ?, ?)
              `,
              [generatedEventId, accountName, 'Removed (Not On Roster)', rankName, String(dumpTimestamp), 'Automatic']
            );

            await connection.execute(
              `
                INSERT INTO rosterrankhistory (
                  account_name,
                  rank
                )
                VALUES (?, ?)
                ON DUPLICATE KEY UPDATE
                  rank = VALUES(rank)
              `,
              [accountName, rankName]
            );

            result.automatic_removals_inserted += 1;
          }

          await connection.execute(`DELETE FROM guildsyncroster WHERE in_roster = 0`);
          result.dump_processed = true;
        }
      }
    }

    for (const event of rosterEvents) {
      const processed = await processSingleRosterStreamEvent(connection, event);
      if (processed) {
        result.stream_events_inserted += 1;
      }
    }

    await connection.execute(
      `
        INSERT INTO settings (data, value)
        VALUES (?, ?)
        ON DUPLICATE KEY UPDATE
          value = VALUES(value)
      `,
      ['roster_refresh', new Date().toISOString()]
    );

    await connection.commit();
  } catch (error) {
    await safeRollback(connection);
    throw error;
  } finally {
    connection.release();
  }

  await runMemberAutoLinking(applicationDB);

  const roster = await getRosterDataJSON(applicationDB);
  result.roster_members_returned = roster.length;
  result.roster = roster;

  return result;
}

async function processSingleRosterStreamEvent(connection, event = {}) {
  const eventId = String(event.eventId || event.event_id || '').trim();
  const eventType = normalizeRosterEventType(event.eventType || event.event_type);
  const rankName = normalizeRosterRank(event.rankName || event.rank);
  const timestamp = normalizeRosterTimestamp(event.timestampS || event.timeStamp || event.timestamp || event.time);
  const actingDisplayName = normalizeRosterAccountName(event.actingDisplayName || event.acting_display_name);
  const targetDisplayName = normalizeRosterAccountName(event.targetDisplayName || event.target_display_name);

  if (!eventId || !eventType || eventType === 'unknown' || !timestamp) {
    return false;
  }

  const accountName = eventType === 'joined' || eventType === 'left'
    ? actingDisplayName
    : targetDisplayName;

  const officerName = ['kicked', 'promoted', 'demoted', 'application accepted', 'application declined', 'application_accepted', 'application_declined'].includes(eventType)
    ? actingDisplayName
    : '';

  if (!accountName) {
    return false;
  }

  const [insertResult] = await connection.execute(
    `
      INSERT IGNORE INTO rosterstreamhistory (
        event_id,
        account_name,
        event_type,
        rank,
        timestamp,
        officer
      )
      VALUES (?, ?, ?, ?, ?, ?)
    `,
    [eventId, accountName, eventType, rankName, String(timestamp), officerName]
  );

  if (eventType === 'joined') {
    await connection.execute(
      `
        INSERT INTO guildsyncroster (
          account_name,
          rank,
          joined,
          in_roster
        )
        VALUES (?, ?, ?, 1)
        ON DUPLICATE KEY UPDATE
          rank = VALUES(rank),
          in_roster = 1
      `,
      [accountName, 'Associate', String(timestamp)]
    );

    await connection.execute(
      `
        INSERT IGNORE INTO rosterrankhistory (
          account_name,
          rank
        )
        VALUES (?, ?)
      `,
      [accountName, 'Associate']
    );
  } else if (eventType === 'kicked' || eventType === 'left') {
    const [rows] = await connection.execute(
      `
        SELECT rank
        FROM guildsyncroster
        WHERE account_name = ?
        LIMIT 1
      `,
      [accountName]
    );

    const currentRank = normalizeRosterRank(rows[0]?.rank || rankName);

    await connection.execute(
      `
        INSERT INTO rosterrankhistory (
          account_name,
          rank
        )
        VALUES (?, ?)
        ON DUPLICATE KEY UPDATE
          rank = VALUES(rank)
      `,
      [accountName, currentRank]
    );

    await connection.execute(
      `
        DELETE FROM guildsyncroster
        WHERE account_name = ?
      `,
      [accountName]
    );
  } else if (eventType === 'promoted' || eventType === 'demoted') {
    await connection.execute(
      `
        INSERT INTO guildsyncroster (
          account_name,
          rank,
          joined,
          in_roster
        )
        VALUES (?, ?, ?, 1)
        ON DUPLICATE KEY UPDATE
          rank = VALUES(rank),
          in_roster = 1
      `,
      [accountName, rankName, String(timestamp)]
    );
  }

  return (insertResult.affectedRows || 0) > 0;
}

function normalizeGuildDumpMembers(guildMembers) {
  if (!guildMembers || typeof guildMembers !== 'object') {
    return [];
  }

  if (Array.isArray(guildMembers)) {
    return guildMembers.filter((member) => member && typeof member === 'object');
  }

  return Object.values(guildMembers).filter((member) => member && typeof member === 'object');
}

export async function getAssociateTicketReport(applicationDB) {
  const twoWeeksAgo = Math.floor(Date.now() / 1000) - (14 * 24 * 60 * 60);

  const [rows] = await applicationDB.execute(
    `
      SELECT
        roster.account_name,
        roster.rank,
        roster.joined,
        COALESCE(SUM(COALESCE(bank.ticketQuantity, 0)), 0) AS purchased_tickets,
        links.discord_user_id,
        links.discord_username,
        links.discord_display_name,
        links.discord_server_nickname,
        links.link_status,
        links.link_method,
        links.match_confidence,
        links.match_field,
        CASE
          WHEN links.link_status = 'linked' AND COALESCE(links.discord_user_id, '') <> '' THEN 'eligible'
          ELSE 'eligible_if_linked'
        END AS report_group
      FROM guildsyncroster roster
      INNER JOIN guildsyncbanking bank
        ON LOWER(TRIM(LEADING '@' FROM bank.receivedFrom)) = LOWER(roster.account_name)
      LEFT JOIN guildsyncmemberlinks links
        ON LOWER(links.eso_account_name) = LOWER(roster.account_name)
      WHERE LOWER(roster.rank) = 'associate'
        AND roster.in_roster = 1
        AND CAST(roster.joined AS UNSIGNED) > 0
        AND CAST(roster.joined AS UNSIGNED) <= ?
        AND COALESCE(bank.ticketQuantity, 0) > 0
        AND COALESCE(bank.depositAmount, 0) > 0
        AND COALESCE(bank.dataSource, '') <> 'ManualBiweeklyTicket'
      GROUP BY
        roster.account_name,
        roster.rank,
        roster.joined,
        links.discord_user_id,
        links.discord_username,
        links.discord_display_name,
        links.discord_server_nickname,
        links.link_status,
        links.link_method,
        links.match_confidence,
        links.match_field
      ORDER BY
        CASE
          WHEN links.link_status = 'linked' AND COALESCE(links.discord_user_id, '') <> '' THEN 0
          ELSE 1
        END,
        LOWER(roster.account_name) ASC
    `,
    [twoWeeksAgo]
  );

  return rows;
}


export async function addManualBiweeklyTicketEntry(applicationDB, payload = {}) {
  const accountName = normalizeRosterAccountName(payload.account_name || payload.accountName);
  const note = String(payload.note || payload.reason || '').trim().slice(0, 160);
  const tickets = Math.floor(Number(payload.tickets || payload.ticketQuantity || payload.ticketAmount || 0));
  const addedBy = String(payload.addedBy || payload.auditUser || '').trim().slice(0, 64);

  if (!accountName) {
    throw new Error('Missing guild member account name.');
  }

  if (!note) {
    throw new Error('Missing manual ticket note.');
  }

  if (!Number.isFinite(tickets) || tickets <= 0) {
    throw new Error('Manual ticket quantity must be greater than zero.');
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const random = Math.floor(Math.random() * 900000) + 100000;
  const eventId = `Manual${timestamp}${random}`.slice(0, 32);
  const auditedNote = `${note} - added by ${addedBy || 'Unknown'}`.slice(0, 255);

  const [result] = await applicationDB.execute(
    `
      INSERT IGNORE INTO guildsyncbanking (
        eventId,
        transactionType,
        receivedFrom,
        eventTimestamp,
        dateTime,
        depositAmount,
        ticketQuantity,
        dataSource,
        note,
        emailRequested
      )
      VALUES (
        ?,
        'biweekly',
        ?,
        ?,
        FROM_UNIXTIME(?),
        0,
        ?,
        'ManualBiweeklyTicket',
        ?,
        0
      )
    `,
    [eventId, accountName, String(timestamp), timestamp, tickets, auditedNote]
  );

  await setSetting(applicationDB, 'banking_refresh', new Date().toISOString());

  return {
    eventId,
    inserted: result.affectedRows || 0,
    entry: {
      type: 'biweekly',
      eventId,
      time: timestamp,
      displayName: accountName,
      amount: 0,
      ticketAmount: tickets,
      dataSource: 'ManualBiweeklyTicket',
      note: auditedNote
    }
  };
}

function normalizeRosterEvents(rosterEvents) {
  if (!rosterEvents || typeof rosterEvents !== 'object') {
    return [];
  }

  if (Array.isArray(rosterEvents)) {
    return rosterEvents.filter((event) => event && typeof event === 'object');
  }

  return Object.values(rosterEvents).filter((event) => event && typeof event === 'object');
}

function normalizeRosterAccountName(value) {
  const clean = String(value || '').trim();
  return clean.startsWith('@') ? clean.slice(1) : clean;
}

function normalizeRosterRank(value) {
  return String(value || '').trim().slice(0, 20);
}

function normalizeRosterTimestamp(value) {
  const clean = String(value || '').trim();
  if (!clean) {
    return '';
  }

  if (/^\d+(\.0+)?$/.test(clean)) {
    return String(Math.trunc(Number(clean)));
  }

  return clean;
}

function normalizeRosterEventType(value) {
  return String(value || '').trim().toLowerCase().replaceAll('_', ' ');
}

function createAutomaticRosterEventId(timestamp) {
  return `Auto${timestamp}${Math.floor(Math.random() * 100000000)}`;
}

export function parseGuildSyncRosterSavedVarsLua(rawLuaText = '') {
  const tableText = extractLuaAssignmentTable(rawLuaText, 'GuildSyncRoster');
  const parsed = parseEsoLuaTableForRoster(tableText);
  const defaultSection = parsed?.Default || {};
  const accountName = Object.keys(defaultSection).find((key) => key.startsWith('@')) || '';
  const accountWide = accountName
    ? defaultSection?.[accountName]?.['$AccountWide'] || {}
    : {};

  return {
    table_name: 'GuildSyncRoster',
    account_name: accountName,
    guildDump: accountWide.guildDump || null,
    rosterEvents: accountWide.rosterEvents || {}
  };
}

function extractLuaAssignmentTable(text, tableName) {
  const assignment = new RegExp(`\\b${tableName}\\s*=\\s*\\{`).exec(text);
  if (!assignment) {
    throw new Error(`Could not find table assignment: ${tableName} = {`);
  }

  const openBraceIndex = assignment.index + assignment[0].lastIndexOf('{');
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = openBraceIndex; i < text.length; i += 1) {
    const char = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === '{') {
      depth += 1;
    } else if (char === '}') {
      depth -= 1;
    }

    if (depth === 0) {
      return text.slice(openBraceIndex, i + 1);
    }
  }

  throw new Error(`Could not find matching closing brace for ${tableName}`);
}

function parseEsoLuaTableForRoster(luaTableText) {
  const parser = { text: luaTableText, i: 0 };
  return parseRosterLuaValue(parser);
}

function skipRosterLuaWhitespace(parser) {
  while (parser.i < parser.text.length && /[\s,]/.test(parser.text[parser.i])) {
    parser.i += 1;
  }
}

function parseRosterLuaValue(parser) {
  skipRosterLuaWhitespace(parser);
  const char = parser.text[parser.i];

  if (char === '{') return parseRosterLuaTable(parser);
  if (char === '"') return parseRosterLuaString(parser);
  if (char === '-' || /\d/.test(char || '')) return parseRosterLuaNumber(parser);
  if (parser.text.slice(parser.i, parser.i + 4) === 'true') { parser.i += 4; return true; }
  if (parser.text.slice(parser.i, parser.i + 5) === 'false') { parser.i += 5; return false; }
  if (parser.text.slice(parser.i, parser.i + 3) === 'nil') { parser.i += 3; return null; }

  throw new Error(`Unexpected Lua value at ${parser.i}`);
}

function parseRosterLuaString(parser) {
  parser.i += 1;
  let output = '';
  let escaped = false;

  while (parser.i < parser.text.length) {
    const char = parser.text[parser.i];
    parser.i += 1;

    if (escaped) {
      output += char;
      escaped = false;
      continue;
    }

    if (char === '\\') {
      escaped = true;
      continue;
    }

    if (char === '"') {
      return output;
    }

    output += char;
  }

  throw new Error('Unterminated Lua string.');
}

function parseRosterLuaNumber(parser) {
  const start = parser.i;
  while (parser.i < parser.text.length && /[-.\d]/.test(parser.text[parser.i])) {
    parser.i += 1;
  }

  return Number(parser.text.slice(start, parser.i));
}

function parseRosterLuaKey(parser) {
  skipRosterLuaWhitespace(parser);
  if (parser.text[parser.i] !== '[') {
    throw new Error(`Expected Lua key at ${parser.i}`);
  }
  parser.i += 1;
  skipRosterLuaWhitespace(parser);
  const key = parser.text[parser.i] === '"' ? parseRosterLuaString(parser) : parseRosterLuaNumber(parser);
  skipRosterLuaWhitespace(parser);
  if (parser.text[parser.i] !== ']') {
    throw new Error(`Expected ] at ${parser.i}`);
  }
  parser.i += 1;
  skipRosterLuaWhitespace(parser);
  if (parser.text[parser.i] !== '=') {
    throw new Error(`Expected = at ${parser.i}`);
  }
  parser.i += 1;
  return key;
}

function parseRosterLuaTable(parser) {
  parser.i += 1;
  const entries = [];

  while (parser.i < parser.text.length) {
    skipRosterLuaWhitespace(parser);
    if (parser.text[parser.i] === '}') {
      parser.i += 1;
      break;
    }

    const key = parseRosterLuaKey(parser);
    const value = parseRosterLuaValue(parser);
    entries.push({ key, value });
  }

  const allNumericKeys = entries.length > 0 && entries.every((entry) => Number.isInteger(entry.key) && entry.key >= 1);

  if (allNumericKeys) {
    return entries
      .sort((a, b) => a.key - b.key)
      .map((entry) => entry.value);
  }

  const object = {};
  for (const entry of entries) {
    object[String(entry.key)] = entry.value;
  }
  return object;
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

async function setDiscordRefreshNow(db) {
  await setSetting(
    db,
    'discord_refresh',
    new Date().toISOString()
  );
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


function normalizeMemberLinkName(value) {
  let text = String(value || '').toLowerCase().trim();
  if (!text) return '';
  text = text.replace(/^@+/, '');
  text = text.replace(/\([^)]*\b(?:she|her|he|him|they|them|it|its|any|all)\b[^)]*\)/gi, '');
  text = text.replace(/\[[^\]]*\b(?:she|her|he|him|they|them|it|its|any|all)\b[^\]]*\]/gi, '');
  text = text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
  text = text.replace(/[^a-z0-9]/g, '');
  return text;
}

function getDiscordNameCandidates(member = {}) {
  return [
    { field: 'discord_username', priority: 1, value: member.username },
    { field: 'discord_display_name', priority: 2, value: member.global_name },
    { field: 'discord_server_nickname', priority: 3, value: member.server_nickname }
  ]
    .map((candidate) => ({
      ...candidate,
      value: String(candidate.value || '').trim(),
      normalized: normalizeMemberLinkName(candidate.value)
    }))
    .filter((candidate) => candidate.value && candidate.normalized);
}

function getBestDiscordNameMatch(esoName, discord) {
  const candidates = getDiscordNameCandidates(discord);
  let best = null;

  for (const candidate of candidates) {
    const score = fuzzyNameScore(esoName, candidate.value);

    if (
      !best
      || score > best.score
      || (score === best.score && candidate.priority < best.priority)
    ) {
      best = {
        field: candidate.field,
        value: candidate.value,
        normalized: candidate.normalized,
        priority: candidate.priority,
        score
      };
    }
  }

  return best;
}

function levenshteinDistance(a, b) {
  a = String(a || '');
  b = String(b || '');
  if (a === b) return 0;
  if (!a) return b.length;
  if (!b) return a.length;
  const previous = Array.from({ length: b.length + 1 }, (_, i) => i);
  const current = Array.from({ length: b.length + 1 }, () => 0);
  for (let i = 1; i <= a.length; i += 1) {
    current[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
    for (let j = 0; j <= b.length; j += 1) previous[j] = current[j];
  }
  return previous[b.length];
}

function fuzzyNameScore(left, right) {
  const a = normalizeMemberLinkName(left);
  const b = normalizeMemberLinkName(right);
  if (!a || !b) return 0;
  if (a === b) return 100;
  const longer = Math.max(a.length, b.length);
  const distanceScore = Math.round((1 - (levenshteinDistance(a, b) / longer)) * 100);
  const containsScore = (a.includes(b) || b.includes(a)) && Math.min(a.length, b.length) >= 4 ? 88 : 0;
  return Math.max(distanceScore, containsScore);
}

async function loadMemberLinkInputs(db) {
  const [rosterRows] = await db.execute(`
    SELECT account_name, rank, joined
    FROM guildsyncroster
    WHERE in_roster = 1
    ORDER BY LOWER(account_name) ASC
  `);

  const [discordRows] = await db.execute(`
    SELECT discord_id, username, global_name, server_nickname
    FROM discordmembers
    ORDER BY LOWER(COALESCE(server_nickname, global_name, username)) ASC
  `);

  const [linkRows] = await db.execute(`
    SELECT *
    FROM guildsyncmemberlinks
  `);

  return { rosterRows, discordRows, linkRows };
}

function buildExistingLinkMaps(linkRows = []) {
  const byEso = new Map();
  const discordLinked = new Set();
  const lockedEso = new Set();
  const lockedDiscord = new Set();

  for (const link of linkRows) {
    const esoName = String(link.eso_account_name || '').toLowerCase();
    const discordID = String(link.discord_user_id || '');
    byEso.set(esoName, link);

    if (discordID && String(link.link_status || '') === 'linked') {
      discordLinked.add(discordID);
    }

    if (Number(link.locked || 0) === 1) {
      lockedEso.add(esoName);
      if (discordID) lockedDiscord.add(discordID);
    }
  }

  return { byEso, discordLinked, lockedEso, lockedDiscord };
}

export async function runMemberAutoLinking(applicationDB) {
  const { rosterRows, discordRows, linkRows } = await loadMemberLinkInputs(applicationDB);
  const maps = buildExistingLinkMaps(linkRows);

  let linked = 0;
  let candidates = 0;
  const exactDiscordByName = new Map();

  for (const discord of discordRows) {
    if (!discord.discord_id || maps.lockedDiscord.has(String(discord.discord_id))) continue;

    for (const candidate of getDiscordNameCandidates(discord)) {
      if (!exactDiscordByName.has(candidate.normalized)) exactDiscordByName.set(candidate.normalized, []);
      exactDiscordByName.get(candidate.normalized).push({
        discord,
        field: candidate.field,
        value: candidate.value,
        priority: candidate.priority
      });
    }
  }

  for (const roster of rosterRows) {
    const esoName = String(roster.account_name || '').trim();
    const esoKey = esoName.toLowerCase();
    const normalizedEso = normalizeMemberLinkName(esoName);
    const existing = maps.byEso.get(esoKey);

    if (!esoName || maps.lockedEso.has(esoKey)) continue;

    if (existing && String(existing.link_status || '') === 'linked' && existing.discord_user_id) {
      continue;
    }

    const exactMatches = exactDiscordByName.get(normalizedEso) || [];
    const usableExactMatches = exactMatches.filter((match) => !maps.discordLinked.has(String(match.discord.discord_id)));

    usableExactMatches.sort((left, right) => left.priority - right.priority);

    if (usableExactMatches.length === 1 || (usableExactMatches.length > 1 && usableExactMatches[0].priority < usableExactMatches[1].priority)) {
      const match = usableExactMatches[0];
      const discord = match.discord;
      await upsertMemberLink(applicationDB, {
        esoAccountName: esoName,
        discordUserId: discord.discord_id,
        discordUsername: discord.username,
        discordDisplayName: discord.global_name,
        discordServerNickname: discord.server_nickname,
        linkStatus: 'linked',
        linkMethod: 'exact',
        matchConfidence: 100,
        matchReason: `Exact normalized ${match.field} match`,
        matchField: match.field,
        locked: 0
      });
      maps.discordLinked.add(String(discord.discord_id));
      linked += 1;
      continue;
    }

    let best = null;
    for (const discord of discordRows) {
      if (!discord.discord_id || maps.discordLinked.has(String(discord.discord_id)) || maps.lockedDiscord.has(String(discord.discord_id))) continue;

      const match = getBestDiscordNameMatch(esoName, discord);
      if (!match) continue;

      if (
        !best
        || match.score > best.score
        || (match.score === best.score && match.priority < best.priority)
      ) {
        best = { discord, ...match };
      }
    }

    if (best && best.score >= 82) {
      await upsertMemberLink(applicationDB, {
        esoAccountName: esoName,
        discordUserId: best.discord.discord_id,
        discordUsername: best.discord.username,
        discordDisplayName: best.discord.global_name,
        discordServerNickname: best.discord.server_nickname,
        linkStatus: 'candidate',
        linkMethod: 'fuzzy',
        matchConfidence: best.score,
        matchReason: `Fuzzy normalized ${best.field} match candidate`,
        matchField: best.field,
        locked: 0
      });
      candidates += 1;
    }
  }

  return { linked, candidates };
}

export async function upsertMemberLink(applicationDB, link = {}) {
  const esoAccountName = String(link.esoAccountName || link.eso_account_name || '').trim().replace(/^@+/, '');
  if (!esoAccountName) throw new Error('ESO account name is required.');

  await applicationDB.execute(`
    INSERT INTO guildsyncmemberlinks (
      eso_account_name,
      discord_user_id,
      discord_username,
      discord_display_name,
      discord_server_nickname,
      link_status,
      link_method,
      match_confidence,
      match_reason,
      match_field,
      locked
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      discord_user_id = VALUES(discord_user_id),
      discord_username = VALUES(discord_username),
      discord_display_name = VALUES(discord_display_name),
      discord_server_nickname = VALUES(discord_server_nickname),
      link_status = VALUES(link_status),
      link_method = VALUES(link_method),
      match_confidence = VALUES(match_confidence),
      match_reason = VALUES(match_reason),
      match_field = VALUES(match_field),
      locked = VALUES(locked)
  `, [
    esoAccountName,
    link.discordUserId || link.discord_user_id || null,
    link.discordUsername || link.discord_username || null,
    link.discordDisplayName || link.discord_display_name || null,
    link.discordServerNickname || link.discord_server_nickname || null,
    link.linkStatus || link.link_status || 'unlinked',
    link.linkMethod || link.link_method || 'none',
    Number(link.matchConfidence ?? link.match_confidence ?? 0),
    link.matchReason || link.match_reason || null,
    link.matchField || link.match_field || null,
    Number(link.locked || 0) ? 1 : 0
  ]);
}

export async function getMemberLinks(applicationDB) {
  const [rows] = await applicationDB.execute(`
    SELECT
      links.eso_account_name,
      links.discord_user_id,
      links.discord_username,
      links.discord_display_name,
      links.discord_server_nickname,
      links.link_status,
      links.link_method,
      links.match_confidence,
      links.match_reason,
      links.match_field,
      links.locked,
      links.updated_at,
      roster.rank AS eso_rank,
      roster.joined AS eso_joined
    FROM guildsyncmemberlinks links
    LEFT JOIN guildsyncroster roster
      ON LOWER(roster.account_name) = LOWER(links.eso_account_name)
    ORDER BY
      CASE links.link_status WHEN 'candidate' THEN 0 WHEN 'linked' THEN 1 ELSE 2 END,
      links.match_confidence DESC,
      LOWER(links.eso_account_name) ASC
  `);
  return rows;
}

export async function getMemberLinkOptions(applicationDB, payload = {}) {
  const mode = String(payload.mode || '').trim();
  const accountName = String(payload.accountName || '').trim().replace(/^@+/, '');
  const discordUserId = String(payload.discordUserId || '').trim();
  const { rosterRows, discordRows, linkRows } = await loadMemberLinkInputs(applicationDB);
  const maps = buildExistingLinkMaps(linkRows);

  if (mode === 'discord-to-eso') {
    const source = discordRows.find((row) => String(row.discord_id) === discordUserId);
    const names = source ? getDiscordNameCandidates(source) : [];
    return rosterRows
      .filter((row) => {
        const existing = maps.byEso.get(String(row.account_name || '').toLowerCase());
        return !(existing && existing.link_status === 'linked' && existing.discord_user_id);
      })
      .map((row) => {
        let best = { confidence: 0, matchField: '' };
        for (const name of names) {
          const score = fuzzyNameScore(row.account_name, name.value || name);
          if (score > best.confidence) {
            best = { confidence: score, matchField: name.field || '' };
          }
        }
        return {
          account_name: row.account_name,
          rank: row.rank,
          confidence: best.confidence,
          matchField: best.matchField
        };
      })
      .sort((a, b) => b.confidence - a.confidence || String(a.account_name).localeCompare(String(b.account_name), undefined, { sensitivity: 'base' }));
  }

  const sourceEso = accountName;
  return discordRows
    .filter((row) => !maps.discordLinked.has(String(row.discord_id)))
    .map((row) => {
      let best = { confidence: 0, matchField: '' };
      for (const name of getDiscordNameCandidates(row)) {
        const score = fuzzyNameScore(sourceEso, name.value || name);
        if (score > best.confidence) {
          best = { confidence: score, matchField: name.field || '' };
        }
      }
      return {
        discord_id: row.discord_id,
        username: row.username,
        global_name: row.global_name,
        server_nickname: row.server_nickname,
        confidence: best.confidence,
        matchField: best.matchField
      };
    })
    .sort((a, b) => {
      const confidenceDelta = b.confidence - a.confidence;
      if (confidenceDelta !== 0) return confidenceDelta;
      const leftName = String(a.server_nickname || a.global_name || a.username || '');
      const rightName = String(b.server_nickname || b.global_name || b.username || '');
      return leftName.localeCompare(rightName, undefined, { sensitivity: 'base' });
    });
}

export async function acceptMemberLinkCandidate(applicationDB, payload = {}) {
  const esoAccountName = String(payload.esoAccountName || payload.eso_account_name || '').trim().replace(/^@+/, '');
  if (!esoAccountName) throw new Error('ESO account name is required.');

  const [rows] = await applicationDB.execute(`
    SELECT *
    FROM guildsyncmemberlinks
    WHERE LOWER(eso_account_name) = LOWER(?)
      AND link_status = 'candidate'
      AND locked = 0
    LIMIT 1
  `, [esoAccountName]);

  const candidate = rows[0];
  if (!candidate) throw new Error('No auto-link candidate found for this ESO account.');

  await upsertMemberLink(applicationDB, {
    esoAccountName,
    discordUserId: candidate.discord_user_id,
    discordUsername: candidate.discord_username,
    discordDisplayName: candidate.discord_display_name,
    discordServerNickname: candidate.discord_server_nickname,
    linkStatus: 'linked',
    linkMethod: 'fuzzy',
    matchConfidence: candidate.match_confidence,
    matchReason: 'Accepted fuzzy candidate',
    matchField: candidate.match_field,
    locked: 0
  });
}

function linkFieldNameFromPayload(value) {
  const field = String(value || '').trim().toLowerCase();
  if (field === 'discord_username' || field === 'username') return 'discord_username';
  if (field === 'discord_display_name' || field === 'global_name' || field === 'display_name') return 'discord_display_name';
  if (field === 'discord_server_nickname' || field === 'server_nickname' || field === 'nickname') return 'discord_server_nickname';
  return null;
}

export async function manualLinkMember(applicationDB, payload = {}) {
  const esoAccountName = String(payload.esoAccountName || payload.eso_account_name || '').trim().replace(/^@+/, '');
  const discordUserId = String(payload.discordUserId || payload.discord_user_id || '').trim();
  if (!esoAccountName || !discordUserId) throw new Error('ESO account and Discord user are required.');

  const [discordRows] = await applicationDB.execute(`
    SELECT discord_id, username, global_name, server_nickname
    FROM discordmembers
    WHERE discord_id = ?
    LIMIT 1
  `, [discordUserId]);
  const discord = discordRows[0];
  if (!discord) throw new Error('Discord member was not found.');

  await applicationDB.execute(`
    DELETE FROM guildsyncmemberlinks
    WHERE discord_user_id = ?
      AND LOWER(eso_account_name) <> LOWER(?)
      AND locked = 0
  `, [discordUserId, esoAccountName]);

  const suppliedMatchField = linkFieldNameFromPayload(payload.matchField || payload.match_field || payload.discordMatchField || payload.discord_match_field);
  const suppliedConfidence = Number(payload.matchConfidence ?? payload.match_confidence ?? 100);
  const confidence = Number.isFinite(suppliedConfidence) ? suppliedConfidence : 100;
  const matchReason = suppliedMatchField
    ? `Manually linked from suggested match on ${suppliedMatchField}`
    : 'Manually linked by user';

  await upsertMemberLink(applicationDB, {
    esoAccountName,
    discordUserId,
    discordUsername: discord.username,
    discordDisplayName: discord.global_name,
    discordServerNickname: discord.server_nickname,
    linkStatus: 'linked',
    linkMethod: 'manual',
    matchConfidence: confidence,
    matchReason,
    matchField: suppliedMatchField,
    locked: 1
  });
}

export async function manualUnlinkMember(applicationDB, payload = {}) {
  const esoAccountName = String(payload.esoAccountName || payload.eso_account_name || '').trim().replace(/^@+/, '');
  const discordUserId = String(payload.discordUserId || payload.discord_user_id || '').trim();

  if (esoAccountName) {
    await applicationDB.execute(`
      UPDATE guildsyncmemberlinks
      SET discord_user_id = NULL,
          discord_username = NULL,
          discord_display_name = NULL,
          discord_server_nickname = NULL,
          link_status = 'unlinked',
          link_method = 'manual_unlink',
          match_confidence = 0,
          match_reason = 'Auto-link disabled by user after unlink',
          match_field = NULL,
          locked = 1
      WHERE LOWER(eso_account_name) = LOWER(?)
    `, [esoAccountName]);
    return;
  }

  if (discordUserId) {
    await applicationDB.execute(`
      UPDATE guildsyncmemberlinks
      SET discord_user_id = NULL,
          discord_username = NULL,
          discord_display_name = NULL,
          discord_server_nickname = NULL,
          link_status = 'unlinked',
          link_method = 'manual_unlink',
          match_confidence = 0,
          match_reason = 'Auto-link disabled by user after unlink',
          match_field = NULL,
          locked = 1
      WHERE discord_user_id = ?
    `, [discordUserId]);
  }
}

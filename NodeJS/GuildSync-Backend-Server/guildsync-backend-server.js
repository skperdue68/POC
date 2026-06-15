import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import jwt from 'jsonwebtoken';
import { Server } from 'socket.io';

import {
  GUILDSYNC_DB_NAME,
  openLoginDB,
  upsertLoginUser,

  openAppDataDB,
  upsertDiscordRoles,
  upsertDiscordMembers,
  upsertDiscordMember,
  deleteDiscordMember,
  upsertDiscordRole,
  deleteDiscordRole,
  updateDiscordMemberLastSeen,
  getDiscordHistoricalScanStatus,
  markDiscordHistoricalScanComplete,
  getDiscordDataDate,
  getDiscordMemberDataJSON,
  getBankingDataDate,
  getBankingDataJSON,
  insertBankingEntries,
  addManualBiweeklyTicketEntry,
  getAssociateTicketReport,
  getDiscordRankAuditReport,
  getRosterDataDate,
  getRosterDataJSON,
  getRosterRankHistoryMatches,
  getRosterStreamHistoryForAccount,
  getMemberLinks,
  getMemberLinkOptions,
  acceptMemberLinkCandidate,
  manualLinkMember,
  manualUnlinkMember,
  runMemberAutoLinking,
  processRosterData,
  parseGuildSyncBankingSavedVarsLua,
  parseGuildSyncRosterSavedVarsLua
} from './guildsync-database-actions.js';

let discordBotConnected = false;
let discordBotSocketId = null;
let discordBotConnectedAt = null;
const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(process.env.PORT || 3001);

const DISCORD_CLIENT_ID = requiredEnv('DISCORD_CLIENT_ID');
const DISCORD_CLIENT_SECRET = requiredEnv('DISCORD_CLIENT_SECRET');
const DISCORD_REDIRECT_URI = process.env.DISCORD_REDIRECT_URI || 'http://127.0.0.1:53682/callback';
const DISCORD_WEB_REDIRECT_URI = process.env.DISCORD_WEB_REDIRECT_URI || 'https://guildsync.perdues.me/api/auth/discord/web-callback';
const GUILDSYNC_WEB_PUBLIC_URL = process.env.GUILDSYNC_WEB_PUBLIC_URL || 'https://guildsync.perdues.me';
const GUILDSYNC_JWT_SECRET = requiredEnv('GUILDSYNC_JWT_SECRET');
const GUILDSYNC_TOKEN_TTL_SECONDS = Number(process.env.GUILDSYNC_TOKEN_TTL_SECONDS || 86400);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WEB_DIST_DIR = process.env.GUILDSYNC_WEB_DIST_DIR || path.join(__dirname, 'public');

const GUILDSYNC_BOT_SOCKET_KEY = requiredEnv('GUILDSYNC_BOT_SOCKET_KEY');

const CURRENT_GUILDSYNC_CLIENT_VERSION = requiredEnv('GUILDSYNC_CLIENT_VERSION');

let loginDB;
let applicationDB;

try {
  loginDB = await openLoginDB();
  applicationDB = await openAppDataDB();

  Log(`MariaDB database ready: ${GUILDSYNC_DB_NAME}`);
} catch (error) {
  Log('Failed to initialize MariaDB:', error);
  process.exit(1);
}

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json({ limit: '25mb' }));

app.post('/api/auth/discord/desktop-token', async (req, res) => {
  try {
    const { code, redirect_uri: redirectURI } = req.body || {};

    if (!code || typeof code !== 'string') {
      return res.status(400).json({ ok: false, error: 'Missing Discord authorization code.' });
    }

    const effectiveRedirectURI = redirectURI || DISCORD_REDIRECT_URI;

    if (effectiveRedirectURI !== DISCORD_REDIRECT_URI) {
      return res.status(400).json({
        ok: false,
        error: 'Redirect URI mismatch. The desktop app and server must use the same Discord redirect URI.'
      });
    }

    const discordToken = await exchangeCodeWithDiscord(code, effectiveRedirectURI);
    const discordUser = await fetchDiscordUser(discordToken.access_token);
    const dbUser = await upsertLoginUser(loginDB, discordUser);

    if (!dbUser.allowed) {
      return res.status(403).json({
        ok: false,
        allowed: false,
        message: `Discord user ${preferredUserName(dbUser)} is authenticated, but access is pending approval.`,
        user: {
          discord_user_id: dbUser.discord_user_id,
          username: dbUser.username,
          global_name: dbUser.global_name,
          display_name: preferredUserName(dbUser),
          avatar: dbUser.avatar,
          avatar_url: discordAvatarURL(dbUser.discord_user_id, dbUser.avatar),
          email: dbUser.email,
          role: dbUser.role
        }
      });
    }

    const guildSyncUser = {
      discord_user_id: dbUser.discord_user_id,
      username: dbUser.username,
      global_name: dbUser.global_name,
      display_name: preferredUserName(dbUser),
      avatar: dbUser.avatar || '',
      avatar_url: discordAvatarURL(dbUser.discord_user_id, dbUser.avatar),
      email: dbUser.email || '',
      role: dbUser.role || 'user'
    };

    const expiresAt = new Date(Date.now() + GUILDSYNC_TOKEN_TTL_SECONDS * 1000);

    const token = jwt.sign(
      {
        sub: guildSyncUser.discord_user_id,
        username: guildSyncUser.username,
        global_name: guildSyncUser.global_name,
        display_name: preferredUserName(dbUser),
        avatar_url: guildSyncUser.avatar_url,
        role: guildSyncUser.role
      },
      GUILDSYNC_JWT_SECRET,
      {
        issuer: 'guildsync-auth-server',
        audience: 'guildsync-desktop',
        expiresIn: GUILDSYNC_TOKEN_TTL_SECONDS
      }
    );

    return res.json({
      ok: true,
      allowed: true,
      token,
      expires_at: expiresAt.toISOString(),
      user: guildSyncUser,
      message: `Logged in and authorized as ${guildSyncUser.display_name}.`
    });
  } catch (error) {
    Log('Discord desktop-token error:', error);

    return res.status(500).json({
      ok: false,
      error: error.message || 'Discord authentication failed.'
    });
  }
});


app.get('/api/auth/discord/web-login', (req, res) => {
  const state = Buffer.from(JSON.stringify({
    nonce: Math.random().toString(36).slice(2),
    created_at: Date.now()
  })).toString('base64url');

  const params = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    redirect_uri: DISCORD_WEB_REDIRECT_URI,
    response_type: 'code',
    scope: 'identify email',
    state
  });

  return res.redirect(`https://discord.com/api/oauth2/authorize?${params.toString()}`);
});

app.get('/api/auth/discord/web-callback', async (req, res) => {
  try {
    const code = String(req.query?.code || '').trim();

    if (!code) {
      return res.status(400).send(renderWebAuthResultPage({
        ok: false,
        message: 'Missing Discord authorization code.'
      }));
    }

    const discordToken = await exchangeCodeWithDiscord(code, DISCORD_WEB_REDIRECT_URI);
    const discordUser = await fetchDiscordUser(discordToken.access_token);
    const dbUser = await upsertLoginUser(loginDB, discordUser);

    if (!dbUser.allowed) {
      return res.status(403).send(renderWebAuthResultPage({
        ok: false,
        message: `Discord user ${preferredUserName(dbUser)} is authenticated, but access is pending approval.`
      }));
    }

    const guildSyncUser = buildGuildSyncUserFromDBUser(dbUser);
    const token = createGuildSyncJWT(guildSyncUser);

    return res.send(renderWebAuthResultPage({
      ok: true,
      token,
      user: guildSyncUser,
      message: `Logged in and authorized as ${guildSyncUser.display_name}.`
    }));
  } catch (error) {
    Log('Discord web-callback error:', error);
    return res.status(500).send(renderWebAuthResultPage({
      ok: false,
      message: error.message || 'Discord web authentication failed.'
    }));
  }
});

app.get('/api/auth/session', (req, res) => {
  try {
    const token = getBearerToken(req);
    if (!token) {
      return res.status(401).json({ ok: false, message: 'Missing session token.' });
    }

    const claims = jwt.verify(token, GUILDSYNC_JWT_SECRET, {
      issuer: 'guildsync-auth-server',
      audience: 'guildsync-desktop'
    });

    return res.json({
      ok: true,
      user: {
        discord_user_id: claims.sub,
        username: claims.username || '',
        global_name: claims.global_name || '',
        display_name: claims.display_name || claims.global_name || claims.username || '',
        avatar_url: claims.avatar_url || '',
        role: claims.role || 'user'
      }
    });
  } catch (error) {
    return res.status(401).json({ ok: false, message: 'Invalid or expired session token.' });
  }
});

app.post('/api/guildsync/upload-savedvars/:kind', requireGuildSyncWebUser, async (req, res) => {
  try {
    const kind = String(req.params.kind || '').trim().toLowerCase();
    const fileName = String(req.body?.file_name || '').trim();
    const rawLuaText = String(req.body?.raw_lua_text || '').trim();

    if (!rawLuaText) {
      return res.status(400).json({ ok: false, message: 'Missing SavedVariables file content.' });
    }

    if (kind === 'banking') {
      const data = parseGuildSyncBankingSavedVarsLua(rawLuaText);
      const result = await insertBankingEntries(applicationDB, {
        source: data.table_name || 'GuildSyncBanking',
        entries: data.entries || []
      });

      await broadcastBankingDataUpdate();

      return res.json({
        ok: true,
        message: `Banking SavedVariables uploaded and processed. Entries: ${result.banking_entries_received}.`,
        file_name: fileName || null,
        ...result
      });
    }

    if (kind === 'roster') {
      const data = parseGuildSyncRosterSavedVarsLua(rawLuaText);
      const result = await processRosterData(applicationDB, { data });

      await broadcastRosterDataUpdate();
      await broadcastMemberLinksUpdate();

      return res.json({
        ok: true,
        message: `Roster SavedVariables uploaded and processed. Guild list members: ${result.guildlist_members_received}. Stream events: ${result.stream_events_received}.`,
        file_name: fileName || null,
        ...result
      });
    }

    return res.status(400).json({ ok: false, message: 'Upload kind must be banking or roster.' });
  } catch (error) {
    Log('SavedVariables upload failed:', error);
    return res.status(500).json({
      ok: false,
      message: error.message || 'SavedVariables upload failed.'
    });
  }
});

app.use(express.static(WEB_DIST_DIR));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/') || req.path.startsWith('/socket.io/')) {
    return next();
  }

  return res.sendFile(path.join(WEB_DIST_DIR, 'index.html'));
});

// Authentication Middleware
io.use((socket, next) => {
  const auth = socket.handshake.auth || {};
  const token = auth.token;

  socket.guildSyncAuthenticated = false;
  socket.guildSyncAuthType = 'anonymous';
  socket.guildSyncUser = null;
  socket.guildSyncBot = null;

  if (auth.source === 'discord-bot') {
    const botKey = String(auth.botKey || '').trim();

    if (!botKey) {
      return next(new Error('Missing GuildSync bot socket key.'));
    }

    if (botKey !== GUILDSYNC_BOT_SOCKET_KEY) {
      return next(new Error('Invalid GuildSync bot socket key.'));
    }

    socket.guildSyncAuthenticated = true;
    socket.guildSyncAuthType = 'discord-bot';
    socket.guildSyncBot = {
      source: 'discord-bot',
      connected_at: new Date().toISOString()
    };

    return next();
  }

  if (!token) {
    socket.guildSyncAuthenticated = false;
    socket.guildSyncAuthType = 'anonymous';
    socket.guildSyncUser = null;
    return next();
  }

  try {
    const claims = jwt.verify(token, GUILDSYNC_JWT_SECRET, {
      issuer: 'guildsync-auth-server',
      audience: 'guildsync-desktop'
    });

    socket.guildSyncAuthenticated = true;
    socket.guildSyncAuthType = 'GuildSync user';
    socket.guildSyncUser = {
      discord_user_id: claims.sub,
      username: claims.username,
      display_name: claims.display_name,
      avatar_url: claims.avatar_url || '',
      role: claims.role
    };

    return next();
  } catch (error) {
    return next(new Error('Invalid or expired GuildSync token.'));
  }
});

io.on('connection', (socket) => {

  const user = socket.guildSyncUser;

  if (socket.guildSyncAuthType !== 'discord-bot') {
    socket.join('GuildSyncClient');

    if (socket.guildSyncAuthenticated && user) {
      socket.join('GuildSyncClientAuthenticated');

      if (user.discord_user_id) {
        socket.join(String(user.discord_user_id));
      }
    } else {
      socket.join('GuildSyncClientUnauthenticated');
    }
  }

  if (socket.guildSyncAuthType === 'discord-bot') {
    Log(`Connection: ${socket.id} => Discord bot`);
    discordBotConnected = true;
    discordBotSocketId = socket.id;
    discordBotConnectedAt = new Date().toISOString();
    socket.join('GuildSyncDiscordBot');

  } else if (socket.guildSyncAuthenticated && user) {
    Log(`Connection: ${socket.id} => ${user.display_name} (${user.discord_user_id}) GuildSync User`);
  } else {
    Log(`Connection: ${socket.id} => Unauthenticated`);
  }

  socket.on('guildsync:sending-discord-roles', async (payload = {}, callback) => {
    if (socket.guildSyncAuthType !== 'discord-bot') {
      const response = {
        ok: false,
        message: 'Only the authenticated Discord bot can send Discord roles.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-roles-result', callback, response);
      return;
    }

    try {
      const result = await upsertDiscordRoles(applicationDB, payload);

      Log(
        `Received Discord roles: ${result.roles_processed} role(s) processed.`
      );

      const response = {
        ok: true,
        message: 'Discord roles received and saved.',
        roles_processed: result.roles_processed,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-roles-result', callback, response);
    } catch (error) {
      Log('Failed to process guildsync:sending-discord-roles payload:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to process Discord roles payload.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-roles-result', callback, response);
    }
  });

  socket.on('guildsync:sending-discord-members', async (payload = {}, callback) => {
    if (socket.guildSyncAuthType !== 'discord-bot') {
      const response = {
        ok: false,
        message: 'Only the authenticated Discord bot can send Discord members.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-members-result', callback, response);
      return;
    }

    try {
      const result = await upsertDiscordMembers(applicationDB, payload);

      Log(
        `Received Discord members: ${result.members_processed} member(s) processed. ${result.members_removed} member(s) removed.`
      );

      const response = {
        ok: true,
        message: 'Discord members received and saved.',
        members_processed: result.members_processed,
        members_removed: result.members_removed,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-members-result', callback, response);

      await broadcastDiscordMemberDataUpdate();
      await broadcastMemberLinksUpdate();
    } catch (error) {
      Log('Failed to process guildsync:sending-discord-members payload:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to process Discord members payload.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-members-result', callback, response);
    }
  });

  socket.on('guildsync:discord-member-upsert', async (payload = {}, callback) => {
    if (socket.guildSyncAuthType !== 'discord-bot') {
      const response = {
        ok: false,
        message: 'Only the authenticated Discord bot can upsert Discord members.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-member-upsert-result', callback, response);
      return;
    }

    try {
      const result = await upsertDiscordMember(applicationDB, payload.member || payload);

      Log(
        `Discord member upsert received: ${result.members_processed} member(s) processed.`
      );

      const response = {
        ok: true,
        message: 'Discord member saved.',
        members_processed: result.members_processed,
        member_roles_processed: result.member_roles_processed,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-member-upsert-result', callback, response);

      await broadcastDiscordMemberDataUpdate();
      await broadcastMemberLinksUpdate();
    } catch (error) {
      Log('Failed to process guildsync:discord-member-upsert payload:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to upsert Discord member.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-member-upsert-result', callback, response);
    }
  });

  socket.on('guildsync:discord-member-last-seen', async (payload = {}, callback) => {
    if (socket.guildSyncAuthType !== 'discord-bot') {
      const response = {
        ok: false,
        message: 'Only the authenticated Discord bot can update Discord member last-seen activity.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-member-last-seen-result', callback, response);
      return;
    }

    try {
      Log(
        `Discord member activity payload received: discord_id=${payload.discord_id || 'missing'}, username=${payload.username || 'missing'}, timestamp=${payload.timestamp || 'missing'}, action=${payload.action || 'missing'}.`
      );

      const result = await updateDiscordMemberLastSeen(applicationDB, payload);

      Log(
        `Discord member activity received: ${payload.username || payload.discord_id || 'unknown'} ${payload.action || 'unknown'} at ${payload.timestamp || 'unknown'}. Updated ${result.updated} row(s).`
      );

      const response = {
        ok: true,
        message: result.updated > 0 ? 'Discord member last-seen activity saved.' : 'Discord member was not found; no last-seen row updated.',
        updated: result.updated,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-member-last-seen-result', callback, response);

      if (result.updated > 0) {
        await broadcastDiscordMemberDataUpdate();
      }
    } catch (error) {
      Log('Failed to process guildsync:discord-member-last-seen payload:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to update Discord member last-seen activity.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-member-last-seen-result', callback, response);
    }
  });

  socket.on('guildsync:discord-historical-scan-status', async (payload = {}, callback) => {
    Log(`Discord historical scan status request received from socket ${socket.id}. Auth type: ${socket.guildSyncAuthType || 'unknown'}.`);

    if (socket.guildSyncAuthType !== 'discord-bot') {
      const response = {
        ok: false,
        message: 'Only the authenticated Discord bot can request Discord historical scan status.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-historical-scan-status-result', callback, response);
      return;
    }

    try {
      const status = await getDiscordHistoricalScanStatus(applicationDB);

      Log(
        `Discord historical scan status returned to bot: completed=${status.completed ? 'yes' : 'no'}, completed_at=${status.completed_at || 'not set'}.`
      );

      sendSocketResponse(socket, 'guildsync:discord-historical-scan-status-result', callback, {
        ok: true,
        ...status,
        at: new Date().toLocaleString()
      });
    } catch (error) {
      Log('Failed to process guildsync:discord-historical-scan-status:', error);

      sendSocketResponse(socket, 'guildsync:discord-historical-scan-status-result', callback, {
        ok: false,
        message: error.message || 'Failed to get Discord historical scan status.',
        at: new Date().toLocaleString()
      });
    }
  });

  socket.on('guildsync:discord-historical-scan-complete', async (payload = {}, callback) => {
    Log(
      `Discord historical scan completion received from socket ${socket.id}. Messages checked: ${payload.message_count ?? 'unknown'}. Members updated: ${payload.member_count ?? 'unknown'}.`
    );

    if (socket.guildSyncAuthType !== 'discord-bot') {
      const response = {
        ok: false,
        message: 'Only the authenticated Discord bot can mark Discord historical scan complete.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-historical-scan-complete-result', callback, response);
      return;
    }

    try {
      const result = await markDiscordHistoricalScanComplete(applicationDB, payload);

      Log(
        `Discord historical scan marked complete in database. Completed at: ${result.completed_at || 'unknown'}. Messages checked: ${result.message_count ?? payload.message_count ?? 'unknown'}. Members updated: ${result.member_count ?? payload.member_count ?? 'unknown'}.`
      );

      sendSocketResponse(socket, 'guildsync:discord-historical-scan-complete-result', callback, {
        ok: true,
        message: 'Discord historical scan marked complete.',
        ...result,
        at: new Date().toLocaleString()
      });

      await broadcastDiscordMemberDataUpdate();
    } catch (error) {
      Log('Failed to process guildsync:discord-historical-scan-complete:', error);

      sendSocketResponse(socket, 'guildsync:discord-historical-scan-complete-result', callback, {
        ok: false,
        message: error.message || 'Failed to mark Discord historical scan complete.',
        at: new Date().toLocaleString()
      });
    }
  });

  socket.on('guildsync:discord-member-delete', async (payload = {}, callback) => {
    if (socket.guildSyncAuthType !== 'discord-bot') {
      const response = {
        ok: false,
        message: 'Only the authenticated Discord bot can delete Discord members.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-member-delete-result', callback, response);
      return;
    }

    try {
      const result = await deleteDiscordMember(applicationDB, payload.discord_id || payload.id);

      Log(
        `Discord member delete received: ${result.members_removed} member(s) removed.`
      );

      const response = {
        ok: true,
        message: 'Discord member deleted.',
        members_removed: result.members_removed,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-member-delete-result', callback, response);

      await broadcastDiscordMemberDataUpdate();
    } catch (error) {
      Log('Failed to process guildsync:discord-member-delete payload:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to delete Discord member.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-member-delete-result', callback, response);
    }
  });

  socket.on('guildsync:discord-role-upsert', async (payload = {}, callback) => {
    if (socket.guildSyncAuthType !== 'discord-bot') {
      const response = {
        ok: false,
        message: 'Only the authenticated Discord bot can upsert Discord roles.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-role-upsert-result', callback, response);
      return;
    }

    try {
      const result = await upsertDiscordRole(applicationDB, payload.role || payload);

      Log(
        `Discord role upsert received: ${result.roles_processed} role(s) processed.`
      );

      const response = {
        ok: true,
        message: 'Discord role saved.',
        roles_processed: result.roles_processed,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-role-upsert-result', callback, response);

      await broadcastDiscordMemberDataUpdate();
    } catch (error) {
      Log('Failed to process guildsync:discord-role-upsert payload:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to upsert Discord role.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-role-upsert-result', callback, response);
    }
  });

  socket.on('guildsync:discord-role-delete', async (payload = {}, callback) => {
    if (socket.guildSyncAuthType !== 'discord-bot') {
      const response = {
        ok: false,
        message: 'Only the authenticated Discord bot can delete Discord roles.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-role-delete-result', callback, response);
      return;
    }

    try {
      const result = await deleteDiscordRole(applicationDB, payload.role_id || payload.id);

      Log(
        `Discord role delete received: ${result.roles_removed} role(s) removed.`
      );

      const response = {
        ok: true,
        message: 'Discord role deleted.',
        roles_removed: result.roles_removed,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-role-delete-result', callback, response);

      await broadcastDiscordMemberDataUpdate();
    } catch (error) {
      Log('Failed to process guildsync:discord-role-delete payload:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to delete Discord role.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-role-delete-result', callback, response);
    }
  });

  socket.on('guildsync:sending-banking-data', async (payload = {}, callback) => {
    if (!socket.guildSyncAuthenticated || !socket.guildSyncUser) {
      const response = {
        ok: false,
        message: 'You must be logged in to send banking data.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:banking-data-result', callback, response);

      await broadcastBankingDataUpdate();
      return;
    }

    try {
      const authenticatedUsername = String(
        socket.guildSyncUser.display_name ||
        socket.guildSyncUser.guild_member_name ||
        socket.guildSyncUser.username ||
        socket.guildSyncUser.discord_user_id ||
        ''
      ).trim();

      const entries = Array.isArray(payload?.data?.entries)
        ? payload.data.entries
        : Array.isArray(payload.entries)
          ? payload.entries
          : Array.isArray(payload.data)
            ? payload.data
            : [];

      const fileName = String(payload.file_name || '').trim();

      const dataSource = String(
        payload?.data?.table_name ||
        payload.source ||
        'GuildSyncBanking'
      ).trim();

      Log(
        `Banking data received from ${authenticatedUsername || 'unknown user'}${fileName ? ` for ${fileName}` : ''}. Entries: ${entries.length}.`
      );

      const applicationDB = await openAppDataDB();

      const result = await insertBankingEntries(applicationDB, {
        source: dataSource,
        entries
      });

      const response = {
        ok: true,
        message: 'Banking data processed by GuildSync backend.',
        received: true,
        received_from: authenticatedUsername,
        file_name: fileName || null,
        data_source: dataSource,
        entries_count: entries.length,
        ...result,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:banking-data-result', callback, response);
    } catch (error) {
      Log(`Banking data processing failed: ${error.message}`);

      const response = {
        ok: false,
        message: 'Banking data processing failed.',
        error: error.message,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:banking-data-result', callback, response);
    }
  });

  socket.on('guildsync:sending-roster-data', async (payload = {}, callback) => {
    if (!socket.guildSyncAuthenticated || !socket.guildSyncUser) {
      const response = {
        ok: false,
        message: 'You must be logged in to send roster data.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:roster-data-result', callback, response);
      return;
    }

    try {
      const authenticatedUsername = String(
        socket.guildSyncUser.display_name ||
        socket.guildSyncUser.guild_member_name ||
        socket.guildSyncUser.username ||
        socket.guildSyncUser.discord_user_id ||
        ''
      ).trim();

      let data = payload?.data && typeof payload.data === 'object'
        ? payload.data
        : payload;

      if (payload?.raw_lua_text) {
        data = parseGuildSyncRosterSavedVarsLua(String(payload.raw_lua_text || ''));
      }

      const guildMembers = data?.guildList?.guildListMembers && typeof data.guildList.guildListMembers === 'object'
        ? Object.keys(data.guildList.guildListMembers).length
        : 0;

      const rosterEvents = data?.rosterEvents && typeof data.rosterEvents === 'object'
        ? Object.keys(data.rosterEvents).length
        : 0;

      const fileName = String(payload.file_name || '').trim();

      Log(
        `Roster data received from ${authenticatedUsername || 'unknown user'}${fileName ? ` for ${fileName}` : ''}. Guild list members: ${guildMembers}. Stream events: ${rosterEvents}.`
      );

      const applicationDB = await openAppDataDB();
      const result = await processRosterData(applicationDB, { data });

      const response = {
        ok: true,
        message: 'Roster data processed by GuildSync backend.',
        received: true,
        received_from: authenticatedUsername,
        file_name: fileName || null,
        ...result,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:roster-data-result', callback, response);
      await broadcastRosterDataUpdate();
      await broadcastMemberLinksUpdate();
    } catch (error) {
      Log(`Roster data processing failed: ${error.message}`);

      const response = {
        ok: false,
        message: 'Roster data processing failed.',
        error: error.message,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:roster-data-result', callback, response);
    }
  });



  socket.on('guildsync:client-version', (payload = {}) => {
    const clientVersion = String(payload.version || '').trim();
    const updateRequired = isVersionLower(clientVersion, CURRENT_GUILDSYNC_CLIENT_VERSION);

    socket.emit('guildsync:version-status', {
      ok: true,
      client_version: clientVersion,
      latest_version: CURRENT_GUILDSYNC_CLIENT_VERSION,
      update_required: updateRequired,
      message: updateRequired
        ? `GuildSync ${clientVersion || 'unknown'} is out of date. Latest version is ${CURRENT_GUILDSYNC_CLIENT_VERSION}.`
        : `GuildSync ${clientVersion || 'unknown'} is current.`
    });
  });

  socket.on('guildsync:request-discord-data-refresh', async (payload = {}, callback) => {
    if (!socket.guildSyncAuthenticated || !socket.guildSyncUser) {
      const response = {
        ok: false,
        message: 'You must be logged in to refresh Discord data.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-data-refresh-result', callback, response);
      return;
    }

    if (!discordBotSocketId) {
      const response = {
        ok: false,
        message: 'The GuildSync Discord bot is not connected, so Discord data cannot be refreshed.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-data-refresh-result', callback, response);
      return;
    }

    const botSocket = io.sockets.sockets.get(discordBotSocketId);

    if (!botSocket?.connected) {
      discordBotConnected = false;
      discordBotSocketId = null;

      const response = {
        ok: false,
        message: 'The GuildSync Discord bot connection is no longer active.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-data-refresh-result', callback, response);
      return;
    }

    try {
      const requestorName = socket.guildSyncUser.display_name || socket.guildSyncUser.username || socket.guildSyncUser.discord_user_id;

      Log(
        `Discord data refresh requested by ${requestorName}. Forwarding request to Discord bot.`
      );

      emitDiscordRefreshStatus(
        `Discord data refresh requested by ${requestorName}. Waiting for the Discord bot to sync roles and members.`
      );

      const botResponse = await emitToSocketWithAck(
        botSocket,
        'guildsync:request-discord-sync',
        {
          requested_by: socket.guildSyncUser.discord_user_id,
          requested_by_name: socket.guildSyncUser.display_name || socket.guildSyncUser.username || '',
          requested_at: new Date().toISOString()
        },
        180000
      );

      if (!botResponse?.ok) {
        throw new Error(botResponse?.message || 'The Discord bot failed to refresh Discord data.');
      }

      emitDiscordRefreshStatus(
        `Discord bot sync completed. Roles: ${botResponse.roles_processed || 0}, Members: ${botResponse.members_processed || 0}, Removed: ${botResponse.members_removed || 0}. Loading updated data.`
      );

      const response = {
        ok: true,
        message: 'Discord data refresh completed.',
        roles_processed: botResponse.roles_processed || 0,
        members_processed: botResponse.members_processed || 0,
        members_removed: botResponse.members_removed || 0,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-data-refresh-result', callback, response);
    } catch (error) {
      Log('Failed to process guildsync:request-discord-data-refresh:', error);

      emitDiscordRefreshStatus(
        error.message || 'Discord data refresh failed.'
      );

      const response = {
        ok: false,
        message: error.message || 'Failed to refresh Discord data.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-data-refresh-result', callback, response);
    }
  });

  socket.on('guildsync:request-discord-data-date', async (payload = {}, callback) => {
    try {
      const result = await getDiscordDataDate(applicationDB);

      const response = {
        ok: true,
        message: 'Discord refresh date retrieved.',
        data: result?.data || 'discord_refresh',
        value: result?.value || null,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-data-date-result', callback, response);
    } catch (error) {
      Log('Failed to process guildsync:request-discord-data-date:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to retrieve Discord refresh date.',
        data: 'discord_refresh',
        value: null,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-data-date-result', callback, response);
    }
  });


  socket.on('guildsync:request-banking-data', async (payload = {}, callback) => {
    try {
      const [entries, refreshDate] = await Promise.all([
        getBankingDataJSON(applicationDB),
        getBankingDataDate(applicationDB)
      ]);

      const response = {
        ok: true,
        message: 'Banking data retrieved.',
        entries,
        entries_returned: entries.length,
        last_refresh: refreshDate?.value || null,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:banking-data-request-result', callback, response);
    } catch (error) {
      Log('Failed to process guildsync:request-banking-data:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to retrieve banking data.',
        entries: [],
        entries_returned: 0,
        last_refresh: null,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:banking-data-request-result', callback, response);
    }
  });


  socket.on('guildsync:add-manual-biweekly-ticket-entry', async (payload = {}, callback) => {
    if (!socket.guildSyncAuthenticated || !socket.guildSyncUser) {
      const response = {
        ok: false,
        message: 'You must be logged in to add manual ticket entries.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:manual-biweekly-ticket-result', callback, response);
      return;
    }

    try {
      const addedBy = socket.guildSyncUser.display_name
        || socket.guildSyncUser.global_name
        || socket.guildSyncUser.username
        || socket.guildSyncUser.discord_user_id
        || 'Unknown';

      const result = await addManualBiweeklyTicketEntry(applicationDB, {
        ...payload,
        addedBy
      });

      await broadcastBankingDataUpdate();

      const response = {
        ok: true,
        message: 'Manual bi-weekly ticket entry added.',
        ...result,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:manual-biweekly-ticket-result', callback, response);
    } catch (error) {
      Log('Failed to process guildsync:add-manual-biweekly-ticket-entry:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to add manual ticket entry.',
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:manual-biweekly-ticket-result', callback, response);
    }
  });

  socket.on('guildsync:request-associate-ticket-report', async (payload = {}, callback) => {
    if (!socket.guildSyncAuthenticated || !socket.guildSyncUser) {
      const response = {
        ok: false,
        message: 'You must be logged in to run this report.',
        rows: [],
        rows_returned: 0,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:associate-ticket-report-result', callback, response);
      return;
    }

    try {
      const rows = await getAssociateTicketReport(applicationDB);
      const response = {
        ok: true,
        message: 'Associates promotion eligible report complete.',
        rows,
        rows_returned: rows.length,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:associate-ticket-report-result', callback, response);
    } catch (error) {
      Log('Failed to process guildsync:request-associate-ticket-report:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to run Associates Promotion Eligible report.',
        rows: [],
        rows_returned: 0,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:associate-ticket-report-result', callback, response);
    }
  });


  socket.on('guildsync:request-discord-rank-audit-report', async (payload = {}, callback) => {
    if (!socket.guildSyncAuthenticated || !socket.guildSyncUser) {
      const response = {
        ok: false,
        message: 'You must be logged in to run this report.',
        rows: [],
        rows_returned: 0,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-rank-audit-report-result', callback, response);
      return;
    }

    try {
      const rows = await getDiscordRankAuditReport(applicationDB);
      const response = {
        ok: true,
        message: 'Discord rank audit report complete.',
        rows,
        rows_returned: rows.length,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-rank-audit-report-result', callback, response);
    } catch (error) {
      Log('Failed to process guildsync:request-discord-rank-audit-report:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to run Discord Rank Audit report.',
        rows: [],
        rows_returned: 0,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-rank-audit-report-result', callback, response);
    }
  });


  socket.on('guildsync:request-roster-data', async (payload = {}, callback) => {
    try {
      const [members, refreshDate] = await Promise.all([
        getRosterDataJSON(applicationDB),
        getRosterDataDate(applicationDB)
      ]);

      const response = {
        ok: true,
        message: 'Roster data retrieved.',
        members,
        members_returned: members.length,
        last_refresh: refreshDate?.value || null,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:roster-data-request-result', callback, response);
    } catch (error) {
      Log('Failed to process guildsync:request-roster-data:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to retrieve roster data.',
        members: [],
        members_returned: 0,
        last_refresh: null,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:roster-data-request-result', callback, response);
    }
  });


  socket.on('guildsync:request-roster-rank-history', async (payload = {}, callback) => {
    if (!socket.guildSyncAuthenticated || !socket.guildSyncUser) {
      const response = {
        ok: false,
        message: 'You must be logged in to search roster rank history.',
        matches: [],
        matches_returned: 0,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:roster-rank-history-result', callback, response);
      return;
    }

    try {
      const matches = await getRosterRankHistoryMatches(applicationDB, payload?.query || '');
      const response = {
        ok: true,
        message: 'Roster rank history search complete.',
        matches,
        matches_returned: matches.length,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:roster-rank-history-result', callback, response);
    } catch (error) {
      Log('Failed to process guildsync:request-roster-rank-history:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to search roster rank history.',
        matches: [],
        matches_returned: 0,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:roster-rank-history-result', callback, response);
    }
  });

  socket.on('guildsync:request-roster-stream-history', async (payload = {}, callback) => {
    if (!socket.guildSyncAuthenticated || !socket.guildSyncUser) {
      const response = {
        ok: false,
        message: 'You must be logged in to retrieve roster stream history.',
        events: [],
        events_returned: 0,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:roster-stream-history-result', callback, response);
      return;
    }

    try {
      const events = await getRosterStreamHistoryForAccount(applicationDB, payload?.account_name || payload?.accountName || '');
      const response = {
        ok: true,
        message: 'Roster stream history retrieved.',
        events,
        events_returned: events.length,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:roster-stream-history-result', callback, response);
    } catch (error) {
      Log('Failed to process guildsync:request-roster-stream-history:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to retrieve roster stream history.',
        events: [],
        events_returned: 0,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:roster-stream-history-result', callback, response);
    }
  });



  socket.on('guildsync:request-member-links', async (payload = {}, callback) => {
    try {
      const links = await getMemberLinks(applicationDB);
      sendSocketResponse(socket, 'guildsync:member-links-result', callback, {
        ok: true,
        message: 'Member links retrieved.',
        links,
        links_returned: links.length,
        at: new Date().toLocaleString()
      });
    } catch (error) {
      Log('Failed to process guildsync:request-member-links:', error);
      sendSocketResponse(socket, 'guildsync:member-links-result', callback, {
        ok: false,
        message: error.message || 'Failed to retrieve member links.',
        links: [],
        at: new Date().toLocaleString()
      });
    }
  });

  socket.on('guildsync:request-member-link-options', async (payload = {}, callback) => {
    if (!socket.guildSyncAuthenticated || !socket.guildSyncUser) {
      sendSocketResponse(socket, 'guildsync:member-link-options-result', callback, {
        ok: false,
        message: 'You must be logged in to retrieve link options.',
        options: [],
        at: new Date().toLocaleString()
      });
      return;
    }

    try {
      const options = await getMemberLinkOptions(applicationDB, payload || {});
      sendSocketResponse(socket, 'guildsync:member-link-options-result', callback, {
        ok: true,
        message: 'Member link options retrieved.',
        options,
        options_returned: options.length,
        at: new Date().toLocaleString()
      });
    } catch (error) {
      Log('Failed to process guildsync:request-member-link-options:', error);
      sendSocketResponse(socket, 'guildsync:member-link-options-result', callback, {
        ok: false,
        message: error.message || 'Failed to retrieve member link options.',
        options: [],
        at: new Date().toLocaleString()
      });
    }
  });

  socket.on('guildsync:accept-member-link-candidate', async (payload = {}, callback) => {
    if (!socket.guildSyncAuthenticated || !socket.guildSyncUser) {
      sendSocketResponse(socket, 'guildsync:member-link-update-result', callback, {
        ok: false,
        message: 'You must be logged in to accept link candidates.',
        at: new Date().toLocaleString()
      });
      return;
    }

    try {
      await acceptMemberLinkCandidate(applicationDB, payload || {});
      const links = await getMemberLinks(applicationDB);
      await broadcastMemberLinksUpdate(links);
      sendSocketResponse(socket, 'guildsync:member-link-update-result', callback, {
        ok: true,
        message: 'Candidate accepted as an automatic link.',
        links,
        at: new Date().toLocaleString()
      });
    } catch (error) {
      Log('Failed to process guildsync:accept-member-link-candidate:', error);
      sendSocketResponse(socket, 'guildsync:member-link-update-result', callback, {
        ok: false,
        message: error.message || 'Failed to accept link candidate.',
        at: new Date().toLocaleString()
      });
    }
  });

  socket.on('guildsync:manual-link-member', async (payload = {}, callback) => {
    if (!socket.guildSyncAuthenticated || !socket.guildSyncUser) {
      sendSocketResponse(socket, 'guildsync:member-link-update-result', callback, {
        ok: false,
        message: 'You must be logged in to link members.',
        at: new Date().toLocaleString()
      });
      return;
    }

    try {
      await manualLinkMember(applicationDB, payload || {});
      const links = await getMemberLinks(applicationDB);
      await broadcastMemberLinksUpdate(links);
      sendSocketResponse(socket, 'guildsync:member-link-update-result', callback, {
        ok: true,
        message: 'Member link saved.',
        links,
        at: new Date().toLocaleString()
      });
    } catch (error) {
      Log('Failed to process guildsync:manual-link-member:', error);
      sendSocketResponse(socket, 'guildsync:member-link-update-result', callback, {
        ok: false,
        message: error.message || 'Failed to link members.',
        at: new Date().toLocaleString()
      });
    }
  });

  socket.on('guildsync:manual-unlink-member', async (payload = {}, callback) => {
    if (!socket.guildSyncAuthenticated || !socket.guildSyncUser) {
      sendSocketResponse(socket, 'guildsync:member-link-update-result', callback, {
        ok: false,
        message: 'You must be logged in to unlink members.',
        at: new Date().toLocaleString()
      });
      return;
    }

    try {
      const unlinkResult = await manualUnlinkMember(applicationDB, payload || {});
      const links = await getMemberLinks(applicationDB);
      await broadcastMemberLinksUpdate(links);
      sendSocketResponse(socket, 'guildsync:member-link-update-result', callback, {
        ok: true,
        message: unlinkResult?.blocked
          ? 'Exact automatic link removed and blocked. Manual linking is still available.'
          : 'Member link removed. Automatic/fuzzy matching was refreshed.',
        links,
        at: new Date().toLocaleString()
      });
    } catch (error) {
      Log('Failed to process guildsync:manual-unlink-member:', error);
      sendSocketResponse(socket, 'guildsync:member-link-update-result', callback, {
        ok: false,
        message: error.message || 'Failed to unlink members.',
        at: new Date().toLocaleString()
      });
    }
  });

  socket.on('guildsync:run-member-auto-linking', async (payload = {}, callback) => {
    if (!socket.guildSyncAuthenticated || !socket.guildSyncUser) {
      sendSocketResponse(socket, 'guildsync:member-auto-link-result', callback, {
        ok: false,
        message: 'You must be logged in to run member auto-linking.',
        at: new Date().toLocaleString()
      });
      return;
    }

    try {
      const result = await runMemberAutoLinking(applicationDB);
      const links = await getMemberLinks(applicationDB);
      await broadcastMemberLinksUpdate(links);
      sendSocketResponse(socket, 'guildsync:member-auto-link-result', callback, {
        ok: true,
        message: `Auto-linking complete. Linked ${result.linked || 0}; candidates ${result.candidates || 0}.`,
        result,
        links,
        at: new Date().toLocaleString()
      });
    } catch (error) {
      Log('Failed to process guildsync:run-member-auto-linking:', error);
      sendSocketResponse(socket, 'guildsync:member-auto-link-result', callback, {
        ok: false,
        message: error.message || 'Failed to run member auto-linking.',
        at: new Date().toLocaleString()
      });
    }
  });

  socket.on('guildsync:request-discord-member-dataJSON', async (payload = {}, callback) => {
    try {
      const members = await getDiscordMemberDataJSON(applicationDB);

      const response = {
        ok: true,
        message: 'Discord member data retrieved.',
        members,
        members_returned: members.length,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-member-data-result', callback, response);
    } catch (error) {
      Log('Failed to process guildsync:request-discord-member-data:', error);

      const response = {
        ok: false,
        message: error.message || 'Failed to retrieve Discord member data.',
        members: [],
        members_returned: 0,
        at: new Date().toLocaleString()
      };

      sendSocketResponse(socket, 'guildsync:discord-member-data-result', callback, response);
    }
  });


  socket.on('disconnect', (reason) => {
    let name = 'unauthenticated';

    if (socket.guildSyncAuthType === 'discord-bot') {
      name = 'Discord Bot';
      discordBotConnected = false;
      discordBotSocketId = null;
      discordBotConnectedAt = null;
    } else if (user?.display_name) {
      name = user.display_name + ' GuildSync User';
    }

    Log(`Disconnected: ${socket.id} => ${name} ${reason}`);
  });
});

server.listen(PORT, HOST, () => {
  Log(`GuildSync auth server listening at http://${HOST}:${PORT}`);
  Log(`Discord redirect URI: ${DISCORD_REDIRECT_URI}`);
  Log(`Current GuildSync client version: ${CURRENT_GUILDSYNC_CLIENT_VERSION}`);
});


async function broadcastBankingDataUpdate() {
  try {
    const [entries, refreshDate] = await Promise.all([
      getBankingDataJSON(applicationDB),
      getBankingDataDate(applicationDB)
    ]);

    io.to('GuildSyncClient').emit('guildsync:banking-data-updated', {
      ok: true,
      message: 'Banking data updated.',
      entries,
      entries_returned: entries.length,
      last_refresh: refreshDate?.value || null,
      at: new Date().toLocaleString()
    });

    Log(`Broadcast banking data update to GuildSync clients. Entries: ${entries.length}`);
  } catch (error) {
    Log('Failed to broadcast banking data update:', error);
  }
}

function emitDiscordRefreshStatus(message) {
  io.to('GuildSyncClient').emit('guildsync:discord-refresh-status', {
    ok: true,
    message,
    at: new Date().toLocaleString()
  });
}



async function broadcastMemberLinksUpdate(existingLinks = null) {
  try {
    const links = Array.isArray(existingLinks) ? existingLinks : await getMemberLinks(applicationDB);

    io.to('GuildSyncClient').emit('guildsync:member-links-updated', {
      ok: true,
      message: 'Member links updated.',
      links,
      links_returned: links.length,
      at: new Date().toLocaleString()
    });

    Log(`Broadcast member link update to GuildSync clients. Links: ${links.length}`);
  } catch (error) {
    Log('Failed to broadcast member link update:', error);
  }
}

async function broadcastRosterDataUpdate() {
  try {
    const [members, refreshDate] = await Promise.all([
      getRosterDataJSON(applicationDB),
      getRosterDataDate(applicationDB)
    ]);

    io.to('GuildSyncClient').emit('guildsync:roster-data-updated', {
      ok: true,
      message: 'Roster data updated.',
      members,
      members_returned: members.length,
      last_refresh: refreshDate?.value || null,
      at: new Date().toLocaleString()
    });

    Log(`Broadcast roster data update to GuildSync clients. Members: ${members.length}`);
  } catch (error) {
    Log('Failed to broadcast roster data update:', error);
  }
}

async function broadcastDiscordMemberDataUpdate() {
  try {
    const [members, refreshDate] = await Promise.all([
      getDiscordMemberDataJSON(applicationDB),
      getDiscordDataDate(applicationDB)
    ]);

    io.to('GuildSyncClient').emit('guildsync:discord-member-data-updated', {
      ok: true,
      message: 'Discord member data updated.',
      members,
      members_returned: members.length,
      last_refresh: refreshDate?.value || null,
      at: new Date().toLocaleString()
    });

    Log(`Broadcast Discord member data update to GuildSync clients. Members: ${members.length}`);
  } catch (error) {
    Log('Failed to broadcast Discord member data update:', error);
  }
}

function emitToSocketWithAck(targetSocket, eventName, payload = {}, timeoutMs = 30000) {
  return new Promise((resolve, reject) => {
    if (!targetSocket?.connected) {
      reject(new Error('Target websocket is not connected.'));
      return;
    }

    const timeout = setTimeout(() => {
      reject(new Error(`${eventName} did not respond within ${timeoutMs}ms.`));
    }, timeoutMs);

    targetSocket.emit(eventName, payload, (response) => {
      clearTimeout(timeout);
      resolve(response);
    });
  });
}

function sendSocketResponse(socket, eventName, callback, response) {
  if (typeof callback === 'function') {
    callback(response);
    return;
  }

  socket.emit(eventName, response);
}


function buildGuildSyncUserFromDBUser(dbUser = {}) {
  return {
    discord_user_id: dbUser.discord_user_id,
    username: dbUser.username || '',
    global_name: dbUser.global_name || '',
    display_name: preferredUserName(dbUser),
    avatar: dbUser.avatar || '',
    avatar_url: discordAvatarURL(dbUser.discord_user_id, dbUser.avatar),
    email: dbUser.email || '',
    role: dbUser.role || 'user'
  };
}

function createGuildSyncJWT(guildSyncUser = {}) {
  return jwt.sign(
    {
      sub: guildSyncUser.discord_user_id,
      username: guildSyncUser.username,
      global_name: guildSyncUser.global_name,
      display_name: guildSyncUser.display_name,
      avatar_url: guildSyncUser.avatar_url,
      role: guildSyncUser.role
    },
    GUILDSYNC_JWT_SECRET,
    {
      issuer: 'guildsync-auth-server',
      audience: 'guildsync-desktop',
      expiresIn: GUILDSYNC_TOKEN_TTL_SECONDS
    }
  );
}

function getBearerToken(req) {
  const authorization = String(req.headers.authorization || '').trim();
  if (!authorization.toLowerCase().startsWith('bearer ')) {
    return '';
  }
  return authorization.slice(7).trim();
}

function requireGuildSyncWebUser(req, res, next) {
  try {
    const token = getBearerToken(req);
    if (!token) {
      return res.status(401).json({ ok: false, message: 'You must be logged in to upload SavedVariables files.' });
    }

    const claims = jwt.verify(token, GUILDSYNC_JWT_SECRET, {
      issuer: 'guildsync-auth-server',
      audience: 'guildsync-desktop'
    });

    req.guildSyncUser = claims;
    return next();
  } catch {
    return res.status(401).json({ ok: false, message: 'Invalid or expired GuildSync session.' });
  }
}

function renderWebAuthResultPage(result = {}) {
  const safePayload = JSON.stringify({
    ok: result.ok === true,
    token: result.token || '',
    user: result.user || null,
    message: result.message || ''
  }).replace(/</g, '\\u003c');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>GuildSync Login</title>
</head>
<body>
  <script>
    const result = ${safePayload};
    if (result.ok && result.token) {
      const session = {
        logged_in: true,
        allowed: true,
        token: result.token,
        user: result.user,
        discord_user_id: result.user?.discord_user_id || '',
        username: result.user?.username || '',
        global_name: result.user?.global_name || '',
        display_name: result.user?.display_name || result.user?.global_name || result.user?.username || '',
        avatar_url: result.user?.avatar_url || '',
        role: result.user?.role || 'user',
        status_message: result.message || 'Logged in.'
      };
      localStorage.setItem('guildsync-web-session', JSON.stringify(session));
      localStorage.setItem('guildsync-web-token', result.token);
      window.location.replace('/');
    } else {
      document.body.innerHTML = '<main style="font-family: sans-serif; max-width: 720px; margin: 4rem auto; line-height: 1.5;"><h1>GuildSync Login</h1><p>'
        + (result.message || 'Login failed.')
        + '</p><p><a href="/">Return to GuildSync</a></p></main>';
    }
  </script>
</body>
</html>`;
}

async function exchangeCodeWithDiscord(code, redirectURI) {
  const body = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    client_secret: DISCORD_CLIENT_SECRET,
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectURI
  });

  const response = await fetch('https://discord.com/api/v10/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  });

  const text = await response.text();

  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Discord token endpoint returned invalid JSON: ${text}`);
  }

  if (!response.ok) {
    throw new Error(`Discord token exchange failed: ${JSON.stringify(json)}`);
  }

  if (!json.access_token) {
    throw new Error('Discord did not return an access token.');
  }

  return json;
}

async function fetchDiscordUser(accessToken) {
  const response = await fetch('https://discord.com/api/v10/users/@me', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const text = await response.text();

  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Discord user endpoint returned invalid JSON: ${text}`);
  }

  if (!response.ok) {
    throw new Error(`Discord user lookup failed: ${JSON.stringify(json)}`);
  }

  return json;
}

function toGuildSyncUser(discordUser, allowedUser) {
  return {
    discord_user_id: discordUser.id,
    username: discordUser.username,
    global_name: discordUser.global_name,
    avatar: discordUser.avatar || '',
    avatar_url: discordAvatarURL(discordUser.id, discordUser.avatar),
    email: discordUser.email || '',
    role: allowedUser?.role || 'user'
  };
}

function discordAvatarURL(discordUserID, avatarHash) {
  const userID = String(discordUserID || '').trim();
  const avatar = String(avatarHash || '').trim();

  if (!userID || !avatar) {
    return '';
  }

  if (avatar.startsWith('http://') || avatar.startsWith('https://')) {
    return avatar;
  }

  const extension = avatar.startsWith('a_') ? 'gif' : 'png';

  return `https://cdn.discordapp.com/avatars/${encodeURIComponent(userID)}/${encodeURIComponent(avatar)}.${extension}?size=128`;
}

function preferredUserName(user) {
  const guild_member_name = String(user.guild_member_name || '').trim();
  if (guild_member_name) {
    return guild_member_name;
  }

  const global_name = String(user.global_name || '').trim();
  if (global_name) {
    return global_name;
  }

  const username = String(user.username || '').trim();
  if (username) {
    return username;
  }

  return 'Unknown User';
}

function isVersionLower(clientVersion, serverVersion) {
  const client = parseVersion(clientVersion);
  const server = parseVersion(serverVersion);

  for (let i = 0; i < Math.max(client.length, server.length); i += 1) {
    const clientPart = client[i] || 0;
    const serverPart = server[i] || 0;

    if (clientPart < serverPart) {
      return true;
    }

    if (clientPart > serverPart) {
      return false;
    }
  }

  return false;
}

function parseVersion(version) {
  return String(version || '')
    .trim()
    .replace(/^v/i, '')
    .split('.')
    .map((part) => {
      const match = part.match(/\d+/);
      return match ? Number(match[0]) : 0;
    });
}

function requiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    Log(`Missing required environment variable: ${name}`);
    Log('Copy .env.example to .env and fill in the values.');
    process.exit(1);
  }

  return value;
}

export function Log(message) {
  const timestamp = new Date().toLocaleString();
  console.log(`${timestamp} [GUILDSYNC-NODE] ${message}`);
}

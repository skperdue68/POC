import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import http from 'node:http';
import jwt from 'jsonwebtoken';
import { Server } from 'socket.io';

import {
  GUILDSYNC_DB_NAME,
  openLoginDB,
  upsertLoginUser,

  openAppDataDB,
  upsertDiscordRoles,
  upsertDiscordMembers,
  getDiscordDataDate,
  getDiscordMemberDataJSON
} from './guildsync-database-actions.js';

let discordBotConnected = false;
let discordBotSocketId = null;
let discordBotConnectedAt = null;
const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(process.env.PORT || 3001);

const DISCORD_CLIENT_ID = requiredEnv('DISCORD_CLIENT_ID');
const DISCORD_CLIENT_SECRET = requiredEnv('DISCORD_CLIENT_SECRET');
const DISCORD_REDIRECT_URI = process.env.DISCORD_REDIRECT_URI || 'http://127.0.0.1:53682/callback';
const GUILDSYNC_JWT_SECRET = requiredEnv('GUILDSYNC_JWT_SECRET');
const GUILDSYNC_TOKEN_TTL_SECONDS = Number(process.env.GUILDSYNC_TOKEN_TTL_SECONDS || 86400);

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
app.use(express.json({ limit: '1mb' }));

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

function emitDiscordRefreshStatus(message) {
  io.to('GuildSyncClient').emit('guildsync:discord-refresh-status', {
    ok: true,
    message,
    at: new Date().toLocaleString()
  });
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

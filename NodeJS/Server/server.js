import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import cors from 'cors';
import http from 'node:http';
import jwt from 'jsonwebtoken';
import { Server } from 'socket.io';

import {
  openDatabase,
  upsertDiscordUser,
  DB_PATH
} from './database.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(process.env.PORT || 3001);

const DISCORD_CLIENT_ID = requiredEnv('DISCORD_CLIENT_ID');
const DISCORD_CLIENT_SECRET = requiredEnv('DISCORD_CLIENT_SECRET');
const DISCORD_REDIRECT_URI = process.env.DISCORD_REDIRECT_URI || 'http://127.0.0.1:53682/callback';
const GUILDSYNC_JWT_SECRET = requiredEnv('GUILDSYNC_JWT_SECRET');
const GUILDSYNC_TOKEN_TTL_SECONDS = Number(process.env.GUILDSYNC_TOKEN_TTL_SECONDS || 86400);


const db = openDatabase();

console.log(`SQLite database ready: ${DB_PATH}`);


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

app.get('/health', (req, res) => {
  res.json({
    ok: true,
    service: 'GuildSync Auth Server',
    host: HOST,
    port: PORT
  });
});

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
    const dbUser = upsertDiscordUser(db, discordUser);

    if (!dbUser.allowed) {
      return res.status(403).json({
        ok: false,
        allowed: false,
        message: `Discord user ${preferredUserName(dbUser)} is authenticated, but access is pending approval.`,
        user: {
          discord_user_id: dbUser.discord_user_id,
          username: dbUser.username,
          display_name: preferredUserName(dbUser),
          avatar: dbUser.avatar,
          email: dbUser.email,
          role: dbUser.role
        }
      });
    }

    const guildSyncUser = {
      discord_user_id: dbUser.discord_user_id,
      username: dbUser.username,
      display_name: preferredUserName(dbUser),
      avatar: dbUser.avatar || '',
      email: dbUser.email || '',
      role: dbUser.role || 'user'
    };

    const expiresAt = new Date(Date.now() + GUILDSYNC_TOKEN_TTL_SECONDS * 1000);

    const token = jwt.sign(
      {
        sub: guildSyncUser.discord_user_id,
        username: guildSyncUser.username,
        display_name: guildSyncUser.display_name,
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
    console.error('Discord desktop-token error:', error);
    return res.status(500).json({
      ok: false,
      error: error.message || 'Discord authentication failed.'
    });
  }
});

io.use((socket, next) => {
  const token = socket.handshake.auth?.token;

  if (!token) {
    return next(new Error('Missing GuildSync token.'));
  }

  try {
    const claims = jwt.verify(token, GUILDSYNC_JWT_SECRET, {
      issuer: 'guildsync-auth-server',
      audience: 'guildsync-desktop'
    });

    socket.guildSyncUser = {
      discord_user_id: claims.sub,
      username: claims.username,
      display_name: claims.display_name,
      role: claims.role
    };

    return next();
  } catch (error) {
    return next(new Error('Invalid or expired GuildSync token.'));
  }
});

io.on('connection', (socket) => {
  const user = socket.guildSyncUser;
  console.log(`Socket connected: ${socket.id} ${user.display_name} (${user.discord_user_id})`);

  socket.emit('guildsync:server-message', {
    message: `Server accepted websocket connection for ${user.display_name}.`,
    user
  });

  socket.on('guildsync:ping', (payload, callback) => {
    const response = {
      ok: true,
      message: 'pong',
      received: payload || null,
      user,
      at: new Date().toISOString()
    };

    if (typeof callback === 'function') {
      callback(response);
    } else {
      socket.emit('guildsync:pong', response);
    }
  });

  socket.on('disconnect', (reason) => {
    console.log(`Socket disconnected: ${socket.id} ${reason}`);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`GuildSync auth server listening at http://${HOST}:${PORT}`);
  console.log(`Discord redirect URI: ${DISCORD_REDIRECT_URI}`);
});

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
    display_name: discordUser.global_name || discordUser.username,
    avatar: discordUser.avatar || '',
    email: discordUser.email || '',
    role: allowedUser?.role || 'user'
  };
}

function preferredUserName(user) {
  const guildMemberName = String(user.guild_member_name || '').trim();
  if (guildMemberName) {
    return guildMemberName;
  }

  const displayName = String(user.display_name || '').trim();
  if (displayName) {
    return displayName;
  }

  const username = String(user.username || '').trim();
  if (username) {
    return username;
  }

  return 'Unknown User';
}

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing required environment variable: ${name}`);
    console.error('Copy .env.example to .env and fill in the values.');
    process.exit(1);
  }
  return value;
}


import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url'
import { io } from 'socket.io-client';

import {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  MessageFlags
} from 'discord.js';

import * as ping from './commands/ping.js';
import * as status from './commands/status.js';
import * as members from './commands/members.js';
import * as roles from './commands/roles.js';
import * as addRole from './commands/add-role.js';
import * as removeRole from './commands/remove-role.js';
import * as dmUser from './commands/dm-user.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

const {
  DISCORD_TOKEN,
  GUILDSYNC_SOCKET_URL,
  GUILDSYNC_BOT_KEY
} = process.env;

if (!DISCORD_TOKEN) {
  console.error('Missing DISCORD_TOKEN in .env');
  process.exit(1);
}

if (!GUILDSYNC_SOCKET_URL) {
  console.error('Missing GUILDSYNC_SOCKET_URL in .env');
  process.exit(1);
}

if (!GUILDSYNC_BOT_KEY) {
  console.error('Missing GUILDSYNC_BOT_KEY in .env');
  process.exit(1);
}

const guildSyncSocket = io(GUILDSYNC_SOCKET_URL, {
  auth: {
    source: 'discord-bot',
    botKey: GUILDSYNC_BOT_KEY
  },
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 10000
});

guildSyncSocket.on('connect', () => {
  console.log(`Connected to GuildSync websocket as ${guildSyncSocket.id}`);

  guildSyncSocket.emit('discord-bot-online', {
    botName: 'GuildSync Discord Bot',
    connectedAt: new Date().toISOString()
  });
});

guildSyncSocket.on('disconnect', reason => {
  console.log(`Disconnected from GuildSync websocket: ${reason}`);
});

guildSyncSocket.on('connect_error', error => {
  console.error('GuildSync websocket connection error:', error.message);
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages
  ]
});

client.commands = new Collection();

const commands = [
  ping,
  status,
  members,
  roles,
  addRole,
  removeRole,
  dmUser
];

for (const command of commands) {
  client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, readyClient => {
  console.log(`GuildSync bot logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    await interaction.reply({
      content: 'Unknown command.',
      ephemeral: true
    });
    return;
  }

  try {
    await command.execute(interaction, guildSyncSocket);
  } catch (error) {
    console.error(`Error running /${interaction.commandName}:`, error);

    const message = {
      content: 'There was an error running that command.',
      ephemeral: true
    };

    if (interaction.replied || interaction.deferred) {
      await interaction.followUp(message);
    } else {
      await interaction.reply(message);
    }
  }
});

async function waitForSocketConnection(socket, timeoutMs = 30000) {
  if (socket.connected) {
    return;
  }

  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error(`GuildSync websocket did not connect within ${timeoutMs}ms.`));
    }, timeoutMs);

    function onConnect() {
      cleanup();
      resolve();
    }

    function onConnectError(error) {
      console.error('GuildSync websocket connection attempt failed:', error.message);
      // Do not reject here. Socket.IO may retry automatically.
    }

    function cleanup() {
      clearTimeout(timeout);
      socket.off('connect', onConnect);
      socket.off('connect_error', onConnectError);
    }

    socket.on('connect', onConnect);
    socket.on('connect_error', onConnectError);
  });
}

try {
  console.log('Waiting for GuildSync websocket connection...');

  await waitForSocketConnection(guildSyncSocket, 30000);

  console.log('GuildSync websocket connected. Starting Discord bot...');

  await client.login(DISCORD_TOKEN);
} catch (error) {
  console.error(error.message);
  console.error('Discord bot was not started because GuildSync websocket is unavailable.');
  process.exit(1);
}

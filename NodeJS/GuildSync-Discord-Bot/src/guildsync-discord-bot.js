import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { io } from 'socket.io-client';
import { Log } from './helper.js';
import { syncDiscordRolesAndMembers } from './discord-sync.js';

import {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  MessageFlags
} from 'discord.js';

import * as roles from './commands/roles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

const {
  DISCORD_TOKEN,
  DISCORD_GUILD_ID,
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
  reconnectionDelayMax: 10000,
  timeout: 10000
});

guildSyncSocket.on('connect', async () => {
  Log(`Connected to GuildSync websocket as ${guildSyncSocket.id}`);

  guildSyncSocket.emit('discord-bot-online', {
    botName: 'GuildSync Discord Bot',
    connectedAt: new Date().toISOString()
  });

  await runStartupSyncIfReady('websocket connected');
});

guildSyncSocket.on('disconnect', reason => {
  Log(`Disconnected from GuildSync websocket: ${reason}`);
});

guildSyncSocket.on('connect_error', error => {
  Log(`GuildSync websocket connection error: ${error.message}`);
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
  roles
];

for (const command of commands) {
  client.commands.set(command.data.name, command);
}

let startupSyncDone = false;
let startupSyncRunning = false;

client.once(Events.ClientReady, async readyClient => {
  Log(`GuildSync bot logged in as ${readyClient.user.tag}`);

  await runStartupSyncIfReady('Discord bot ready');
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    await interaction.reply({
      content: 'Unknown command.',
      flags: [MessageFlags.Ephemeral]
    });
    return;
  }

  try {
    await command.execute(interaction, guildSyncSocket);
  } catch (error) {
    Log(`Error running /${interaction.commandName}: ${error.message}`);

    const message = {
      content: 'There was an error running that command.',
      flags: [MessageFlags.Ephemeral]
    };

    if (interaction.replied || interaction.deferred) {
      await interaction.followUp(message);
    } else {
      await interaction.reply(message);
    }
  }
});

async function runStartupSyncIfReady(reason) {
  if (startupSyncDone) {
    return;
  }

  if (startupSyncRunning) {
    return;
  }

  if (!client.isReady()) {
    Log(`Startup sync waiting: Discord client is not ready yet. Trigger: ${reason}`);
    return;
  }

  if (!guildSyncSocket.connected) {
    Log(`Startup sync waiting: GuildSync websocket is not connected yet. Trigger: ${reason}`);
    return;
  }

  startupSyncRunning = true;

  try {
    Log(`Starting automatic Discord role/member sync. Trigger: ${reason}`);

    const guild = await getStartupGuild(client);

    const result = await syncDiscordRolesAndMembers(guild, guildSyncSocket);

    startupSyncDone = true;

    Log(
      `Automatic startup sync completed. Roles: ${result.roles_processed}, Members: ${result.members_processed}, Removed: ${result.members_removed}`
    );
  } catch (error) {
    Log(`Automatic startup sync failed: ${error.message}`);
  } finally {
    startupSyncRunning = false;
  }
}

async function getStartupGuild(discordClient) {
  if (DISCORD_GUILD_ID) {
    Log(`Using DISCORD_GUILD_ID from .env: ${DISCORD_GUILD_ID}`);

    return await discordClient.guilds.fetch(DISCORD_GUILD_ID);
  }

  Log('DISCORD_GUILD_ID not set. Trying to auto-detect Discord server...');

  const guilds = await discordClient.guilds.fetch();

  if (guilds.size === 0) {
    throw new Error('Discord bot is not in any servers.');
  }

  if (guilds.size > 1) {
    const guildList = [...guilds.values()]
      .map((guild) => `${guild.name} (${guild.id})`)
      .join(', ');

    throw new Error(
      `Discord bot is in ${guilds.size} servers. Set DISCORD_GUILD_ID in .env so I know which one to sync. Servers found: ${guildList}`
    );
  }

  const guildSummary = guilds.first();

  Log(`Auto-detected Discord server: ${guildSummary.name} (${guildSummary.id})`);

  return await discordClient.guilds.fetch(guildSummary.id);
}

try {
  Log('Starting Discord bot. GuildSync websocket will keep retrying if unavailable.');

  await client.login(DISCORD_TOKEN);
} catch (error) {
  Log(`Discord bot failed to start: ${error.message}`);
  process.exit(1);
}

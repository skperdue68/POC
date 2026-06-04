import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { io } from 'socket.io-client';
import { Log } from './helper.js';
import {
  sendDiscordMemberDelete,
  sendDiscordMemberUpsert,
  sendDiscordRoleDelete,
  sendDiscordRoleUpsert,
  syncDiscordRolesAndMembers
} from './discord-sync.js';

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
  Log('Missing DISCORD_TOKEN in .env');
  process.exit(1);
}

if (!GUILDSYNC_SOCKET_URL) {
  Log('Missing GUILDSYNC_SOCKET_URL in .env');
  process.exit(1);
}

if (!GUILDSYNC_BOT_KEY) {
  Log('Missing GUILDSYNC_BOT_KEY in .env');
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
let requestedSyncRunning = false;

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

guildSyncSocket.on('guildsync:request-discord-sync', async (payload = {}, callback) => {
  const respond = typeof callback === 'function'
    ? callback
    : () => { };

  if (requestedSyncRunning || startupSyncRunning) {
    respond({
      ok: false,
      message: 'A Discord role/member sync is already running.'
    });
    return;
  }

  if (!client.isReady()) {
    respond({
      ok: false,
      message: 'Discord client is not ready yet.'
    });
    return;
  }

  if (!guildSyncSocket.connected) {
    respond({
      ok: false,
      message: 'GuildSync websocket is not connected.'
    });
    return;
  }

  requestedSyncRunning = true;

  try {
    Log(
      `Manual Discord sync requested by GuildSync backend. Requested by: ${payload.requested_by_name || payload.requested_by || 'unknown'}`
    );

    const guild = await getStartupGuild(client);
    const result = await syncDiscordRolesAndMembers(guild, guildSyncSocket);

    respond({
      ok: true,
      message: 'Discord role/member sync completed.',
      roles_processed: result.roles_processed,
      members_processed: result.members_processed,
      members_removed: result.members_removed
    });
  } catch (error) {
    Log(`Manual Discord sync failed: ${error.message}`);

    respond({
      ok: false,
      message: error.message || 'Discord role/member sync failed.'
    });
  } finally {
    requestedSyncRunning = false;
  }
});

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


client.on(Events.GuildMemberAdd, async member => {
  await handleDiscordLiveUpdate(
    `Discord member joined: ${member.user.tag} (${member.user.id})`,
    async () => await sendDiscordMemberUpsert(member, guildSyncSocket)
  );
});

client.on(Events.GuildMemberUpdate, async (oldMember, newMember) => {
  await handleDiscordLiveUpdate(
    `Discord member updated: ${newMember.user.tag} (${newMember.user.id})`,
    async () => await sendDiscordMemberUpsert(newMember, guildSyncSocket)
  );
});

client.on(Events.GuildMemberRemove, async member => {
  await handleDiscordLiveUpdate(
    `Discord member left: ${member.user.tag} (${member.user.id})`,
    async () => await sendDiscordMemberDelete(member, guildSyncSocket)
  );
});


client.on(Events.UserUpdate, async (oldUser, newUser) => {
  await handleDiscordLiveUpdate(
    `Discord user updated: ${newUser.tag} (${newUser.id})`,
    async () => {
      const guild = await getStartupGuild(client);
      const member = await guild.members.fetch(newUser.id).catch(() => null);

      if (!member) {
        Log(`Discord user updated but is not in sync guild: ${newUser.tag} (${newUser.id})`);
        return null;
      }

      return await sendDiscordMemberUpsert(member, guildSyncSocket);
    }
  );
});

client.on(Events.GuildRoleCreate, async role => {
  await handleDiscordLiveUpdate(
    `Discord role created: ${role.name} (${role.id})`,
    async () => await sendDiscordRoleUpsert(role, guildSyncSocket)
  );
});

client.on(Events.GuildRoleUpdate, async (oldRole, newRole) => {
  await handleDiscordLiveUpdate(
    `Discord role updated: ${newRole.name} (${newRole.id})`,
    async () => await sendDiscordRoleUpsert(newRole, guildSyncSocket)
  );
});

client.on(Events.GuildRoleDelete, async role => {
  await handleDiscordLiveUpdate(
    `Discord role deleted: ${role.name} (${role.id})`,
    async () => await sendDiscordRoleDelete(role, guildSyncSocket)
  );
});


async function handleDiscordLiveUpdate(description, action) {
  if (!client.isReady()) {
    Log(`${description} skipped: Discord client is not ready yet.`);
    return;
  }

  if (!guildSyncSocket.connected) {
    Log(`${description} skipped: GuildSync websocket is not connected.`);
    return;
  }

  try {
    Log(description);

    const result = await action();

    if (result?.ok === false) {
      throw new Error(result.message || 'GuildSync rejected Discord live update.');
    }

    Log(`${description} sent to GuildSync.`);
  } catch (error) {
    Log(`${description} failed: ${error.message}`);
  }
}


async function runStartupSyncIfReady(reason) {
  if (startupSyncDone) {
    return;
  }

  if (startupSyncRunning || requestedSyncRunning) {
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

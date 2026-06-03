import 'dotenv/config';
import { REST, Routes } from 'discord.js';

import * as ping from './commands/ping.js';
import * as status from './commands/status.js';
import * as members from './commands/members.js';
import * as roles from './commands/roles.js';
import * as addRole from './commands/add-role.js';
import * as removeRole from './commands/remove-role.js';
import * as dmUser from './commands/dm-user.js';

const commands = [
  ping.data.toJSON(),
  status.data.toJSON(),
  members.data.toJSON(),
  roles.data.toJSON(),
  addRole.data.toJSON(),
  removeRole.data.toJSON(),
  dmUser.data.toJSON()
];

const {
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID,
  DISCORD_GUILD_ID
} = process.env;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID || !DISCORD_GUILD_ID) {
  console.error('Missing DISCORD_TOKEN, DISCORD_CLIENT_ID, or DISCORD_GUILD_ID in .env');
  process.exit(1);
}

const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);

try {
  console.log('Registering GuildSync slash commands...');

  await rest.put(
    Routes.applicationGuildCommands(DISCORD_CLIENT_ID, DISCORD_GUILD_ID),
    { body: commands }
  );

  console.log('Slash commands registered successfully.');
} catch (error) {
  console.error('Failed to register slash commands:');
  console.error(error);
  process.exit(1);
}

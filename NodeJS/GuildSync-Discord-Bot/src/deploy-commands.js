import 'dotenv/config';
import { REST, Routes } from 'discord.js';

import * as roles from './commands/roles.js';

const commands = [
  roles.data.toJSON(),
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

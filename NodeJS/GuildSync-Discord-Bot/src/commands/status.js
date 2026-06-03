import {
  SlashCommandBuilder,
  MessageFlags
} from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('status')
  .setDescription('Shows GuildSync bot status.');

export async function execute(interaction) {
  await interaction.reply({
    content: 'GuildSync bot is online.',
    flags: [MessageFlags.Ephemeral]
  });
}

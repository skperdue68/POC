import { SlashCommandBuilder, MessageFlags } from 'discord.js';
import { requestActiveRaffles, formatRaffles } from '../raffle.js';

export const data = new SlashCommandBuilder()
  .setName('raffle')
  .setDescription('Show the active bi-weekly and 50/50 raffle prizes and draw times.')
  .setDMPermission(false);

export async function execute(interaction, guildSyncSocket) {
  if (!interaction.guildId || (process.env.DISCORD_GUILD_ID && interaction.guildId !== process.env.DISCORD_GUILD_ID)) {
    await interaction.reply({ content: 'Use this command in the configured GuildSync server.', flags: [MessageFlags.Ephemeral] });
    return;
  }
  await interaction.deferReply();
  try {
    const snapshot = await requestActiveRaffles(guildSyncSocket);
    await interaction.editReply({ content: formatRaffles(snapshot), allowedMentions: { parse: [] } });
  } catch (error) {
    await interaction.editReply({ content: error.message, allowedMentions: { parse: [] } });
  }
}

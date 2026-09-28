import { SlashCommandBuilder, MessageFlags } from 'discord.js';
import { requestActiveRaffles, formatRaffles } from '../raffle.js';

export const data = new SlashCommandBuilder()
  .setName('raffle')
  .setDescription('Show the active bi-weekly and 50/50 raffle prizes and draw times.')
  .addBooleanOption(option => option.setName('public').setDescription('Show the response publicly instead of privately.'))
  .addBooleanOption(option => option.setName('tickets').setDescription('Show your current raffle purchases and ticket counts.'))
  .setDMPermission(false);

export async function execute(interaction, guildSyncSocket) {
  const isPublic = interaction.options?.getBoolean?.('public') === true;
  const showTickets = interaction.options?.getBoolean?.('tickets') === true;
  const flags = isPublic ? undefined : MessageFlags.Ephemeral;
  if (!interaction.guildId || (process.env.DISCORD_GUILD_ID && interaction.guildId !== process.env.DISCORD_GUILD_ID)) {
    await interaction.reply({ content: 'Use this command in the configured GuildSync server.', ...(flags ? { flags } : {}) });
    return;
  }
  await interaction.deferReply(flags ? { flags } : {});
  try {
    const snapshot = await requestActiveRaffles(guildSyncSocket, { discordUserId: interaction.user?.id, includeTickets: showTickets });
    await interaction.editReply({ content: formatRaffles(snapshot, { includeTickets: showTickets }), allowedMentions: { parse: [] } });
  } catch (error) {
    await interaction.editReply({ content: error.message, allowedMentions: { parse: [] } });
  }
}

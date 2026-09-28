import { SlashCommandBuilder, MessageFlags } from 'discord.js';
import { requestActiveRaffles, formatRaffles } from '../raffle.js';

export const data = new SlashCommandBuilder()
  .setName('raffle')
  .setDescription('Show the active bi-weekly and 50/50 raffle prizes and draw times.')
  .addBooleanOption(option => option.setName('public').setDescription('Show the response publicly instead of privately.'))
  .addBooleanOption(option => option.setName('tickets').setDescription('Show your current raffle purchases and ticket counts.'))
  .addStringOption(option => option.setName('verify').setDescription('Verify current tickets for an ESO account (officers only).'))
  .setDMPermission(false);

export async function execute(interaction, guildSyncSocket) {
  const isPublic = interaction.options?.getBoolean?.('public') === true;
  const showTickets = interaction.options?.getBoolean?.('tickets') === true;
  const verifyName = interaction.options?.getString?.('verify')?.trim() || '';
  const verify = Boolean(verifyName);
  const flags = (isPublic && !showTickets && !verify) ? undefined : MessageFlags.Ephemeral;
  if (!interaction.guildId || (process.env.DISCORD_GUILD_ID && interaction.guildId !== process.env.DISCORD_GUILD_ID)) {
    await interaction.reply({ content: 'Use this command in the configured GuildSync server.', ...(flags ? { flags } : {}) });
    return;
  }
  if (verify) {
    if (/[\s]*@|https?:\/\/|www\.|<@|\]\(/i.test(verifyName)) {
      await interaction.reply({ content: 'Enter the ESO account name only, without @ signs, Discord mentions, or links.', flags: MessageFlags.Ephemeral });
      return;
    }
    const allowed = new Set(['consigliere', 'capo', 'caporegieme']);
    const hasRole = interaction.member?.roles?.cache?.some(role => allowed.has(String(role.name).toLowerCase()));
    if (!hasRole) {
      await interaction.reply({ content: 'Only users with the Consigliere, Capo, or Caporegieme role can verify another account.', flags: MessageFlags.Ephemeral });
      return;
    }
  }
  await interaction.deferReply(flags ? { flags } : {});
  try {
    const snapshot = await requestActiveRaffles(guildSyncSocket, { discordUserId: interaction.user?.id, includeTickets: showTickets || verify, esoAccountName: verifyName });
    await interaction.editReply({ content: formatRaffles(snapshot, { includeTickets: showTickets, verifyName }), allowedMentions: { parse: [] } });
  } catch (error) {
    await interaction.editReply({ content: error.message, allowedMentions: { parse: [] } });
  }
}

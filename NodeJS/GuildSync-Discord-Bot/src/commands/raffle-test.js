import { SlashCommandBuilder, MessageFlags } from 'discord.js';
import { requestActiveRaffles, formatRaffles } from '../raffle.js';

const choices = [{ name: 'Bi-Weekly', value: 'biweekly' }, { name: '50/50', value: 'monthly' }];
const raffleOption = (option, both = false) => option.setName('raffle').setDescription('Raffle to test').setRequired(true)
  .addChoices(...choices, ...(both ? [{ name: 'Both', value: 'both' }] : []));
export const data = new SlashCommandBuilder().setName('raffle-test')
  .setDescription('Temporary officer-only raffle testing commands.').setDMPermission(false)
  .addSubcommand(sub => sub.setName('export').setDescription('Export current raffle entries to the configured spreadsheet.')
    .addStringOption(option => raffleOption(option, true)))
  .addSubcommand(sub => sub.setName('preview').setDescription('Privately preview a raffle reminder without scheduling or posting it.')
    .addStringOption(option => option.setName('kind').setDescription('Reminder to preview').setRequired(true)
      .addChoices({ name: 'Bonus change or expiration', value: 'bonus' }, { name: 'Sales close', value: 'sales' }))
    .addStringOption(option => raffleOption(option)))
  .addSubcommand(sub => sub.setName('close').setDescription('Archive and clear a raffle worksheet now; requires explicit confirmation.')
    .addStringOption(option => raffleOption(option))
    .addBooleanOption(option => option.setName('confirm').setDescription('True archives and clears this raffle worksheet now.').setRequired(true)));

export function registrationData(env = process.env) {
  return /^true$/i.test(env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED || '') ? [data.toJSON()] : [];
}

function requestTest(socket, payload) {
  return new Promise((resolve, reject) => {
    if (!socket?.connected) return reject(new Error('GuildSync is temporarily unavailable.'));
    socket.timeout(120000).emit('guildsync:raffle-test', payload, (error, response) => {
      if (error) return reject(new Error('The raffle test timed out. Check the backend result before retrying; it may still finish.'));
      if (!response?.ok) return reject(new Error(response?.message || 'GuildSync could not complete the raffle test.'));
      resolve(response.message || 'Raffle test completed.');
    });
  });
}

export async function execute(interaction, socket) {
  const reply = content => interaction.reply({ content, flags: MessageFlags.Ephemeral, allowedMentions: { parse: [] } });
  if (!registrationData().length) return reply('Temporary raffle test commands are disabled.');
  if (!interaction.guildId || (process.env.DISCORD_GUILD_ID && interaction.guildId !== process.env.DISCORD_GUILD_ID)) {
    return reply('Use this command in the configured GuildSync server.');
  }
  const allowed = new Set(['consigliere', 'capo', 'caporegieme']);
  if (!interaction.member?.roles?.cache?.some(role => allowed.has(String(role.name).toLowerCase()))) {
    return reply('Only users with the Consigliere, Capo, or Caporegieme role can run raffle tests.');
  }
  const action = interaction.options.getSubcommand();
  const raffleType = interaction.options.getString('raffle');
  if (!['export', 'preview', 'close'].includes(action) ||
      !['biweekly', 'monthly', ...(action === 'export' ? ['both'] : [])].includes(raffleType)) {
    return reply('Choose a supported raffle test and raffle.');
  }
  if (action === 'close' && interaction.options.getBoolean('confirm') !== true) {
    return reply('Set confirm:true to archive and clear the selected raffle worksheet.');
  }
  await interaction.deferReply({ flags: MessageFlags.Ephemeral });
  try {
    let content;
    if (action === 'preview') {
      const kind = interaction.options.getString('kind');
      if (!['bonus', 'sales'].includes(kind)) throw new Error('Choose a bonus or sales reminder preview.');
      const snapshot = await requestActiveRaffles(socket);
      const raffle = snapshot.raffles.find(item => item.type === raffleType);
      if (!raffle) throw new Error('The selected raffle is unavailable.');
      if (kind === 'bonus' && (!raffle.bonusEnabled || !(raffle.bonusPercent > 0))) {
        content = '**TEST PREVIEW** — There is no active ticket bonus for this raffle.';
      } else {
        const at = kind === 'bonus' ? raffle.bonusExpiresAt : raffle.salesEnd;
        if (!Number.isFinite(at)) throw new Error('The selected reminder boundary is unavailable.');
        content = '**TEST PREVIEW — not scheduled or posted**\n\n' + formatRaffles({ ...snapshot, raffles: [raffle],
          reminders: [{ type: raffleType, kind, at, percent: raffle.bonusPercent, nextPercent: raffle.nextBonusPercent || 0 }] });
      }
    } else {
      content = await requestTest(socket, { action, raffleType, confirm: true,
        requestedBy: interaction.member?.displayName || interaction.user?.globalName || interaction.user?.username || interaction.user?.id || 'Discord officer' });
    }
    await interaction.editReply({ content, allowedMentions: { parse: [] } });
  } catch (error) {
    await interaction.editReply({ content: error.message, allowedMentions: { parse: [] } });
  }
}

import { SlashCommandBuilder, MessageFlags } from 'discord.js';
import { requestActiveRaffles, formatRaffles } from '../raffle.js';

const choices = [{ name: 'Bi-Weekly', value: 'biweekly' }, { name: '50/50', value: 'monthly' }];
const raffleOption = (option, both = false) => option.setName('raffle').setDescription('Raffle to test').setRequired(true)
  .addChoices(...choices, ...(both ? [{ name: 'Both', value: 'both' }] : []));
const testsEnabled = (env = process.env) => /^true$/i.test(env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED || '');

export function createGsaCommandData(env = process.env) {
  return new SlashCommandBuilder().setName('gsa').setDescription('GuildSync administration').setDMPermission(false)
    .addSubcommand(sub => sub.setName('post').setDescription('Post saved GuildSync application record(s) to Discord')
      .addStringOption(option => option.setName('name').setDescription('Full or partial ESO account name from GuildSyncApplications').setRequired(true)))
    .addSubcommand(sub => sub.setName('stop').setDescription('Stop automatic GuildSync application posts to Discord'))
    .addSubcommand(sub => sub.setName('start').setDescription('Resume automatic GuildSync application posts to Discord'));
}

export function createGsrCommandData(env = process.env) {
  return new SlashCommandBuilder().setName('gsr').setDescription('GuildSync raffle administration').setDMPermission(false)
    .addSubcommandGroup(group => {
      group.setName('raffle').setDescription('Consigliere raffle administration')
        .addSubcommand(sub => sub.setName('refresh').setDescription('Append selected-period data not already in the worksheets.')
          .addStringOption(option => option.setName('date').setDescription('MMDDYY; omitted uses current periods. Transition dates select the new raffle.')));
      if (testsEnabled(env)) group
        .addSubcommand(sub => sub.setName('test-preview').setDescription('Privately preview a raffle reminder without posting it.')
          .addStringOption(option => option.setName('kind').setDescription('Reminder to preview').setRequired(true)
            .addChoices({ name: 'Bonus change or expiration', value: 'bonus' }, { name: 'Sales close', value: 'sales' }))
          .addStringOption(option => raffleOption(option, true)))
        .addSubcommand(sub => sub.setName('test-close').setDescription('Archive and clear one raffle worksheet now; requires confirmation.')
          .addStringOption(option => raffleOption(option))
          .addBooleanOption(option => option.setName('confirm').setDescription('True archives and clears this raffle worksheet now.').setRequired(true)));
      return group;
    })
    .addSubcommandGroup(group => group.setName('test').setDescription('Consigliere-only test data tools')
      .addSubcommand(sub => sub.setName('add').setDescription('Append a synthetic raffle entry to the spreadsheet.')
        .addStringOption(option => option.setName('name').setDescription('ESO account name').setRequired(true))
        .addIntegerOption(option => option.setName('gold').setDescription('Gold paid').setMinValue(0).setRequired(true))
        .addStringOption(option => option.setName('raffle').setDescription('Raffle type').setRequired(true)
          .addChoices(...choices))
        .addBooleanOption(option => option.setName('donation').setDescription('Record as a donation with zero tickets.'))));
}

export function createGsrCommand(env = process.env) {
  return { data: createGsrCommandData(env), execute };
}

function requestRefresh(socket, payload) {
  return new Promise((resolve, reject) => {
    if (!socket?.connected) return reject(new Error('GuildSync is temporarily unavailable.'));
    socket.timeout(120000).emit('guildsync:raffle-refresh', payload, (error, response) => {
      if (error) return reject(new Error('The raffle refresh timed out. Check the backend log before retrying; it may still finish.'));
      if (!response?.ok) return reject(new Error(response?.message || 'GuildSync could not refresh the raffles.'));
      resolve(response);
    });
  });
}

function selectionMessage(selection) {
  const date = timestamp => new Intl.DateTimeFormat('en-US', { timeZone: selection.timeZone,
    month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(timestamp * 1000));
  return `Looking up raffle periods containing ${date(selection.lookupAt)}...\n\n` +
    selection.raffles.map(raffle => `**${raffle.label} raffle:**\n${date(raffle.start)} – ${date(raffle.end)}`).join('\n\n');
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

function requestSynthetic(socket, payload) {
  return new Promise((resolve, reject) => {
    if (!socket?.connected) return reject(new Error('GuildSync is temporarily unavailable.'));
    socket.timeout(120000).emit('guildsync:test-add', payload, (error, response) => {
      if (error) return reject(new Error('The test add timed out. Check the backend log before retrying.'));
      if (!response?.ok) return reject(new Error(response?.message || 'GuildSync could not add the test entry.'));
      resolve(response);
    });
  });
}

export async function execute(interaction, socket) {
  const reply = content => interaction.reply({ content, flags: MessageFlags.Ephemeral, allowedMentions: { parse: [] } });
  if (!interaction.guildId || (process.env.DISCORD_GUILD_ID && interaction.guildId !== process.env.DISCORD_GUILD_ID)) {
    return reply('Use this command in the configured GuildSync server.');
  }
  if (!interaction.member?.roles?.cache?.some(role => role.name === 'Consigliere')) {
    return reply('Only users with the exact Consigliere role can use these raffle commands.');
  }
  const subcommand = interaction.options.getSubcommand();
  if (interaction.options.getSubcommandGroup?.(false) === 'test' && subcommand === 'add') {
    await interaction.deferReply({ flags: MessageFlags.Ephemeral });
    try {
      const result = await requestSynthetic(socket, {
        name: interaction.options.getString('name', true),
        gold: interaction.options.getInteger('gold', true),
        raffleType: interaction.options.getString('raffle', true),
        donation: interaction.options.getBoolean('donation') === true,
        discordUserId: interaction.user.id,
        requestedBy: String(interaction.member.displayName || '').trim()
      });
      await interaction.editReply({ content: result.message, allowedMentions: { parse: [] } });
    } catch (error) { await interaction.editReply({ content: error.message, allowedMentions: { parse: [] } }); }
    return;
  }
  if (subcommand === 'refresh') {
    await interaction.deferReply({ flags: MessageFlags.Ephemeral });
    try {
      const requestedBy = String(interaction.member?.displayName || '').trim();
      if (!requestedBy) throw new Error('Discord display name is unavailable; refresh was not started.');
      const date = interaction.options.getString('date') ?? undefined;
      const payload = { date, discordUserId: interaction.user.id, requestedBy };
      const plan = await requestRefresh(socket, { ...payload, action: 'plan' });
      await interaction.editReply({ content: selectionMessage(plan.selection) + '\n\nExporting the selected raffle data to the spreadsheet...', allowedMentions: { parse: [] } });
      const result = await requestRefresh(socket, { ...payload, action: 'export' });
      await interaction.editReply({ content: selectionMessage(result.selection) + `\n\nRefresh complete: ${result.synced} entries written across both raffle worksheets.` +
        '\nExisting rows were preserved; only missing transaction IDs were appended. Live updates and scheduled rollover remain enabled as configured.', allowedMentions: { parse: [] } });
    } catch (error) {
      await interaction.editReply({ content: error.message, allowedMentions: { parse: [] } });
    }
    return;
  }
  if (!testsEnabled()) return reply('Temporary raffle test commands are disabled.');
  const action = { 'test-preview': 'preview', 'test-close': 'close' }[subcommand];
  const raffleType = interaction.options.getString('raffle');
  if (!['preview', 'close'].includes(action) ||
      !['biweekly', 'monthly', ...(action === 'preview' ? ['both'] : [])].includes(raffleType)) {
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
      const raffles = raffleType === 'both' ? snapshot.raffles : snapshot.raffles.filter(item => item.type === raffleType);
      if (!raffles.length) throw new Error('The selected raffle is unavailable.');
      if (kind === 'bonus' && raffles.every(raffle => !raffle.bonusEnabled || !(raffle.bonusPercent > 0))) {
        content = '**TEST PREVIEW** — There is no active ticket bonus for this raffle.';
      } else {
        const reminders = raffles.filter(raffle => kind !== 'bonus' || raffle.bonusEnabled).map(raffle => ({
          type: raffle.type, kind, at: kind === 'bonus' ? raffle.bonusExpiresAt : raffle.salesEnd,
          percent: raffle.bonusPercent, nextPercent: raffle.nextBonusPercent || 0
        }));
        if (reminders.some(item => !Number.isFinite(item.at))) throw new Error('The selected reminder boundary is unavailable.');
        content = '**TEST PREVIEW — not scheduled or posted**\n\n' + formatRaffles({ ...snapshot, raffles,
          reminders });
      }
    } else {
      const displayName = String(interaction.member?.displayName || '').trim();
      if (!displayName) throw new Error('Discord display name is unavailable; the test was not started.');
      content = await requestTest(socket, { action, raffleType, confirm: true, requestedBy: displayName, discordUserId: interaction.user.id });
    }
    await interaction.editReply({ content, allowedMentions: { parse: [] } });
  } catch (error) {
    await interaction.editReply({ content: error.message, allowedMentions: { parse: [] } });
  }
}

import { SlashCommandBuilder, MessageFlags, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } from 'discord.js';

export function createGsaCommandData(env = process.env) {
  return new SlashCommandBuilder().setName('gsa').setDescription('GuildSync administration').setDMPermission(false)
    .addSubcommand(sub => sub.setName('post').setDescription('Post saved GuildSync application record(s) to Discord')
      .addStringOption(option => option.setName('name').setDescription('Full or partial ESO account name from GuildSyncApplications').setRequired(true)))
    .addSubcommand(sub => sub.setName('stop').setDescription('Stop automatic GuildSync application posts to Discord'))
    .addSubcommand(sub => sub.setName('start').setDescription('Resume automatic GuildSync application posts to Discord'));
}

export function createGsrCommandData() {
  return new SlashCommandBuilder().setName('gsraffle').setDescription('GuildSync raffle administration').setDMPermission(false)
      .addSubcommand(sub => sub.setName('load').setDescription('Clear both raffle sheets and reload selected periods and draw dates.')
        .addStringOption(option => option.setName('date').setDescription('MMDDYY; omitted uses current periods. Boundary dates ask which raffle to load.')))
      .addSubcommand(sub => sub.setName('reset').setDescription('Clear both raffle sheets and draw dates; database records remain intact.'))
      .addSubcommand(sub => sub.setName('archive').setDescription('Archive now, reset both raffle sheets and reload current data.'));
}

export function createGsrAliasCommandData() { return createGsrCommandData().setName('gsr'); }
export function createGsrAliasCommand() { return { data: createGsrAliasCommandData(), execute }; }

export function createGsrCommand() { return { data: createGsrCommandData(), execute }; }

function request(socket, event, payload) {
  return new Promise((resolve, reject) => {
    if (!socket?.connected) return reject(new Error('GuildSync is temporarily unavailable.'));
    socket.timeout(180000).emit(event, payload, (error, response) => {
      if (error) return reject(new Error('The raffle operation timed out. Check the backend log before retrying; it may still finish.'));
      if (!response?.ok) return reject(new Error(response?.message || 'GuildSync could not complete the raffle operation.'));
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

export async function execute(interaction, socket) {
  const reply = content => interaction.reply({ content, flags: MessageFlags.Ephemeral, allowedMentions: { parse: [] } });
  if (!interaction.guildId || (process.env.DISCORD_GUILD_ID && interaction.guildId !== process.env.DISCORD_GUILD_ID)) return reply('Use this command in the configured GuildSync server.');
  if (!interaction.member?.roles?.cache?.some(role => role.name === 'Consigliere')) return reply('Only users with the exact Consigliere role can use these raffle commands.');
  const action = interaction.options.getSubcommand();
  if (!['load', 'reset', 'archive'].includes(action)) return reply('That command has been retired. Use /gsraffle load, reset, or archive.');
  await interaction.deferReply({ flags: MessageFlags.Ephemeral });
  try {
    const requestedBy = String(interaction.member?.displayName || '').trim();
    if (!requestedBy) throw new Error('Discord display name is unavailable; operation was not started.');
    const payload = { discordUserId: interaction.user.id, requestedBy };
    let content;
    if (action === 'load') {
      payload.date = interaction.options.getString('date') ?? undefined;
      let plan = await request(socket, 'guildsync:raffle-refresh', { ...payload, action: 'plan' });
      if (plan.selection.boundaryTypes?.length) {
        payload.boundaryChoices = {};
        for (const type of plan.selection.boundaryTypes.filter(type => type === 'biweekly')) {
          const label = type === 'biweekly' ? 'Bi-Weekly' : '50/50';
          const dateLabel = new Intl.DateTimeFormat('en-US', {timeZone:plan.selection.timeZone,month:'long',day:'numeric',year:'numeric'}).format(new Date(plan.selection.lookupAt*1000));
          const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId('starts').setLabel('Starts on this date').setStyle(ButtonStyle.Primary),
            new ButtonBuilder().setCustomId('ends').setLabel('Ends on this date').setStyle(ButtonStyle.Secondary));
          const message = await interaction.editReply({content:`For the ${label} raffle on ${dateLabel}, load the raffle that starts or ends on this date?`,components:[row],allowedMentions:{parse:[]}});
          let answer;
          try { answer = await message.awaitMessageComponent({componentType:ComponentType.Button,time:60000,filter:choice=>choice.user.id===interaction.user.id}); }
          catch { await interaction.editReply({content:'Load cancelled: no boundary selection was received. No raffle data was changed.',components:[],allowedMentions:{parse:[]}}); return; }
          payload.boundaryChoices[type] = answer.customId;
          await answer.deferUpdate();
        }
        plan = await request(socket,'guildsync:raffle-refresh',{...payload,action:'plan'});
      }
      await interaction.editReply({ components: [], content: selectionMessage(plan.selection) + '\n\nExporting the selected raffle data: clearing and reloading both worksheets...', allowedMentions: { parse: [] } });
      const result = await request(socket, 'guildsync:raffle-refresh', { ...payload, action: 'export' });
      content = selectionMessage(result.selection) + '\n\nLoad complete: ' + result.synced + ' entries written. Both worksheets were cleared and reloaded.';
      if (result.workingSheetUrl) content += '\n\nRaffle data has been loaded to the working sheet [HERE](' + result.workingSheetUrl + ').';
    } else {
      await interaction.editReply({ content: action === 'archive' ? 'Archiving Current Public Raffle Sheet' : 'Clearing both raffle sheets and draw dates...', allowedMentions: { parse: [] } });
      const result = await request(socket, 'guildsync:raffle-manage', { ...payload, action: action === 'reset' ? 'clear' : action });
      content = result.message;
    }
    await interaction.editReply({ content, allowedMentions: { parse: [] } });
  } catch (error) { await interaction.editReply({ content: error.message, components: [], allowedMentions: { parse: [] } }); }
}

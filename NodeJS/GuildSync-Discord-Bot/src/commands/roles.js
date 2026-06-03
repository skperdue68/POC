import {
  SlashCommandBuilder,
  PermissionFlagsBits,
  MessageFlags
} from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('roles')
  .setDescription('Get Discord server roles and send them to GuildSync over websocket.')
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles);

export async function execute(interaction, guildSyncSocket) {
  await interaction.deferReply({ flags: [MessageFlags.Ephemeral] });

  const guild = interaction.guild;

  if (!guild) {
    await interaction.editReply('This command can only be used inside a server.');
    return;
  }

  let roles;

  try {
    const fetchedRoles = await guild.roles.fetch();

    roles = [...fetchedRoles.values()]
      .filter(role => role.id !== guild.id) // removes @everyone
      .sort((a, b) => b.position - a.position)
      .map(role => ({
        role_id: role.id,
        role_name: role.name
      }));
  } catch (error) {
    console.error('Failed to fetch Discord roles:', error);

    await interaction.editReply('I could not fetch the Discord role list.');
    return;
  }

  const payload = {
    role_count: roles.length,
    roles
  };

  if (!guildSyncSocket || !guildSyncSocket.connected) {
    await interaction.editReply(`Fetched ${payload.length} roles. Waiting for GuildSync server to connect...`);
    try {
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          guildSyncSocket.off('connect', onConnect);
          reject(new Error('Connection timed out'));
        }, 30000); // 30 seconds max wait time

        function onConnect() {
          clearTimeout(timeout);
          resolve();
        }
        guildSyncSocket.once('connect', onConnect);
      });
      await interaction.editReply(`Connected to GuildSync! Syncing data now...`);
    } catch (error) {
      await interaction.editReply(`Failed to sync: GuildSync server did not respond or connect in time.`);
      return;
    }
  }
  guildSyncSocket.emit('guildsync:discord-roles', payload);
  guildSyncSocket.on('guildsync:getDiscordMembers', async (data) => {
    console.log(`Received request to fetch members for guild: ${data.guild_id}`);
  });

  await interaction.editReply("Done!");
}

import {
  SlashCommandBuilder,
  PermissionFlagsBits,
  MessageFlags
} from 'discord.js';

import { syncDiscordRolesAndMembers } from '../discord-sync.js';

export const data = new SlashCommandBuilder()
  .setName('roles')
  .setDescription('Get Discord server roles and members and send them to GuildSync over websocket.')
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles);

export async function execute(interaction, guildSyncSocket) {
  await interaction.deferReply({ flags: [MessageFlags.Ephemeral] });

  const guild = interaction.guild;

  if (!guild) {
    await interaction.editReply('This command can only be used inside a server.');
    return;
  }

  try {
    await interaction.editReply('Starting Discord role/member sync...');

    const result = await syncDiscordRolesAndMembers(guild, guildSyncSocket);

    await interaction.editReply(
      `Done! GuildSync processed ${result.roles_processed} role(s), ${result.members_processed} member record(s). Removed ${result.members_removed} member record(s).`
    );
  } catch (error) {
    await interaction.editReply(`GuildSync sync failed: ${error.message}`);
  }
}

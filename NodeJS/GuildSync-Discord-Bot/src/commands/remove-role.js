import {
  SlashCommandBuilder,
  PermissionFlagsBits,
  MessageFlags
} from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('remove-role')
  .setDescription('Remove a role from a Discord member.')
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
  .addUserOption(option =>
    option
      .setName('user')
      .setDescription('The member who should lose the role.')
      .setRequired(true)
  )
  .addRoleOption(option =>
    option
      .setName('role')
      .setDescription('The role to remove.')
      .setRequired(true)
  );

export async function execute(interaction) {
  await interaction.deferReply({
    flags: [MessageFlags.ephemeral]
  });

  const targetUser = interaction.options.getUser('user', true);
  const role = interaction.options.getRole('role', true);

  const guild = interaction.guild;

  if (!guild) {
    await interaction.editReply('This command can only be used inside a server.');
    return;
  }

  const botMember = await guild.members.fetchMe();
  const targetMember = await guild.members.fetch(targetUser.id);

  if (!botMember.permissions.has(PermissionFlagsBits.ManageRoles)) {
    await interaction.editReply('I do not have the Manage Roles permission.');
    return;
  }

  if (role.managed) {
    await interaction.editReply('I cannot remove that role because it is managed by an integration.');
    return;
  }

  if (role.position >= botMember.roles.highest.position) {
    await interaction.editReply(
      `I cannot remove ${role.name} because it is equal to or above my highest role.`
    );
    return;
  }

  if (!targetMember.roles.cache.has(role.id)) {
    await interaction.editReply(`${targetMember.displayName} does not have the ${role.name} role.`);
    return;
  }

  await targetMember.roles.remove(role);

  await interaction.editReply(
    `Removed ${role.name} from ${targetMember.displayName}.`
  );
}

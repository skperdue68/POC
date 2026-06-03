import {
  SlashCommandBuilder,
  PermissionFlagsBits,
  MessageFlags
} from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('add-role')
  .setDescription('Add a role to a Discord member.')
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
  .addUserOption(option =>
    option
      .setName('user')
      .setDescription('The member who should receive the role.')
      .setRequired(true)
  )
  .addRoleOption(option =>
    option
      .setName('role')
      .setDescription('The role to add.')
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
    await interaction.editReply('I cannot assign that role because it is managed by an integration.');
    return;
  }

  if (role.position >= botMember.roles.highest.position) {
    await interaction.editReply(
      `I cannot assign ${role.name} because it is equal to or above my highest role.`
    );
    return;
  }

  if (targetMember.roles.cache.has(role.id)) {
    await interaction.editReply(`${targetMember.displayName} already has the ${role.name} role.`);
    return;
  }

  await targetMember.roles.add(role);

  await interaction.editReply(
    `Added ${role.name} to ${targetMember.displayName}.`
  );
}

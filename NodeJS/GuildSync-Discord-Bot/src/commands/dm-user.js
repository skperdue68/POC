import {
  SlashCommandBuilder,
  PermissionFlagsBits,
  MessageFlags
} from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('dm-user')
  .setDescription('Send a private message to a Discord user.')
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
  .addUserOption(option =>
    option
      .setName('user')
      .setDescription('The user to message.')
      .setRequired(true)
  )
  .addStringOption(option =>
    option
      .setName('message')
      .setDescription('The private message to send.')
      .setRequired(true)
      .setMaxLength(1800)
  );

export async function execute(interaction) {
  await interaction.deferReply({
    flags: [MessageFlags.ephemeral]
  });

  const targetUser = interaction.options.getUser('user', true);
  const message = interaction.options.getString('message', true);

  try {
    await targetUser.send(message);

    await interaction.editReply(`Private message sent to ${targetUser.username}.`);
  } catch (error) {
    console.error('Failed to send DM:', error);

    await interaction.editReply(
      `I could not send a private message to ${targetUser.username}. ` +
      `They may have DMs disabled or may not accept messages from this server.`
    );
  }
}

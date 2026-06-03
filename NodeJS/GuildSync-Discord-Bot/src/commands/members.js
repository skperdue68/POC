import {
  SlashCommandBuilder,
  PermissionFlagsBits,
  MessageFlags
} from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('members')
  .setDescription('List Discord server members with IDs, names, nicknames, and roles.')
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles);

export async function execute(interaction) {
  await interaction.deferReply({
    flags: [MessageFlags.ephemeral]
  });

  const guild = interaction.guild;

  if (!guild) {
    await interaction.editReply('This command can only be used inside a server.');
    return;
  }

  let members;

  try {
    members = await guild.members.fetch();
  } catch (error) {
    console.error('Failed to fetch members:', error);

    await interaction.editReply(
      'I could not fetch the member list. Make sure the bot has the Server Members Intent enabled in the Discord Developer Portal and GatewayIntentBits.GuildMembers enabled in code.'
    );
    return;
  }

  const sortedMembers = [...members.values()].sort((a, b) => {
    const nameA = a.displayName?.toLowerCase() ?? '';
    const nameB = b.displayName?.toLowerCase() ?? '';
    return nameA.localeCompare(nameB);
  });

  const lines = sortedMembers.map(member => {
    const discordId = member.user.id;
    const username = member.user.username;
    const globalDisplayName = member.user.globalName ?? 'None';
    const serverDisplayName = member.displayName ?? 'None';
    const serverNickname = member.nickname ?? 'None';

    const roles = member.roles.cache
      .filter(role => role.id !== guild.id) // removes @everyone
      .sort((a, b) => b.position - a.position)
      .map(role => role.name);

    const roleText = roles.length > 0 ? roles.join(', ') : 'No roles';

    return [
      `DiscordID: ${discordId}`,
      `Username: ${username}`,
      `Display Name: ${globalDisplayName}`,
      `Server Display Name: ${serverDisplayName}`,
      `Server Nickname: ${serverNickname}`,
      `Roles: ${roleText}`
    ].join('\n');
  });

  const header = `Found ${members.size} members.\n\n`;

  const output = header + lines.join('\n\n--------------------\n\n');

  const chunks = splitMessage(output, 1900);

  await interaction.editReply(chunks[0]);

  for (const chunk of chunks.slice(1)) {
    await interaction.followUp({
      content: chunk,
      flags: [MessageFlags.ephemeral]
    });
  }
}

function splitMessage(text, maxLength) {
  const chunks = [];
  let current = '';

  const sections = text.split('\n\n--------------------\n\n');

  for (const section of sections) {
    const nextSection = current
      ? `${current}\n\n--------------------\n\n${section}`
      : section;

    if (nextSection.length <= maxLength) {
      current = nextSection;
    } else {
      if (current) {
        chunks.push(current);
      }

      if (section.length > maxLength) {
        chunks.push(section.slice(0, maxLength));
      } else {
        current = section;
      }
    }
  }

  if (current) {
    chunks.push(current);
  }

  return chunks;
}

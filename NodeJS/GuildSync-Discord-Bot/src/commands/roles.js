import {
  SlashCommandBuilder,
  PermissionFlagsBits,
  MessageFlags
} from 'discord.js';

import { Log } from '../helper.js';

export const data = new SlashCommandBuilder()
  .setName('roles')
  .setDescription('Get Discord server roles and send them to GuildSync over websocket.')
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles);

async function fetchAllMembersInBatches(guild, batchSize = 300) {
  const allMembers = [];
  let after = '0';

  while (true) {
    const batch = await guild.members.list({
      limit: batchSize,
      after
    });

    const members = [...batch.values()];

    if (members.length === 0) {
      break;
    }

    const nonBotMembers = members.filter((member) => !member.user.bot);

    allMembers.push(...nonBotMembers);

    after = members[members.length - 1].id;

    Log(
      `Fetched ${members.length} member(s), kept ${nonBotMembers.length} non-bot member(s). Total so far: ${allMembers.length}`
    );

    if (members.length < batchSize) {
      break;
    }
  }

  return allMembers;
}

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
      .filter((role) => role.id !== guild.id) // removes @everyone
      .sort((a, b) => b.position - a.position)
      .map((role) => ({
        role_id: role.id,
        role_name: role.name
      }));
  } catch (error) {
    console.error('Failed to fetch Discord roles:', error);

    await interaction.editReply('I could not fetch the Discord role list.');
    return;
  }

  const rolesPayload = {
    role_count: roles.length,
    roles
  };

  if (!guildSyncSocket || !guildSyncSocket.connected) {
    await interaction.editReply(
      `Fetched ${rolesPayload.role_count} roles. Waiting for GuildSync server to connect...`
    );

    try {
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          guildSyncSocket.off('connect', onConnect);
          reject(new Error('Connection timed out'));
        }, 30000);

        function onConnect() {
          clearTimeout(timeout);
          resolve();
        }

        guildSyncSocket.once('connect', onConnect);
      });

      await interaction.editReply('Connected to GuildSync! Syncing role data now...');
    } catch (error) {
      await interaction.editReply(
        'Failed to sync: GuildSync server did not respond or connect in time.'
      );
      return;
    }
  }

  await interaction.editReply(
    `Fetched ${rolesPayload.role_count} role(s). Sending roles to GuildSync...`
  );

  guildSyncSocket.emit('guildsync:sending-discord-roles', rolesPayload);

  guildSyncSocket.once('guildsync:discord-roles-result', async (rolesResults) => {
    console.log(rolesResults);
    Log('Discord roles result:', rolesResults.roles_processed);

    if (!rolesResults?.ok) {
      await interaction.editReply(
        `GuildSync failed to process roles: ${rolesResults?.message}`
      );
      return;
    }

    await interaction.editReply(
      `GuildSync processed ${rolesResults.roles_processed} role(s). Fetching members now...`
    );

    let members;

    try {
      members = await fetchAllMembersInBatches(guild, 300);
    } catch (error) {
      Log('Failed to fetch members:', error);

      await interaction.editReply(
        'Roles were processed, but I could not fetch the member list. Make sure the bot has the Server Members Intent enabled in the Discord Developer Portal and GatewayIntentBits.GuildMembers enabled in code.'
      );
      return;
    }

    const memberRows = members
      .sort((a, b) => {
        const nameA = a.displayName?.toLowerCase() ?? '';
        const nameB = b.displayName?.toLowerCase() ?? '';
        return nameA.localeCompare(nameB);
      })
      .map((member) => {
        const roleColumns = {};

        for (const role of member.roles.cache.values()) {
          if (role.id === guild.id) {
            continue; // removes @everyone
          }

          roleColumns[`r_${role.id}`] = 1;
        }

        return {
          discord_id: member.user.id,
          username: member.user.username,
          global_name: member.user.globalName ?? '',
          server_nickname: member.nickname ?? '',
          ...roleColumns
        };
      });

    const membersPayload = {
      guild_id: guild.id,
      guild_name: guild.name,
      member_count: memberRows.length,
      members: memberRows
    };

    guildSyncSocket.emit('guildsync:sending-discord-members', membersPayload.members);

    guildSyncSocket.once('guildsync:discord-members-result', async (memberResults) => {
      console.log(memberResults)
      await interaction.editReply(
        `Done! GuildSync processed ${rolesResults.roles_processed} role(s), ${memberResults.members_processed} member record(s). Removed ${memberResults.members_removed} member record(s).`
      );
    });
  });
}

import {canEditGuildSyncRole, isReadOnlyGuildSyncEvent} from './role-permissions.js';

export function registerRolePermissions(socket, loginDB) {
  socket.use(async (packet, next) => {
    const event = String(packet[0] || '');
    if (!event.startsWith('guildsync:') || socket.guildSyncAuthType === 'discord-bot' || isReadOnlyGuildSyncEvent(event)) return next();
    try {
      if (socket.guildSyncAuthenticated && socket.guildSyncUser?.discord_user_id) {
        const [rows] = await loginDB.execute(
          'SELECT role, allowed FROM guildsync_users WHERE discord_user_id = ? LIMIT 1',
          [socket.guildSyncUser.discord_user_id]
        );
        if (Number(rows[0]?.allowed) === 1 && canEditGuildSyncRole(rows[0].role)) return next();
      }
    } catch {
      // Fail closed if current permissions cannot be verified.
    }
    const response = {ok:false, message:'This account has read-only access. A User or Admin role is required to change data.'};
    const callback = packet.at(-1);
    if (typeof callback === 'function') callback(response);
    else socket.emit('guildsync:permission-denied', response);
  });
}

export function registerRaffleSocket(socket, applicationDB, getActiveRaffleSummary) {
  socket.on('guildsync:request-active-raffles', async (_payload, callback) => {
    if (typeof callback !== 'function') return;
    if (!socket.guildSyncAuthenticated || socket.guildSyncAuthType !== 'discord-bot') {
      callback({ ok: false, message: 'Discord bot authentication is required.' });
      return;
    }
    try {
      callback({ ok: true, ...await getActiveRaffleSummary(applicationDB) });
    } catch {
      callback({ ok: false, message: 'Raffle information is temporarily unavailable. Please try again.' });
    }
  });
}

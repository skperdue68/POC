export function registerRaffleSocket(socket, applicationDB, getActiveRaffleSummary, getRaffleUserTickets) {
  socket.on('guildsync:request-active-raffles', async (payload = {}, callback) => {
    if (typeof callback !== 'function') return;
    if (!socket.guildSyncAuthenticated || socket.guildSyncAuthType !== 'discord-bot') {
      callback({ ok: false, message: 'Discord bot authentication is required.' });
      return;
    }
    try {
      const result = await getActiveRaffleSummary(applicationDB);
      if (payload.includeTickets === true) {
        result.tickets = await getRaffleUserTickets(applicationDB, payload.discordUserId, undefined, payload.esoAccountName);
      }
      callback({ ok: true, ...result });
    } catch {
      callback({ ok: false, message: 'Raffle information is temporarily unavailable. Please try again.' });
    }
  });
}

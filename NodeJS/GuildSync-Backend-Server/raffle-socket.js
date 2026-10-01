import { createHash } from 'node:crypto';
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

export function registerArchiveSocket(socket, applicationDB) {
  socket.on('guildsync:request-raffle-archives', async (_, callback) => {
    if (typeof callback !== 'function') return;
    if (!socket.guildSyncAuthenticated || socket.guildSyncAuthType !== 'discord-bot') {
      callback({ ok: false, message: 'Discord bot authentication is required.' }); return;
    }
    try {
      const id = String(process.env.GUILDSYNC_GOOGLE_SHEETS_SPREADSHEET_ID || '').trim();
      const key = 'sheets_rollover_' + createHash('sha256').update(id).digest('hex').slice(0, 32);
      const [rows] = await applicationDB.execute('SELECT value FROM guildsync_settings WHERE setting_key = ?', [key]);
      callback({ ok: true, archives: rows.length ? (JSON.parse(rows[0].value).completedArchives || []) : [] });
    } catch {
      callback({ ok: false, message: 'Archive announcements are temporarily unavailable.' });
    }
  });
}

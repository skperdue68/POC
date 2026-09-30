import { syncBankingEntriesToGoogleSheets, googleSheetsBankingConfig, exportLog } from './google-sheets-banking-sync.js';

export function currentRaffleEntries(entries, snapshot, type) {
  const windows = snapshot.raffles.filter(raffle => type === 'both' || raffle.type === type);
  return entries.filter(entry => windows.some(raffle => entry.type === raffle.type &&
    Number(entry.time) >= raffle.salesStart && Number(entry.time) <= raffle.salesEnd && Number(entry.time) <= snapshot.asOf))
    .sort((a, b) => Number(a.time) - Number(b.time) || String(a.eventId).localeCompare(String(b.eventId)));
}

export function registerRaffleTestSocket(socket, db, { getActiveRaffleSummary, getBankingDataJSON, sheets,
  exportEntries = syncBankingEntriesToGoogleSheets, log = exportLog }) {
  let running = false;
  socket.on('guildsync:raffle-test', async (payload = {}, callback) => {
    if (typeof callback !== 'function') return;
    if (!socket.guildSyncAuthenticated || socket.guildSyncAuthType !== 'discord-bot') {
      callback({ ok: false, message: 'Discord bot authentication is required.' }); return;
    }
    if (!/^true$/i.test(process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED || '')) {
      callback({ ok: false, message: 'Raffle test commands are disabled on the backend.' }); return;
    }
    if (running) { callback({ ok: false, message: 'A raffle test is already running. Check the backend log before retrying.' }); return; }
    running = true;
    try {
      if (!googleSheetsBankingConfig().enabled || !sheets) throw new Error('Enable Google Sheets on the backend first.');
      const type = payload.raffleType;
      if (!['biweekly', 'monthly', 'both'].includes(type)) throw new Error('Choose a valid raffle.');
      if (!['export', 'close'].includes(payload.action)) throw new Error('Unknown raffle test action.');
      if (payload.action === 'close' && (type === 'both' || payload.confirm !== true)) throw new Error('Select one raffle and confirm the archive/reset test.');
      const requestedBy = String(payload.requestedBy || '').trim().slice(0, 100);
      if (!requestedBy) throw new Error('The initiating Discord display name is required.');
      await log('TEST ' + payload.action + ' requested by ' + JSON.stringify(requestedBy) + ' for ' + type);
      if (payload.action === 'export') {
        const snapshot = await getActiveRaffleSummary(db);
        const entries = currentRaffleEntries(await getBankingDataJSON(db), snapshot, type);
        const result = await exportEntries(entries, { uploadedBy: requestedBy });
        callback({ ok: true, message: `Export complete: ${result.synced} of ${entries.length} current-period entries added. Existing IDs and closed periods are skipped; see the Sheets log for details.` });
      } else {
        const result = await sheets.testClose(type);
        callback({ ok: true, message: `Archive/reset test complete: copied the spreadsheet as "${result.name}" (file ID ${result.archiveId}) and reset only ${type === 'biweekly' ? 'bi-weekly' : '50/50'} in the original. Raffle dates and database entries are unchanged.` });
      }
    } catch (error) {
      await log('TEST failed: ' + error.message).catch(console.error);
      callback({ ok: false, message: 'Raffle test failed: ' + error.message + ' Check the backend Sheets log before retrying.' });
    } finally { running = false; }
  });
}

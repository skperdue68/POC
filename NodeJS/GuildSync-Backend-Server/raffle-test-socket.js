import { syncBankingEntriesToGoogleSheets, refreshBankingEntriesToGoogleSheets, googleSheetsBankingConfig, exportLog } from './google-sheets-banking-sync.js';
import { randomUUID } from 'node:crypto';

export async function isConsigliere(db, discordUserId) {
  if (typeof discordUserId !== 'string' || !discordUserId) return false;
  const [rows] = await db.execute(`SELECT r.role_name FROM discord_member_roles m
    JOIN discord_roles r ON r.role_id = m.role_id WHERE m.discord_id = ?`, [discordUserId]);
  return rows.some(row => row.role_name === 'Consigliere');
}

export function entriesForRafflePeriods(entries, periods, asOf) {
  return entries.filter(entry => periods.some(period => entry.type === period.type &&
    Number(entry.time) >= period.start && Number(entry.time) < period.end && Number(entry.time) <= asOf))
    .sort((a, b) => Number(a.time) - Number(b.time) || String(a.eventId).localeCompare(String(b.eventId)));
}

export function currentRaffleEntries(entries, snapshot, type) {
  const windows = snapshot.raffles.filter(raffle => type === 'both' || raffle.type === type);
  return entriesForRafflePeriods(entries, windows.map(raffle => ({ type: raffle.type, start: raffle.salesStart, end: raffle.salesEnd + 1 })), snapshot.asOf);
}

export function registerRaffleRefreshSocket(socket, db, { getRaffleRefreshSelection, getBankingDataJSON,
  authorize = isConsigliere, refreshEntries = refreshBankingEntriesToGoogleSheets, log = exportLog }) {
  let running = false;
  socket.on('guildsync:raffle-refresh', async (payload = {}, callback) => {
    if (typeof callback !== 'function') return;
    if (!socket.guildSyncAuthenticated || socket.guildSyncAuthType !== 'discord-bot') {
      callback({ ok: false, message: 'Discord bot authentication is required.' }); return;
    }
    if (running) { callback({ ok: false, message: 'A raffle refresh is already running. Please wait for it to finish.' }); return; }
    running = true;
    try {
      if (!await authorize(db, payload.discordUserId)) throw new Error('Only users with the exact Consigliere role can refresh raffles. Check Discord role synchronization if necessary.');
      if (!['plan', 'export'].includes(payload.action)) throw new Error('Unknown raffle refresh action.');
      let selection = getRaffleRefreshSelection(payload.date);
      if (payload.action === 'plan') { callback({ ok: true, selection }); return; }
      const requestedBy = String(payload.requestedBy || '').trim().slice(0, 100);
      if (!requestedBy) throw new Error('The initiating Discord display name is required.');
      const result = await refreshEntries(async () => {
        selection = getRaffleRefreshSelection(payload.date);
        await log('REFRESH requested by ' + JSON.stringify(requestedBy) + ': ' + JSON.stringify(selection));
        return entriesForRafflePeriods(await getBankingDataJSON(db), selection.raffles, selection.asOf);
      }, { uploadedBy: requestedBy });
      callback({ ok: true, selection, synced: result.synced });
    } catch (error) {
      await log('REFRESH failed: ' + error.message).catch(console.error);
      callback({ ok: false, message: 'Raffle refresh failed: ' + error.message });
    } finally { running = false; }
  });
}

export function registerSyntheticTestSocket(socket, db, { getActiveRaffleSummary,
  exportEntries = syncBankingEntriesToGoogleSheets, authorize = isConsigliere, log = exportLog }) {
  socket.on('guildsync:test-add', async (payload = {}, callback) => {
    if (typeof callback !== 'function') return;
    if (!socket.guildSyncAuthenticated || socket.guildSyncAuthType !== 'discord-bot') return callback({ ok: false, message: 'Discord bot authentication is required.' });
    try {
      if (!await authorize(db, payload.discordUserId)) throw new Error('Only users with the exact Consigliere role can add test data.');
      const type = payload.raffleType;
      if (!['biweekly', 'monthly'].includes(type)) throw new Error('Choose Bi-Weekly or 50/50.');
      const name = String(payload.name || '').trim().slice(0, 100);
      const gold = Math.floor(Number(payload.gold));
      if (!name || !Number.isSafeInteger(gold) || gold < 0) throw new Error('Provide a name and a non-negative gold amount.');
      const now = Math.floor(Date.now() / 1000);
      const raffle = (await getActiveRaffleSummary(db, now)).raffles.find(item => item.type === type);
      if (!raffle || now < raffle.salesStart || now >= raffle.salesEnd) throw new Error('That raffle is not currently in its ticket-sales period.');
      const donation = payload.donation === true;
      const cost = type === 'biweekly' ? 500 : 2500;
      const marker = type === 'biweekly' ? 1 : 3;
      const ticketAmount = donation ? 0 : Math.max(0, Math.floor((gold - (gold % 10 === marker ? marker : 0)) / cost));
      if (!donation && ticketAmount < 1) throw new Error(`Gold must include at least one ${type === 'biweekly' ? '500' : '2,500'}-gold ticket.`);
      const bonusEnabled = !donation && raffle.bonusEnabled === true;
      const bonusPercent = bonusEnabled ? Number(raffle.bonusPercent) || 0 : 0;
      const bonusTickets = bonusEnabled ? Math.floor(ticketAmount * bonusPercent / 100) : 0;
      const entry = { type, eventId: `Test-${randomUUID()}`, time: now, displayName: name, amount: gold,
        ticketAmount, dataSource: 'GuildSyncTest', note: donation ? 'Test donation' : 'Test entry',
        bonusEnabled, bonusPercent, bonusTickets };
      const result = await exportEntries([entry], { uploadedBy: String(payload.requestedBy || '').trim() });
      await log('TEST ADD wrote ' + JSON.stringify({ eventId: entry.eventId, type, name, gold, ticketAmount, bonusEnabled, bonusPercent, bonusTickets, donation }));
      callback({ ok: true, message: `Test ${donation ? 'donation' : 'ticket entry'} added to ${type === 'biweekly' ? 'Bi-Weekly' : '50/50'}: ${name}, ${gold.toLocaleString('en-US')} gold, ${ticketAmount} tickets, ${bonusEnabled ? `${bonusPercent}% bonus (+${bonusTickets})` : 'bonuses disabled'}. Transaction ID: ${entry.eventId}` });
    } catch (error) { await log('TEST ADD failed: ' + error.message).catch(console.error); callback({ ok: false, message: error.message }); }
  });
}

export function registerRaffleTestSocket(socket, db, { getActiveRaffleSummary, getBankingDataJSON, sheets,
  exportEntries = syncBankingEntriesToGoogleSheets, log = exportLog, authorize = isConsigliere }) {
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
      if (!await authorize(db, payload.discordUserId)) throw new Error('Only users with the exact Consigliere role can run raffle tests.');
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

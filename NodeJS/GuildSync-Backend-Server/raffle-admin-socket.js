import { loadArchiveCells } from './raffle-archive-cells.js';
import { formatArchiveMessage } from './raffle-archive-message.js';
import { loadRaffleResults, loadFormulaTemplates, saveFormulaTemplates } from './raffle-results.js';
import { refreshBankingEntriesToGoogleSheets, googleSheetsBankingConfig, exportLog } from './google-sheets-banking-sync.js';

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

export function registerRaffleRefreshSocket(socket, db, { getRaffleRefreshSelection, getBankingDataJSON,
  authorize = isConsigliere, refreshEntries = refreshBankingEntriesToGoogleSheets, log = exportLog, loadResults = loadArchiveCells, loadTemplates = loadFormulaTemplates }) {
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
      let selection = getRaffleRefreshSelection(payload.date, undefined, payload.boundaryChoices);
      if (payload.action === 'plan') { callback({ ok: true, selection }); return; }
      if (selection.boundaryTypes?.some(type => !['starts','ends'].includes(payload.boundaryChoices?.[type]))) throw Error('Choose whether each boundary raffle starts or ends on this date before loading.');
      const requestedBy = String(payload.requestedBy || '').trim().slice(0, 100);
      if (!requestedBy) throw new Error('The initiating Discord display name is required.');
      const result = await refreshEntries(async () => {
        selection = getRaffleRefreshSelection(payload.date, undefined, payload.boundaryChoices);
        await log('REFRESH requested by ' + JSON.stringify(requestedBy) + ': ' + JSON.stringify(selection));
        return { entries: entriesForRafflePeriods(await getBankingDataJSON(db), selection.raffles, selection.asOf), periods: selection.raffles, results: await loadResults(db, selection.raffles, googleSheetsBankingConfig().spreadsheetId), templates: await loadTemplates(db, googleSheetsBankingConfig().spreadsheetId) };
      }, { uploadedBy: requestedBy, saveTemplates: formulas => saveFormulaTemplates(db, formulas, googleSheetsBankingConfig().spreadsheetId) });
      callback({ ok: true, selection, synced: result.synced,
        workingSheetUrl: 'https://docs.google.com/spreadsheets/d/' + encodeURIComponent(googleSheetsBankingConfig().spreadsheetId) + '/edit' });
    } catch (error) {
      await log('REFRESH failed: ' + error.message).catch(console.error);
      callback({ ok: false, message: 'Raffle refresh failed: ' + error.message });
    } finally { running = false; }
  });
}

export function registerRaffleManagementSocket(socket, db, { sheets, authorize = isConsigliere, log = exportLog }) {
  let running = false;
  socket.on('guildsync:raffle-manage', async (payload = {}, callback) => {
    if (typeof callback !== 'function') return;
    if (!socket.guildSyncAuthenticated || socket.guildSyncAuthType !== 'discord-bot') return callback({ ok: false, message: 'Discord bot authentication is required.' });
    if (running) return callback({ ok: false, message: 'A raffle operation is already running.' });
    running = true;
    try {
      if (!await authorize(db, payload.discordUserId)) throw new Error('Only users with the exact Consigliere role can manage raffle sheets.');
      if (!['clear', 'archive'].includes(payload.action)) throw new Error('Unknown raffle action.');
      if (!googleSheetsBankingConfig().enabled || !sheets) throw new Error('Enable Google Sheets on the backend first.');
      const requestedBy = String(payload.requestedBy || '').trim().slice(0, 100);
      if (!requestedBy) throw new Error('The initiating Discord display name is required.');
      await log(payload.action.toUpperCase() + ' requested by ' + JSON.stringify(requestedBy) + ' for both raffle sheets.');
      if (payload.action === 'clear') {
        await sheets.clear();
        callback({ ok: true, message: 'Cleared both raffle sheets, including Bi-Weekly R7 and 50/50 P7 draw dates. Database records are unchanged. Use /gsr raffle refresh to reload them.' });
      } else {
        const result = await sheets.archive({ requestedBy });
        callback({ ok: true, message: result.message || formatArchiveMessage({ ...result, requestedBy, sourceId: googleSheetsBankingConfig().spreadsheetId }) });
      }
    } catch (error) {
      await log('Raffle operation failed: ' + error.message).catch(console.error);
      callback({ ok: false, message: error.message });
    } finally { running = false; }
  });
}

import { createHash, randomUUID } from 'node:crypto';
import { requestArchive } from './apps-script-archive.js';
import { createRollover } from './raffle-sheet-rollover.js';
import { config, googleContext, sheetsRequest, configureSheetsCoordinator, replayBankingEntries, exportLog } from './google-sheets-banking-sync.js';

const MARKER = 'guildsync_last_rollover';

export function resetRequests(sheetId, type, key, oldMetadata = []) {
  const range = (r1, r2, c1, c2) => ({ sheetId, startRowIndex: r1, endRowIndex: r2, startColumnIndex: c1, endColumnIndex: c2 });
  const requests = [
    { updateCells: { range: range(4, 254, 3, 6), fields: 'userEnteredValue' } },
    { updateCells: { range: range(4, 254, 7, 8), fields: 'userEnteredValue,note' } },
    ...(type === 'biweekly' ? [{ updateCells: { range: range(4, 254, 9, 11), fields: 'userEnteredValue' } }] : []),
    { updateDimensionProperties: { range: { sheetId, dimension: 'COLUMNS', startIndex: 6, endIndex: 8 }, properties: { hiddenByUser: true }, fields: 'hiddenByUser' } },
    { updateCells: { range: type === 'biweekly' ? range(61, 70, 15, 18) : range(35, 44, 13, 16), fields: 'userEnteredValue' } },
    ...(type === 'biweekly'
      ? [
          { updateCells: { range: range(2, 4, 17, 18), fields: 'userEnteredValue' } },
          { updateCells: { range: range(32, 52, 16, 17), fields: 'userEnteredValue' } }
        ]
      : [
          { updateCells: { range: range(2, 4, 15, 16), fields: 'userEnteredValue' } },
          { updateCells: { range: range(24, 25, 15, 16), fields: 'userEnteredValue' } },
          { updateCells: { range: range(27, 28, 12, 13), fields: 'userEnteredValue' } }
        ]),
    ...oldMetadata.map(metadata => ({ deleteDeveloperMetadata: { dataFilter: { developerMetadataLookup: { metadataId: metadata.metadataId } } } })),
    { createDeveloperMetadata: { developerMetadata: { metadataKey: MARKER, metadataValue: key, visibility: 'DOCUMENT', location: { sheetId } } } }
  ];
  return requests;
}

export function drawDateRequest(sheetId, type, drawTime) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date(drawTime * 1000));
  const value = kind => Number(parts.find(part => part.type === kind).value);
  const serial = Date.UTC(value('year'), value('month') - 1, value('day')) / 86400000 + 25569;
  const column = type === 'biweekly' ? 17 : 15;
  return { updateCells: { range: { sheetId, startRowIndex: 6, endRowIndex: 7, startColumnIndex: column, endColumnIndex: column + 1 },
    rows: [{ values: [{ userEnteredValue: { numberValue: serial }, userEnteredFormat: { numberFormat: { type: 'DATE', pattern: 'mm/dd/yy' } } }] }],
    fields: 'userEnteredValue,userEnteredFormat.numberFormat' } };
}

export function startSheetsRollover(db, getWindows, { now, schedule = true, loadCatchupEntries } = {}) {
  const settings = config();
  if (!settings.enabled) return;
  const enabled = /^true$/i.test(process.env.GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_ENABLED || 'false');
  const hours = Number(String(process.env.GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_DELAY_HOURS ?? '').trim() || 4);
  if (!Number.isFinite(hours) || hours < 0 || !Number.isSafeInteger(hours * 3600)) throw new Error('Invalid rollover delay hours.');
  const hash = createHash('sha256').update(settings.spreadsheetId).digest('hex').slice(0, 32);
  const stateKey = 'sheets_rollover_' + hash;
  let connection;
  let context;
  const contextNow = async () => context ||= await googleContext();
  const tabFor = type => type === 'biweekly' ? settings.biweeklyTab : settings.fiftyFiftyTab;
  const io = {
    now,
    delaySeconds: hours * 3600,
    getWindows,
    loadState: async () => {
      const [rows] = await connection.execute('SELECT value FROM guildsync_settings WHERE setting_key = ?', [stateKey]);
      const state = rows.length ? JSON.parse(rows[0].value) : null;
      if (state?.tabs && JSON.stringify(state.tabs) !== JSON.stringify([settings.biweeklyTab, settings.fiftyFiftyTab])) throw new Error('Rollover tab configuration changed; restore it before continuing.');
      return state;
    },
    saveState: async state => {
      state.tabs = [settings.biweeklyTab, settings.fiftyFiftyTab];
      await connection.execute('INSERT INTO guildsync_settings (setting_key, value) VALUES (?, ?) ON DUPLICATE KEY UPDATE value = VALUES(value)', [stateKey, JSON.stringify(state)]);
    },
    archive: async ({ key, name }) => {
      await exportLog('Requesting Apps Script archive ' + JSON.stringify(name));
      return requestArchive('archive', { sourceId: settings.spreadsheetId, key: hash + ':' + key, name });
    },
    reset: async ({ key, archiveId, raffles, nextWindows }) => {
      await requestArchive('verify', { sourceId: settings.spreadsheetId, key: hash + ':' + key, archiveId });
      const { token, url } = await contextNow();
      const book = await sheetsRequest(token, url + '?fields=sheets(properties,developerMetadata)');
      const requests = [];
      for (const raffle of raffles) {
        const tab = book.sheets?.find(item => item.properties.title === tabFor(raffle.type));
        if (!tab) throw new Error('Missing rollover tab: ' + tabFor(raffle.type));
        const sheet = tab.properties;
        const metadata = (tab.developerMetadata || []).filter(item => item.metadataKey === MARKER && item.location?.sheetId === sheet.sheetId);
        if (metadata.some(item => item.metadataValue === key)) continue;
        requests.push(...resetRequests(sheet.sheetId, raffle.type, key, metadata));
        const next = nextWindows?.find(item => item.type === raffle.type);
        if (next) requests.push(drawDateRequest(sheet.sheetId, raffle.type, next.drawTime));
      }
      if (requests.length) {
        await exportLog('Resetting only closed tabs after archive ' + archiveId + ': ' + raffles.map(item => tabFor(item.type)).join(', '));
        // Clear and completion markers are atomic: an uncertain HTTP response cannot cause a second clear.
        await sheetsRequest(token, url + ':batchUpdate', { method: 'POST', body: JSON.stringify({ requests }) });
      }
    },
    log: exportLog
  };
  const coordinator = createRollover(io);

  // One local queue plus a MariaDB advisory lock coordinates all backend instances.
  let tail = Promise.resolve();
  const run = (operation, { processRollover = true } = {}) => {
    const job = tail.then(async () => {
      const conn = await db.getConnection();
      let locked = false;
      try {
        const [rows] = await conn.execute('SELECT GET_LOCK(?, 10) AS acquired', ['guildsync_sheet_' + hash]);
        if (Number(rows[0]?.acquired) !== 1) throw new Error('Could not acquire spreadsheet export lock.');
        locked = true; connection = conn; context = null;
        const advance = enabled && processRollover;
        const [saved] = advance ? [[]] : await conn.execute('SELECT value FROM guildsync_settings WHERE setting_key = ?', [stateKey]);
        const state = advance ? await coordinator.tick() : (saved.length ? JSON.parse(saved[0].value) : {});
        if (state.pending || (!advance && state.catchupRequired) || (!processRollover && enabled && state.windows?.some(window => window.salesEnd <= Math.floor(now ? now() : Date.now() / 1000)))) {
          throw new Error('Spreadsheet writes are on hold until delayed archive/reset completes. Banking records remain in the database.');
        }
        if (advance && state.catchupRequired) {
          if (!loadCatchupEntries) throw new Error('Rollover catchup loader is unavailable; writes remain paused.');
          const entries = await loadCatchupEntries(Math.floor(now ? now() : Date.now() / 1000));
          await replayBankingEntries(entries, state);
          state.catchupRequired = false;
          await io.saveState(state);
          await exportLog('Rollover database catchup completed; spreadsheet writes resumed.');
        }
        return operation ? await operation(state) : state;
      } finally {
        try {
          if (locked) await conn.execute('SELECT RELEASE_LOCK(?)', ['guildsync_sheet_' + hash]);
        } finally {
          conn.release(); connection = null; context = null;
        }
      }
    });
    tail = job.catch(() => {});
    return job;
  };
  configureSheetsCoordinator(run);
  const testClose = type => run(async () => {
    if (!/^true$/i.test(process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED || '')) throw new Error('Raffle testing is disabled.');
    if (!['biweekly', 'monthly'].includes(type)) throw new Error('Select biweekly or monthly.');
    const timestamp = Math.floor(now ? now() : Date.now() / 1000);
    const raffle = getWindows(timestamp).find(item => item.type === type);
    const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', year: '2-digit', month: '2-digit', day: '2-digit' }).formatToParts(new Date(raffle.drawTime * 1000));
    const part = kind => parts.find(item => item.type === kind).value;
    const job = { key: 'raffle-test-' + randomUUID(), name: `${part('year')}${part('month')}${part('day')} raffle`, raffles: [raffle] };
    await exportLog('TEST close requested for ' + type + '; live raffle dates will not change.');
    const archiveId = await io.archive(job);
    await io.reset({ ...job, archiveId, nextWindows: getWindows(raffle.salesEnd + 1) });
    return { archiveId, name: job.name };
  }, { processRollover: false });
  const testReset = async type => {
    if (!/^true$/i.test(process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED || '')) throw new Error('Raffle testing is disabled.');
    if (!['biweekly', 'monthly'].includes(type)) throw new Error('Select biweekly or monthly.');
    return run(async () => {
      const { token, url } = await googleContext();
      const book = await sheetsRequest(token, url + '?fields=sheets.properties');
      const tab = book.sheets?.find(item => item.properties.title === tabFor(type));
      if (!tab) throw new Error('Missing rollover tab: ' + tabFor(type));
      // Reuse closure fields without recording a completed rollover or touching its markers.
      const requests = resetRequests(tab.properties.sheetId, type, '').filter(request => request.updateCells || request.updateDimensionProperties);
      await exportLog('TEST reset: clearing ' + JSON.stringify(tabFor(type)) + ' without an archive; raffle dates remain unchanged.');
      await sheetsRequest(token, url + ':batchUpdate', { method: 'POST', body: JSON.stringify({ requests }) });
      return { tab: tabFor(type) };
    }, { processRollover: false });
  };
  if (!enabled || !schedule) return { run, testClose, testReset, stop: () => {} };
  const tick = () => run().catch(error => exportLog('Rollover failed; export/reset paused: ' + error.message).catch(console.error));
  const timer = setInterval(tick, 60000); timer.unref();
  tick();
  return { run, testClose, testReset, stop: () => clearInterval(timer) };
}

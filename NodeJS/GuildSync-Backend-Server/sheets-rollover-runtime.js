import { createHash, randomUUID } from 'node:crypto';
import { createRollover } from './raffle-sheet-rollover.js';
import { config, googleContext, sheetsRequest, configureSheetsCoordinator, exportLog } from './google-sheets-banking-sync.js';

const MARKER = 'guildsync_last_rollover';
const driveBase = 'https://www.googleapis.com/drive/v3/files';
const escapeQuery = value => String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

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

export function startSheetsRollover(db, getWindows, { now, schedule = true } = {}) {
  const settings = config();
  if (!settings.enabled) return;
  const enabled = /^true$/i.test(process.env.GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_ENABLED || 'false');
  const folder = String(process.env.GUILDSYNC_GOOGLE_SHEETS_ARCHIVE_FOLDER_ID || '').trim();
  const hash = createHash('sha256').update(settings.spreadsheetId).digest('hex').slice(0, 32);
  const stateKey = 'sheets_rollover_' + hash;
  let connection;
  let context;
  const contextNow = async () => context ||= await googleContext(true);
  const tabFor = type => type === 'biweekly' ? settings.biweeklyTab : settings.fiftyFiftyTab;
  const io = {
    now,
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
      if (!folder) throw new Error('Set GUILDSYNC_GOOGLE_SHEETS_ARCHIVE_FOLDER_ID before enabling rollover. No sheet was cleared.');
      const { token } = await contextNow();
      const archiveKey = hash + ':' + key;
      const q = `'${escapeQuery(folder)}' in parents and trashed = false and appProperties has { key='guildsyncArchive' and value='${escapeQuery(archiveKey)}' }`;
      const found = await sheetsRequest(token, driveBase + '?supportsAllDrives=true&includeItemsFromAllDrives=true&fields=files(id,name,mimeType,appProperties)&q=' + encodeURIComponent(q));
      let file = found.files?.[0];
      if (!file) {
        await exportLog('Archiving original spreadsheet as ' + JSON.stringify(name));
        file = await sheetsRequest(token, driveBase + '/' + encodeURIComponent(settings.spreadsheetId) + '/copy?supportsAllDrives=true&fields=id', {
          method: 'POST', body: JSON.stringify({ name, parents: [folder], appProperties: { guildsyncArchive: archiveKey } })
        });
      }
      if (!file?.id || file.id === settings.spreadsheetId) throw new Error('Archive copy did not return a distinct file ID.');
      const verified = await sheetsRequest(token, driveBase + '/' + encodeURIComponent(file.id) + '?supportsAllDrives=true&fields=id,name,mimeType,trashed,appProperties');
      if (verified.trashed || verified.mimeType !== 'application/vnd.google-apps.spreadsheet' || verified.appProperties?.guildsyncArchive !== archiveKey) throw new Error('Archive verification failed; original remains intact.');
      await exportLog('Verified archive ' + verified.id + ' (' + verified.name + ')');
      return verified.id;
    },
    reset: async ({ key, archiveId, raffles }) => {
      const { token, url } = await contextNow();
      // Confirm the archive still exists even when resuming a pending reset after restart.
      const copy = await sheetsRequest(token, driveBase + '/' + encodeURIComponent(archiveId) + '?supportsAllDrives=true&fields=id,trashed,mimeType,appProperties');
      if (copy.trashed || copy.id === settings.spreadsheetId || copy.mimeType !== 'application/vnd.google-apps.spreadsheet' || copy.appProperties?.guildsyncArchive !== hash + ':' + key) throw new Error('Cannot reset without verified archive.');
      const book = await sheetsRequest(token, url + '?fields=sheets(properties,developerMetadata)');
      const requests = [];
      for (const raffle of raffles) {
        const tab = book.sheets?.find(item => item.properties.title === tabFor(raffle.type));
        if (!tab) throw new Error('Missing rollover tab: ' + tabFor(raffle.type));
        const sheet = tab.properties;
        const metadata = (tab.developerMetadata || []).filter(item => item.metadataKey === MARKER && item.location?.sheetId === sheet.sheetId);
        if (metadata.some(item => item.metadataValue === key)) continue;
        requests.push(...resetRequests(sheet.sheetId, raffle.type, key, metadata));
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
        if (!advance && state.pending) throw new Error('A raffle reset is pending; finish rollover before continuing.');
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
    await io.reset({ ...job, archiveId });
    return { archiveId, name: job.name };
  });
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

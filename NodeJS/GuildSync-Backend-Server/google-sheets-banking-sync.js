import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const backendRoot = path.dirname(fileURLToPath(import.meta.url));
export async function exportLog(message) {
  const line = `${new Date().toISOString()} [GUILDSYNC-GOOGLE-SHEETS] ${message}`;
  console.log(line);
  const filename = path.resolve(backendRoot, process.env.GUILDSYNC_GOOGLE_SHEETS_LOG_FILE || 'logs/google-sheets.log');
  await fs.mkdir(path.dirname(filename), { recursive: true });
  await fs.appendFile(filename, line + '\n');
}
const sheetRange = (tab, cells) => `'${tab.replace(/'/g, "''")}'!${cells}`;

export function config() {
  return {
    enabled: /^true$/i.test(String(process.env.GUILDSYNC_GOOGLE_SHEETS_ENABLED || '')),
    spreadsheetId: String(process.env.GUILDSYNC_GOOGLE_SHEETS_SPREADSHEET_ID || '').trim(),
    serviceAccountFile: String(process.env.GUILDSYNC_GOOGLE_SERVICE_ACCOUNT_FILE || '').trim(),
    serviceAccountJson: String(process.env.GUILDSYNC_GOOGLE_SERVICE_ACCOUNT_JSON || '').trim(),
    biweeklyTab: process.env.GUILDSYNC_GOOGLE_SHEETS_BIWEEKLY_TAB || 'bi-weekly raffle',
    fiftyFiftyTab: process.env.GUILDSYNC_GOOGLE_SHEETS_5050_TAB || '50/50',
    biweeklyStartRow: 5,
    fiftyFiftyStartRow: 5
  };
}

async function credentials(settings) {
  const raw = settings.serviceAccountJson || (settings.serviceAccountFile ? await fs.readFile(settings.serviceAccountFile, 'utf8') : '');
  if (!raw) throw new Error('Google Sheets is enabled but no service-account JSON or file was configured.');
  return typeof raw === 'string' ? JSON.parse(raw) : raw;
}

function base64url(value) { return Buffer.from(value).toString('base64url'); }

async function accessToken(account, drive = false) {
  if (process.env.GUILDSYNC_GOOGLE_OAUTH_REFRESH_TOKEN) {
    const response = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({
      grant_type: 'refresh_token', refresh_token: process.env.GUILDSYNC_GOOGLE_OAUTH_REFRESH_TOKEN,
      client_id: process.env.GUILDSYNC_GOOGLE_OAUTH_CLIENT_ID || '', client_secret: process.env.GUILDSYNC_GOOGLE_OAUTH_CLIENT_SECRET || ''
    }), signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error(`Google OAuth refresh failed (${response.status}).`);
    const token = (await response.json()).access_token;
    if (!token) throw new Error('Google OAuth returned no access token.');
    return token;
  }
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = base64url(JSON.stringify({ iss: account.client_email, scope: drive ? `${SHEETS_SCOPE} https://www.googleapis.com/auth/drive` : SHEETS_SCOPE, aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 }));
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(`${header}.${claim}`);
  const assertion = `${header}.${claim}.${signer.sign(account.private_key, 'base64url')}`;
  const response = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }), signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`Google token request failed (${response.status}).`);
  const token = (await response.json()).access_token;
  if (!token) throw new Error('Google returned no access token.');
  return token;
}

export async function sheetsRequest(token, url, init = {}, log = exportLog) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000), ...init, headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json', ...(init.headers || {}) } });
  if (!response.ok) {
    let detail = 'Google returned no structured error details.';
    try {
      const body = await response.json();
      detail = `${body.error?.status || ''}: ${body.error?.message || detail}`;
    } catch { /* A proxy may return a non-JSON error. */ }
    const endpoint = decodeURIComponent(new URL(url).pathname);
    const message = `Google Sheets ${init.method || 'GET'} ${endpoint} failed (${response.status}): ${detail}`;
    try { await log(message); } catch (error) { console.error(`Could not save Sheets error log: ${error.message}`); }
    throw new Error(message);
  }
  return response.json();
}

export async function googleContext(drive = false) {
  const settings = config();
  const account = process.env.GUILDSYNC_GOOGLE_OAUTH_REFRESH_TOKEN ? null : await credentials(settings);
  const token = await accessToken(account, drive);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(settings.spreadsheetId)}`;
  return { settings, token, url };
}

let coordinate = async operation => operation({});
export function configureSheetsCoordinator(run) { coordinate = run; }

function tabFor(type, settings) { return type === 'biweekly' ? settings.biweeklyTab : type === 'monthly' ? settings.fiftyFiftyTab : ''; }
function sheetGoldAmount(amount) {
  const value = Number(amount) || 0;
  const marker = Math.abs(Math.trunc(value)) % 10;
  return marker === 1 || marker === 3 ? (value > marker ? value - marker : value) : value;
}
function easternTimestamp() {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true }).formatToParts(new Date());
  const value = Object.fromEntries(parts.filter(part => part.type !== 'literal').map(part => [part.type, part.value]));
  return `${value.month}/${value.day}/${value.year} ${value.hour}:${value.minute}${value.dayPeriod.toLowerCase()} ET`;
}

export async function syncBankingEntriesToGoogleSheets(entries, { log = exportLog, uploadedBy = '' } = {}) {
  const settings = config();
  entries = (entries || []).filter(entry => tabFor(entry.type, settings));
  if (!settings.enabled || !entries.length) return { enabled: settings.enabled, synced: 0 };
  return coordinate(async state => {
    try {
      return await writeEntries(entries, uploadedBy, state, log);
    } catch (error) {
      await log('Export stopped: ' + error.message);
      throw error;
    }
  });
}

export function entryLayout(entry) {
  const donation = entry.ticketAmount != null && Number(entry.ticketAmount) === 0;
  return donation
    ? entry.type === 'biweekly'
      ? { donation, first: 63, last: 70, id: 'P', name: 'Q', gold: 'R', index: 15 }
      : { donation, first: 36, last: 44, id: 'N', name: 'O', gold: 'P', index: 13 }
    : { donation, first: 5, last: 254, id: 'D', name: 'E', gold: 'F', index: 3 };
}

export async function refreshBankingEntriesToGoogleSheets(loadEntries, { uploadedBy = '', log = exportLog } = {}) {
  if (!config().enabled) throw new Error('Enable Google Sheets on the backend first.');
  // Load committed rows inside the same lock used by live exports and rollover.
  return coordinate(async state => writeEntries(await loadEntries(), uploadedBy, state, log, true));
}

function attributionRequest(sheetId, type, uploadedBy) {
  const attribution = String(uploadedBy || '').trim();
  return { updateCells: {
    start: { sheetId, rowIndex: 2, columnIndex: type === 'biweekly' ? 17 : 15 },
    rows: [{ values: [{ userEnteredValue: { stringValue: attribution ? attribution + ' (GuildSync)' : 'GuildSync' } }] },
      { values: [{ userEnteredValue: { stringValue: easternTimestamp() } }] }],
    fields: 'userEnteredValue'
  } };
}

async function writeEntries(entries, uploadedBy, state, log, replace = false) {
  const { settings, token, url } = await googleContext();
  if (!settings.spreadsheetId) throw new Error('Google spreadsheet ID is missing.');
  await log('Starting spreadsheet update: entries=' + entries.length);
  const info = await sheetsRequest(token, url + '?fields=sheets.properties');
  let synced = 0;
  const sections = new Map();
  let pending = [];
  let preparation = [];
  if (replace) {
    for (const type of ['biweekly', 'monthly']) {
      const tab = tabFor(type, settings);
      const sheet = info.sheets?.find(item => item.properties.title === tab)?.properties;
      if (!sheet || sheet.gridProperties.rowCount < 254 || sheet.gridProperties.columnCount < (type === 'biweekly' ? 18 : 16)) {
        throw new Error('Missing worksheet or grid too small for refresh: ' + tab);
      }
      const range = (r1, r2, c1, c2) => ({ sheetId: sheet.sheetId, startRowIndex: r1, endRowIndex: r2, startColumnIndex: c1, endColumnIndex: c2 });
      preparation.push(
        { updateCells: { range: range(4, 254, 3, 6), fields: 'userEnteredValue' } },
        { updateCells: { range: range(4, 254, 7, 8), fields: 'userEnteredValue,note' } },
        { updateCells: { range: type === 'biweekly' ? range(62, 70, 15, 18) : range(35, 44, 13, 16), fields: 'userEnteredValue' } },
        { updateDimensionProperties: { range: { sheetId: sheet.sheetId, dimension: 'COLUMNS', startIndex: 6, endIndex: 8 },
          properties: { hiddenByUser: !entries.some(entry => entry.type === type && entry.bonusEnabled === true) }, fields: 'hiddenByUser' } },
        attributionRequest(sheet.sheetId, type, uploadedBy)
      );
      await log('Refreshing ' + JSON.stringify(tab) + ': replacing exported tickets, donations and bonus notes.');
    }
  }
  const flush = async () => {
    if (!pending.length && !preparation.length) return;
    await log('Writing batch: entries=' + pending.length);
    await sheetsRequest(token, url + ':batchUpdate', { method: 'POST', body: JSON.stringify({ requests: [...preparation, ...pending.flatMap(item => item.requests)] }) });
    preparation = [];
    for (const item of pending) await log('Added transaction ' + item.eventId + ' to ' + JSON.stringify(item.tab) + ' row ' + item.row);
    synced += pending.length;
    pending = [];
  };
  for (const entry of entries) {
    if (!entry.eventId) continue;
    const tab = tabFor(entry.type, settings);
    // The live tab is already prepared for the next period. Never backfill old data into it.
    const lastClosed = state.lastClosedSalesEnd?.[entry.type];
    if (!replace && lastClosed && (!Number.isFinite(Number(entry.time)) || Number(entry.time) <= lastClosed)) {
      await log('Skipped closed-period entry ' + JSON.stringify(entry.eventId) + ' on ' + JSON.stringify(tab));
      continue;
    }
    const sheet = info.sheets?.find(item => item.properties.title === tab)?.properties;
    if (!sheet) throw new Error('Worksheet not found: ' + tab);
    const layout = entryLayout(entry);
    if (sheet.gridProperties.rowCount < layout.last || sheet.gridProperties.columnCount < layout.index + 3) {
      throw new Error('Worksheet grid is too small for ' + tab + ' ' + layout.id + layout.first + ':' + layout.gold + layout.last);
    }
    const range = sheetRange(tab, layout.id + layout.first + ':' + layout.gold + layout.last);
    if (!sections.has(range)) {
      await log('Reading ' + range + ' for transaction ' + JSON.stringify(String(entry.eventId)));
      const existing = replace ? {} : await sheetsRequest(token, url + '/values/' + encodeURIComponent(range) + '?majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE');
      sections.set(range, existing.values || []);
    }
    const rows = sections.get(range);
    if (rows.some(row => String(row[0] ?? '') === String(entry.eventId))) {
      await log('Duplicate skipped: ' + entry.eventId);
      continue;
    }
    // A row is reusable only when both transaction ID and member name are blank.
    const offset = Array.from({ length: layout.last - layout.first + 1 }, (_, i) => i)
      .find(i => !String(rows[i]?.[0] ?? '').trim() && !String(rows[i]?.[1] ?? '').trim());
    if (offset === undefined) throw new Error('No empty row in ' + range + '; entry ' + entry.eventId + ' was not exported.');
    const row = layout.first + offset;
    let name = String(entry.displayName || '');
    if (/^manual/i.test(String(entry.dataSource || '')) && String(entry.note || '').trim()) name += ' (' + String(entry.note).trim() + ')';
    const manual = /^manual/i.test(String(entry.dataSource || ''));
    const bonusEnabled = entry.bonusEnabled === true;
    const bonusTickets = manual ? 0 : Math.max(0, Math.floor(Number(entry.bonusTickets) || 0));
    const bonusPercent = manual ? 0 : Number(entry.bonusPercent) || 0;
    const values = [
      { userEnteredValue: { stringValue: String(entry.eventId) } },
      { userEnteredValue: { stringValue: name } },
      { userEnteredValue: { numberValue: sheetGoldAmount(entry.amount) } }
    ];
    const requests = [{
      updateCells: { start: { sheetId: sheet.sheetId, rowIndex: row - 1, columnIndex: layout.index },
        rows: [{ values }], fields: 'userEnteredValue' }
    }];
    if (!layout.donation) {
      requests.push({ updateCells: {
        range: { sheetId: sheet.sheetId, startRowIndex: row - 1, endRowIndex: row, startColumnIndex: 7, endColumnIndex: 8 },
        rows: [{ values: [bonusEnabled
          ? { userEnteredValue: { numberValue: bonusTickets }, note: 'Bonus: ' + bonusPercent + '%' }
          : {}] }], fields: 'userEnteredValue,note'
      } });
      if (!replace && bonusEnabled) requests.push({ updateDimensionProperties: {
        range: { sheetId: sheet.sheetId, dimension: 'COLUMNS', startIndex: 6, endIndex: 8 },
        properties: { hiddenByUser: false }, fields: 'hiddenByUser'
      } });
      else if (!replace) {
        requests.push({ updateCells: {
          range: { sheetId: sheet.sheetId, startRowIndex: 4, endRowIndex: 254, startColumnIndex: 7, endColumnIndex: 8 },
          fields: 'userEnteredValue,note'
        } });
        requests.push({ updateDimensionProperties: {
          range: { sheetId: sheet.sheetId, dimension: 'COLUMNS', startIndex: 6, endIndex: 8 },
          properties: { hiddenByUser: true }, fields: 'hiddenByUser'
        } });
      }
    }
    if (!replace) requests.push(attributionRequest(sheet.sheetId, entry.type, uploadedBy));
    await log('Writing ' + JSON.stringify({ tab, row, range: layout.id + row + ':' + layout.gold + row,
      eventId: String(entry.eventId), name, gold: sheetGoldAmount(entry.amount), bonusEnabled, bonusPercent, bonusTickets }));
    // Reserve the row locally; bulk replay reads each section only once and
    // batches writes to stay below per-user Sheets API quotas.
    rows[offset] = [String(entry.eventId), name, sheetGoldAmount(entry.amount)];
    pending.push({ requests, eventId: entry.eventId, tab, row });
    // A replacement must clear and repopulate both tabs atomically, after all
    // capacity checks succeed. Live append exports keep their existing batching.
    if (!replace && pending.length >= 25) await flush();
  }
  await flush();
  return { enabled: true, synced };
}

export function googleSheetsBankingConfig() { return config(); }


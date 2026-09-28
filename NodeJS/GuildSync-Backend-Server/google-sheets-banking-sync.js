import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const backendRoot = path.dirname(fileURLToPath(import.meta.url));
async function exportLog(message) {
  const line = `${new Date().toISOString()} [GUILDSYNC-GOOGLE-SHEETS] ${message}`;
  console.log(line);
  const filename = path.resolve(backendRoot, process.env.GUILDSYNC_GOOGLE_SHEETS_LOG_FILE || 'logs/google-sheets.log');
  await fs.mkdir(path.dirname(filename), { recursive: true });
  await fs.appendFile(filename, line + '\n');
}
const sheetRange = (tab, cells) => `'${tab.replace(/'/g, "''")}'!${cells}`;

function config() {
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

async function accessToken(account) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = base64url(JSON.stringify({ iss: account.client_email, scope: SHEETS_SCOPE, aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 }));
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(`${header}.${claim}`);
  const assertion = `${header}.${claim}.${signer.sign(account.private_key, 'base64url')}`;
  const response = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }) });
  if (!response.ok) throw new Error(`Google token request failed (${response.status}).`);
  return (await response.json()).access_token;
}

export async function sheetsRequest(token, url, init = {}, log = exportLog) {
  const response = await fetch(url, { ...init, headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json', ...(init.headers || {}) } });
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

function tabFor(type, settings) { return type === 'biweekly' ? settings.biweeklyTab : type === 'monthly' ? settings.fiftyFiftyTab : ''; }
function startRowFor(type, settings) { return type === 'biweekly' ? settings.biweeklyStartRow : settings.fiftyFiftyStartRow; }
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

async function updateSheetMetadata(token, base, tab, type, uploadedBy) {
  const range = 'N3:N4';
  const name = String(uploadedBy || '').trim();
  await sheetsRequest(token, `${base}/${encodeURIComponent(sheetRange(tab, range))}?valueInputOption=RAW`, { method: 'PUT', body: JSON.stringify({ majorDimension: 'ROWS', values: [[name ? `${name} (GuildSync)` : 'GuildSync'], [easternTimestamp()]] }) });
}

async function firstEmptyRow(token, base, tab, startRow, log, column = 'D') {
  const result = await sheetsRequest(token, `${base}/${encodeURIComponent(sheetRange(tab, `${column}${startRow}:${column}`))}?majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE`);
  const values = result.values?.[0] || [];
  const offset = values.findIndex(value => String(value ?? '').trim() === '');
  const row = offset < 0 ? startRow + values.length : startRow + offset;
  await log(`Scan ${JSON.stringify(tab)}: responseRange=${JSON.stringify(result.range)}, returnedCells=${values.length}, sample=${JSON.stringify(Array.from({ length: 8 }, (_, i) => ({ cell: `${column}${startRow + i}`, value: values[i] ?? '' })))}, selected=${column}${row}`);
  return row;
}

export async function syncBankingEntriesToGoogleSheets(entries, { log = exportLog, uploadedBy = '' } = {}) {
  const settings = config();
  entries = (entries || []).filter(entry => tabFor(entry.type, settings));
  if (!settings.enabled || !entries?.length) return { enabled: settings.enabled, synced: 0 };
  await log(`Starting spreadsheet update: entries=${entries.length}, spreadsheet=${JSON.stringify(settings.spreadsheetId)}`);
  if (!settings.spreadsheetId) throw new Error('Google Sheets is enabled but GUILDSYNC_GOOGLE_SHEETS_SPREADSHEET_ID is missing.');
  const account = await credentials(settings);
  const token = await accessToken(account);
  const base = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(settings.spreadsheetId)}/values`;
  let synced = 0;
  const metadataUpdated = new Set();
  for (const entry of entries) {
    const tab = tabFor(entry.type, settings);
    if (!tab || !entry.eventId) continue;
    const donation = entry.ticketAmount !== null && entry.ticketAmount !== undefined && Number(entry.ticketAmount) === 0;
    const startRow = donation ? (entry.type === 'biweekly' ? 62 : 34) : startRowFor(entry.type, settings);
    const nameColumn = donation ? (entry.type === 'biweekly' ? 'M' : 'K') : 'D';
    const goldColumn = donation ? (entry.type === 'biweekly' ? 'N' : 'L') : 'E';
    const idColumn = donation ? 'X' : 'W';
    await log(`Checking transaction ${JSON.stringify(String(entry.eventId))}: sheet=${JSON.stringify(tab)}, donation=${donation}, duplicateRange=${sheetRange(tab, `${idColumn}${startRow}:${idColumn}`)}, nameScan=${nameColumn}${startRow}:${nameColumn}`);
    const existing = await sheetsRequest(token, `${base}/${encodeURIComponent(sheetRange(tab, `${idColumn}${startRow}:${idColumn}`))}?majorDimension=COLUMNS`);
    const ids = existing.values?.[0] || [];
    if (ids.some(value => String(value) === String(entry.eventId))) continue;
    const values = [];
    values[0] = entry.displayName || '';
    if (/^manual/i.test(String(entry.dataSource || '')) && String(entry.note || '').trim()) {
      values[0] += ` (${String(entry.note).trim()})`;
    }
    values[1] = sheetGoldAmount(entry.amount);
    // The sheet calculates ticket quantity itself. Keep ticket and bonus fields
    // on the backend entry payload for future integrations without writing them here.
    values[20] = String(entry.eventId);
    const row = await firstEmptyRow(token, base, tab, startRow, log, nameColumn);
    const data = [
      { range: sheetRange(tab, `${nameColumn}${row}:${goldColumn}${row}`), values: [[values[0], values[1]]] },
      { range: sheetRange(tab, `${idColumn}${row}`), values: [[values[20]]] }
    ];
    await log(`Writing ${JSON.stringify(tab)} row ${row}: ${JSON.stringify(data)}`);
    const written = await sheetsRequest(token, `${base}:batchUpdate`, { method: 'POST', body: JSON.stringify({ valueInputOption: 'RAW', data }) });
    await log(`Added ${JSON.stringify(tab)} row ${row}; confirmedRanges=${JSON.stringify(written.responses?.map(item => item.updatedRange) || [])}`);
    if (!metadataUpdated.has(tab)) {
      await updateSheetMetadata(token, base, tab, entry.type, uploadedBy);
      metadataUpdated.add(tab);
    }
    synced += 1;
  }
  return { enabled: true, synced };
}

export function googleSheetsBankingConfig() { return config(); }


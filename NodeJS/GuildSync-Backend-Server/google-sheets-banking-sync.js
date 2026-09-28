import crypto from 'node:crypto';
import fs from 'node:fs/promises';

const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

function config() {
  return {
    enabled: /^true$/i.test(String(process.env.GUILDSYNC_GOOGLE_SHEETS_ENABLED || '')),
    spreadsheetId: String(process.env.GUILDSYNC_GOOGLE_SHEETS_SPREADSHEET_ID || '').trim(),
    serviceAccountFile: String(process.env.GUILDSYNC_GOOGLE_SERVICE_ACCOUNT_FILE || '').trim(),
    serviceAccountJson: String(process.env.GUILDSYNC_GOOGLE_SERVICE_ACCOUNT_JSON || '').trim(),
    biweeklyTab: process.env.GUILDSYNC_GOOGLE_SHEETS_BIWEEKLY_TAB || 'bi-weekly raffle',
    fiftyFiftyTab: process.env.GUILDSYNC_GOOGLE_SHEETS_5050_TAB || '50/50'
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

async function sheetsRequest(token, url, init = {}) {
  const response = await fetch(url, { ...init, headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json', ...(init.headers || {}) } });
  if (!response.ok) throw new Error(`Google Sheets request failed (${response.status}).`);
  return response.json();
}

function tabFor(type, settings) { return type === 'biweekly' ? settings.biweeklyTab : type === 'monthly' ? settings.fiftyFiftyTab : ''; }
function sheetGoldAmount(amount) {
  const value = Number(amount) || 0;
  const marker = Math.abs(Math.trunc(value)) % 10;
  return marker === 1 || marker === 3 ? (value > marker ? value - marker : value) : value;
}

export async function syncBankingEntriesToGoogleSheets(entries, { log = console.error } = {}) {
  const settings = config();
  if (!settings.enabled || !entries?.length) return { enabled: settings.enabled, synced: 0 };
  if (!settings.spreadsheetId) throw new Error('Google Sheets is enabled but GUILDSYNC_GOOGLE_SHEETS_SPREADSHEET_ID is missing.');
  const account = await credentials(settings);
  const token = await accessToken(account);
  const base = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(settings.spreadsheetId)}/values`;
  let synced = 0;
  for (const entry of entries) {
    const tab = tabFor(entry.type, settings);
    if (!tab || !entry.eventId) continue;
    const existing = await sheetsRequest(token, `${base}/${encodeURIComponent(`${tab}!X6:X`)}?majorDimension=COLUMNS`);
    const ids = existing.values?.[0] || [];
    if (ids.some(value => String(value) === String(entry.eventId))) continue;
    const values = Array(21).fill('');
    values[0] = entry.displayName || '';
    values[1] = sheetGoldAmount(entry.amount);
    values[2] = Number(entry.ticketAmount) || 0;
    values[20] = String(entry.eventId);
    await sheetsRequest(token, `${base}/${encodeURIComponent(`${tab}!D6:X`)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`, { method: 'POST', body: JSON.stringify({ majorDimension: 'ROWS', values: [values] }) });
    synced += 1;
  }
  return { enabled: true, synced };
}

export function googleSheetsBankingConfig() { return config(); }

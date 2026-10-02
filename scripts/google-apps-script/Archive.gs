/* Deploy as a Web App: execute as Me, access Anyone. Enable the advanced Drive service.
 * Script Properties: ARCHIVE_SECRET, SOURCE_SPREADSHEET_ID, ARCHIVE_FOLDER_ID.
 * Copies/verifies archives and trashes superseded same-name archives. Reset/replay remain in the backend.
 */
function doPost(e) {
  const diagnostic = { secrets: [] };
  try {
    return handleArchiveRequest(e, diagnostic);
  } catch (error) {
    let message = String(error && error.message || error);
    diagnostic.secrets.forEach(secret => {
      if (typeof secret === 'string' && secret) message = message.split(secret).join('[redacted]');
    });
    message = message.slice(0, 1000);
    console.error('GuildSync archive: ' + message);
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function handleArchiveRequest(e, diagnostic) {
  const json = value => ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
  const properties = PropertiesService.getScriptProperties();
  let request;
  try { request = JSON.parse(e.postData.contents); } catch (_) { throw new Error('GuildSync archive: Invalid JSON request'); }
  if (!request || typeof request !== 'object' || Array.isArray(request)) throw new Error('GuildSync archive: Request must be a JSON object');
  const secret = properties.getProperty('ARCHIVE_SECRET');
  diagnostic.secrets.push(secret, request.secret);
  const sourceId = properties.getProperty('SOURCE_SPREADSHEET_ID');
  const folderId = properties.getProperty('ARCHIVE_FOLDER_ID');
  // Report validation failures without logging credentials or request contents.
  const problems = [];
  if (!secret) problems.push('ARCHIVE_SECRET property is missing');
  else if (request.secret !== secret) problems.push('Backend secret does not match ARCHIVE_SECRET');
  if (!sourceId) problems.push('SOURCE_SPREADSHEET_ID property is missing');
  else if (request.sourceId !== sourceId) problems.push('Backend spreadsheet ID does not match SOURCE_SPREADSHEET_ID');
  if (!folderId) problems.push('ARCHIVE_FOLDER_ID property is missing');
  if (!['archive', 'verify'].includes(request.action)) problems.push('Unsupported request action');
  if (!/^[a-f0-9]{32}:(raffle-rollover-\d+|raffle-manual-[a-f0-9-]+)$/.test(request.key || '')) problems.push('Invalid archive request key');
  if (problems.length) throw new Error('GuildSync archive: ' + problems.join('; '));
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(30000)) throw new Error('GuildSync archive: Another archive operation holds the lock; retry later');
  try {
    const escape = value => String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    let archive;
    if (request.action === 'archive') {

      const found = Drive.Files.list({ q: "'" + escape(folderId) + "' in parents and trashed=false and appProperties has { key='guildsyncArchive' and value='" + escape(request.key) + "' }",
        fields: 'files(id)', pageSize: 100 });
      if ((found.files || []).length > 1) throw new Error('Multiple archives found for closure');
      archive = found.files && found.files[0];
      if (!archive) {
        const sourceBook = SpreadsheetApp.openById(sourceId);
        const date = raffleSheetDate(sourceBook, request.biweeklyTab || 'bi-weekly raffle', 'R7', 'working spreadsheet');
        console.log("Archiving as '" + raffleArchiveName(date) + "'");
        archive = Drive.Files.copy({ name: raffleArchiveName(date), parents: [folderId],
          appProperties: { guildsyncArchive: request.key, guildsyncSource: sourceId } }, sourceId, { fields: 'id' });
      }
    } else archive = { id: request.archiveId };
    if (!archive.id || archive.id === sourceId) throw new Error('Invalid copy ID');
    const file = Drive.Files.get(archive.id, { fields: 'id,name,trashed,mimeType,parents,appProperties' });
    if (file.trashed || file.mimeType !== 'application/vnd.google-apps.spreadsheet' ||
        !file.parents || file.parents.indexOf(folderId) < 0 || file.appProperties?.guildsyncArchive !== request.key ||
        file.appProperties?.guildsyncSource !== sourceId) throw new Error('Archive verification failed');
    // Reconcile sharing on every retry before declaring the archive ready.
    const list = id => {
      let permissions = [], pageToken;
      do {
        const page = Drive.Permissions.list(id, { fields: 'nextPageToken,permissions(id,type,role,emailAddress,domain,allowFileDiscovery,deleted)', pageToken: pageToken });
        permissions = permissions.concat(page.permissions || []); pageToken = page.nextPageToken;
      } while (pageToken);
      return permissions;
    };
    const desired = list(sourceId).filter(p => !p.deleted && p.role !== 'owner');
    let existing = list(archive.id);
    desired.forEach(p => {
      const match = existing.find(q => q.type === p.type && (p.type === 'anyone' || (p.type === 'domain' ? q.domain === p.domain : q.emailAddress === p.emailAddress)));
      const permission = { type: p.type, role: p.role };
      if (p.emailAddress) permission.emailAddress = p.emailAddress;
      if (p.domain) permission.domain = p.domain;
      if (p.allowFileDiscovery !== undefined) permission.allowFileDiscovery = p.allowFileDiscovery;
      if (!match) Drive.Permissions.create(permission, archive.id, { sendNotificationEmail: false });
      else if (match.role !== p.role || match.allowFileDiscovery !== p.allowFileDiscovery) {
        const update = { role: p.role };
        if (p.allowFileDiscovery !== undefined) update.allowFileDiscovery = p.allowFileDiscovery;
        Drive.Permissions.update(update, archive.id, match.id);
      }
    });
    existing = list(archive.id);
    if (!desired.every(p => existing.some(q => q.type === p.type && q.role === p.role && q.allowFileDiscovery === p.allowFileDiscovery &&
        (p.type === 'anyone' || (p.type === 'domain' ? q.domain === p.domain : q.emailAddress === p.emailAddress))))) throw new Error('Archive sharing verification failed');
    // Verify the file can actually be opened as a spreadsheet before allowing reset.
    const book = SpreadsheetApp.openById(archive.id);
    // Full result capture is paused; temporarily read selected cells for diagnostics.
    const name = raffleArchiveName(raffleSheetDate(book, request.biweeklyTab || 'bi-weekly raffle', 'R7'));

    if (file.name !== name) throw new Error('Archive date/name mismatch; finish legacy recovery before upgrading.');
    const diagnosticCells = readArchiveDiagnosticCells(book, request.biweeklyTab || 'bi-weekly raffle', request.fiftyFiftyTab || '50/50');
    // The verified replacement exists before any previous same-name file is trashed.
    // Gather every page before mutating the folder listing.
    let pageToken;
    const superseded = [];
    do {
      const page = Drive.Files.list({
        q: "'" + escape(folderId) + "' in parents and trashed=false and name='" + escape(name) +
          "' and mimeType='application/vnd.google-apps.spreadsheet'",
        fields: 'nextPageToken,files(id)', pageToken: pageToken, pageSize: 100
      });
      (page.files || []).forEach(item => { if (item.id !== archive.id && item.id !== sourceId) superseded.push(item.id); });
      pageToken = page.nextPageToken;
    } while (pageToken);
    superseded.forEach(id => Drive.Files.update({ trashed: true }, id));
    return json({ ok: true, sourceId: sourceId, key: request.key, archiveId: archive.id, name: name, diagnosticCells: diagnosticCells });
  } finally { lock.releaseLock(); }
}


function formatArchiveDate(value, tab, address, workbook) {
  const location = workbook + ' / ' + tab + ' / ' + address;
  // Raffle calendar dates are defined in Eastern time, including daylight saving.
  const timeZone = 'America/New_York';
  const detail = 'type=' + typeof timeZone + ', value=' + JSON.stringify(timeZone);
  try { return Utilities.formatDate(value, timeZone, 'yyyy-MM-dd'); }
  catch (error) { throw new Error(location + ': Utilities.formatDate failed; ' + detail + ': ' + String(error.message || error)); }
}

function raffleSheetDate(book, tab, address, workbook) {
  const sheet = book.getSheetByName(tab);
  if (!sheet) throw new Error('Missing raffle tab: ' + tab);
  let value;
  // R7/P7 are calendar dates, not instants. Preserve the date the sheet displays.
  try { value = sheet.getRange(address).getDisplayValue(); }
  catch (_) { throw new Error('Unable to read raffle date: ' + tab + ' ' + address); }
  const match = /^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/.exec(String(value || '').trim());
  if (!match) throw new Error('Cannot archive: the raffle sheet has no valid draw date. Enter the draw date and try again.');
  const year = match[3].length === 2 ? 2000 + Number(match[3]) : Number(match[3]);
  const date = new Date(Date.UTC(year, Number(match[1])-1, Number(match[2])));
  if (date.getUTCFullYear() !== year || date.getUTCMonth()+1 !== Number(match[1]) || date.getUTCDate() !== Number(match[2])) {
    throw new Error('Cannot archive: the raffle sheet has no valid draw date. Enter the draw date and try again.');
  }
  return date.toISOString().slice(0,10);
}
function raffleArchiveName(date) {
  return date.slice(2,4) + date.slice(5,7) + date.slice(8,10) + ' Raffle';
}
function readRaffleArchive(book, biweeklyTab, fiftyFiftyTab, eligibleMonthlyDates) {
  const result = {};
  const columnName = column => {
    let name = '';
    while (column) { column--; name = String.fromCharCode(65 + column % 26) + name; column = Math.floor(column / 26); }
    return name;
  };
  [
    ['biweekly', biweeklyTab, 'R7', ['Q33:Q48','O55','S31:S50','J5:K254']],
    ['monthly', fiftyFiftyTab, 'P7', ['L23','J26']]
  ].forEach(([type, tab, dateCell, ranges]) => {
    let date;
    try { date = raffleSheetDate(book, tab, dateCell); }
    catch (error) {
      if (type !== 'monthly') throw error;
      console.log('Skipping 50/50 results: unable to read ' + tab + ' ' + dateCell + '; existing result fields will be preserved.');
      result.monthly = { skipped: true, reason: 'unreadable-date' };
      return;
    }
    if (type === 'monthly' && (!Array.isArray(eligibleMonthlyDates) || !eligibleMonthlyDates.includes(date) || date > result.biweekly.date)) {
      console.log('Skipping 50/50 results: ' + tab + ' ' + dateCell + ' is not an eligible completed raffle.');
      result.monthly = { skipped: true, date: date, reason: 'not-completed' };
      return;
    }
    const sheet = book.getSheetByName(tab);
    const cells = [];
    ranges.forEach(address => {
      console.log('Reading raffle results: ' + tab + ' ' + address);
      let range, values, formulas;
      try { range = sheet.getRange(address); values = range.getValues(); formulas = range.getFormulas(); }
      catch (_) {
        throw new Error('Unable to read ' + tab + ' ' + address);
      }
      const before = cells.length;
      values.forEach((row, r) => row.forEach((value, c) => {
        const formula = formulas[r] && formulas[r][c];
        if (value === '' && !formula) return;
        const cellAddress = columnName(range.getColumn()+c)+(range.getRow()+r);
        if (value instanceof Date) value = formatArchiveDate(value, tab, cellAddress, 'archive copy');
        cells.push({ address: cellAddress, value: value,
          ...(formula ? { formula: formula } : {}) });
      }));
      console.log('Read raffle results: ' + tab + ' ' + address + '; captured cells=' + (cells.length-before));
    });
    result[type] = { date: date, cells: cells };
  });
  return result;
}


// Temporary read-only probe: do not persist these values or restore result capture.
function readArchiveDiagnosticCells(book, biweeklyTab, fiftyFiftyTab) {
  const cells = [];
  [
    [biweeklyTab, 'Q33:Q52', 33, ['Q']],
    [biweeklyTab, 'J5:K254', 5, ['J', 'K']],
    [biweeklyTab, 'O55', 55, ['O']],
    [fiftyFiftyTab, 'P25', 25, ['P']],
    [fiftyFiftyTab, 'M28', 28, ['M']]
  ].forEach(([tab, address, firstRow, columns]) => {
    const sheet = book.getSheetByName(tab);
    if (!sheet) throw new Error('Missing raffle tab: ' + tab);
    let rows;
    try { rows = sheet.getRange(address).getValues(); }
    catch (_) { throw new Error('Unable to read archive diagnostic cells: ' + tab + ' ' + address); }
    rows.forEach((row, r) => row.forEach((value, c) => {
      if (value == null || String(value).length === 0) return;
      cells.push({ tab: tab, cell: columns[c] + (firstRow + r), value: String(value) });
    }));
  });
  return cells;
}

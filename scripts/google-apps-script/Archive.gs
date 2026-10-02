/* Deploy as a Web App: execute as Me, access Anyone. Enable the advanced Drive service.
 * Script Properties: ARCHIVE_SECRET, SOURCE_SPREADSHEET_ID, ARCHIVE_FOLDER_ID.
 * Copies/verifies archives and trashes superseded same-name archives. Reset/replay remain in the backend.
 */
function doPost(e) {
  const json = value => ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
  const properties = PropertiesService.getScriptProperties();
  let request;
  try { request = JSON.parse(e.postData.contents); } catch (_) { throw new Error('GuildSync archive: Invalid JSON request'); }
  if (!request || typeof request !== 'object' || Array.isArray(request)) throw new Error('GuildSync archive: Request must be a JSON object');
  const secret = properties.getProperty('ARCHIVE_SECRET');
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
        const date = raffleSheetDate(sourceBook, request.biweeklyTab || 'bi-weekly raffle', 'R7');
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
    const results = readRaffleArchive(book, request.biweeklyTab || 'bi-weekly raffle', request.fiftyFiftyTab || '50/50');
    const name = raffleArchiveName(results.biweekly.date);
    if (file.name !== name) throw new Error('Archive date/name mismatch; finish legacy recovery before upgrading.');
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
    return json({ ok: true, sourceId: sourceId, key: request.key, archiveId: archive.id, name: name, results: results });
  } catch (error) {
    console.error(String(error));
    throw error;
  } finally { lock.releaseLock(); }
}


function raffleSheetDate(book, tab, address) {
  const sheet = book.getSheetByName(tab);
  if (!sheet) throw new Error('Missing raffle tab: ' + tab);
  const value = sheet.getRange(address).getValue();
  if (value instanceof Date && !isNaN(value.getTime())) {
    return Utilities.formatDate(value, book.getSpreadsheetTimeZone(), 'yyyy-MM-dd');
  }
  const match = /^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/.exec(String(value || '').trim());
  if (!match) throw new Error('Invalid raffle date in ' + tab + ' ' + address);
  const year = match[3].length === 2 ? 2000 + Number(match[3]) : Number(match[3]);
  const date = new Date(Date.UTC(year, Number(match[1])-1, Number(match[2])));
  if (date.getUTCFullYear() !== year || date.getUTCMonth()+1 !== Number(match[1]) || date.getUTCDate() !== Number(match[2])) {
    throw new Error('Invalid raffle date in ' + tab + ' ' + address);
  }
  return date.toISOString().slice(0,10);
}
function raffleArchiveName(date) {
  return date.slice(2,4) + date.slice(5,7) + date.slice(8,10) + ' Raffle';
}
function readRaffleArchive(book, biweeklyTab, fiftyFiftyTab) {
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
    const sheet = book.getSheetByName(tab);
    const cells = [];
    ranges.forEach(address => {
      const range = sheet.getRange(address), values = range.getValues(), formulas = range.getFormulas();
      values.forEach((row, r) => row.forEach((value, c) => {
        const formula = formulas[r] && formulas[r][c];
        if (value === '' && !formula) return;
        if (value instanceof Date) value = Utilities.formatDate(value, book.getSpreadsheetTimeZone(), 'yyyy-MM-dd');
        cells.push({ address: columnName(range.getColumn()+c)+(range.getRow()+r), value: value,
          ...(formula ? { formula: formula } : {}) });
      }));
    });
    result[type] = { date: raffleSheetDate(book, tab, dateCell), cells: cells };
  });
  return result;
}

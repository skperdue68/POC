export const RESULT_RANGES = {
  biweekly: ['Q33:Q52', 'O55', 'S31:S50', 'J5:K254'],
  monthly: ['L23', 'J26', 'P25', 'M28']
};
export const RAFFLE_RESULTS_SCHEMA = `CREATE TABLE IF NOT EXISTS guildsync_raffle_results (
  raffle_type VARCHAR(16) NOT NULL,
  period_start BIGINT NOT NULL,
  period_end BIGINT NOT NULL,
  source_spreadsheet_id VARCHAR(255) NOT NULL,
  archive_id VARCHAR(255) NOT NULL,
  cells_json LONGTEXT NOT NULL,
  captured_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (raffle_type, period_start, period_end)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`;

function location(address) {
  const match = /^([A-Z]+)([1-9][0-9]*)$/.exec(address || '');
  if (!match) throw Error('Invalid raffle result cell.');
  return { column: [...match[1]].reduce((n, c) => n * 26 + c.charCodeAt(0) - 64, 0) - 1, row: Number(match[2]) - 1 };
}
export function resultRequests(sheetId, type, cells = [], restoreFormulas = false) {
  if (!RESULT_RANGES[type] || !Array.isArray(cells)) throw Error('Invalid raffle result cells.');
  return cells.map(cell => {
    const at = location(cell.address);
    const allowed = RESULT_RANGES[type].some(range => {
      const [first, last = first] = range.split(':');
      const a = location(first), b = location(last);
      return at.row >= a.row && at.row <= b.row && at.column >= a.column && at.column <= b.column;
    });
    if (!allowed || !['string','number','boolean'].includes(typeof cell.value) ||
        (typeof cell.value === 'number' && !Number.isFinite(cell.value))) throw Error('Invalid raffle result cell/value.');
    const value = restoreFormulas && cell.formula ? { formulaValue: cell.formula } :
      typeof cell.value === 'number' ? { numberValue: cell.value } :
      typeof cell.value === 'boolean' ? { boolValue: cell.value } : { stringValue: cell.value };
    if (cell.formula && (typeof cell.formula !== 'string' || !cell.formula.startsWith('='))) throw Error('Invalid result formula.');
    return { updateCells: { start: { sheetId, rowIndex: at.row, columnIndex: at.column },
      rows: [{ values: [{ userEnteredValue: value }] }], fields: 'userEnteredValue' } };
  });
}
export function resultClearRequests(sheetId, type) {
  return RESULT_RANGES[type].map(range => {
    const [first, last = first] = range.split(':'); const a = location(first), b = location(last);
    return { updateCells: { range: { sheetId, startRowIndex:a.row,endRowIndex:b.row+1,startColumnIndex:a.column,endColumnIndex:b.column+1 }, fields:'userEnteredValue' } };
  });
}
function endingPeriod(date, type, select) {
  if (!/^20[0-9]{2}-[0-9]{2}-[0-9]{2}$/.test(date || '')) throw Error('Invalid spreadsheet draw date.');
  const d = new Date(date + 'T12:00:00Z');
  if (!Number.isFinite(d.getTime()) || d.toISOString().slice(0,10) !== date) throw Error('Invalid spreadsheet draw date.');
  // Use the prior local calendar date: selecting the draw date itself picks the NEW period.
  d.setUTCDate(d.getUTCDate()-1);
  const lookup = d.toISOString().slice(5,7)+d.toISOString().slice(8,10)+d.toISOString().slice(2,4);
  const period = select(lookup).raffles.find(item => item.type === type);
  const parts = new Intl.DateTimeFormat('en-CA',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(period.end*1000));
  const part = kind => parts.find(item=>item.type===kind).value;
  if (part('year')+'-'+part('month')+'-'+part('day') !== date) throw Error('Spreadsheet draw date does not match the raffle schedule.');
  return period;
}
export function resultPeriods(results, select, now = Date.now()/1000) {
  if (!results?.biweekly || !results?.monthly) throw Error('Archive is missing raffle result data; update the Apps Script deployment.');
  const biweekly = endingPeriod(results.biweekly.date, 'biweekly', select);
  const monthly = results.monthly.skipped === true ? null : endingPeriod(results.monthly.date, 'monthly', select);
  const items = [{period:biweekly,cells:results.biweekly.cells}];
  if (monthly && monthly.end <= biweekly.end && monthly.end <= now) items.push({period:monthly,cells:results.monthly.cells});
  for (const item of items) resultRequests(0,item.period.type,item.cells);
  return items;
}
export async function saveRaffleResults(db, items, archiveId, sourceId) {
  await db.beginTransaction();
  try {
    for (const {period,cells} of items) {
      await saveFormulaTemplates(db, {[period.type]: cells.filter(cell=>cell.formula)}, sourceId);
      await db.execute(`INSERT INTO guildsync_raffle_results
        (raffle_type,period_start,period_end,source_spreadsheet_id,archive_id,cells_json)
        VALUES (?,?,?,?,?,?) ON DUPLICATE KEY UPDATE
        source_spreadsheet_id=VALUES(source_spreadsheet_id),archive_id=VALUES(archive_id),cells_json=VALUES(cells_json),captured_at=CURRENT_TIMESTAMP`,
        [period.type,period.start,period.end,sourceId,archiveId,JSON.stringify(cells)]);
    }
    await db.commit();
  } catch(error) { await db.rollback(); throw error; }
}
export async function loadRaffleResults(db, periods) {
  const result = {};
  for(const period of periods) {
    const [rows] = await db.execute('SELECT cells_json FROM guildsync_raffle_results WHERE raffle_type=? AND period_start=? AND period_end=?',
      [period.type,period.start,period.end]);
    result[period.type] = rows.length ? JSON.parse(rows[0].cells_json) : [];
    resultRequests(0,period.type,result[period.type]);
  }
  return result;
}


// Read formulas only in managed result ranges so reset/load preserve calculated template fields.
export async function readResultFormulas(request, token, url, settings) {
  const types = ['biweekly','monthly'];
  const ranges = types.flatMap(type => RESULT_RANGES[type].map(range =>
    "'" + (type === 'biweekly' ? settings.biweeklyTab : settings.fiftyFiftyTab).replace(/'/g, "''") + "'!" + range));
  const data = await request(token, url + '/values:batchGet?valueRenderOption=FORMULA&' +
    ranges.map(range => 'ranges=' + encodeURIComponent(range)).join('&'));
  const result = {biweekly:[],monthly:[]};
  let index=0;
  for (const type of types) for (const range of RESULT_RANGES[type]) {
    const at = location(range.split(':')[0]);
    const values = data.valueRanges?.[index++]?.values || [];
    values.forEach((row,r)=>row.forEach((value,c)=>{
      if (typeof value !== 'string' || !value.startsWith('=')) return;
      let n=at.column+c+1, column='';
      while(n) { n--; column=String.fromCharCode(65+n%26)+column; n=Math.floor(n/26); }
      result[type].push({address:column+(at.row+r+1),value:'',formula:value});
    }));
  }
  return result;
}

export const RAFFLE_FORMULAS_SCHEMA = `CREATE TABLE IF NOT EXISTS guildsync_raffle_result_formulas (
  source_spreadsheet_id VARCHAR(255) NOT NULL,
  raffle_type VARCHAR(16) NOT NULL,
  cell_address VARCHAR(16) NOT NULL,
  formula TEXT NOT NULL,
  PRIMARY KEY (source_spreadsheet_id,raffle_type,cell_address)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`;
export async function loadFormulaTemplates(db, sourceId) {
  const [rows] = await db.execute('SELECT raffle_type,cell_address,formula FROM guildsync_raffle_result_formulas WHERE source_spreadsheet_id=?',[sourceId]);
  const result={biweekly:[],monthly:[]};
  for(const row of rows) {
    const cell={address:row.cell_address,value:'',formula:row.formula};
    resultRequests(0,row.raffle_type,[cell],true);
    result[row.raffle_type].push(cell);
  }
  return result;
}

export async function saveFormulaTemplates(db, templates, sourceId) {
  for(const [type,cells] of Object.entries(templates)) resultRequests(0,type,cells,true);
  for(const [type,cells] of Object.entries(templates)) for(const cell of cells) {
    if (!cell.formula) continue;
    await db.execute(
      'INSERT INTO guildsync_raffle_result_formulas (source_spreadsheet_id,raffle_type,cell_address,formula) VALUES (?,?,?,?) ON DUPLICATE KEY UPDATE formula=VALUES(formula)',
      [sourceId,type,cell.address,cell.formula]);
  }
}


// Ask the existing resolver for each month; monthly raffles are not a fixed length.
export function completedMonthlyDrawDates(select, now) {
  const dates = new Set();
  const currentYear = new Date(now * 1000).getUTCFullYear();
  const formatter = new Intl.DateTimeFormat('en-US', {timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit'});
  for (let year=2000; year<=Math.min(currentYear,2099); year++) for(let month=1;month<=12;month++) {
    const lookup = String(month).padStart(2,'0')+'01'+String(year).slice(-2);
    const period = select(lookup).raffles.find(item=>item.type==='monthly');
    if (period.end > now) continue;
    const parts = formatter.formatToParts(new Date(period.end*1000));
    const part = type => parts.find(item=>item.type===type).value;
    dates.add(part('year')+'-'+part('month')+'-'+part('day'));
  }
  return [...dates];
}

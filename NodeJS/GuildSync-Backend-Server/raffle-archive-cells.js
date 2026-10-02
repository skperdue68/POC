export const ARCHIVE_CELLS_SCHEMA = `CREATE TABLE IF NOT EXISTS guildsync_raffle_archive_cells (
  archive_id VARCHAR(255) NOT NULL,
  raffle_type VARCHAR(16) NOT NULL,
  draw_date DATE NOT NULL,
  source_spreadsheet_id VARCHAR(255) NOT NULL,
  sheet_tab VARCHAR(255) NOT NULL,
  cell_address VARCHAR(16) NOT NULL,
  cell_value LONGTEXT NOT NULL,
  captured_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (archive_id, raffle_type, cell_address),
  INDEX idx_raffle_archive_draw (raffle_type, draw_date)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`;
export async function saveArchiveCells(db, result, archiveId, sourceId, settings) {
  if (!Array.isArray(result.diagnosticCells) || !result.drawDates) throw Error('Archive cell metadata is missing; update the Apps Script deployment.');
  const validDate = date => {
    if (!/^20[0-9]{2}-[0-9]{2}-[0-9]{2}$/.test(date || '')) return false;
    const value = new Date(date + 'T12:00:00Z');
    return Number.isFinite(value.getTime()) && value.toISOString().slice(0,10) === date;
  };
  if (!validDate(result.drawDates.biweekly)) throw Error('Archive draw date metadata is missing or invalid; reset remains paused.');
  const cells = result.diagnosticCells.map(item => {
    const type = item.tab === settings.biweeklyTab ? 'biweekly' : item.tab === settings.fiftyFiftyTab ? 'monthly' : null;
    const allowed = type === 'biweekly' ? /^(?:Q(?:3[3-9]|4[0-9]|5[0-2])|[JK](?:[5-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-4])|O55)$/ : /^(?:P25|M28)$/;
    const date = result.drawDates[type];
    if (!type || !allowed.test(item.cell) || typeof item.value !== 'string' || !item.value.length || !validDate(date)) throw Error('Invalid archive cell or draw date; reset remains paused.');
    return [archiveId,type,date,sourceId,item.tab,item.cell,item.value];
  });
  await db.beginTransaction();
  try {
    for (const params of cells) await db.execute(`INSERT INTO guildsync_raffle_archive_cells
      (archive_id,raffle_type,draw_date,source_spreadsheet_id,sheet_tab,cell_address,cell_value)
      VALUES (?,?,?,?,?,?,?) ON DUPLICATE KEY UPDATE draw_date=VALUES(draw_date),cell_value=VALUES(cell_value),captured_at=CURRENT_TIMESTAMP`, params);
    await db.commit();
  } catch (error) { await db.rollback(); throw error; }
  return cells.length;
}

CREATE TABLE IF NOT EXISTS guildsync_raffle_archive_cells (
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
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

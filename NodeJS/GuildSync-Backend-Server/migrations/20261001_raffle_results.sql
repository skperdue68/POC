CREATE TABLE IF NOT EXISTS guildsync_raffle_results (
  raffle_type VARCHAR(16) NOT NULL,
  period_start BIGINT NOT NULL,
  period_end BIGINT NOT NULL,
  source_spreadsheet_id VARCHAR(255) NOT NULL,
  archive_id VARCHAR(255) NOT NULL,
  cells_json LONGTEXT NOT NULL,
  captured_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (raffle_type, period_start, period_end)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS guildsync_raffle_result_formulas (
  source_spreadsheet_id VARCHAR(255) NOT NULL,
  raffle_type VARCHAR(16) NOT NULL,
  cell_address VARCHAR(16) NOT NULL,
  formula TEXT NOT NULL,
  PRIMARY KEY (source_spreadsheet_id,raffle_type,cell_address)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

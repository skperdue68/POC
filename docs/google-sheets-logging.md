Google Sheets diagnostics are emitted by the GuildSync backend, not the Discord process.
They go to stdout and `NodeJS/GuildSync-Backend-Server/logs/google-sheets.log`.
Override the file location with the backend environment variable
`GUILDSYNC_GOOGLE_SHEETS_LOG_FILE` (absolute, or relative to the backend directory).
The backend needs write permission to this location.

Logs include export start, the first eight returned D-column values, selected row,
outgoing D/E and X values, and the ranges Google reports updating.
These logs contain player names and transaction details; store them privately.

Ticket entries on both sheets scan from D5, writing name/gold to D/E and ID to X.
Zero-ticket bi-weekly donations scan M62, writing name/gold to M/N and ID to Y.
Zero-ticket 50/50 donations scan K34, writing name/gold to K/L and ID to Y.
Each section uses its name column's first blank displayed cell; other cells and
formulas are preserved. Other transactions are not exported.
Manual entries append their stored note in parentheses after the name.
Both sheets update N3 with the authenticated uploader followed by (GuildSync),
and N4 with Eastern time, only after a successful entry write.

This update does not restore formulas or relocate entries from earlier exports.


Google Sheets diagnostics are emitted by the GuildSync backend, not the Discord process.
They go to stdout and `NodeJS/GuildSync-Backend-Server/logs/google-sheets.log`.
Override the file location with the backend environment variable
`GUILDSYNC_GOOGLE_SHEETS_LOG_FILE` (absolute, or relative to the backend directory).
The backend needs write permission to this location.

Logs include export start, the first eight returned D-column values, selected row,
outgoing D/E and X values, and the ranges Google reports updating.
These logs contain player names and transaction details; store them privately.

Bi-weekly scanning starts at D6; 50/50 scanning starts at D5. The first blank
displayed D value is selected. Hidden columns do not alter the explicit D/E/X
addresses. Only D/E and X are written; F through W are preserved.
Metadata remains N4:N5 for bi-weekly and L3:L4 for 50/50 after a successful write.

This update does not restore formulas or relocate entries from earlier exports.


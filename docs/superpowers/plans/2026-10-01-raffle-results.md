# Raffle result snapshots implementation plan

Approved scope: create/verify new archive before trashing same-name old copies; preserve unfinished 50/50. Execute inline using TDD.

1. Add failing tests for sparse result capture, raffle identity from draw dates, database upserts, and exact restore requests.
2. Add raffle-result snapshot schema and idempotent SQL migration; connect setup and period-specific load.
3. Have Apps Script name copies from archived Bi-Weekly R7, return result cells/date metadata and replace only same-folder names after verification.
4. Persist archive metadata and snapshots before reset, maintain retry identity, preserve unfinished monthly results; restore saved fields with load.
5. Rename registration/dispatch and commands to gsraffle load/reset/archive; remove cell details from reply.
6. Run all backend/bot tests, inspect diffs, review failure recovery, update deployment docs and publish branch/PR.

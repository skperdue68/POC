# Reports and Admin configuration implementation

Approved scope: collapsible bonus and administrator configuration sections in both clients; save explicit database overrides or delete them to restore environment defaults; administrator authorization; safe live refresh; documentation and feature PR. Primary checkout stays on master.

Architecture: an allowlisted configuration catalog and transactional revisioned record in the existing startup-created guildsync_settings table. Backend defaults and authenticated bot defaults remain distinct. Apply overrides only to the allowlist, preserving original environment defaults. Bot refresh drains active workers before restarting; persisted deliveries keep their original destination and content. Pending rollover deadlines remain unchanged. No credentials, deployment settings or paths are exposed.

Tasks:
1. Configuration catalog/store/socket authorization and revision validation. Tests for unknown keys, invalid inputs, defaults, resets, stale saves and bot reporting.
2. Backend and bot live application, rollover lifecycle, pending delivery preservation, bonus policy resets. Tests exercise existing delivery and rollover recovery.
3. Matching web/desktop accordion and configuration UI, draft preservation, source labels, save/reset behavior, receipt preview. Build both clients and update served assets.
4. Documentation, full tests, independent final review, fixes, commit and PR.

Review focus: unauthorized configuration access, secret exposure, resets accidentally saving defaults, stale saves, workers overlapping on refresh, pending notification reconciliation, disabling automation, historical bonus policy preservation, frontend parity and unsaved drafts.

Validation: node --test in backend and bot; frontend builds; git diff --check; syntax checks. Database/Discord integration is verified with isolated doubles; no production messages or sheet mutations during tests.

## Completion evidence

All four tasks are complete. Full suite: 252/252 tests pass. Desktop and web Vite builds pass; served web assets match web/dist. Headless Edge verified exclusive accordion opening, unsaved draft retention, Save override, deferred reset, and Save deletion. Backend/bot syntax and diff whitespace checks pass.

Independent review identified three P2 issues. Each was reproduced with a failing regression test and fixed in one pass: stale workers on reconnect (including updates arriving during refresh), paused promotion notification retries, and uploads queued after disabling ordinary sheet writes. The full suite passes after these fixes.

Operational decisions retained after review: active deliveries finish with their recorded snapshot rather than being interrupted (changes may wait for them); explicit admin sheet commands remain available when ordinary writes are disabled (operators can still modify sheets); an empty archive channel list pauses pending reconciliation (delivery waits until a destination is configured). These behaviors are documented in the operator guide. No deferred minor findings.


## Follow-up user feedback

Higher-rank linked members (Soldiers, Capo, Caporegime/Caporegieme, Consigliere, Kingpin and recognized plurals) receive only Gangsters cleanup. Existing roles are retained, no Associates role is added, and no misleading promotion notice is sent. Removal retry tests cover uncertain acknowledgements and permissions without requiring the higher member or Associates role to be editable.

Default reset labels become Return to default. Selected and default values align; booleans use Enabled/Disabled consistently, and delivery-mode defaults use the same display labels as their selector. Storage and save-only deletion semantics remain unchanged. Both clients and documentation are updated.
Follow-up validation: 258/258 tests pass; both production frontend builds pass; headless Edge confirms aligned default values, consistent Enabled/Disabled labels, and save-only Return to default behavior.

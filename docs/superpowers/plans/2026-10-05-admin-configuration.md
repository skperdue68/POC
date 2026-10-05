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

# Discord-only voice authentication

Approved scope: GuildSync Viewers may use voice mute when permitted by Discord roles. Standalone Discord users require no GuildSync user approval. Standalone identities must not appear in GuildSync account management or grant GuildSync access. Later ordinary GuildSync login still creates a pending account normally.

1. Add an isolated voice identity/session service with additive startup tables, voice-only JWT audience/scope, expiry, verification and revocation. Test that only voice tables are used and GuildSync tokens cannot cross audiences.
2. Add dedicated Discord voice login/session/logout endpoints using existing OAuth exchange and redirect checks without calling upsertLoginUser. Authenticate voice sockets separately and return from connection registration before any GuildSync handlers, rooms or data broadcasts. Revalidate sessions on voice requests; test isolation and denial of other events.
3. Permit approved GuildSync viewer/user/admin voice requests in the explicit role event allowlist and voice authorization, leaving all other Viewer permissions unchanged.
4. Update standalone login/verification/logout endpoints and socket auth source; remove GuildSync-role approval checks. Preserve Discord membership/rank enforcement in the bot and release/disconnect cleanup. Test frontend/native authorization changes.
5. Document tables, permissions, migration, later signup and deployment order. Run relevant backend, Go, frontend tests/builds; independent security review; fix findings. Publish separate backend and companion PRs without changing the user's master checkout.

# GuildSync

GuildSync connects ESO guild deposits, roster/application activity, Discord members, and raffle spreadsheets through a desktop client, web interface, backend database, and Discord bot.

## Help

- [User guide: commands and everyday workflows](docs/GuildSync-User-Guide.md)
- [Detailed help: systems, administration, environment settings, and troubleshooting](docs/GuildSync-Detailed-Help.md)
- [Administrator Configuration: saved overrides and live settings](docs/GuildSync-Admin-Configuration.md)
- [Google Apps Script archive setup and account migration](docs/google-apps-script-setup.md)
- [Discord member onboarding setup](NodeJS/GuildSync-Discord-Bot/MEMBER-ONBOARDING.md)
- [Release packaging and deployment](docs/GuildSync-1.2.7.md)

Discord `/gsr` is the raffle administration alias; ESO `/gsr` is the roster add-on command. The guides distinguish both command lists and their permissions. Optional Google exports, automatic rollover, raffle announcements, and member onboarding require their own settings; the database remains the durable record.

## Source layout

| Directory | Component |
| --- | --- |
| `ESO` | GuildSyncBanking, GuildSyncRoster, GuildSyncApplications add-ons |
| `GO/GuildSync-Frontend-Client` | Desktop app and local file/mail handling |
| `NodeJS/GuildSync-Backend-Server` | Backend, MariaDB initialization, web app, raffle/sheet coordination |
| `NodeJS/GuildSync-Discord-Bot` | Discord synchronization, slash commands, announcements, onboarding |
| `scripts/google-apps-script` | Owner-authorized archive web app |
| `Installer` | Platform packaging |

Run `node --test` from the repository root for JavaScript tests. Startup/deployment commands and desktop builds are documented in the detailed help and release guide. Keep actual `.env` files, service-account JSON, and production secrets out of source control.

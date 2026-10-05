# GuildSync Administrator Configuration

Use **Reports & Admin → Administrator Configuration** in the web or desktop client. Approved GuildSync users can view current values, defaults, and help text. GuildSync login role **admin** is required to edit, reset, or save Administrator Configuration and raffle bonus settings. Read-only users can refresh configuration and select a raffle to inspect its bonus policy. The bonus configuration has its own collapsible section. Opening another section or report closes the previous section; unsaved edits survive collapsing and background redraws.

## Saving, resetting, and defaults

Every operational setting shows its environment key, current effective value, source, and default. For fields with more than two choices, the selected value and default are aligned side by side (stacked on narrow screens). Two-choice dropdowns identify their default option directly. Boolean switches consistently display **Enabled** or **Disabled**; their underlying true/false storage is not shown as the default label. Edit fields directly without a checkbox. Values matching the default show **Default**; other values show **Overridden**. **Return to default** marks an override for deletion. Neither action applies until **Save Configuration** succeeds. **Discard edits and reload** discards pending edits and refreshes the server values. Concurrent saves are rejected if another administrator changed the configuration; reload before retrying.

Backend settings inherit the backend process environment; bot settings inherit the bot process environment. The authenticated bot reports only the listed operational defaults when it connects. Blank or missing optional environment settings use the application's documented fallback. The UI may show fallback defaults until the updated bot has connected. Deploy both backend and bot before using these controls. Each deployment should have one backend process and one bot worker instance; saved settings are global for this GuildSync deployment.

Changing `.env` still requires restarting its owning process to read that file. Removing an override restores the environment captured by the running process, not a newly edited file. Credentials, hostnames/ports, paths, working spreadsheet identity, and Apps Script deployment settings remain environment/deployment configuration and are never returned by these endpoints.

## Live application and durable operations

Backend configuration is applied at a serialized spreadsheet operation boundary, after any operation already in progress. Ordinary writes use the new enable switch on subsequent operations. Automatic rollover checks the saved switch on its next minute tick; both spreadsheet writes and rollover must be enabled for background ticks. Data received while writes are disabled remains in the database. Re-enabling resumes the coordinator's persisted state. Explicit administration commands remain available independently of the ordinary-write switch. Spreadsheet credentials and source settings must already be configured in `.env`.

A new rollover delay applies only to future holds. Existing holds retain their recorded ready-at deadline. Catchup/reset recovery preserves the archive identity and database state.

The connected bot drains its active workers before replacing them with the new configuration snapshot. It retains pending raffle delivery content and the original channel for reconciliation; archive delivery records retain their content and destination. Onboarding jobs retain the configuration captured at their first claim, while eligibility checks use current enabled/link/member state. Disabling a notification system pauses new delivery attempts after active work finishes; durable pending records remain available when it is re-enabled. A removed archive destination with a pending delivery is still reconciled when archive notifications are enabled with at least one destination.

An offline bot stops its workers on disconnect and resumes only after loading the saved configuration on reconnect. Pending promotion messages pause while the notification switch is disabled, and resume with their original destination/content after it is re-enabled. Queued ordinary uploads recheck the write switch at execution before any rollover or write work. Bot logs report successful operational configuration application or rejection. Saving does not certify Discord permissions or channel membership; failures appear in bot logs and retained delivery state.

## Supported settings

All settings below are optional environment settings. Existing configured destinations are still needed to enable notifications. IDs must be numeric Discord IDs; lists use commas. Booleans use true/false. Templates reject unknown placeholders and must not be blank; use default restoration instead.

### Member onboarding

| Environment key | Purpose | Default | Validation |
| --- | --- | --- | --- |
| GUILDSYNC_ONBOARDING_ENABLED | Enable member onboarding | false | boolean |
| GUILDSYNC_ONBOARDING_PROMOTION_ENABLED | Promote linked Gangsters to Associates | true | boolean |
| GUILDSYNC_ONBOARDING_PROMOTION_NOTIFY_ENABLED | Notify members after promotion | true | boolean |
| GUILDSYNC_ONBOARDING_REMINDER_ENABLED | Send unlinked member reminders | true | boolean |
| GUILDSYNC_ONBOARDING_REMINDER_HOURS | Reminder delay (hours) | 24 | 0.01–8760 |
| GUILDSYNC_ONBOARDING_CHANNEL_ID | Notification channel ID | Blank | id |
| GUILDSYNC_ONBOARDING_NOTIFICATION_MODE | Notification delivery | private_thread | private_thread / channel |
| GUILDSYNC_ONBOARDING_GANGSTER_ROLE_ID | Gangsters role ID (blank: discover by name) | Blank | id |
| GUILDSYNC_ONBOARDING_ASSOCIATE_ROLE_ID | Associates role ID (blank: discover by name) | Blank | id |
| GUILDSYNC_ONBOARDING_PROMOTION_MESSAGE | Promotion message | Built-in message (shown in UI) | Allowed placeholders; maximum 1800 characters |
| GUILDSYNC_ONBOARDING_REMINDER_MESSAGE | Unlinked member reminder | Built-in message (shown in UI) | Allowed placeholders; maximum 1800 characters |

### Raffle announcements

| Environment key | Purpose | Default | Validation |
| --- | --- | --- | --- |
| GUILDSYNC_RAFFLE_ANNOUNCEMENTS_ENABLED | Enable raffle announcements | true | boolean |
| GUILDSYNC_RAFFLE_CHANNEL_ID | Raffle announcement channel ID | Blank | id |
| GUILDSYNC_RAFFLE_INTERVAL_HOURS | Announcement interval (hours) | 48 | 0.01–8760 |
| GUILDSYNC_RAFFLE_BIWEEKLY_THRESHOLD | Bi-Weekly prize milestone (gold) | 200000 | 1–1000000000000 |
| GUILDSYNC_RAFFLE_MONTHLY_THRESHOLD | 50/50 prize milestone (gold) | 500000 | 1–1000000000000 |
| GUILDSYNC_RAFFLE_BONUS_REMINDER_HOURS | Bonus reminder lead hours (comma separated) | 1 | hours |
| GUILDSYNC_RAFFLE_SALES_CLOSE_REMINDER_HOURS | Sales closing reminder lead hours (comma separated) | 2 | hours |

### Archive notifications

| Environment key | Purpose | Default | Validation |
| --- | --- | --- | --- |
| GUILDSYNC_RAFFLE_ARCHIVE_ANNOUNCEMENTS_ENABLED | Enable archive notifications | true | boolean |
| GUILDSYNC_RAFFLE_ARCHIVE_CHANNEL_IDS | Archive notification channel IDs (comma separated) | Blank | ids |

### Spreadsheet automation

| Environment key | Purpose | Default | Validation |
| --- | --- | --- | --- |
| GUILDSYNC_GOOGLE_SHEETS_ENABLED | Enable ordinary spreadsheet writes | false | boolean |
| GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_ENABLED | Enable automatic raffle rollover | false | boolean |
| GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_DELAY_HOURS | Rollover delay (hours) | 4 | 0–8760 |

### Receipt messages

| Environment key | Purpose | Default | Validation |
| --- | --- | --- | --- |
| GUILDSYNC_DEPOSIT_MAIL_SUBJECT_TEMPLATE | Receipt subject | Built-in message (shown in UI) | Allowed placeholders; maximum 200 characters |
| GUILDSYNC_DEPOSIT_MAIL_BODY_TEMPLATE | Receipt body | Built-in message (shown in UI) | Allowed placeholders; maximum 10000 characters |


## Templates and bonus policies

Onboarding placeholders are `{mention}`, `{eso_name}`, `{associate_role}`, and `{hours}`. The bot restricts allowed mentions to the recipient. Unknown placeholders are rejected. Higher guild ranks (Soldiers, Capo, Caporegime, Consigliere, Kingpin, and recognized singular/plural aliases) receive Gangsters-role cleanup only: no Associates role is added and no Associate-promotion notification is sent. Other roles and existing Associates are preserved. Private-thread mode prefers a private thread and falls back to a public thread in the same channel when necessary; channel mode posts directly. Existing reminder enrollment cutoffs and one-time history are preserved when workers restart.

Receipt placeholders are listed beside each template. The example preview uses a fictional purchase with a 20% bonus. The backend always appends positive bonus information when a custom body omits `{bonus_block}`; 0% receipts omit that block. Already rendered/checked-out receipt records keep their existing text; newly checked-out receipts use the saved templates.

Bonus settings use their separate Save button. Restoring `.env` bonus defaults deletes `raffle_bonus_settings` and appends policy versions at the current time when rules change. Historical version records are retained, so completed raffles keep their policy. Removing a specific raffle override deletes only its `(raffle_type, sales_end)` row and returns that raffle to the saved policy version. The reset preview displays the inherited rules. A reset remains pending until saved and can be cancelled.

## Database and startup

The backend initializes `guildsync_settings` as part of existing database setup, then creates an initial `admin_configuration` record if missing and loads it before starting spreadsheet automation. Configuration values are validated, saved in a transaction under a row lock, and revisioned to prevent lost updates. No new table or manual SQL migration is needed.

Inspect the record with:

```sql
SELECT setting_key, value
FROM guildsync_settings
WHERE setting_key = 'admin_configuration';
```

The JSON contains `revision`, `overrides`, `botDefaults`, and the last bot-default report time. `overrides` holds only the allowlisted saved values. Resetting a field removes its key from this object. Bot defaults are the last allowlisted report from the authenticated bot, not a copy of its entire environment. Bonus default settings remain under `raffle_bonus_settings`; history is in `guildsync_raffle_bonus_versions` and individual changes in `guildsync_raffle_bonus_overrides`.

## Deployment

Deploy the backend and bot from the PR and restart each once to activate the new feature. The web bundle included in the repository contains the new controls. Build/distribute an updated desktop client to use the desktop controls. Subsequent saved operational overrides apply live. No Google Apps Script update or Discord slash-command redeployment is required for this change.

Screen refreshes preserve your position in Reports & Admin and other tab content. Returning an edited setting to its default value automatically marks it **Default** and removes the override when saved. Unsaved edits remain drafts until **Save Configuration** succeeds.

Two-choice configuration dropdowns mark the inherited choice with **(Default)**, for example **Enabled (Default)**. Select that option to return to the default; these fields have no reset button or override checkbox. Other fields retain **Return to default**. All edits still require **Save Configuration**, and changing choices preserves scrolling.

In **Raffle Bonus Tickets**, **Return to defaults** restores the full bonus configuration: Hours, Bonus %, and the enabled switch. Default rules restore both raffle types from their environment defaults; a selected raffle restores only that raffle’s inherited policy. The restored values are previewed and apply only after **Save Bonus Settings**. **Cancel default restoration** restores your previous draft. Scrolling is preserved during the preview.

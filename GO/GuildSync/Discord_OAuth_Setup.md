# GuildSync Discord OAuth setup

GuildSync now uses Discord OAuth2 authorization-code login through a local loopback callback.

## Discord Developer Portal

1. Open the Discord Developer Portal.
2. Create or open your GuildSync application.
3. Go to OAuth2.
4. Add this exact redirect URI:

   http://127.0.0.1:53682/callback

5. Copy the Client ID and Client Secret.

## Local GuildSync configuration

Use either environment variables:

```powershell
$env:GUILDSYNC_DISCORD_CLIENT_ID="your-client-id"
$env:GUILDSYNC_DISCORD_CLIENT_SECRET="your-client-secret"
$env:GUILDSYNC_DISCORD_REDIRECT_URI="http://127.0.0.1:53682/callback"
wails dev

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { sendRaffleAnnouncement } from './raffle-announcements.js';

export function parseArchiveChannels(value = '') {
  const ids = [...new Set(value.split(',').map(id => id.trim()).filter(Boolean))];
  if (ids.some(id => !/^\d+$/.test(id))) throw Error('Archive channel IDs must be comma-separated numeric IDs.');
  return ids;
}

export async function deliverArchives({ archives, channels, state, save, send }) {
  const errors = [];
  for (const archive of archives) {
    const content = archive.message || '**Raffle archive completed**\n' +
      '[' + archive.name + '](https://docs.google.com/spreadsheets/d/' + encodeURIComponent(archive.archiveId) + '/edit)\n' +
      'Both current raffle sheets have been reset and reloaded from the database. The current spreadsheet link is unchanged.';
    for (const channel of channels) {
      const key = channel + ':' + archive.archiveId;
      if (state[key]?.sent) continue;
      try {
        const reconcile = Boolean(state[key]);
        if (!state[key]) {
          state[key] = { createdAt: Date.now() / 1000 };
          await save(state);
        }
        await send(channel, content, {
          id: createHash('sha256').update(key).digest('hex').slice(0, 24),
          createdAt: state[key].createdAt, reconcile, content
        });
        state[key].sent = true;
        try { await save(state); } catch (error) { state[key].sent = false; throw error; }
      } catch (error) { errors.push(error); }
    }
  }
  if (errors.length) throw Error(errors.map(error => error.message).join('; '));
}

export function startArchiveAnnouncements(client, socket, log, env = process.env) {
  let channels;
  try { channels = parseArchiveChannels(env.GUILDSYNC_RAFFLE_ARCHIVE_CHANNEL_IDS); }
  catch (error) { log(error.message); return; }
  if (!channels.length) return;
  const statePath = path.resolve(fileURLToPath(new URL('../', import.meta.url)),
    env.GUILDSYNC_RAFFLE_ARCHIVE_STATE_FILE || 'data/raffle-archive-announcements.json');
  let running = false;
  const tick = async () => {
    if (running || !client.isReady() || !socket.connected) return;
    running = true;
    try {
      const result = await new Promise((resolve, reject) => {
        socket.timeout(30000).emit('guildsync:request-raffle-archives', {}, (error, result) =>
          error ? reject(error) : resolve(result));
      });
      if (!result?.ok || !Array.isArray(result.archives)) throw Error('Could not load completed raffle archives.');
      let state;
      try { state = JSON.parse(await fs.readFile(statePath, 'utf8')); }
      catch (error) { if (error.code !== 'ENOENT') throw error; state = {}; }
      if (!state || Array.isArray(state) || typeof state !== 'object') throw Error('Invalid archive delivery state.');
      await deliverArchives({ archives: result.archives, channels, state,
        save: async value => {
          await fs.mkdir(path.dirname(statePath), { recursive: true });
          await fs.writeFile(statePath + '.tmp', JSON.stringify(value), 'utf8');
          await fs.rename(statePath + '.tmp', statePath);
        },
        send: (channel, content, delivery) => sendRaffleAnnouncement(client, channel, env.DISCORD_GUILD_ID, null, delivery)
      });
    } catch (error) { log('Archive announcement failed: ' + error.message); }
    finally { running = false; }
  };
  const timer = setInterval(tick, 60000); timer.unref();
  socket.on('connect', tick); void tick();
  return () => { clearInterval(timer); socket.off('connect', tick); };
}

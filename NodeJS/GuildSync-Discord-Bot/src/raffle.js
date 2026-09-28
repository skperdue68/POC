import { randomBytes } from 'node:crypto';

export function requestActiveRaffles(socket) {
  return new Promise((resolve, reject) => {
    if (!socket?.connected) return reject(new Error('GuildSync is temporarily unavailable. Please try again.'));
    socket.timeout(15000).emit('guildsync:request-active-raffles', {}, (error, response) => {
      if (error) return reject(new Error('GuildSync did not respond. Please try again.'));
      if (!response?.ok || !Array.isArray(response.raffles) || response.raffles.length === 0) {
        return reject(new Error(response?.message || 'Raffle information is unavailable.'));
      }
      resolve(response);
    });
  });
}
export function formatRaffles(snapshot) {
  const number = value => Number(value || 0).toLocaleString('en-US');
  return ['**GuildSync active raffle prizes**', ...snapshot.raffles.map(raffle => [
    `**${raffle.type === 'biweekly' ? 'Bi-Weekly' : '50/50'}: ${number(raffle.prizeGold)} gold available for the draw**`,
    ...(raffle.type === 'biweekly' ? [`${number(raffle.drawCount)} draws × 200,000 gold each (rounded up).`] : []),
    `Tickets: ${number(raffle.totalTickets)} · Draw: <t:${raffle.drawTime}:F>`,
    raffle.salesOpen ? `Ticket sales close <t:${raffle.salesEnd}:R>.` : 'Sales closed — awaiting the draw.'
  ].join('\n')), `As of <t:${snapshot.asOf}:f>. Based on the latest banking data received by GuildSync.`].join('\n\n');
}

export function createRaffleAnnouncer({ channelId, intervalHours, thresholds, fetchRaffles, send, loadState, saveState,
  now = () => Math.floor(Date.now() / 1000) }) {
  if (!Number.isFinite(intervalHours) || intervalHours <= 0 ||
      !['biweekly', 'monthly'].every(type => Number.isSafeInteger(thresholds[type]) && thresholds[type] > 0)) {
    throw new Error('Raffle announcement interval and gold thresholds must be positive numbers.');
  }
  let running = false, state;
  async function deliverPending(reconcile) {
    const pending = state.pending;
    await send(pending.snapshot, { id: pending.id, createdAt: pending.createdAt, reconcile });
    await saveState(pending.next);
    state = pending.next;
  }
  return {
    async tick() {
      if (!channelId || running) return;
      running = true;
      try {
        if (state === undefined) state = await loadState() || { channelId, raffles: {} };
        if (state.channelId !== channelId) state = { channelId, raffles: {} };
        // A restart or uncertain Discord response resumes the same persisted delivery.
        if (state.pending) { await deliverPending(true); return; }
        const snapshot = await fetchRaffles();
        const time = now();
        const due = snapshot.raffles.some(raffle => {
          const previous = state.raffles[raffle.type];
          const milestone = Math.floor(raffle.prizeGold / thresholds[raffle.type]);
          return !previous || previous.id !== raffle.id || time - previous.lastPostedAt >= intervalHours * 3600 ||
            milestone > previous.highWater;
        });
        if (!due) return;
        // One combined update even if both raffles cross several thresholds.
        const next = { channelId, raffles: { ...state.raffles } };
        for (const raffle of snapshot.raffles) {
          const previous = state.raffles[raffle.type];
          next.raffles[raffle.type] = {
            id: raffle.id, lastPostedAt: time,
            highWater: Math.max(previous?.id === raffle.id ? previous.highWater : 0,
              Math.floor(raffle.prizeGold / thresholds[raffle.type]))
          };
        }
        const prepared = { ...state, pending: { id: randomBytes(12).toString('hex'), createdAt: time, snapshot, next } };
        await saveState(prepared);
        state = prepared;
        await deliverPending(false);
      } finally {
        running = false;
      }
    }
  };
}

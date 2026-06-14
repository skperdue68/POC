const eventListeners = new Map();

export function EventsOn(name, callback) {
  if (!eventListeners.has(name)) {
    eventListeners.set(name, new Set());
  }
  eventListeners.get(name).add(callback);
  return () => eventListeners.get(name)?.delete(callback);
}

export function emitWebEvent(name, payload) {
  for (const callback of eventListeners.get(name) || []) {
    try {
      callback(payload);
    } catch (error) {
      console.error(`GuildSync web event listener failed for ${name}:`, error);
    }
  }
}

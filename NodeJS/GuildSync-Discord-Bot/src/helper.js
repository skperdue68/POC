export function Log(message) {
  const timestamp = new Date().toLocaleString();
  console.log(`${timestamp} [DISCORD BOT] ${message}`);
}

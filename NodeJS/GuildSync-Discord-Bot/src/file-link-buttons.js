import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

export function fileLinkButtons(content = '') {
  const links = [...new Set([...String(content).matchAll(/\]\((https:\/\/docs\.google\.com\/spreadsheets\/d\/[A-Za-z0-9_-]+\/edit)\)/g)].map(match => match[1]))];
  if (!links.length) return [];
  return [new ActionRowBuilder().addComponents(links.slice(0, 5).map((url, index) => new ButtonBuilder()
    .setStyle(ButtonStyle.Link).setURL(url)
    .setLabel(links.length > 1 ? (index === 0 ? 'Open archived raffle' : 'Open working raffle')
      : /working sheet/i.test(content) ? 'Open working raffle' : 'Open archived raffle')))];
}

import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

const googleLink = /\[([^\]]+)\]\((https:\/\/(?:docs|drive)\.google\.com\/[^\s)]+)\)/g;

function linksIn(content) {
  const text = String(content), links = new Map();
  for (const match of text.matchAll(googleLink)) {
    const prefix = text.slice(0, match.index).split(/\n|\. /).at(-1);
    const context = prefix + ' ' + match[1];
    const label = /working/i.test(context) ? 'Open Working Raffle'
      : /archiv/i.test(context) ? 'Open Archived Raffle'
      : /public.*raffle/i.test(context) ? 'Open Public Raffle'
      : match[1].toUpperCase() !== 'HERE' && !/^\d{6} Raffle$/.test(match[1]) ? match[1]
      : /^\d{6} Raffle$/.test(match[1]) ? 'Open Archived Raffle'
      : match[2].includes('drive.google.com') ? 'Open Google Drive File' : 'Open Google Document';
    if (!links.has(match[2])) links.set(match[2], {url:match[2],label:label.slice(0,80)});
  }
  return [...links.values()];
}

export function fileLinkButtons(content = '') {
  const links = linksIn(content), rows = [];
  for (let index = 0; index < Math.min(links.length,25); index += 5)
    rows.push(new ActionRowBuilder().addComponents(links.slice(index,index+5).map(link => new ButtonBuilder()
      .setStyle(ButtonStyle.Link).setURL(link.url).setLabel(link.label))));
  return rows;
}

export function fileLinkContent(content = '') {
  return String(content).replace(googleLink, (_, label) => label.toUpperCase() === 'HERE' ? 'using the button below' : label);
}

const fs = require('fs');
const path = require('path');
const os = require('os');

function loadOptionalEnvFile() {
  const envPath = path.join(__dirname, '.env');

  if (!fs.existsSync(envPath)) {
    return;
  }

  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const equalsIndex = trimmed.indexOf('=');

    if (equalsIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();

    // Allow quoted values.
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    // Do not overwrite real environment variables.
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function resolvePathFromEnv(value) {
  if (!value) {
    return null;
  }

  return value
    .replace(/^~(?=$|[\\/])/, os.homedir());
}

loadOptionalEnvFile();

const defaultSavedVarsPath = path.join(
  os.homedir(),
  'Documents',
  'Elder Scrolls Online',
  'live',
  'SavedVariables',
  'ProofOfConcept.lua'
);

const defaultOutputJsonPath = path.join(
  os.homedir(),
  'Documents',
  'POCBankingExport.json'
);

const savedVarsPath =
  resolvePathFromEnv(process.env.SAVED_VARS_PATH) ||
  defaultSavedVarsPath;

const outputJsonPath =
  resolvePathFromEnv(process.env.OUTPUT_JSON_PATH) ||
  defaultOutputJsonPath;

function extractLuaTableByName(text, tableName) {
  const assignmentRegex = new RegExp(`\\b${tableName}\\s*=\\s*\\{`);
  const match = assignmentRegex.exec(text);

  if (!match) {
    throw new Error(`Could not find table assignment: ${tableName} = {`);
  }

  const openBraceIndex = text.indexOf('{', match.index);
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = openBraceIndex; i < text.length; i++) {
    const char = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === '{') depth++;
    if (char === '}') depth--;

    if (depth === 0) {
      return {
        tableText: text.slice(openBraceIndex, i + 1),
        assignmentStart: match.index,
        tableStart: openBraceIndex,
        tableEnd: i + 1,
      };
    }
  }

  throw new Error(`Could not find matching closing brace for ${tableName}`);
}

function parseEsoLuaTable(luaTableText) {
  let i = 0;

  function skipWhitespaceAndCommas() {
    while (i < luaTableText.length) {
      if (/\s/.test(luaTableText[i]) || luaTableText[i] === ',') {
        i++;
      } else {
        break;
      }
    }
  }

  function parseString() {
    i++; // opening quote
    let result = '';
    let escaped = false;

    while (i < luaTableText.length) {
      const c = luaTableText[i++];

      if (escaped) {
        if (c === 'n') result += '\n';
        else if (c === 'r') result += '\r';
        else if (c === 't') result += '\t';
        else result += c;
        escaped = false;
        continue;
      }

      if (c === '\\') {
        escaped = true;
        continue;
      }

      if (c === '"') {
        return result;
      }

      result += c;
    }

    throw new Error('Unterminated string');
  }

  function parseNumber() {
    const start = i;

    while (i < luaTableText.length && /[-0-9.]/.test(luaTableText[i])) {
      i++;
    }

    const raw = luaTableText.slice(start, i);
    const value = Number(raw);

    if (Number.isNaN(value)) {
      throw new Error(`Invalid number: ${raw}`);
    }

    return value;
  }

  function parseValue() {
    skipWhitespaceAndCommas();

    const c = luaTableText[i];

    if (c === '{') return parseTable();
    if (c === '"') return parseString();
    if (c === '-' || /[0-9]/.test(c)) return parseNumber();

    if (luaTableText.startsWith('true', i)) {
      i += 4;
      return true;
    }

    if (luaTableText.startsWith('false', i)) {
      i += 5;
      return false;
    }

    if (luaTableText.startsWith('nil', i)) {
      i += 3;
      return null;
    }

    throw new Error(`Unexpected value at position ${i}: ${luaTableText.slice(i, i + 20)}`);
  }

  function parseKey() {
    skipWhitespaceAndCommas();

    if (luaTableText[i] !== '[') {
      throw new Error(`Expected [ for key at position ${i}`);
    }

    i++;
    skipWhitespaceAndCommas();

    let key;

    if (luaTableText[i] === '"') {
      key = parseString();
    } else {
      key = parseNumber();
    }

    skipWhitespaceAndCommas();

    if (luaTableText[i] !== ']') {
      throw new Error(`Expected ] at position ${i}`);
    }

    i++;
    skipWhitespaceAndCommas();

    if (luaTableText[i] !== '=') {
      throw new Error(`Expected = at position ${i}`);
    }

    i++;

    return key;
  }

  function parseTable() {
    if (luaTableText[i] !== '{') {
      throw new Error(`Expected { at position ${i}`);
    }

    i++;

    const entries = [];

    while (i < luaTableText.length) {
      skipWhitespaceAndCommas();

      if (luaTableText[i] === '}') {
        i++;
        break;
      }

      const key = parseKey();
      const value = parseValue();

      entries.push([key, value]);
    }

    const allNumeric =
      entries.length > 0 &&
      entries.every(([key]) => Number.isInteger(key) && key >= 1);

    if (allNumeric) {
      return entries
        .sort((a, b) => a[0] - b[0])
        .map(([, value]) => value);
    }

    const obj = {};

    for (const [key, value] of entries) {
      obj[String(key)] = value;
    }

    return obj;
  }

  return parseValue();
}

function luaString(value) {
  return String(value ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"');
}

function renderEntry(entry, indent) {
  const pad = ' '.repeat(indent);
  const inner = ' '.repeat(indent + 4);

  return [
    `${pad}{`,
    `${inner}["eventId"] = ${Number(entry.eventId)},`,
    `${inner}["displayName"] = "${luaString(entry.displayName)}",`,
    `${inner}["time"] = ${Number(entry.time)},`,
    `${inner}["ticketAmount"] = ${Number(entry.ticketAmount ?? 0)},`,
    `${inner}["amount"] = ${Number(entry.amount)},`,
    `${pad}},`,
  ].join('\n');
}

function renderSection(sectionName, entries, indent) {
  const pad = ' '.repeat(indent);
  const entryIndent = indent + 4;

  const lines = [
    `${pad}["${sectionName}"] =`,
    `${pad}{`,
  ];

  entries.forEach((entry, index) => {
    lines.push(`${' '.repeat(entryIndent)}[${index + 1}] =`);
    lines.push(renderEntry(entry, entryIndent + 4));
  });

  lines.push(`${pad}},`);

  return lines.join('\n');
}

function renderCleanPOCBanking(accountName, data) {
  return `POCBanking =
{
    ["Default"] =
    {
        ["${luaString(accountName)}"] =
        {
            ["$AccountWide"] =
            {
                ["version"] = 1,
${renderSection('other', data.other ?? [], 16)}
${renderSection('biweekly', data.biweekly ?? [], 16)}
${renderSection('monthly', data.monthly ?? [], 16)}
            },
        },
    },
}`;
}

function readExistingJsonArray(jsonPath) {
  if (!fs.existsSync(jsonPath)) {
    return [];
  }

  const raw = fs.readFileSync(jsonPath, 'utf8').trim();

  if (!raw) {
    return [];
  }

  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed)) {
    throw new Error('Existing JSON file must contain an array.');
  }

  return parsed;
}

function asArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  // Empty Lua tables parse as empty JS objects.
  // Treat those as empty arrays for banking sections.
  if (
    value &&
    typeof value === 'object' &&
    Object.keys(value).length === 0
  ) {
    return [];
  }

  // Defensive fallback.
  return [];
}

function getFirstEsoAccountName(defaultSection) {
  if (!defaultSection || typeof defaultSection !== 'object') {
    return null;
  }

  return Object.keys(defaultSection).find((key) => key.startsWith('@')) || null;
}

function main() {

  const originalText = fs.readFileSync(savedVarsPath, 'utf8');

  const extracted = extractLuaTableByName(originalText, 'POCBanking');
  const parsedBanking = parseEsoLuaTable(extracted.tableText);

  const defaultSection = parsedBanking.Default;

  const accountName = getFirstEsoAccountName(defaultSection);

  if (!accountName) {
    throw new Error('Could not find an ESO account name under POCBanking.Default');
  }

  console.log('Reading:', savedVarsPath);
  console.log('ESO Account:', accountName);


  const accountWide = defaultSection[accountName]?.['$AccountWide'];

  if (!accountWide) {
    throw new Error(`Could not find POCBanking.Default["${accountName}"]["$AccountWide"]`);
  }
  const biweeklyEntries = asArray(accountWide.biweekly);
  const monthlyEntries = asArray(accountWide.monthly);
  const otherEntries = asArray(accountWide.other);

  const exportedEntries = [
    ...biweeklyEntries.map((entry) => ({ type: 'biweekly', ...entry })),
    ...monthlyEntries.map((entry) => ({ type: 'monthly', ...entry })),
    ...otherEntries.map((entry) => ({ type: 'other', ...entry })),
  ];

  if (exportedEntries.length === 0) {
    console.log('No banking entries to export.');
    return;
  }

  const existingJson = readExistingJsonArray(outputJsonPath);
  const existingEventIds = new Set(existingJson.map((entry) => Number(entry.eventId)));

  const newEntries = exportedEntries.filter(
    (entry) => !existingEventIds.has(Number(entry.eventId))
  );

  const combinedJson = [...existingJson, ...newEntries];

  fs.writeFileSync(outputJsonPath, JSON.stringify(combinedJson, null, 2), 'utf8');

  console.log(`Wrote ${newEntries.length} new entries to:`);
  console.log(outputJsonPath);

  // Since all current entries have now been exported or already existed in JSON,
  // clear them from the Lua SavedVariables banking sections.
  const cleanedBanking = {
    other: [],
    biweekly: [],
    monthly: [],
  };

  const newPOCBankingText = renderCleanPOCBanking(accountName, cleanedBanking);

  const newSavedVarsText =
    originalText.slice(0, extracted.assignmentStart) +
    newPOCBankingText +
    originalText.slice(extracted.tableEnd);

  const backupPath = `${savedVarsPath}.backup-${Date.now()}`;
  fs.writeFileSync(backupPath, originalText, 'utf8');
  fs.writeFileSync(savedVarsPath, newSavedVarsText, 'utf8');

  console.log('Backup written to:');
  console.log(backupPath);

  console.log('Cleared exported banking entries from SavedVariables file.');
}

main();

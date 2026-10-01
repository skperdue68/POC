const MARKER = 'guildsync_last_rollover';

export function resetRequests(sheetId, type, key, oldMetadata = []) {
  const range = (r1, r2, c1, c2) => ({ sheetId, startRowIndex: r1, endRowIndex: r2, startColumnIndex: c1, endColumnIndex: c2 });
  const requests = [
    { updateCells: { range: range(4, 254, 3, 6), fields: 'userEnteredValue' } },
    { updateCells: { range: range(4, 254, 7, 8), fields: 'userEnteredValue,note' } },
    ...(type === 'biweekly' ? [{ updateCells: { range: range(4, 254, 9, 11), fields: 'userEnteredValue' } }] : []),
    { updateDimensionProperties: { range: { sheetId, dimension: 'COLUMNS', startIndex: 6, endIndex: 8 }, properties: { hiddenByUser: true }, fields: 'hiddenByUser' } },
    { updateCells: { range: type === 'biweekly' ? range(61, 70, 15, 18) : range(35, 44, 13, 16), fields: 'userEnteredValue' } },
    ...(type === 'biweekly'
      ? [
          { updateCells: { range: range(2, 4, 17, 18), fields: 'userEnteredValue' } },
          { updateCells: { range: range(32, 52, 16, 17), fields: 'userEnteredValue' } }
        ]
      : [
          { updateCells: { range: range(2, 4, 15, 16), fields: 'userEnteredValue' } },
          { updateCells: { range: range(24, 25, 15, 16), fields: 'userEnteredValue' } },
          { updateCells: { range: range(27, 28, 12, 13), fields: 'userEnteredValue' } }
        ]),
    ...oldMetadata.map(metadata => ({ deleteDeveloperMetadata: { dataFilter: { developerMetadataLookup: { metadataId: metadata.metadataId } } } })),
    { createDeveloperMetadata: { developerMetadata: { metadataKey: MARKER, metadataValue: key, visibility: 'DOCUMENT', location: { sheetId } } } }
  ];
  return requests;
}

export function drawDateRequest(sheetId, type, drawTime) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date(drawTime * 1000));
  const value = kind => Number(parts.find(part => part.type === kind).value);
  const serial = Date.UTC(value('year'), value('month') - 1, value('day')) / 86400000 + 25569;
  const column = type === 'biweekly' ? 17 : 15;
  return { updateCells: { range: { sheetId, startRowIndex: 6, endRowIndex: 7, startColumnIndex: column, endColumnIndex: column + 1 },
    rows: [{ values: [{ userEnteredValue: { numberValue: serial }, userEnteredFormat: { numberFormat: { type: 'DATE', pattern: 'mm/dd/yy' } } }] }],
    fields: 'userEnteredValue,userEnteredFormat.numberFormat' } };
}

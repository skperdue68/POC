// Preserve row and cell identity when their rendered data has not changed.
export function reconcileDataRows(current, incoming, keyAttribute, bindNew = () => {}) {
 if (!current || !incoming) return;
 const key = row => row.getAttribute(keyAttribute) ?? '__empty__';
 const existing = new Map(Array.from(current.children).map(row => [key(row), row]));
 const keep = new Set();
 Array.from(incoming.children).forEach((wanted, index) => {
  let row = existing.get(key(wanted));
  if (!row) { row = wanted.cloneNode(true); bindNew(row); }
  else if (!row.isEqualNode(wanted)) {
   for (const attribute of Array.from(row.attributes)) {
    if (!wanted.hasAttribute(attribute.name)) row.removeAttribute(attribute.name);
   }
   for (const attribute of Array.from(wanted.attributes)) {
    if (row.getAttribute(attribute.name) !== attribute.value) row.setAttribute(attribute.name, attribute.value);
   }
   Array.from(wanted.children).forEach((cell, cellIndex) => {
    const old = row.children[cellIndex];
    if (old?.isEqualNode(cell)) return;
    const replacement = cell.cloneNode(true);
    if (old) old.replaceWith(replacement); else row.append(replacement);
    bindNew(replacement);
   });
   while (row.children.length > wanted.children.length) row.lastElementChild.remove();
  }
  if (current.children[index] !== row) current.insertBefore(row, current.children[index] || null);
  keep.add(row);
 });
 for (const row of Array.from(current.children)) if (!keep.has(row)) row.remove();
}
export function syncDataHTML(current, incoming) {
 if (current && incoming && !current.isEqualNode(incoming)) current.innerHTML = incoming.innerHTML;
}
export function syncDataText(current, incoming) {
 if (current && incoming && current.textContent !== incoming.textContent) current.textContent = incoming.textContent;
}

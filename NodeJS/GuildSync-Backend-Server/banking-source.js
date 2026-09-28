export function bankingSource(source, user) {
  const base = Array.from(String(source || '').trim()).slice(0, 64).join('');
  const name = Array.from(String(user || '').trim()).slice(0, 188).join('');
  return name ? `${base} (${name})` : base;
}


export function listingUrl(raw) {
  try {
    const url = new URL(raw);
    return url.origin === 'https://appfinder.tech' && /^\/apps\/[a-z0-9]+(?:-[a-z0-9]+)*$/.test(url.pathname) && !url.username && !url.password && !url.search && !url.hash ? url.href : null;
  } catch { return null; }
}

export async function searchApps(query, fetchImpl = fetch) {
  const text = query.trim();
  if (!text || text.length > 120) throw new Error('Enter a search of 1–120 characters.');
  const url = new URL('https://appfinder.tech/api/v1/search');
  url.searchParams.set('q', text);
  url.searchParams.set('limit', '5');
  const response = await fetchImpl(url, { headers: { Accept: 'application/json' }, credentials: 'omit', referrerPolicy: 'no-referrer', redirect: 'error', signal: AbortSignal.timeout(15000) });
  if (response.status === 429) throw new Error('Too many searches. Please wait a few minutes and try again.');
  if (!response.ok) throw new Error('AppFinder is unavailable. Please try again shortly.');
  if (!response.headers.get('content-type')?.includes('application/json')) throw new Error('Unexpected response. Please try again.');
  const body = await response.json();
  if (!Array.isArray(body?.data?.results)) throw new Error('Unexpected response. Please try again.');
  const results = body.data.results.slice(0,5).filter(item => typeof item?.name === 'string' && listingUrl(item.url));
  return { results, weak: body.data.noGoodMatch === true };
}

export function renderResults(document, results) {
  const fragment = document.createDocumentFragment();
  for (const item of results) {
    const url = listingUrl(item.url);
    if (!url) continue;
    const row = document.createElement('li');
    const link = document.createElement('a');
    link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = item.name;
    const description = document.createElement('p');
    description.textContent = typeof item.tagline === 'string' ? item.tagline : '';
    const meta = document.createElement('p'); meta.className = 'meta';
    meta.textContent = [item.category, item.pricing].filter(x => typeof x === 'string' && x).join(' · ');
    row.append(link, description, meta); fragment.append(row);
  }
  document.querySelector('#results').replaceChildren(fragment);
}

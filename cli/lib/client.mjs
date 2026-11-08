const ORIGIN = 'https://appfinder.tech';

export const help = `AppFinder — software discovery from your terminal

  appfinder search "invoicing for freelancers" [--limit 5] [--category slug]
  appfinder app <slug>
  appfinder alternatives <slug>
  appfinder compare <first-slug> <second-slug>
  appfinder categories
  appfinder --help
  appfinder --version

Outputs JSON with AppFinder source attribution. No API key, local storage,
or automatic submission. Search text is sent to appfinder.tech when you run it.
API terms: https://appfinder.tech/terms#api
`;

function slug(value) {
  if (!value || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) || value.length > 160) {
    throw new Error('Use an app slug from an AppFinder result, such as zendesk.');
  }
  return value;
}

export function requestUrl(argv) {
  const [command, ...args] = argv;
  const url = new URL('/api/v1/', ORIGIN);
  if (command === 'search') {
    const query = args.shift()?.trim();
    if (!query || query.startsWith('--') || query.length > 120) {
      throw new Error('Search needs a quoted query of 1–120 characters.');
    }
    url.pathname += 'search';
    url.searchParams.set('q', query);
    const seen = new Set();
    while (args.length) {
      const flag = args.shift();
      const value = args.shift();
      if (!['--limit', '--category'].includes(flag) || !value || value.startsWith('--') || seen.has(flag)) {
        throw new Error('Use each of --limit and --category at most once, with a value.');
      }
      seen.add(flag);
      if (flag === '--limit' && (!/^\d+$/.test(value) || Number(value) < 1 || Number(value) > 25)) {
        throw new Error('--limit must be an integer from 1 to 25.');
      }
      if (flag === '--category' && value.length > 120) throw new Error('Category must be at most 120 characters.');
      url.searchParams.set(flag.slice(2), value);
    }
  } else if (command === 'app' || command === 'alternatives') {
    if (args.length !== 1) throw new Error(`${command} needs exactly one app slug.`);
    url.pathname += `apps/${slug(args[0])}${command === 'alternatives' ? '/alternatives' : ''}`;
  } else if (command === 'compare') {
    if (args.length !== 2) throw new Error('compare needs exactly two app slugs.');
    url.pathname += 'compare';
    url.searchParams.set('a', slug(args[0]));
    url.searchParams.set('b', slug(args[1]));
  } else if (command === 'categories') {
    if (args.length) throw new Error('categories takes no arguments.');
    url.pathname += 'categories';
  } else {
    throw new Error('Unknown command. Run appfinder --help.');
  }
  return url;
}

export async function queryAppFinder(argv, fetchImpl = fetch) {
  const url = requestUrl(argv);
  const res = await fetchImpl(url, {
    headers: { Accept: 'application/json', 'User-Agent': 'AppFinderCLI/0.1.0 (+https://appfinder.tech/developers)' },
    signal: AbortSignal.timeout(15_000),
    redirect: 'error',
  });
  if (res.status === 429) {
    const retry = res.headers.get('retry-after');
    throw new Error(`API rate limit reached.${/^\d+$/.test(retry ?? '') ? ` Retry after ${retry} seconds.` : ' Try again later.'}`);
  }
  if (!res.ok) throw new Error(`AppFinder API returned HTTP ${res.status}.`);
  if (!res.headers.get('content-type')?.includes('application/json')) throw new Error('AppFinder returned a non-JSON response.');
  const body = await res.json();
  if (!body || typeof body !== 'object' || !body.data || !body.meta || body.error) {
    throw new Error('AppFinder returned an unexpected response.');
  }
  return body;
}

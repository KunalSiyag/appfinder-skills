# AppFinder CLI

Search software, inspect a listing, find alternatives, compare two apps, and browse categories from your terminal. Uses the public AppFinder API with no key. Requires Node.js 22 or later.

Run the published package:

```bash
npx @dazzbuilds/appfinder-cli search "invoicing for freelancers" --limit 5
```

Or install it once with `npm install -g @dazzbuilds/appfinder-cli`, then run `appfinder categories`.

Run from this repository:

```bash
node cli/bin/appfinder.mjs search "invoicing for freelancers" --limit 5
node cli/bin/appfinder.mjs categories
node cli/bin/appfinder.mjs app zendesk
node cli/bin/appfinder.mjs alternatives zendesk
node cli/bin/appfinder.mjs compare xero ynab
```

Use slugs from live search results. Examples may stop being available if a listing is removed.

All output is JSON, including source attribution. Pipe it into tools such as `jq`; diagnostics go to stderr and failures return a nonzero exit code. Invalid commands make no network request. Requests time out after 15 seconds, and rate limits are reported without automatic retries.

The CLI sends your query or app slugs to `https://appfinder.tech` only when you run a command. It has no local storage, telemetry, browser access, install scripts, or dependencies. Server-side request processing is covered by [AppFinder's privacy policy](https://appfinder.tech/privacy). Follow the [API terms](https://appfinder.tech/terms#api), preserve attribution, and confirm changing product facts on the vendor's site.

## Package publication

Published as [`@dazzbuilds/appfinder-cli`](https://www.npmjs.com/package/@dazzbuilds/appfinder-cli). Version 0.1.0 was verified in the npm registry and tested against the live search API.

Maintainers can run `npm test` and `npm pack --dry-run` from `cli/`. Publish only this directory, with an authenticated npm account that controls the scope. Never publish the private website repository.

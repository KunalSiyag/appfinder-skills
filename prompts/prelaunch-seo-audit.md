# Pre-launch SEO audit your agent can act on

Find the thin pages, duplicate titles, missing canonicals and weak internal links before launch, then fix them.

- **For:** people who build software
- **Works in:** coding agent
- **Uses:** `/sitemap.xml`, `/robots.txt`
- **You get:** A ranked fix list with evidence, then approved fixes with a re-check.

## Prompt

Fill in the parts in [BRACKETS], paste it into your assistant, and check what comes back.

```text
Run a pre-launch SEO audit of [https://YOUR-SITE] and this repo. Read-only first: change nothing, and wait for my OK before fixing anything.

Crawl the sitemap and sample at least 20 URLs across every page type. For each issue give the URL, the evidence and the fix:
- Titles and meta descriptions: missing, duplicated across pages, over 60 / 160 characters.
- Exactly one H1 per page; headings in order.
- Canonical present, self-referencing on indexable pages, and consistent with the sitemap.
- Thin pages (under about 150 words of original text, or only a list with no facts): list them and recommend noindex or merging.
- Soft 404s (a 200 status on "not found" or empty pages).
- Internal links: pages with fewer than 5 contextual links; orphan pages missing from the sitemap.
- Sitemap: only indexable URLs, real lastmod, no redirects or noindex pages.
- Redirect chains and slug variants.
- Images: alt text and sizes; Largest Contentful Paint element.

Output a ranked list (impact first) with effort estimates. After my OK, fix the top items in a branch and re-run the same checks to prove each is resolved.
```

## Tips

- Ask it to include the number of pages per issue so you can prioritise.
- Re-run after every deploy that touches templates.

More prompts: https://appfinder.tech/prompts · This one on the site: https://appfinder.tech/prompts/prelaunch-seo-audit

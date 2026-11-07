# Make your site readable by AI assistants

Audit and fix llms.txt, robots.txt for AI crawlers, structured data, a plain-text pricing page and Markdown pages.

- **For:** people who build software
- **Works in:** coding agent
- **Uses:** `/llms.txt`, `/robots.txt`, `JSON-LD`
- **You get:** A ranked fix list, then (after your OK) the changes, with curl commands that prove each one is live.

## Prompt

Fill in the parts in [BRACKETS], paste it into your assistant, and check what comes back.

```text
Audit my website [https://YOUR-SITE] and this repo so AI assistants can find, read and quote my product accurately. Do not change anything until I approve the plan.

Check each item, report PASS / FAIL with evidence (the URL and what it returned):
1. /robots.txt does not block GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot or Google-Extended on public pages, and still blocks private paths.
2. /llms.txt exists: one factual paragraph on what the product is, key pages with one-line descriptions, pricing and docs links. No marketing claims.
3. The homepage and pricing page have a unique title, meta description and canonical URL.
4. A SoftwareApplication JSON-LD block (name, description, applicationCategory, operatingSystem, offers with price, sameAs) that matches the visible page.
5. Pricing is real text in the HTML (a table or list of plans with prices and limits), not an image or a script-only widget, with a "last updated" date.
6. A sitemap.xml that lists only indexable pages with real lastmod dates.
7. Optional: a plain Markdown version of key pages (add .md) that is noindex and points to the HTML page as canonical.

Output: a ranked list of fixes (impact first) with the files to change and the effort of each. Wait for my OK, then implement the approved ones and finish with curl commands that prove each fix is live.
```

## Tips

- Run it on a branch. Review the diff.
- Re-run the audit after deploying; do not trust the first pass.

More prompts: https://appfinder.tech/prompts · This one on the site: https://appfinder.tech/prompts/ai-readable-site

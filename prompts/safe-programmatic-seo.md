# Add programmatic SEO pages without creating spam

Generate comparison, alternatives or "best X for Y" pages only from real facts, with size limits and noindex rules.

- **For:** people who build software
- **Works in:** coding agent
- **Uses:** `sitemap`, `canonical`, `noindex`
- **You get:** A design for the page type, the guard rules as code, and tests that prove thin pages are excluded.

## Prompt

Fill in the parts in [BRACKETS], paste it into your assistant, and check what comes back.

```text
I want programmatic pages of this type: [E.G. "best [CATEGORY] for [PLATFORM]" / "[PRODUCT] alternatives" / "[A] vs [B]"]. My data: [WHERE THE FACTS LIVE].

Design and implement them so they are useful pages, not doorway pages. Before writing code, show me the plan and wait for my OK.

Hard rules:
1. Each page is generated only from facts we actually store (no invented text). It shows those facts and where each came from.
2. Minimum size: a page needs at least 3 real items to be indexable.
3. It must be genuinely narrower than its parent: if it contains more than 85% of the parent's items it is not indexable.
4. Anything below those limits renders for people but gets noindex, and is left out of the sitemap.
5. An unknown parameter is a real 404 (not an empty 200 page).
6. Each page has a self-referencing canonical, a unique title and description, and links to its parent and siblings.
7. Add the pages to the sitemap only when indexable, with a real lastmod.
8. Write tests for: a page at the minimum, a page below it, a page above the share limit, and an unknown parameter.

Then show me how many pages this produces from the current data and list five random ones to sanity-check.
```

## Tips

- Ask it to print the page count before you ship.
- If the first five random pages look thin, raise the minimum.

More prompts: https://appfinder.tech/prompts · This one on the site: https://appfinder.tech/prompts/safe-programmatic-seo

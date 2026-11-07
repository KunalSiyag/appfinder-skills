# Make your pricing page answer-ready

Rewrite your pricing page so people and AI assistants quote it correctly: plain text plans, limits and a date.

- **For:** people who build software
- **Works in:** any assistant
- **Uses:** `JSON-LD offers`, `/llms.txt`
- **You get:** A plain-text pricing section and matching JSON-LD, with the ambiguities it found in the current page.

## Prompt

Fill in the parts in [BRACKETS], paste it into your assistant, and check what comes back.

```text
Here is my current pricing page text and what is actually true about my plans:
[PASTE PAGE TEXT]
[WHAT IS TRUE: PLANS, PRICES, BILLING PERIODS, LIMITS PER PLAN, FREE TRIAL OR FREE PLAN, WHAT IS CUSTOM]

First list every ambiguity a buyer or an AI assistant could misread (for example "from $9" without saying per user or per month, annual-only prices, undefined limits, "unlimited" with a fair-use cap).

Then rewrite it as:
1. A plain-text table: plan, price per [unit] per month (and annual price if different), limits, what is included.
2. One sentence per plan saying who it is for.
3. A line: "Prices in USD, last updated [DATE]."
4. The matching schema.org Offer JSON-LD for each plan.
Do not invent a number: if something is missing, write [MISSING: what I need to tell you] instead.
```

## Tips

- Use the same plan names everywhere (site, docs, listing).
- Update the date whenever a price changes.

More prompts: https://appfinder.tech/prompts · This one on the site: https://appfinder.tech/prompts/pricing-page-for-answers

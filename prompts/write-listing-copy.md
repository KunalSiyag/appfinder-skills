# Write listing copy that passes review

Tagline, description and features in the shape that gets approved: specific, factual, no superlatives.

- **For:** people who build software
- **Works in:** any assistant
- **Uses:** `/submit`, `/trust/ranking`
- **You get:** A tagline, a description, 4-8 features, a pricing summary and the category to choose, ready to paste.

## Prompt

Fill in the parts in [BRACKETS], paste it into your assistant, and check what comes back.

```text
Write the AppFinder listing copy for my product from the facts below. Use only these facts.

Facts: [WHAT IT IS, WHO IT IS FOR, WHAT THEY CAN DO WITH IT, PRICING, PLATFORMS, INTEGRATIONS, ANYTHING OPEN SOURCE]

Constraints (a person reviews every listing, and a listing with a very short description or fewer than 3 features is kept out of search engines):
- Tagline: 12-80 characters, says what it does, no "best", "#1", "revolutionary", all-caps or emoji.
- Description: 120-600 characters, 2-3 plain sentences: who it is for and what they can do. Not a copy of the tagline.
- Features: 4-8 short noun phrases a buyer could search for (for example "Kanban boards", "SSO"), no marketing adjectives.
- Pricing summary: one line, such as "Free plan; paid plans from $8 per user per month."
- Choose the single best category from https://appfinder.tech/categories and say why in one line.

If a fact you need is missing, write [MISSING: what I need to tell you] instead of inventing it. Output exactly those five items, then list every MISSING fact.
```

## Tips

- Paste your real pricing page text into the facts.
- Read the description aloud: if it sounds like an ad, rewrite it.

More prompts: https://appfinder.tech/prompts · This one on the site: https://appfinder.tech/prompts/write-listing-copy

# Shortlist software for a job, with sources

Describe the job, team size and budget; get a three-app shortlist with what each one meets, misses or doesn't say.

- **For:** people choosing software
- **Works in:** any assistant
- **Uses:** `recommend_apps`, `get_app`, `compare_apps`, `/categories/<slug>.md`
- **You get:** A table of three apps against your must-haves, who should pick which, and three questions to ask each vendor.

## Prompt

Fill in the parts in [BRACKETS], paste it into your assistant, and check what comes back.

```text
You are my software-buying analyst. Use AppFinder (https://appfinder.tech/api/mcp) if it is connected: call recommend_apps with my request below, then get_app for each of the top 3 and compare_apps for the top two. If you cannot use MCP, fetch https://appfinder.tech/categories/<best-matching-category>.md and then the .md page of each app you consider (for example https://appfinder.tech/apps/<slug>.md).

My need: [THE JOB TO BE DONE, TEAM SIZE, BUDGET PER USER PER MONTH, MUST-HAVE INTEGRATIONS, SECURITY OR COMPLIANCE NEEDS]

Rules: use only facts you can cite (name the source of each); where something is not stated, write "unknown" instead of guessing; never call a product "best" without a reason taken from the facts.

Output, in this order:
1. A table of the top 3: price (and whether a free plan exists), platforms, and for each of my must-haves "meets", "misses" or "unknown".
2. One short paragraph: who should pick which, and why.
3. The three questions I should ask each vendor before paying.
```

## Tips

- Put the budget and the one non-negotiable in the first line of your need.
- Ask a follow-up: "what would change your ranking?"

More prompts: https://appfinder.tech/prompts · This one on the site: https://appfinder.tech/prompts/shortlist-software

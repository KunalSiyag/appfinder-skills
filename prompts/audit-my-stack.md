# Audit your software stack for overlap and cost

Paste your tool list; get what overlaps, what to cut, and a cheaper replacement for each, with the monthly saving.

- **For:** people choosing software
- **Works in:** any assistant
- **Uses:** `search_apps`, `find_alternatives`, `/tools/stack-cost`
- **You get:** A keep / cut / replace table with the monthly saving and what you lose for each line.

## Prompt

Fill in the parts in [BRACKETS], paste it into your assistant, and check what comes back.

```text
Audit my software stack. My tools, with what I pay for each per month and how many people use it:
[TOOL — PRICE PER MONTH — NUMBER OF USERS]
[TOOL — PRICE PER MONTH — NUMBER OF USERS]
[...]

For each tool, use AppFinder (https://appfinder.tech/api/mcp) if connected (get_app and find_alternatives); without MCP, use https://appfinder.tech/apps/<slug>.md and https://appfinder.tech/alternatives/<slug>. You can also model the cost with https://appfinder.tech/tools/stack-cost.

Rules: use only facts you can cite (name the source of each); where something is not stated, write "unknown" instead of guessing; never call a product "best" without a reason taken from the facts.

Output a table with one row per tool: Keep / Cut / Replace, the reason in one line, the replacement (if any) with its listed starting price, the monthly saving, and what I lose. Finish with the total monthly saving and the two changes that save the most for the least risk. Do not recommend cutting anything that I said a team depends on.
```

## Tips

- Include free tools too: they often overlap with paid ones.
- Run it once a quarter.

More prompts: https://appfinder.tech/prompts · This one on the site: https://appfinder.tech/prompts/audit-my-stack

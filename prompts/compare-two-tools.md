# Decide between two tools

Give your priorities and weights; get a decision matrix built from sourced facts, not marketing pages.

- **For:** people choosing software
- **Works in:** any assistant
- **Uses:** `compare_apps`, `/compare/<a>-vs-<b>`
- **You get:** A weighted matrix, a winner for your priorities, and the one fact that would flip the decision.

## Prompt

Fill in the parts in [BRACKETS], paste it into your assistant, and check what comes back.

```text
Help me choose between [TOOL A] and [TOOL B].

What matters to me, with a weight out of 10: [CRITERION — WEIGHT], [CRITERION — WEIGHT], [CRITERION — WEIGHT]

Use AppFinder (https://appfinder.tech/api/mcp) if connected: compare_apps for the pair, then get_app for each. Without MCP, fetch https://appfinder.tech/compare/<a>-vs-<b> (slugs in alphabetical order) and each app's .md page.

Rules: use only facts you can cite (name the source of each); where something is not stated, write "unknown" instead of guessing; never call a product "best" without a reason taken from the facts.

Output: a table with my criteria as rows and both tools as columns (use "unknown" where the facts do not say), a weighted total for each, the winner for my priorities, and the single fact that, if it turned out different, would change the decision.
```

## Tips

- Give weights. Without them every answer is a tie.
- Ask for what each vendor's pricing page does not say.

More prompts: https://appfinder.tech/prompts · This one on the site: https://appfinder.tech/prompts/compare-two-tools

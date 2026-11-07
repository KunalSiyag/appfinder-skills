# See what buyers in your category ask for

Use AppFinder's anonymous demand data to find the features and budgets buyers ask for and which apps answer them.

- **For:** people who build software
- **Works in:** any assistant
- **Uses:** `category_demand`, `/categories/<slug>/demand`, `/state-of/<slug>`
- **You get:** A ranked list of buyer requirements, the gaps nobody answers, and what to say on your page.

## Prompt

Fill in the parts in [BRACKETS], paste it into your assistant, and check what comes back.

```text
I make [PRODUCT] in the [CATEGORY] category. Use AppFinder (https://appfinder.tech/api/mcp) if connected: call category_demand for my category and list_categories to find the right name. Without MCP, fetch https://appfinder.tech/categories/<category>/demand and https://appfinder.tech/state-of/<category>.

Rules: use only facts you can cite (name the source of each); where something is not stated, write "unknown" instead of guessing; never call a product "best" without a reason taken from the facts.

Output:
1. The top 10 things buyers ask for (feature, integration, security need, budget), with the share of buyers and how many listed apps answer each.
2. The three requirements with high demand and few apps that answer them: the gaps.
3. For my product, which of those I already meet (only if I tell you it is true: ask me) and the sentence I could put on my page for each, in plain words without superlatives.
4. Two questions about buyer demand I should still check myself.
```

## Tips

- The demand data is aggregate and anonymous. It does not name buyers.
- Check back monthly: it changes.

More prompts: https://appfinder.tech/prompts · This one on the site: https://appfinder.tech/prompts/market-research-for-your-category

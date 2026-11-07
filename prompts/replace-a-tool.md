# Replace a tool you pay for

Find real alternatives to a tool, what you'd lose by switching, and what buyers who switched chose.

- **For:** people choosing software
- **Works in:** any assistant
- **Uses:** `find_alternatives`, `compare_apps`, `/alternatives/<slug>`
- **You get:** Up to three alternatives with price difference, features you lose or gain, and the main switching risks.

## Prompt

Fill in the parts in [BRACKETS], paste it into your assistant, and check what comes back.

```text
I want to replace [TOOL I PAY FOR NOW] because [REASON: price / missing feature / support / privacy].

Use AppFinder (https://appfinder.tech/api/mcp) if connected: call find_alternatives for the tool, then compare_apps between the tool and the two most relevant alternatives. Without MCP, fetch https://appfinder.tech/alternatives/<tool-slug> and the .md pages of the apps it lists.

I use it for: [WHAT MY TEAM ACTUALLY DOES WITH IT]. We have [NUMBER] seats and [DATA I MUST KEEP, e.g. 3 years of history].

Rules: use only facts you can cite (name the source of each); where something is not stated, write "unknown" instead of guessing; never call a product "best" without a reason taken from the facts.

Output:
- Up to 3 alternatives, each with: price difference per user per month, features I would lose, features I would gain, and the platforms it runs on.
- The 3 biggest switching risks for my situation (data export, integrations, retraining).
- A recommendation with a one-line reason, and one thing to test in a free trial first.
```

## Tips

- Say what you actually use. 80% of the features of most tools go unused.
- Ask for a migration checklist once you pick one.

More prompts: https://appfinder.tech/prompts · This one on the site: https://appfinder.tech/prompts/replace-a-tool

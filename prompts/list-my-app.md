# List your app on AppFinder from your coding agent

The agent reads your repo, drafts only true facts, and prepares your free listing. You review and submit.

- **For:** people who build software
- **Works in:** coding agent
- **Uses:** `check_listing`, `list_my_app`
- **You get:** A private link to a pre-filled submission form, plus a list of anything it could not verify.

## Prompt

Fill in the parts in [BRACKETS], paste it into your assistant, and check what comes back.

```text
I want to list my app on AppFinder (free). Use the AppFinder MCP server (https://appfinder.tech/api/mcp).

Website: [https://YOUR-SITE]

Steps:
1. Call check_listing with the website. If it is already listed, stop and give me its page URL: I will claim it instead.
2. Read my repo (README, package metadata, pricing page, docs) and my website. Draft ONLY facts you can see: name, one-line tagline (no "best", "#1" or "AI-powered" unless literally true), a 2-3 sentence description (who it is for and what they can do), pricing model and starting price, platforms, 4-8 concrete features, and integrations I actually ship.
3. Show me the draft and every field you are unsure about. Wait for my OK.
4. Call list_my_app with only the fields I approved (leave out anything unknown; the website fills gaps). It returns a preview and a private link.
5. Give me the private link. Do NOT open it or submit anything yourself: I sign in, review every field and press Submit.

If the MCP server is not available, give me the same fields as plain text to paste into https://appfinder.tech/submit.
```

## Tips

- Works best in an agent with the repo open (Claude Code, Cursor, Codex).
- The link expires in 7 days and only fills the form.

More prompts: https://appfinder.tech/prompts · This one on the site: https://appfinder.tech/prompts/list-my-app

# AppFinder MCP server

A public, read-mostly [Model Context Protocol](https://modelcontextprotocol.io) server for finding and comparing software.
No key, no account. Streamable HTTP:

```
https://appfinder.tech/api/mcp
```

Registry name: `tech.appfinder/appfinder` (see `server.json`).

## Connect
- **Claude Code:** `claude mcp add --transport http appfinder https://appfinder.tech/api/mcp`
- **Others:** add a remote MCP server with the URL above.

## Tools
| Tool | What it does | Writes anything? |
|---|---|---|
| `recommend_apps` | Ranks directory apps against a plain-language request and explains each pick with cited facts. | No |
| `search_apps` | Full-text search by name, keyword or job. | No |
| `get_app` | One app's listing: pricing, platforms, features, integrations, rating, facts with sources. | No |
| `compare_apps` | Two apps side by side. | No |
| `find_alternatives` | Apps that do the same job, and what buyers who wanted to replace it chose. | No |
| `list_categories` | The categories with app counts. | No |
| `category_demand` | What buyers in a category ask for (anonymous totals, last 90 days). | No |
| `check_listing` | Whether a website already has a published listing. | No |
| `list_my_app` | For makers: prepares a free listing draft from what they say and returns a preview and a private link. They review and submit it themselves; nothing is published until AppFinder's team approves it. | Stores a draft |

Results are organic: positions can't be bought and no paid placement is included. Each fact names its source.

## More
Skills for agents are in [`../skills`](../skills), copy-paste prompts in [`../prompts`](../prompts).

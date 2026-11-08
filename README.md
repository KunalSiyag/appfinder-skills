# AppFinder for AI agents

[AppFinder](https://appfinder.tech) is a software directory where rankings can't be bought. This repository is the public kit
for people and agents who want to use it: **skills**, **copy-paste prompts**, the **MCP server** and the **open data**. (The
AppFinder website's own source code is not in this repository.)

## Skills
Install with the [skills CLI](https://skills.sh):

```bash
npx skills add KunalSiyag/appfinder-skills
```

| Skill | What it does |
|---|---|
| [`appfinder`](skills/appfinder/SKILL.md) | Find, compare and shortlist software with sourced facts, using AppFinder's MCP server. |
| [`list-my-app`](skills/list-my-app/SKILL.md) | Help a maker prepare a free AppFinder listing; they review and submit it themselves. |

## MCP server
`https://appfinder.tech/api/mcp` (streamable HTTP, no key). Tools, connection steps and the registry file: [`mcp/`](mcp/).

```bash
claude mcp add --transport http appfinder https://appfinder.tech/api/mcp
```

## Prompts
Twelve prompts for choosing software and for building and listing it: [`prompts/`](prompts/). They are generated from
[appfinder.tech/prompts](https://appfinder.tech/prompts).

## Data and APIs
The catalog as CSV/JSON (CC BY 4.0), a JSON API, Markdown pages and `llms.txt`: [`data/`](data/).

## Integration kit

An importable [Postman collection, OpenAPI document and n8n workflow](integrations/), plus a [Node.js CLI](cli/), are included. Cursor and Claude-compatible plugin manifests package both skills with the remote MCP connection. These are public integration artifacts; marketplace approval is separate.

## How ranking works
Positions come from community upvotes, visitor ratings and listing quality. Payment, Pro plans and sponsorship never change
them: [appfinder.tech/trust/ranking](https://appfinder.tech/trust/ranking).

## License
MIT for the files in this repository (see [LICENSE](LICENSE)); the catalog data downloads are CC BY 4.0.

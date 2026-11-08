# AppFinder integrations

These files use AppFinder's public endpoints. They contain no credentials or private application source. Publishing this kit does not mean a platform has approved a marketplace listing.

| File | Use |
| --- | --- |
| [openapi.json](openapi.json) | Import five read-only API operations into compatible API clients, automation builders or API directories. Includes stable operation IDs. |
| [postman.collection.json](postman.collection.json) | Import into Postman and run requests with source-attribution checks. To appear on the API Network, publish a dedicated public workspace containing this collection. |
| [n8n-software-shortlist.json](n8n-software-shortlist.json) | Import into n8n, edit the query and execute manually. The final node returns five matching apps and source metadata. No credentials, external messages, or listing submissions. |

The workflow is inactive on import. Run it in your n8n instance before submitting to the Creator Hub; platform execution and approval are separate from JSON/API validation.

## MCP clients

The repository's `mcp.json` configures `https://appfinder.tech/api/mcp` without a key. Manus can import the JSON or add this URL as a custom MCP connector. Cursor can load the plugin from this repository; public discovery requires Cursor review. Hermes supports GitHub skills and Claude-compatible marketplace manifests. Consult each client's current documentation for installation syntax.

Composio custom MCP toolkits are scoped to a project or user; creating one does not establish a global Composio catalog listing. Likewise, a private Make, Albato or Zapier integration is not a public directory entry.

## Limits and privacy

The REST API is read-only, limited to 120 requests per 10 minutes per IP, with at most 25 search results per request. Respect `Retry-After` on HTTP 429. Queries are sent to AppFinder. See the [privacy policy](https://appfinder.tech/privacy) and [API terms](https://appfinder.tech/terms#api). Keep attribution and confirm changing facts with vendors. Bulk dataset downloads have their own license; it does not replace the API terms.

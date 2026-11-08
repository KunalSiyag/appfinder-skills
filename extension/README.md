# AppFinder browser extension

Find software from your toolbar. Search by task, feature or name, read descriptions and pricing labels, and open AppFinder listings. No API key or account needed for searching. Product prices should be confirmed with their vendors.

## Local installation

- Chrome or Edge: open the browser's Extensions page, enable developer mode, choose Load unpacked, then select `chromium/`.
- Firefox: open `about:debugging#/runtime/this-firefox`, choose Load Temporary Add-on, and select `firefox/manifest.json`. Temporary installations do not persist after restart. A signed release is needed for normal distribution.

These are development packages, not approved store listings. Chrome and Edge use the same package. Firefox requires version 140 or newer and declares transmission of search terms.

## Privacy and permissions

The extension sends only the search text you explicitly submit to AppFinder's public API. The server also receives normal network request information such as IP address and browser headers. See [AppFinder's privacy policy](https://appfinder.tech/privacy).

It has no content scripts, background service, history/tabs/cookies/storage permissions, remote executable code, advertising, or analytics SDK. It does not inspect your current page, persist searches, or send requests while closed. Search requests omit cookies. The only host permission is `https://appfinder.tech/*`, needed to request results. Following a listing link opens the normal AppFinder website with its own privacy practices.

## Store copy

**Name:** AppFinder — Software Discovery

**Summary:** Find software by task, feature or name. See pricing labels and open sourced listings from your toolbar.

**Description:** Describe what you need to do and search the AppFinder software directory without leaving your workflow. View up to five matching tools, their descriptions, categories and pricing models. Open a listing for details and sources. Browse categories or submit your own app through the website. Search happens only when you press Find tools. No browsing-history access, page scanning or background tracking.

**Single purpose:** Search and explore the AppFinder software directory.

**Host permission justification:** Retrieve software search results from the AppFinder API. Does not inject or run code on websites.

**Support:** https://github.com/KunalSiyag/appfinder-skills/issues

**Privacy policy:** https://appfinder.tech/privacy

Before store submission, test the installed package in each supported browser, capture actual extension screenshots, complete the store's data-use questionnaire consistently with the disclosure above, and use the owner's developer account. Store approval is not guaranteed.

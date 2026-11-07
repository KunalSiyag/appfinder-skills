---
name: list-my-app
description: Help a maker get their app listed on AppFinder (appfinder.tech) for free. Use when someone says "list my app", "get my product discovered", "add my tool to a directory" or asks how to be found by AI assistants. Checks whether it is already listed, prepares the listing from what the maker tells you, and hands them a private link to review and submit. Never submits for them.
---

# List an app on AppFinder

Listing is **free**. A maker lists their own app; AppFinder's team reviews it; nothing is published until it is approved.
Payment never changes where an app ranks, and there is nothing to buy to be listed.

## Steps
1. **Check first.** Call `check_listing` with the app's website (or domain). If it is already listed, give the maker the page
   and tell them they can claim it by proving they control the domain (a DNS record, a file or a meta tag). Stop there.
2. **Gather only what is true.** Ask for or read (from their repo or site) what you can state accurately: name, one-line
   tagline, what it does and who it is for, category, pricing, platforms, key features, tools it integrates with, a square
   logo URL over https. Use `list_categories` to pick the category name. **Leave out anything you don't know:** the website
   fills the gaps.
3. **Prepare it.** Call `list_my_app` with exactly that. (`prepare_listing` is an older name for the same tool.)
4. **Show the preview** the tool returns, in full, and the private link. Tell the maker: they sign in, review **every** field,
   fix anything wrong and submit it themselves. Then it waits for approval.

## Rules
- **Never submit for the maker** and never sign in as them.
- Don't write marketing claims: no "#1", "best", "leading". A tagline says what the app does.
- Don't invent ratings, reviews, customers, prices or features. Pricing must match their pricing page.
- Don't promise a ranking, a launch date, a review time or traffic. What you can say: it's free, it's reviewed, and an owner
  can claim it to keep its details right.
- If the maker is not the owner or doesn't work for the company, say so and stop.

## After they submit
Tell them the listing can launch with the week's cohort, where members vote, and that upvotes and ratings come from real
people (they can't be bought or asked for).

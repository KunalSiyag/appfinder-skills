# Verify ownership of your listing with your coding agent

Give the agent your verification token; it adds the file or meta tag to your site and checks it is live.

- **For:** people who build software
- **Works in:** coding agent
- **Uses:** `/trust/verification`, `/dashboard`
- **You get:** The proof deployed on your site and the exact button to press on AppFinder to check it.

## Prompt

Fill in the parts in [BRACKETS], paste it into your assistant, and check what comes back.

```text
My app is listed on AppFinder and I am claiming it. AppFinder gave me this verification token: [PASTE THE appfinder-verify=... TOKEN].

Add ownership proof to my website using whichever of these fits my stack best (pick one, do not do all):
A. A plain text file served at /.well-known/appfinder-verification.txt containing only the token on its own line.
B. A meta tag in the <head> of the homepage: <meta name="appfinder-verification" content="TOKEN">.
Explain the change before making it and wait for my OK. After it is deployed, fetch the live URL and confirm the token is present exactly once. Do not touch DNS, and do not sign in to AppFinder for me.

Finish by telling me: the live URL you checked, and "go to Dashboard > your app > Verify ownership and press Check".
```

## Tips

- The token is tied to your app's domain and expires after 14 days.
- Link a Google, GitHub or Microsoft sign-in to your account too: both are needed for the Verified owner mark.

More prompts: https://appfinder.tech/prompts · This one on the site: https://appfinder.tech/prompts/verify-ownership

# arel.dev

A static Chinese learning guide site built with Next.js and hosted on GitHub Pages. The home page introduces Moyu Chinese and Miaozi with screenshots stored in `public/images/`.

## Develop

Requires Node.js 22 and pnpm 11.25.0.

```sh
pnpm install
pnpm dev
```

## Publish a guide

Add a Markdown file to `content/blog/`. The filename becomes the URL slug. Every article needs this frontmatter:

```md
---
title: "A clear article title"
description: "A short summary for the article list and search results."
date: "2026-09-24"
topic: "Reading"
---

Article text here.
```

Use an ISO date in quotes. The home page, guide index, article routes, and sitemap update automatically at build time. Removing a Markdown file removes its route from the static export and sitemap.

Each guide should answer one real reader question early, then show how to apply the answer with concrete examples. Check Chinese, pinyin, translations, product claims, and any cited sources before publishing. Keep the writing plain and original. Link to Moyu or Miaozi only where the product fits the reader's next step.

## Deploy

`pnpm build` exports the site to `out/`. Pushing to `main` runs the GitHub Pages workflow. The custom domain is `arel.dev`; its authoritative DNS is managed in Cloudflare. The apex A records and `www` CNAME are DNS only, so GitHub Pages handles HTTPS and redirects. There is no server-side runtime or analytics.

# arel.dev

A static, Chinese-learning guide site built with Next.js and hosted on GitHub Pages. It features original articles and links to Moyu Chinese and Miaozi.

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

Use an ISO date in quotes. The home page, guide index, article routes, and sitemap update automatically at build time. Keep articles original and useful on their own; link to Moyu or Miaozi only where the tool fits the reader's next step.

## Deploy

`pnpm build` exports the site to `out/`. Pushing to `main` runs the GitHub Pages workflow. The custom domain is `arel.dev`; its authoritative DNS is managed in Cloudflare. The apex A records and `www` CNAME are DNS only, so GitHub Pages handles HTTPS and redirects. There is no server-side runtime or analytics.

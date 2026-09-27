# arel.dev

A static Chinese learning guide site built with Next.js and hosted on GitHub Pages. Its localized home pages introduce Moyu Chinese and Miaozi. Screenshots, product icons, the arel mascot, and guide illustrations are stored in `public/images/`.

## Develop

Requires Node.js 22 and pnpm 11.25.0.

```sh
pnpm install
pnpm dev
```

## Publish a guide

Add a Markdown file to `content/blog/en/`. The filename becomes the URL slug under `/en/blog/`. Every article needs this frontmatter:

```md
---
title: "A clear article title"
description: "A short summary for the article list and search results."
date: "2026-09-24"
image: "/images/guides/example-guide.webp"
imageAlt: "A description of the guide illustration"
---

Article text here.
```

Use an ISO date in quotes. The home page, guide index, article routes, and sitemap update automatically at build time. Removing a Markdown file removes its route from the static export and sitemap.

The `image` and `imageAlt` fields are optional. When supplied, use a local 3:2 WebP file in `public/images/guides/`; it appears in the guide list, article header, and social preview metadata.

If a guide changes substantially, add an `updated` date in the same ISO format. The sitemap then uses that date as its last modification date.

For Chinese text that readers can switch between scripts, write both forms as `[[zh:简体|繁體]]`. The first form is shown by default. The choice is saved in the browser and applies across guides; English text and images do not change.

Each guide should answer one real reader question early, then show how to apply the answer with concrete examples. Check Chinese, pinyin, translations, product claims, and any cited sources before publishing. Keep the writing plain and original. Link to Moyu or Miaozi only where the product fits the reader's next step.

## Languages and search URLs

Home pages use locale paths: `/en/`, `/es/`, `/de/`, `/fr/`, `/pt-BR/`, `/vi/`, `/id/`, `/ja/`, `/ko/`, and `/th/`. The locale list lives in `src/lib/site.ts` and matches Moyu Chinese. Home and navigation copy lives in `src/lib/copy.ts` and should be reviewed by fluent speakers before major editorial changes.

Guides are English only for now, at `/en/blog/` and `/en/blog/<slug>/`. Other home pages link to those English guides. To publish a translated guide later, add a complete Markdown file with the same slug under `content/blog/<locale>/`. A locale's guide index is generated when it has at least one guide. Translators should review the guide title, description, image alt text, Chinese examples, and any links. `src/lib/copy.ts` already contains guide-index interface copy for the supported locales.

Canonical URLs, language alternates, and the sitemap are generated from the pages that exist. Home pages include reciprocal `hreflang` links for all ten locales; guide pages get them only after translations of the same page are published. Untranslated guide paths stay absent from the export and sitemap. `/`, `/blog/`, and the two old guide URLs use immediate HTML redirects to their `/en/` versions. GitHub Pages serves static files, so these redirects cannot use HTTP 301 status codes.

## Deploy

`pnpm build` exports the site to `out/`. Pushing to `main` runs the GitHub Pages workflow. The custom domain is `arel.dev`; its authoritative DNS is managed in Cloudflare. The apex A records and `www` CNAME are DNS only, so GitHub Pages handles HTTPS and redirects. There is no server-side runtime or analytics.

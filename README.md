# arel.dev

A static Chinese learning guide site built with Next.js and hosted on GitHub Pages. Its localized home pages introduce Moyu Chinese and Miaozi. Screenshots, product icons, the arel mascot, and guide illustrations are stored in `public/images/`.

## Develop

Requires Node.js 22 and pnpm 11.25.0.

```sh
pnpm install
pnpm dev
```

## Publish a guide

Choose a topic from [the content roadmap](./CONTENT_ROADMAP.md) and follow
[the Arel authoring guide](./BLOG_AUTHORING_GUIDE.md) for research, writing,
Chinese checks, and review. The roadmap tracks published guides, the next
brief, and ideas that still need research; it does not impose a posting quota.

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

Guide listings are translated at `/<locale>/blog/` for every supported locale. The current articles remain English at `/en/blog/<slug>/`; translated listings link there and say that the article bodies are in English. Listing preview translations live in `src/lib/copy.ts`. To publish a translated article later, add a complete Markdown file with the same slug under `content/blog/<locale>/`. The listing then links to that local version automatically. Translators should review the guide title, description, image alt text, Chinese examples, and any links.

Canonical URLs, language alternates, and the sitemap are generated from the pages that exist. Home pages and guide listings include reciprocal `hreflang` links for all ten locales; individual articles get them only after translations of the same article are published. Untranslated article paths stay absent from the export and sitemap. `/`, `/blog/`, and the two old article URLs use immediate HTML redirects to their `/en/` versions. The build replaces their Next.js pages with tiny, text-free redirect documents whose refresh tags appear first in the HTML head. GitHub Pages serves static files, so these redirects cannot use HTTP 301 status codes.

## Deploy

`pnpm build` exports the site to `out/`. Pushing to `main` runs the GitHub Pages workflow. The custom domain is `arel.dev`; its authoritative DNS is managed in Cloudflare. The apex A records and `www` CNAME are DNS only, so GitHub Pages handles HTTPS and redirects. There is no server-side runtime or analytics.

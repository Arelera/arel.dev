# arel.dev

A static, stars-only home page built with Next.js and hosted on GitHub Pages.

## Develop

Requires Node.js 22 and pnpm 11.25.0.

```sh
pnpm install
pnpm dev
```

## Publish

`pnpm build` exports the site to `out/`. Pushing to `main` runs the GitHub Pages workflow. The custom domain is `arel.dev`; its DNS is managed in DigitalOcean. There is no server-side runtime or analytics.

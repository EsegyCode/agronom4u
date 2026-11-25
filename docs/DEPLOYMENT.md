# Deployment (Agronom4u)

Purpose: build and publish notes based on the repository configuration and scripts.

## Build

```sh
npm run build
npm run preview
```

`npm run build` includes the `prebuild` hook, which runs `npm run og` before `astro build`. Direct Astro build without OG regeneration is available as `npm run build:only`.

Output folder: `dist/`.

## Hosting

The site URL is configured as `https://agronom4u.com` in `astro.config.mjs` and `src/data/site.ts`. TODO (owner): hosting provider, dashboard settings, CI/CD and the exact deploy command are not documented in this repository.

## Environment variables

This project does not read environment variables. None need to be set in a hosting dashboard.

## Cache and assets

- OG images are generated PNG files under `public/og/`; the build copies them to `dist/og/`.
- `verify-dist.mjs` confirms sitemap and OG files after a build.
- Add a new OG card by extending the `CARDS` array in `scripts/generate-og.mjs`, then run `npm run og`.

## Post-deploy checklist

- Open the home page and a crop detail page.
- Check calculators and the blog index.
- Confirm `robots.txt`, `sitemap-index.xml`, `sitemap-0.xml` and `llms.txt`.
- Confirm an OG image URL such as `/og/default.png`.
- Run `npm run build` and `node scripts/verify-dist.mjs` before release.
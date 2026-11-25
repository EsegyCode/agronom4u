# Architecture (Agronom4u)

Purpose: explain how the repository is organized and how the static site is built.

## Rendering model

The site is a static Astro application. There is no server rendering, database or authentication. Astro generates HTML files during `npm run build`.

## Page and component map

- `src/layouts/BaseLayout.astro`: shared HTML shell, title, description, canonical URL, Open Graph, Twitter, JSON-LD and main navigation.
- `src/components/Header.astro`: site header and responsive navigation.
- `src/components/Footer.astro`: footer columns generated from `FOOTER_COLUMNS` in `src/data/site.ts`.
- Route files in `src/pages/` map directly to output paths.
- Crop detail routes use dynamic parameters: `src/pages/crops/field/[crop]/index.astro` and `[topic].astro`.

## Data sources

All editable content is TypeScript data:

- `src/data/site.ts`: site name, URL, title, description, region, email, navigation and footer.
- `src/data/fieldCrops.ts`: four field crops and 13 topics each.
- `src/data/gardenCrops.ts`: 18 garden crops.
- `src/data/faq.ts`: FAQ questions and answers.
- `src/data/blog.ts`: blog posts.

Pages import these modules and render lists and topic text directly.

## AI-facing data flow

```text
src/data/*.ts -> src/pages/llms.txt.ts -> dist/llms.txt
```

The endpoint reads crop, garden and blog data and returns a plain-text link list for AI crawlers.

## Build pipeline

1. Optional OG generation: `npm run og` runs `scripts/generate-og.mjs` and writes PNG files to `public/og/`.
2. `npm run build` runs the prebuild hook `npm run og`, then `astro build`.
3. Astro renders pages and writes static files to `dist/`.
4. `scripts/verify-dist.mjs` can be run manually to check internal links and expected artifacts.

## Assets and styling

- Global styles live in `src/styles/global.css`.
- Static files from `public/` are copied to `dist/`.
- Generated OG PNGs are committed under `public/og/`.

## What the scripts do

- `scripts/generate-og.mjs`: defines 12 card payloads, builds an SVG for each, renders PNG with Sharp.
- `scripts/verify-dist.mjs`: walks `dist/`, checks `href="/..."` targets, counts pages/files, verifies robots, llms, sitemap and OG files.
# Agronom4u

Purpose: practical Ukrainian-language agricultural portal for field and garden crop cultivation, calculators, crop rotation and a blog.

Live site: `https://agronom4u.com` (`astro.config.mjs`). Status: static Astro site. License: TODO (owner).

## Key features

- Field crop guides: soy, wheat, corn and sunflower, 13 topics each.
- Guides for 18 garden crops.
- Calculators for germination/norm, yield and 1 ha economics.
- Crop-rotation planner with recommended sequence.
- Blog, FAQ, gallery and mobile app landing.
- `/llms.txt` generated from TypeScript data.
- Sitemap, robots, canonical URLs, JSON-LD Organization schema.
- See [Features](docs/FEATURES.md).

## Tech stack

| Area | Technology | Notes |
| --- | --- | --- |
| Framework | Astro 5.1 | static SSG |
| Languages | TypeScript and JavaScript | data in `.ts`, OG script `.mjs` |
| Styling | Custom CSS | `src/styles/global.css` |
| Images | Sharp + pre-generated PNGs | `scripts/generate-og.mjs`, `public/og/` |
| SEO | `@astrojs/sitemap`, robots, llms, JSON-LD | `astro.config.mjs` |
| Build check | `scripts/verify-dist.mjs` | checks links/artifacts |

## Quick start

```sh
npm install
npm run dev
npm run build
npm run preview
```

Dev server uses Astro defaults (usually `localhost:4321`). Build output: `dist/`.
Scripts from `package.json`: `dev`, `build`, `build:only`, `og`, `preview`, `astro`.

## Environment variables

No environment variables are read by this project. No `.env.example` is expected or present.

## Project structure

```text
agronom4u/
├── src/data/                 # site, crops, blog, FAQ
├── src/pages/                # crop, calculator, blog, FAQ routes
├── src/layouts, components    # layout and navigation
├── public/                   # assets, robots.txt, OG PNGs
├── scripts/                  # OG generation and dist check
└── astro.config.mjs
```

## Documentation

- [Features](docs/FEATURES.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Deployment](docs/DEPLOYMENT.md)
- [FAQ](docs/FAQ.md)
- [Content guide](docs/CONTENT-GUIDE.md)
- [SEO](docs/SEO.md)
- [Changelog](docs/CHANGELOG.md)
- [Українська версія](README.uk.md)

## Deployment

Static `dist/` output. Configured site URL is `https://agronom4u.com`. Hosting provider, CI and exact deploy command are not documented in the repository: TODO (owner).

## Notes

Contact in source: `info@agronom4u.com`. License: TODO (owner). Agronom field notes come from `Аграрка.docx` at the project root.
# Content Guide (Agronom4u)

Purpose: map editable content to files and explain data shapes.

## Content files

- `src/data/site.ts`: site name, URL, page title, description, email, navigation, footer.
- `src/data/fieldCrops.ts`: 4 field crops and 13 topics per crop.
- `src/data/gardenCrops.ts`: 18 garden crops with category and season.
- `src/data/faq.ts`: FAQ items with `question`, `answer`, `category`.
- `src/data/blog.ts`: blog posts with title, excerpt and slug.
- `src/pages/llms.txt.ts`: assembles AI-facing link list.

## Field crop shape

`FieldCrop` includes `slug`, `name`, `latinName`, `badge`, `tagline`, `description`, `subdomain`, `keyStats` and `topics`.

`TopicMeta` includes `slug`, `order`, `title`, `shortDesc` and `icon`.

`TopicContent` includes `summary`, `keyMetrics`, `steps` and `notes`.

## Garden crop shape

Garden crops expose at least `name`, `category`, `season` and `slug`, used by `llms.txt.ts`.

## Blog post shape

Blog posts expose at least `title`, `excerpt` and `slug`.

## Checklist for adding an FAQ item

1. Add one object to `FAQ_ITEMS`.
2. Keep `question`, `answer` and `category` populated.
3. Rebuild and check the FAQ page.
4. Add relevant OG or image assets only if needed.
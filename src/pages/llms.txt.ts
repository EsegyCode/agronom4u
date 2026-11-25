import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { FIELD_CROPS, FIELD_TOPICS } from '../data/fieldCrops';
import { GARDEN_CROPS } from '../data/gardenCrops';
import { BLOG_POSTS } from '../data/blog';

export const GET: APIRoute = () => {
  const fieldLines = Object.values(FIELD_CROPS)
    .map(
      (c) =>
        `- [${c.name}](${SITE.url}/crops/field/${c.slug}/index.html): ${c.tagline}`
    )
    .join('\n');

  const gardenLines = GARDEN_CROPS.map(
    (g) =>
      `- [${g.name}](${SITE.url}/crops/garden/${g.slug}/index.html): ${g.category} (${g.season})`
  ).join('\n');

  const blogLines = BLOG_POSTS.map(
    (p) => `- [${p.title}](${SITE.url}/blog/posts/${p.slug}.html): ${p.excerpt}`
  ).join('\n');

  const body = `# ${SITE.name} (${SITE.shortName})

> ${SITE.description}

Регіон: ${SITE.region}.
Мова: Українська (uk).
Первинне джерело виробничих нормативів: нотатки агрофірми (обробіток ґрунту, сівозміна «Соняшник → Кукурудза → Соя → Пшениця», норми висіву, добрива та економіка на 1 га).

## Польові культури
${fieldLines}

Кожна польова культура містить ${FIELD_TOPICS.length} структурованих розділів:
${FIELD_TOPICS.map((t) => `${t.order}. ${t.title} (\`${t.slug}.html\`)`).join('\n')}

## Інструменти та калькулятори
- [Калькулятор польової схожості та норми висіву](${SITE.url}/calculators/germination.html)
- [Калькулятор врожайності](${SITE.url}/calculators/yield.html)
- [Калькулятор економіки 1 га](${SITE.url}/calculators/economics.html)
- [Планер сівозміни](${SITE.url}/crop-rotation/index.html)

## Городні культури (${GARDEN_CROPS.length})
${gardenLines}

## Блог та польові нотатки
${blogLines}

## Інші розділи
- [Часті запитання (FAQ)](${SITE.url}/faq/index.html)
- [Фотогалерея](${SITE.url}/gallery/index.html)
- [Мобільний застосунок для Android](${SITE.url}/app/index.html)
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

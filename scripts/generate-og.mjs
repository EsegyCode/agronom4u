import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const OUT_DIR = path.resolve('public', 'og');
fs.mkdirSync(OUT_DIR, { recursive: true });

const CARDS = [
  {
    file: 'default.png',
    badge: 'АГРАРНИЙ ПОРТАЛ УКРАЇНИ',
    title: 'Агроном для тебе',
    subtitle: 'Технології вирощування культур, калькулятори посіву, сівозміна та економіка 1 га',
  },
  {
    file: 'field-soy.png',
    badge: 'ПОЛЬОВА КУЛЬТУРА • 13 РОЗДІЛІВ',
    title: 'Соя — технологія вирощування',
    subtitle: 'Сорти Яструбинський та Канзас, Клен 450к / Great Plains 118к, Карбамід, Бор та ЗЗР',
  },
  {
    file: 'field-wheat.png',
    badge: 'ПОЛЬОВА КУЛЬТУРА • 13 РОЗДІЛІВ',
    title: 'Пшениця — путівник агронома',
    subtitle: 'Норма висіву 5.5 млн/га, коткування після сівби, весняний КАС-32 (200 кг/га)',
  },
  {
    file: 'field-corn.png',
    badge: 'ПОЛЬОВА КУЛЬТУРА • 13 РОЗДІЛІВ',
    title: 'Кукурудза — технологічна карта',
    subtitle: 'Схема 70 × 20 см (72 тис./га), 2 боронування, індюшачий послід, оранка',
  },
  {
    file: 'field-sunflower.png',
    badge: 'ПОЛЬОВА КУЛЬТУРА • 13 РОЗДІЛІВ',
    title: 'Соняшник — гід по полю',
    subtitle: 'Сівба 55 тис./га (35 × 25 см), ґрунтові гербіциди о/к і д/к, підживлення карбамідом',
  },
  {
    file: 'garden.png',
    badge: 'ГОРОДНІ КУЛЬТУРИ • 18 КУЛЬТУР',
    title: 'Город та присадибна ділянка',
    subtitle: 'Помідор, огірок, цибуля, часник, морква, ягідні та зелень — поради і схеми догляду',
  },
  {
    file: 'calculators.png',
    badge: 'ІНСТРУМЕНТИ АГРОНОМА',
    title: 'Агрокалькулятори онлайн',
    subtitle: 'Польова схожість і норма висіву (кг/га), прогноз врожайності та економіка 1 га',
  },
  {
    file: 'rotation.png',
    badge: 'СІВОЗМІНА',
    title: 'Планер сівозміни поля',
    subtitle: 'Оптимальне чергування: Соняшник → Кукурудза → Соя → Пшениця',
  },
  {
    file: 'blog.png',
    badge: 'БЛОГ ТА ПОЛЬОВІ НОТАТКИ',
    title: 'Новини та практика агрофірми',
    subtitle: 'Реальний досвід обробітку ґрунту, сівби, живлення та розрахунку рентабельності',
  },
  {
    file: 'app.png',
    badge: 'МОБІЛЬНИЙ ЗАСТОСУНОК ANDROID',
    title: 'Agronom4u у твоєму смартфоні',
    subtitle: 'Планер посіву, сівозміна, калькулятор цін та база надійних постачальників',
  },
  {
    file: 'gallery.png',
    badge: 'ФОТОГАЛЕРЕЯ',
    title: 'Польові роботи та культури',
    subtitle: 'Візуальна хроніка обробітку, сівби, догляду за посівами та збирання врожаю',
  },
  {
    file: 'faq.png',
    badge: 'ЧАСТІ ЗАПИТАННЯ',
    title: 'Довідка по базі знань',
    subtitle: 'Джерела даних, актуальність нормативів та адаптація під регіони України',
  },
];

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function wrapText(text, maxChars = 48) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const w of words) {
    if ((current + ' ' + w).trim().length > maxChars) {
      if (current) lines.push(current.trim());
      current = w;
    } else {
      current = (current + ' ' + w).trim();
    }
  }
  if (current) lines.push(current.trim());
  return lines.slice(0, 3);
}

function buildSvg({ badge, title, subtitle }) {
  const titleLines = wrapText(title, 30);
  const subLines = wrapText(subtitle, 56);

  const titleSvg = titleLines
    .map(
      (line, idx) =>
        `<text x="80" y="${255 + idx * 66}" font-family="Segoe UI, Arial, sans-serif" font-size="54" font-weight="800" fill="#ffffff">${escapeXml(line)}</text>`
    )
    .join('');

  const subStartY = 255 + titleLines.length * 66 + 22;
  const subSvg = subLines
    .map(
      (line, idx) =>
        `<text x="80" y="${subStartY + idx * 36}" font-family="Segoe UI, Arial, sans-serif" font-size="26" font-weight="400" fill="#d8f3dc">${escapeXml(line)}</text>`
    )
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b2818"/>
      <stop offset="55%" stop-color="#1b4332"/>
      <stop offset="100%" stop-color="#2d6a4f"/>
    </linearGradient>
    <radialGradient id="glow" cx="88%" cy="18%" r="48%">
      <stop offset="0%" stop-color="#8bc34a" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="#8bc34a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <!-- Decorative grid lines -->
  <path d="M0 520 Q 400 470 800 530 T 1200 490 L 1200 630 L 0 630 Z" fill="#143622" opacity="0.65"/>
  <rect x="80" y="72" width="48" height="48" rx="14" fill="#2d6a4f" stroke="#8bc34a" stroke-width="2"/>
  <path d="M104 111V89" stroke="#8bc34a" stroke-width="3" stroke-linecap="round"/>
  <path d="M104 102C104 95 110 89 117 89C117 96 111 102 104 102Z" fill="#8bc34a"/>
  <path d="M104 96C104 89 98 83 91 83C91 90 97 96 104 96Z" fill="#4ade80"/>
  <text x="144" y="103" font-family="Segoe UI, Arial, sans-serif" font-size="26" font-weight="800" fill="#ffffff">Agronom<tspan fill="#8bc34a">4u</tspan></text>

  <!-- Badge -->
  <rect x="80" y="148" width="${Math.min(580, badge.length * 13 + 44)}" height="36" rx="18" fill="#8bc34a" fill-opacity="0.18" stroke="#8bc34a" stroke-width="1.2"/>
  <text x="102" y="172" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="700" fill="#a7f3d0" letter-spacing="1.4">${escapeXml(badge)}</text>

  ${titleSvg}
  ${subSvg}

  <!-- Bottom bar -->
  <text x="80" y="576" font-family="Segoe UI, Arial, sans-serif" font-size="20" font-weight="600" fill="#8bc34a">agronom4u.com • Україна</text>
</svg>`;
}

async function main() {
  for (const card of CARDS) {
    const svg = buildSvg(card);
    const outPath = path.join(OUT_DIR, card.file);
    await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(outPath);
  }
  console.log(`Generated ${CARDS.length} OG images in public/og/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

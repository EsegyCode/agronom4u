export const SITE = {
  name: 'Агроном для тебе',
  shortName: 'Agronom4u',
  url: 'https://agronom4u.com',
  title: 'Агроном для тебе — допомога з вирощуванням будь-якої культури',
  description:
    'Практичний аграрний портал України: технологічні карти сої, пшениці, кукурудзи, соняшнику та 18 городніх культур, калькулятори посіву та економіки, сівозміна.',
  region: 'Україна',
  email: 'info@agronom4u.com',
};

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Головна', href: '/index.html' },
  {
    label: 'Польові культури',
    href: '/crops/field/index.html',
    children: [
      { label: 'Соя', href: '/crops/field/soy/index.html', desc: 'Детальний путівник: 13 етапів' },
      { label: 'Пшениця', href: '/crops/field/wheat/index.html', desc: 'Озима та яра, КАС-32, норми' },
      { label: 'Кукурудза', href: '/crops/field/corn/index.html', desc: 'Міжряддя 70 см, 72 тис./га' },
      { label: 'Соняшник', href: '/crops/field/sunflower/index.html', desc: 'Сівба 55 тис./га, ґрунтові ЗЗР' },
    ],
  },
  { label: 'Городні культури', href: '/crops/garden/index.html' },
  {
    label: 'Калькулятори',
    href: '/calculators/index.html',
    children: [
      { label: 'Польова схожість та норма висіву', href: '/calculators/germination.html' },
      { label: 'Прогноз врожайності', href: '/calculators/yield.html' },
      { label: 'Економіка 1 га', href: '/calculators/economics.html' },
    ],
  },
  { label: 'Сівозміна', href: '/crop-rotation/index.html' },
  { label: 'Галерея', href: '/gallery/index.html' },
  { label: 'Блог', href: '/blog/index.html' },
  { label: 'Застосунок', href: '/app/index.html' },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Польові культури',
    links: [
      { label: 'Всі польові культури', href: '/crops/field/index.html' },
      { label: 'Соя (детальний гід)', href: '/crops/field/soy/index.html' },
      { label: 'Пшениця', href: '/crops/field/wheat/index.html' },
      { label: 'Кукурудза', href: '/crops/field/corn/index.html' },
      { label: 'Соняшник', href: '/crops/field/sunflower/index.html' },
    ],
  },
  {
    title: 'Інструменти агронома',
    links: [
      { label: 'Калькулятор норми висіву', href: '/calculators/germination.html' },
      { label: 'Калькулятор врожайності', href: '/calculators/yield.html' },
      { label: 'Економіка вирощування (1 га)', href: '/calculators/economics.html' },
      { label: 'Планер сівозміни', href: '/crop-rotation/index.html' },
      { label: 'Мобільний застосунок', href: '/app/index.html' },
    ],
  },
  {
    title: 'База знань',
    links: [
      { label: 'Городні культури (18)', href: '/crops/garden/index.html' },
      { label: 'Блог та польові нотатки', href: '/blog/index.html' },
      { label: 'Фотогалерея', href: '/gallery/index.html' },
      { label: 'Часті запитання (FAQ)', href: '/faq/index.html' },
      { label: 'LLMs.txt (для AI)', href: '/llms.txt' },
    ],
  },
];

import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  const res = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) res.push(...walk(p));
    else res.push(p);
  }
  return res;
}

const files = walk('dist');
const htmls = files.filter((f) => f.endsWith('.html'));
const broken = [];

for (const f of htmls) {
  const html = fs.readFileSync(f, 'utf8');
  for (const m of html.matchAll(/href="(\/[^"]+)"/g)) {
    const target = m[1].split('#')[0];
    if (!fs.existsSync(path.join('dist', target))) {
      broken.push({ f, target });
    }
  }
}

console.log({
  totalFiles: files.length,
  htmlPages: htmls.length,
  brokenCount: broken.length,
  robots: fs.existsSync('dist/robots.txt'),
  llms: fs.existsSync('dist/llms.txt'),
  sitemapIndex: fs.existsSync('dist/sitemap-index.xml'),
  sitemap0: fs.existsSync('dist/sitemap-0.xml'),
  ogPngs: files.filter((f) => f.endsWith('.png')).length,
  logoSvg: fs.existsSync('dist/logo.svg'),
  logoDarkSvg: fs.existsSync('dist/logo-dark.svg'),
});

if (broken.length > 0) {
  console.error('Broken links:', broken.slice(0, 10));
  process.exit(1);
}

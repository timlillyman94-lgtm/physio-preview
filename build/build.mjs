/* Build the static site. Usage: node build/build.mjs  (run from site-preview/) */
import { writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { registry, render, PREVIEW, site, prodUrl } from './lib.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '..');

/* Import every content module so it registers itself. Order does not matter —
   cross-page references (related, breadcrumbs, cards) resolve at render time. */
const files = readdirSync(join(here, 'content')).filter((f) => f.endsWith('.mjs')).sort();
for (const f of files) await import(`./content/${f}`);

const pages = Object.values(registry);
let words = 0;

for (const p of pages) {
  const html = render(p);
  writeFileSync(join(out, `${p.slug}.html`), html, 'utf8');
  const w = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]*>/g, ' ')
    .replace(/&[a-z]+;/g, ' ').split(/\s+/).filter(Boolean).length;
  words += w;
  console.log(`  ${String(w).padStart(5)} words  ${p.slug}.html`);
}

/* robots.txt + sitemap.xml */
writeFileSync(join(out, 'robots.txt'),
  PREVIEW ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`, 'utf8');

const indexable = pages.filter((p) => p.group !== 'meta');
writeFileSync(join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${
    indexable.map((p) => `  <url><loc>${prodUrl(p.slug)}</loc><priority>${
      p.slug === 'index' ? '1.0' : p.schema ? '0.8' : '0.6'}</priority></url>`).join('\n')
  }\n</urlset>\n`, 'utf8');

console.log(`\n  ${pages.length} pages, ${words} words total. PREVIEW=${PREVIEW}` +
  (PREVIEW ? '  (noindex + banner ON — see tracker P6-03)' : '  ** LIVE: noindex removed **'));

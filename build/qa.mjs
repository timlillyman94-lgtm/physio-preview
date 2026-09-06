import { readFileSync, readdirSync, existsSync } from 'node:fs';
const files = readdirSync('.').filter(f => f.endsWith('.html'));
let fail = 0;
const say = (ok, msg) => { if (!ok) fail++; console.log((ok ? '  ok   ' : '  FAIL ') + msg); };

// 1. internal links resolve
const missing = new Set();
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    let h = m[1];
    if (/^(https?:|mailto:|tel:|#)/.test(h)) continue;
    const [path, hash] = h.split('#');
    if (!path) continue;
    if (!existsSync(path)) missing.add(`${f} -> ${path}`);
    else if (hash && path.endsWith('.html')) {
      const t = readFileSync(path, 'utf8');
      if (!t.includes(`id="${hash}"`)) missing.add(`${f} -> ${h} (no anchor)`);
    }
  }
  // same-page anchors
  for (const m of html.matchAll(/href="#([^"]+)"/g))
    if (!html.includes(`id="${m[1]}"`)) missing.add(`${f} -> #${m[1]} (no anchor)`);
}
say(missing.size === 0, `internal links resolve${missing.size ? '\n         ' + [...missing].join('\n         ') : ''}`);

// 2. src assets exist
const badSrc = new Set();
for (const f of files) for (const m of readFileSync(f, 'utf8').matchAll(/src="([^"]+)"/g))
  if (!/^https?:/.test(m[1]) && !existsSync(m[1])) badSrc.add(`${f} -> ${m[1]}`);
say(badSrc.size === 0, `image/asset src paths exist ${[...badSrc].join(', ')}`);

// 3. JSON-LD parses on every page
const bad = [];
for (const f of files) {
  const m = readFileSync(f, 'utf8').match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!m) { bad.push(`${f}: none`); continue; }
  try { JSON.parse(m[1]); } catch (e) { bad.push(`${f}: ${e.message}`); }
}
say(bad.length === 0, `JSON-LD parses on all ${files.length} pages ${bad.join(' | ')}`);

// 4. AHPRA: no ratings/reviews/testimonials anywhere
const banned = files.filter(f => /aggregateRating|"review"|ratingValue|testimonial|★|stars/i.test(readFileSync(f, 'utf8')));
say(banned.length === 0, `no rating/review/testimonial markup ${banned.join(', ')}`);

// 5. noindex on every page (P6-03 gate)
const noRobots = files.filter(f => !readFileSync(f, 'utf8').includes('noindex, nofollow'));
say(noRobots.length === 0, `noindex present on all pages ${noRobots.join(', ')}`);

// 6. unique titles + descriptions (P1-25)
const seen = {};
for (const f of files) {
  const h = readFileSync(f, 'utf8');
  const t = h.match(/<title>([^<]*)<\/title>/)[1];
  const d = h.match(/<meta name="description" content="([^"]*)"/)[1];
  (seen[t] ||= []).push(f); (seen['D:' + d] ||= []).push(f);
}
const dupes = Object.entries(seen).filter(([, v]) => v.length > 1);
say(dupes.length === 0, `all titles + descriptions unique ${dupes.map(([k, v]) => k + '=' + v).join(' | ')}`);

// 7. title length sanity
const longT = files.map(f => [f, readFileSync(f, 'utf8').match(/<title>([^<]*)<\/title>/)[1]])
  .filter(([, t]) => t.replace(/&amp;/g, '&').length > 62);
say(longT.length === 0, `titles <= 62 chars ${longT.map(([f, t]) => `${f}(${t.length})`).join(', ')}`);

// 8. meta description length
const badD = files.map(f => [f, readFileSync(f, 'utf8').match(/<meta name="description" content="([^"]*)"/)[1]])
  .filter(([, d]) => d.length < 70 || d.length > 165);
say(badD.length === 0, `descriptions 70-165 chars ${badD.map(([f, d]) => `${f}(${d.length})`).join(', ')}`);

// 9. exactly one h1 per page
const h1 = files.filter(f => (readFileSync(f, 'utf8').match(/<h1[ >]/g) || []).length !== 1);
say(h1.length === 0, `exactly one <h1> per page ${h1.join(', ')}`);

// 10. no leftover green accent
const green = files.concat(['styles.css']).filter(f => /#0?[0-9a-f]?7[0-9a-f]a[0-9a-f]{3}|#2e7d32|#4caf50|green/i.test(readFileSync(f, 'utf8')));
say(green.length === 0, `no green accent remains ${green.join(', ')}`);

// 11. every service page has FAQPage + Service schema
const svc = ['workcover','ndis','dry-needling','sports-injury','neck-back-pain','vertigo-headaches','acl-injuries','running-injuries'];
const noFaq = svc.filter(s => !readFileSync(s + '.html', 'utf8').includes('"FAQPage"'));
const noSvc = svc.filter(s => !readFileSync(s + '.html', 'utf8').includes('"@type": "Service"'));
say(noFaq.length === 0, `FAQPage schema on all 8 service pages ${noFaq.join(', ')}`);
say(noSvc.length === 0, `Service schema on all 8 service pages ${noSvc.join(', ')}`);

// 12. every service page has >=4 FAQ questions
const fewFaq = svc.filter(s => (readFileSync(s + '.html','utf8').match(/<details/g)||[]).length < 4);
say(fewFaq.length === 0, `>=4 FAQ items per service page ${fewFaq.join(', ')}`);

// 13. MedicalBusiness/Physiotherapy schema site-wide (P1-16)
const noBiz = files.filter(f => !readFileSync(f, 'utf8').includes('"Physiotherapy"'));
say(noBiz.length === 0, `MedicalBusiness+Physiotherapy schema on every page ${noBiz.join(', ')}`);

// 14. no orphans — every page linked from at least one other
const all = files.join('\n');
const orphan = files.filter(f => !["index.html","next-steps.html"].includes(f) &&
  !files.filter(o => o !== f).some(o => readFileSync(o, 'utf8').includes(`href="${f}"`)));
say(orphan.length === 0, `no orphan pages (next-steps is reviewer-only, exempt) ${orphan.join(', ')}`);

// 15. NAP consistency
const napBad = files.filter(f => { const h = readFileSync(f,'utf8');
  return !h.includes('4221 9637') || !h.includes('Dapto NSW 2530'); });
say(napBad.length === 0, `NAP (phone + address) on every page ${napBad.join(', ')}`);

// 16. Griffith-branded photos out of hero slots
const heroImgs = new Set();
for (const f of files) for (const m of readFileSync(f,'utf8').matchAll(/class="hero-img"><img src="([^"]+)"/g)) heroImgs.add(m[1]);
const griffith = ['assets/hero.jpg','assets/treatment-1.jpg','assets/treatment-2.jpg','assets/treatment-3.jpg','assets/treatment-4.jpg'];
const bad16 = [...heroImgs].filter(i => griffith.includes(i));
say(bad16.length === 0, `no Griffith-branded photo in a hero slot ${bad16.join(', ')}`);

console.log(fail ? `\n${fail} CHECK(S) FAILED` : '\nAll checks passed.');
process.exit(fail ? 1 : 0);

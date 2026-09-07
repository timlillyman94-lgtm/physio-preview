/* Functional Physiotherapy — static site generator: config, partials, block renderers.
   Content lives in ./content/*.mjs. Entry point is ./build.mjs. */

/* ── Preview flag ──────────────────────────────────────────────────────────────
   PREVIEW=true emits the reviewer banner + <meta robots="noindex, nofollow">.
   Launch task P6-03 is now a one-line change: set this to false and rebuild.     */
export const PREVIEW = true;

export const site = {
  name: 'Functional Physiotherapy',
  legalName: 'Functional Physiotherapy',
  origin: 'https://www.functionalphysio.com.au',
  phone: '(02) 4221 9637',
  phoneHref: 'tel:0242219637',
  phoneIntl: '+61242219637',
  email: 'info@functionalphysio.com.au',
  street: '2/20–30 Princes Highway',
  streetPlain: '2/20-30 Princes Highway',
  building: 'Dapto Medical Professionals',
  locality: 'Dapto',
  region: 'NSW',
  postcode: '2530',
  hours: 'Mon–Fri 8:00am–5:30pm',
  booking:
    'https://functional-physiotherapy.au2.cliniko.com/bookings?business_id=1272182153349699825&practitioner_id=1272182151353211247#service',
  mapQuery: '2/20-30+Princes+Highway,+Dapto+NSW+2530',
  suburbs: [
    'Dapto', 'Wollongong', 'Shellharbour', 'Unanderra', 'Kanahooka',
    'Horsley', 'Berkeley', 'Kembla Grange', 'Albion Park', 'Figtree',
  ],
};

site.mapEmbed = `https://maps.google.com/maps?q=${site.mapQuery}&z=16&output=embed`;
site.mapLink = `https://www.google.com/maps/search/?api=1&query=${site.mapQuery}`;

/* ── small helpers ─────────────────────────────────────────────────────────── */
const esc = (s) => String(s).replace(/&(?!#?\w+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const attr = (s) => String(s).replace(/&(?!#?\w+;)/g, '&amp;').replace(/"/g, '&quot;');
/** strip tags + collapse whitespace — for JSON-LD text values */
export const text = (html) =>
  String(html).replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&').replace(/&ndash;/g, '–').replace(/&middot;/g, '·')
    .replace(/\s+/g, ' ').trim();

const TICK =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

const bookBtn = (label = 'Book an appointment') =>
  `<a class="btn btn-solid" href="${attr(site.booking)}" target="_blank" rel="noopener">${label}</a>`;
const callBtn = () => `<a class="btn btn-line" href="${site.phoneHref}">Call ${site.phone}</a>`;
export const ctaPair = (label) => `<div class="hero-cta">${bookBtn(label)}${callBtn()}</div>`;

/* ── page registry (single source of truth for links, cards, breadcrumbs) ───── */
export const registry = {};
export const register = (page) => { registry[page.slug] = page; return page; };
export const url = (slug) => `${slug}.html`;
/* A page may declare `path` to pin its production URL. Used to preserve URLs that
   already exist and rank on the live Wix site — the migration constraint is that
   nothing moves without a reason. Otherwise the slug is the path. */
export const prodUrl = (slug) => {
  if (slug === 'index') return `${site.origin}/`;
  const p = registry[slug] && registry[slug].path;
  return `${site.origin}/${p || slug}`;
};

/* ── partials ──────────────────────────────────────────────────────────────── */
const NAV = [
  ['services', 'Services'],
  ['team', 'Team'],
  ['blog', 'Blog'],
  ['contact', 'Contact'],
];

function head(p) {
  const robots = PREVIEW ? '\n<meta name="robots" content="noindex, nofollow">' : '';
  const og = [
    ['og:type', p.slug === 'index' ? 'website' : 'article'],
    ['og:site_name', site.name],
    ['og:title', p.title],
    ['og:description', p.metaDesc],
    ['og:url', prodUrl(p.slug)],
    ['og:locale', 'en_AU'],
  ].map(([k, v]) => `<meta property="${k}" content="${attr(v)}">`).join('\n');
  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">${robots}
<title>${esc(p.title)}</title>
<meta name="description" content="${attr(p.metaDesc)}">
<link rel="canonical" href="${attr(prodUrl(p.slug))}">
${og}
<link rel="stylesheet" href="styles.css">
${jsonLd(p)}
</head>
<body>${PREVIEW ? '\n<div class="mock">◍ Concept redesign preview · not the live site · for review</div>' : ''}`;
}

function header(p) {
  const active = p.navActive || p.slug;
  const links = NAV.map(([slug, label]) =>
    `<li><a href="${url(slug)}"${active === slug ? ' class="on"' : ''}>${label}</a></li>`).join('');
  return `
<header class="nav"><div class="wrap">
  <a class="brand" href="index.html"><img src="assets/logo.png" alt="Functional Physiotherapy logo"><span class="nm">Functional Physiotherapy<small>Dapto NSW</small></span></a>
  <nav aria-label="Primary"><ul class="navlinks">${links}</ul></nav>
  <a class="navtel" href="${site.phoneHref}">${site.phone}</a>
  ${bookBtn('Book now')}
  <details class="mnav"><summary aria-label="Menu"><span class="bars"></span></summary>
    <ul>${NAV.map(([s, l]) => `<li><a href="${url(s)}">${l}</a></li>`).join('')}<li><a href="fees-and-rebates.html">Fees &amp; rebates</a></li><li><a href="${site.phoneHref}">Call ${site.phone}</a></li></ul>
  </details>
</div></header>`;
}

function footer() {
  const cols = [
    ['Services', [['sports-injury', 'Sports injury &amp; rehab'], ['dry-needling', 'Dry needling'],
      ['acl-injuries', 'ACL injuries'], ['running-injuries', 'Running injuries']]],
    ['Conditions', [['neck-back-pain', 'Neck &amp; back pain'], ['vertigo-headaches', 'Headaches &amp; vertigo'],
      ['services', 'All services']]],
    ['Funding', [['workcover', 'WorkCover'], ['ndis', 'NDIS'], ['fees-and-rebates', 'Fees &amp; rebates']]],
    ['Clinic', [['team', 'Our team'], ['careers', 'Careers'], ['blog', 'Blog'], ['contact', 'Contact']]],
  ].map(([h, items]) =>
    `<div><h5>${h}</h5><ul>${items.map(([s, l]) => `<li><a href="${url(s)}">${l}</a></li>`).join('')}</ul></div>`).join('\n  ');

  return `
<footer class="foot"><div class="wrap">
  <div class="fbrand">
    <img class="wm light" src="assets/wordmark-black.png" alt="Functional Physiotherapy" width="620" height="177">
    <img class="wm dark" src="assets/wordmark-white.png" alt="Functional Physiotherapy" width="620" height="177">
    <p>Evidence-based physiotherapy for Dapto and the Illawarra. Injury rehab, WorkCover, NDIS, dry needling and more.</p>
    <p class="fnap">${site.street}<br>${site.locality} ${site.region} ${site.postcode}<br>
    Inside ${site.building}<br>
    <a href="${site.phoneHref}">${site.phone}</a><br>
    <a href="mailto:${site.email}">${site.email}</a><br>
    ${site.hours}</p>
  </div>
  ${cols}
</div><div class="wrap"><div class="base">${PREVIEW
    ? 'Concept redesign for review · not the live site · functionalphysio.com.au'
    : `© ${new Date().getFullYear()} Functional Physiotherapy · Dapto NSW`}</div></div></footer>
</body>
</html>`;
}

/* ── JSON-LD ───────────────────────────────────────────────────────────────── */
const CLINIC_ID = `${site.origin}/#clinic`;

function clinicNode() {
  return {
    '@type': ['MedicalBusiness', 'Physiotherapy'],
    '@id': CLINIC_ID,
    name: site.name,
    url: `${site.origin}/`,
    telephone: site.phoneIntl,
    email: site.email,
    priceRange: '$$',
    currenciesAccepted: 'AUD',
    medicalSpecialty: 'Physiotherapy',
    isAcceptingNewPatients: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.streetPlain,
      addressLocality: site.locality,
      addressRegion: site.region,
      postalCode: site.postcode,
      addressCountry: 'AU',
    },
    hasMap: site.mapLink,
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00', closes: '17:30',
    }],
    areaServed: site.suburbs.map((n) => ({ '@type': 'City', name: `${n}, NSW` })),
    availableService: Object.values(registry)
      .filter((p) => p.schema)
      .map((p) => ({ '@type': 'MedicalTherapy', name: p.schema.name, url: prodUrl(p.slug) })),
    // NOTE: no aggregateRating / review — AHPRA restricts testimonials for regulated
    // health services. See PROJECT-TRACKER.md decision log (2026-07). Do not add.
    // TODO (pre-launch): add sameAs[] once GBP + social profile URLs are supplied.
  };
}

function jsonLd(p) {
  const pageId = `${prodUrl(p.slug)}#webpage`;
  const graph = [clinicNode(), {
    '@type': 'WebPage',
    '@id': pageId,
    url: prodUrl(p.slug),
    name: p.title,
    description: p.metaDesc,
    inLanguage: 'en-AU',
    isPartOf: { '@type': 'WebSite', '@id': `${site.origin}/#website`, name: site.name, url: `${site.origin}/` },
    about: { '@id': CLINIC_ID },
  }];

  if (p.slug !== 'index') {
    const trail = [['Home', 'index']];
    if (p.crumbParent) trail.push([registry[p.crumbParent].crumb || registry[p.crumbParent].h1, p.crumbParent]);
    trail.push([p.crumb || p.h1, p.slug]);
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${prodUrl(p.slug)}#breadcrumb`,
      itemListElement: trail.map(([nm, slug], i) => ({
        '@type': 'ListItem', position: i + 1, name: nm, item: prodUrl(slug),
      })),
    });
  }

  if (p.schema) {
    graph.push({
      '@type': 'Service',
      '@id': `${prodUrl(p.slug)}#service`,
      name: p.schema.name,
      serviceType: p.schema.serviceType,
      ...(p.schema.alternateName ? { alternateName: p.schema.alternateName } : {}),
      description: p.schema.description || p.metaDesc,
      url: prodUrl(p.slug),
      provider: { '@id': CLINIC_ID },
      areaServed: site.suburbs.map((n) => ({ '@type': 'City', name: `${n}, NSW` })),
      audience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
      ...(p.schema.offerCatalog ? {
        hasOfferCatalog: {
          '@type': 'OfferCatalog', name: p.schema.name,
          itemListElement: p.schema.offerCatalog.map((n) => ({
            '@type': 'Offer', itemOffered: { '@type': 'MedicalTherapy', name: n },
          })),
        },
      } : {}),
    });
  }

  /* Person nodes — practitioner profiles. Brand searches ("vitucci physiotherapist")
     are already in the GSC baseline, and named practitioners are a real E-E-A-T
     signal for a health service. No `award`/`hasCredential` we cannot evidence. */
  for (const person of p.people || []) {
    graph.push({
      '@type': 'Person',
      '@id': `${prodUrl(p.slug)}#${person.id}`,
      name: person.name,
      jobTitle: person.jobTitle,
      description: text(person.schemaBio || person.bio),
      worksFor: { '@id': CLINIC_ID },
      ...(person.image ? { image: `${site.origin}/${person.image}` } : {}),
      ...(person.alumniOf ? { alumniOf: person.alumniOf.map((n) => ({ '@type': 'CollegeOrUniversity', name: n })) } : {}),
      ...(person.knowsAbout ? { knowsAbout: person.knowsAbout } : {}),
    });
  }

  const faq = (p.blocks || []).find((b) => b.t === 'faq');
  if (faq) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${prodUrl(p.slug)}#faq`,
      isPartOf: { '@id': pageId },
      mainEntity: faq.items.map(({ q, a }) => ({
        '@type': 'Question', name: text(q),
        acceptedAnswer: { '@type': 'Answer', text: text(a) },
      })),
    });
  }

  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 1)
    .replace(/</g, '\\u003c');
  return `<script type="application/ld+json">\n${json}\n</script>`;
}

/* ── block renderers ───────────────────────────────────────────────────────── */
const sh = (b, mid) =>
  `<div class="sh${mid ? ' mid' : ''}">${b.eyebrow ? `<span class="eyebrow">${b.eyebrow}</span>` : ''}` +
  `<h2>${b.h2}</h2>${b.sub ? `<p>${b.sub}</p>` : ''}</div>`;

const tickList = (items) =>
  `<ul class="lst">${items.map((i) => `<li><span class="mk">${TICK}</span><div>${i}</div></li>`).join('')}</ul>`;

const section = (cls, inner) => `\n<section${cls ? ` class="${cls}"` : ''}><div class="wrap">${inner}</div></section>`;

const R = {
  hero(b, p) {
    const trust = (b.trust || []).map((t) => `<span class="t">${TICK} ${t}</span>`).join('');
    return `
<section class="hero"><div class="wrap">
  <div>
    <span class="eyebrow">${p.eyebrow}</span>
    <h1${b.small ? ' class="h1-sm"' : ''}>${p.h1}</h1>
    <p class="lead">${p.lead}</p>
    ${ctaPair()}
    ${trust ? `<div class="trust">${trust}</div>` : ''}
  </div>
  <div class="hero-img"><img src="${b.img}" alt="${attr(b.alt || '')}"></div>
</div></section>`;
  },

  phero(b, p) {
    return `
<section class="phero"><div class="wrap">
  <span class="eyebrow">${p.eyebrow}</span>
  <h1>${p.h1}</h1>
  <p class="lead">${p.lead}</p>
  ${b.cta === false ? '' : ctaPair()}
</div></section>`;
  },

  crumbs(b, p) {
    const items = [['Home', 'index']];
    if (p.crumbParent) items.push([registry[p.crumbParent].crumb, p.crumbParent]);
    const links = items.map(([nm, s]) => `<a href="${url(s)}">${nm}</a>`).join('<span>/</span>');
    return `\n<nav class="crumbs" aria-label="Breadcrumb"><div class="wrap">${links}<span>/</span><b>${p.crumb || p.h1}</b></div></nav>`;
  },

  toc(b) {
    return `\n<nav class="toc" aria-label="On this page"><div class="wrap"><span class="k">On this page</span><ul>` +
      b.items.map(([id, label]) => `<li><a href="#${id}">${label}</a></li>`).join('') +
      `</ul></div></nav>`;
  },

  prose(b) {
    return section(`${b.tone || ''}${b.id ? '' : ''}`.trim(),
      `<div class="narrow"${b.id ? ` id="${b.id}"` : ''}>${b.h2 ? sh(b) : ''}<div class="prose">${b.html}</div></div>`);
  },

  wide(b) {
    return section(b.tone || '', `${b.h2 ? sh(b) : ''}<div class="prose wide">${b.html}</div>`);
  },

  steps(b) {
    const items = b.items.map((s, i) =>
      `<div class="step"><span class="n">${String(i + 1).padStart(2, '0')}</span><div><h3>${s.h3}</h3><p>${s.p}</p></div></div>`).join('');
    return section(b.tone || 'alt', `${sh(b)}<div class="steps"${b.id ? ` id="${b.id}"` : ''}>${items}</div>`);
  },

  cols(b) {
    const col = (c) =>
      `<div><span class="eyebrow">${c.eyebrow}</span><h2 class="h2-sm">${c.h2}</h2>${tickList(c.items)}</div>`;
    return section(b.tone || '', `<div class="cols"${b.id ? ` id="${b.id}"` : ''}>${col(b.left)}${col(b.right)}</div>`);
  },

  split(b) {
    const art = `<div class="art"><img src="${b.img}" alt="${attr(b.alt || '')}"></div>`;
    const body = `<div><span class="eyebrow">${b.eyebrow}</span><h2 class="h2-lg">${b.h2}</h2>` +
      `<div class="prose">${b.html}</div>${b.list ? tickList(b.list) : ''}${b.cta ? ctaPair(b.cta) : ''}</div>`;
    return section(b.tone || 'fresh',
      `<div class="split"${b.id ? ` id="${b.id}"` : ''}>${b.flip ? body + art : art + body}</div>`);
  },

  cards(b) {
    const items = b.items.map((c) =>
      `<div class="card"><h3>${c.h3}</h3>${c.sub ? `<div class="sub">${c.sub}</div>` : ''}<p>${c.p}</p>${
        c.href ? `<a class="cardlink" href="${c.href}">${c.link || 'Learn more'}</a>` : ''}</div>`).join('');
    return section(b.tone || '', `${b.h2 ? sh(b) : ''}<div class="cardgrid c${b.items.length > 3 ? 3 : b.items.length}"${b.id ? ` id="${b.id}"` : ''}>${items}</div>`);
  },

  svcgrid(b) {
    const items = b.items.map((slug, i) => {
      const t = registry[slug];
      if (!t) throw new Error(`svcgrid: unknown page "${slug}"`);
      return `<a class="svc" href="${url(slug)}"><span class="no">${String(i + 1).padStart(2, '0')}</span>` +
        `<h3>${t.card.name}</h3><p>${t.card.blurb}</p><span class="more">Learn more</span></a>`;
    }).join('');
    return section(b.tone || '', `${b.h2 ? sh(b, b.mid) : ''}<div class="svc-grid n${b.items.length}"${b.id ? ` id="${b.id}"` : ''}>${items}</div>${
      b.all ? `<div class="svc-all"><a class="btn btn-line" href="services.html">View all services</a></div>` : ''}`);
  },

  chips(b) {
    return section(b.tone || 'alt',
      `${sh(b)}<div class="suburbs">${b.items.map((s) => `<span>${s}</span>`).join('')}</div>`);
  },

  suburbs(b) {
    return section(b.tone || 'area',
      `${sh(b)}<div class="suburbs">${site.suburbs.map((s, i) =>
        `<span${i === 0 ? ' class="hub"' : ''}>${s}</span>`).join('')}</div>`);
  },

  stats(b) {
    return section(b.tone || 'band',
      `<div class="stats">${b.items.map((s) => `<div class="stat"><div class="n">${s.n}</div><div class="l">${s.l}</div></div>`).join('')}</div>`);
  },

  faq(b) {
    const items = b.items.map((f, i) =>
      `<details${i === 0 ? ' open' : ''}><summary>${f.q}<span class="pm"></span></summary><div class="a">${f.a}</div></details>`).join('\n  ');
    return section(b.tone || 'alt',
      `<div class="narrow" id="${b.id || 'faq'}">${sh({ eyebrow: b.eyebrow || 'Good to know', h2: b.h2, sub: b.sub })}\n  ${items}</div>`);
  },

  related(b) {
    const items = b.items.map((slug) => {
      const t = registry[slug];
      if (!t) throw new Error(`related: unknown page "${slug}"`);
      return `<a class="rel" href="${url(slug)}"><span class="k">${t.groupLabel}</span><h3>${t.card.name}</h3><p>${t.card.blurb}</p><span class="more">Read more</span></a>`;
    }).join('');
    return section(b.tone || '',
      `${sh({ eyebrow: b.eyebrow || 'Keep reading', h2: b.h2 || 'Related pages', sub: b.sub })}<div class="relgrid">${items}</div>`);
  },

  table(b) {
    return section(b.tone || '',
      `${b.h2 ? sh(b) : ''}<div class="tablewrap"${b.id ? ` id="${b.id}"` : ''}><table class="tbl"><thead><tr>${
        b.cols.map((c) => `<th>${c}</th>`).join('')}</tr></thead><tbody>${
        b.rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`)).join('')}</tr>`).join('')
      }</tbody></table></div>${b.note ? `<p class="tnote">${b.note}</p>` : ''}`);
  },

  map(b) {
    return `\n<section class="${b.tone || ''}"><div class="wrap">${b.h2 ? sh(b) : ''}<div class="mapwrap">` +
      `<iframe title="Map to Functional Physiotherapy, ${site.street}, Dapto NSW" src="${attr(site.mapEmbed)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>` +
      `</div><p class="tnote"><a href="${attr(site.mapLink)}" target="_blank" rel="noopener">Open in Google Maps &rarr;</a> · On-site and street parking available · Inside ${site.building}.</p></div></section>`;
  },

  note(b) {
    return section(b.tone || '', `<p class="pnote">${b.html}</p>`);
  },

  raw(b) { return b.html; },

  final(b) {
    const links = b.links
      ? `<div class="hero-cta">${b.links.map((l, i) =>
          `<a class="btn ${i === 0 ? 'btn-solid' : 'btn-line'}" href="${attr(l.href)}">${l.label}</a>`).join('')}</div>`
      : ctaPair(b.cta);
    return `
<section class="final"${b.id ? ` id="${b.id}"` : ''}><div class="wrap">
  <h2>${b.h2}</h2>
  <p>${b.p}</p>
  ${links}
</div></section>`;
  },
};

/* ── page render ───────────────────────────────────────────────────────────── */
export function render(p) {
  const body = (p.blocks || []).map((b) => {
    const fn = R[b.t];
    if (!fn) throw new Error(`${p.slug}: unknown block type "${b.t}"`);
    return fn(b, p);
  }).join('\n');
  return head(p) + header(p) + body + footer() + '\n';
}

/* ── extra block renderers (registered onto R after definition) ────────────── */
R.article = (b, p) => `
<article><section style="padding-bottom:0"><div class="wrap article">
  <div class="meta"><a href="blog.html">&larr; Blog</a> &nbsp;&middot;&nbsp; ${b.cat} &nbsp;&middot;&nbsp; ${b.date}</div>
  <h1>${p.h1}</h1>
  <div class="prose">${b.html}</div>
</div></section></article>`;

R.posts = (b) => section(b.tone || '', `${b.h2 ? sh(b) : ''}<div class="posts">${
  b.items.map((i) => `<a class="post" href="${i.href}">
    <div class="ph"><img src="${i.img}" alt=""></div>
    <div class="b"><span class="cat">${i.cat}</span><h3>${i.h3}</h3><p>${i.p}</p><span class="more">Read more &rarr;</span></div>
  </a>`).join('')}</div>`);

/* items are {name, img} for a real logo, or a bare string for a placeholder slot */
R.partners = (b) => section(b.tone || 'alt', `${sh(b, true)}<div class="partners">${
  b.items.map((it) => (typeof it === 'string'
    ? `<div class="plogo"><span>${it}</span></div>`
    : `<div class="plogo"><img src="${it.img}" alt="${attr(it.name)}" loading="lazy"></div>`)).join('')
}</div>${b.note ? `<p class="tnote mid">${b.note}</p>` : ''}`);

/* img:null renders an explicit empty slot — an unrelated photo in a person card
   would read as a real practitioner, which is exactly what a placeholder must not do. */
R.bios = (b) => section(b.tone || '', `${b.h2 ? sh(b) : ''}<div class="team-grid">${
  b.items.map((m) => `<div class="member"><div class="ph${m.img ? '' : ' empty'}">${
    m.img ? `<img src="${m.img}" alt="${attr(m.alt || '')}">` : '<span>Photo to come</span>'}</div>
    <div class="b"><h3>${m.name}</h3><div class="role">${m.role}</div>${m.bio ? `<p class="mbio">${m.bio}</p>` : ''}</div></div>`).join('')
}</div>${b.note ? `<p class="tnote">${b.note}</p>` : ''}`);

R.contactinfo = (b) => section(b.tone || '', `<div class="loc">
  <div class="loc-info">
    <div class="loc-row"><span class="k">Clinic</span><span class="v">${site.street}, ${site.locality} ${site.region} ${site.postcode}<br><span>Inside ${site.building}</span></span></div>
    <div class="loc-row"><span class="k">Phone</span><span class="v"><a href="${site.phoneHref}">${site.phone}</a></span></div>
    <div class="loc-row"><span class="k">Email</span><span class="v"><a href="mailto:${site.email}">${site.email}</a></span></div>
    <div class="loc-row"><span class="k">Hours</span><span class="v">Monday to Friday<br><span>8:00am &ndash; 5:30pm</span></span></div>
    <div class="loc-row"><span class="k">Parking</span><span class="v">On-site and street parking available</span></div>
    <div class="loc-row"><span class="k">Fees</span><span class="v"><a href="fees-and-rebates.html">Fees &amp; rebates</a> &middot; private health, Medicare, WorkCover, NDIS</span></div>
    <div class="locbtn">${bookBtn('Book online')}</div>
  </div>
  <div class="loc-photo"><img src="${b.img}" alt="${attr(b.alt || '')}"></div>
</div>`);

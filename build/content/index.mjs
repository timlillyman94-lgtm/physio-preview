import { register } from '../lib.mjs';

export default register({
  slug: 'index',
  group: 'core',
  groupLabel: 'Home',
  navActive: '',
  crumb: 'Home',
  card: { name: 'Home', blurb: 'Physiotherapy in Dapto, NSW.' },
  title: 'Functional Physiotherapy Dapto | Trusted Physio in Dapto NSW',
  metaDesc:
    'Evidence-based physiotherapy in Dapto, NSW. Sports injury, back and neck pain, dry needling, WorkCover and NDIS. One-on-one care. Book online today.',
  eyebrow: 'Physiotherapy in Dapto, NSW',
  h1: 'Get back to<br>what you love.',
  lead:
    '<b>Your health, our commitment.</b> Evidence-based, one-on-one physiotherapy in Dapto &mdash; helping people across the Illawarra recover from injury, manage pain and get moving again.',

  blocks: [
    { t: 'hero', img: 'assets/hero-assessment.jpg', alt: 'Physiotherapist assessing a patient&rsquo;s shoulder movement at Functional Physiotherapy',
      trust: ['One-on-one, every session', 'Masters-qualified physiotherapist', 'HICAPS, WorkCover &amp; NDIS'] },

    { t: 'svcgrid', id: 'services', mid: true, eyebrow: 'What we treat',
      h2: 'Physiotherapy services in Dapto',
      sub: 'From a torn hamstring to a decade of back pain, every service has its own page with real detail.',
      items: ['sports-injury', 'neck-back-pain', 'dry-needling', 'workcover', 'ndis', 'vertigo-headaches'],
      all: true },

    { t: 'split', tone: 'fresh', img: 'assets/clinic-room.jpg', alt: 'A treatment room at Functional Physiotherapy',
      eyebrow: 'Our approach',
      h2: 'The Functional Physiotherapy approach',
      html: `
<p>Functional Physiotherapy is led by <a href="team.html">Chris Vitucci</a> &mdash; masters-qualified, with eight years of clinical experience across private practice, sporting teams, aged care and disability services. The way we work is simple: assess properly, explain honestly, treat hands-on, and build the strength underneath it so the problem stays fixed.</p>
<p>Every appointment is one-on-one with your physiotherapist. You get a real explanation of what is going on, treatment on the day, and a plan you can actually follow &mdash; not a printout and a rebooking.</p>`,
      list: [
        'Treatment plans built around your goals, not a template',
        'One-on-one sessions focused on lasting results, not quick fixes, with the <a href="team.html">same physiotherapist</a> each visit',
        'An honest estimate of how long it will take, and why',
        'Private, <a href="workcover.html">WorkCover</a>, <a href="ndis.html">NDIS</a> and Medicare-referred patients welcome',
      ],
      cta: 'Book your first visit' },

    { t: 'stats', items: [
      { n: '8', l: 'years clinical experience' },
      { n: '1:1', l: 'every session, every time' },
      { n: '9', l: 'services with their own page' },
      { n: '5', l: 'ways to fund your care' },
    ] },

    { t: 'cards', tone: '', eyebrow: 'Getting started', h2: 'Three things people ask before booking',
      items: [
        { h3: 'Do I need a referral?', p: 'No. You can book directly as a private patient. A referral is only needed for a Medicare chronic condition plan.', href: 'fees-and-rebates.html', link: 'Fees &amp; rebates' },
        { h3: 'Will it be covered?', p: 'Private health extras, Medicare referrals, WorkCover claims and NDIS plans are all handled here. We will tell you what you will pay before you book.', href: 'fees-and-rebates.html', link: 'See the options' },
        { h3: 'What happens on day one?', p: 'A thorough assessment, a plain-English explanation, treatment on the day and a small number of exercises to start straight away.', href: 'blog-first-visit.html', link: 'Your first visit' },
      ] },

    /* Wording deliberately says "associated with" — Chris's own phrase. Whether any of
       these is a sponsorship or an official-physio arrangement is unconfirmed, and on a
       regulated health service that difference is not cosmetic. See tracker RV-08. */
    { t: 'partners', eyebrow: 'In the community', h2: 'Local clubs we&rsquo;re involved with',
      sub: 'Dapto and the Illawarra run on club sport. These are the clubs closest to us &mdash; football and running, juniors through to seniors.',
      items: [
        { name: 'The Herd Run Club', img: 'assets/club-herd-run-club.png' },
        { name: 'Berkeley Sports FC', img: 'assets/club-berkeley-sports-fc.png' },
        { name: 'Dandaloo FC', img: 'assets/club-dandaloo-fc.png' },
        { name: 'IFS Community Wolves FC', img: 'assets/club-ifs-wolves.png' },
      ],
      /* "involved with" is deliberate. Upgrade to "partner with" / "proudly sponsor" /
         "official physio for" only once Chris confirms the arrangement — see RV-08. */
      note: '[Heading currently reads &ldquo;involved with&rdquo;. If Chris confirms a sponsorship or official-physio arrangement with any of these clubs, ' +
        'it can be upgraded to &ldquo;Local clubs we partner with&rdquo; &mdash; a one-word change. Until then the softer wording is the one we can stand behind. ' +
        'Logos were supplied as mixed-quality raster files and have been background-removed; clean PNG or vector originals from each club would look sharper.]' },

    { t: 'suburbs', eyebrow: 'Where we work', h2: 'Serving Dapto and the Illawarra',
      sub: 'Based in Dapto, treating patients from across the region, with home visits available.' },

    { t: 'split', tone: 'alt', flip: true, img: 'assets/shoulder-exercise.jpg', alt: 'Physiotherapist supervising a shoulder strengthening exercise',
      eyebrow: 'Careers',
      h2: 'Physiotherapists: come and work with us',
      html: `
<p>We are growing, and we would like to hear from physiotherapists who want to treat properly &mdash; one-on-one appointments, time to assess, and support to develop a special interest rather than run a conveyor belt.</p>
<p><a class="btn btn-line" href="careers.html">See what we are looking for</a></p>`,
      list: [
        'One-on-one caseload, realistic appointment lengths',
        'Mentoring and professional development support',
        'A genuinely local clinic in a growing part of the Illawarra',
      ] },

    { t: 'final', id: 'book', h2: 'Schedule your visit',
      p: 'Book online in under a minute, or call the clinic and we will find a time that works.',
      cta: 'Book now' },
  ],
});

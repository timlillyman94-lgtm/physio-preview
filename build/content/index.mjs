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
    '<b>Your health, our commitment.</b> Evidence-based, one-on-one physiotherapy in Dapto: helping people across the Illawarra recover from injury, manage pain and get moving again.',

  blocks: [
    { t: 'hero', img: 'assets/hero-assessment.jpg', alt: 'Physiotherapist assessing a patient&rsquo;s shoulder movement at Functional Physiotherapy',
      trust: ['One-on-one, every session', 'Masters-qualified physiotherapist', 'HICAPS, WorkCover &amp; NDIS'] },

    { t: 'svcgrid', id: 'services', mid: true, eyebrow: 'What we treat',
      h2: 'Physiotherapy services in Dapto',
      sub: 'Treating injury and pain, and supporting people with disability, across Dapto and the Illawarra.',
      items: ['sports-injury', 'neck-back-pain', 'dry-needling', 'workcover', 'ndis', 'vertigo-headaches'],
      all: true },

    { t: 'split', tone: 'fresh', img: 'assets/neck-supine.jpg', alt: 'Physiotherapist treating a patient&rsquo;s neck during a one-on-one appointment',
      eyebrow: 'Our approach',
      h2: 'The Functional Physiotherapy approach',
      html: `
<p>Functional Physiotherapy is led by <a href="team.html">Chris Vitucci</a>: masters-qualified, with eight years of clinical experience across private practice, sporting teams, aged care and disability services. The way we work is simple: assess properly, explain honestly, treat hands-on, and build the strength underneath it so the problem stays fixed.</p>
<p>Every appointment is one-on-one with your physiotherapist. You get a real explanation of what is going on, treatment on the day, and a plan you can actually follow, not a printout and a rebooking.</p>`,
      list: [
        'Treatment plans built around your goals, not a template',
        'One-on-one sessions focused on lasting results, not quick fixes, with the <a href="team.html">same physiotherapist</a> each visit',
        'An honest estimate of how long it will take, and why',
        'Private, <a href="workcover.html">WorkCover</a>, <a href="ndis.html">NDIS</a> and Medicare-referred patients welcome',
      ],
      cta: 'Book your first visit' },

    /* Two tiles only, deliberately. The "9 services with their own page" and "5 ways to
       fund your care" tiles were removed: both boasted about the website rather than the
       care. A third tile for patients treated is ready to add once Chris supplies a rough
       number (tracker Q20). The .stats grid auto-fits, so 2 or 3 both render correctly. */
    { t: 'stats', items: [
      { n: '8', l: 'years clinical experience' },
      { n: '1:1', l: 'every session, every time' },
    ] },

    { t: 'cards', tone: '', eyebrow: 'Getting started', h2: 'Three things people ask before booking',
      items: [
        { h3: 'Do I need a referral?', p: 'No. You can book directly as a private patient. A referral is only needed for a Medicare chronic condition plan.', href: 'fees-and-rebates.html', link: 'Fees &amp; rebates' },
        { h3: 'Will it be covered?', p: 'Private health extras, Medicare referrals, WorkCover claims and NDIS plans are all handled here. We will tell you what you will pay before you book.', href: 'fees-and-rebates.html', link: 'See the options' },
        { h3: 'What happens on day one?', p: 'A thorough assessment, a plain-English explanation, treatment on the day and a small number of exercises to start straight away.', href: 'blog-first-visit.html', link: 'Your first visit' },
      ] },

    /* Wording deliberately says "associated with", Chris's own phrase. Whether any of
       these is a sponsorship or an official-physio arrangement is unconfirmed, and on a
       regulated health service that difference is not cosmetic. See tracker RV-08. */
    { t: 'partners', eyebrow: 'In the community', h2: 'Local clubs we&rsquo;re involved with',
      sub: 'Dapto and the Illawarra run on club sport. These are the clubs closest to us, football and running, juniors through to seniors.',
      items: [
        { name: 'The Herd Run Club', img: 'assets/club-herd-run-club.png' },
        { name: 'Berkeley Sports FC', img: 'assets/club-berkeley-sports-fc.png' },
        { name: 'Dandaloo FC', img: 'assets/club-dandaloo-fc.png' },
        { name: 'IFS Community Wolves FC', img: 'assets/club-ifs-wolves.png' },
      ],
      /* "involved with" is deliberate. Upgrade to "partner with" / "proudly sponsor" /
         "official physio for" only once Chris confirms the arrangement. See RV-08, asked
         as Q3. The on-page reviewer note that used to sit here was removed 09-22: the
         question is already on Chris's sheet, so it did not need restating to visitors. */ },

    { t: 'suburbs', eyebrow: 'Where we work', h2: 'Serving Dapto and the Illawarra',
      sub: 'Based in Dapto, treating patients from across the region, with home visits available.' },

    /* The careers block was removed from the homepage 09-22 (Tim): the clinic is not
       growing fast enough to give recruitment homepage real estate, and "We are growing"
       is a claim we cannot support. careers.html still exists and is still linked from
       team.html, so it is not orphaned and the page can rank on its own. */

    { t: 'final', id: 'book', h2: 'Schedule your visit',
      p: 'Book online in under a minute, or call the clinic and we will find a time that works.',
      cta: 'Book now' },
  ],
});

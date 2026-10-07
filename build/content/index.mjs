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
    { t: 'hero', img: 'assets/home-sign.avif', alt: 'Close-up of the Functional Physiotherapy sign',
      trust: ['One-on-one, every session', 'Registered physiotherapists', 'HICAPS, WorkCover &amp; NDIS'] },

    { t: 'svcgrid', id: 'services', mid: true, eyebrow: 'What we treat',
      h2: 'Physiotherapy services in Dapto',
      sub: 'Individualised physiotherapy for pain, injury, rehabilitation and performance',
      items: ['general-physiotherapy', 'sports-injury', 'neck-back-pain', 'dry-needling', 'workcover', 'ndis', 'vertigo-headaches'],
      all: true },

    { t: 'split', tone: 'fresh', img: 'assets/neck-supine.jpg', alt: 'Physiotherapist treating a patient&rsquo;s neck during a one-on-one appointment',
      eyebrow: 'Our approach',
      h2: 'The Functional Physiotherapy approach',
      html: `
<p>We start by understanding what’s causing your problem, explain it clearly, and build a plan around you. Through hands-on treatment, targeted rehabilitation and practical advice, we help you move better, feel stronger and get back to what matters.</p>
<p>Every appointment is one-on-one with your physiotherapist. You get a real explanation of what is going on, treatment on the day, and a plan you can actually follow, not a printout and a rebooking.</p>`,
      list: [
        'Treatment plans built around your goals, not a template',
        'One-on-one sessions focused on lasting results, not quick fixes, with the <a href="team.html">same physiotherapist</a> each visit',
        'An honest estimate of how long it will take, and why',
        'Private, <a href="workcover.html">WorkCover</a>, <a href="ndis.html">NDIS</a> and Medicare-referred patients welcome',
      ],
      cta: 'Book your first visit' },

    { t: 'cards', tone: '', eyebrow: 'Getting started', h2: 'Three things people ask before booking',
      items: [
        { h3: 'Do I need a referral?', p: 'No. You can book directly as a private patient. A referral is only needed for a Medicare chronic condition plan.', href: 'fees-and-rebates.html', link: 'Fees &amp; rebates' },
        { h3: 'Will it be covered?', p: 'Private health extras, Medicare referrals, WorkCover claims and NDIS plans are all handled here. We will tell you what you will pay before you book.', href: 'fees-and-rebates.html', link: 'See the options' },
        { h3: 'What happens on day one?', p: 'A thorough assessment, a plain-English explanation, treatment on the day and a small number of exercises to start straight away.', href: 'blog-first-visit.html', link: 'Your first visit' },
      ] },

    { t: 'partners', eyebrow: 'In the community', h2: 'Local clubs we support',
      items: [
        { name: 'The Herd Run Club', img: 'assets/club-herd-run-club.png' },
        { name: 'Berkeley Sports FC', img: 'assets/club-berkeley-sports-fc.png' },
        { name: 'Dandaloo FC', img: 'assets/club-dandaloo-fc.png' },
        { name: 'IFS Community Wolves FC', img: 'assets/club-ifs-wolves.png' },
      ],
    },

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

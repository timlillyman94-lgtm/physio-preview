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
    { t: 'hero', img: 'assets/gym.jpg', alt: 'Physiotherapist working with a patient at the Dapto clinic',
      trust: ['One-on-one, every session', '8+ years in Dapto', 'WorkCover &amp; NDIS welcome'] },

    { t: 'svcgrid', id: 'services', mid: true, eyebrow: 'What we treat',
      h2: 'Physiotherapy services in Dapto',
      sub: 'From a torn hamstring to a decade of back pain, every service has its own page with real detail.',
      items: ['sports-injury', 'neck-back-pain', 'dry-needling', 'workcover', 'ndis', 'vertigo-headaches'],
      all: true },

    { t: 'split', tone: 'fresh', img: 'assets/clinic.jpg', alt: 'Inside the Dapto clinic',
      eyebrow: 'Our approach',
      h2: 'The Functional Physiotherapy approach',
      html: `
<p>We have looked after the Dapto community for more than eight years, and the way we work has not really changed in that time: assess properly, explain honestly, treat hands-on, and build the strength underneath it so the problem stays fixed.</p>
<p>Every appointment is one-on-one with your physiotherapist. You get a real explanation of what is going on, treatment on the day, and a plan you can actually follow &mdash; not a printout and a rebooking.</p>`,
      list: [
        'Treatment plans built around your goals, not a template',
        'One-on-one sessions focused on lasting results, not quick fixes, with the <a href="team.html">same physiotherapist</a> each visit',
        'An honest estimate of how long it will take, and why',
        'Private, <a href="workcover.html">WorkCover</a>, <a href="ndis.html">NDIS</a> and Medicare-referred patients welcome',
      ],
      cta: 'Book your first visit' },

    { t: 'stats', items: [
      { n: '8+', l: 'years caring for Dapto' },
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

    { t: 'partners', eyebrow: 'In the community', h2: 'Proud supporters of Illawarra sport',
      sub: 'We work with local clubs on injury prevention, sideline advice and getting players back on the park.',
      items: ['Club logo', 'Club logo', 'Club logo', 'Club logo'],
      note: '[Placeholder scaffold — awaiting the four club logo files (tracker P0-04). Club names to be confirmed before publishing.]' },

    { t: 'suburbs', eyebrow: 'Where we work', h2: 'Serving Dapto and the Illawarra',
      sub: 'Based in Dapto, treating patients from across the region, with home visits available.' },

    { t: 'split', tone: 'alt', flip: true, img: 'assets/equipment.jpg', alt: 'Clinic equipment',
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

import { register } from '../lib.mjs';

export default register({
  slug: 'contact',
  group: 'core',
  groupLabel: 'Clinic',
  crumb: 'Contact',
  card: { name: 'Contact', blurb: 'Address, hours, parking and how to book.' },
  title: 'Contact Functional Physiotherapy Dapto | Book an Appointment',
  metaDesc:
    'Contact Functional Physiotherapy in Dapto NSW. Address, opening hours, parking and phone number, or book online. Inside Dapto Medical Professionals.',
  eyebrow: 'Get in touch',
  h1: 'Easy to find, easy to book',
  lead:
    'Book online any time, or call during clinic hours and we will find an appointment that suits you. We are on the <b>Princes Highway in Dapto</b>, inside Dapto Medical Professionals.',

  blocks: [
    { t: 'phero' },
    { t: 'crumbs' },
    { t: 'contactinfo', img: 'assets/clinic-room.jpg', alt: 'A treatment room at Functional Physiotherapy Dapto' },

    { t: 'map', tone: 'alt', eyebrow: 'Finding us', h2: 'Where we are',
      sub: 'On the Princes Highway in Dapto, inside Dapto Medical Professionals. On-site and street parking available.' },

    { t: 'cards', h2: 'Before your first appointment',
      eyebrow: 'Good to know',
      items: [
        { h3: 'What to bring', p: 'Comfortable clothing you can move in, plus anything relevant to how you are paying — private health card, Medicare referral, WorkCover claim number or NDIS plan details.' },
        { h3: 'How long it takes', p: 'Allow around 45 minutes for an initial consultation. Follow-up appointments are usually around 30 minutes.' },
        { h3: 'What it costs', p: 'Fees, private health rebates, Medicare referrals, WorkCover and NDIS are all set out on one page.', href: 'fees-and-rebates.html', link: 'Fees &amp; rebates' },
      ] },

    { t: 'suburbs', eyebrow: 'Where we work', h2: 'Serving Dapto and the Illawarra',
      sub: 'Based in Dapto, seeing patients from across the region, with home visits available where appropriate.' },

    { t: 'final', h2: 'Ready when you are',
      p: 'Book online in under a minute, or call the clinic and we will help you get started.',
      cta: 'Book an appointment' },
  ],
});

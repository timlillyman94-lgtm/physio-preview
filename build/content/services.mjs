import { register } from '../lib.mjs';

export default register({
  slug: 'services',
  group: 'hub',
  groupLabel: 'Hub',
  crumb: 'Services',
  card: {
    name: 'All services',
    blurb: 'The full list of what we treat, how we treat it, and how it can be funded.',
  },
  title: 'Physiotherapy Services in Dapto | Functional Physiotherapy',
  metaDesc:
    'Physiotherapy services in Dapto NSW: sports injury, dry needling, ACL and running injuries, back and neck pain, vertigo, WorkCover and NDIS.',
  eyebrow: 'What we treat',
  h1: 'Physiotherapy services in Dapto',
  lead:
    'What we treat at our Dapto clinic: <b>sports and work injuries</b>, <b>back, neck and nerve pain</b>, <b>dizziness and headaches</b>, and <b>ACL and running rehabilitation</b>. Private, WorkCover, NDIS and Medicare-referred patients are all seen here.',
  schema: {
    name: 'Physiotherapy services',
    serviceType: 'Physiotherapy',
    description:
      'The full range of physiotherapy services offered in Dapto NSW, including sports injury rehabilitation, dry needling, ACL and running injury programs, spinal pain, vestibular physiotherapy, WorkCover and NDIS.',
    offerCatalog: [
      'Sports injury physiotherapy', 'Dry needling', 'ACL rehabilitation', 'Running injury physiotherapy',
      'Neck and back pain physiotherapy', 'Vestibular physiotherapy', 'WorkCover physiotherapy', 'NDIS physiotherapy',
    ],
  },

  blocks: [
    { t: 'phero' },
    { t: 'crumbs' },

    { t: 'svcgrid', id: 'services', h2: 'Services',
      sub: 'Hands-on treatment, dry needling and staged rehabilitation programs for injury and return to sport.',
      items: ['sports-injury', 'dry-needling', 'acl-injuries', 'running-injuries'] },

    { t: 'svcgrid', tone: 'alt', id: 'conditions', h2: 'Conditions we treat',
      sub: 'Back and neck pain, sciatica, dizziness, vertigo and headaches.',
      items: ['neck-back-pain', 'vertigo-headaches'] },

    { t: 'svcgrid', id: 'funding', h2: 'Funding pathways',
      sub: 'How your treatment is paid for. If you are not sure which applies to you, call the clinic and we will work it out before you book.',
      items: ['workcover', 'ndis', 'fees-and-rebates'] },

    { t: 'chips', eyebrow: 'Also available', h2: 'More ways we can help',
      sub: 'Also treated at the clinic. Get in touch and we will tell you how we can help.',
      items: [
        'TMJ &amp; jaw pain', 'Chronic pain management', 'Strengthening &amp; conditioning',
        'Falls prevention', 'Post-surgical rehabilitation', 'Telehealth consultations', 'Home visits',
      ] },

    { t: 'split', tone: 'fresh', img: 'assets/back-treatment.jpg', alt: 'Physiotherapist delivering hands-on treatment to a patient&rsquo;s back',
      eyebrow: 'How we work',
      h2: 'One-on-one, every session',
      html: `
<p>Every appointment at Functional Physiotherapy is one-on-one with your physiotherapist. You are not handed to an assistant halfway through, and you are not left on a machine while three other people are seen.</p>
<p>That structure exists because it produces better results. Assessment continues through the whole appointment, treatment gets adjusted as we go, and the exercise you are given is taught properly rather than printed out. It also means we can be honest with you about how long something will take, because we are the ones watching it change week to week.</p>`,
      list: [
        'Evidence-based assessment and treatment',
        'Private, WorkCover, NDIS and Medicare-referred patients welcome',
        'Inside <a href=\"contact.html\">Dapto Medical Professionals</a>, with on-site parking',
        'Home visits available across the Illawarra',
      ],
      cta: 'Book an appointment' },

    { t: 'suburbs', eyebrow: 'Where we work', h2: 'Serving Dapto and the Illawarra',
      sub: 'Based in Dapto, treating patients from right across the region.' },

    { t: 'final', h2: 'Not sure which one you need?',
      p: 'Call us and we will point you to the right place, or book an assessment and we will work it out in person.',
      cta: 'Book an appointment' },
  ],
});

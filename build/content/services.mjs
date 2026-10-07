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
  lead: '',
  schema: {
    name: 'Physiotherapy services',
    serviceType: 'Physiotherapy',
    description:
      'The full range of physiotherapy services offered in Dapto NSW, including sports injury rehabilitation, dry needling, ACL and running injury programs, spinal pain, vestibular physiotherapy, WorkCover and NDIS.',
    offerCatalog: [
      'General physiotherapy', 'Sports injury physiotherapy', 'Dry needling', 'ACL rehabilitation', 'Running injury physiotherapy',
      'Neck and back pain physiotherapy', 'Vestibular physiotherapy', 'WorkCover physiotherapy', 'NDIS physiotherapy',
      'Strengthening and conditioning', 'General conditioning and falls prevention',
      'Pre- and post-operative rehabilitation', 'Telehealth consultations', 'Home visits',
      'TMJ and jaw pain physiotherapy', 'Chronic pain physiotherapy',
    ],
  },

  blocks: [
    { t: 'phero' },
    { t: 'crumbs' },

    { t: 'svcgrid', id: 'services', h2: 'Services',
      sub: 'Hands-on treatment, dry needling and staged rehabilitation programs for injury and return to sport.',
      items: ['general-physiotherapy', 'sports-injury', 'dry-needling', 'acl-injuries', 'running-injuries'] },

    { t: 'cards', id: 'additional-services', h2: 'Exercise, rehabilitation and appointment options',
      items: [
        { h3: 'Strengthening &amp; conditioning', p: 'Exercise programs to build strength and endurance for daily activities, rehabilitation or sport.' },
        { h3: 'General conditioning &amp; falls prevention', p: 'Exercise for strength, balance and mobility, with assessment of difficulties that may increase your risk of falling.' },
        { h3: 'Pre- and post-operative rehabilitation', p: 'Physiotherapy before and after surgery, with exercises and activity advice matched to your procedure and recovery stage.' },
        { h3: 'Telehealth consultations', p: 'Physiotherapy appointments by video for advice, exercise guidance and review when a remote appointment is appropriate.', href: 'contact.html', link: 'Ask about telehealth' },
        { h3: 'Home visits', p: 'Physiotherapy at home for people who have difficulty attending the clinic. Contact us to check availability in your area.', href: 'contact.html', link: 'Arrange a home visit' },
      ] },

    { t: 'svcgrid', tone: 'alt', id: 'conditions', h2: 'Conditions we treat',
      sub: 'Back and neck pain, sciatica, dizziness, vertigo and headaches.',
      items: ['neck-back-pain', 'vertigo-headaches'] },

    { t: 'cards', tone: 'alt', id: 'additional-conditions', h2: 'TMJ and chronic pain',
      items: [
        { h3: 'TMJ &amp; jaw pain', p: 'Assessment and physiotherapy for jaw pain, clicking or restricted jaw movement.' },
        { h3: 'Chronic pain', p: 'Physiotherapy for persistent pain, with advice and exercises based on your symptoms, daily activities and goals.' },
      ] },

    { t: 'prose', tone: 'alt', id: 'injury-directory', eyebrow: 'Find your concern',
      h2: 'Injuries and conditions covered by our services',
      html: `
<ul>
<li><a href="neck-back-pain.html">Back and neck pain, including sciatica</a>.</li>
<li><a href="vertigo-headaches.html">Headaches, dizziness, vertigo, BPPV and balance disorders</a>.</li>
<li><a href="sports-injury.html">Muscle strains, ligament sprains, shoulder injuries, knee and meniscus injuries, and tendon problems</a>.</li>
<li><a href="acl-injuries.html">ACL injuries and rehabilitation after ACL reconstruction</a>.</li>
<li><a href="running-injuries.html">Running injuries, including shin splints, runner&rsquo;s knee, Achilles pain and plantar heel pain</a>.</li>
<li><a href="#additional-conditions">TMJ and jaw pain, and chronic pain</a>.</li>
<li><a href="workcover.html">Work-related injuries</a>.</li>
</ul>` },

    { t: 'svcgrid', id: 'funding', h2: 'Funding pathways',
      sub: 'How your treatment is paid for. If you are not sure which applies to you, call the clinic and we will work it out before you book.',
      items: ['workcover', 'ndis', 'fees-and-rebates'] },

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

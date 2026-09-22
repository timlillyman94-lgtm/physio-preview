import { register } from '../lib.mjs';

export default register({
  slug: 'ndis',
  group: 'funding',
  groupLabel: 'Funding pathway',
  navActive: 'services',
  crumb: 'NDIS physiotherapy',
  crumbParent: 'services',
  order: 2,
  card: {
    name: 'NDIS physiotherapy',
    blurb: 'Goal-based physiotherapy for NDIS participants, in the clinic or at home across the Illawarra.',
  },
  title: 'NDIS Physiotherapy Dapto | NDIS Physio Illawarra',
  metaDesc:
    'NDIS physiotherapy in Dapto and the Illawarra. Clinic and home appointments for disability-related support. Call to check your funding and appointment options.',
  eyebrow: 'NDIS physiotherapy',
  h1: 'NDIS physiotherapy in Dapto and the Illawarra',
  lead:
    'Physiotherapy built around <b>the goals written in your plan</b> (mobility, strength, balance, independence) delivered one-on-one in the clinic or at home, and coordinated with the rest of your support team.',
  schema: {
    name: 'NDIS physiotherapy',
    serviceType: 'NDIS physiotherapy',
    alternateName: ['Disability physiotherapy', 'NDIS physio Illawarra', 'Improved Daily Living physiotherapy'],
    description:
      'Goal-based physiotherapy for NDIS participants in Dapto and the Illawarra, covering mobility, strength, balance, falls prevention and functional independence, with clinic and home visit options.',
    offerCatalog: [
      'Functional assessment', 'Mobility and gait training', 'Strength and conditioning',
      'Balance and falls prevention', 'Home visits', 'Progress reporting for plan reviews',
    ],
  },

  blocks: [
    { t: 'hero', img: 'assets/leg-raise.jpg', alt: 'Physiotherapist supporting a client through a leg movement',
      trust: ['Agency-managed access: [TBC]', 'Home visits across the Illawarra', 'Reports for your plan review'] },
    { t: 'crumbs' },
    { t: 'toc', items: [
      ['overview', 'How it works'], ['funding', 'How it is funded'], ['goals', 'What we work on'],
      ['home', 'Home visits'], ['reviews', 'Reports &amp; plan reviews'], ['faq', 'FAQs'],
    ] },

    { t: 'prose', id: 'overview', eyebrow: 'Your first appointment',
      h2: 'What NDIS physiotherapy involves',
      sub: 'Physiotherapy for disability-related support needs, with goals drawn from your daily life and NDIS plan.',
      html: `
<p>Your plan might include goals such as walking further, getting in and out of a car, managing the front steps or keeping up with work. We discuss those goals and assess the disability-related support you need. The proposed physiotherapy must meet NDIS funding requirements and fit the supports available in your plan.</p>
<p>The first appointment starts with a conversation. We talk about what a good day looks like, what currently gets in the way, and which goals to work on in physiotherapy. Then we assess: strength, movement, balance, walking, transfers, endurance, and how you manage the specific tasks that matter to you. From that we set out a program with measurable markers, so you and your plan manager can both see whether it is working.</p>
<p>Sessions are one-on-one. We agree what to measure with you: walking distance, the assistance needed for a transfer, or a daily task you want to maintain. These measures help us decide whether the program remains useful and what needs to change.</p>`,
    },

    { t: 'prose', id: 'funding', tone: 'alt', eyebrow: 'Funding',
      h2: 'How is physiotherapy funded under the NDIS?',
      sub: 'Usually from the Capacity Building budget, under Improved Daily Living.',
      html: `
<p>Physiotherapy is generally funded as a therapy support within <b>Capacity Building: Improved Daily Living</b>. It can cover eligible assessment, therapy, training and reports. A goal in your plan does not automatically make every treatment an NDIS-funded support. Ordinary treatment for a new injury or recovery from surgery is generally a health-system responsibility. If you are not sure whether your plan includes it, your plan manager or support coordinator can confirm quickly, and we are happy to speak with them directly.</p>
<h3>Plan managed, self managed or agency managed?</h3>
<p>For <b>plan-managed</b> funding, we invoice your plan manager for eligible, agreed supports. For <b>self-managed</b> funding, we invoice you. You can claim from an invoice before paying, or pay first and claim from the receipt, subject to the agreed payment terms. Use the my NDIS app or the participant portal used for your plan. <b>Agency-managed appointments: [TBC pending confirmation of NDIS registration].</b> Please check this with us before booking. <a href="https://www.ndis.gov.au/participants/working-providers/paying-supports/how-pay-your-ndis-supports" target="_blank" rel="noopener">The NDIS explains the payment options</a>.</p>
<h3>Do I need a referral?</h3>
<p>No referral is needed. What helps most is sharing the relevant goals and funding details from your plan, plus your NDIS number and your plan manager&rsquo;s details. If you have reports from other therapists (occupational therapy, exercise physiology, speech, a specialist) bring those too, so we are adding to the picture rather than duplicating work.</p>`,
    },

    { t: 'cols', id: 'goals',
      left: { eyebrow: 'What we work on', h2: 'Goals physiotherapy can support', items: [
        'Walking distance, gait quality and confidence on uneven ground',
        'Strength and conditioning for everyday tasks',
        '<a href="vertigo-headaches.html">Balance and falls prevention</a>',
        'Transfers: bed, chair, car, shower',
        'Pain management where it is limiting your function',
        'Disability-related support to maintain or develop everyday function',
        'Maintaining function in progressive conditions',
      ] },
      right: { eyebrow: 'How we work', h2: 'What you can expect from us', items: [
        'One-on-one sessions with the same physiotherapist wherever possible',
        'Goals written in plain language, with measurable markers',
        'Programs your support workers or family can help you continue',
        'Coordination with your support coordinator and other therapists',
        'Clear written progress reports ahead of plan reviews',
        'Equipment and assistive technology recommendations where relevant',
      ] },
    },

    { t: 'split', id: 'home', tone: 'fresh', img: 'assets/shoulder-exercise.jpg',
      alt: 'Physiotherapist supervising a shoulder strengthening exercise',
      eyebrow: 'Where we see you',
      h2: 'Clinic appointments or home visits across the Illawarra',
      html: `
<p>The setting depends on what you need to practise. At the clinic, we can use equipment for exercise and walking assessments. At home, we can look at your own front steps, lounge or kitchen and practise tasks in the place you do them every day.</p>
<p>We offer home visits across Dapto and the wider Illawarra, including Wollongong, Shellharbour, Berkeley, Kanahooka, Horsley, Unanderra, Kembla Grange and Albion Park. You can discuss a mix of clinic and home appointments. Visit availability and travel charges need to be agreed before booking. <b>Home-visit travel and report charges: [TBC].</b></p>
<p>Access matters and we would rather sort it out before you arrive than after. Tell us what you need when you book (parking, mobility aids, a support worker attending, a longer appointment, a quieter time of day) and we will set the appointment up around it.</p>`,
      list: [
        'Clinic: 2/20&ndash;30 Princes Highway, inside Dapto Medical Professionals',
        'Home visits across Dapto and the Illawarra',
        'Support workers, family members and interpreters welcome in sessions',
      ],
      cta: 'Book an appointment',
    },

    { t: 'prose', id: 'reviews', tone: 'alt', eyebrow: 'Paperwork, handled',
      h2: 'Reports and evidence for your plan review',
      sub: 'Your report records what was assessed, the work completed and recommendations for ongoing support.',
      html: `
<p>A report for a plan reassessment explains how your disability affects everyday tasks and what support you need. It records assessment findings, the goals you have worked on and any changes in function. Maintaining an ability can be relevant as well as developing a new one.</p>
<p>We record that information during your appointments. Assessment measures are recorded at the start and repeated at intervals, goals are written in observable terms, and progress notes track what changed. When your review comes around, we can produce a report that sets out where you started, what has changed, what has not, and what we recommend for the next plan, with reasons.</p>
<p>With your consent, we can discuss the report with your support coordinator or plan manager. We agree the report scope and any charge before preparing it.</p>`,
    },

    { t: 'faq', h2: 'NDIS physiotherapy FAQs',
      items: [
        { q: 'How is physiotherapy funded under the NDIS?',
          a: 'Usually through Capacity Building: Improved Daily Living, where your plan includes eligible disability-related therapy. Ordinary treatment for a new injury is generally funded through the health system. Check your plan with your plan manager or support coordinator; with your consent, we can discuss the proposed support with them.' },
        { q: 'Which plan management types do you accept?',
          a: 'We offer plan-managed and self-managed appointments for eligible supports. Agency-managed appointments: [TBC pending confirmation of NDIS registration]. Tell us how your funding is managed before booking so we can check the billing arrangements.' },
        { q: 'Do you do NDIS home visits in the Illawarra?',
          a: 'Yes. We visit participants at home across Dapto, Wollongong, Shellharbour, Berkeley, Kanahooka, Horsley, Unanderra, Kembla Grange and Albion Park. Home visits are particularly valuable when the goal involves your own environment: steps, transfers, bathroom or kitchen tasks.' },
        { q: 'Do I need a referral to use my NDIS funding for physiotherapy?',
          a: 'No referral is required. Bring your NDIS number, the relevant goals and funding details from your plan, and your plan manager’s contact details. Any recent reports from other therapists are useful too, so we build on what has already been done.' },
        { q: 'Can my support worker or family member come to the session?',
          a: 'Yes, if you would like them to attend. With your agreement, we can show them how to assist with exercises between appointments. Interpreters are welcome too.' },
        { q: 'Will you provide a report for my plan review?',
          a: 'Yes. We record baseline measures at the start and repeat them at intervals, so the report shows where you started, what has changed and what we recommend next. We agree the report scope and any charge with you first. With your consent, we can also speak with your support coordinator or plan manager.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'Read about balance, spinal symptoms and appointment costs.',
      items: ['vertigo-headaches', 'neck-back-pain', 'fees-and-rebates'] },

    { t: 'final', h2: 'Physiotherapy built around your goals.',
      p: 'Book an appointment, or call us and we will talk through your plan and what physiotherapy could add to it.',
      cta: 'Book an appointment' },
  ],
});

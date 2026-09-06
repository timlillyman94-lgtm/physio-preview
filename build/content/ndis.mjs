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
    'NDIS physiotherapy in Dapto and across the Illawarra. Goal-based mobility, strength and function support. Plan, self and agency managed participants welcome.',
  eyebrow: 'NDIS physiotherapy',
  h1: 'NDIS physiotherapy in Dapto and the Illawarra',
  lead:
    'Physiotherapy built around <b>the goals written in your plan</b> &mdash; mobility, strength, balance, independence &mdash; delivered one-on-one in the clinic or at home, and coordinated with the rest of your support team.',
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
    { t: 'hero', img: 'assets/gym.jpg', alt: 'Physiotherapist supporting a client through an exercise',
      trust: ['Plan, self &amp; agency managed', 'Home visits across the Illawarra', 'Reports for your plan review'] },
    { t: 'crumbs' },
    { t: 'toc', items: [
      ['overview', 'How it works'], ['funding', 'How it is funded'], ['goals', 'What we work on'],
      ['home', 'Home visits'], ['reviews', 'Reports &amp; plan reviews'], ['faq', 'FAQs'],
    ] },

    { t: 'prose', id: 'overview', eyebrow: 'The short version',
      h2: 'What NDIS physiotherapy involves',
      sub: 'The same clinical work as any other physiotherapy, aimed specifically at the functional goals your plan is built around.',
      html: `
<p>NDIS physiotherapy starts from your plan rather than from a diagnosis. The plan says what you are trying to achieve &mdash; to walk further without needing a rest, to get in and out of the car independently, to manage the front steps, to keep working, to stop falling &mdash; and physiotherapy is one of the supports funded to help you get there.</p>
<p>So the first appointment is a conversation before it is an examination. We talk about what a good day looks like, what currently gets in the way, and which of your plan goals physiotherapy can realistically move. Then we assess: strength, movement, balance, walking, transfers, endurance, and how you manage the specific tasks that matter to you. From that we set out a program with measurable markers, so you and your plan manager can both see whether it is working.</p>
<p>Sessions are one-on-one and unhurried. Progress in disability physiotherapy is often steadier and less dramatic than in sports rehabilitation, and it is measured in the things that change day-to-day life &mdash; an extra hundred metres, a transfer that no longer needs a second person, a month without a fall.</p>`,
    },

    { t: 'prose', id: 'funding', tone: 'alt', eyebrow: 'Funding',
      h2: 'How is physiotherapy funded under the NDIS?',
      sub: 'Usually from the Capacity Building budget, under Improved Daily Living.',
      html: `
<p>Physiotherapy is generally funded as a therapy support within <b>Capacity Building &mdash; Improved Daily Living</b>. That budget covers assessment, treatment, training and the reports that support your plan. If you are not sure whether your plan includes it, your plan manager or support coordinator can confirm quickly, and we are happy to speak with them directly.</p>
<h3>Plan managed, self managed or agency managed?</h3>
<p>We work with all three. If you are <b>plan managed</b>, we invoice your plan manager and you have nothing to pay. If you are <b>self managed</b>, we invoice you and you claim it back through the myplace participant portal. If you are <b>agency managed</b>, we claim through the NDIS portal directly. Tell us which applies when you book and we will handle the administration from there.</p>
<h3>Do I need a referral?</h3>
<p>No referral is needed. What helps most is bringing a copy of your plan, or at least the goals section, plus your NDIS number and your plan manager&rsquo;s details. If you have reports from other therapists &mdash; occupational therapy, exercise physiology, speech, a specialist &mdash; bring those too, so we are adding to the picture rather than duplicating work.</p>`,
    },

    { t: 'cols', id: 'goals',
      left: { eyebrow: 'What we work on', h2: 'Goals physiotherapy can support', items: [
        'Walking distance, gait quality and confidence on uneven ground',
        'Strength and conditioning for everyday tasks',
        '<a href="vertigo-headaches.html">Balance and falls prevention</a>',
        'Transfers &mdash; bed, chair, car, shower',
        'Pain management where it is limiting your function',
        'Rehabilitation after injury, illness or surgery',
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

    { t: 'split', id: 'home', tone: 'fresh', img: 'assets/clinic.jpg',
      alt: 'Inside the Dapto clinic',
      eyebrow: 'Where we see you',
      h2: 'Clinic appointments or home visits across the Illawarra',
      html: `
<p>Sometimes the clinic is the right setting &mdash; there is equipment here, space to walk and load properly, and a distraction-free hour. Sometimes it is the wrong one. If the goal is managing your own front steps, getting off your own lounge, or moving safely around your own kitchen, then that is where the assessment needs to happen, and that is where we will come.</p>
<p>We offer home visits across Dapto and the wider Illawarra, including Wollongong, Shellharbour, Berkeley, Kanahooka, Horsley, Unanderra, Kembla Grange and Albion Park. Many participants use a mix: a home visit to set the program in the real environment, then clinic sessions to progress the loading, then a home visit again to check it has transferred.</p>
<p>Access matters and we would rather sort it out before you arrive than after. Tell us what you need when you book &mdash; parking, mobility aids, a support worker attending, a longer appointment, a quieter time of day &mdash; and we will set the appointment up around it.</p>`,
      list: [
        'Clinic: 2/20&ndash;30 Princes Highway, inside Dapto Medical Professionals',
        'Home visits across Dapto and the Illawarra',
        'Support workers, family members and interpreters welcome in sessions',
      ],
      cta: 'Book an appointment',
    },

    { t: 'prose', id: 'reviews', tone: 'alt', eyebrow: 'Paperwork, handled',
      h2: 'Reports and evidence for your plan review',
      sub: 'A plan review is only as good as the evidence in front of it. Ours is written to be useful, not to be filed.',
      html: `
<p>Plans are reviewed, and the review asks a simple question: are these supports helping you pursue your goals? Answering it well requires more than an assertion that therapy has been going fine. It requires a baseline, a record of what was worked on, objective measures where they exist, and a clear statement of what would happen if the support stopped.</p>
<p>We build that as we go rather than reconstructing it the week before. Assessment measures are recorded at the start and repeated at intervals, goals are written in observable terms, and progress notes track what changed. When your review comes around, we can produce a report that sets out where you started, what has changed, what has not, and what we recommend for the next plan &mdash; with reasons.</p>
<p>If your support coordinator or plan manager wants to talk to us directly, that is welcome and usually saves everyone time. Just let us know who to contact.</p>`,
    },

    { t: 'faq', h2: 'NDIS physiotherapy FAQs',
      items: [
        { q: 'How is physiotherapy funded under the NDIS?',
          a: 'Usually from your Capacity Building budget, under Improved Daily Living. That covers assessment, treatment and the reports that support your plan review. If you are not certain your plan includes it, your plan manager or support coordinator can confirm — or we can speak with them for you.' },
        { q: 'Which plan management types do you accept?',
          a: 'Plan managed, self managed and agency managed participants are all welcome. Plan managed means we invoice your plan manager and you pay nothing; self managed means we invoice you and you claim through the myplace portal; agency managed means we claim through the NDIS portal directly. Tell us which applies when you book.' },
        { q: 'Do you do NDIS home visits in the Illawarra?',
          a: 'Yes. We visit participants at home across Dapto, Wollongong, Shellharbour, Berkeley, Kanahooka, Horsley, Unanderra, Kembla Grange and Albion Park. Home visits are particularly valuable when the goal involves your own environment — steps, transfers, bathroom or kitchen tasks.' },
        { q: 'Do I need a referral to use my NDIS funding for physiotherapy?',
          a: 'No referral is required. Bring your NDIS number, a copy of your plan or at least its goals, and your plan manager’s contact details. Any recent reports from other therapists are useful too, so we build on what has already been done.' },
        { q: 'Can my support worker or family member come to the session?',
          a: 'Yes, and it often helps. If someone else is going to assist you with the program between appointments, having them in the room while we teach it makes it far more likely to be done well and safely. Interpreters are welcome too.' },
        { q: 'Will you provide a report for my plan review?',
          a: 'Yes. We record baseline measures at the start and repeat them at intervals, so the report shows where you started, what has changed and what we recommend next. We can also speak directly with your support coordinator or plan manager if that is easier.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'Areas that come up most often for the participants we work with.',
      items: ['vertigo-headaches', 'neck-back-pain', 'fees-and-rebates'] },

    { t: 'final', h2: 'Physiotherapy built around your goals.',
      p: 'Book an appointment, or call us and we will talk through your plan and what physiotherapy could add to it.',
      cta: 'Book an appointment' },
  ],
});

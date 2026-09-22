import { register } from '../lib.mjs';

export default register({
  slug: 'running-injuries',
  group: 'services',
  groupLabel: 'Service',
  navActive: 'services',
  crumb: 'Running injuries',
  crumbParent: 'services',
  order: 4,
  card: {
    name: 'Running injuries &amp; assessment',
    blurb: 'Diagnosis, load management and a staged return-to-running plan for runners of every level.',
  },
  title: 'Running Physio Dapto | Running Injury Treatment Illawarra',
  metaDesc:
    'Running injury physio in Dapto NSW. Treatment for shin splints, runner’s knee, Achilles and heel pain, plus running assessment and return-to-run plans.',
  eyebrow: 'Running physiotherapy',
  h1: 'Running injury treatment in Dapto',
  lead:
    'We assess and treat <b>shin splints, runner&rsquo;s knee, Achilles pain and heel pain</b> in Dapto. Your symptoms and training history guide the plan, including whether you can keep running with changes or need a break.',
  schema: {
    name: 'Running injury physiotherapy and running assessment',
    serviceType: 'Running injury physiotherapy',
    alternateName: ['Running physio', 'Run assessment', 'Return to running program'],
    description:
      'Assessment and treatment of running injuries including medial tibial stress syndrome, patellofemoral pain, iliotibial band syndrome, Achilles tendinopathy and plantar heel pain, with running assessment and staged return-to-run programming, in Dapto NSW.',
    offerCatalog: [
      'Running injury assessment', 'Running technique and gait assessment',
      'Training load review', 'Tendon loading programs',
      'Return to running programs', 'Strength and conditioning for runners',
    ],
  },

  blocks: [
    { t: 'hero', img: 'assets/calf-treatment.jpg', alt: 'Physiotherapist treating a runner&rsquo;s calf',
      trust: ['We keep you running where we can', 'Training and strength assessment', 'Staged return-to-run plans'] },
    { t: 'crumbs' },
    { t: 'toc', items: [
      ['overview', 'Why runners get injured'], ['injuries', 'The common injuries'],
      ['assessment', 'Running assessment'], ['return', 'Getting back to running'],
      ['local', 'Running in the Illawarra'], ['faq', 'FAQs'],
    ] },

    { t: 'prose', id: 'overview', eyebrow: 'Training and recovery',
      h2: 'Why runners get injured',
      sub: 'Changes in training can contribute to running injuries. Previous injury, recovery, nutrition and bone health can also affect how much running you tolerate.',
      html: `
<p>A jump in weekly kilometres, a new hill route or extra speed sessions can place more demand on a tendon, bone or joint than it can currently tolerate. Sometimes the training barely changes, but recovery becomes harder because of illness, poor sleep or too little food to support the amount of exercise. Assessment looks at these factors as well as the painful area.</p>
<p>For many muscle, tendon and joint problems, reducing the aggravating part of training allows rehabilitation exercises to begin. A suspected bone stress injury needs a different approach: stop running and seek assessment. The diagnosis matters before deciding how much activity is safe.</p>
<p>When running is safe, a shorter flat route or fewer sessions may be enough to start with. We will agree on what symptoms to monitor during a run and the following day. Running can be an important part of managing the week, so tell us what you most want to keep doing.</p>`,
    },

    { t: 'cols', id: 'injuries',
      left: { eyebrow: 'What we treat', h2: 'Common running injuries', items: [
        'Shin splints (medial tibial stress syndrome)',
        'Runner&rsquo;s knee: patellofemoral pain',
        'Iliotibial band syndrome (lateral knee pain)',
        'Achilles tendinopathy and calf strains',
        'Plantar heel pain and foot overload',
        'Gluteal and hamstring tendinopathy',
        'Bone stress injuries and stress fractures',
      ] },
      right: { eyebrow: 'What we look at', h2: 'What the assessment covers', items: [
        'Your usual training, recent changes and previous injuries',
        'Strength and capacity: calf, quadriceps, hip and foot',
        'Ankle, hip and big toe range of motion',
        'Running technique, cadence and how you contact the ground',
        'Footwear, surfaces and terrain',
        'Sleep, fuelling and other demands on your recovery',
      ] },
    },

    { t: 'prose', id: 'assessment', tone: 'alt', eyebrow: 'Running assessment',
      h2: 'What a running assessment can and cannot tell you',
      sub: 'Watching you run can help us understand a painful movement. We interpret it alongside your symptoms, physical examination and training history.',
      html: `
<p>Watching someone run, live and on video, shows how they land and move through each step. We may look at cadence, stride length or how the hip and knee move. If a change appears relevant to your symptoms, we can trial it and check the response. For example, a small increase in cadence can reduce some knee loads, but it is not needed by every runner.</p>
<p>There is a wide range of healthy running form. Changing your stride may be useful for a particular problem, but adding exercises or adjusting weekly distance may be more relevant. A gait assessment alone cannot identify the cause of every running injury.</p>
<h3>What about my shoes and my arches?</h3>
<p>Evidence for choosing running shoes solely by foot type or pronation is weak. Comfort and fit are useful considerations, alongside your symptoms and the running you do. A large change in heel drop, stiffness or sole height can alter the demands on your legs, so allow time to adapt. Orthoses may help with some conditions; we can discuss whether a trial is appropriate.</p>`,
    },

    { t: 'steps', id: 'return', eyebrow: 'The plan',
      h2: 'Getting back to running properly',
      sub: 'The plan depends on the diagnosis and the running you want to return to. We review symptoms and strength as distance and pace increase.',
      items: [
        { h3: 'Settle and diagnose', p: 'Assess the painful area and contributing factors, then agree on activity limits. Symptom treatment may help alongside changes to training.' },
        { h3: 'Build capacity', p: 'Strength exercises target the affected area and any relevant deficits, such as calf endurance or quadriceps strength. The load progresses according to your response.' },
        { h3: 'Reintroduce running', p: 'A structured walk-run or reduced-volume progression with clear rules on what an acceptable symptom response looks like during and in the 24 hours after each run.' },
        { h3: 'Build back and beyond', p: 'Build distance, then add speed or hills as tolerated. Keep the strength work relevant to your injury and review the plan if symptoms return.' },
      ],
    },

    { t: 'split', id: 'local', tone: 'fresh', flip: true, img: 'assets/foot-taping.jpg',
      alt: 'Physiotherapist taping a runner&rsquo;s foot',
      eyebrow: 'Illawarra routes',
      h2: 'Running in the Illawarra: what it does to your legs',
      html: `
<p>The loops around the Lake Illawarra foreshore and coastal paths towards Wollongong make it easy to add distance. The escarpment routes towards Mount Keira and Mount Kembla add a different demand: climbing asks more of the calf and Achilles, while descending requires repeated braking through the thighs and knees. Adding hills to an already busy training week may need a reduction elsewhere.</p>
<p>Changing from footpath to sand, or from flat bitumen to cambered roads and trails, changes the demands on your legs. Heat and humidity also affect how hard a familiar pace feels. Bring your usual routes and weekly distances to the appointment so advice fits the running you actually do.</p>
<p>Your goal might be a local parkrun personal best, a first half marathon or keeping a regular run in the week. We plan around that goal and discuss when an event date may need to change.</p>`,
      list: [
        'Training plans built around your real routes and terrain',
        'Race-build planning, working backwards from your event date',
        'Running injuries are a special interest of <a href="team.html">Chris Vitucci</a>',
        'Support for local running groups and clubs: get in touch',
      ],
    },

    { t: 'prose', tone: 'alt', eyebrow: 'Do not ignore these',
      h2: 'Running pain that needs prompt assessment',
      html: `
<p><b>Stop running and seek prompt assessment</b> if you have a sharply localised, tender spot on a bone, pain that worsens as you run, pain at night or pain that makes you limp. These symptoms can indicate a bone stress injury. Continuing to run on one can allow it to progress to a fracture and a much longer time away from running. See a doctor as well as your physiotherapist; seek urgent medical care if you cannot bear weight.</p>
<p>Tell your doctor if you have lost weight without meaning to, had repeated bone injuries or noticed periods becoming irregular or stopping. Any of these may warrant investigation. Low energy availability, where food intake does not meet the needs of exercise and everyday life, can affect bone health in runners of any gender and needs appropriate medical and nutritional support.</p>`,
    },

    { t: 'faq', h2: 'Running injury FAQs',
      items: [
        { q: 'Do I have to stop running completely?',
          a: 'It depends on the injury. Some tendon and joint problems allow reduced running while you rehabilitate. Suspected bone stress injuries need a pause and prompt assessment. We will explain the limits for your diagnosis and what symptoms mean you should stop.' },
        { q: 'What causes shin splints and how do I get rid of them?',
          a: 'Shin splints, or medial tibial stress syndrome, cause pain along the inner edge of the shin and can follow an increase in running demands. Treatment usually includes adjusting training and gradually rebuilding strength and running tolerance. Stop running and seek assessment for sharply localised bone pain, worsening pain or a limp, because a bone stress injury may need different care.' },
        { q: 'Can physiotherapy help runner&rsquo;s knee?',
          a: 'It can help assess the cause and guide treatment. Pain around or behind the kneecap, often called patellofemoral pain, may hurt during running, stairs or squats. Treatment commonly involves adjusting the activities that aggravate it and progressive knee and hip exercises. Other causes of knee pain need to be considered before choosing a plan.' },
        { q: 'Can I keep running with Achilles tendon pain?',
          a: 'Some Achilles tendon problems allow modified running alongside a progressive strengthening program. The amount depends on the diagnosis and your response during exercise and the next day. Stop and seek urgent assessment after a sudden pop, especially if you cannot push off or rise onto your toes, as this may be a rupture.' },
        { q: 'Is a running assessment worth doing if I am not injured?',
          a: 'It may be useful if you have recurring symptoms, are returning after a long break or are preparing for a longer distance. We can review training and strength, but screening cannot predict or prevent every injury.' },
        { q: 'Do I need special running shoes or orthotics?',
          a: 'Not necessarily. Evidence for choosing shoes solely by foot type or pronation is weak. Consider fit, comfort and how a shoe feels during your usual running, and allow time to adapt to substantial changes. Orthoses can be considered for particular conditions after assessment.' },
        { q: 'How quickly can I increase my weekly kilometres?',
          a: 'The old ten per cent rule is a rough guide rather than a law. What matters more is consistency, how your body responded to the last increase, and not stacking a volume rise on top of new intensity, new terrain and a stressful week all at once. We will set the progression around your history rather than a generic number.' },
        { q: 'Can I still run while pregnant, or after having a baby?',
          a: 'Some people continue running during pregnancy or return after birth, but the advice depends on their health, symptoms and recovery. Discuss this with your maternity care team. Contact us to check the scope of an appointment; a pelvic health physiotherapist may be appropriate.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'Running problems often overlap with these.',
      items: ['sports-injury', 'acl-injuries', 'dry-needling'] },

    { t: 'final', h2: 'Plan your return to running.',
      p: 'Book a running injury assessment to discuss the pain, your training and what to change next.',
      cta: 'Book an appointment' },
  ],
});

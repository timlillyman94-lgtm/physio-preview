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
    'Shin splints, runner&rsquo;s knee, Achilles pain, heel pain &mdash; nearly all of it comes down to load the tissue was not ready for. We work out <b>which tissue and which load</b>, then build you back up without stopping you running entirely.',
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
    { t: 'hero', img: 'assets/equipment.jpg', alt: 'Running shoes and training equipment',
      trust: ['We keep you running where we can', 'Load-based, not rest-based', 'Staged return-to-run plans'] },
    { t: 'crumbs' },
    { t: 'toc', items: [
      ['overview', 'Why runners get injured'], ['injuries', 'The common injuries'],
      ['assessment', 'Running assessment'], ['return', 'Getting back to running'],
      ['local', 'Running in the Illawarra'], ['faq', 'FAQs'],
    ] },

    { t: 'prose', id: 'overview', eyebrow: 'The short version',
      h2: 'Why runners get injured',
      sub: 'Almost always a mismatch between the load applied and the load the tissue was prepared for &mdash; not a flaw in your body that needs correcting.',
      html: `
<p>Running injuries are overwhelmingly load problems. Something in the chain &mdash; a tendon, a bone, a joint surface, a muscle &mdash; was asked to absorb more than its current capacity, too often, with too little recovery in between. Sometimes that is because the load went up sharply: a jump in weekly kilometres, a new hill route, a switch to faster sessions, a race build that started too late. Sometimes the load barely changed but capacity dropped, because of illness, poor sleep, a stressful stretch at work or a period of undereating.</p>
<p>The practical consequence is that the fix is rarely total rest. Rest lowers the load to zero, which settles the symptoms and simultaneously lowers capacity further, so the same volume hurts again on return. What actually works is reducing load enough to let the tissue settle, building capacity deliberately while it does, and then re-introducing running at a rate the tissue can now handle.</p>
<p>The corollary is that we can usually keep you running in some form. Shorter, flatter, slower, less often &mdash; but running. That matters for fitness and it matters a great deal for the runners for whom running is how they manage everything else in their week.</p>`,
    },

    { t: 'cols', id: 'injuries',
      left: { eyebrow: 'What we treat', h2: 'Common running injuries', items: [
        'Shin splints (medial tibial stress syndrome)',
        'Runner&rsquo;s knee &mdash; patellofemoral pain',
        'Iliotibial band syndrome (lateral knee pain)',
        'Achilles tendinopathy and calf strains',
        'Plantar heel pain and foot overload',
        'Gluteal and hamstring tendinopathy',
        'Bone stress injuries and stress fractures',
      ] },
      right: { eyebrow: 'What we look at', h2: 'What the assessment covers', items: [
        'Your training history &mdash; the fortnight before symptoms started matters most',
        'Strength and capacity: calf, quadriceps, hip and foot',
        'Ankle, hip and big toe range of motion',
        'Running technique, cadence and how you contact the ground',
        'Footwear, surfaces and terrain',
        'Sleep, fuelling and life load &mdash; capacity is not only mechanical',
      ] },
    },

    { t: 'prose', id: 'assessment', tone: 'alt', eyebrow: 'Running assessment',
      h2: 'What a running assessment can and cannot tell you',
      sub: 'Gait analysis is useful. It is not a diagnostic scan, and it is not the most important part of the appointment.',
      html: `
<p>Watching someone run &mdash; live and on video, from behind and from the side &mdash; shows things a static examination cannot: how much the pelvis drops on each stance, whether the knee collapses inward, how far in front of the body the foot lands, how much the ankle and knee absorb on contact, what cadence you naturally run at. Where a specific finding lines up with a specific injury, changing it can genuinely help. Increasing cadence slightly, for instance, reduces load at the knee and hip, which is useful in patellofemoral and gluteal problems.</p>
<p>What running assessment does not do is identify one correct way to run. There is a wide range of perfectly healthy running form, and plenty of efficient runners break the textbook rules. Chasing an idealised gait in a runner whose real problem is a 40 per cent jump in weekly volume solves nothing.</p>
<h3>What about my shoes and my arches?</h3>
<p>Footwear matters less than the industry suggests. The evidence for prescribing shoes according to foot type or pronation is weak, and the strongest predictor of whether a shoe suits you is whether it feels comfortable. Where we do pay attention to footwear is around abrupt change &mdash; switching to a much lower drop, a much stiffer plate or a very different stack height increases load somewhere in the chain, and doing that mid-build is a common trigger. Orthoses help some people with some presentations; they are a tool, not a default.</p>`,
    },

    { t: 'steps', id: 'return', eyebrow: 'The plan',
      h2: 'Getting back to running properly',
      sub: 'Four stages. The aim is to return to your previous volume with more capacity than you had when you got injured.',
      items: [
        { h3: 'Settle and diagnose', p: 'Identify the tissue involved and the load that overwhelmed it, reduce the aggravating component, and treat the symptoms directly with hands-on work where it helps.' },
        { h3: 'Build capacity', p: 'Progressive strength work for the specific tissue — calf and Achilles, quadriceps, hip and glute, foot. This is the part that determines whether the injury stays away.' },
        { h3: 'Reintroduce running', p: 'A structured walk-run or reduced-volume progression with clear rules on what an acceptable symptom response looks like during and in the 24 hours after each run.' },
        { h3: 'Build back and beyond', p: 'Return to your previous volume, then to intensity and terrain, with the strength work maintained. The goal is a more robust runner than the one who got injured.' },
      ],
    },

    { t: 'split', id: 'local', tone: 'fresh', flip: true, img: 'assets/gym.jpg',
      alt: 'Strength training in the clinic gym',
      eyebrow: 'A local angle',
      h2: 'Running in the Illawarra: what it does to your legs',
      html: `
<p>The terrain around here shapes the injuries we see. The flat, forgiving loops around the Lake Illawarra foreshore are kind to legs and tempt people into volume increases they have not earned. The coastal paths north toward Wollongong add distance easily for the same reason. Then there is the escarpment &mdash; the climbs up toward Mount Keira and Mount Kembla &mdash; which are a genuinely different stimulus. Sustained climbing loads the calf and Achilles heavily, and sustained descending loads the quadriceps and patellofemoral joint eccentrically, which is why people who add hill work often present with knee pain a fortnight later.</p>
<p>Surface changes matter as much as distance. Moving from footpath to sand, or from flat bitumen to camber and trail, changes where the load goes. So does the shift into the humid part of the year, when pace slows for the same effort and runners often push harder to hold a number that is no longer realistic.</p>
<p>Most of the runners we see are not chasing a podium. They are building toward a local parkrun personal best, a first half marathon, or simply keeping a habit that keeps the rest of the week manageable. The plan is built around that goal and around the actual roads you run on.</p>`,
      list: [
        'Training plans built around your real routes and terrain',
        'Race-build planning &mdash; working backwards from your event date',
        'Support for local running groups and clubs &mdash; get in touch',
      ],
    },

    { t: 'prose', tone: 'alt', eyebrow: 'Do not ignore these',
      h2: 'Running pain that needs prompt assessment',
      html: `
<p>Most running niggles are safe to manage sensibly for a week or two. A few are not. Book promptly &mdash; and see a doctor as well &mdash; if you have <b>a sharply localised, tender spot on a bone</b> that hurts to press and gets worse as a run progresses rather than warming up, pain that wakes you at night, or pain that has started making you limp. Those features point toward a bone stress injury, and continuing to run on one turns a manageable problem into a fracture and a much longer layoff.</p>
<p>It is also worth raising if you have lost weight without meaning to, have had recurrent bone injuries, or &mdash; for female runners &mdash; if your periods have become irregular or stopped. That combination can indicate low energy availability, which undermines bone and tissue health no matter how well the training is structured, and it needs medical input alongside physiotherapy rather than more rehab exercises.</p>`,
    },

    { t: 'faq', h2: 'Running injury FAQs',
      items: [
        { q: 'Do I have to stop running completely?',
          a: 'Usually not. Complete rest settles symptoms but also reduces the tissue’s capacity, so the same volume tends to hurt again on return. In most cases we reduce the load enough to let things settle — shorter, flatter, slower, less often — while building capacity, then progress you back up. Full rest is reserved for the injuries that genuinely require it, such as bone stress injuries.' },
        { q: 'What causes shin splints and how do I get rid of them?',
          a: 'Medial tibial stress syndrome is a bone stress reaction along the inner shin, driven by rapid increases in running volume or intensity, often on harder surfaces. Treatment involves reducing the aggravating load, progressively building calf and foot capacity, addressing running mechanics where relevant, and reintroducing volume gradually. Persistent, sharply localised bone pain needs assessment to rule out a stress fracture.' },
        { q: 'Is a running assessment worth doing if I am not injured?',
          a: 'It can be, particularly if you are stepping up to a longer distance, have a history of recurring niggles, or are returning after a long break. It gives you a picture of your strength and capacity relative to what you are asking of yourself, and lets you fix the limiter before it becomes an injury.' },
        { q: 'Do I need special running shoes or orthotics?',
          a: 'Probably not. The evidence for prescribing shoes by foot type or pronation is weak, and comfort is the best available guide. What does matter is avoiding abrupt changes — a big shift in drop, stack or stiffness mid-training-block increases load somewhere. Orthoses help some people with some presentations, and we will say so if you are one of them.' },
        { q: 'How quickly can I increase my weekly kilometres?',
          a: 'The old ten per cent rule is a rough guide rather than a law. What matters more is consistency, how your body responded to the last increase, and not stacking a volume rise on top of new intensity, new terrain and a stressful week all at once. We will set the progression around your history rather than a generic number.' },
        { q: 'Can I still run while pregnant, or after having a baby?',
          a: 'Many people can, with appropriate adjustments, and returning to running after birth benefits from a graded plan rather than a date. This is an area where the right assessment matters — call the clinic and we will tell you honestly what we can help with and where a referral is the better answer.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'Running problems often overlap with these.',
      items: ['sports-injury', 'acl-injuries', 'dry-needling'] },

    { t: 'final', h2: 'Keep running.',
      p: 'Book an assessment and get a plan that settles the injury without taking your running away entirely.',
      cta: 'Book an appointment' },
  ],
});

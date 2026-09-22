import { register } from '../lib.mjs';

export default register({
  slug: 'sports-injury',
  group: 'services',
  groupLabel: 'Service',
  navActive: 'services',
  crumb: 'Sports injury &amp; rehab',
  crumbParent: 'services',
  order: 1,
  card: {
    name: 'Sports injury &amp; rehab',
    blurb: 'Diagnosis, treatment and staged return-to-sport rehabilitation for athletes at every level.',
  },
  title: 'Sports Physio Dapto | Sports Injury &amp; Return to Sport Rehab',
  metaDesc:
    'Sports injury physiotherapy in Dapto NSW. Assessment, treatment and staged return-to-sport rehab for hamstring, ankle, knee and shoulder injuries. Book today.',
  eyebrow: 'Sports physiotherapy',
  h1: 'Sports injury physiotherapy in Dapto',
  lead:
    'Sports physiotherapy covers injury assessment and rehabilitation for weekend and representative athletes. We help you work out what training is safe now and use <b>sport-specific testing</b> to guide your return to competition.',
  schema: {
    name: 'Sports injury physiotherapy and rehabilitation',
    serviceType: 'Sports physiotherapy',
    alternateName: ['Sports injury rehabilitation', 'Return to sport rehabilitation', 'Sports physio'],
    description:
      'Assessment, treatment and staged return-to-sport rehabilitation for sporting injuries including hamstring and calf strains, ankle sprains, knee and shoulder injuries, delivered in Dapto NSW.',
    offerCatalog: [
      'Sports injury assessment', 'Manual therapy', 'Dry needling',
      'Progressive strength and conditioning', 'Return to sport testing', 'Injury prevention screening',
    ],
  },

  blocks: [
    { t: 'hero', img: 'assets/shoulder-exercise.jpg', alt: 'Physiotherapist supervising a shoulder strengthening exercise with a dumbbell',
      trust: ['One-on-one every session', 'Objective return-to-sport testing', 'Rehab built around your sport'] },
    { t: 'crumbs' },
    { t: 'toc', items: [
      ['overview', 'What we do'], ['injuries', 'Injuries we treat'], ['phases', 'The rehab phases'],
      ['local', 'Illawarra sport'], ['prevention', 'Preventing the next one'], ['faq', 'FAQs'],
    ] },

    { t: 'prose', id: 'overview', eyebrow: 'Assessment and rehabilitation',
      h2: 'How can sports physiotherapy help?',
      sub: 'A hamstring strain, a swollen ankle and a painful shoulder each need a different plan. Assessment starts with how the injury happened and what your sport asks of you.',
      html: `
<p>Tell us what you were doing when the injury happened, what you felt and how it changed afterwards. That history and a physical examination often give us enough information to start treatment. A mild hamstring strain and an injury to the tendon near the pelvis can both hurt at the back of the thigh, but need different rehabilitation. If the diagnosis is unclear or a scan would change treatment, we will discuss further assessment.</p>
<p>Early rehabilitation balances protection with movement. Some injuries need a period of rest or restricted weight-bearing; others tolerate exercise sooner. We can adapt training around those limits, for example using a bike while a running injury settles, if that is comfortable and safe.</p>
<p>Pain can settle before strength and speed have recovered. A hamstring may feel comfortable during daily activities but still struggle with sprinting. Strength testing and gradual exposure to the movements your sport demands help inform the return decision, alongside healing time and your confidence. They cannot guarantee that another injury will not happen.</p>`,
    },

    { t: 'cols', id: 'injuries',
      left: { eyebrow: 'What we treat', h2: 'Sporting injuries we assess', items: [
        'Hamstring, calf, quadriceps and groin strains',
        'Ankle sprains, repeat rolling and chronic instability',
        'Knee injuries: ligament, meniscus, kneecap pain, <a href="acl-injuries.html">ACL injuries</a>',
        'Shoulder injuries, rotator cuff problems and instability',
        'Tendon problems: Achilles, patellar, gluteal, rotator cuff',
        'Overuse and load-related injuries, including <a href="running-injuries.html">running injuries</a>',
        'Post-surgical rehabilitation and return to competition',
      ] },
      right: { eyebrow: 'Our approach', h2: 'How we get you back', items: [
        'An explanation of the likely injury and whether imaging would help',
        'Hands-on therapy or <a href="dry-needling.html">dry needling</a> where appropriate for symptoms',
        'Loading the injured tissue as soon as it can tolerate it',
        'Adapted strength and fitness work while the injury heals',
        'Sport-specific testing before you are cleared to return',
        'A written plan you can share with your coach or trainer',
      ] },
    },

    { t: 'steps', id: 'phases', eyebrow: 'How rehab progresses',
      h2: 'The four phases of return-to-sport rehab',
      sub: 'Each phase depends on the injury, healing time and how you respond to increasing demands. We review strength and function before progressing.',
      items: [
        { h3: 'Settle and protect', p: 'Manage pain and swelling, restore movement as appropriate and choose safe ways to maintain fitness while the injury heals.' },
        { h3: 'Restore strength', p: 'Progressive loading of the injured tissue through full range, until strength and endurance measure up against the uninjured side and against the demands of your position.' },
        { h3: 'Rebuild power and speed', p: 'Practise jumping, landing and changing direction, then build acceleration and braking at the speeds your sport requires.' },
        { h3: 'Return to sport testing', p: 'Objective, sport-specific criteria: strength symmetry, hop and jump testing, speed exposure, contact tolerance where relevant, before you are cleared for full training and then competition.' },
      ],
    },

    { t: 'split', id: 'local', tone: 'fresh', flip: true, img: 'assets/ankle-taping.jpg',
      alt: 'Physiotherapist strapping an athlete&rsquo;s ankle',
      eyebrow: 'Illawarra sport',
      h2: 'Rehab that respects the Illawarra sporting calendar',
      html: `
<p>The Illawarra sporting calendar gives players little downtime. Rugby league and football involve sprinting and contact; netball adds repeated landing and pivoting. Summer cricket places different demands on a bowler&rsquo;s shoulder and back, while surf life saving brings swimming, paddling and beach running. Your rehabilitation needs to prepare you for those particular demands.</p>
<p>A hamstring injury in round four leaves a different amount of preparation time from the same injury in the second-last round. Tell us about upcoming trials or finals so we can discuss what is realistic. A competition date matters to the plan, but it does not change the time an injury needs to heal.</p>
<p>With your permission, we can share training limits and progress with your coach so everyone is working towards the same return plan.</p>`,
      list: [
        'Appointments before and after work, Monday to Friday',
        'Plans written so your coach or trainer can follow them',
        'Serving players across Dapto, Wollongong, Shellharbour and the Illawarra',
      ],
    },

    { t: 'prose', id: 'prevention', tone: 'alt', eyebrow: 'Before it happens',
      h2: 'Reducing the risk of the next injury',
      sub: 'A previous injury can increase the risk of another, particularly for injuries such as hamstring strains and ankle sprains. Rehabilitation should address any remaining weakness or loss of control.',
      html: `
<p>Returning to a full training week can be a large jump from rehabilitation exercises. Build that exposure gradually and keep up the strength work your injury requires. Re-injury risk also depends on the injury itself, previous injuries and the demands of the sport; no program removes it entirely.</p>
<h3>What a screening session covers</h3>
<p>For athletes coming off a history of niggles, or heading into a pre-season, we run a movement and strength screen: single-leg strength and control, hamstring and calf capacity, ankle range, hip and shoulder strength, and the specific movements your sport demands. The findings help us choose exercises and training changes. A screen cannot predict every injury.</p>
<h3>When should I see someone rather than wait it out?</h3>
<p>Seek prompt assessment after a pop with rapid swelling, or if a joint locks or repeatedly gives way. If you cannot bear weight after an injury, seek urgent medical assessment to check for a fracture or other significant damage. Persistent pain that is limiting training also deserves assessment.</p>`,
    },

    { t: 'faq', h2: 'Sports physiotherapy FAQs',
      items: [
        { q: 'How soon after a sports injury should I see a physio?',
          a: 'An appointment in the first few days can help clarify the injury and what activity is safe. Seek urgent medical assessment if you cannot bear weight, have a visibly deformed limb or have severe pain after an injury.' },
        { q: 'Do I need a referral to see a sports physio?',
          a: 'No. You can book directly as a private patient with no referral. Funding schemes may require a referral or approval; check the <a href="fees-and-rebates.html">fees and rebates page</a> and bring any relevant paperwork.' },
        { q: 'Do I need a scan for a sports injury?',
          a: 'Many sports injuries can be assessed without a scan. Imaging may be needed for a suspected fracture, significant ligament injury or symptoms that do not follow the expected course. We will explain whether it would change your treatment.' },
        { q: 'What is return-to-sport testing and why does it matter?',
          a: 'It checks abilities your sport requires, such as strength, hopping, landing and sprinting. Results help identify what still needs work and guide a gradual return to training. We also consider healing time, symptoms and confidence; passing tests does not guarantee freedom from re-injury.' },
        { q: 'Can I keep training while I rehab?',
          a: 'Often, with changes. The injury determines whether you can reduce training, switch activities or need a period of rest. We will explain which movements to avoid and how to judge your response to exercise.' },
        { q: 'Do you treat junior and school-age athletes?',
          a: 'Yes. Growing athletes need a different approach: growth-plate related conditions, rapid changes in load, and school, club and representative commitments stacked on top of each other. We assess with that in mind and we are direct with families about total weekly load.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'Read more about ACL rehabilitation, running injuries and dry needling.',
      items: ['acl-injuries', 'running-injuries', 'dry-needling'] },

    { t: 'final', h2: 'Plan your return to sport.',
      p: 'Book a sports injury assessment with Chris in Dapto to discuss treatment and your return to training.',
      cta: 'Book an appointment' },
  ],
});

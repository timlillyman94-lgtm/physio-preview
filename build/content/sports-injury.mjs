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
    'From the weekend competition to representative sport, we diagnose the injury, settle it, rebuild the strength and load tolerance underneath it, and then <b>test that you are genuinely ready</b> before you go back.',
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

    { t: 'prose', id: 'overview', eyebrow: 'The short version',
      h2: 'What does a sports physiotherapist actually do?',
      sub: 'Three jobs: work out exactly what is injured, settle it without letting you deteriorate, and rebuild capacity until the tissue can handle your sport again.',
      html: `
<p>Most sporting injuries are not mysteries. A clear history &mdash; what you were doing, what you felt, what happened in the next hour &mdash; combined with a physical examination will identify the great majority of them without any imaging at all. The first job is to name the injury accurately, because the treatment for a grade one hamstring strain and a proximal tendon injury are not the same thing, even though both hurt in the back of the thigh.</p>
<p>The second job is early management that protects the injured tissue without deconditioning everything else. Two weeks of complete rest costs you strength, aerobic fitness and neuromuscular control that then take far longer than two weeks to rebuild. Modern sports rehabilitation loads the injured tissue as early as it can safely tolerate load, and keeps training everything that is not injured throughout.</p>
<p>The third job &mdash; the one most often skipped &mdash; is making the decision to return objectively rather than by feel. Pain-free does not mean ready. A hamstring can feel completely normal while still being measurably weaker than the other side at the length where it tears. Testing before return is what separates a recovery from a recurrence.</p>`,
    },

    { t: 'cols', id: 'injuries',
      left: { eyebrow: 'What we treat', h2: 'Sporting injuries we see most', items: [
        'Hamstring, calf, quadriceps and groin strains',
        'Ankle sprains, repeat rolling and chronic instability',
        'Knee injuries &mdash; ligament, meniscus, kneecap pain, <a href="acl-injuries.html">ACL injuries</a>',
        'Shoulder injuries, rotator cuff problems and instability',
        'Tendon problems &mdash; Achilles, patellar, gluteal, rotator cuff',
        'Overuse and load-related injuries, including <a href="running-injuries.html">running injuries</a>',
        'Post-surgical rehabilitation and return to competition',
      ] },
      right: { eyebrow: 'Our approach', h2: 'How we get you back', items: [
        'Accurate diagnosis, and honest advice on whether imaging is warranted',
        'Hands-on therapy and <a href="dry-needling.html">dry needling</a> to settle symptoms early',
        'Loading the injured tissue as soon as it can tolerate it',
        'Strength and conditioning that keeps the rest of you match-fit',
        'Sport-specific testing before you are cleared to return',
        'A written plan you can share with your coach or trainer',
      ] },
    },

    { t: 'steps', id: 'phases', eyebrow: 'How rehab progresses',
      h2: 'The four phases of return-to-sport rehab',
      sub: 'Progression is by criteria, not by calendar. You move to the next phase when you meet the standard, whether that takes three days or three weeks.',
      items: [
        { h3: 'Settle and protect', p: 'Reduce pain and swelling, restore basic range, and keep training everything that is not injured so you do not lose your season\'s fitness while you heal.' },
        { h3: 'Restore strength', p: 'Progressive loading of the injured tissue through full range, until strength and endurance measure up against the uninjured side and against the demands of your position.' },
        { h3: 'Rebuild power and speed', p: 'Plyometrics, change of direction, acceleration and deceleration. This is where most under-cooked rehab stops too early — and where most re-injuries are set up.' },
        { h3: 'Return to sport testing', p: 'Objective, sport-specific criteria — strength symmetry, hop and jump testing, speed exposure, contact tolerance where relevant — before you are cleared for full training and then competition.' },
      ],
    },

    { t: 'split', id: 'local', tone: 'fresh', flip: true, img: 'assets/ankle-taping.jpg',
      alt: 'Physiotherapist strapping an athlete&rsquo;s ankle',
      eyebrow: 'A local angle',
      h2: 'Rehab that respects the Illawarra sporting calendar',
      html: `
<p>Sport in this region runs almost year-round, and the injuries arrive in predictable waves. Winter brings the rugby league and football seasons and with them hamstrings, ankles, shoulders and knees &mdash; a large share of them in the first month, when players go from a light off-season straight into contact and sprinting. Netball delivers ankles and knees, especially in the change-of-direction load that landing and pivoting demand. Summer brings cricket shoulders and lumbar stress in young fast bowlers, plus the surf life saving and beach-season load along the coast.</p>
<p>Knowing the calendar matters more than it sounds. Rehabilitating a hamstring in round four, with a finals campaign fifteen weeks away, is a different conversation from rehabilitating the same hamstring in the second-last round. So is a pre-season injury, where you have time to fix the underlying capacity problem properly rather than patch it.</p>
<p>We plan backwards from the date that matters to you &mdash; a grand final, a rep trial, a season opener, a fun run &mdash; and we tell you plainly when that date is not realistic, rather than letting you find out the hard way in the warm-up.</p>`,
      list: [
        'Appointments before and after work, Monday to Friday',
        'Plans written so your coach or trainer can follow them',
        'Serving players across Dapto, Wollongong, Shellharbour and the Illawarra',
      ],
    },

    { t: 'prose', id: 'prevention', tone: 'alt', eyebrow: 'Before it happens',
      h2: 'Reducing the risk of the next injury',
      sub: 'The single best predictor of a sporting injury is a previous one. That is bad news, and it is also the opportunity.',
      html: `
<p>Recurrence risk is highest in the first weeks after return, and it is driven mostly by two things: incomplete rehabilitation, and a spike in training load. Both are manageable. Finishing rehab properly &mdash; through the power and speed phases, not just to the point where it stopped hurting &mdash; addresses the first. Building load gradually and tracking it addresses the second.</p>
<h3>What a screening session covers</h3>
<p>For athletes coming off a history of niggles, or heading into a pre-season, we run a movement and strength screen: single-leg strength and control, hamstring and calf capacity, ankle range, hip and shoulder strength, and the specific movements your sport demands. It produces a short list of your actual limiters, and a program aimed at them. It is considerably cheaper than a season.</p>
<h3>When should I see someone rather than wait it out?</h3>
<p>Book early if you heard or felt a pop, if the joint swelled within an hour, if you cannot weight-bear, if the joint gives way or locks, or if a niggle has not improved after a fortnight of sensible self-management. Waiting rarely makes a sporting injury easier to treat, and it frequently makes the rehabilitation longer than the injury itself needed to be.</p>`,
    },

    { t: 'faq', h2: 'Sports physiotherapy FAQs',
      items: [
        { q: 'How soon after a sports injury should I see a physio?',
          a: 'As soon as you can, ideally within the first few days. Early assessment lets us protect the injury, settle the pain and start appropriate loading straight away, which usually shortens the whole process. It also catches the small number of injuries that need urgent imaging or a surgical opinion.' },
        { q: 'Do I need a referral to see a sports physio?',
          a: 'No. You can book directly as a private patient with no referral. Bring the relevant paperwork if you are claiming through a GP care plan, a WorkCover claim, an NDIS plan or a sporting body’s insurance.' },
        { q: 'Do I need a scan for a sports injury?',
          a: 'Usually not. Most sporting injuries are diagnosed clinically, and a scan often shows incidental findings that have nothing to do with your pain. We will tell you clearly when imaging genuinely changes the plan — for example a suspected fracture, a significant ligament rupture, or an injury that is not behaving as expected.' },
        { q: 'What is return-to-sport testing and why does it matter?',
          a: 'It is a set of objective, sport-specific measures — strength symmetry, hop and jump tests, speed exposure, sport-specific movement quality — used to decide whether you are ready, instead of relying on whether you feel ready. Feeling fine is a poor guide: tissue can be pain-free while still measurably below the capacity your sport demands.' },
        { q: 'Can I keep training while I rehab?',
          a: 'Almost always, in modified form. Complete rest costs you strength and fitness that take much longer to rebuild than the injury takes to heal. We will tell you exactly what you can keep doing, what to modify and what to leave alone, and we update that every session.' },
        { q: 'Do you treat junior and school-age athletes?',
          a: 'Yes. Growing athletes need a different approach — growth-plate related conditions, rapid changes in load, and school, club and representative commitments stacked on top of each other. We assess with that in mind and we are direct with families about total weekly load.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'The injuries that most often bring athletes through our door, each with its own dedicated page.',
      items: ['acl-injuries', 'running-injuries', 'dry-needling'] },

    { t: 'final', h2: 'Back to training, sooner.',
      p: 'Book an assessment with our Dapto team and get a clear, staged plan back to your sport.',
      cta: 'Book an appointment' },
  ],
});

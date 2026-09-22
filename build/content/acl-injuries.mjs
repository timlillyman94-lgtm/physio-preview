import { register } from '../lib.mjs';

export default register({
  slug: 'acl-injuries',
  group: 'services',
  groupLabel: 'Service',
  navActive: 'services',
  crumb: 'ACL injuries',
  crumbParent: 'services',
  order: 3,
  card: {
    name: 'ACL injury &amp; reconstruction rehab',
    blurb: 'Prehab, post-operative rehabilitation and criteria-based return to sport after an ACL injury.',
  },
  title: 'ACL Rehab Dapto | ACL Reconstruction Physio Illawarra',
  metaDesc:
    'ACL injury and reconstruction rehab in Dapto NSW. Prehab, staged post-operative physio and objective return-to-sport testing, close to home in the Illawarra.',
  eyebrow: 'ACL injury &amp; reconstruction',
  h1: 'ACL rehabilitation in Dapto',
  lead:
    'ACL rehabilitation in Dapto includes preparation for reconstruction, rehabilitation after surgery and non-surgical management. We plan your exercises around knee function and your goals, with <b>testing to guide a return to sport</b>.',
  schema: {
    name: 'ACL injury and reconstruction rehabilitation',
    serviceType: 'ACL rehabilitation',
    alternateName: ['ACL reconstruction physiotherapy', 'ACL prehab', 'Knee ligament rehabilitation'],
    description:
      'Physiotherapy for anterior cruciate ligament injuries in Dapto NSW, covering pre-operative preparation, staged post-operative rehabilitation, non-surgical management and objective return-to-sport testing.',
    offerCatalog: [
      'ACL injury assessment', 'Pre-operative preparation (prehab)',
      'Post-operative ACL rehabilitation', 'Non-surgical ACL management',
      'Return to sport testing', 'ACL injury prevention programs',
    ],
  },

  blocks: [
    { t: 'hero', img: 'assets/knee-treatment.jpg', alt: 'Physiotherapist assessing a patient&rsquo;s knee and hamstring',
      trust: ['Prehab through to return to sport', 'Progress reviewed at each stage', 'Rehabilitation in Dapto'] },
    { t: 'crumbs' },
    { t: 'toc', items: [
      ['overview', 'What the ACL does'], ['signs', 'Did I tear it?'], ['surgery', 'Surgery or not'],
      ['phases', 'The rehab timeline'], ['prevention', 'Prevention'], ['faq', 'FAQs'],
    ] },

    { t: 'prose', id: 'overview', eyebrow: 'Understanding the injury',
      h2: 'What the ACL does, and how it gets injured',
      sub: 'The anterior cruciate ligament helps limit forward movement of the shin bone and controls rotation at the knee. An injury can leave the knee unstable during turning or landing, although the effect varies between people.',
      html: `
<p>Most ACL injuries are not the result of a collision. The majority happen without contact at all: decelerating hard, landing awkwardly from a jump, or planting a foot and changing direction while the knee collapses inward. That is why they are so common in netball, football, rugby league, basketball and touch, all sports built on rapid deceleration and change of direction.</p>
<p>The ACL rarely tears in isolation. Meniscal tears, injury to the medial collateral ligament and bone bruising commonly accompany it, and those associated injuries often influence both the surgical decision and the pace of rehabilitation. A thorough assessment establishes what else is involved rather than treating the ACL as the whole story.</p>
<p>Women and girls sustain ACL injuries at notably higher rates than men in the same pivoting sports, for a combination of anatomical, hormonal and neuromuscular reasons. The neuromuscular part (landing mechanics, hip and knee control, strength) is trainable, which is the basis of the prevention programs discussed below.</p>`,
    },

    { t: 'prose', id: 'signs', tone: 'alt', eyebrow: 'Recognising it',
      h2: 'How do I know if I have torn my ACL?',
      sub: 'How the injury happened helps us decide what to check. Swelling and pain can make early examination difficult, so some tests may need repeating.',
      html: `
<p>The classic account includes a pop, heard or felt, at the moment of injury, an immediate sense that the knee gave way, rapid swelling within the first few hours, and an inability to continue playing. Rapid swelling in particular is significant: a knee that swells inside a couple of hours has usually bled into the joint, and bleeding points to a structure with a blood supply, such as the ACL.</p>
<p>In the days that follow, people often describe the knee feeling unstable or untrustworthy on turning, or giving way on stairs or uneven ground. Some knees settle enough to walk on reasonably comfortably within a fortnight, which sometimes convinces people nothing serious happened. It is not a reliable indicator.</p>
<h3>What to do in the first week</h3>
<p>Get it assessed. We examine the knee with specific ligament tests, work out what else may be involved, settle the swelling, restore range of motion and get the quadriceps firing again, all of which are useful whatever the eventual decision about surgery. If the findings warrant it, we will organise imaging and refer you for a surgical opinion. Early loss of full extension and a quadriceps that shuts down are the two things most worth preventing in that first fortnight, because both make everything afterwards harder.</p>`,
    },

    { t: 'prose', id: 'surgery', eyebrow: 'The decision',
      h2: 'Do I need an ACL reconstruction?',
      sub: 'Not always. The decision depends on knee stability, associated injuries and the activities you want to return to. Discuss the options with your treating team.',
      html: `
<p>Reconstruction is commonly recommended for people who want to return to pivoting, cutting and contact sport, and for knees that continue to give way despite good rehabilitation. It is a well-established operation with generally good outcomes, and the graft is usually taken from your own hamstring, patellar or quadriceps tendon.</p>
<p>It is not the only path. There is a substantial body of evidence that a proportion of people manage very well without reconstruction: particularly those whose sport and work do not demand repeated pivoting, and those whose knees prove stable once strength and neuromuscular control are properly restored. Structured rehabilitation first, with the surgical decision revisited afterwards, is a legitimate and increasingly common approach.</p>
<p>Our role is not to make that decision for you or for your surgeon. It is to make sure the decision is an informed one, to prepare the knee properly either way, and to say so plainly if we think the rehabilitation is not delivering the stability you need. <b>Conservative ACL management is a particular interest of our principal physiotherapist, <a href="team.html">Chris Vitucci</a></b>. We can discuss what a rehabilitation-first approach would involve.</p>
<h3>Prehab: why the weeks before surgery matter</h3>
<p>If surgery is planned, the waiting period is useful time to work on knee movement and strength. Quadriceps strength before reconstruction is associated with function afterwards. Prehab aims to reduce swelling, restore knee extension and build strength as symptoms allow. You can also learn the early post-operative exercises before the operation.</p>`,
    },

    { t: 'steps', id: 'phases', eyebrow: 'The long game',
      h2: 'Rehabilitation after ACL reconstruction, stage by stage',
      sub: 'Returning to pivoting or contact sport commonly takes nine to twelve months or longer after reconstruction. The stages overlap and depend on healing time, associated injuries and progress in testing.',
      items: [
        { h3: 'Early recovery (0–6 weeks)', p: 'Protect the healing knee, manage swelling and work towards full extension and comfortable bending. Early exercises help the quadriceps start working again, within the limits of your surgical protocol.' },
        { h3: 'Strength (6 weeks–4 months)', p: 'Progressive loading of the whole leg and hip, closing the strength gap against the other side, restoring normal walking and building the base that later phases will sit on.' },
        { h3: 'Power and landing (4–7 months)', p: 'Build jumping, landing and change-of-direction work as strength and control improve. Running starts when the knee meets the required criteria and your treating team agrees; the timing varies.' },
        { h3: 'Preparation for return to sport', p: 'Progress to sport-specific training and contact where relevant. Strength and hop tests, movement quality and confidence help guide decisions alongside healing time and your surgeon&rsquo;s advice.' },
      ],
    },

    { t: 'split', id: 'prevention', tone: 'fresh', flip: true, img: 'assets/band-glute.jpg',
      alt: 'Resistance band strengthening for hip and knee control',
      eyebrow: 'Prevention',
      h2: 'ACL injury prevention for Illawarra clubs and players',
      html: `
<p>ACL injuries are, to a meaningful extent, preventable. Structured neuromuscular warm-up programs, the sort built into FIFA&rsquo;s 11+ for football and Netball Australia&rsquo;s KNEE program, combine strength, balance, landing technique and change-of-direction drills, and reduce ACL injury rates when they are performed consistently through a season. Use the chosen program regularly through the season, following its instructions on frequency and progression.</p>
<p>For clubs and teams around Dapto and the Illawarra, we can help set that up properly: teach the program to coaches so it does not depend on a physio being present, screen players who have a previous knee injury, and build individual programs for the ones carrying the most risk.</p>
<p>After a first ACL injury, both knees need attention during rehabilitation. Continue strength and landing exercises as you return to training, and build exposure to the speed and contact your sport requires. Testing helps identify remaining deficits, but neither a completed program nor a test result eliminates re-injury risk.</p>`,
      list: [
        'Team warm-up programs taught to coaches, not dependent on us',
        'Pre-season screening for players with previous knee injuries',
        'Ongoing programs for athletes returning from reconstruction',
      ],
    },

    { t: 'prose', tone: 'alt', eyebrow: 'Rehabilitation close to home',
      h2: 'Why doing ACL rehab locally matters',
      html: `
<p>Rehabilitation after ACL reconstruction extends over many months. Your surgery might take place in Wollongong or Sydney, while regular rehabilitation appointments can happen closer to home in Dapto. How often you attend depends on your stage of recovery, access to equipment and how independently you can exercise.</p>
<p>Fitting rehabilitation around work, school or family commitments can be difficult. Local appointments can reduce travel, leaving more time for the exercises between visits. We will discuss a schedule you can manage and adjust it as your knee progresses.</p>
<p>We work alongside your surgeon&rsquo;s protocol and can report progress back with your consent. If you are waiting for a surgical consultation, assessment and suitable exercises can begin while you consider the options.</p>`,
    },

    { t: 'faq', h2: 'ACL rehabilitation FAQs',
      items: [
        { q: 'How long does ACL rehab take?',
          a: 'After reconstruction, a return to pivoting or contact sport commonly takes nine to twelve months or longer. Running and everyday activities return at different stages. Non-surgical rehabilitation has its own progression, based on stability and your goals. Time alone does not determine readiness.' },
        { q: 'Do I definitely need surgery for a torn ACL?',
          a: 'Not necessarily. Reconstruction is commonly recommended for people returning to pivoting and contact sport, or for knees that keep giving way. A proportion of people do well without surgery, particularly if their sport and work do not demand repeated pivoting and if strength and control are properly restored. Structured rehabilitation first, with the decision revisited afterwards, is a reasonable path: the choice is made with your surgeon and you, and we make sure it is informed.' },
        { q: 'What is prehab and is it worth doing?',
          a: 'Prehab is rehabilitation before surgery. It helps you work on knee movement and strength while waiting for reconstruction, and learn the early post-operative exercises. The program is adjusted for swelling, pain and any associated injuries.' },
        { q: 'When can I run again after an ACL reconstruction?',
          a: 'Timing varies. You need adequate healing time as well as knee extension, minimal or no swelling, sufficient quadriceps strength and control. Your physiotherapist and surgeon will advise when to begin a graded running program, taking any other repaired structures into account.' },
        { q: 'How do you decide I am ready to play again?',
          a: 'We assess strength, hop performance, landing control and your response to increasingly demanding training. Healing time and confidence also matter. These checks guide the decision with you and your treating team; passing them cannot guarantee that the graft or the other knee will remain uninjured.' },
        { q: 'Can I claim ACL rehab on private health or WorkCover?',
          a: 'Private health extras may cover physiotherapy, subject to your policy. WorkCover may fund treatment for an eligible work injury, depending on claim and treatment approval. See <a href="workcover.html">WorkCover physiotherapy</a> and <a href="fees-and-rebates.html">fees and rebates</a>.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'Further information on sports rehabilitation, running and treatment costs.',
      items: ['sports-injury', 'running-injuries', 'fees-and-rebates'] },

    { t: 'final', h2: 'Planning your ACL rehabilitation?',
      p: 'Book an assessment to discuss your knee, treatment options and the next stage of rehabilitation.',
      cta: 'Book an appointment' },
  ],
});

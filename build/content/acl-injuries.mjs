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
    'An ACL injury is a nine-to-twelve month project, not a six-week one. We take you through the whole of it &mdash; prehab, surgery or not, staged rehabilitation and <b>objective testing before you return</b> &mdash; without a weekly drive to Sydney.',
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
    { t: 'hero', img: 'assets/gym.jpg', alt: 'Physiotherapist supervising loaded knee rehabilitation',
      trust: ['Prehab through to return to sport', 'Criteria-based, not calendar-based', 'Local &mdash; no Sydney commute'] },
    { t: 'crumbs' },
    { t: 'toc', items: [
      ['overview', 'What the ACL does'], ['signs', 'Did I tear it?'], ['surgery', 'Surgery or not'],
      ['phases', 'The rehab timeline'], ['prevention', 'Prevention'], ['faq', 'FAQs'],
    ] },

    { t: 'prose', id: 'overview', eyebrow: 'The short version',
      h2: 'What the ACL does, and how it gets injured',
      sub: 'The anterior cruciate ligament stops the shin bone sliding forward on the thigh bone, and controls rotation at the knee. Lose it and the knee becomes unreliable in exactly the movements sport demands.',
      html: `
<p>Most ACL injuries are not the result of a collision. The majority happen without contact at all: decelerating hard, landing awkwardly from a jump, or planting a foot and changing direction while the knee collapses inward. That is why they are so common in netball, football, rugby league, basketball and touch &mdash; all sports built on rapid deceleration and change of direction.</p>
<p>The ACL rarely tears in isolation. Meniscal tears, injury to the medial collateral ligament and bone bruising commonly accompany it, and those associated injuries often influence both the surgical decision and the pace of rehabilitation. A thorough assessment establishes what else is involved rather than treating the ACL as the whole story.</p>
<p>Women and girls sustain ACL injuries at notably higher rates than men in the same pivoting sports, for a combination of anatomical, hormonal and neuromuscular reasons. The neuromuscular part &mdash; landing mechanics, hip and knee control, strength &mdash; is trainable, which is the basis of the prevention programs discussed below.</p>`,
    },

    { t: 'prose', id: 'signs', tone: 'alt', eyebrow: 'Recognising it',
      h2: 'How do I know if I have torn my ACL?',
      sub: 'The history is usually more informative than the examination in the first 48 hours, and far more informative than a swollen knee that will not bend.',
      html: `
<p>The classic account includes a pop &mdash; heard or felt &mdash; at the moment of injury, an immediate sense that the knee gave way, rapid swelling within the first few hours, and an inability to continue playing. Rapid swelling in particular is significant: a knee that swells inside a couple of hours has usually bled into the joint, and bleeding points to a structure with a blood supply, such as the ACL.</p>
<p>In the days that follow, people often describe the knee feeling unstable or untrustworthy on turning, or giving way on stairs or uneven ground. Some knees settle enough to walk on reasonably comfortably within a fortnight, which sometimes convinces people nothing serious happened. It is not a reliable indicator.</p>
<h3>What to do in the first week</h3>
<p>Get it assessed. We examine the knee with specific ligament tests, work out what else may be involved, settle the swelling, restore range of motion and get the quadriceps firing again &mdash; all of which are useful whatever the eventual decision about surgery. If the findings warrant it, we will organise imaging and refer you for a surgical opinion. Early loss of full extension and a quadriceps that shuts down are the two things most worth preventing in that first fortnight, because both make everything afterwards harder.</p>`,
    },

    { t: 'prose', id: 'surgery', eyebrow: 'The decision',
      h2: 'Do I need an ACL reconstruction?',
      sub: 'Not automatically. The honest answer depends on what you want to go back to, not just on what the scan shows.',
      html: `
<p>Reconstruction is commonly recommended for people who want to return to pivoting, cutting and contact sport, and for knees that continue to give way despite good rehabilitation. It is a well-established operation with generally good outcomes, and the graft is usually taken from your own hamstring, patellar or quadriceps tendon.</p>
<p>It is not the only path. There is a substantial body of evidence that a proportion of people manage very well without reconstruction &mdash; particularly those whose sport and work do not demand repeated pivoting, and those whose knees prove stable once strength and neuromuscular control are properly restored. Structured rehabilitation first, with the surgical decision revisited afterwards, is a legitimate and increasingly common approach.</p>
<p>Our role is not to make that decision for you or for your surgeon. It is to make sure the decision is an informed one, to prepare the knee properly either way, and to say so plainly if we think the rehabilitation is not delivering the stability you need. <b>Conservative ACL management is a particular interest of our principal physiotherapist, <a href="team.html">Chris Vitucci</a></b> &mdash; so if you want the non-surgical option properly explored rather than waved past, you are in the right place.</p>
<h3>Prehab: why the weeks before surgery matter</h3>
<p>The state of the knee going into surgery predicts the state of the knee coming out of it. Quadriceps strength before reconstruction is one of the better predictors of function afterwards. So if surgery is planned, we use the waiting period deliberately: restore full extension and flexion, settle the swelling completely, rebuild quadriceps and hamstring strength as far as possible, and teach you the early post-operative exercises before you are sore and groggy rather than after.</p>`,
    },

    { t: 'steps', id: 'phases', eyebrow: 'The long game',
      h2: 'ACL rehabilitation, stage by stage',
      sub: 'Roughly nine to twelve months to competitive sport. Progression is by meeting criteria, not by reaching a date on a calendar.',
      items: [
        { h3: 'Early recovery (0–6 weeks)', p: 'Protect the graft, eliminate swelling, restore full extension and progressively regain flexion, and wake the quadriceps up. Unglamorous, and the phase that most determines the rest.' },
        { h3: 'Strength (6 weeks–4 months)', p: 'Progressive loading of the whole leg and hip, closing the strength gap against the other side, restoring normal walking and building the base that later phases will sit on.' },
        { h3: 'Power and landing (4–7 months)', p: 'Plyometrics, hopping, landing mechanics, deceleration and change of direction, introduced progressively once strength criteria are met. Running usually begins in this window, not before.' },
        { h3: 'Return to sport (7–12 months)', p: 'Sport-specific loading, contact exposure where relevant, and formal testing — strength symmetry, a hop test battery, movement quality — before clearance to train fully and then to play.' },
      ],
    },

    { t: 'split', id: 'prevention', tone: 'fresh', flip: true, img: 'assets/equipment.jpg',
      alt: 'Training equipment',
      eyebrow: 'Prevention',
      h2: 'ACL injury prevention for Illawarra clubs and players',
      html: `
<p>ACL injuries are, to a meaningful extent, preventable. Structured neuromuscular warm-up programs &mdash; the sort built into FIFA&rsquo;s 11+ for football and Netball Australia&rsquo;s KNEE program &mdash; combine strength, balance, landing technique and change-of-direction drills, and reduce ACL injury rates when they are performed consistently through a season. The catch is in the word consistently: they work when they replace the warm-up two or three times a week, and not when they are done for a fortnight in February.</p>
<p>For clubs and teams around Dapto and the Illawarra, we can help set that up properly &mdash; teach the program to coaches so it does not depend on a physio being present, screen players who have a previous knee injury, and build individual programs for the ones carrying the most risk.</p>
<p>For individual athletes returning from a first ACL injury, prevention is not optional. Re-injury risk &mdash; to the same knee or the other one &mdash; is highest in the first two years, and is reduced substantially by completing rehabilitation properly and by continuing the strength and landing work after you have been cleared.</p>`,
      list: [
        'Team warm-up programs taught to coaches, not dependent on us',
        'Pre-season screening for players with previous knee injuries',
        'Ongoing programs for athletes returning from reconstruction',
      ],
    },

    { t: 'prose', tone: 'alt', eyebrow: 'A local angle',
      h2: 'Why doing ACL rehab locally matters',
      html: `
<p>An ACL reconstruction involves the better part of a year of rehabilitation, with regular supervised sessions for much of it. The surgery itself might be a single day in Wollongong or Sydney; the rehabilitation is fifty or more appointments spread across nine to twelve months, most of them requiring equipment and supervision.</p>
<p>That arithmetic is why doing it close to home matters. Adherence is the single biggest determinant of ACL rehabilitation outcomes, and adherence collapses when every session involves a long drive. Being ten minutes from home in Dapto &mdash; and being able to book before or after work &mdash; is not a convenience detail; it is the thing that makes the program finishable.</p>
<p>We are happy to work alongside your surgeon&rsquo;s protocol and to report progress back to them. If you have not had your surgical consultation yet, we can get the knee into good condition in the meantime, which is time you cannot get back later.</p>`,
    },

    { t: 'faq', h2: 'ACL rehabilitation FAQs',
      items: [
        { q: 'How long does ACL rehab take?',
          a: 'Typically nine to twelve months before returning to pivoting or contact sport, longer for some. Walking comfortably comes back within weeks and running usually somewhere around four to six months, but the strength, power and landing work that protects the knee takes the rest of that time. Returning earlier than nine months is associated with a markedly higher re-injury rate.' },
        { q: 'Do I definitely need surgery for a torn ACL?',
          a: 'Not necessarily. Reconstruction is commonly recommended for people returning to pivoting and contact sport, or for knees that keep giving way. A proportion of people do well without surgery, particularly if their sport and work do not demand repeated pivoting and if strength and control are properly restored. Structured rehabilitation first, with the decision revisited afterwards, is a reasonable path — the choice is made with your surgeon and you, and we make sure it is informed.' },
        { q: 'What is prehab and is it worth doing?',
          a: 'Prehab is the rehabilitation done before surgery. It is worth doing: quadriceps strength and knee range of motion going into a reconstruction are among the better predictors of function coming out of one. We use the waiting period to eliminate swelling, restore full extension, rebuild strength and teach you the early post-operative exercises in advance.' },
        { q: 'When can I run again after an ACL reconstruction?',
          a: 'Usually somewhere between four and six months, and it depends on meeting criteria rather than on the date — full knee extension, no swelling, adequate quadriceps strength relative to the other side, and good single-leg control. Running too early with a weak quadriceps is a reliable way to irritate the knee and slow the whole program down.' },
        { q: 'How do you decide I am ready to play again?',
          a: 'With objective testing rather than by feel. We use strength measures compared against the uninjured side, a battery of hop tests, movement and landing quality, and progressive exposure to full training. Meeting those criteria before returning is one of the clearest modifiable factors in reducing re-injury risk.' },
        { q: 'Can I claim ACL rehab on private health or WorkCover?',
          a: 'Yes. Physiotherapy is claimable on most private health extras cover, subject to your policy limits. If the injury happened at work it is generally covered by the workers compensation scheme instead — see our WorkCover page. Our fees and rebates page explains the options.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'Knee injuries rarely arrive alone. These are the pages most often read alongside this one.',
      items: ['sports-injury', 'running-injuries', 'fees-and-rebates'] },

    { t: 'final', h2: 'Start the knee off right.',
      p: 'Whether you are two days post-injury or two weeks post-surgery, book an assessment and get a plan for the whole journey.',
      cta: 'Book an appointment' },
  ],
});

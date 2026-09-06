import { register } from '../lib.mjs';

export default register({
  slug: 'neck-back-pain',
  group: 'conditions',
  groupLabel: 'Condition',
  navActive: 'services',
  crumb: 'Neck &amp; back pain',
  crumbParent: 'services',
  order: 1,
  card: {
    name: 'Neck &amp; back pain',
    blurb: 'Hands-on treatment and targeted exercise for back pain, neck pain and sciatica.',
  },
  title: 'Back &amp; Neck Pain Physio Dapto | Sciatica Treatment',
  metaDesc:
    'Physiotherapy for lower back pain, neck pain and sciatica in Dapto NSW. Hands-on treatment plus targeted exercise, without unnecessary scans. Book today.',
  eyebrow: 'Spinal physiotherapy',
  h1: 'Neck and back pain treatment in Dapto',
  lead:
    'Acute or long-standing, most spinal pain responds well to the right physiotherapy &mdash; and <b>most of it does not need a scan</b>. We work out what is driving your pain, settle it, and give you a plan that keeps it settled.',
  schema: {
    name: 'Neck pain, back pain and sciatica physiotherapy',
    serviceType: 'Spinal physiotherapy',
    alternateName: ['Back pain treatment', 'Neck pain treatment', 'Sciatica physiotherapy', 'Lower back pain physio'],
    description:
      'Physiotherapy assessment and treatment for lower back pain, neck pain, sciatica, disc-related pain and postural pain, combining manual therapy, dry needling and progressive exercise, in Dapto NSW.',
    offerCatalog: [
      'Spinal assessment', 'Manual therapy', 'Sciatica treatment', 'Dry needling',
      'Graded exercise programs', 'Ergonomic and self-management advice',
    ],
  },

  blocks: [
    { t: 'hero', img: 'assets/back-treatment.jpg', alt: 'Physiotherapist assessing a patient&rsquo;s lower back',
      trust: ['Assessment before imaging', 'Hands-on treatment', 'A plan you can keep doing'] },
    { t: 'crumbs' },
    { t: 'toc', items: [
      ['overview', 'Start here'], ['back', 'Lower back pain'], ['sciatica', 'Sciatica'],
      ['neck', 'Neck pain'], ['red-flags', 'When to seek urgent care'], ['faq', 'FAQs'],
    ] },

    { t: 'prose', id: 'overview', eyebrow: 'The short version',
      h2: 'What most people get told about back pain is out of date',
      sub: 'Backs are not fragile, discs do not &ldquo;slip out&rdquo;, and scan findings are a poor guide to how much something hurts.',
      html: `
<p>The great majority of neck and back pain has no sinister cause and improves with sensible treatment and movement. What has changed over the past two decades is how we get there. The old model &mdash; rest, avoid bending, wait for a scan, treat the picture &mdash; produced worse outcomes than the current one, which is to assess properly, reassure accurately, restore movement early and load the spine progressively.</p>
<p>Imaging is a good example. Scans of pain-free adults routinely show disc bulges, degeneration and facet joint changes, and the proportion showing them rises steadily with age. Those findings are ordinary, like grey hair. Ordering a scan for uncomplicated spinal pain frequently produces a frightening report, no change in the treatment plan, and a patient who now moves more cautiously than before &mdash; which is the opposite of helpful. We will tell you plainly when a scan will genuinely change what we do, and when it will not.</p>
<p>The other thing worth saying early: hurting a lot does not mean you have damaged a lot. A locked, spasming back can be extremely painful and structurally trivial. Pain is a protective output, and it is influenced by load, sleep, stress and how threatened you feel by the problem &mdash; which is why explanation is a genuine part of the treatment, not a nicety around it.</p>`,
    },

    { t: 'prose', id: 'back', tone: 'alt', eyebrow: 'Lower back',
      h2: 'Lower back pain',
      sub: 'The most common musculoskeletal complaint we see, and one of the most treatable.',
      html: `
<p>Lower back pain arrives in a few recognisable patterns. There is the sudden episode &mdash; a lift, a twist, a sneeze &mdash; where the back locks up and every movement is guarded. There is the gradual ache that builds over weeks of sitting, driving or repetitive work. There is the recurrent back that settles and returns two or three times a year. And there is persistent pain that has been present for months and has usually collected a layer of fear and avoidance on top of it.</p>
<p>Each responds to a different emphasis. An acute locked back needs pain relief, gentle restoration of movement, and reassurance that it is safe to move. A load-related ache needs the load addressed and the supporting capacity built. A recurrent back needs the pattern investigated, not just the current episode treated. Persistent pain needs graded exposure, education and time, and a physiotherapist willing to be honest about the timeframe.</p>
<h3>What treatment looks like</h3>
<p>Typically a combination: hands-on manual therapy and, where it helps, <a href="dry-needling.html">dry needling</a> to reduce pain and stiffness enough to move properly; then progressive exercise to restore range, control and strength; then a plan for keeping it that way. The exercise component is what produces the durable result, and it is the part we spend the most effort making realistic enough that you will actually do it.</p>`,
    },

    { t: 'prose', id: 'sciatica', eyebrow: 'Nerve pain',
      h2: 'Sciatica: what it is and how physiotherapy helps',
      sub: 'Sciatica is a symptom, not a diagnosis &mdash; irritation of the sciatic nerve or the nerve roots that form it.',
      html: `
<p>True sciatica is pain that travels from the lower back or buttock down the back of the leg, often below the knee, and it may be accompanied by pins and needles, numbness or weakness. It is usually caused by irritation or compression of a lumbar nerve root, most often by a disc bulge, sometimes by narrowing of the space the nerve passes through. Not all leg pain is sciatica &mdash; referred pain from the joints or muscles of the lower back can feel similar but behaves differently, and telling them apart changes the treatment.</p>
<p>The good news is that most sciatica settles. Nerve-related symptoms often improve over weeks to a few months, and physiotherapy is a first-line treatment. We use positions and movements that reduce nerve irritation, hands-on treatment for the joints and muscles contributing to it, specific nerve mobility work once irritability has dropped, and then a progressive program to restore strength and control. Just as importantly, we help you manage the day-to-day &mdash; how to sit, sleep and drive while it settles.</p>
<h3>When sciatica needs more than physiotherapy</h3>
<p>A small proportion of cases need medical or surgical input: progressive weakness in the leg, symptoms that are not improving over a reasonable period, or the red flag symptoms listed below. We monitor for those specifically, and we will refer you promptly rather than persisting with treatment that is not working.</p>`,
    },

    { t: 'split', id: 'neck', tone: 'fresh', img: 'assets/back-manual.jpg',
      alt: 'Physiotherapist delivering manual therapy to a patient&rsquo;s upper back',
      eyebrow: 'Neck &amp; upper back',
      h2: 'Neck pain, desk work and the Illawarra commute',
      html: `
<p>Neck pain has a strong occupational and postural flavour, and around Dapto that has a particular shape. Plenty of local residents commute &mdash; a short run into Wollongong, or a long one up the South Coast line or the highway to Sydney &mdash; and then sit at a desk at the other end. That is a lot of sustained flexion with the arms out in front, day after day, before you add a phone and a laptop in the evening.</p>
<p>The result is a familiar cluster: stiffness through the upper neck and mid-back, aching across the shoulders by mid-afternoon, sometimes headaches that build from the base of the skull. It is rarely serious and it responds well, but it needs both parts of the fix &mdash; treatment for the stiff, irritable segments, and a genuine change to the load that produced them.</p>
<p>Where headaches are part of the picture, the neck is often directly involved. We assess for that specifically and treat it on its own page.</p>`,
      list: [
        'Neck stiffness, spasm and acute wry neck',
        'Postural, desk-related and driving-related pain',
        '<a href="vertigo-headaches.html">Cervicogenic headaches</a> arising from the neck',
        'Nerve-related arm pain, pins and needles',
        'Workstation and driving-position advice that is actually specific',
      ],
    },

    { t: 'prose', id: 'red-flags', tone: 'alt', eyebrow: 'Safety',
      h2: 'When back or neck pain needs urgent medical attention',
      sub: 'Rare, but important. If any of the following apply, do not wait for a physiotherapy appointment.',
      html: `
<p>Seek urgent medical care &mdash; your GP, or a hospital emergency department &mdash; if you develop <b>loss of bladder or bowel control, numbness around the groin, inner thighs or buttocks, or progressive weakness in both legs</b>. That combination can indicate cauda equina syndrome, which is a medical emergency.</p>
<p>Also see a doctor promptly, rather than starting physiotherapy, if your back or neck pain follows significant trauma such as a fall or car accident, if it is accompanied by fever or unexplained weight loss, if you have a history of cancer, if you have osteoporosis and the pain began suddenly, or if the pain is severe, unrelenting and clearly worse at night. These features are uncommon, but they are the ones worth knowing.</p>
<p>If you are not sure, call the clinic. We would far rather spend five minutes on the phone directing you to the right place than have you sit on something that needed a doctor.</p>`,
    },

    { t: 'faq', h2: 'Neck and back pain FAQs',
      items: [
        { q: 'Do I need a scan before I see a physio for back pain?',
          a: 'Usually not. Most neck and back pain is diagnosed from your history and a physical examination. Scans of people with no pain at all routinely show disc bulges and degeneration, so imaging often adds worry without changing the treatment. We will tell you clearly if a scan would genuinely alter the plan.' },
        { q: 'Can physiotherapy help sciatica?',
          a: 'Yes — it is a first-line treatment for most sciatica. We combine positions and movements that reduce nerve irritation, hands-on treatment for the contributing joints and muscles, specific nerve mobility work once symptoms are less irritable, and progressive strengthening. Most sciatica improves over weeks to a few months. We also monitor for the small number of cases that need medical or surgical input.' },
        { q: 'How many sessions will I need?',
          a: 'It depends on how long you have had the pain and what is driving it. A straightforward acute episode often settles substantially within a handful of sessions; a long-standing or recurrent problem takes longer and involves more work between appointments. We give you an honest estimate after the first assessment and revise it openly if your progress differs.' },
        { q: 'Is it safe to exercise or keep working with back pain?',
          a: 'In most cases yes, and appropriate movement genuinely speeds recovery — prolonged rest makes back pain worse, not better. The skill is in choosing the right exercise at the right stage and modifying the aggravating parts of your day. We will give you specific guidance for your job and your activities rather than a blanket instruction.' },
        { q: 'Is my back pain caused by bad posture?',
          a: 'Posture is one contributor among several, and it is usually less about a single "correct" position than about how long you hold any position. Sustained loading, low overall strength, poor sleep and stress all feed in. We will address the workstation and the habits, but we will not pretend that sitting up straighter is the whole answer.' },
        { q: 'I hurt my back at work — can I claim it?',
          a: 'If the injury happened at work, treatment is generally covered by the NSW workers compensation scheme rather than paid by you. See our WorkCover page for how a claim works and what to bring to your first appointment.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'Spinal pain overlaps with several of the other things we treat and fund at the Dapto clinic.',
      items: ['vertigo-headaches', 'workcover', 'dry-needling'] },

    { t: 'final', h2: 'Move freely again.',
      p: 'Book an assessment and get a clear explanation of what is driving your pain — and a plan to settle it.',
      cta: 'Book an appointment' },
  ],
});

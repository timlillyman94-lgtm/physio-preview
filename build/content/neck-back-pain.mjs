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
    blurb: 'Hands-on treatment and targeted exercise for back and neck pain.',
  },
  title: 'Back &amp; Neck Pain Physio Dapto | Sciatica Treatment',
  metaDesc:
    'Physiotherapy for lower back pain, neck pain and sciatica in Dapto NSW. Hands-on treatment plus targeted exercise, without unnecessary scans. Book today.',
  eyebrow: 'Spinal physiotherapy',
  h1: 'Neck and back pain treatment in Dapto',
  lead:
    '<b>Lower back pain, neck pain or sciatica?</b> At our Dapto clinic, we examine your symptoms, discuss treatment and work out what you can do at home. We also check for signs that need medical attention.',
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

    { t: 'prose', id: 'overview', eyebrow: 'Understanding your symptoms',
      h2: 'How we assess neck pain, back pain and sciatica',
      sub: 'Your symptoms and examination guide the next step, including whether imaging or a medical referral is needed.',
      html: `
<p>Most neck and back pain has no serious underlying cause. We ask when it started, where it travels and which activities are difficult, then examine movement, strength and nerve function where relevant. We discuss what the findings mean and how to manage activity while symptoms settle.</p>
<p>Imaging is a good example. Scans of pain-free adults routinely show disc bulges, degeneration and facet joint changes, and the proportion showing them rises steadily with age. A scan finding does not always explain the pain. Imaging is usually unnecessary for uncomplicated low-back pain, but it can be important when we suspect a serious cause or the result would change management. We explain when a medical referral or scan is appropriate.</p>
<p>Severe pain does not, by itself, show how much tissue damage there is. Pain can also be influenced by sleep, stress and activity. That does not make it less real. An assessment helps identify warning signs and gives us a starting point for treatment.</p>`,
    },

    { t: 'prose', id: 'back', tone: 'alt', eyebrow: 'Lower back',
      h2: 'Lower back pain',
      sub: 'Sudden pain, a recurring ache or symptoms that have lasted for months each need a different discussion.',
      html: `
<p>Lower back pain arrives in a few recognisable patterns. There is the sudden episode (a lift, a twist, a sneeze) where the back locks up and every movement is guarded. There is the gradual ache that builds over weeks of sitting, driving or repetitive work. There is the recurrent back that settles and returns two or three times a year. And there is persistent pain that has been present for months and can affect sleep, work and confidence in movement.</p>
<p>Each responds to a different emphasis. An acute locked back needs pain relief, gentle restoration of movement, and reassurance that it is safe to move. A load-related ache needs the load addressed and the supporting capacity built. A recurrent back needs the pattern investigated, not just the current episode treated. Persistent pain needs graded exposure, education and time, with regular review of what is helping.</p>
<h3>What treatment looks like</h3>
<p>Typically a combination: hands-on manual therapy and, where it helps, <a href="dry-needling.html">dry needling</a> to reduce pain and stiffness enough to move properly; then progressive exercise to restore range, control and strength; then a plan for keeping it that way. We choose exercises you can fit into your day and adjust them as your symptoms and activities change.</p>`,
    },

    { t: 'prose', id: 'sciatica', eyebrow: 'Nerve pain',
      h2: 'Sciatica: what it is and how physiotherapy helps',
      sub: 'Sciatica is a symptom, not a diagnosis, irritation of the sciatic nerve or the nerve roots that form it.',
      html: `
<p>True sciatica is pain that travels from the lower back or buttock down the back of the leg, often below the knee, and it may be accompanied by pins and needles, numbness or weakness. It is usually caused by irritation or compression of a lumbar nerve root, most often by a disc bulge, sometimes by narrowing of the space the nerve passes through. Not all leg pain is sciatica, referred pain from the joints or muscles of the lower back can feel similar but behaves differently, and telling them apart changes the treatment.</p>
<p>The good news is that most sciatica settles. Nerve-related symptoms often improve over weeks to a few months, and physiotherapy is a first-line treatment. We use positions and movements that reduce nerve irritation, hands-on treatment for the joints and muscles contributing to it, specific nerve mobility work once irritability has dropped, and then a progressive program to restore strength and control. Just as importantly, we help you manage the day-to-day: how to sit, sleep and drive while it settles.</p>
<h3>When sciatica needs more than physiotherapy</h3>
<p>A small proportion of cases need medical or surgical input: progressive weakness in the leg, symptoms that are not improving over a reasonable period, or the red flag symptoms listed below. We monitor for those specifically, and we will refer you promptly rather than persisting with treatment that is not working.</p>`,
    },

    { t: 'split', id: 'neck', tone: 'fresh', img: 'assets/back-manual.jpg',
      alt: 'Physiotherapist delivering manual therapy to a patient&rsquo;s upper back',
      eyebrow: 'Neck &amp; upper back',
      h2: 'Neck pain, desk work and the Illawarra commute',
      html: `
<p>Work and travel can mean long periods in one position. Plenty of local residents commute: a short run into Wollongong, or a long one up the South Coast line or the highway to Sydney, and then sit at a desk at the other end. That is a lot of sustained flexion with the arms out in front, day after day, before you add a phone and a laptop in the evening.</p>
<p>If your neck or shoulders ache during that routine, tell us when it starts and what changes it. We look at movement, strength and nerve symptoms as well as your desk or driving setup. Changing position and taking breaks may form part of the plan; there is no single posture that suits everyone.</p>
<p>If you also have headaches, we assess whether your neck may be contributing. Read about our <a href="vertigo-headaches.html#headaches">assessment of neck-related headaches</a>.</p>`,
      list: [
        'Neck stiffness, spasm and acute wry neck',
        'Postural, desk-related and driving-related pain',
        '<a href="vertigo-headaches.html">Cervicogenic headaches</a> arising from the neck',
        'Nerve-related arm pain, pins and needles',
        'Advice for your workstation and driving setup',
      ],
    },

    { t: 'prose', id: 'red-flags', tone: 'alt', eyebrow: 'Safety',
      h2: 'When back or neck pain needs urgent medical attention',
      sub: 'Rare, but important. If any of the following apply, do not wait for a physiotherapy appointment.',
      html: `
<p>Go to an emergency department <b>immediately</b> if back pain comes with <b>new difficulty passing urine, loss of bladder or bowel control, numbness around the groin, inner thighs or buttocks, or rapidly worsening leg weakness</b>. These can be signs of cauda equina syndrome, a medical emergency. You do not need to have all of them. Call <b>000</b> if you cannot get to emergency care safely.</p>
<p>Also see a doctor promptly, rather than starting physiotherapy, if your back or neck pain follows significant trauma such as a fall or car accident, if it is accompanied by fever or unexplained weight loss, if you have a history of cancer, if you have osteoporosis and the pain began suddenly, or if the pain is severe, unrelenting and clearly worse at night. These features are uncommon, but they are the ones worth knowing.</p>
<p>Do not delay emergency care to call the clinic if you have the symptoms above. For other concerns about whether physiotherapy is appropriate, call before booking.</p>`,
    },

    { t: 'faq', h2: 'Neck and back pain FAQs',
      items: [
        { q: 'Do I need a scan before I see a physio for back pain?',
          a: 'Usually not for uncomplicated back pain. Your history and examination help determine whether a scan is needed. Some scan findings also occur in people without pain. We recommend medical review or imaging when the findings suggest a serious cause or the result would change treatment.' },
        { q: 'Can physiotherapy help sciatica?',
          a: 'Yes, it is a first-line treatment for most sciatica. We combine positions and movements that reduce nerve irritation, hands-on treatment for the contributing joints and muscles, specific nerve mobility work once symptoms are less irritable, and progressive strengthening. Most sciatica improves over weeks to a few months. We also monitor for the small number of cases that need medical or surgical input.' },
        { q: 'How many sessions will I need?',
          a: 'It depends on how long you have had the pain and what is driving it. At your first appointment, we discuss how often to attend and what to do between visits. We review the plan as symptoms change; persistent or recurrent pain may need a longer period of support.' },
        { q: 'Is it safe to exercise or keep working with back pain?',
          a: 'In most cases, staying active is part of managing back pain. We discuss which movements and work duties you can continue and which need adjusting. Follow the urgent-care advice above if you develop new bladder or bowel problems, groin numbness or worsening leg weakness.' },
        { q: 'Is my back pain caused by bad posture?',
          a: 'Posture is one contributor among several, and it is usually less about a single "correct" position than about how long you hold any position. Sustained loading, low overall strength, poor sleep and stress all feed in. We discuss comfortable positions, movement breaks and the other factors affecting your symptoms.' },
        { q: 'I hurt my back at work, can I claim it?',
          a: 'You may be eligible for NSW workers compensation if the injury is work-related. Payment depends on your claim and treatment requirements. Our <a href="workcover.html">WorkCover page</a> explains the process and what to bring.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'Spinal pain overlaps with several of the other things we treat and fund at the Dapto clinic.',
      items: ['vertigo-headaches', 'workcover', 'dry-needling'] },

    { t: 'final', h2: 'Talk to us about your back or neck pain.',
      p: 'Book an appointment to discuss your symptoms, treatment options and the activities you want to get back to.',
      cta: 'Book an appointment' },
  ],
});

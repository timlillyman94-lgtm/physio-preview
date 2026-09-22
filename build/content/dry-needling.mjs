import { register } from '../lib.mjs';

export default register({
  slug: 'dry-needling',
  group: 'services',
  groupLabel: 'Service',
  navActive: 'services',
  crumb: 'Dry needling',
  crumbParent: 'services',
  order: 2,
  card: {
    name: 'Dry needling (GEMt)',
    blurb: 'Dry needling for selected muscle-related symptoms, used alongside physiotherapy and exercise.',
  },
  title: 'Dry Needling Dapto | Trigger Point Dry Needling Physio',
  metaDesc:
    'Dry needling in Dapto NSW with Chris Vitucci. Read about treatment, the acupuncture comparison, possible side effects and whether needling is suitable for you.',
  eyebrow: 'Dry needling (GEMt)',
  h1: 'Dry needling in Dapto',
  lead:
    'Dry needling uses fine, sterile needles inserted into selected muscles. At our Dapto clinic, it forms <b>part of a physiotherapy appointment</b>. We explain why it may be suitable, the risks and the alternatives before you decide.',
  schema: {
    name: 'Dry needling',
    serviceType: 'Dry needling',
    alternateName: ['Trigger point dry needling', 'Myofascial dry needling', 'GEMt dry needling'],
    description:
      'Trigger point dry needling performed by qualified physiotherapists in Dapto NSW, used alongside manual therapy and exercise to treat muscular tightness, spinal pain, headaches and sports injuries.',
    offerCatalog: ['Trigger point dry needling', 'Myofascial release', 'Manual therapy', 'Exercise prescription'],
  },

  blocks: [
    { t: 'hero', img: 'assets/dry-needling-close.jpg', alt: 'Physiotherapist performing dry needling on a patient&rsquo;s upper back',
      trust: ['Qualified physiotherapists', 'Single-use sterile needles', 'Always part of a full plan'] },
    { t: 'crumbs' },
    { t: 'toc', items: [
      ['overview', 'What it is'], ['vs-acupuncture', 'Vs acupuncture'], ['helps', 'What it helps'],
      ['session', 'What a session is like'], ['safety', 'Safety &amp; suitability'], ['faq', 'FAQs'],
    ] },

    { t: 'prose', id: 'overview', eyebrow: 'About dry needling',
      h2: 'What is dry needling?',
      sub: 'Fine, single-use needles are placed into selected muscles. No medicine is injected.',
      html: `
<p>A tender spot in a tight band of muscle is often called a trigger point. Pressing it may reproduce pain locally or elsewhere. For example, pressure on an upper-neck muscle may bring on pain around the head. Tenderness alone does not tell us the whole cause of a problem, so we also examine movement and other possible sources of symptoms.</p>
<p>The needle is inserted into a muscle selected during the assessment. It can produce a brief twitch or a deep ache. The way dry needling affects pain is still being studied; a twitch does not prove that a muscle has been &ldquo;released&rdquo;. Some people notice short-term symptom relief, while others notice little change.</p>
<p>We check how you respond and use that information to guide the rest of the appointment. Exercise, changes to training or adjustments to your work setup may also be relevant. If needling makes no useful difference, we reassess rather than repeating it automatically.</p>
<h3>Who is doing the needling?</h3>
<p>Dry needling is a special interest of our principal physiotherapist, <a href="team.html">Chris Vitucci</a>, who has completed <b>three advanced GEMt courses</b> and <b>assists in teaching the technique to other health practitioners</b>. Before treatment, Chris explains which area he proposes to needle and talks through the relevant precautions with you. You can ask questions or choose another treatment.</p>`,
    },

    { t: 'prose', id: 'vs-acupuncture', tone: 'alt', eyebrow: 'Common question',
      h2: 'Is dry needling the same as acupuncture?',
      sub: 'Both use fine needles. The treatment approach and reasons for choosing the points can differ.',
      html: `
<p>Traditional Chinese acupuncture uses a framework of meridians and points. Western medical acupuncture uses a medical assessment and has techniques that overlap with dry needling. In physiotherapy, dry needling usually targets muscles selected during a musculoskeletal examination.</p>
<p>The distinction is therefore more useful than simply &ldquo;Eastern versus Western&rdquo;. Ask what the practitioner intends to treat and why. For calf symptoms, for example, a physiotherapist may consider needling after examining the calf muscles, ankle movement and the activities that bring on pain.</p>
<p>At this clinic, needling sits within a physiotherapy plan. We discuss the treatment options and how each fits your symptoms and activities. You can continue with physiotherapy without having needles.</p>`,
    },

    { t: 'cols', id: 'helps',
      left: { eyebrow: 'What it helps', h2: 'Problems dry needling can help with', items: [
        'Muscle tightness, spasm and stubborn trigger points',
        '<a href="neck-back-pain.html">Neck and lower back pain</a> with a strong muscular component',
        'Tension-type and neck-related (cervicogenic) <a href="vertigo-headaches.html">headaches</a>',
        '<a href="sports-injury.html">Sports and overuse injuries</a>: calves, hamstrings, glutes, shoulders',
        'Load-related tendon problems where surrounding muscle is overactive',
        'Restricted movement that has not responded to stretching alone',
      ] },
      right: { eyebrow: 'How we use it', h2: 'The way we work', items: [
        'An examination and explanation before any needling',
        'Combined with manual therapy in the same session',
        'Performed by physiotherapists trained through the GEMt program',
        '<a href="team.html">Chris</a> has completed <b>three advanced GEMt courses</b>',
        'Exercises selected for your symptoms and activities',
        'A clear explanation of what we are doing and why, before we start',
        'Review of your response before repeating treatment',
      ] },
    },

    { t: 'split', id: 'session', tone: 'fresh', img: 'assets/dry-needling.jpg',
      alt: 'Physiotherapist placing a dry needling needle, wearing gloves',
      eyebrow: 'What to expect',
      h2: 'What a dry needling session is like',
      html: `
<p>We examine the area and feel the muscles first, and tell you which muscles we intend to treat. The area is cleaned, and a needle thinner than the ones used for injections is inserted through the skin into the muscle. Most people describe the skin entry as a small prick or nothing at all. The sensation that follows (a deep, dull ache, sometimes a brief involuntary twitch) is the part people remember, and it usually lasts a few seconds.</p>
<p>Needles may be left in place briefly or removed straight away, depending on the muscle and the response we are after. A typical treatment covers a small number of targeted muscles rather than a large area, and forms part of a standard appointment rather than replacing it.</p>
<h3>How will I feel afterwards?</h3>
<p>Responses vary. You may notice a change in symptoms, temporary soreness or bruising, or little difference. We explain what to expect for the area treated and discuss activity afterwards. Report symptoms that are severe, worsening or different from the expected soreness.</p>`,
      list: [
        'Included within a standard physiotherapy appointment',
        'Sterile, single-use needles, disposed of immediately',
        'You can decline needling or ask us to stop',
      ],
    },

    { t: 'prose', id: 'safety', tone: 'alt', eyebrow: 'Safety',
      h2: 'Is dry needling safe, and is it right for everyone?',
      sub: 'We discuss the risks, alternatives and your medical history before asking for your consent.',
      html: `
<p>Temporary soreness, bruising and light-headedness can occur. Rare serious complications include <b>pneumothorax, or a collapsed lung</b>, when needling near the chest, including parts of the neck, shoulder and upper back. Training and precautions reduce risk but do not remove it. We explain the risks for the proposed area and alternatives before you decide whether to proceed.</p>
<p><b>Seek urgent medical care for new chest pain or shortness of breath after needling near the chest or upper back. Call 000 for severe symptoms.</b> Do not assume these symptoms are normal soreness. We provide advice on warning signs and what to do after treatment.</p>
<p>That said, we will talk through your history before we needle. Tell us if you are pregnant, taking blood-thinning medication, have a bleeding disorder, a compromised immune system, a needle phobia, a pacemaker or other implant, lymphoedema in the limb, or an active local skin infection. These details affect whether needling is appropriate and which precautions are needed. If you would rather not have needles at all, say so: we can discuss manual therapy, exercise and other options.</p>
<h3>How many sessions will I need?</h3>
<p>There is no fixed course of dry needling that everyone needs. We review your response and discuss whether to continue. If it is not helping, we reassess the symptoms and treatment options.</p>`,
    },

    { t: 'faq', h2: 'Dry needling FAQs',
      items: [
        { q: 'Does dry needling hurt?',
          a: 'Most people feel only a small prick as the needle passes through the skin. What you notice more is a deep, dull ache or a brief involuntary twitch when the needle stimulates the muscle, which typically lasts a few seconds. It is generally well tolerated, and we adjust depth, dose and number of points to your comfort. Tell us at any point and we will change what we are doing.' },
        { q: 'Is dry needling the same as acupuncture?',
          a: 'They share the use of fine needles, but the approach can differ. Traditional Chinese acupuncture uses meridians and points; Western medical acupuncture overlaps with dry needling. Dry needling in physiotherapy usually targets muscles selected during a musculoskeletal assessment.' },
        { q: 'How will I feel after a dry needling session?',
          a: 'You may notice symptom relief, temporary soreness or bruising, or little change. We discuss activity and aftercare with you. New chest pain or shortness of breath after needling near the chest or upper back needs urgent medical care; call 000 for severe symptoms.' },
        { q: 'Who should not have dry needling?',
          a: 'Tell us if you are pregnant, on blood-thinning medication, have a bleeding disorder or compromised immune system, a pacemaker or implant, lymphoedema in the limb, or a local skin infection. We use that information to decide whether needling is appropriate and which precautions are needed. A needle phobia is a perfectly good reason to choose a different treatment.' },
        { q: 'How much does dry needling cost in Dapto?',
          a: 'There is no separate dry-needling charge when it is used during a physiotherapy consultation. See our <a href="fees-and-rebates.html#fees">consultation fees</a>. Private health rebates depend on your cover. For WorkCover or NDIS, we check whether the proposed treatment meets the funding requirements before proceeding.' },
        { q: 'Do I need a referral for dry needling?',
          a: 'No. You can book directly as a private patient. Bring the relevant paperwork if you are claiming through a GP care plan, a WorkCover claim or an NDIS plan.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'Read about physiotherapy for spinal symptoms, sporting injuries and headaches.',
      items: ['neck-back-pain', 'sports-injury', 'vertigo-headaches'] },

    { t: 'final', h2: 'Considering dry needling?',
      p: 'Book a physiotherapy appointment to discuss whether needling is suitable for your symptoms.',
      cta: 'Book an appointment' },
  ],
});

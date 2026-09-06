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
    blurb: 'Precise needling of trigger points to release muscular tension and restore movement.',
  },
  title: 'Dry Needling Dapto | Trigger Point Dry Needling Physio',
  metaDesc:
    'Dry needling in Dapto NSW by qualified physiotherapists. Trigger point release for muscle tightness, neck and back pain, headaches and sports injuries. Book today.',
  eyebrow: 'Dry needling (GEMt)',
  h1: 'Dry needling in Dapto',
  lead:
    'Fine, sterile needles placed precisely into tight, painful muscle to release tension and restore movement. We use dry needling <b>as part of a treatment plan</b>, alongside hands-on therapy and exercise &mdash; not as a standalone fix.',
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

    { t: 'prose', id: 'overview', eyebrow: 'The short version',
      h2: 'What is dry needling?',
      sub: 'A thin filament needle, inserted into a tight band of muscle, to switch off a trigger point that is causing pain or restricting how you move.',
      html: `
<p>Muscles under sustained load develop taut bands with hypersensitive spots inside them, known as trigger points. Press one and it hurts locally, often referring pain somewhere else entirely &mdash; which is why a trigger point in the upper trapezius can feel like a headache, and one in the glutes can feel like sciatica. Trigger points also shorten the muscle, which quietly limits range of motion and shifts load onto tissues that were not built to carry it.</p>
<p>Dry needling treats those points directly. A fine, sterile, single-use needle is placed into the taut band. There is nothing injected &mdash; hence &ldquo;dry&rdquo;. The needle often produces a brief local twitch response, after which the band typically releases, blood flow to the area increases and the muscle&rsquo;s resting tension drops. Most people notice more movement and less local tenderness immediately.</p>
<p>The important part is what happens next. A released muscle that goes straight back to the same load will tighten again. So we treat the trigger point, then address the reason it formed &mdash; a stiff joint above it, a weak muscle below it, a workstation, a training error, a running pattern. That is why we never sell dry needling on its own.</p>
<h3>Who is doing the needling?</h3>
<p>Dry needling is a special interest of our principal physiotherapist, <a href="team.html">Chris Vitucci</a>, who has completed <b>three advanced GEMt courses</b> and <b>assists in teaching the technique to other health practitioners</b>. That matters more than it might sound: needling well is a matter of knowing precisely what sits under the needle and how a given muscle refers, and the people who teach a technique tend to be the people who have had to explain every part of it out loud.</p>`,
    },

    { t: 'prose', id: 'vs-acupuncture', tone: 'alt', eyebrow: 'Common question',
      h2: 'Is dry needling the same as acupuncture?',
      sub: 'They use a similar needle. Everything else about them is different.',
      html: `
<p>Acupuncture comes from traditional Chinese medicine and works to a map of meridians and points, with the aim of influencing the flow of energy through the body. Dry needling comes from Western musculoskeletal medicine and works to a map of muscles, trigger points and referral patterns, with the aim of releasing a specific piece of tissue that is causing a specific problem.</p>
<p>In practice that means the reasoning is different, the point selection is different and the treatment goal is different. An acupuncturist may needle points distant from where it hurts, according to their framework. A physiotherapist needling your calf is doing so because they have palpated a taut band in your soleus and believe it is limiting your ankle range.</p>
<p>The other difference is context. When a physiotherapist offers dry needling, it sits inside an assessment, a diagnosis and a rehabilitation plan. The needling is one tool in that plan &mdash; usually a tool for buying a window of reduced pain and improved range, so that the loading and strengthening work that produces the lasting change can actually be done.</p>`,
    },

    { t: 'cols', id: 'helps',
      left: { eyebrow: 'What it helps', h2: 'Problems dry needling can help with', items: [
        'Muscle tightness, spasm and stubborn trigger points',
        '<a href="neck-back-pain.html">Neck and lower back pain</a> with a strong muscular component',
        'Tension-type and neck-related (cervicogenic) <a href="vertigo-headaches.html">headaches</a>',
        '<a href="sports-injury.html">Sports and overuse injuries</a> &mdash; calves, hamstrings, glutes, shoulders',
        'Load-related tendon problems where surrounding muscle is overactive',
        'Restricted movement that has not responded to stretching alone',
      ] },
      right: { eyebrow: 'How we use it', h2: 'The way we work', items: [
        'Assessment first &mdash; we needle a diagnosis, not a sore spot',
        'Combined with manual therapy in the same session',
        'Performed by physiotherapists trained through the GEMt program',
        '<a href="team.html">Chris</a> has completed <b>three advanced GEMt courses</b>',
        'Always paired with exercise so the change holds',
        'A clear explanation of what we are doing and why, before we start',
        'Honest review &mdash; if it is not helping, we change the plan',
      ] },
    },

    { t: 'split', id: 'session', tone: 'fresh', img: 'assets/dry-needling.jpg',
      alt: 'Physiotherapist placing a dry needling needle, wearing gloves',
      eyebrow: 'What to expect',
      h2: 'What a dry needling session is actually like',
      html: `
<p>We assess and palpate first, and tell you which muscles we intend to treat. The area is cleaned, and a needle thinner than the ones used for injections is inserted through the skin into the muscle. Most people describe the skin entry as a small prick or nothing at all. The sensation that follows &mdash; a deep, dull ache, sometimes a brief involuntary twitch &mdash; is the part people remember, and it usually lasts a few seconds.</p>
<p>Needles may be left in place briefly or removed straight away, depending on the muscle and the response we are after. A typical treatment covers a small number of targeted muscles rather than a large area, and forms part of a standard appointment rather than replacing it.</p>
<h3>How will I feel afterwards?</h3>
<p>Most people feel looser and move better immediately. It is also common to feel a mild post-treatment ache in the treated muscle for up to a day or so, similar to the feeling after a decent gym session, and occasionally some minor bruising. We will tell you what to expect for your particular muscles, and we generally suggest staying hydrated, moving normally and avoiding a heavy training session that same day.</p>`,
      list: [
        'Included within a standard physiotherapy appointment',
        'Sterile, single-use needles, disposed of immediately',
        'You can decline it at any point &mdash; there is always another way in',
      ],
    },

    { t: 'prose', id: 'safety', tone: 'alt', eyebrow: 'Safety',
      h2: 'Is dry needling safe, and is it right for everyone?',
      sub: 'It has a strong safety record in trained hands. It is still not the right choice for every person or every problem.',
      html: `
<p>Performed by a trained physiotherapist using sterile single-use needles, dry needling is a low-risk treatment. The common side effects are minor and short-lived: post-treatment muscle soreness, small bruises, occasionally a brief light-headed feeling. Serious adverse events are rare and are largely avoided by sound anatomical knowledge of what lies beneath each needling site &mdash; which is precisely what the training covers.</p>
<p>That said, we will talk through your history before we needle. Tell us if you are pregnant, taking blood-thinning medication, have a bleeding disorder, a compromised immune system, a needle phobia, a pacemaker or other implant, lymphoedema in the limb, or an active local skin infection. Some of those rule needling out; several simply change where and how we needle. If you would rather not have needles at all, say so &mdash; manual therapy, soft-tissue work and loading strategies can achieve a great deal on their own.</p>
<h3>How many sessions will I need?</h3>
<p>Dry needling is a component of a plan, so the honest answer is that it depends on the plan. Many people feel a meaningful difference within the first two or three treatments. If several sessions produce no change, that is useful information: it usually means the muscle was not the main driver, and we look elsewhere rather than repeating a treatment that is not working.</p>`,
    },

    { t: 'faq', h2: 'Dry needling FAQs',
      items: [
        { q: 'Does dry needling hurt?',
          a: 'Most people feel only a small prick as the needle passes through the skin. What you notice more is a deep, dull ache or a brief involuntary twitch as the trigger point releases, which typically lasts a few seconds. It is generally well tolerated, and we adjust depth, dose and number of points to your comfort — tell us at any point and we will change what we are doing.' },
        { q: 'Is dry needling the same as acupuncture?',
          a: 'No. They use a similar needle but come from different traditions. Acupuncture is based on traditional Chinese medicine and treats points along meridians. Dry needling is based on Western musculoskeletal anatomy and targets specific trigger points in muscles that assessment has identified as contributing to your problem.' },
        { q: 'How will I feel after a dry needling session?',
          a: 'Usually looser and freer to move straight away. A mild ache in the treated muscle for up to a day is common and normal, and minor bruising happens occasionally. We suggest keeping up normal movement, staying hydrated, and leaving a heavy training session until the next day.' },
        { q: 'Who should not have dry needling?',
          a: 'Tell us if you are pregnant, on blood-thinning medication, have a bleeding disorder or compromised immune system, a pacemaker or implant, lymphoedema in the limb, or a local skin infection. Some of these mean we avoid needling; several just change where and how we needle. A needle phobia is a perfectly good reason to choose a different treatment.' },
        { q: 'How much does dry needling cost in Dapto?',
          a: 'Dry needling is performed within a standard physiotherapy appointment rather than charged as a separate treatment, so the cost is the cost of the consultation. It can be claimed under the physiotherapy item on private health extras cover, and it is available to WorkCover and NDIS patients as part of an approved plan. See our fees and rebates page for detail.' },
        { q: 'Do I need a referral for dry needling?',
          a: 'No. You can book directly as a private patient. Bring the relevant paperwork if you are claiming through a GP care plan, a WorkCover claim or an NDIS plan.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'Dry needling is most often used alongside these. Every one of them is treated at our Dapto clinic.',
      items: ['neck-back-pain', 'sports-injury', 'vertigo-headaches'] },

    { t: 'final', h2: 'Release the tension.',
      p: 'Book an assessment and we will tell you honestly whether dry needling is the right tool for your problem.',
      cta: 'Book an appointment' },
  ],
});

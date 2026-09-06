import { register } from '../lib.mjs';

export default register({
  slug: 'vertigo-headaches',
  group: 'conditions',
  groupLabel: 'Condition',
  navActive: 'services',
  crumb: 'Headaches, vertigo &amp; dizziness',
  crumbParent: 'services',
  order: 2,
  card: {
    name: 'Headaches, vertigo &amp; dizziness',
    blurb: 'Vestibular physiotherapy for BPPV and balance, plus treatment for neck-related headaches.',
  },
  title: 'Vestibular Physiotherapy Dapto | Vertigo &amp; Headache Treatment',
  metaDesc:
    'Vestibular physiotherapy in Dapto NSW. Treatment for BPPV and positional vertigo, dizziness, balance problems and cervicogenic headaches. Book today.',
  eyebrow: 'Vestibular &amp; headache physiotherapy',
  h1: 'Vertigo, dizziness and headache treatment in Dapto',
  lead:
    'Much dizziness comes from the inner ear and many headaches come from the neck &mdash; and <b>both respond well to physiotherapy</b>. We assess carefully to find the cause, then treat it directly rather than managing symptoms indefinitely.',
  schema: {
    name: 'Vestibular physiotherapy and headache treatment',
    serviceType: 'Vestibular physiotherapy',
    alternateName: ['Vertigo treatment', 'BPPV treatment', 'Dizziness physiotherapy', 'Cervicogenic headache treatment'],
    description:
      'Vestibular physiotherapy for BPPV, positional vertigo, dizziness and balance problems, and physiotherapy for cervicogenic and tension-type headaches, in Dapto NSW.',
    offerCatalog: [
      'Vestibular assessment', 'Epley and canalith repositioning manoeuvres',
      'Vestibular rehabilitation exercises', 'Balance and falls prevention',
      'Cervical manual therapy for headache', 'Concussion-related dizziness rehabilitation',
    ],
  },

  blocks: [
    { t: 'hero', img: 'assets/gym.jpg', alt: 'Physiotherapist assessing a patient in the clinic',
      trust: ['Vestibular assessment', 'BPPV often resolves in 1&ndash;2 sessions', 'Balance &amp; falls prevention'] },
    { t: 'crumbs' },
    { t: 'toc', items: [
      ['overview', 'Start here'], ['bppv', 'BPPV &amp; positional vertigo'], ['vestibular', 'Vestibular physiotherapy'],
      ['headaches', 'Neck-related headaches'], ['urgent', 'When to seek urgent care'], ['faq', 'FAQs'],
    ] },

    { t: 'prose', id: 'overview', eyebrow: 'The short version',
      h2: 'Why dizziness and headaches are physiotherapy problems',
      sub: 'Because a large share of both come from structures a physiotherapist assesses and treats: the inner ear balance organs, and the upper cervical spine.',
      html: `
<p>&ldquo;Dizziness&rdquo; is a single word covering several very different experiences. Spinning &mdash; the room moving around you &mdash; is vertigo, and points strongly toward the inner ear or the balance pathways. Light-headedness, the feeling that you might faint, more often relates to blood pressure or medication. Unsteadiness on your feet is different again, and frequently has more to do with strength, vision and sensation than with the ears. The first job of a good assessment is to work out which one you actually have, because the treatments do not overlap much.</p>
<p>Headaches divide in a similar way. Some originate in the neck &mdash; from the upper cervical joints and their muscular attachments &mdash; and these are the ones physiotherapy treats most directly. Some are primary headache disorders such as migraine, where the neck is often a contributor and an aggravator but not the cause. Telling them apart, and being honest about which is which, is what determines whether treatment helps.</p>
<p>What both have in common is that a lot of people put up with them for far longer than they need to. Positional vertigo in particular is often accepted as something to live with, when it is one of the most reliably fixable conditions we see.</p>`,
    },

    { t: 'prose', id: 'bppv', tone: 'alt', eyebrow: 'The common one',
      h2: 'BPPV and positional vertigo',
      sub: 'Benign paroxysmal positional vertigo is the single most common cause of vertigo &mdash; and it is very treatable.',
      html: `
<p>Inside each inner ear are small canals filled with fluid, which detect head movement. Also in the inner ear are tiny calcium carbonate crystals, which normally sit in a separate chamber where they help detect gravity and linear movement. In BPPV, some of those crystals become dislodged and end up in the canals, where they do not belong. Every time you move your head, they move the fluid, and your brain receives a strong signal of spinning that your eyes and body do not corroborate. The result is intense, brief vertigo triggered by particular head positions.</p>
<p>The pattern is distinctive: seconds to a minute of spinning brought on by rolling over in bed, lying down, sitting up, tipping your head back to a high shelf, or bending forward. Between episodes you often feel normal, or vaguely unsteady and cautious.</p>
<h3>How BPPV is treated</h3>
<p>We confirm it with positional testing &mdash; most commonly the Dix-Hallpike test &mdash; which reproduces the vertigo briefly and, crucially, lets us watch the eye movement that identifies which ear and which canal are involved. We then use a canalith repositioning manoeuvre, such as the Epley, to guide the crystals out of the canal and back where they belong. It takes a few minutes, involves a sequence of head and body positions, and a large proportion of people are substantially better after one or two sessions.</p>
<p>Because BPPV can recur, we also teach you what to look for and what to do if it comes back.</p>`,
    },

    { t: 'prose', id: 'vestibular', eyebrow: 'Beyond BPPV',
      h2: 'Vestibular physiotherapy and balance rehabilitation',
      sub: 'When the balance system has been damaged or has stopped compensating properly, it can be retrained.',
      html: `
<p>Not all dizziness is crystals in a canal. Vestibular neuritis and labyrinthitis can leave one side of the balance system underperforming after the acute illness has passed. Ageing reduces the quality of the signals from the inner ear, the eyes and the feet. Head injuries can disrupt the way those signals are integrated. In each case the brain can usually learn to compensate &mdash; but that compensation is a trainable process, and it happens faster and more completely with structured rehabilitation than by waiting.</p>
<p>Vestibular physiotherapy is that structured rehabilitation. It involves a careful assessment of eye movement, gaze stability, positional testing, balance in progressively harder conditions and walking. From that we build a specific exercise program: gaze stabilisation work, habituation exercises that deliberately and gradually expose you to the movements that provoke symptoms, and balance retraining. It is not comfortable in the early stages, and it works.</p>
<h3>Balance, falls and confidence</h3>
<p>Dizziness and unsteadiness matter most in what they stop you doing. People reduce their walking, stop driving at night, avoid uneven ground and stop going out alone &mdash; and that avoidance itself accelerates the decline in balance and strength, which raises the risk of a fall. We treat the balance problem and the deconditioning together, with strength work alongside the vestibular exercises, because in older adults the two are inseparable.</p>`,
    },

    { t: 'split', id: 'headaches', tone: 'fresh', flip: true, img: 'assets/equipment.jpg',
      alt: 'Clinic treatment equipment',
      eyebrow: 'Headaches',
      h2: 'Headaches that come from the neck',
      html: `
<p>Cervicogenic headache is pain referred to the head from the joints, muscles and nerves of the upper neck. It has a recognisable presentation: usually one-sided and consistently the same side, often starting at the base of the skull and spreading forward over the head or behind the eye, provoked by sustained neck postures or particular neck movements, and accompanied by neck stiffness and restricted rotation.</p>
<p>It responds well to treatment aimed at the neck itself &mdash; manual therapy to the upper cervical segments, <a href="dry-needling.html">dry needling</a> to the muscles that refer into the head, deep neck flexor and scapular strengthening, and a genuine change to the postural loads that keep provoking it. For many people that combination reduces both the frequency and the intensity substantially.</p>
<p>Tension-type headache also frequently has a strong cervical and muscular component, and often improves with the same approach. Migraine is a different condition, and we are careful not to overclaim: migraine is best co-managed with your GP, but neck dysfunction is a common trigger and aggravator, and treating it can reduce how often attacks are set off.</p>`,
      list: [
        'Cervicogenic (neck-related) headache',
        'Tension-type headache',
        'Neck contribution to migraine, alongside your GP&rsquo;s management',
        'Jaw and <a href="services.html">TMJ-related</a> headache &mdash; ask us',
        'Post-concussion headache and dizziness',
      ],
    },

    { t: 'prose', id: 'urgent', tone: 'alt', eyebrow: 'Safety',
      h2: 'Dizziness and headaches that need urgent medical care',
      sub: 'Uncommon, but these ones should not wait for a physiotherapy appointment.',
      html: `
<p>Call <b>000</b> if sudden dizziness or a severe headache comes with any of: slurred speech, facial droop, weakness or numbness on one side, double vision, difficulty swallowing, severe unsteadiness or an inability to walk, or a sudden &ldquo;worst headache of my life&rdquo;. These can indicate a stroke or other emergency, and time matters.</p>
<p>See your GP promptly, rather than booking physiotherapy first, if dizziness comes with new hearing loss or ringing in one ear, if you have fainted, if you have had a significant head injury, if a headache is progressively worsening over days to weeks, or if headaches begin for the first time after the age of fifty. If you are unsure, call the clinic &mdash; we will help you work out where you should be going.</p>`,
    },

    { t: 'faq', h2: 'Vertigo, dizziness and headache FAQs',
      items: [
        { q: 'Can physiotherapy really fix vertigo?',
          a: 'For BPPV — the most common cause of vertigo — yes, and often quickly. Canalith repositioning manoeuvres such as the Epley resolve symptoms for a large proportion of people within one or two sessions. Other causes of dizziness respond to vestibular rehabilitation, which is a structured retraining program rather than a single treatment.' },
        { q: 'What is BPPV?',
          a: 'Benign paroxysmal positional vertigo. Tiny calcium crystals that normally sit elsewhere in the inner ear become dislodged into one of the balance canals, so head movements produce a strong false signal of spinning. It causes brief, intense vertigo triggered by rolling over in bed, lying down, sitting up or looking up. It is common, it is not dangerous, and it is very treatable.' },
        { q: 'What is vestibular physiotherapy?',
          a: 'A specialised area of physiotherapy focused on the balance system. It involves assessment of eye movement, gaze stability, positional testing and balance, followed by a tailored program of gaze stabilisation, habituation and balance retraining that helps the brain compensate for a balance system that is not working properly.' },
        { q: 'How many sessions will I need for vertigo?',
          a: 'Uncomplicated BPPV frequently resolves in one to two sessions, sometimes three if more than one canal is involved. Vestibular rehabilitation for other causes is a program rather than a procedure and typically runs over several weeks, with most of the work done at home between appointments.' },
        { q: 'Do you treat migraines?',
          a: 'We treat the neck dysfunction that frequently accompanies and aggravates migraine, which for many people reduces how often attacks are triggered. Migraine itself is a medical condition best managed with your GP. We are clear about that distinction rather than claiming to cure migraine.' },
        { q: 'Should I stop driving if I have vertigo?',
          a: 'If you are getting episodes of true spinning, particularly unpredictable ones, do not drive until it has been assessed and treated. Positional vertigo can often be resolved quickly, which is a good reason to book rather than to wait it out. Talk to your GP about your specific situation as well.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'Dizziness, balance and headache problems often sit alongside these.',
      items: ['neck-back-pain', 'ndis', 'dry-needling'] },

    { t: 'final', h2: 'Feel steady and clear again.',
      p: 'Book an assessment at our Dapto clinic and let us find out what is actually causing it.',
      cta: 'Book an appointment' },
  ],
});

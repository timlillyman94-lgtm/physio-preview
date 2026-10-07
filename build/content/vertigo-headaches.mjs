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
    blurb: 'Vestibular physiotherapy for BPPV and balance disorders, plus treatment for neck-related headaches.',
  },
  title: 'Vestibular Physiotherapy Dapto | Vertigo &amp; Headache Treatment',
  metaDesc:
    'Vestibular physiotherapy in Dapto NSW. Treatment for BPPV and positional vertigo, dizziness, balance problems and cervicogenic headaches. Book today.',
  eyebrow: 'Vestibular &amp; headache physiotherapy',
  h1: 'Vertigo, dizziness and headache treatment in Dapto',
  lead:
    '<b>Vestibular physiotherapy assesses dizziness and balance problems.</b> At our Dapto clinic, we assess BPPV and other vestibular conditions, and headaches that may involve the neck. We explain whether physiotherapy or medical assessment is the next step.',
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
    { t: 'hero', img: 'assets/neck-supine.jpg', alt: 'Physiotherapist assessing a patient lying on a treatment table',
      trust: ['Vestibular assessment', 'Uncomplicated BPPV often resolves in 1&ndash;2 sessions', 'A special interest of <a href="team.html" style="color:inherit;text-decoration:underline">our principal physio</a>'] },
    { t: 'crumbs' },
    { t: 'toc', items: [
      ['overview', 'Start here'], ['bppv', 'BPPV &amp; positional vertigo'], ['vestibular', 'Vestibular physiotherapy'],
      ['headaches', 'Neck-related headaches'], ['urgent', 'When to seek urgent care'], ['faq', 'FAQs'],
    ] },

    { t: 'prose', id: 'overview', eyebrow: 'Dizziness and headache assessment',
      h2: 'What is vestibular physiotherapy?',
      sub: 'An assessment of the balance system, including eye movements, head movement and steadiness when standing or walking.',
      html: `
<p>&ldquo;Dizziness&rdquo; is a single word covering several very different experiences. Spinning, the room moving around you, is vertigo, and points strongly toward the inner ear or the balance pathways. Light-headedness, the feeling that you might faint, more often relates to blood pressure or medication. Unsteadiness on your feet is different again, and frequently has more to do with strength, vision and sensation than with the ears. Tell us what the dizziness feels like, what brings it on and how long it lasts. Those details guide the examination and whether you need medical review.</p>
<p>Headaches divide in a similar way. Some originate in the neck, from the upper cervical joints and their muscular attachments, and these are the ones physiotherapy treats most directly. Some are primary headache disorders such as migraine, which can occur alongside neck pain. We assess the neck symptoms while recognising that migraine needs medical management.</p>
<p>Brief spinning when you roll over in bed is worth having assessed. BPPV is a common cause and can often be treated with a repositioning manoeuvre. Other patterns of dizziness need a different approach.</p>`,
    },

    { t: 'prose', id: 'bppv', tone: 'alt', eyebrow: 'The common one',
      h2: 'BPPV and positional vertigo',
      sub: 'Benign paroxysmal positional vertigo is the single most common cause of vertigo, and it is very treatable.',
      html: `
<p>Inside each inner ear are small canals filled with fluid, which detect head movement. Also in the inner ear are tiny calcium carbonate crystals, which normally sit in a separate chamber where they help detect gravity and linear movement. In BPPV, some of those crystals become dislodged and end up in the canals, where they do not belong. Certain changes in head position move the crystals and fluid, sending a signal of movement that does not match what your eyes and body detect. The result is intense, brief vertigo triggered by particular head positions.</p>
<p>The pattern is distinctive: seconds to a minute of spinning brought on by rolling over in bed, lying down, sitting up, tipping your head back to a high shelf, or bending forward. Between episodes you often feel normal, or vaguely unsteady and cautious.</p>
<h3>How BPPV is treated</h3>
<p>We use positional tests and watch the accompanying eye movements. The Dix-Hallpike test checks for the common posterior-canal form of BPPV; other tests, including a supine roll test, help assess other canals. We then use a canalith repositioning manoeuvre, such as the Epley, to guide the crystals out of the canal and back where they belong. It takes a few minutes, involves a sequence of head and body positions, and a large proportion of people are substantially better after one or two sessions.</p>
<p>Because BPPV can recur, we also teach you what to look for and what to do if it comes back.</p>`,
    },

    { t: 'prose', id: 'vestibular', eyebrow: 'Beyond BPPV',
      h2: 'Vestibular physiotherapy and balance rehabilitation',
      sub: 'Exercises for gaze stability, balance and movement are chosen for the vestibular problem found on assessment.',
      html: `
<p>Not all dizziness is crystals in a canal. Vestibular neuritis and labyrinthitis can leave one side of the balance system underperforming after the acute illness has passed. Ageing reduces the quality of the signals from the inner ear, the eyes and the feet. Head injuries can disrupt the way those signals are integrated. Vestibular rehabilitation supports compensation for some balance-system problems, particularly peripheral vestibular hypofunction. The programme depends on the diagnosis and any other medical needs.</p>
<p>Vestibular physiotherapy is that structured rehabilitation. It involves a careful assessment of eye movement, gaze stability, positional testing, balance in progressively harder conditions and walking. From that we build a specific exercise program: gaze stabilisation work, habituation exercises that deliberately and gradually expose you to the movements that provoke symptoms, and balance retraining. Some exercises briefly bring on symptoms. We explain the expected response, how much to do and when to stop or ask for advice.</p>
<h3>Balance, falls and confidence</h3>
<p>Dizziness and unsteadiness matter most in what they stop you doing. People reduce their walking, stop driving at night, avoid uneven ground and stop going out alone, and that avoidance itself accelerates the decline in balance and strength, which raises the risk of a fall. We treat the balance problem and the deconditioning together, with strength work alongside the vestibular exercises, where the assessment identifies both.</p>`,
    },

    { t: 'split', id: 'headaches', tone: 'fresh', flip: true, img: 'assets/neck-supine-2.jpg',
      alt: 'Physiotherapist treating a patient&rsquo;s neck at the head of the treatment table',
      eyebrow: 'Headaches',
      h2: 'Headaches that come from the neck',
      html: `
<p>Cervicogenic headache is pain referred to the head from the joints, muscles and nerves of the upper neck. It has a recognisable presentation: usually one-sided and consistently the same side, often starting at the base of the skull and spreading forward over the head or behind the eye, provoked by sustained neck postures or particular neck movements, and accompanied by neck stiffness and restricted rotation.</p>
<p>For headaches arising from the neck, treatment may include manual therapy, exercises for the neck and shoulder muscles, and changes to activities that provoke symptoms. <a href="dry-needling.html">Dry needling</a> may be discussed where appropriate. We track headache frequency and intensity to check the response.</p>
<p>Headaches can have more than one contributing factor, so we also ask about sleep, activity and your medical history. Migraine needs medical management, usually with your GP. We can assess accompanying neck symptoms, but treating the neck does not necessarily reduce migraine attacks.</p>`,
      list: [
        'Cervicogenic (neck-related) headache',
        'Tension-type headache',
        'Neck symptoms alongside migraine, with your GP managing the migraine',
        'Jaw and <a href="services.html">TMJ-related</a> headache: ask us',
        'Post-concussion headache and dizziness',
      ],
    },

    { t: 'prose', id: 'urgent', tone: 'alt', eyebrow: 'Safety',
      h2: 'Dizziness and headaches that need urgent medical care',
      sub: 'Uncommon, but these ones should not wait for a physiotherapy appointment.',
      html: `
<p>Call <b>000</b> for a sudden, severe &ldquo;worst headache of my life&rdquo;. Also call <b>000</b> if sudden dizziness or headache comes with slurred speech, facial droop, weakness or numbness on one side, double vision, difficulty swallowing, severe unsteadiness or an inability to walk. These can indicate a stroke or another emergency. Do not wait for a physiotherapy appointment.</p>
<p><b>Go to an emergency department immediately for sudden hearing loss</b>, including when it occurs with dizziness or ringing in an ear. Seek urgent medical assessment after a significant head injury. Arrange prompt medical review for fainting, new persistent ringing in one ear, a headache worsening over days to weeks, or headaches beginning for the first time after fifty. Do not delay emergency care to contact the clinic.</p>`,
    },

    { t: 'faq', h2: 'Vertigo, dizziness and headache FAQs',
      items: [
        { q: 'Can physiotherapy help vertigo?',
          a: 'For BPPV, repositioning manoeuvres such as the Epley are an established treatment. Uncomplicated BPPV often resolves in one or two sessions, though some people need further treatment or assessment. Other vestibular conditions may need an exercise programme. The cause of the dizziness determines the approach.' },
        { q: 'What is BPPV?',
          a: 'Benign paroxysmal positional vertigo. Tiny calcium crystals that normally sit elsewhere in the inner ear become dislodged into one of the balance canals, so head movements produce a strong false signal of spinning. It causes brief, intense vertigo triggered by rolling over in bed, lying down, sitting up or looking up. BPPV is common and treatable, but the spinning can affect balance and increase the risk of a fall. An assessment is needed to distinguish it from other causes of dizziness.' },
        { q: 'What is vestibular physiotherapy?',
          a: 'A specialised area of physiotherapy focused on the balance system. It involves assessment of eye movement, gaze stability, positional testing and balance, followed by a tailored program of gaze stabilisation, habituation and balance retraining that helps the brain compensate for a balance system that is not working properly.' },
        { q: 'How many sessions will I need for vertigo?',
          a: 'Uncomplicated BPPV often resolves in one or two sessions. Some cases need further treatment, and we recheck symptoms and positional tests before deciding what comes next. Vestibular rehabilitation for other causes can involve several weeks of exercises, including work at home between appointments.' },
        { q: 'Do you treat migraines?',
          a: 'We assess neck pain and movement problems that occur alongside migraine. Your GP manages the migraine itself. Neck treatment may be appropriate for the findings on examination, but it does not necessarily reduce migraine attacks.' },
        { q: 'Should I stop driving if I have vertigo?',
          a: 'If you are getting episodes of true spinning, particularly unpredictable ones, do not drive until it has been assessed and treated. Ask your GP when it is safe for you to resume driving.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'Dizziness, balance and headache problems often sit alongside these.',
      items: ['neck-back-pain', 'ndis', 'dry-needling'] },

    { t: 'final', h2: 'Dizziness or headaches? Start with an assessment.',
      p: 'Book at our Dapto clinic to discuss your symptoms and the next step. Follow the emergency advice above if you have sudden warning signs.',
      cta: 'Book an appointment' },
  ],
});

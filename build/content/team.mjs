import { register } from '../lib.mjs';

/* Bio source: Chris's answers to P0-03 (2026-09-06), plus phrasing he asked us to
   keep from his current Wix bio. See the tracker Review register (RV-01) for the
   AHPRA wording call: his "sought after / go-to physio" and "specialist" requests
   are replaced with verifiable specifics rather than self-declared superiority. */
export default register({
  slug: 'team',
  group: 'core',
  groupLabel: 'Clinic',
  crumb: 'Team',
  card: { name: 'Our team', blurb: 'Meet the physiotherapists treating you in Dapto.' },
  title: 'Meet Your Dapto Physio Team | Functional Physiotherapy',
  metaDesc:
    'Meet Chris Vitucci and the team at Functional Physiotherapy in Dapto NSW. Masters-qualified, over 8 years of clinical experience and one-on-one care.',
  eyebrow: 'Our team',
  h1: 'The people treating you',
  lead: '',

  people: [{
    id: 'chris-vitucci',
    name: 'Chris Vitucci',
    jobTitle: 'Director & Principal Physiotherapist',
    image: 'assets/chris-square.jpg',
    alumniOf: ['University of Wollongong', 'University of Technology Sydney'],
    knowsAbout: [
      'Dry needling', 'Chronic pain management', 'Running injuries',
      'Conservative ACL management', 'Vertigo and vestibular rehabilitation',
      'TMJ and jaw pain', 'Sports physiotherapy', 'Aged care physiotherapy',
    ],
    schemaBio:
      'Director and Principal Physiotherapist at Functional Physiotherapy, Dapto NSW. Bachelor of Exercise Science (University of Wollongong) and Master of Physiotherapy (University of Technology Sydney), with more than eight years of clinical experience across private practice, sporting teams, aged care and disability services. Founded Functional Physiotherapy in 2022. Has completed three advanced GEMt dry needling courses and assists in teaching the technique to other health practitioners.',
  }],

  blocks: [
    { t: 'phero' },
    { t: 'crumbs' },

    { t: 'split', id: 'chris-bio', alignTop: true, img: 'assets/chris-portrait.jpg', alt: 'Chris Vitucci, Director and Principal Physiotherapist',
      eyebrow: 'Director &amp; Principal Physiotherapist',
      h2: 'Chris Vitucci',
      html: `
<p>Chris holds a <b>Bachelor of Exercise Science</b> from the University of Wollongong and a <b>Master of Physiotherapy</b> from UTS, and has more than eight years of clinical experience behind him. He has worked with athletes and sporting teams, in aged care, and with people living with disability.</p>
<p>He founded Functional Physiotherapy in 2022, originally in his home town of <b>Griffith, NSW</b>. The practice now operates from Dapto, inside Dapto Medical Professionals on the Princes Highway.</p>
<p>Chris takes a performance-based approach to help people improve their health, function and capacity for day-to-day life or competitive sport.</p>
<p>He takes a conservative approach to injury management, looking to avoid or limit invasive treatment options where appropriate. His work includes spinal and joint-related problems, headaches, vertigo, TMJ dysfunction, strength and conditioning, and pre- and post-operative care.</p>
<p>His treatment techniques include advanced dry needling, joint mobilisation and exercise therapy. He has a special interest in dry needling and non-operative ACL rehabilitation.</p>
<p>Outside of work, you can find Chris hanging out with friends and family, playing soccer or having a hit of golf.</p>`,
      list: [
        'B. Exercise Science &amp; Master of Physiotherapy',
        'GEMT advanced dry needling trained',
        'Vestibular physiotherapist',
        'TMJ physiotherapy trained',
        'Trained in whiplash management',
        'APA member',
      ] },

    { t: 'cards', tone: 'alt', eyebrow: 'Special interests', h2: 'What Chris works on most',
      sub: 'Every physiotherapist develops areas they go deeper on. These are his.',
      items: [
        { h3: 'Dry needling', p: 'Chris has completed three advanced GEMt dry needling courses and <b>assists in teaching the technique to other health practitioners</b>.',
          href: 'dry-needling.html', link: 'Dry needling' },
        { h3: 'Conservative ACL management', p: 'Rehabilitating ACL injuries without reconstruction where that is the right call, and preparing the knee properly where it is not.',
          href: 'acl-injuries.html', link: 'ACL rehabilitation' },
        { h3: 'Running injuries', p: 'Diagnosing what the tissue was not ready for, and building runners back up without taking their running away entirely.',
          href: 'running-injuries.html', link: 'Running injuries' },
        { h3: 'Chronic conditions', p: 'Persistent and long-standing pain, where progress is measured in months and honesty about timeframes matters more than optimism.',
          href: 'services.html#additional-conditions', link: 'Chronic pain physiotherapy' },
        { h3: 'Vertigo &amp; dizziness', p: 'Positional vertigo, BPPV and balance problems, frequently resolved in one or two sessions once correctly identified.',
          href: 'vertigo-headaches.html', link: 'Vertigo &amp; headaches' },
        { h3: 'TMJ &amp; jaw pain', p: 'Jaw pain, clicking and restricted opening, and the neck and headache problems that so often travel with them.',
          href: 'services.html#additional-conditions', link: 'TMJ physiotherapy' },
      ] },

    { t: 'prose', id: 'careers', eyebrow: 'Careers', h2: 'Growing our team',
      html: `
<p>We&rsquo;re looking for physiotherapists to join Functional Physiotherapy in Dapto. If you&rsquo;re interested in working with us, visit our careers page to find out more.</p>
<p><a class="btn btn-line" href="careers.html">Explore career opportunities</a></p>` },

    { t: 'split', tone: 'fresh', flip: true, img: 'assets/calf-treatment.jpg', alt: 'Physiotherapist treating a patient&rsquo;s calf',
      eyebrow: 'Our approach',
      h2: 'One-on-one physiotherapy',
      html: `
<p>Your appointment is with your physiotherapist, start to finish. You are not passed to an assistant halfway through, and you are not put on a machine in the corner while other people are seen.</p>
<p>That matters clinically, not just as a courtesy. Assessment continues through the whole session, so treatment gets adjusted as we learn more. Exercises are taught and corrected rather than handed over on paper. And because the same person sees you each visit, we notice when something is not progressing the way it should, and say so.</p>`,
      list: [
        'Evidence-based, one-on-one care built around your goals',
        'Private, <a href="workcover.html">WorkCover</a> and <a href="ndis.html">NDIS</a> patients all welcome',
        'Inside <b><a href="contact.html">Dapto Medical Professionals</a></b>, with on-site parking',
        '<b>Home visits</b> available across the Illawarra',
      ] },

    { t: 'final', h2: 'Come and see us',
      p: 'Book an appointment online, or call the clinic and we will help you get started.',
      cta: 'Book an appointment' },
  ],
});

import { register } from '../lib.mjs';

/* Bio source: Chris's answers to P0-03 (2026-09-06), plus phrasing he asked us to
   keep from his current Wix bio. See the tracker Review register (RV-01) for the
   AHPRA wording call — his "sought after / go-to physio" and "specialist" requests
   are replaced with verifiable specifics rather than self-declared superiority. */
export default register({
  slug: 'team',
  group: 'core',
  groupLabel: 'Clinic',
  crumb: 'Team',
  card: { name: 'Our team', blurb: 'Meet the physiotherapists treating you in Dapto.' },
  title: 'Meet Your Dapto Physio Team | Functional Physiotherapy',
  metaDesc:
    'Meet Chris Vitucci and the team at Functional Physiotherapy in Dapto NSW. Masters-qualified, 8 years clinical experience, one-on-one care built around your goals.',
  eyebrow: 'Our team',
  h1: 'The people treating you',
  lead:
    'Functional Physiotherapy is led by <b>Chris Vitucci</b> &mdash; masters-qualified, eight years in clinical practice, and the reason patients across the Illawarra keep coming back to the same physio rather than whoever is free.',

  people: [{
    id: 'chris-vitucci',
    name: 'Chris Vitucci',
    jobTitle: 'Director & Principal Physiotherapist',
    image: 'assets/team-1.jpg',
    alumniOf: ['University of Wollongong', 'University of Technology Sydney'],
    knowsAbout: [
      'Dry needling', 'Chronic pain management', 'Running injuries',
      'Conservative ACL management', 'Vertigo and vestibular rehabilitation',
      'TMJ and jaw pain', 'Sports physiotherapy', 'Aged care physiotherapy',
    ],
    schemaBio:
      'Director and Principal Physiotherapist at Functional Physiotherapy, Dapto NSW. Bachelor of Exercise Science (University of Wollongong) and Master of Physiotherapy (University of Technology Sydney), with eight years of clinical experience across private practice, sporting teams, aged care and disability services. Founded Functional Physiotherapy in 2022. Has completed three advanced GEMt dry needling courses and assists in teaching the technique to other health practitioners.',
  }],

  blocks: [
    { t: 'phero' },
    { t: 'crumbs' },

    { t: 'split', img: 'assets/team-1.jpg', alt: 'Chris Vitucci, Director and Principal Physiotherapist',
      eyebrow: 'Director &amp; Principal Physiotherapist',
      h2: 'Chris Vitucci',
      html: `
<p>Chris holds a <b>Bachelor of Exercise Science</b> from the University of Wollongong and a <b>Master of Physiotherapy</b> from UTS, and has eight years of clinical experience behind him. He has worked with athletes and sporting teams, in aged care, and with people living with disability &mdash; which is why the caseload here runs from a teenager&rsquo;s first hamstring tear to a ninety-year-old&rsquo;s balance and falls program without either feeling like an afterthought.</p>
<p>He founded Functional Physiotherapy in 2022, originally in his home town of <b>Griffith, NSW</b>, to provide care the town badly needed. The practice now operates from Dapto, inside Dapto Medical Professionals on the Princes Highway.</p>
<p>Chris takes a performance-based approach: the aim is to empower you to improve your health, function and capacity, whether that capacity is getting through a working day without your back locking up or getting back onto the park. He is a result-driven therapist who keeps looking for the optimal outcome rather than settling for a plateau.</p>
<p>He has a gentle, easy-going nature and builds rapport quickly, and his can-do attitude tends to rub off on the people he treats.</p>`,
      list: [
        'B. Exercise Science, <b>University of Wollongong</b>',
        'Master of Physiotherapy, <b>UTS</b>',
        '<b>8 years</b> of clinical experience',
        'Experience with athletes, sporting teams, aged care and disability services',
        'Founded Functional Physiotherapy in <b>2022</b>',
      ] },

    { t: 'cards', tone: 'alt', eyebrow: 'Special interests', h2: 'What Chris works on most',
      sub: 'Every physiotherapist develops areas they go deeper on. These are his &mdash; and each links to the page that covers it properly.',
      items: [
        { h3: 'Dry needling', sub: 'Three advanced GEMt courses',
          p: 'Chris has completed three advanced GEMt dry needling courses and <b>assists in teaching the technique to other health practitioners</b>.',
          href: 'dry-needling.html', link: 'Dry needling' },
        { h3: 'Conservative ACL management', sub: 'Surgery is not the only path',
          p: 'Rehabilitating ACL injuries without reconstruction where that is the right call, and preparing the knee properly where it is not.',
          href: 'acl-injuries.html', link: 'ACL rehabilitation' },
        { h3: 'Running injuries', sub: 'Load, not rest',
          p: 'Diagnosing what the tissue was not ready for, and building runners back up without taking their running away entirely.',
          href: 'running-injuries.html', link: 'Running injuries' },
        { h3: 'Chronic conditions', sub: 'The long game',
          p: 'Persistent and long-standing pain, where progress is measured in months and honesty about timeframes matters more than optimism.',
          href: 'services.html', link: 'All services' },
        { h3: 'Vertigo &amp; dizziness', sub: 'Often fixable fast',
          p: 'Positional vertigo, BPPV and balance problems — frequently resolved in one or two sessions once correctly identified.',
          href: 'vertigo-headaches.html', link: 'Vertigo &amp; headaches' },
        { h3: 'TMJ &amp; jaw pain', sub: 'Under-served locally',
          p: 'Jaw pain, clicking and restricted opening, and the neck and headache problems that so often travel with them.',
          href: 'services.html', link: 'Get in touch' },
      ] },

    { t: 'bios', eyebrow: 'The wider team', h2: 'Growing the team',
      sub: 'As physiotherapists join, each gets their own profile here. People search for their physio by name, so named profiles matter for both trust and search.',
      items: [
        { name: '[Physiotherapist name]', role: 'Physiotherapist', img: 'assets/equipment.jpg', alt: '',
          bio: '[Placeholder card showing how a second practitioner appears — photo, name, qualifications, a short bio and their special interests.]' },
        { name: '[Physiotherapist name]', role: 'Physiotherapist', img: 'assets/equipment.jpg', alt: '',
          bio: '[Placeholder card. The grid reflows cleanly from one practitioner to nine or more, so this page scales as the clinic grows.]' },
        { name: 'Join us', role: 'We are hiring', img: 'assets/gym.jpg', alt: '',
          bio: 'We would like to hear from physiotherapists who want a one-on-one caseload and real appointment lengths. <a href="careers.html">See what we are looking for &rarr;</a>' },
      ],
      note: '<b>Placeholder.</b> Two cards above are scaffolding for future practitioners. Also: confirm the headshot on Chris&rsquo;s profile is actually him &mdash; ' +
        'it is a real team photo carried over from the current site, but the name-to-face match has not been verified. ' +
        'Note the polo in that photo reads &ldquo;Functional Physiotherapy Griffith&rdquo; (tracker P0-10).' },

    { t: 'split', tone: 'fresh', flip: true, img: 'assets/clinic.jpg', alt: 'Inside Functional Physiotherapy Dapto',
      eyebrow: 'Our approach',
      h2: 'What one-on-one actually means here',
      html: `
<p>Your appointment is with your physiotherapist, start to finish. You are not passed to an assistant halfway through, and you are not put on a machine in the corner while other people are seen.</p>
<p>That matters clinically, not just as a courtesy. Assessment continues through the whole session, so treatment gets adjusted as we learn more. Exercises are taught and corrected rather than handed over on paper. And because the same person sees you each visit, we notice when something is not progressing the way it should &mdash; and say so.</p>`,
      list: [
        'Evidence-based, one-on-one care built around your goals',
        'Private, <a href="workcover.html">WorkCover</a> and <a href="ndis.html">NDIS</a> patients all welcome',
        'Inside <b><a href="contact.html">Dapto Medical Professionals</a></b>, with on-site parking',
        '<b>Home visits</b> available across the Illawarra',
      ] },

    { t: 'stats', items: [
      { n: '8', l: 'years clinical experience' },
      { n: '1:1', l: 'every session, every time' },
      { n: '2022', l: 'Functional Physiotherapy founded' },
      { n: 'Mon–Fri', l: '8:00am – 5:30pm' },
    ] },

    { t: 'split', tone: 'alt', img: 'assets/equipment.jpg', alt: 'Clinic equipment',
      eyebrow: 'Join us',
      h2: 'We are looking for physiotherapists',
      html: `
<p>The clinic is growing, and we would like to hear from physiotherapists who want to practise properly &mdash; real appointment lengths, a one-on-one caseload, and support to build a special interest.</p>
<p><a class="btn btn-line" href="careers.html">Careers at Functional Physiotherapy</a></p>` },

    { t: 'final', h2: 'Come and see us',
      p: 'Book an appointment online, or call the clinic and we will help you get started.',
      cta: 'Book an appointment' },
  ],
});

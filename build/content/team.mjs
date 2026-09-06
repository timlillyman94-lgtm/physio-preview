import { register } from '../lib.mjs';

export default register({
  slug: 'team',
  group: 'core',
  groupLabel: 'Clinic',
  crumb: 'Team',
  card: { name: 'Our team', blurb: 'Meet the physiotherapists treating you in Dapto.' },
  title: 'Meet Your Dapto Physio Team | Functional Physiotherapy',
  metaDesc:
    'Meet the physiotherapists at Functional Physiotherapy in Dapto NSW. Evidence-based, one-on-one care with a genuine focus on your recovery and your goals.',
  eyebrow: 'Our team',
  h1: 'The people treating you',
  lead:
    'Functional Physiotherapy has looked after the Dapto community for over eight years with a simple commitment: <b>evidence-based, one-on-one care built around your goals.</b>',

  blocks: [
    { t: 'phero' },
    { t: 'crumbs' },

    { t: 'bios', eyebrow: 'Meet the physios', h2: 'Our physiotherapists',
      sub: 'People search for their physiotherapist by name. Each practitioner gets their own profile, and the page grows as the team does.',
      items: [
        { name: 'Chris Vitucci', role: 'Director &amp; Principal Physiotherapist', img: 'assets/team-1.jpg',
          alt: 'Chris Vitucci, Director and Principal Physiotherapist',
          bio: '[Placeholder bio — awaiting Chris’s details: qualifications, years of experience, special interests, and anything he wants highlighted. Tracker item P0-03.]' },
        { name: '[Physiotherapist name]', role: 'Physiotherapist', img: 'assets/equipment.jpg',
          alt: '',
          bio: '[Placeholder card showing how a second practitioner appears. Replace with a real photo, name, qualifications and a short bio.]' },
        { name: '[Physiotherapist name]', role: 'Physiotherapist', img: 'assets/equipment.jpg',
          alt: '',
          bio: '[Placeholder card. The grid reflows cleanly from one practitioner up to nine or more, so the page scales as the clinic grows.]' },
      ],
      note: '<b>Placeholders.</b> Confirm the full team list and match each name to the correct headshot — the current photo is a real team member but the name shown may not match. ' +
        'Each bio should carry: qualifications (with the university and year), years practising, AHPRA registration, special interests, ' +
        'and a sentence of personality. Named bios earn brand searches and are a real trust signal for a health service.' },

    { t: 'split', tone: 'fresh', img: 'assets/clinic.jpg', alt: 'Inside Functional Physiotherapy Dapto',
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
      { n: '8+', l: 'years caring for Dapto' },
      { n: '1:1', l: 'every session, every time' },
      { n: '5', l: 'days a week' },
      { n: 'Mon–Fri', l: '8:00am – 5:30pm' },
    ] },

    { t: 'split', tone: 'alt', flip: true, img: 'assets/equipment.jpg', alt: 'Clinic equipment',
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

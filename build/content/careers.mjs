import { register } from '../lib.mjs';

export default register({
  slug: 'careers',
  group: 'core',
  groupLabel: 'Clinic',
  navActive: 'team',
  crumb: 'Careers',
  card: { name: 'Careers', blurb: 'Physiotherapy roles at a growing Illawarra clinic.' },
  title: 'Physiotherapy Jobs Dapto | Careers at Functional Physiotherapy',
  metaDesc:
    'Interested in physiotherapy work in Dapto? Functional Physiotherapy is growing. Contact Chris to discuss opportunities at our Illawarra clinic.',
  eyebrow: 'Careers',
  h1: 'Physiotherapy jobs in Dapto and the Illawarra',
  lead:
    'We are planning to grow our team and would like to hear from <b>registered physiotherapists</b> interested in working in Dapto.',

  blocks: [
    { t: 'phero', cta: false },
    { t: 'crumbs' },

    { t: 'prose', eyebrow: 'The clinic',
      h2: 'Working at Functional Physiotherapy',
      html: `
<p>Functional Physiotherapy was founded in 2022. Our Dapto clinic is inside Dapto Medical Professionals, on the Princes Highway.</p>
<p>We provide one-on-one physiotherapy for sports and work injuries, joint and muscle conditions, vestibular presentations and disability-related support. You can read about our work on the <a href="services.html">services page</a> and find out more about Chris on the <a href="team.html">team page</a>.</p>`,
    },

    { t: 'prose', tone: 'alt', eyebrow: 'Expressions of interest',
      h2: 'Talk to Chris about joining the team',
      html: `
<p>If you are interested in working with us, email your CV and a short introduction to <a href="mailto:info@functionalphysio.com.au">info@functionalphysio.com.au</a>, or call <a href="tel:0242219637">(02) 4221 9637</a> and ask to speak with Chris.</p>
<p>Include your clinical interests, availability and the type of role you are looking for.</p>`,
    },

    { t: 'final', h2: 'Interested?',
      p: 'Contact Chris to discuss opportunities at the clinic.',
      links: [
        { href: 'mailto:info@functionalphysio.com.au?subject=Physiotherapy%20role%20enquiry', label: 'Email us' },
        { href: 'tel:0242219637', label: 'Call (02) 4221 9637' },
      ] },
  ],
});

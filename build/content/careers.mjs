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
    'Physiotherapist jobs in Dapto and the Illawarra. One-on-one caseload, real appointment lengths, mentoring and support to build a special interest. Get in touch.',
  eyebrow: 'Careers',
  h1: 'Physiotherapy jobs in Dapto and the Illawarra',
  lead:
    'We are growing, and we would like to hear from physiotherapists who want to <b>treat properly</b> &mdash; one-on-one appointments, time to assess, and support to develop rather than a conveyor belt.',

  blocks: [
    { t: 'phero', cta: false },
    { t: 'crumbs' },

    { t: 'prose', eyebrow: 'The pitch',
      h2: 'What working here is like',
      sub: 'A small, established clinic in a part of the Illawarra that is growing quickly.',
      html: `
<p>Functional Physiotherapy was founded in 2022 and treats the Dapto community from a clinic inside Dapto Medical Professionals, on the Princes Highway. The caseload is genuinely varied: sporting injuries from local clubs, work injuries from the region&rsquo;s industrial and care sectors, spinal pain, vestibular presentations, NDIS participants and post-surgical rehabilitation.</p>
<p>Appointments are one-on-one and long enough to do the job. We do not double-book, we do not hand patients to an assistant halfway through, and we do not measure a good day by how many bodies passed through the room. If you have worked somewhere that did, you will know why that is worth saying out loud.</p>
<p>West Dapto is one of the largest residential growth areas in the state, which means the local population and the demand for good physiotherapy are both increasing. There is room here to build a caseload around what you are actually interested in.</p>`,
    },

    { t: 'cols',
      left: { eyebrow: 'What we offer', h2: 'What you get', items: [
        'A one-on-one caseload with realistic appointment lengths',
        'Mentoring and structured professional development support',
        'Scope to build a special interest &mdash; sports, vestibular, workers comp, NDIS',
        'A mixed caseload rather than one funding stream',
        'Monday to Friday hours &mdash; no weekend roster',
        'An established local referral base and a strong community reputation',
      ] },
      right: { eyebrow: 'What we look for', h2: 'What we are after', items: [
        'AHPRA registration as a physiotherapist (or eligibility for it)',
        'New graduates and experienced clinicians both welcome',
        'Genuine interest in assessment and reasoning, not just technique',
        'Willingness to explain things properly to patients',
        'Interest in local sport, community work or a clinical special interest',
        'Someone who wants to stay &mdash; we are building a team, not filling a gap',
      ] },
    },

    { t: 'cards', tone: 'alt', eyebrow: 'Open to', h2: 'Roles we are interested in talking about',
      sub: 'No formal vacancy list &mdash; we would rather hear from the right person and build a role around them.',
      items: [
        { h3: 'Physiotherapist — full time', p: 'A full caseload across the clinic’s mix of private, sporting, WorkCover and NDIS work.' },
        { h3: 'Physiotherapist — part time', p: 'Set days or school hours. We would rather have the right clinician part time than the wrong one full time.' },
        { h3: 'New graduate', p: 'Structured mentoring, longer appointment times while you find your feet, and a supervisor who is actually in the building.' },
      ] },

    { t: 'prose', eyebrow: 'How to apply',
      h2: 'Get in touch',
      html: `
<p>There is no formal application process and no portal to fight with. Email a CV and a few lines about what you are looking for to <a href="mailto:info@functionalphysio.com.au">info@functionalphysio.com.au</a>, or call the clinic on <a href="tel:0242219637">(02) 4221 9637</a> and ask to speak with Chris.</p>
<p>If you are a student or new graduate wanting to look around first, that is fine too &mdash; say so and we will organise a time.</p>
<p class="ph">[To confirm with Chris: current vacancies, employment terms, whether student placements are offered, and whether to list a direct contact rather than the general clinic email.]</p>`,
    },

    { t: 'final', h2: 'Interested?',
      p: 'Send us a CV and a few lines about what you are after. We would rather have a conversation than a form.',
      links: [
        { href: 'mailto:info@functionalphysio.com.au?subject=Physiotherapy%20role%20enquiry', label: 'Email us' },
        { href: 'tel:0242219637', label: 'Call (02) 4221 9637' },
      ] },
  ],
});

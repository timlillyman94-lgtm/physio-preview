import { register } from '../lib.mjs';

export default register({
  slug: 'fees-and-rebates',
  group: 'funding',
  groupLabel: 'Funding pathway',
  navActive: 'services',
  crumb: 'Fees &amp; rebates',
  crumbParent: 'services',
  order: 3,
  card: {
    name: 'Fees &amp; rebates',
    blurb: 'What an appointment costs, and every way it can be funded — private health, Medicare, WorkCover, NDIS.',
  },
  title: 'Physio Fees &amp; Rebates Dapto | Private Health &amp; Medicare',
  metaDesc:
    'Physiotherapy fees and rebates at our Dapto clinic: private health extras, Medicare chronic condition referrals, WorkCover and NDIS. Clear pricing, no surprises.',
  eyebrow: 'Fees &amp; rebates',
  h1: 'Physiotherapy fees and rebates in Dapto',
  lead:
    'No surprises at the front desk. Here is what an appointment costs, and <b>every way it can be paid for</b> &mdash; privately, through your health fund, on a Medicare referral, through WorkCover, or under an NDIS plan.',
  schema: {
    name: 'Physiotherapy fees and funding options',
    serviceType: 'Physiotherapy',
    alternateName: ['Physio cost Dapto', 'Physiotherapy rebates', 'Medicare physiotherapy', 'Private health physiotherapy'],
    description:
      'Physiotherapy appointment fees and the funding options available at Functional Physiotherapy in Dapto NSW, including private health extras, Medicare chronic condition management referrals, workers compensation and NDIS.',
  },

  blocks: [
    { t: 'phero' },
    { t: 'crumbs' },

    { t: 'note', tone: 'alt', html:
      '<b>Draft page — pricing to be confirmed.</b> Fee figures below are placeholders pending confirmation from the clinic, ' +
      'along with whether HICAPS on-the-spot claiming is available and which funds are supported (tracker item P0-07). ' +
      'Everything else on this page is general information that applies regardless.' },

    { t: 'table', id: 'fees', eyebrow: 'What it costs', h2: 'Appointment fees',
      sub: 'One-on-one appointments with a physiotherapist. No consultation is shorter than it needs to be.',
      cols: ['Appointment', 'Length', 'Fee'],
      rows: [
        ['Initial consultation', 'approx. 45 min', '$[TBC]'],
        ['Standard follow-up', 'approx. 30 min', '$[TBC]'],
        ['Extended consultation', 'approx. 45 min', '$[TBC]'],
        ['Home visit', 'by arrangement', '$[TBC]'],
        ['Telehealth consultation', 'approx. 30 min', '$[TBC]'],
      ],
      note: 'Dry needling, manual therapy and exercise prescription are included within a consultation rather than charged separately. ' +
        'WorkCover and NDIS appointments are charged at the rates published by SIRA and the NDIS respectively, not at the fees above.' },

    { t: 'cards', h2: 'Ways to pay for physiotherapy',
      eyebrow: 'Funding options',
      sub: 'Most people use one of these five. If you are not sure which applies to you, call the clinic and we will work it out before you book.',
      items: [
        { h3: 'Private health extras', sub: 'Most common',
          p: 'If your policy includes extras cover with physiotherapy, you can claim a rebate on each visit. What you get back depends on your fund, your level of cover and how much of your annual limit you have used.',
          href: '#private-health', link: 'How it works' },
        { h3: 'Medicare referral', sub: 'For chronic conditions',
          p: 'If you have a chronic condition, your GP may be able to refer you for a limited number of subsidised allied health visits per calendar year under a chronic condition management plan.',
          href: '#medicare', link: 'Check eligibility' },
        { h3: 'WorkCover', sub: 'Injured at work',
          p: 'On an approved workers compensation claim, treatment is billed directly to your insurer at the SIRA-published rates. There is no out-of-pocket cost to you.',
          href: 'workcover.html', link: 'WorkCover physiotherapy' },
        { h3: 'NDIS', sub: 'Participants',
          p: 'Physiotherapy is generally funded from your Capacity Building budget under Improved Daily Living. Plan managed, self managed and agency managed participants are all welcome.',
          href: 'ndis.html', link: 'NDIS physiotherapy' },
        { h3: 'Private, no cover', sub: 'Straightforward',
          p: 'You do not need insurance, a referral or a plan to see a physiotherapist. Book, pay the consultation fee on the day, and that is the whole transaction.',
          href: null },
        { h3: 'Third party / CTP', sub: 'To be confirmed',
          p: 'Motor accident and other third-party claims are handled differently again. We are confirming the detail for this page — call the clinic in the meantime and we will tell you where you stand.',
          href: null },
      ] },

    { t: 'prose', id: 'private-health', tone: 'alt', eyebrow: 'Private health',
      h2: 'Claiming physiotherapy on private health insurance',
      sub: 'Physiotherapy sits under extras cover, not hospital cover.',
      html: `
<p>If your policy includes extras (sometimes called ancillary or general treatment) cover with physiotherapy included, you can claim a rebate on each consultation. Three things determine what you actually get back: which fund you are with, what level of extras you hold, and how much of your annual physiotherapy limit you have already used for the calendar year. Some policies pay a fixed dollar amount per visit, some a percentage of the fee, and most cap the total per person per year.</p>
<p>A few practical points worth knowing. Most funds pay a higher rebate on the initial consultation than on subsequent visits. Annual limits generally reset on 1 January, so if you have limit remaining in December it is worth using. Waiting periods apply to new policies and to upgrades. And you do not need a doctor&rsquo;s referral to claim physiotherapy on extras cover &mdash; you can simply book.</p>
<p class="ph"><b>[To confirm]</b> Whether HICAPS on-the-spot claiming is available at the clinic, and which funds are supported. Until that is confirmed, assume you may need to pay on the day and claim through your fund&rsquo;s app or website with the receipt we provide.</p>`,
    },

    { t: 'prose', id: 'medicare', eyebrow: 'Medicare',
      h2: 'Does Medicare cover physiotherapy?',
      sub: 'Not for general physiotherapy. It can contribute for people managing a chronic condition, on a GP referral.',
      html: `
<p>Ordinary physiotherapy for an acute injury is not covered by Medicare. The exception is chronic condition management: if you have a chronic or long-term medical condition, your GP can assess whether you are eligible for a chronic condition management plan and, if so, refer you for a limited number of subsidised allied health services per calendar year &mdash; commonly five, shared across all allied health providers, not five per provider.</p>
<p>The Medicare benefit is a set rebate rather than the full fee, so there is normally a gap for you to pay. The referral must come from your GP before your appointment; we cannot arrange it retrospectively. Bring the referral and your Medicare card to your first visit.</p>
<p>Two things worth checking with your GP: whether you are eligible at all, and how many of your allied health visits you have already used this calendar year across physiotherapy, podiatry, dietetics and the rest. Program rules do change, so treat the above as a guide and confirm current arrangements with your GP or Services Australia.</p>
<h3>What about DVA?</h3>
<p class="ph"><b>[To confirm]</b> Whether the clinic treats DVA Gold and White Card holders and holds the relevant provider arrangements. Please call the clinic to check.</p>`,
    },

    { t: 'prose', tone: 'alt', eyebrow: 'Practicalities',
      h2: 'Cancellations, payment and what to bring',
      html: `
<p><b>Payment.</b> Payment is made at the end of your appointment. We accept card payments at the clinic.</p>
<p><b>Cancellations.</b> If you need to change or cancel an appointment, please give us as much notice as you can &mdash; appointment times are held one-to-one, and late notice usually means the slot goes unused when someone else was waiting for it. <span class="ph">[Cancellation policy and any associated fee to be confirmed.]</span></p>
<p><b>What to bring.</b> Comfortable clothing you can move in, and anything relevant to how you are paying: your private health card, a Medicare referral and card, your claim number and insurer details for WorkCover, or your NDIS plan and plan manager&rsquo;s contact details. Bring any recent scans or specialist letters as well &mdash; not because we necessarily need them, but because they occasionally change the plan.</p>`,
    },

    { t: 'faq', h2: 'Fees and rebates FAQs',
      items: [
        { q: 'How much does a physio appointment cost in Dapto?',
          a: 'Fees for initial and follow-up consultations are listed in the table on this page. Dry needling and manual therapy are included within a consultation rather than charged as extras. WorkCover and NDIS appointments are charged at the rates set by SIRA and the NDIS instead.' },
        { q: 'Do I need a referral to see a physiotherapist?',
          a: 'No. Physiotherapists are primary contact practitioners, so you can book directly and claim on private health extras without a referral. A GP referral is only required if you are claiming a Medicare rebate under a chronic condition management plan.' },
        { q: 'Does Medicare cover physiotherapy?',
          a: 'Not for general physiotherapy. If you have a chronic condition, your GP may be able to refer you under a chronic condition management plan for a limited number of subsidised allied health visits per calendar year, commonly five shared across all allied health. Medicare pays a set rebate and a gap is normally payable.' },
        { q: 'Can I claim physiotherapy on private health insurance?',
          a: 'Yes, if your policy includes extras cover with physiotherapy. What you get back depends on your fund, your level of cover and your remaining annual limit. Most funds pay more on the initial consultation, and limits usually reset on 1 January.' },
        { q: 'Is there any cost for WorkCover or NDIS physiotherapy?',
          a: 'On an approved WorkCover claim, no — treatment is billed directly to your insurer with nothing to pay upfront. For NDIS participants, physiotherapy is funded from your plan; plan managed participants pay nothing directly, self managed participants pay and claim back through the myplace portal.' },
        { q: 'Can I use both Medicare and private health for the same visit?',
          a: 'No. You can claim either the Medicare rebate or a private health rebate for a given appointment, not both. If you have a chronic condition referral, it is usually worth using those visits first and then claiming on extras once they are used up.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'The two funding pathways with their own detailed pages.',
      items: ['workcover', 'ndis', 'services'] },

    { t: 'final', h2: 'Still not sure what it will cost you?',
      p: '<a href="contact.html" style="color:inherit;text-decoration:underline">Call the clinic</a> before you book. We will work out which pathway applies and tell you what you will actually pay.',
      cta: 'Book an appointment' },
  ],
});

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
    blurb: 'What an appointment costs, and every way it can be funded: private health, Medicare, WorkCover, NDIS.',
  },
  title: 'Physio Fees &amp; Rebates Dapto | Private Health &amp; Medicare',
  metaDesc:
    'Physio fees and rebates in Dapto NSW. HICAPS on site and all health funds accepted. Read about eligible Medicare, WorkCover and NDIS funding before booking.',
  eyebrow: 'Fees &amp; rebates',
  h1: 'Physiotherapy fees and rebates in Dapto',
  lead:
    '<b>HICAPS is on site and we accept all health funds.</b> Eligible extras claims can be processed at your appointment. Check the fees below and read how Medicare, WorkCover and NDIS billing works.',
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
      '<b>Draft page, consultation fees still to be confirmed.</b> The dollar figures in the table below are placeholders ' +
      'pending confirmation from the clinic. DVA, cancellation terms and the marked NDIS arrangements also need confirmation. HICAPS and health-fund acceptance are confirmed.' },

    { t: 'table', id: 'fees', eyebrow: 'What it costs', h2: 'Appointment fees',
      sub: 'One-on-one appointments with a physiotherapist. <b>HICAPS is available on site</b>, for eligible private health extras claims. Your rebate depends on your cover.',
      cols: ['Appointment', 'Length', 'Fee'],
      rows: [
        ['Initial consultation', 'approx. 45 min', '$[TBC]'],
        ['Standard follow-up', 'approx. 30 min', '$[TBC]'],
        ['Extended consultation', 'approx. 45 min', '$[TBC]'],
        ['Home visit', 'by arrangement', '$[TBC]'],
        ['Telehealth consultation', 'approx. 30 min', '$[TBC]'],
      ],
      note: 'Dry needling, manual therapy and exercise prescription are included within a consultation rather than charged separately. ' +
        'WorkCover billing follows the applicable SIRA fee rules. NDIS fees are agreed before treatment under the pricing rules that apply to your funding. NDIS consultation rates, travel and report charges: [TBC].' },

    { t: 'cards', h2: 'Ways to pay for physiotherapy',
      eyebrow: 'Funding options',
      sub: 'These are the funding options covered on this page. Call before booking if you are unsure which applies.',
      items: [
        { h3: 'Private health extras', sub: 'HICAPS on site',
          p: 'We accept all health funds and can process eligible extras claims through HICAPS. You pay the difference between the fee and your rebate. What you get back depends on your fund, your level of cover and how much of your annual limit you have used.',
          href: '#private-health', link: 'How it works' },
        { h3: 'Medicare plans', sub: 'For chronic conditions',
          p: 'If you have a chronic condition, your GP may be able to refer you for a limited number of subsidised allied health visits per calendar year under a chronic condition management plan.',
          href: '#medicare', link: 'Check eligibility' },
        { h3: 'WorkCover', sub: 'Injured at work',
          p: 'For treatment covered by your workers compensation claim, we bill your insurer directly under the applicable SIRA fee rules. We check cover before confirming payment arrangements.',
          href: 'workcover.html', link: 'WorkCover physiotherapy' },
        { h3: 'NDIS', sub: 'Participants',
          p: 'Your plan may include disability-related physiotherapy under Capacity Building: Improved Daily Living. Check eligible supports and billing before booking. Agency-managed appointments: [TBC pending registration confirmation].',
          href: 'ndis.html', link: 'NDIS physiotherapy' },
        { h3: 'Private, no cover', sub: 'Straightforward',
          p: 'You do not need insurance, a referral or a plan to see a physiotherapist. Book, pay the consultation fee on the day, and keep the receipt for your records.',
          href: null },
        { h3: 'Third party / CTP', sub: 'To be confirmed',
          p: 'Motor accident and other third-party claims are handled differently again. We are confirming the detail for this page. Call the clinic in the meantime and we will tell you where you stand.',
          href: null },
      ] },

    { t: 'prose', id: 'private-health', tone: 'alt', eyebrow: 'Private health',
      h2: 'Claiming physiotherapy on private health insurance',
      sub: 'Physiotherapy sits under extras cover, not hospital cover.',
      html: `
<p>If your policy includes extras (sometimes called ancillary or general treatment) cover with physiotherapy included, you can claim a rebate on each consultation. Three things determine what you actually get back: which fund you are with, what level of extras you hold, and how much of your physiotherapy limit you have already used in your policy benefit year. Some policies pay a fixed dollar amount per visit, some a percentage of the fee, and most cap the total per person per year.</p>
<p>Check your rebate, remaining limit, benefit-year dates and any waiting periods with your fund. These vary between policies. Base appointments on your treatment needs. You do not need a doctor&rsquo;s referral to book a private physiotherapy appointment.</p>
<h3>Do you have HICAPS?</h3>
<p><b>Yes. HICAPS is available on site, and we accept all health funds.</b> Bring your membership card so we can submit an eligible claim at the desk. If it is accepted, you pay the difference between our fee and the rebate. Your policy and remaining limits determine what the fund pays.</p>`,
    },

    { t: 'prose', id: 'medicare', eyebrow: 'Medicare',
      h2: 'Does Medicare cover physiotherapy?',
      sub: 'Medicare can contribute to eligible physiotherapy under a GP chronic condition management plan. It does not cover every private appointment.',
      html: `
<p>A GP chronic condition management plan can give eligible patients access to Medicare rebates for up to <b>five individual allied health services per calendar year</b>, shared across eligible professions. Aboriginal and Torres Strait Islander patients may be eligible for <b>up to ten</b>. Your GP decides whether a plan and referral are appropriate for your condition.</p>
<p>The Medicare benefit is a set rebate rather than the full fee, so there is normally a gap for you to pay. You need a valid referral before the appointment; it cannot be arranged retrospectively. Bring the referral and your Medicare card to your first visit.</p>
<p>Check your eligibility and remaining services before booking, including visits used for other eligible allied health care. GP Management Plans and Team Care Arrangements made before 1 July 2025 can continue supporting eligible services until 30 June 2027. Your plan and referral must meet the applicable requirements. <a href="https://www.servicesaustralia.gov.au/services-available-under-gp-chronic-condition-management-plan?context=20" target="_blank" rel="noopener">Services Australia explains the current rules</a>.</p>
<h3>What about DVA?</h3>
<p class="ph"><b>[To confirm]</b> Whether the clinic treats DVA Gold and White Card holders and holds the relevant provider arrangements. Please call the clinic to check.</p>`,
    },

    { t: 'prose', tone: 'alt', eyebrow: 'Practicalities',
      h2: 'Cancellations, payment and what to bring',
      html: `
<p><b>Payment.</b> Payment is made at the end of your appointment. We accept card payments at the clinic.</p>
<p><b>Cancellations.</b> If you need to change or cancel an appointment, please give us as much notice as you can: appointment times are held one-to-one, and late notice usually means the slot goes unused when someone else was waiting for it. <span class="ph">[Cancellation policy and any associated fee to be confirmed.]</span></p>
<p><b>What to bring.</b> Comfortable clothing you can move in, and anything relevant to how you are paying: your private health card, a Medicare referral and card, your claim number and insurer details for WorkCover, or relevant NDIS goals, funding details and your plan manager&rsquo;s contact details. Bring any recent scans or medical letters relevant to your symptoms.</p>`,
    },

    { t: 'faq', h2: 'Fees and rebates FAQs',
      items: [
        { q: 'How much does a physio appointment cost in Dapto?',
          a: 'Initial consultation: $[TBC]. Standard follow-up: $[TBC]. These fees are awaiting confirmation; call the clinic for a quote before booking. Dry needling and manual therapy are included when used during your consultation. See the <a href="#fees">fee table</a> for other appointment types.' },
        { q: 'Do I need a referral to see a physiotherapist?',
          a: 'You can book directly as a private patient without a referral. Medicare-funded appointments need a valid referral under the relevant programme. Other funding arrangements may need claim or plan details, so check with us before attending.' },
        { q: 'Does Medicare cover physiotherapy?',
          a: 'Eligible patients with a GP chronic condition management plan can receive rebates for up to five individual allied health services per calendar year, shared across eligible professions. Aboriginal and Torres Strait Islander patients may be eligible for up to ten. You need a valid referral. Medicare pays a set rebate, so a gap may apply.' },
        { q: 'Do you have HICAPS, and which health funds do you accept?',
          a: 'Yes. HICAPS is available on site and we accept all health funds. Bring your membership card for an eligible extras claim. Your rebate depends on your policy, waiting periods and remaining limit. If the claim is accepted, you pay the difference between the rebate and the consultation fee.' },
        { q: 'Is there any cost for WorkCover or NDIS physiotherapy?',
          a: 'For treatment covered by a WorkCover claim, we bill the insurer directly. NDIS appointments draw on eligible funding in your plan, with fees agreed beforehand. Plan managers pay eligible invoices; self-managers can claim from an invoice before paying or pay first and claim from a receipt. We explain any cost to you before proceeding. See our <a href="ndis.html#funding">NDIS payment information</a>.' },
        { q: 'Can I use both Medicare and private health for the same visit?',
          a: 'No. You can claim either the Medicare rebate or a private health rebate for a given appointment, not both. Compare the available rebates and your remaining limits before deciding which to use.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'More about WorkCover, NDIS and the services available at the clinic.',
      items: ['workcover', 'ndis', 'services'] },

    { t: 'final', h2: 'Still not sure what it will cost you?',
      p: '<a href="contact.html" style="color:inherit;text-decoration:underline">Call the clinic</a> before you book. We will work out which pathway applies and tell you what you will actually pay.',
      cta: 'Book an appointment' },
  ],
});

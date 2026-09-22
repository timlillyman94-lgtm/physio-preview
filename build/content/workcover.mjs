import { register } from '../lib.mjs';

export default register({
  slug: 'workcover',
  group: 'funding',
  groupLabel: 'Funding pathway',
  navActive: 'services',
  crumb: 'WorkCover physiotherapy',
  crumbParent: 'services',
  order: 1,
  card: {
    name: 'WorkCover &amp; work injury',
    blurb: 'Workers compensation physiotherapy focused on a safe, sustainable return to work.',
  },
  title: 'WorkCover Physiotherapy Dapto | Workers Compensation Physio',
  metaDesc:
    'WorkCover and workers compensation physiotherapy in Dapto NSW. We bill insurers directly for covered treatment. Call to check claim and payment requirements.',
  eyebrow: 'WorkCover &amp; workers compensation',
  h1: 'WorkCover physiotherapy in Dapto',
  lead:
    'Injured at work? We treat injured workers from across <b>Dapto and the Illawarra</b>, helping you settle pain, rebuild capacity and get back to your job safely. For treatment covered by your claim, we bill your insurer directly with <b>no out-of-pocket cost to you</b>.',
  schema: {
    name: 'WorkCover and workers compensation physiotherapy',
    serviceType: 'Workers compensation physiotherapy',
    alternateName: ['Work injury physiotherapy', 'Workers comp physio', 'Return to work physiotherapy'],
    description:
      'Physiotherapy for work-related injuries under the NSW workers compensation scheme, including assessment, manual therapy, graded exercise and return-to-work planning, for injured workers in Dapto and the Illawarra.',
    offerCatalog: [
      'Work injury assessment', 'Manual therapy', 'Graded exercise and strengthening',
      'Dry needling', 'Return to work planning', 'Functional capacity progression',
    ],
  },

  blocks: [
    { t: 'hero', img: 'assets/back-manual.jpg', alt: 'Physiotherapist treating a patient&rsquo;s lower back',
      trust: ['Choose your own physio', 'No upfront cost for covered treatment', 'We liaise with your case manager'] },
    { t: 'crumbs' },
    { t: 'toc', items: [
      ['overview', 'What it covers'], ['claim', 'How a claim works'], ['injuries', 'Injuries we treat'],
      ['local', 'Work injuries in the Illawarra'], ['first-visit', 'Your first visit'], ['faq', 'FAQs'],
    ] },

    { t: 'prose', id: 'overview', eyebrow: 'Treatment and cover',
      h2: 'What is WorkCover physiotherapy?',
      sub: 'Physiotherapy for a work-related injury. NSW workers compensation can fund eligible treatment through your employer&rsquo;s insurer.',
      html: `
<p>NSW workers compensation can cover reasonably necessary physiotherapy for an eligible work-related injury. We check the claim details and treatment approval requirements before confirming how your appointment will be billed. That scheme is regulated by <a href="https://www.sira.nsw.gov.au/" target="_blank" rel="noopener">SIRA</a> (the State Insurance Regulatory Authority) and administered by insurers such as icare and its scheme agents, or by a self-insured employer. Physiotherapy is one of the treatments it can fund, including rehabilitation matched to your work duties.</p>
<p>Your job shapes the rehabilitation: what you lift, how long you stand and what a full shift asks of you. Alongside treatment, we document progress, request approval where needed and communicate with your GP and case manager about your work capacity.</p>
<h3>Do I have to pay for it?</h3>
<p>For treatment covered by your claim, no. We invoice your insurer directly, so there is nothing to pay at the desk and nothing to claim back later. If your claim has not been decided yet, insurers can begin provisional payments for reasonable treatment while liability is still being determined, which often means you can start physiotherapy without waiting for a final decision. Call us and we will tell you where you stand before you book.</p>
<h3>Can I choose my own physiotherapist?</h3>
<p>Yes. You are not obliged to attend a clinic nominated by your employer or your insurer. Your physiotherapist does need to be approved to treat under the NSW scheme, and further treatment may need insurer approval, but the choice of practitioner is yours. If you would rather be treated close to home in Dapto than travel to a provider chosen for you, simply name us.</p>`,
    },

    { t: 'steps', id: 'claim', eyebrow: 'Step by step',
      h2: 'How a NSW workers compensation claim works',
      sub: 'The main steps in a claim, from reporting the injury to planning suitable duties.',
      items: [
        { h3: 'Report the injury', p: 'Tell your employer as soon as you can, and see your GP. They document the injury and issue a SIRA Certificate of Capacity setting out what you can and cannot safely do.' },
        { h3: 'A claim is lodged', p: 'Your employer notifies their insurer. The insurer opens the claim, allocates a case manager and gives you a claim number.' },
        { h3: 'Start physiotherapy early', p: 'Bring your claim number, insurer name and certificate to your first appointment. If you are still waiting for these details, call so we can check the payment arrangements before you attend.' },
        { h3: 'We submit a treatment plan', p: 'Where approval is required, we send the insurer an Allied Health Treatment Request with your diagnosis, goals, proposed treatment and expected timeframe.' },
        { h3: 'Treatment is billed to the insurer', p: 'Approved sessions are invoiced directly at the SIRA-published rates. You pay nothing upfront and lodge nothing yourself.' },
        { h3: 'Return to work', p: 'We work with your GP, employer and case manager on suitable duties, then progress you toward your pre-injury role as your capacity rebuilds.' },
      ],
    },

    { t: 'cols', id: 'injuries',
      left: { eyebrow: 'What we treat', h2: 'Work injuries we help with', items: [
        'Lower back and neck injuries from lifting, manual handling or repetitive strain',
        'Shoulder, elbow, wrist and hand injuries, including overuse and RSI',
        'Knee, ankle and foot injuries, sprains, strains and falls at work',
        'Post-surgical rehabilitation following a workplace injury',
        'Crush, impact and soft-tissue injuries',
        'Aggravation of a pre-existing problem by work duties',
      ] },
      right: { eyebrow: 'Our approach', h2: 'Built around your actual job', items: [
        'Assessment of the movements and duties your job involves',
        'Hands-on manual therapy and <a href="dry-needling.html">dry needling</a> to settle pain early',
        'Graded strengthening matched to the loads your role demands',
        'Clear, measurable goals so progress is visible to you and the insurer',
        'Education to protect the injury and reduce the risk of re-injury',
        'Direct communication with your GP, employer and case manager',
      ] },
    },

    { t: 'split', id: 'local', tone: 'fresh', flip: true, img: 'assets/band-glute.jpg',
      alt: 'Physiotherapist supervising resistance band strengthening for an injured worker',
      eyebrow: 'Your work duties',
      h2: 'Work injury rehabilitation around Dapto',
      html: `
<p>The Illawarra includes heavy industry at Port Kembla, warehousing and transport along the Princes Highway, construction around West Dapto, and aged care and disability support services. These jobs place different physical demands on workers, which matter when planning a return after injury.</p>
<p>Warehouse and industrial roles can involve repeated lifting, carrying and working around heavy equipment. Care workers may need to assist with transfers; tradespeople may spend hours kneeling or working overhead. Desk work brings different demands, including long periods at a computer. Tell us which tasks are difficult now and what suitable duties are available.</p>
<p>The exercises need to prepare you for those tasks. Getting a warehouse worker back to repeated 20 kg lifts from floor to shoulder height is a different program from getting a support worker back to safe two-person transfers, or a plasterer back to sustained overhead work. We build the program around the task you actually have to return to.</p>`,
      list: [
        'Convenient for workers across Dapto, Kembla Grange, Unanderra and Port Kembla',
        'Appointments Monday to Friday, 8:00am&ndash;5:30pm',
        'On-site parking, inside Dapto Medical Professionals',
      ],
    },

    { t: 'prose', id: 'first-visit', tone: 'alt', eyebrow: 'What to expect',
      h2: 'Your first WorkCover appointment',
      sub: 'Allow about 45 minutes. Bring your claim details if available; call before attending if they are still being arranged.',
      html: `
<p>Bring your claim number, your insurer&rsquo;s name, your case manager&rsquo;s contact details if you have them, and your Certificate of Capacity. If some of that is still in progress, call first. We will explain what information is missing and whether the appointment can be billed to the insurer. If cover is unavailable, we will explain any private fee before you decide to proceed.</p>
<p>We start by asking about the injury and, just as importantly, about your job: what you lift, how often, how long you stand, what your shift pattern looks like, and which parts of the role you cannot currently do. Then we examine you: movement, strength, joint and nerve testing as relevant. We discuss the findings and the first steps in treatment, which may include hands-on treatment, exercises or a medical referral.</p>
<h3>How long will recovery take?</h3>
<p>It depends on the injury, how long you have had symptoms, and the demands of your role. A straightforward soft-tissue injury may settle in a few weeks; a significant back injury or a post-surgical case runs longer. We will discuss the likely recovery time after the assessment and review it as your symptoms and work capacity change.</p>
<h3>What if I am already back at work on restricted duties?</h3>
<p>We can review how you are managing those duties. Staying at work can be part of recovery when the tasks and hours are suitable. We discuss adjustments with your treating team as your capacity changes.</p>`,
    },

    { t: 'faq', h2: 'WorkCover physiotherapy FAQs',
      items: [
        { q: 'Do I have to pay for workers compensation physiotherapy?',
          a: 'For treatment covered by your claim, we bill your insurer directly under the applicable SIRA fee rules, with no upfront payment from you. If your claim is still being assessed, insurers can begin provisional payments for reasonable treatment while liability is determined. Call us and we will explain where you stand.' },
        { q: 'Can I choose my own physiotherapist for a work injury in NSW?',
          a: 'Yes. You are not required to attend a provider nominated by your employer or insurer. Your physiotherapist must be approved to treat under the NSW workers compensation scheme, and further treatment may need insurer approval, but the choice of clinic is yours. Ask for Functional Physiotherapy in Dapto.' },
        { q: 'What if my claim has not been approved yet?',
          a: 'Get in touch anyway. Insurers can make provisional payments for reasonable treatment while they decide on liability, which often means you can start without waiting. We can check what claim information and treatment approval are needed before your appointment.' },
        { q: 'How many physiotherapy sessions will WorkCover cover?',
          a: 'There is no single allowance for every claim. Some initial consultations are exempt from pre-approval under SIRA rules. Further treatment may require an Allied Health Treatment Request. We check which rules apply and discuss approval requirements before further sessions. <a href="https://www.sira.nsw.gov.au/resources-library/for-healthcare-providers/allied-health-treatment-request-ahtr-explanatory-notes" target="_blank" rel="noopener">SIRA explains the treatment request process</a>.' },
        { q: 'Do I need a referral to see you for a work injury?',
          a: 'You do not need a GP referral to book. Insurer payment depends on your claim and the treatment requirements. Your treating doctor completes the first Certificate of Capacity; eligible SIRA-approved physiotherapists can issue subsequent certificates within their scope. Call if you are unsure what you need.' },
        { q: 'Which areas do you cover for WorkCover physio?',
          a: 'We are based in Dapto and treat injured workers from right across the Illawarra, including Wollongong, Port Kembla, Shellharbour, Unanderra, Horsley, Kanahooka, Berkeley, Kembla Grange, Albion Park and Figtree.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'Read about spinal symptoms, dry needling and payment arrangements.',
      items: ['neck-back-pain', 'dry-needling', 'fees-and-rebates'] },

    { t: 'final', h2: 'Injured at work? Start your recovery today.',
      p: 'Book a WorkCover appointment, or call to check what to do while your claim details are being arranged.',
      cta: 'Book an appointment' },
  ],
});

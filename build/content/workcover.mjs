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
    'Injured at work? WorkCover and workers compensation physiotherapy in Dapto NSW. We bill approved claims directly to your insurer — no out-of-pocket cost. Book today.',
  eyebrow: 'WorkCover &amp; workers compensation',
  h1: 'WorkCover physiotherapy in Dapto',
  lead:
    'Injured at work? We treat injured workers from across <b>Dapto and the Illawarra</b>, helping you settle pain, rebuild capacity and get back to your job safely. For approved claims we bill your insurer directly, so there is <b>no out-of-pocket cost to you</b>.',
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
      trust: ['Choose your own physio', 'No upfront cost on approved claims', 'We liaise with your case manager'] },
    { t: 'crumbs' },
    { t: 'toc', items: [
      ['overview', 'What it covers'], ['claim', 'How a claim works'], ['injuries', 'Injuries we treat'],
      ['local', 'Work injuries in the Illawarra'], ['first-visit', 'Your first visit'], ['faq', 'FAQs'],
    ] },

    { t: 'prose', id: 'overview', eyebrow: 'The short version',
      h2: 'What is WorkCover physiotherapy?',
      sub: 'Physiotherapy for an injury that happened at work, funded by your employer&rsquo;s workers compensation insurer rather than by you.',
      html: `
<p>If you are hurt doing your job in NSW, your treatment is covered by the state&rsquo;s workers compensation scheme. That scheme is regulated by <a href="https://www.sira.nsw.gov.au/" target="_blank" rel="noopener">SIRA</a> (the State Insurance Regulatory Authority) and administered by insurers such as icare and its scheme agents, or by a self-insured employer. Physiotherapy is one of the treatments it funds, because getting you moving again is usually the fastest route back to full duties.</p>
<p>In practice, WorkCover physiotherapy is ordinary physiotherapy with two extra jobs attached. The first is clinical: settle your pain, restore movement and rebuild the strength and endurance your role actually demands. The second is administrative: document your progress, request approval for the treatment you need, and keep your GP, employer and case manager pointed in the same direction. We do both, so you can concentrate on recovering.</p>
<h3>Do I have to pay for it?</h3>
<p>On an approved claim, no. We invoice your insurer directly for approved treatment, so there is nothing to pay at the desk and nothing to claim back later. If your claim has not been decided yet, insurers can begin provisional payments for reasonable treatment while liability is still being determined &mdash; which often means you can start physiotherapy without waiting for a final decision. Call us and we will tell you where you stand before you book.</p>
<h3>Can I choose my own physiotherapist?</h3>
<p>Yes. You are not obliged to attend a clinic nominated by your employer or your insurer. Your physiotherapist does need to be approved to treat under the NSW scheme, and ongoing treatment needs insurer sign-off, but the choice of practitioner is yours. If you would rather be treated close to home in Dapto than travel to a provider chosen for you, simply name us.</p>`,
    },

    { t: 'steps', id: 'claim', eyebrow: 'Step by step',
      h2: 'How a NSW workers compensation claim works',
      sub: 'Six stages from the day of injury to sustainable duties. Most of the paperwork is ours and your employer&rsquo;s, not yours.',
      items: [
        { h3: 'Report the injury', p: 'Tell your employer as soon as you can, and see your GP. They document the injury and issue a SIRA Certificate of Capacity setting out what you can and cannot safely do.' },
        { h3: 'A claim is lodged', p: 'Your employer notifies their insurer. The insurer opens the claim, allocates a case manager and gives you a claim number.' },
        { h3: 'Start physiotherapy early', p: 'Bring your claim number, insurer name and certificate to your first appointment. Early treatment consistently produces better outcomes than waiting for approvals to be finalised.' },
        { h3: 'We submit a treatment plan', p: 'After assessing you we send the insurer an Allied Health Recovery Request &mdash; your diagnosis, goals, proposed treatment and expected timeframe. Further sessions are approved against that plan.' },
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
        'Assessment that starts with your duties, not a generic protocol',
        'Hands-on manual therapy and <a href="dry-needling.html">dry needling</a> to settle pain early',
        'Graded strengthening matched to the loads your role demands',
        'Clear, measurable goals so progress is visible to you and the insurer',
        'Education to protect the injury and reduce the risk of re-injury',
        'Direct communication with your GP, employer and case manager',
      ] },
    },

    { t: 'split', id: 'local', tone: 'fresh', flip: true, img: 'assets/band-glute.jpg',
      alt: 'Physiotherapist supervising resistance band strengthening for an injured worker',
      eyebrow: 'A local angle',
      h2: 'The work injuries we see around Dapto',
      html: `
<p>The Illawarra&rsquo;s employment mix shapes the injuries that come through our door. Heavy industry at Port Kembla, the warehousing and transport operations strung along the Princes Highway, the construction work driving the West Dapto housing release, and a large aged care and disability support workforce all produce their own patterns of injury.</p>
<p>From industrial and warehouse roles we mostly see lifting and manual handling injuries to the lower back and shoulders, plus crush and impact injuries to hands and feet. From care work we see cumulative back and shoulder strain from patient transfers. From trades we see knees, shoulders and backs. From office and administrative roles we see neck, upper back and wrist problems that build slowly and then stop someone working.</p>
<p>That matters because rehabilitation has to be specific. Getting a warehouse worker back to repeated 20 kg lifts from floor to shoulder height is a different program from getting a support worker back to safe two-person transfers, or a plasterer back to sustained overhead work. We build the program around the task you actually have to return to.</p>`,
      list: [
        'Convenient for workers across Dapto, Kembla Grange, Unanderra and Port Kembla',
        'Appointments Monday to Friday, 8:00am&ndash;5:30pm',
        'On-site parking, inside Dapto Medical Professionals',
      ],
    },

    { t: 'prose', id: 'first-visit', tone: 'alt', eyebrow: 'What to expect',
      h2: 'Your first WorkCover appointment',
      sub: 'Allow about 45 minutes. Bring your claim details if you have them &mdash; and come anyway if you don&rsquo;t.',
      html: `
<p>Bring your claim number, your insurer&rsquo;s name, your case manager&rsquo;s contact details if you have them, and your Certificate of Capacity. If some of that is still in progress, come in regardless; we will work out what is missing and chase it with you.</p>
<p>We start by asking about the injury and, just as importantly, about your job &mdash; what you lift, how often, how long you stand, what your shift pattern looks like, and which parts of the role you cannot currently do. Then we examine you: movement, strength, joint and nerve testing as relevant. You will leave the first session with an explanation of what is going on, hands-on treatment, and a small number of exercises to start straight away.</p>
<h3>How long will recovery take?</h3>
<p>It depends on the injury, how long you waited before starting treatment, and the demands of your role. A straightforward soft-tissue injury may settle in a few weeks; a significant back injury or a post-surgical case runs longer. We will give you an honest estimate after the assessment rather than an optimistic one, and we will revise it openly if your recovery does not follow the expected path.</p>
<h3>What if I am already back at work on restricted duties?</h3>
<p>Good &mdash; that is usually the right place to be. Evidence consistently shows that staying connected to work, on appropriately modified duties, produces better recovery than waiting at home until you are one hundred per cent. We will help define what those duties should look like and adjust them as your capacity improves.</p>`,
    },

    { t: 'faq', h2: 'WorkCover physiotherapy FAQs',
      items: [
        { q: 'Do I have to pay for workers compensation physiotherapy?',
          a: 'No. On an approved claim we bill your insurer directly at the SIRA-published rates, so there is no upfront cost and nothing for you to claim back. If your claim is still being assessed, insurers can begin provisional payments for reasonable treatment while liability is determined — call us and we will explain where you stand.' },
        { q: 'Can I choose my own physiotherapist for a work injury in NSW?',
          a: 'Yes. You are not required to attend a provider nominated by your employer or insurer. Your physiotherapist must be approved to treat under the NSW workers compensation scheme, and ongoing treatment needs insurer approval, but the choice of clinic is yours. Ask for Functional Physiotherapy in Dapto.' },
        { q: 'What if my claim has not been approved yet?',
          a: 'Get in touch anyway. Insurers can make provisional payments for reasonable treatment while they decide on liability, which often means you can start without waiting. We will tell you what is needed and help you avoid the delay that makes injuries harder to treat.' },
        { q: 'How many physiotherapy sessions will WorkCover cover?',
          a: 'There is no fixed number. After assessing you we submit an Allied Health Recovery Request to your insurer setting out the treatment, goals and expected timeframe, and sessions are approved against that plan. We review progress regularly and tell you before any approval is due to run out.' },
        { q: 'Do I need a referral to see you for a work injury?',
          a: 'You do not need a GP referral to book with us, but you do need a claim for the insurer to pay, and your GP must issue a Certificate of Capacity. Most people see their GP first for that reason. If you are unsure of the order, call the clinic and we will walk you through it.' },
        { q: 'Which areas do you cover for WorkCover physio?',
          a: 'We are based in Dapto and treat injured workers from right across the Illawarra, including Wollongong, Port Kembla, Shellharbour, Unanderra, Horsley, Kanahooka, Berkeley, Kembla Grange, Albion Park and Figtree.' },
      ],
    },

    { t: 'related', h2: 'Related pages',
      sub: 'Work injuries rarely sit in one box. These pages cover the treatments and conditions that most often come up alongside a WorkCover claim.',
      items: ['neck-back-pain', 'dry-needling', 'fees-and-rebates'] },

    { t: 'final', h2: 'Injured at work? Start your recovery today.',
      p: 'Book with our Dapto team, or call and we will help you work out your next step — claim number or not.',
      cta: 'Book an appointment' },
  ],
});

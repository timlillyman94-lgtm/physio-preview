import { register } from '../lib.mjs';

// Scope supplied by Chris via Tim, 7 October 2026. Draft for clinical review.
export default register({
  slug: 'general-physiotherapy',
  group: 'services',
  groupLabel: 'Service',
  navActive: 'services',
  crumb: 'General physiotherapy',
  crumbParent: 'services',
  order: 0,
  card: {
    name: 'General physiotherapy',
    blurb: 'Assessment, treatment and management of bone, joint, tendon, muscle and nerve-related injuries.',
  },
  title: 'General Physiotherapy in Dapto | Functional Physiotherapy',
  metaDesc: 'General physiotherapy in Dapto for bone, joint, tendon, muscle and nerve-related injuries. Assessment, hands-on treatment and rehabilitation. Book online.',
  eyebrow: 'General physiotherapy',
  h1: 'General physiotherapy in Dapto',
  lead: 'We assess, treat and manage <b>bone, joint, tendon, muscle and nerve-related injuries</b>. If pain or restricted movement is affecting your day, we can help you understand the problem and work out the next steps.',
  schema: {
    name: 'General physiotherapy',
    serviceType: 'Musculoskeletal physiotherapy',
    alternateName: ['General physio', 'Musculoskeletal physio'],
    description: 'Assessment, treatment and management of bone, joint, tendon, muscle and nerve-related injuries at Functional Physiotherapy in Dapto NSW.',
    offerCatalog: ['Injury assessment', 'Manual therapy', 'Exercise rehabilitation', 'Activity and injury-management advice'],
  },
  blocks: [
    { t: 'hero', img: 'assets/hero-assessment.jpg', alt: 'Physiotherapist assessing a patient’s shoulder movement',
      trust: ['Registered physiotherapists', 'One-on-one appointments'] },
    { t: 'crumbs' },
    { t: 'toc', items: [['injuries', 'What we treat'], ['assessment', 'Your assessment'], ['treatment', 'Treatment'], ['faq', 'FAQs']] },

    { t: 'prose', id: 'injuries', eyebrow: 'What we treat', h2: 'Joint and muscle injuries, and more',
      html: `
<p>You can see us for an injury that happened recently, pain that has developed gradually, or a problem that keeps returning. General physiotherapy covers concerns from everyday activities as well as work, exercise and sport.</p>
<ul>
<li><b>Joints:</b> pain, stiffness and reduced movement in areas such as the shoulder, elbow, wrist, hip, knee or ankle.</li>
<li><b>Muscles:</b> strains, soreness and weakness following injury or a period of reduced activity.</li>
<li><b>Tendons:</b> pain associated with loading or repeated movement, including Achilles, patellar and shoulder tendon problems.</li>
<li><b>Nerves:</b> symptoms such as pain, tingling or numbness that need assessment to understand their cause. Our <a href="neck-back-pain.html">neck and back pain page</a> includes information about sciatica.</li>
<li><b>Bones:</b> rehabilitation after a fracture, within the activity and weight-bearing limits set by your treating medical team.</li>
</ul>
<p>If you suspect a broken bone, seek immediate assessment from a doctor or emergency department. Do not wait for a routine physiotherapy appointment. <a href="https://www.healthdirect.gov.au/fractures" target="_blank" rel="noopener">Healthdirect explains when to seek urgent help for a fracture</a>.</p>` },

    { t: 'prose', tone: 'alt', id: 'assessment', eyebrow: 'Your first appointment', h2: 'Finding out what is causing the problem',
      html: `
<p>We will ask when your symptoms began, what changes them and which activities you are finding difficult. Tell us about previous injuries, relevant health conditions and any treatment you have already tried.</p>
<p>The physical assessment depends on your symptoms. It may include checking movement, strength, joint function or nerve-related signs. We explain what the findings suggest and whether physiotherapy is appropriate. If you need medical review or further investigation, we will discuss that with you.</p>
<p>Bring any relevant scans or medical letters, and wear clothing that allows the affected area to be examined.</p>` },

    { t: 'prose', id: 'treatment', eyebrow: 'Treatment and management', h2: 'A plan for the activities you need to do',
      html: `
<p>Treatment may include hands-on techniques, exercises to restore movement or strength, and advice about adjusting activities while the injury settles. We discuss the options with you before starting. <a href="dry-needling.html">Dry needling</a> may be offered where appropriate and with your consent.</p>
<p>Your goals might be lifting at work, walking the dog, getting dressed without shoulder pain or returning to the gym. These help us choose exercises and decide how to measure progress.</p>
<p>At follow-up appointments, we review your symptoms and what you can do, then adjust the plan. Recovery time and the number of visits depend on the injury, your health and how you respond.</p>
<p>Appointments are available at our Dapto clinic, inside Dapto Medical Professionals. See <a href="fees-and-rebates.html">fees and rebates</a> for payment options, or <a href="contact.html">contact the clinic</a> about home visits or telehealth.</p>` },

    { t: 'faq', h2: 'General physiotherapy FAQs', items: [
      { q: 'Do I need to know what is wrong before booking?', a: 'No. You can book for pain, stiffness, weakness or a movement problem without a diagnosis. Explain your symptoms when booking so we can help you choose an appropriate appointment.' },
      { q: 'Can I see a physio if my injury is not from sport?', a: 'Yes. General physiotherapy includes injuries and movement problems related to daily activities, work or a fall, as well as exercise and sport.' },
      { q: 'Do I need a GP referral for general physiotherapy?', a: 'You can book a private appointment directly. Funding arrangements such as Medicare or DVA may require a referral. Check the <a href="fees-and-rebates.html">fees and rebates page</a> before booking under a funding scheme.' },
      { q: 'Should I get a scan before my appointment?', a: 'A scan is not always needed before an assessment. Bring any existing reports. If your symptoms suggest you need imaging or medical review, we will explain why and discuss the next step.' },
      { q: 'Will I have treatment at the first appointment?', a: 'Treatment can often begin after the assessment. What we do depends on the findings and your agreement. Some problems need further medical assessment before physiotherapy treatment starts.' },
      { q: 'How many appointments will I need?', a: 'We can discuss an initial plan once we have assessed you. Some problems need only a short period of care; others need longer rehabilitation. We review the need for further appointments as your symptoms and function change.' },
    ] },
    { t: 'related', h2: 'More information about your injury',
      items: ['neck-back-pain', 'sports-injury', 'running-injuries'] },
    { t: 'final', h2: 'Book a physiotherapy assessment',
      p: 'Tell us what is bothering you and what you would like to get back to. Book online or call the Dapto clinic.', cta: 'Book an assessment' },
  ],
});

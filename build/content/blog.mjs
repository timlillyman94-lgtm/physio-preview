import { register } from '../lib.mjs';

export const blogIndex = register({
  slug: 'blog',
  group: 'core',
  groupLabel: 'Blog',
  crumb: 'Blog',
  card: { name: 'Blog', blurb: 'Practical advice from our physiotherapists.' },
  title: 'Physiotherapy Tips &amp; Advice | Functional Physiotherapy Dapto',
  metaDesc:
    'Practical, plain-English physiotherapy advice from our Dapto physios — injuries, recovery, WorkCover, and getting the most out of your treatment.',
  eyebrow: 'Blog',
  h1: 'Tips &amp; advice from our physios',
  lead: 'Practical, plain-English guidance on injuries, recovery and getting the most from your physiotherapy.',
  blocks: [
    { t: 'phero', cta: false },
    { t: 'crumbs' },
    { t: 'posts', items: [
      { href: 'blog-workers-comp.html', img: 'assets/band-glute.jpg', cat: 'WorkCover',
        h3: 'Workers Compensation Physiotherapy in NSW: What You Need to Know',
        p: 'Injured at work? How workers compensation physiotherapy works in NSW, what it covers, and how to choose your own physio.' },
      { href: 'blog-first-visit.html', img: 'assets/clinic-room.jpg', cat: 'Getting started',
        h3: 'What to Expect at Your First Physiotherapy Appointment',
        p: 'Never seen a physio before? Exactly what happens at your first visit, and how to prepare.' },
      { href: 'blog-dapto-questions.html', img: 'assets/hero-assessment.jpg', cat: 'FAQs',
        h3: 'Your Physiotherapy Questions, Answered',
        p: 'Do you need a referral? How many sessions will you need? We answer the questions we hear most often.' },
    ] },
    { t: 'final', h2: 'Have a question we have not answered?',
      p: 'Call the clinic and ask. We would rather spend five minutes on the phone than have you guess.',
      cta: 'Book an appointment' },
  ],
});

/* ── posts ─────────────────────────────────────────────────────────────────── */
register({
  slug: 'blog-workers-comp',
  path: 'post/workers-comp-physio-nsw',   // live URL — 1,416 impressions, do not move
  group: 'core', groupLabel: 'Blog', navActive: 'blog',
  crumb: 'Workers compensation physiotherapy in NSW', crumbParent: 'blog',
  card: { name: 'Workers comp physio in NSW', blurb: 'How the NSW scheme works, in plain English.' },
  title: 'Workers Compensation Physio NSW | What You Need to Know',
  metaDesc:
    'How workers compensation physiotherapy works in NSW — choosing your own physio, how a claim proceeds, what it covers and what it costs you.',
  h1: 'Workers Compensation Physiotherapy in NSW: What You Need to Know',
  blocks: [
    { t: 'article', cat: 'WorkCover', date: '16 November 2025', html: `
<p>If you have been injured at work in NSW, physiotherapy is often central to getting you back on your feet &mdash; and in most cases it will not cost you anything out of pocket. Here is what you need to know.</p>
<h2>You can choose your own physiotherapist</h2>
<p>Under the NSW workers compensation scheme you are not limited to a provider chosen by your employer or their insurer. Your physiotherapist does need to be approved to treat under the scheme, and ongoing treatment needs insurer approval, but the choice of clinic is yours. If you would rather be treated locally in Dapto, you can ask for that.</p>
<h2>How the process works</h2>
<ol>
<li>Report the injury to your employer and see your GP, who documents it and issues a Certificate of Capacity.</li>
<li>A claim is lodged with the insurer and you are given a claim number.</li>
<li>You start physiotherapy, bringing your claim number and insurer details to the first visit.</li>
<li>We submit an Allied Health Recovery Request setting out the treatment plan, and further sessions are approved against it.</li>
<li>Approved treatment is billed directly to the insurer.</li>
</ol>
<h2>Common workplace injuries we treat</h2>
<p>Back and neck pain from lifting or repetitive strain, shoulder and wrist injuries, knee and ankle sprains, and muscle strains are the most common. Early treatment consistently produces better outcomes than waiting for the paperwork to be finalised.</p>
<blockquote>Claim not approved yet? Insurers can begin provisional payments for reasonable treatment while liability is being determined. Get in touch and we will explain where you stand.</blockquote>
<p>The full detail &mdash; including what to bring, how many sessions are covered and how return to work is managed &mdash; is on our <a href="workcover.html">WorkCover physiotherapy page</a>. If your injury is a back or neck problem, our <a href="neck-back-pain.html">neck and back pain page</a> covers the treatment side in more depth.</p>` },
    { t: 'final', h2: 'Injured at work?',
      p: 'Book with our Dapto team, or call and we will help you work out your next step.',
      cta: 'Book an appointment' },
  ],
});

register({
  slug: 'blog-first-visit',
  path: 'post/first-visit-physiotherapy', // live URL — pos 7.5, best-performing post
  group: 'core', groupLabel: 'Blog', navActive: 'blog',
  crumb: 'What to expect at your first appointment', crumbParent: 'blog',
  card: { name: 'Your first visit', blurb: 'What actually happens at a first physiotherapy appointment.' },
  title: 'What to Expect at Your First Physiotherapy Appointment',
  metaDesc:
    'Never seen a physio before? What actually happens at a first physiotherapy appointment in Dapto, what to bring, and what you should leave with.',
  h1: 'What to Expect at Your First Physiotherapy Appointment',
  blocks: [
    { t: 'article', cat: 'Getting started', date: '10 November 2025', html: `
<p>If you have never seen a physiotherapist, the first visit can feel like an unknown. Here is what actually happens, so you can walk in knowing what to expect.</p>
<h2>A thorough assessment</h2>
<p>We start by talking through the problem, your history and what you are trying to get back to. Then we assess how you move and test the structures involved, so we can work out what is actually driving the pain or restriction &mdash; rather than treating the spot that hurts and hoping.</p>
<h2>An explanation you can understand</h2>
<p>We will tell you what we found in plain language, what is likely going on, and what the plan looks like. You should leave the first appointment understanding your condition and the path forward, including a realistic timeframe.</p>
<h2>Treatment starts on day one</h2>
<p>In most cases treatment begins straight away &mdash; hands-on therapy, <a href="dry-needling.html">dry needling</a> where it is appropriate, and a small number of exercises to start immediately.</p>
<h2>What to bring</h2>
<ul>
<li>Comfortable clothing you can move in</li>
<li>Any relevant scans, referrals or specialist reports</li>
<li>For <a href="workcover.html">WorkCover</a> or <a href="ndis.html">NDIS</a>, your claim number or plan details</li>
<li>Your private health card or Medicare referral if you are claiming &mdash; see <a href="fees-and-rebates.html">fees and rebates</a></li>
</ul>
<p>Allow about 45 minutes. No mystery &mdash; just a proper assessment and a plan built around you.</p>` },
    { t: 'final', h2: 'Ready for your first visit?',
      p: 'Book online in under a minute, or call the clinic and we will find a time that suits.',
      cta: 'Book an appointment' },
  ],
});

register({
  slug: 'blog-dapto-questions',
  path: 'post/dapto-physio-questions',   // live URL
  group: 'core', groupLabel: 'Blog', navActive: 'blog',
  crumb: 'Your physiotherapy questions, answered', crumbParent: 'blog',
  card: { name: 'Common questions', blurb: 'The questions we are asked most often, answered honestly.' },
  title: 'Your Physiotherapy Questions, Answered | Dapto Physio',
  metaDesc:
    'Do you need a referral? How many sessions will you need? Does it hurt? Honest answers to the questions our Dapto physios hear most often.',
  h1: 'Your Physiotherapy Questions, Answered',
  blocks: [
    { t: 'article', cat: 'FAQs', date: '23 November 2025', html: `
<p>We get asked the same handful of questions constantly. Here are honest answers to the most common ones.</p>
<h2>Do I need a referral to see a physio?</h2>
<p>No. Physiotherapists are primary contact practitioners, so you can book directly as a private patient. A referral is only needed for certain funding pathways &mdash; a Medicare chronic condition plan, or some insurance claims. Full detail is on our <a href="fees-and-rebates.html">fees and rebates page</a>.</p>
<h2>How many sessions will I need?</h2>
<p>It depends on the condition and how long you have had it. After the first assessment we will give you an honest estimate and track your progress against it, rather than rebooking you indefinitely. If something is not working, we will say so and change the plan.</p>
<h2>Does treatment hurt?</h2>
<p>Most treatment is comfortable. Some hands-on techniques and <a href="dry-needling.html">dry needling</a> can feel tender, and post-needling muscle ache for a day is normal. We work within your comfort and explain what we are doing before we do it.</p>
<h2>Will I get exercises to do at home?</h2>
<p>Usually, yes &mdash; and they are typically what makes the result last. We keep them few enough and clear enough that you will actually do them.</p>
<h2>Do I need a scan first?</h2>
<p>Usually not. Most musculoskeletal problems are diagnosed from your history and a physical examination, and scans often show incidental findings that have nothing to do with your pain. We will tell you clearly when imaging would genuinely change the plan.</p>
<h2>Do you treat WorkCover and NDIS patients?</h2>
<p>Yes, alongside private patients. Bring your claim number or plan details and we will handle the rest. See our <a href="workcover.html">WorkCover</a> and <a href="ndis.html">NDIS</a> pages.</p>` },
    { t: 'final', h2: 'Still have a question?',
      p: 'Call the clinic and ask. We are happy to tell you whether physiotherapy is even the right answer.',
      cta: 'Book an appointment' },
  ],
});

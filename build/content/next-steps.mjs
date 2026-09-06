import { register } from '../lib.mjs';

export default register({
  slug: 'next-steps',
  group: 'meta',
  groupLabel: 'Reviewer notes',
  navActive: '',
  crumb: 'About this preview',
  card: { name: 'About this preview', blurb: 'Reviewer notes.' },
  title: 'About this preview | Functional Physiotherapy redesign',
  metaDesc: 'Reviewer notes for the Functional Physiotherapy concept redesign preview: what is real, what is placeholder, and what happens next.',
  eyebrow: 'Read me first',
  h1: 'About this preview &amp; what happens next',
  lead: 'This is a <b>concept redesign</b> of the Functional Physiotherapy website. It is a working preview to look at and click through, <b>not the live site</b>. Nothing here is public.',

  blocks: [
    { t: 'phero', cta: false },
    { t: 'prose', html: `
<h2>How to look through it</h2>
<p>Start at the <a href="index.html">home page</a> and click around using the menu. Every page is real and links to the others. The &ldquo;Book now&rdquo; buttons open the actual Cliniko booking portal. Try it on your phone as well as a computer &mdash; the whole thing is built to work properly on mobile.</p>

<h2>What&rsquo;s included</h2>
<ul>
  <li><b>Home</b> and a <b>Services hub</b> grouped three ways: services, conditions and funding pathways</li>
  <li><b>Nine service pages</b>, each with its own full page: Sports Injury, Dry Needling, ACL Injuries, Running Injuries, Neck &amp; Back Pain, Headaches &amp; Vertigo, WorkCover, NDIS, and Fees &amp; Rebates</li>
  <li><b>Team</b>, <b>Careers</b>, <b>Contact</b> (with a map), and a <b>Blog</b> with three articles</li>
  <li>Search-engine structured data on every page, and consistent titles, descriptions and internal links</li>
</ul>

<h2>What&rsquo;s real vs. placeholder</h2>
<ul>
  <li><b>Photos are the clinic&rsquo;s own,</b> pulled from the current website. Note that <b>every photo containing a person shows a polo shirt reading &ldquo;Functional Physiotherapy Griffith&rdquo;</b> &mdash; on some it is clearly legible. They have been kept out of the most prominent positions, but fresh photography of the Dapto clinic and team is needed before launch.</li>
  <li><b>Service page wording is a first draft</b> written to be accurate, useful and search-friendly. Chris should review it and adjust anything that does not match how the clinic actually works.</li>
  <li><b>Fees are placeholders.</b> Prices, HICAPS availability, the fund list, DVA status and the cancellation policy all need confirming.</li>
  <li><b>Team bios are placeholders,</b> and the headshot shown may not match the name beside it. Each physiotherapist needs their own photo, qualifications and bio.</li>
  <li><b>The partner logo strip is a scaffold</b> awaiting the four club logo files and confirmed club names.</li>
  <li><b>Blog posts</b> are representative versions; the real posts would be carried across.</li>
</ul>

<h2>Open questions for Chris</h2>
<ul>
  <li>Can we arrange <b>fresh professional photography</b> of the Dapto clinic and team? (The Griffith-branded uniforms are the blocker.)</li>
  <li><b>Fees and rebates:</b> current prices, HICAPS on the spot, which funds, DVA, and the cancellation policy.</li>
  <li>Do you offer <b>women&rsquo;s health / pelvic floor</b> physiotherapy? The site already ranks in the top two for those searches with no page at all.</li>
  <li>Confirm the <b>full team list</b> and match each name to the right headshot.</li>
  <li>Any changes to the <b>service wording</b> or the services offered?</li>
</ul>

<h2>What it would take to make this the real, live site</h2>
<ol>
  <li><b>Finalise content and photos.</b> Confirm the service wording, fees, and ideally add fresh photography.</li>
  <li><b>Build it on the chosen stack</b> &mdash; a fast static site plus a simple content system so Chris can edit words and publish posts himself.</li>
  <li><b>Rebuild the forms.</b> The contact form is simple; the health declaration form collects health information and needs a properly private setup.</li>
  <li><b>Protect the search rankings.</b> Keep every page address the same where possible, redirect anything that changes, and carry over all page titles and descriptions. This is the most important technical step &mdash; the site ranks well now and that must not be lost.</li>
  <li><b>Test on a staging link,</b> then go live by pointing the domain at the new host.</li>
  <li><b>After launch:</b> remove the &ldquo;no index&rdquo; setting, update the Google Business Profile website link, re-confirm Search Console and monitor rankings for about a month.</li>
</ol>

<h2>Rough size</h2>
<ul>
  <li><b>Effort:</b> around 1&ndash;2 weeks of build work, most of which is already designed here.</li>
  <li><b>Ongoing cost:</b> similar to, or cheaper than, the current Wix plan.</li>
  <li><b>Main risk:</b> a temporary dip in rankings during the move, managed with careful redirects.</li>
</ul>

<p class="ph">Prepared by Tim. This preview and these notes are for discussion, not a final product.</p>` },

    { t: 'final', h2: 'Have a look, then let&rsquo;s talk',
      p: 'Click through the pages, jot down anything you would change, and we will work through it together.',
      links: [{ href: 'index.html', label: 'Start at the home page' }, { href: 'services.html', label: 'See the services hub' }] },
  ],
});

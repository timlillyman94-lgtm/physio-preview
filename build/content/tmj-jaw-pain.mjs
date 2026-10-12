import { register } from '../lib.mjs';

// Draft for Chris. Primary intent: physio for the condition, with Dapto context.
export default register({
  "slug": "tmj-jaw-pain",
  "group": "conditions",
  "groupLabel": "Condition",
  "navActive": "services",
  "crumb": "TMJ & jaw pain",
  "crumbParent": "services",
  "order": 20,
  "card": {
    "name": "TMJ & jaw pain",
    "blurb": "Assessment and physiotherapy for jaw pain, painful clicking and difficulty opening your mouth."
  },
  "title": "Physio for TMJ & Jaw Pain in Dapto | Functional Physio",
  "metaDesc": "Physio for TMJ and jaw pain in Dapto. Jaw assessment, exercises and treatment advice, with clear guidance on when to see a dentist or doctor.",
  "eyebrow": "TMJ & jaw pain",
  "h1": "Physiotherapy for TMJ and jaw pain in Dapto",
  "lead": "Physiotherapy for TMJ and jaw pain in Dapto starts with checking jaw movement and muscle symptoms. We assess painful chewing, clicking or restricted opening and explain whether physiotherapy, dental care or medical review is appropriate.",
  "schema": {
    "name": "Physiotherapy for TMJ and jaw pain",
    "serviceType": "Physiotherapy for TMJ and jaw pain",
    "description": "Physio for TMJ and jaw pain in Dapto. Jaw assessment, exercises and treatment advice, with clear guidance on when to see a dentist or doctor."
  },
  "blocks": [
    {
      "t": "phero"
    },
    {
      "t": "crumbs"
    },
    {
      "t": "toc",
      "items": [
        [
          "jaw-symptoms",
          "When is jaw pain a TMJ problem?"
        ],
        [
          "assessment",
          "What happens at a jaw assessment?"
        ],
        [
          "treatment",
          "Physiotherapy, dental care and self-management"
        ],
        [
          "urgent-care",
          "Jaw symptoms that need urgent care"
        ],
        [
          "faq",
          "FAQs"
        ]
      ]
    },
    {
      "t": "prose",
      "id": "jaw-symptoms",
      "h2": "When is jaw pain a TMJ problem?",
      "html": "<p>The temporomandibular joints, or TMJs, connect your lower jaw to your skull, just in front of your ears. Problems affecting these joints or the muscles that move the jaw are called temporomandibular disorders, or TMD.</p>\n<p>Symptoms can include an ache with chewing, painful clicking or difficulty opening your mouth. A click without pain or restricted movement is common and usually does not need treatment. Some people also have headaches around the temples.</p>\n<p>Facial and jaw pain can have other causes, including dental problems. The assessment needs to consider these rather than assume every symptom comes from the joint.</p>",
      "tone": ""
    },
    {
      "t": "prose",
      "id": "assessment",
      "h2": "What happens at a jaw assessment?",
      "html": "<p>Tell us when the pain began and whether eating, speaking or waking in the morning brings it on. We will ask about locking, recent dental work and any treatment you have already tried. Bring relevant reports and let us know if you use a dental splint or nightguard.</p>\n<p>Your physiotherapist checks how the jaw opens and closes, the movements that reproduce your symptoms and tenderness around the jaw muscles. Neck movement may also be assessed where your symptoms suggest it is relevant. We explain the examination and ask for your consent before proceeding.</p>\n<p>Chris lists TMJ physiotherapy training among his <a href=\"team.html#chris-bio\">professional training</a>. The findings guide a discussion about care, including whether you need a dentist or doctor to investigate another possible cause.</p>",
      "tone": "alt"
    },
    {
      "t": "prose",
      "id": "treatment",
      "h2": "Physiotherapy, dental care and self-management",
      "html": "<p>Depending on the assessment, physiotherapy may include gentle jaw exercises, hands-on treatment of relevant muscles and advice about activities that aggravate symptoms. The aim is to make jaw movement and everyday tasks more manageable. Treatment does not involve permanently changing your bite.</p>\n<p>During a painful period, smaller bites and temporarily choosing easier-to-chew foods may be useful. Avoid repeatedly forcing your jaw open to test it. Exercises should be chosen for your symptoms; a movement that suits one jaw problem may not suit another.</p>\n<p>A dentist can assess tooth pain, damage from grinding and whether a splint is appropriate. Physiotherapy does not replace that care or guarantee that night-time grinding will stop. With your permission, relevant findings can be shared with your treating practitioner.</p>\n<p>At review appointments, useful changes to discuss include how comfortably you can eat, how far you can open and whether symptoms are disturbing sleep. Recovery varies, so we do not promise a fixed number of sessions.</p>",
      "tone": ""
    },
    {
      "t": "prose",
      "id": "urgent-care",
      "h2": "Jaw symptoms that need urgent care",
      "html": "<p>If your jaw becomes stuck open or closed, or you cannot eat or drink, seek urgent dental or medical assessment. Facial swelling with fever, significant trauma or rapidly worsening pain also needs prompt assessment.</p>\n<p><b>Call 000 for jaw pain accompanied by chest pressure, breathlessness, sweating or feeling faint.</b> These may be signs of a heart attack. Difficulty breathing or swallowing with facial swelling is also an emergency.</p>",
      "tone": "alt"
    },
    {
      "t": "faq",
      "h2": "TMJ & jaw pain FAQs",
      "items": [
        {
          "q": "Should I see a physio or a dentist for jaw pain?",
          "a": "Toothache, gum problems and concerns about a splint belong with a dentist. A physiotherapist can assess painful jaw movement and associated muscle symptoms. If the cause is unclear, a dentist or doctor may need to rule out other conditions; some people benefit from coordinated care."
        },
        {
          "q": "Does a clicking jaw need treatment?",
          "a": "Painless clicking with normal movement usually does not. Pain, catching or reduced opening is worth an assessment. A jaw that becomes locked needs urgent advice rather than repeated attempts to force it open."
        },
        {
          "q": "Can TMJ problems cause headaches?",
          "a": "Some jaw disorders are associated with headaches, particularly around the temples. A headache needs its own assessment because there are many other causes. Our <a href=\"vertigo-headaches.html\">headache and vestibular page</a> explains the scope of physiotherapy for headaches."
        },
        {
          "q": "Can physiotherapy stop teeth grinding?",
          "a": "Physiotherapy may address associated muscle pain and movement difficulties, but it cannot promise to stop sleep grinding. Speak with a dentist about protecting your teeth and assessing dental causes."
        },
        {
          "q": "Do I need a referral for a jaw appointment?",
          "a": "You can book a private physiotherapy appointment directly. Tell us it is for jaw symptoms when booking. Referral requirements for funded appointments are explained on our <a href=\"fees-and-rebates.html\">fees and rebates page</a>."
        },
        {
          "q": "Will I need treatment inside my mouth?",
          "a": "That depends on the assessment and the options discussed with you. Ask the physiotherapist to explain any proposed examination or treatment before you agree. You can decline a technique or ask to stop at any time."
        }
      ]
    },
    {
      "t": "prose",
      "id": "sources",
      "h2": "Further reading",
      "html": "<ul><li><a href=\"https://www.nidcr.nih.gov/health-info/tmd\" target=\"_blank\" rel=\"noopener\">NIDCR: temporomandibular disorders</a></li><li><a href=\"https://www.nhs.uk/conditions/temporomandibular-disorder-tmd/\" target=\"_blank\" rel=\"noopener\">NHS: temporomandibular disorder</a></li><li><a href=\"https://www.healthdirect.gov.au/angina\" target=\"_blank\" rel=\"noopener\">Healthdirect: angina and urgent symptoms</a></li></ul>",
      "tone": ""
    },
    {
      "t": "related",
      "h2": "Related care",
      "items": [
        "neck-back-pain",
        "vertigo-headaches",
        "chronic-pain"
      ]
    },
    {
      "t": "final",
      "h2": "Book a jaw assessment in Dapto",
      "p": "Appointments are at Functional Physiotherapy, inside Dapto Medical Professionals. When booking, mention jaw pain or restricted opening so we know what you need assessed.",
      "cta": "Book an appointment"
    }
  ]
});

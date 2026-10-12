import { register } from '../lib.mjs';

// Draft for Chris. Primary intent: physio for the condition, with Dapto context.
export default register({
  "slug": "knee-pain",
  "group": "conditions",
  "groupLabel": "Condition",
  "navActive": "services",
  "crumb": "Knee pain",
  "crumbParent": "services",
  "order": 23,
  "card": {
    "name": "Knee pain",
    "blurb": "Knee assessment for pain on stairs, swelling, tendon problems, arthritis and injuries."
  },
  "title": "Physio for Knee Pain in Dapto | Functional Physio",
  "metaDesc": "Physio for knee pain in Dapto, including kneecap pain, tendon problems, arthritis and injuries. Find out about assessment and rehabilitation.",
  "eyebrow": "Knee pain",
  "h1": "Physiotherapy for knee pain in Dapto",
  "lead": "Physiotherapy for knee pain can address difficulties with stairs, walking, work or sport. We assess your knee at our Dapto clinic and plan rehabilitation around the cause of your symptoms and the activities you need to manage.",
  "schema": {
    "name": "Physiotherapy for knee pain",
    "serviceType": "Physiotherapy for knee pain",
    "description": "Physio for knee pain in Dapto, including kneecap pain, tendon problems, arthritis and injuries. Find out about assessment and rehabilitation."
  },
  "blocks": [
    {
      "t": "hero",
      "img": "assets/knee-treatment.jpg",
      "alt": "Physiotherapist assessing a patient’s knee movement",
      "trust": [
        "One-on-one appointments",
        "Dapto clinic"
      ]
    },
    {
      "t": "crumbs"
    },
    {
      "t": "toc",
      "items": [
        [
          "knee-problems",
          "Which knee problem are you dealing with?"
        ],
        [
          "assessment",
          "Swelling, movement and the tasks that hurt"
        ],
        [
          "treatment",
          "Exercise for knee pain and arthritis"
        ],
        [
          "urgent-care",
          "A knee that needs urgent assessment"
        ],
        [
          "faq",
          "FAQs"
        ]
      ]
    },
    {
      "t": "prose",
      "id": "knee-problems",
      "h2": "Which knee problem are you dealing with?",
      "html": "<p>A knee can become sore after a twist, a change in activity or without a clear injury. Pain around the kneecap, a tendon problem, osteoarthritis and a ligament injury are not treated as the same condition.</p>\n<ul><li><b>Kneecap or patellofemoral pain:</b> often noticed with stairs, squatting or running.</li>\n<li><b>Patellar tendon symptoms:</b> pain near the tendon below the kneecap, particularly with loading activities.</li>\n<li><b>Meniscus or ligament injuries:</b> may follow a twist and can involve swelling, catching or instability.</li>\n<li><b>Osteoarthritis:</b> may cause pain and stiffness with changes in activity tolerance.</li></ul>\n<p>These are examples to discuss at assessment, not a way to diagnose yourself. If you have an ACL diagnosis or are recovering from reconstruction, our <a href=\"acl-injuries.html\">ACL rehabilitation page</a> covers that pathway in more detail.</p>",
      "tone": ""
    },
    {
      "t": "prose",
      "id": "assessment",
      "h2": "Swelling, movement and the tasks that hurt",
      "html": "<p>We ask how the symptoms began, whether the knee swelled and whether it locks or gives way. Information about previous injuries and operations helps us decide which tests are appropriate.</p>\n<p>The examination may include knee movement, strength and a task such as walking or a controlled step. We choose tests around your symptoms; there is no need to push through a movement you cannot manage safely.</p>\n<p>If the findings suggest a fracture or a significant injury needing medical review, that takes priority. Otherwise, we explain the likely problem and agree on an initial rehabilitation plan. Existing scans can be useful, but they do not replace the examination.</p>",
      "tone": "alt"
    },
    {
      "t": "prose",
      "id": "treatment",
      "h2": "Exercise for knee pain and arthritis",
      "html": "<p>Rehabilitation may include strengthening around the knee and hip, restoring movement and adjusting the amount of activity that brings on symptoms. The exercise starting point for a swollen knee will differ from the later demands of running or heavy work.</p>\n<p>For knee osteoarthritis, tailored strengthening and general exercise are core treatments. Some discomfort can occur when exercise starts. We discuss how much is acceptable for you and how to adjust the plan if symptoms become difficult to manage. Hands-on care, if used, supports the exercise plan.</p>\n<p>We can track changes using a task that matters to you, such as stairs or getting up from a chair. When your aim is sport, rehabilitation progresses towards the running, jumping or direction changes involved. Returning safely depends on the injury and demonstrated capacity, rather than a date alone.</p>",
      "tone": ""
    },
    {
      "t": "prose",
      "id": "urgent-care",
      "h2": "A knee that needs urgent assessment",
      "html": "<p>Get urgent medical advice if you cannot bear weight, the knee is badly swollen or deformed, or it locks and will not straighten. A knee that repeatedly gives way or painfully catches also needs prompt assessment.</p>\n<p>A hot, red knee with fever or feeling unwell may indicate infection and needs urgent medical attention. Do not wait for a routine physiotherapy booking.</p>",
      "tone": "alt"
    },
    {
      "t": "faq",
      "h2": "Knee pain FAQs",
      "items": [
        {
          "q": "Can I see you for knee pain if I do not play sport?",
          "a": "Yes. Knee appointments also cover difficulties with walking, household tasks, work and arthritis-related symptoms. Describe the activity you want to improve when you come in."
        },
        {
          "q": "Will I need surgery for a meniscus tear?",
          "a": "A meniscus diagnosis does not automatically mean surgery. The injury pattern and symptoms guide the decision, including whether the knee is locked or unstable. Your doctor or surgeon may need to assess significant mechanical symptoms."
        },
        {
          "q": "Is exercise safe with knee osteoarthritis?",
          "a": "Appropriately chosen exercise is recommended for knee osteoarthritis. Start at a level matched to your capacity and discuss how to manage the response. Sudden major swelling, fever or a new injury should be assessed separately."
        },
        {
          "q": "Does knee clicking mean something is damaged?",
          "a": "Painless clicking can be normal. Clicking with pain, swelling, locking or giving way needs assessment. The sound alone cannot tell us which structure is involved."
        },
        {
          "q": "Can I keep running with knee pain?",
          "a": "It depends on the cause and how symptoms respond during and after a run. We may adjust distance, frequency or other training while you rehabilitate. The <a href=\"running-injuries.html\">running injuries page</a> explains this process in more detail."
        },
        {
          "q": "Can you help after knee surgery?",
          "a": "Yes, rehabilitation can be planned around your procedure and the surgeon’s instructions. Bring the operation details and restrictions. For ACL reconstruction, use our dedicated <a href=\"acl-injuries.html\">ACL page</a>; other procedures need their own assessment."
        }
      ]
    },
    {
      "t": "prose",
      "id": "sources",
      "h2": "Further reading",
      "html": "<ul><li><a href=\"https://www.nhs.uk/symptoms/knee-pain/\" target=\"_blank\" rel=\"noopener\">NHS: knee pain</a></li><li><a href=\"https://www.nice.org.uk/guidance/ng226/chapter/Recommendations\" target=\"_blank\" rel=\"noopener\">NICE: osteoarthritis assessment and management</a></li><li><a href=\"https://www.sahealth.sa.gov.au/wps/wcm/connect/aa87fadb-4a8b-4a6f-87de-5dca8e2cfe5f/CIS02133%2B-%2BKNEE%2B-%2BACUTE%2BKNEE%2BINJURY.pdf?MOD=AJPERES\" target=\"_blank\" rel=\"noopener\">SA Health: acute knee injury</a></li><li><a href=\"https://www.orthoinfo.org/diseases--conditions/meniscus-tears/\" target=\"_blank\" rel=\"noopener\">AAOS: meniscus tears</a></li></ul>",
      "tone": ""
    },
    {
      "t": "related",
      "h2": "Related care",
      "items": [
        "acl-injuries",
        "running-injuries",
        "hip-groin-pain"
      ]
    },
    {
      "t": "final",
      "h2": "Book a knee appointment",
      "p": "Bring shorts or clothing that lets us examine the knee, plus any reports or post-operative instructions. Appointments are available at our Dapto clinic.",
      "cta": "Book an appointment"
    }
  ]
});

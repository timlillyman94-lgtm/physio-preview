import { register } from '../lib.mjs';

// Draft for Chris. Primary intent: physio for the condition, with Dapto context.
export default register({
  "slug": "chronic-pain",
  "group": "conditions",
  "groupLabel": "Condition",
  "navActive": "services",
  "crumb": "Persistent & chronic pain",
  "crumbParent": "services",
  "order": 21,
  "card": {
    "name": "Persistent & chronic pain",
    "blurb": "Physiotherapy for ongoing musculoskeletal pain, with practical activity goals and a plan for flare-ups."
  },
  "title": "Physio for Chronic Pain in Dapto | Functional Physio",
  "metaDesc": "Physio for chronic pain in Dapto. Explore assessment, activity pacing, exercise and flare-up management for persistent musculoskeletal pain.",
  "eyebrow": "Persistent & chronic pain",
  "h1": "Physiotherapy for chronic pain in Dapto",
  "lead": "For persistent musculoskeletal pain, physiotherapy can help you work on movement and daily activities at a manageable level. At our Dapto clinic, we assess your difficulties and plan care around your goals and other treatment.",
  "schema": {
    "name": "Physiotherapy for chronic pain",
    "serviceType": "Physiotherapy for chronic pain",
    "description": "Physio for chronic pain in Dapto. Explore assessment, activity pacing, exercise and flare-up management for persistent musculoskeletal pain."
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
          "persistent-pain",
          "Pain that continues beyond three months"
        ],
        [
          "first-visit",
          "What would you like to be able to do?"
        ],
        [
          "activity",
          "Building activity at a manageable level"
        ],
        [
          "flare-ups",
          "Planning for a flare-up"
        ],
        [
          "faq",
          "FAQs"
        ]
      ]
    },
    {
      "t": "prose",
      "id": "persistent-pain",
      "h2": "Pain that continues beyond three months",
      "html": "<p>Chronic or persistent pain generally means pain lasting longer than three months. It may accompany an ongoing condition or continue after an injury. Its intensity can change from day to day, and several factors can influence it, including sleep, stress and how the nervous system processes pain.</p>\n<p>Your pain is real. Understanding these influences helps inform treatment; it does not mean that symptoms should be dismissed. New or changing symptoms still deserve assessment.</p>\n<p>This service focuses on musculoskeletal pain and its effect on movement and daily activity. It is part of a broader approach to care where needed. Your GP can investigate medical causes, review medicines or arrange referral to a pain service.</p>",
      "tone": ""
    },
    {
      "t": "prose",
      "id": "first-visit",
      "h2": "What would you like to be able to do?",
      "html": "<p>You might want to manage a work shift, sit through a meal or walk to the shops more comfortably. We start with the activities that are difficult for you, then look at what currently helps and what you have already tried.</p>\n<p>Bring relevant reports and a list of current treatments. There is no need to demonstrate how much pain you can tolerate. We can adjust the physical assessment to your capacity on the day and discuss anything you are worried about before testing it.</p>\n<p>We may check movement and strength, observe a task you find difficult, and ask how symptoms change afterwards. This provides a starting point for deciding what to work on and how to review progress.</p>",
      "tone": "alt"
    },
    {
      "t": "prose",
      "id": "activity",
      "h2": "Building activity at a manageable level",
      "html": "<p>Pacing means planning an amount of activity you can manage, taking breaks where useful and reviewing the response. For someone whose symptoms flare after a long household task, an initial plan might involve shorter periods spread through the day. The amount and progression need to suit the person.</p>\n<p>Exercise may involve walking, movement practice or strengthening. We discuss the expected response, what would be too much and when to contact us. The starting point should account for your health conditions as well as pain.</p>\n<p>Progress is reviewed against the things you want to do. Pain levels matter, and so do changes such as completing a task more consistently or needing fewer interruptions. If an approach is not helping, the plan needs review rather than simply repeating it indefinitely.</p>",
      "tone": ""
    },
    {
      "t": "prose",
      "id": "flare-ups",
      "h2": "Planning for a flare-up",
      "html": "<p>Agreeing on a plan in advance can make a familiar flare easier to manage. It may include adjusting activities, using agreed symptom-management strategies and knowing when to seek advice. Medication changes belong with your prescriber.</p>\n<p>A flare does not automatically mean a new injury. However, a new pattern of pain, worsening weakness or feeling systemically unwell needs medical assessment. <b>Seek emergency care for new bladder or bowel dysfunction with back pain, numbness around the groin or saddle area, or rapidly worsening leg weakness.</b></p>\n<p>Some people also need support with sleep, mental health or other medical conditions. We can discuss involving your GP and other treating professionals, with your consent. Functional Physiotherapy is a physiotherapy clinic; this page does not describe a multidisciplinary pain program.</p>",
      "tone": "alt"
    },
    {
      "t": "faq",
      "h2": "Persistent & chronic pain FAQs",
      "items": [
        {
          "q": "Is chronic pain the same as permanent damage?",
          "a": "No. The duration or intensity of pain alone cannot tell us how much tissue damage is present. Assessment considers your health history, symptoms and function, and whether further medical investigation is needed."
        },
        {
          "q": "Can I exercise when I still have pain?",
          "a": "Often you can, with an appropriate starting level and advice about your response. The type and amount depend on the cause of pain and your health. Severe, new or changing symptoms should be assessed before continuing."
        },
        {
          "q": "What if physiotherapy has not helped before?",
          "a": "Tell us what you tried, for how long and what happened. That helps us decide whether a different approach is reasonable or another service would be more appropriate. We cannot promise that further physiotherapy will help everyone."
        },
        {
          "q": "Is this a pain specialist clinic?",
          "a": "This is physiotherapy for persistent musculoskeletal pain. We do not provide a medical pain specialist service, prescribe medicines or advertise a multidisciplinary pain program. Your GP can help arrange those services if required."
        },
        {
          "q": "Do I need scans before starting?",
          "a": "Bring any existing reports. New imaging is not automatically necessary because pain has lasted a long time. Your history and examination help determine whether medical review or further investigation is appropriate."
        },
        {
          "q": "How will we know whether treatment is helping?",
          "a": "We agree on activities to track, such as walking tolerance or managing a work task, and review them alongside symptoms. If progress is limited, we discuss changing the approach, further assessment or other care options."
        }
      ]
    },
    {
      "t": "prose",
      "id": "sources",
      "h2": "Further reading",
      "html": "<ul><li><a href=\"https://www.healthdirect.gov.au/chronic-pain\" target=\"_blank\" rel=\"noopener\">Healthdirect: chronic pain</a></li><li><a href=\"https://www.healthdirect.gov.au/options-for-managing-chronic-pain\" target=\"_blank\" rel=\"noopener\">Healthdirect: options for managing chronic pain</a></li><li><a href=\"https://aci.health.nsw.gov.au/chronic-pain/brain-injury/understanding-pain/pacing\" target=\"_blank\" rel=\"noopener\">NSW Agency for Clinical Innovation: pacing</a></li></ul>",
      "tone": ""
    },
    {
      "t": "related",
      "h2": "Related care",
      "items": [
        "general-physiotherapy",
        "neck-back-pain",
        "tmj-jaw-pain"
      ]
    },
    {
      "t": "final",
      "h2": "Discuss persistent pain with a physiotherapist",
      "p": "Call the Dapto clinic if you would like to explain your situation before booking. Bring details of your current care so the appointment can build on what is already known.",
      "cta": "Book an appointment"
    }
  ]
});

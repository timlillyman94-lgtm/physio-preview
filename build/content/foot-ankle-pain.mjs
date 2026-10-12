import { register } from '../lib.mjs';

// Draft for Chris. Primary intent: physio for the condition, with Dapto context.
export default register({
  "slug": "foot-ankle-pain",
  "group": "conditions",
  "groupLabel": "Condition",
  "navActive": "services",
  "crumb": "Foot & ankle pain",
  "crumbParent": "services",
  "order": 25,
  "card": {
    "name": "Foot & ankle pain",
    "blurb": "Rehabilitation for ankle sprains, heel pain and tendon symptoms affecting time on your feet."
  },
  "title": "Physio for Foot & Ankle Pain in Dapto | Functional Physio",
  "metaDesc": "Physio for foot and ankle pain in Dapto. Rehabilitation for ankle sprains, heel pain and Achilles symptoms affecting walking, standing or sport.",
  "eyebrow": "Foot & ankle pain",
  "h1": "Physiotherapy for foot and ankle pain in Dapto",
  "lead": "We provide physiotherapy for foot and ankle pain in Dapto, including ankle sprains, heel pain and tendon symptoms. Your assessment considers the demands of standing, walking, work or sport so rehabilitation fits what you need to do.",
  "schema": {
    "name": "Physiotherapy for foot and ankle pain",
    "serviceType": "Physiotherapy for foot and ankle pain",
    "description": "Physio for foot and ankle pain in Dapto. Rehabilitation for ankle sprains, heel pain and Achilles symptoms affecting walking, standing or sport."
  },
  "blocks": [
    {
      "t": "hero",
      "img": "assets/ankle-taping.jpg",
      "alt": "Physiotherapist applying supportive tape around a patient’s ankle",
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
          "symptoms",
          "From a rolled ankle to persistent heel pain"
        ],
        [
          "assessment",
          "What we check before increasing activity"
        ],
        [
          "rehabilitation",
          "Rehabilitation for standing, walking and changing direction"
        ],
        [
          "urgent-care",
          "Get an injury checked promptly"
        ],
        [
          "faq",
          "FAQs"
        ]
      ]
    },
    {
      "t": "prose",
      "id": "symptoms",
      "h2": "From a rolled ankle to persistent heel pain",
      "html": "<p>Some foot and ankle problems follow an obvious injury; others develop as activity or time spent standing changes. Useful details include where the pain is, whether it is worse on the first steps after rest, and how it behaves through the day.</p>\n<ul><li><b>Ankle sprains:</b> pain and swelling after rolling the ankle, sometimes followed by a feeling of instability.</li>\n<li><b>Plantar heel pain:</b> pain beneath the heel, often noticed with the first steps after rest. Plantar fasciitis is one term used for this problem.</li>\n<li><b>Achilles symptoms:</b> pain or stiffness around the tendon at the back of the ankle, which needs to be distinguished from an acute rupture.</li>\n<li><b>Other foot pain:</b> joint, tendon, nerve or bone problems may need different care.</li></ul>\n<p>These patterns guide questions during an assessment. They do not confirm a diagnosis or rule out a fracture.</p>",
      "tone": ""
    },
    {
      "t": "prose",
      "id": "assessment",
      "h2": "What we check before increasing activity",
      "html": "<p>We ask about the injury or onset, swelling, footwear and changes in walking, work or exercise. Let us know about diabetes, reduced sensation or circulation problems, as these can change the advice you need.</p>\n<p>Assessment may include ankle movement, walking, balance and calf strength. More demanding tasks are introduced only when appropriate. If the findings suggest a bone injury or an Achilles rupture, urgent medical assessment takes priority.</p>\n<p>Bring the shoes you use most and any existing reports. They help us understand the activities the foot needs to tolerate. We discuss footwear in that context rather than assuming one shoe type suits every problem.</p>",
      "tone": "alt"
    },
    {
      "t": "prose",
      "id": "rehabilitation",
      "h2": "Rehabilitation for standing, walking and changing direction",
      "html": "<p>After an ankle sprain, rehabilitation may work on movement, strength and balance before progressing to uneven ground or sport. A reduction in swelling does not by itself tell us that the ankle is ready for every activity.</p>\n<p>For heel or tendon symptoms, the plan may include exercise and a temporary adjustment to the amount of standing, walking or training. We explain what response to look for and how to progress. Taping or other supports may be considered as part of the plan, depending on the assessment.</p>\n<p>Your goals determine the later stages. A person returning to a standing job needs to build tolerance across a shift. Someone returning to field sport may also need to practise faster movement and changes of direction. Runners can find more detail about training adjustments on our <a href=\"running-injuries.html\">running injuries page</a>.</p>\n<p>Some problems need medical or podiatry care alongside physiotherapy. We discuss this if skin, nail, footwear or other concerns fall outside what rehabilitation can address.</p>",
      "tone": ""
    },
    {
      "t": "prose",
      "id": "urgent-care",
      "h2": "Get an injury checked promptly",
      "html": "<p>Seek urgent medical assessment if your foot or ankle is deformed, you cannot walk after an injury, or there is severe pain, marked swelling or new loss of feeling. A hot, red foot with fever also needs urgent care.</p>\n<p>A sudden pop at the back of the ankle with difficulty pushing off or standing on tiptoe may indicate an Achilles rupture. Arrange urgent assessment and avoid testing it repeatedly.</p>\n<p>If you have diabetes, seek prompt medical advice about a new foot wound, redness, swelling or pain. Skin and circulation problems need attention before an exercise plan.</p>",
      "tone": "alt"
    },
    {
      "t": "faq",
      "h2": "Foot & ankle pain FAQs",
      "items": [
        {
          "q": "Do I need an X-ray after rolling my ankle?",
          "a": "An X-ray may be needed when the injury raises concern about a fracture. An examination helps determine that. Inability to walk, deformity or severe symptoms should be checked urgently rather than waiting for a routine appointment."
        },
        {
          "q": "Why is my heel sore on the first steps in the morning?",
          "a": "That pattern can occur with plantar heel pain, but it does not prove the diagnosis. The exact location, examination and response to activity help distinguish it from other causes."
        },
        {
          "q": "Can physiotherapy help if my ankle keeps rolling?",
          "a": "Assessment can identify movement, strength or balance difficulties that rehabilitation may address. Repeated giving way can also need further investigation. The plan should match the terrain, work or sport you need to return to."
        },
        {
          "q": "Do I need orthotics for foot pain?",
          "a": "Not everyone does. Footwear or an insert may be worth considering for some problems, alongside other care. If you need a detailed orthotic or foot-health assessment, we may suggest a podiatrist."
        },
        {
          "q": "Should I stretch a painful Achilles tendon?",
          "a": "A painful tendon does not automatically need more stretching. Advice depends on the location and cause of symptoms. A sudden pop or loss of push-off strength needs urgent assessment for possible rupture."
        },
        {
          "q": "Can I book even if the pain is from standing at work?",
          "a": "Yes. Foot and ankle physiotherapy is not limited to sports injuries. Bring your usual work shoes and describe your shift, standing time and the tasks that make symptoms worse."
        }
      ]
    },
    {
      "t": "prose",
      "id": "sources",
      "h2": "Further reading",
      "html": "<ul><li><a href=\"https://www.healthdirect.gov.au/ankle-pain\" target=\"_blank\" rel=\"noopener\">Healthdirect: ankle pain</a></li><li><a href=\"https://www.nhs.uk/symptoms/foot-pain/ankle-pain/\" target=\"_blank\" rel=\"noopener\">NHS: ankle pain and urgent symptoms</a></li><li><a href=\"https://sma.org.au/wp-content/uploads/2025/08/Plantar-Fasciitis.pdf\" target=\"_blank\" rel=\"noopener\">Sports Medicine Australia: plantar fasciitis</a></li><li><a href=\"https://norfolkandwaveneycommunityhealth.nhs.uk/msk/self-help/foot-and-ankle/achilles-tendinopathy/\" target=\"_blank\" rel=\"noopener\">NHS: Achilles tendinopathy and signs of rupture</a></li></ul>",
      "tone": ""
    },
    {
      "t": "related",
      "h2": "Related care",
      "items": [
        "running-injuries",
        "sports-injury",
        "knee-pain"
      ]
    },
    {
      "t": "final",
      "h2": "Book a foot or ankle assessment",
      "p": "Bring the footwear you normally use and any injury reports. We can discuss the demands of your job or exercise routine at your Dapto appointment.",
      "cta": "Book an appointment"
    }
  ]
});

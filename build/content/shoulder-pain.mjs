import { register } from '../lib.mjs';

// Draft for Chris. Primary intent: physio for the condition, with Dapto context.
export default register({
  "slug": "shoulder-pain",
  "group": "conditions",
  "groupLabel": "Condition",
  "navActive": "services",
  "crumb": "Shoulder pain",
  "crumbParent": "services",
  "order": 22,
  "card": {
    "name": "Shoulder pain",
    "blurb": "Assessment and rehabilitation for painful lifting, shoulder stiffness and difficulty reaching."
  },
  "title": "Physio for Shoulder Pain in Dapto | Functional Physio",
  "metaDesc": "Physio for shoulder pain in Dapto. Assessment and rehabilitation for rotator cuff problems, stiffness and difficulty lifting, reaching or sleeping.",
  "eyebrow": "Shoulder pain",
  "h1": "Physiotherapy for shoulder pain in Dapto",
  "lead": "Our Dapto clinic provides physiotherapy for shoulder pain affecting lifting, reaching or sleep. Assessment guides the choice of exercises, activity changes and hands-on care for your particular shoulder problem.",
  "schema": {
    "name": "Physiotherapy for shoulder pain",
    "serviceType": "Physiotherapy for shoulder pain",
    "description": "Physio for shoulder pain in Dapto. Assessment and rehabilitation for rotator cuff problems, stiffness and difficulty lifting, reaching or sleeping."
  },
  "blocks": [
    {
      "t": "hero",
      "img": "assets/shoulder-exercise.jpg",
      "alt": "Physiotherapist guiding a shoulder exercise with a hand weight",
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
          "Pain, stiffness or a shoulder that feels unstable"
        ],
        [
          "assessment",
          "Show us the movement that is difficult"
        ],
        [
          "rehabilitation",
          "Rebuilding movement and lifting capacity"
        ],
        [
          "urgent-care",
          "When shoulder pain needs medical attention"
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
      "h2": "Pain, stiffness or a shoulder that feels unstable",
      "html": "<p>Shoulder symptoms can begin after a fall or lifting incident, or develop gradually. Rotator cuff-related pain, frozen shoulder, arthritis and instability are different problems, so they need different advice.</p>\n<p>The rotator cuff is a group of muscles and tendons involved in moving and supporting the shoulder. Pain around it can make reaching or loading the arm difficult. Frozen shoulder typically involves a marked loss of movement as well as pain. Instability can feel as though the shoulder slips or may give way.</p>\n<p>The location of pain alone does not establish the diagnosis. The neck can also contribute to arm symptoms, particularly when tingling or numbness is present. We consider these possibilities during assessment.</p>",
      "tone": ""
    },
    {
      "t": "prose",
      "id": "assessment",
      "h2": "Show us the movement that is difficult",
      "html": "<p>Reaching a shelf, putting on a shirt and lifting equipment place different demands on the shoulder. Tell us which tasks hurt, whether your strength has changed and how symptoms behave overnight.</p>\n<p>We compare shoulder movement and strength and, where appropriate, check neck movement or nerve-related signs. After an injury, the history helps determine whether you need medical assessment or imaging before rehabilitation.</p>\n<p>Bring any scan reports or surgical instructions you already have. You do not need to arrange a scan simply to book an assessment. Test results are considered alongside your symptoms and what you can do.</p>",
      "tone": "alt"
    },
    {
      "t": "prose",
      "id": "rehabilitation",
      "h2": "Rebuilding movement and lifting capacity",
      "html": "<p>Your plan may begin with ways to keep using the arm within a manageable range. Adjusting the height of a task or reducing a lifting load can make it possible to stay active while the shoulder is sore. We will discuss which changes are relevant to your work or home routine.</p>\n<p>Exercises may focus on movement, shoulder strength or the specific demands of your activity. We show you the exercises, check how they feel and explain how to judge the response between visits. Hands-on treatment may be used alongside rehabilitation where appropriate.</p>\n<p>Returning to heavy work, swimming or gym training requires more than being comfortable at rest. Later sessions can assess the movements and loads involved, then guide a staged return. For a sporting injury, see our <a href=\"sports-injury.html\">sports rehabilitation page</a>.</p>\n<p>If symptoms remain difficult to manage or the diagnosis is uncertain, we discuss medical review. Physiotherapy does not replace a surgeon's restrictions after an operation or a dislocation requiring urgent care.</p>",
      "tone": ""
    },
    {
      "t": "prose",
      "id": "urgent-care",
      "h2": "When shoulder pain needs medical attention",
      "html": "<p>Seek urgent medical assessment for a shoulder that looks out of shape, severe pain after a fall, inability to move the arm, persistent loss of feeling, or a hot swollen joint with fever. A sudden loss of strength after injury also needs prompt review.</p>\n<p><b>Call 000 if shoulder or arm pain occurs with chest pressure, shortness of breath, sweating or feeling faint.</b> Do not assume these symptoms are a shoulder strain.</p>",
      "tone": "alt"
    },
    {
      "t": "faq",
      "h2": "Shoulder pain FAQs",
      "items": [
        {
          "q": "Do I need an ultrasound or MRI for shoulder pain?",
          "a": "Not automatically. The history and examination help determine whether imaging is likely to change management. Trauma, substantial weakness or uncertainty about the cause may make further investigation appropriate."
        },
        {
          "q": "Can physiotherapy help a frozen shoulder?",
          "a": "Physiotherapy can help guide movement and symptom management. The amount of stiffness and irritability affects what is appropriate. Recovery may be prolonged, and treatment should be reviewed if it is aggravating symptoms or not helping."
        },
        {
          "q": "Should I stop using my sore shoulder?",
          "a": "Complete rest is usually unnecessary for gradual-onset pain, but some activities may need adjustment. An acute injury, suspected dislocation or post-operative restriction is different. Get advice before loading the arm if you are unsure."
        },
        {
          "q": "Why does my shoulder hurt at night?",
          "a": "Several shoulder conditions can disturb sleep, so night pain alone does not identify the cause. Tell us whether changing position helps and whether symptoms are worsening. Persistent unexplained pain or feeling unwell warrants medical review."
        },
        {
          "q": "Can a rotator cuff tear be managed without surgery?",
          "a": "Some rotator cuff problems can be managed with rehabilitation, while others need surgical advice. The type of injury, strength loss and your activity demands matter. Sudden weakness after trauma should be medically assessed promptly."
        },
        {
          "q": "Can you help me return to lifting at work?",
          "a": "Assessment can include the tasks and loads your job involves. We can plan exercises and staged increases around those demands. If this is a work-related injury, our <a href=\"workcover.html\">WorkCover page</a> explains the funding pathway."
        }
      ]
    },
    {
      "t": "prose",
      "id": "sources",
      "h2": "Further reading",
      "html": "<ul><li><a href=\"https://www.nhs.uk/symptoms/shoulder-pain/\" target=\"_blank\" rel=\"noopener\">NHS: shoulder pain</a></li><li><a href=\"https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/Shoulder-pain\" target=\"_blank\" rel=\"noopener\">Better Health Channel: shoulder pain</a></li><li><a href=\"https://www.orthoinfo.org/diseases--conditions/rotator-cuff-tears/\" target=\"_blank\" rel=\"noopener\">AAOS: rotator cuff tears</a></li></ul>",
      "tone": ""
    },
    {
      "t": "related",
      "h2": "Related care",
      "items": [
        "neck-back-pain",
        "sports-injury",
        "workcover"
      ]
    },
    {
      "t": "final",
      "h2": "Have your shoulder assessed in Dapto",
      "p": "Wear a top that allows your shoulder to be examined and bring relevant reports. You can book privately without a GP referral; see fees and rebates for funded appointments.",
      "cta": "Book an appointment"
    }
  ]
});

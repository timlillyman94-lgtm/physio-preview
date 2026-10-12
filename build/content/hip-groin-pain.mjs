import { register } from '../lib.mjs';

// Draft for Chris. Primary intent: physio for the condition, with Dapto context.
export default register({
  "slug": "hip-groin-pain",
  "group": "conditions",
  "groupLabel": "Condition",
  "navActive": "services",
  "crumb": "Hip & groin pain",
  "crumbParent": "services",
  "order": 24,
  "card": {
    "name": "Hip & groin pain",
    "blurb": "Assessment of hip and groin symptoms affecting walking, sitting, exercise or sleep."
  },
  "title": "Physio for Hip & Groin Pain in Dapto | Functional Physio",
  "metaDesc": "Physio for hip and groin pain in Dapto. Assessment and rehabilitation for joint symptoms, muscle injuries and outer-hip pain, with referral advice.",
  "eyebrow": "Hip & groin pain",
  "h1": "Physiotherapy for hip and groin pain in Dapto",
  "lead": "Hip and groin physiotherapy at our Dapto clinic includes assessment of painful walking, restricted movement and activity-related symptoms. We explain whether rehabilitation is suitable or whether a medical cause needs investigation first.",
  "schema": {
    "name": "Physiotherapy for hip and groin pain",
    "serviceType": "Physiotherapy for hip and groin pain",
    "description": "Physio for hip and groin pain in Dapto. Assessment and rehabilitation for joint symptoms, muscle injuries and outer-hip pain, with referral advice."
  },
  "blocks": [
    {
      "t": "hero",
      "img": "assets/band-glute.jpg",
      "alt": "Physiotherapist guiding a side-lying hip exercise with a resistance band",
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
          "pain-location",
          "The position of the pain gives us a starting point"
        ],
        [
          "assessment",
          "Assessing walking, strength and hip movement"
        ],
        [
          "rehabilitation",
          "Hip rehabilitation for everyday movement and sport"
        ],
        [
          "urgent-care",
          "Hip and groin symptoms that should not wait"
        ],
        [
          "faq",
          "FAQs"
        ]
      ]
    },
    {
      "t": "prose",
      "id": "pain-location",
      "h2": "The position of the pain gives us a starting point",
      "html": "<p>Pain from the hip joint may be felt in the groin or thigh. Symptoms on the outside of the hip can involve nearby tendons and other soft tissues, often described as greater trochanteric pain syndrome. Lower-back problems can also refer pain into this region.</p>\n<p>A groin strain after kicking or changing direction is different from gradual joint stiffness. We ask about the onset and the movements that provoke symptoms, rather than assigning a diagnosis from location alone.</p>\n<p>Groin pain can also have non-musculoskeletal causes, including a hernia or a testicular problem. A new lump, abdominal symptoms or testicular pain needs medical assessment. Physiotherapy is only appropriate once relevant medical causes have been considered.</p>",
      "tone": ""
    },
    {
      "t": "prose",
      "id": "assessment",
      "h2": "Assessing walking, strength and hip movement",
      "html": "<p>Tell us whether the main difficulty is sitting, getting started after rest, lying on your side or being active. If you play sport, we will ask about recent changes in training and which movements you cannot currently manage.</p>\n<p>Your assessment may include hip movement, walking and muscle strength, with checks of the lower back where relevant. The examination is adjusted if the hip is too painful to load. We explain what the findings suggest and whether you should see your GP or have further investigation.</p>\n<p>Scan terms such as a labral tear or femoroacetabular impingement, often shortened to FAI, need to be considered alongside the examination. A scan label does not provide the whole rehabilitation plan.</p>",
      "tone": "alt"
    },
    {
      "t": "prose",
      "id": "rehabilitation",
      "h2": "Hip rehabilitation for everyday movement and sport",
      "html": "<p>Once the likely cause is established, treatment may involve exercises for hip strength and movement, along with changes to activities or positions that aggravate symptoms. Someone with outer-hip pain at night may need different advice from someone returning to kicking after a groin strain.</p>\n<p>For hip osteoarthritis, exercise is an important part of management. The choice and progression should suit your current ability. We may work on everyday tasks such as rising from a chair, walking further or using stairs, and review how you respond.</p>\n<p>For a sporting muscle injury, later rehabilitation needs to address the demands of the sport. That might mean progressing towards acceleration, direction changes or kicking once earlier activity is manageable. The <a href=\"sports-injury.html\">sports injury page</a> explains our broader return-to-sport approach.</p>\n<p>If you have had hip surgery, the procedure and your surgeon's restrictions guide rehabilitation. Bring those instructions before we introduce new exercises or change weight-bearing activity.</p>",
      "tone": ""
    },
    {
      "t": "prose",
      "id": "urgent-care",
      "h2": "Hip and groin symptoms that should not wait",
      "html": "<p>Seek emergency assessment for severe hip pain after a fall, inability to walk or bear weight, or loss of feeling after an injury. A hot, swollen hip with fever or feeling unwell needs urgent medical care.</p>\n<p><b>Sudden severe testicular pain needs immediate emergency assessment.</b> Severe groin or abdominal pain with a painful lump or vomiting also needs urgent medical attention. Do not treat these symptoms as a muscle strain.</p>\n<p>Gradually worsening hip or groin pain during weight-bearing activity also deserves assessment, particularly if you have recently increased training. Avoid pushing through it while waiting for advice.</p>",
      "tone": "alt"
    },
    {
      "t": "faq",
      "h2": "Hip & groin pain FAQs",
      "items": [
        {
          "q": "Is pain in my groin coming from my hip?",
          "a": "It can be, but muscles and several medical conditions can also cause groin pain. The history and examination help distinguish them. New swelling, a lump or testicular symptoms should be assessed by a doctor."
        },
        {
          "q": "Why does the outside of my hip hurt when I lie on it?",
          "a": "Pressure on sensitive tissues around the outer hip can contribute, including in greater trochanteric pain syndrome. An assessment checks whether that fits your symptoms and whether the hip joint or back may also be involved."
        },
        {
          "q": "Can a physio help with hip arthritis?",
          "a": "Physiotherapy can guide exercise and activity changes for hip osteoarthritis. Goals might include walking or managing stairs more comfortably. If symptoms continue to substantially limit daily life, medical review may be needed to discuss other options."
        },
        {
          "q": "Does a hip labral tear always need surgery?",
          "a": "No single scan finding determines the decision. Symptoms, examination findings, activity needs and response to appropriate rehabilitation all matter. Your treating doctor or surgeon can advise whether further investigation or surgery is indicated."
        },
        {
          "q": "Should I stretch a painful groin?",
          "a": "Do not force stretching simply because the area feels tight. The appropriate movement depends on the cause and stage of the problem. A painful acute injury or unexplained groin pain should be assessed first."
        },
        {
          "q": "Can I come for rehabilitation after a hip replacement?",
          "a": "Contact the clinic with your operation date and any instructions from your treating team. Rehabilitation must follow your procedure-specific precautions, including any restrictions on movement or weight bearing."
        }
      ]
    },
    {
      "t": "prose",
      "id": "sources",
      "h2": "Further reading",
      "html": "<ul><li><a href=\"https://www.healthdirect.gov.au/hip-pain\" target=\"_blank\" rel=\"noopener\">Healthdirect: hip pain</a></li><li><a href=\"https://www.healthdirect.gov.au/groin-pain-or-swelling\" target=\"_blank\" rel=\"noopener\">Healthdirect: groin pain or swelling</a></li><li><a href=\"https://www.healthdirect.gov.au/greater-trochanteric-pain-syndrome-gtps\" target=\"_blank\" rel=\"noopener\">Healthdirect: greater trochanteric pain syndrome</a></li><li><a href=\"https://www.nice.org.uk/guidance/ng226/chapter/Recommendations\" target=\"_blank\" rel=\"noopener\">NICE: osteoarthritis management</a></li><li><a href=\"https://www.orthoinfo.org/treatment/hip-arthroscopy/\" target=\"_blank\" rel=\"noopener\">AAOS: hip arthroscopy and non-surgical care</a></li></ul>",
      "tone": ""
    },
    {
      "t": "related",
      "h2": "Related care",
      "items": [
        "knee-pain",
        "neck-back-pain",
        "sports-injury"
      ]
    },
    {
      "t": "final",
      "h2": "Arrange an assessment for hip or groin pain",
      "p": "Tell us which movements are difficult and whether there has been an injury or operation. Our clinic is inside Dapto Medical Professionals; see Contact for directions.",
      "cta": "Book an appointment"
    }
  ]
});

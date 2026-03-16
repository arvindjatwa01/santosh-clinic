export type Disease = {
  slug: string;
  name: string;
  hindiName: string;
  category: string;
  icon: string;
  shortDesc: string;
  description: string;
  symptoms: string[];
  homeopathyHelps: string[];
  remedies: { name: string; indication: string }[];
  successRate: string;
  treatmentTime: string;
  faqs: { q: string; a: string }[];
};

export const diseases: Disease[] = [
  {
    slug: "psoriasis-treatment-homeopathy-jaipur",
    name: "Psoriasis",
    hindiName: "सोरायसिस",
    category: "Skin",
    icon: "🧴",
    shortDesc: "Chronic skin condition with scaly patches — treated permanently with homeopathy",
    description:
      "Psoriasis ek chronic autoimmune skin condition hai jisme skin cells bahut tezi se grow karti hain, jisse thick, scaly, red patches ban jaate hain. Yeh patches body ke kisi bhi hisse pe aa sakte hain. Homeopathy mein immune system ko naturally regulate karke permanent results milte hain.",
    symptoms: ["Thick red scaly patches", "Itching & burning", "Dry cracked skin", "Joint pain (psoriatic arthritis)", "Nail changes", "Worse in stress or cold weather"],
    homeopathyHelps: [
      "Immune system ko regulate karta hai",
      "Skin cell growth normal karta hai",
      "Itching aur inflammation reduce karta hai",
      "Stress triggers address karta hai",
      "Long-term remission provide karta hai",
    ],
    remedies: [
      { name: "Arsenicum Album", indication: "Burning, dry, scaly patches; anxious patient" },
      { name: "Graphites", indication: "Thick patches with sticky discharge; worse cold" },
      { name: "Sulphur", indication: "Red hot itchy patches; worse bathing" },
      { name: "Petroleum", indication: "Deep cracks; worse winter; rough skin" },
    ],
    successRate: "85%",
    treatmentTime: "6–12 months",
    faqs: [
      { q: "Kya psoriasis permanently theek ho sakta hai?", a: "Homeopathy se long-term remission possible hai. 6–12 months ke treatment mein most patients 70–90% improvement experience karte hain." },
      { q: "Kya treatment ke dauran steroids band karni padti hain?", a: "Nahi, suddenly band mat karein. Dr. Amit gradually taper karne ki guidance denge." },
    ],
  },
  {
    slug: "pcos-pcod-treatment-homeopathy-jaipur",
    name: "PCOS / PCOD",
    hindiName: "पीसीओएस",
    category: "Women's Health",
    icon: "🌸",
    shortDesc: "Hormonal disorder in women — regulated naturally with homeopathy without OCP",
    description:
      "PCOS (Polycystic Ovary Syndrome) ek common hormonal disorder hai jo reproductive age ki mahilaon ko affect karta hai. Irregular periods, weight gain, acne, hair fall aur infertility iske main symptoms hain. Homeopathy mein hormonal balance naturally restore hoti hai.",
    symptoms: ["Irregular/absent periods", "Weight gain", "Acne & oily skin", "Excess hair growth (hirsutism)", "Hair fall", "Infertility", "Mood swings"],
    homeopathyHelps: [
      "Hormonal imbalance naturally correct karta hai",
      "Ovulation regularize karta hai",
      "Cysts reduce karta hai naturally",
      "Weight management mein help karta hai",
      "Fertility improve karta hai",
    ],
    remedies: [
      { name: "Sepia", indication: "Bearing down sensation; indifferent; irregular periods" },
      { name: "Pulsatilla", indication: "Emotional; irregular/scanty periods; craves open air" },
      { name: "Calcarea Carbonica", indication: "Overweight; chilly; profuse sweating" },
      { name: "Lachesis", indication: "Left-sided ovarian cyst; worse tight clothing; talkative" },
    ],
    successRate: "80%",
    treatmentTime: "4–8 months",
    faqs: [
      { q: "Kya OCP (birth control pills) band karke homeopathy le sakte hain?", a: "Haan, lekin suddenly band mat karein. Dr. Amit gradual transition ki guidance denge." },
      { q: "PCOS mein pregnancy possible hai homeopathy se?", a: "Haan, kaafi cases mein natural conception ho chuka hai after homeopathic treatment." },
    ],
  },
  {
    slug: "migraine-treatment-homeopathy-jaipur",
    name: "Migraine",
    hindiName: "माइग्रेन",
    category: "Neurological",
    icon: "🧠",
    shortDesc: "Chronic severe headaches — frequency and intensity permanently reduced",
    description:
      "Migraine sirf ek aam sir dard nahi hai — yeh ek complex neurological condition hai jisme throbbing pain, nausea, aur light sensitivity hoti hai. Homeopathy mein triggers identify karke aur constitutional remedy se migraine attacks ki frequency aur intensity dono kam hoti hain.",
    symptoms: ["One-sided throbbing headache", "Nausea & vomiting", "Light & sound sensitivity", "Aura (visual disturbances)", "Lasts 4–72 hours", "Worse with activity"],
    homeopathyHelps: [
      "Attack frequency 40–60% reduce karta hai",
      "Pain intensity kam karta hai",
      "Triggers (stress, hormones, food) address karta hai",
      "Long-term attack-free periods",
      "No dependency on painkillers",
    ],
    remedies: [
      { name: "Belladonna", indication: "Sudden violent throbbing; right-sided; worse light/noise" },
      { name: "Natrum Muriaticum", indication: "Sun trigger; starts with visual aura; zigzag lines" },
      { name: "Iris Versicolor", indication: "Right-sided with nausea/vomiting; blurred vision" },
      { name: "Gelsemium", indication: "Dull heavy headache; before exams/events; neck stiffness" },
    ],
    successRate: "78%",
    treatmentTime: "3–8 months",
    faqs: [
      { q: "Migraine attack ke waqt kya karein?", a: "Homeopathic acute remedy + dark room + rest. Regular constitutional treatment se attacks hi nahi aayenge." },
      { q: "Kya migraines completely band ho sakte hain?", a: "Majority patients mein 6–12 months mein attacks bahut rare ho jaate hain ya completely band." },
    ],
  },
  {
    slug: "thyroid-treatment-homeopathy-jaipur",
    name: "Thyroid Disorders",
    hindiName: "थायरॉइड",
    category: "Endocrine",
    icon: "🫁",
    shortDesc: "Hypothyroid & hyperthyroid — naturally regulated with homeopathy",
    description:
      "Thyroid disorders mein hypothyroidism (underactive) aur hyperthyroidism (overactive) dono shaamil hain. Weight gain/loss, fatigue, hair fall, mood changes, irregular periods — yeh sab thyroid imbalance ke symptoms hain. Homeopathy thyroid function ko naturally regulate karne mein help karta hai.",
    symptoms: ["Weight gain or loss", "Fatigue & weakness", "Hair fall & dry skin", "Irregular periods", "Mood changes", "Cold/heat intolerance", "Constipation or diarrhea"],
    homeopathyHelps: [
      "Thyroid hormone production regulate karta hai",
      "TSH levels normalize karne mein help",
      "Symptoms like fatigue, hair fall improve",
      "Allopathic dose gradually reduce karna",
      "Overall energy aur immunity boost",
    ],
    remedies: [
      { name: "Calcarea Carbonica", indication: "Hypothyroid; overweight; chilly; fatigue" },
      { name: "Iodum", indication: "Hyperthyroid; thin despite eating; anxious; hot" },
      { name: "Lycopodium", indication: "Thyroid with digestive issues; evening worse; low confidence" },
      { name: "Thyroidinum", indication: "General thyroid support; hormonal imbalance" },
    ],
    successRate: "75%",
    treatmentTime: "6–12 months",
    faqs: [
      { q: "Kya thyroid ki allopathic medicine (thyroxine) band kar sakte hain?", a: "Nahi, suddenly band mat karein. Regular blood tests ke through gradually dose reduce kiya jaata hai." },
      { q: "Hypothyroid mein vajan kam ho sakta hai homeopathy se?", a: "Haan, thyroid function improve hone ke saath weight naturally normalize hoti hai." },
    ],
  },
  {
    slug: "arthritis-joint-pain-homeopathy-jaipur",
    name: "Arthritis & Joint Pain",
    hindiName: "गठिया",
    category: "Musculoskeletal",
    icon: "🦴",
    shortDesc: "Joint pain, stiffness and swelling — managed effectively without steroids",
    description:
      "Arthritis mein joints mein pain, swelling aur stiffness hoti hai. Rheumatoid arthritis (autoimmune), osteoarthritis (wear & tear), aur gout — teeno mein homeopathy effective hai. Long-term painkillers aur steroids se bachne ka yeh best alternative hai.",
    symptoms: ["Joint pain & swelling", "Morning stiffness", "Reduced range of motion", "Warmth & redness", "Fatigue", "Deformity in chronic cases"],
    homeopathyHelps: [
      "Inflammation naturally reduce karta hai",
      "Joint mobility improve karta hai",
      "Steroid aur painkiller dependency kam karta hai",
      "Disease progression slow karta hai",
      "Quality of life improve karta hai",
    ],
    remedies: [
      { name: "Rhus Toxicodendron", indication: "Worse on first movement; better continued motion; worse damp cold" },
      { name: "Bryonia", indication: "Worse any movement; better rest and pressure; irritable" },
      { name: "Calcarea Fluorica", indication: "Joint nodosities; hard swellings; bony deposits" },
      { name: "Colchicum", indication: "Gout; worse touch; joint swelling with weakness" },
    ],
    successRate: "80%",
    treatmentTime: "4–10 months",
    faqs: [
      { q: "Kya arthritis mein surgery avoid ho sakti hai?", a: "Early stage mein homeopathy se progression rok sakte hain. Advanced cases mein surgery avoid karna mushkil ho sakta hai, lekin symptoms manage hote hain." },
      { q: "Gout mein diet bhi badalni padegi?", a: "Haan, Dr. Amit (DNHE certified) diet guidance bhi dete hain — purine-rich foods avoid karna zaroori hai." },
    ],
  },
  {
    slug: "anxiety-depression-homeopathy-jaipur",
    name: "Anxiety & Depression",
    hindiName: "चिंता और अवसाद",
    category: "Mental Health",
    icon: "🌿",
    shortDesc: "Mental wellness naturally restored — without antidepressant dependency",
    description:
      "Anxiety aur depression aaj kal bahut common hain. Antidepressants kaam toh karte hain lekin dependency, side effects aur withdrawal problems create karte hain. Homeopathy mein mind aur body dono ko saath treat kiya jaata hai — bina kisi dependency ke.",
    symptoms: ["Excessive worry & fear", "Panic attacks", "Sadness & hopelessness", "Insomnia", "Lack of concentration", "Fatigue", "Physical symptoms (palpitations, sweating)"],
    homeopathyHelps: [
      "Mind aur body dono treat karta hai",
      "No dependency or withdrawal",
      "Sleep quality improve karta hai",
      "Emotional resilience badhata hai",
      "Root cause (past trauma, grief) address karta hai",
    ],
    remedies: [
      { name: "Arsenicum Album", indication: "Restless anxiety; fear of death; midnight worse; perfectionist" },
      { name: "Ignatia", indication: "Grief & loss; sighing; mood swings; disappointed love" },
      { name: "Natrum Muriaticum", indication: "Suppressed emotions; alone mein rota hai; reserved" },
      { name: "Aconitum Napellus", indication: "Sudden panic attacks; fear of death; after shock/fright" },
    ],
    successRate: "82%",
    treatmentTime: "3–6 months",
    faqs: [
      { q: "Kya antidepressants ke saath homeopathy le sakte hain?", a: "Haan, safely le sakte hain. Gradually improvement ke saath allopathic dose taper ki jaati hai." },
      { q: "Kya anxiety attacks mein homeopathy fast kaam karti hai?", a: "Acute remedies jaise Aconite 200 panic attacks mein 10–15 minutes mein relief de sakte hain." },
    ],
  },
  {
    slug: "hair-fall-treatment-homeopathy-jaipur",
    name: "Hair Fall & Alopecia",
    hindiName: "बाल झड़ना",
    category: "Skin/Hair",
    icon: "💆",
    shortDesc: "Hair fall effectively treated — regrowth naturally stimulated",
    description:
      "Hair fall sirf cosmetic problem nahi — yeh internal health ka indicator hai. Nutritional deficiency, thyroid, stress, PCOS, alopecia areata — sab ke alag causes hain. Homeopathy mein cause identify karke targeted treatment diya jaata hai.",
    symptoms: ["Excessive daily hair loss", "Thinning hair", "Bald patches (alopecia areata)", "Receding hairline", "Dry/brittle hair", "Itchy scalp"],
    homeopathyHelps: [
      "Root cause identify aur treat karna",
      "Scalp health improve karna",
      "Regrowth naturally stimulate karna",
      "Associated conditions (thyroid, PCOS) treat karna",
      "Stress-related hair loss address karna",
    ],
    remedies: [
      { name: "Phosphorus", indication: "Handfuls of hair falling; from stress; sensitive patient" },
      { name: "Lycopodium", indication: "Hair fall after delivery; premature balding; digestive issues" },
      { name: "Natrum Muriaticum", indication: "Hair fall after grief; oily scalp; reserved nature" },
      { name: "Fluoricum Acidum", indication: "Alopecia areata; new hair grows but falls again" },
    ],
    successRate: "75%",
    treatmentTime: "4–8 months",
    faqs: [
      { q: "Kab tak results dikhenge?", a: "Shedding typically 6–8 weeks mein kam hota hai. Regrowth 3–4 months mein visible hona shuru hoti hai." },
      { q: "Kya sirf homeopathy se kaam chalega ya minoxidil bhi lena padega?", a: "Most cases mein sirf homeopathy se results milte hain. Dr. Amit case ke hisaab se guide karenge." },
    ],
  },
  {
    slug: "diabetes-homeopathic-supportive-treatment-jaipur",
    name: "Diabetes (Supportive Care)",
    hindiName: "मधुमेह",
    category: "Metabolic",
    icon: "🩸",
    shortDesc: "Diabetes management — blood sugar control improved, complications prevented",
    description:
      "Homeopathy diabetes ka primary treatment nahi hai, lekin supportive care mein bahut effective hai. Blood sugar control improve hoti hai, diabetic complications (neuropathy, kidney issues) slow hoti hain, aur overall quality of life better hoti hai. Insulin/metformin ke saath safely le sakte hain.",
    symptoms: ["High blood sugar", "Excessive thirst & urination", "Fatigue", "Slow wound healing", "Numbness in feet", "Blurred vision", "Recurrent infections"],
    homeopathyHelps: [
      "Pancreatic function support karna",
      "Blood sugar fluctuations reduce karna",
      "Diabetic neuropathy mein relief",
      "Energy aur vitality improve karna",
      "Complications slow karna",
    ],
    remedies: [
      { name: "Uranium Nitricum", indication: "High blood sugar; frequent urination; wasting" },
      { name: "Syzygium Jambolanum", indication: "Specific for diabetes; reduces sugar in urine" },
      { name: "Phosphoric Acid", indication: "Diabetes with extreme weakness; mental/physical debility" },
      { name: "Gymnema Sylvestre", indication: "Supportive; helps insulin function" },
    ],
    successRate: "70%",
    treatmentTime: "Ongoing (supportive)",
    faqs: [
      { q: "Kya diabetes ki regular medicines band kar sakte hain?", a: "Nahi, kabhi bhi suddenly band mat karein. Homeopathy alongside dein — doctor supervision mein dose adjust hogi." },
      { q: "Kya Type 1 diabetes mein bhi help milegi?", a: "Type 2 mein zyada effective hai. Type 1 mein supportive care milti hai — quality of life better hoti hai." },
    ],
  },
];

export function getDiseaseBySlug(slug: string): Disease | undefined {
  return diseases.find((d) => d.slug === slug);
}

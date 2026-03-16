"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
  {
    condition: "Psoriasis",
    icon: "🧴",
    patient: "Male, 34 years — Jaipur",
    duration: "8 months treatment",
    before: ["Thick red patches on both legs & arms", "Severe itching, especially at night", "Tried steroids for 5 years — kept coming back", "Embarrassed to wear short clothes"],
    after: ["90% patches cleared", "Zero itching for 6+ months", "No steroids needed", "Confidently wearing T-shirts & shorts"],
    color: "#dcf0e6",
  },
  {
    condition: "PCOS + Infertility",
    icon: "🌸",
    patient: "Female, 28 years — Sanganer",
    duration: "10 months treatment",
    before: ["No periods for 4 months", "Weight gain of 12 kg in 2 years", "2 failed IUI attempts", "Severe acne & hair fall"],
    after: ["Regular periods from month 3", "Lost 8 kg naturally", "Natural conception in month 10", "Clear skin, reduced hair fall"],
    color: "#fce7f3",
  },
  {
    condition: "Chronic Migraine",
    icon: "🧠",
    patient: "Female, 42 years — Muhana",
    duration: "5 months treatment",
    before: ["3–4 migraine attacks per week", "Bedridden for 1–2 days per attack", "Addicted to 3–4 painkillers daily", "Could not work or care for family"],
    after: ["Reduced to 1 attack per month", "Mild pain, no vomiting", "Completely off painkillers", "Back to normal daily life"],
    color: "#ede9fe",
  },
];

export default function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cases" className="section-padding" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
            style={{ backgroundColor: "#dcf0e6", color: "#1a5c3a" }}
          >
            Real Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1a5c3a" }}>
            Patient Success Stories
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#5a7a68" }}>
            Real cases from Santosh Homeopathic Clinic — before treatment aur after treatment. Names changed for privacy.
          </p>
        </motion.div>

        {/* Cases */}
        <div className="space-y-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.condition}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-3xl overflow-hidden shadow-md"
              style={{ border: "1px solid #e5ede9" }}
            >
              {/* Case Header */}
              <div className="px-7 py-5 flex flex-wrap items-center gap-4" style={{ backgroundColor: "#1a5c3a" }}>
                <span className="text-3xl">{c.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-white">{c.condition}</h3>
                  <p className="text-xs" style={{ color: "#a7d4b8" }}>{c.patient} · {c.duration}</p>
                </div>
                <span className="ml-auto px-4 py-1.5 rounded-full text-xs font-bold" style={{ backgroundColor: "#f0a500", color: "#1a1a1a" }}>
                  ✅ Successfully Treated
                </span>
              </div>

              {/* Before / After Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Before */}
                <div className="p-7" style={{ backgroundColor: "#fff5f5" }}>
                  <p className="font-bold text-sm mb-4 flex items-center gap-2" style={{ color: "#dc2626" }}>
                    <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-xs">✗</span>
                    Before Treatment
                  </p>
                  <div className="space-y-2.5">
                    {c.before.map((b, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <span className="text-red-400 flex-shrink-0 mt-0.5">●</span>
                        <p className="text-sm" style={{ color: "#5a7a68" }}>{b}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* After */}
                <div className="p-7" style={{ backgroundColor: "#f0fdf4" }}>
                  <p className="font-bold text-sm mb-4 flex items-center gap-2" style={{ color: "#16a34a" }}>
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs">✓</span>
                    After Homeopathic Treatment
                  </p>
                  <div className="space-y-2.5">
                    {c.after.map((a, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <span style={{ color: "#1a5c3a" }} className="flex-shrink-0 mt-0.5">●</span>
                        <p className="text-sm font-medium" style={{ color: "#1a5c3a" }}>{a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-xs mt-8"
          style={{ color: "#7a9e8c" }}
        >
          * Cases are real but names/details changed for patient privacy. Results may vary based on individual constitution and condition severity.
        </motion.p>
      </div>
    </section>
  );
}

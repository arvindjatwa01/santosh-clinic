"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { conditions } from "../data/content";

const categories = [
  { label: "Skin", icon: "🧴", color: "#dcf0e6", tags: ["Psoriasis", "Eczema", "Acne & Pimples", "Vitiligo", "Hair Fall"] },
  { label: "Respiratory", icon: "🫁", color: "#fef3c7", tags: ["Sinusitis", "Asthma", "Allergies", "Tonsillitis", "Adenoids"] },
  { label: "Chronic", icon: "🫀", color: "#dcf0e6", tags: ["Thyroid Disorders", "Diabetes (Supportive)", "Hypertension", "Arthritis & Joint Pain", "Migraine"] },
  { label: "Women's Health", icon: "🌸", color: "#fef3c7", tags: ["PCOS / PCOD", "Irregular Periods", "Uterine Fibroids", "Leucorrhoea"] },
  { label: "Mental Health", icon: "🧠", color: "#dcf0e6", tags: ["Anxiety", "Depression", "Insomnia", "OCD", "Stress"] },
  { label: "Children", icon: "👶", color: "#fef3c7", tags: ["Recurrent Fever", "Bedwetting", "ADHD in Children", "Tonsillitis", "Recurrent Cough-Cold"] },
];

export default function Conditions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="conditions"
      className="section-padding"
      style={{ backgroundColor: "#f0f9f4" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
            style={{ backgroundColor: "#dcf0e6", color: "#1a5c3a" }}
          >
            Conditions We Treat
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1a5c3a" }}>
            50+ Conditions Treated
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#5a7a68" }}>
            Homeopathy treats the person, not just the disease. We manage a wide range
            of acute and chronic conditions for all age groups.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: "1px solid #e5ede9" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ backgroundColor: cat.color }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-bold text-base" style={{ color: "#1a5c3a" }}>
                  {cat.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: cat.color, color: "#1a5c3a" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All conditions pill cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#7a9e8c" }}>
            And many more including:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {conditions.map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white shadow-sm"
                style={{ color: "#1a5c3a", border: "1px solid #dcf0e6" }}
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

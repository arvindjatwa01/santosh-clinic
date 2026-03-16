"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="section-padding" style={{ backgroundColor: "#f0f9f4" }}>
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
            Patient Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1a5c3a" }}>
            What Our Patients Say
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#4a7a5e" }}>
            Real stories of healing and hope from patients who found lasting relief through
            homeopathic treatment.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(26,92,58,0.12)" }}
              className="bg-white rounded-2xl p-7 shadow-md relative transition-shadow duration-300"
            >
              {/* Quote mark */}
              <div
                className="absolute top-5 right-6 text-6xl font-serif leading-none select-none"
                style={{ color: "#dcf0e6" }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-lg" style={{ color: "#f0a500" }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}
              <p className="text-sm leading-relaxed mb-6 relative z-10" style={{ color: "#5a7a68" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #1a5c3a, #2d7a52)" }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#1a5c3a" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#7a9e8c" }}>
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm mt-10"
          style={{ color: "#7a9e8c" }}
        >
          ⭐ Rated 4.9/5 based on 200+ reviews on Google
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { faqs } from "../data/content";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // FAQ Schema for Google featured snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: "#ffffff" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1a5c3a" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-base" style={{ color: "#5a7a68" }}>
            Homeopathy ke baare mein sabse common sawal aur unke jawaab
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl overflow-hidden"
              style={{
                border: openIndex === i ? "1.5px solid #1a5c3a" : "1.5px solid #e5ede9",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-200"
                style={{
                  backgroundColor: openIndex === i ? "#f0f9f4" : "#ffffff",
                }}
              >
                <span
                  className="font-semibold text-sm md:text-base pr-4"
                  style={{ color: "#1a5c3a" }}
                >
                  {faq.question}
                </span>
                <span
                  className="text-xl flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: "#1a5c3a",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      className="px-6 pb-5 text-sm leading-relaxed"
                      style={{ color: "#5a7a68" }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-sm mb-4" style={{ color: "#7a9e8c" }}>
            Aur koi sawaal hai? Seedha doctor se baat karein.
          </p>
          <a
            href="tel:+918384906044"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm shadow-lg transition-all duration-200 hover:scale-105 active:scale-100"
            style={{ backgroundColor: "#1a5c3a", color: "#ffffff" }}
          >
            📞 Call Dr. Amit: 8384 906044
          </a>
        </motion.div>
      </div>
    </section>
  );
}

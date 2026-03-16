"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { clinicInfo, doctorBio } from "../data/content";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main card */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #1a5c3a, #2d7a52)",
                minHeight: "420px",
              }}
            >
              {/* Decorative */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
                style={{ backgroundColor: "#f0a500" }}
              />
              <div className="relative z-10 p-10 flex flex-col items-center justify-center h-full text-center py-16">
                <div
                  className="w-48 h-48 rounded-2xl overflow-hidden mb-6 shadow-2xl"
                  style={{ border: "3px solid #f0a500" }}
                >
                  <Image
                    src="/doctor.jpeg"
                    alt={clinicInfo.doctor}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{clinicInfo.doctor}</h3>
                <p className="font-semibold mb-3" style={{ color: "#f0a500" }}>
                  {clinicInfo.qualifications}
                </p>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#a7d4b8" }}>
                  Dedicated to providing compassionate, personalised homeopathic care since 2020.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-5"
            >
              <p className="text-3xl font-extrabold" style={{ color: "#1a5c3a" }}>
                4+
              </p>
              <p className="text-sm font-medium" style={{ color: "#4a7a5e" }}>
                Years of Practice
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5"
              style={{ backgroundColor: "#dcf0e6", color: "#1a5c3a" }}
            >
              Meet Your Doctor
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1a5c3a" }}>
              About {clinicInfo.doctor}
            </h2>

            <p className="text-base leading-relaxed mb-7" style={{ color: "#5a7a68" }}>
              A compassionate healer and trusted physician, Dr. Amit Kumar Jatwa combines classical
              homeopathy with modern nutritional science to deliver truly holistic care. His approach
              focuses on understanding each patient's unique constitution — treating the whole
              person, not just the disease.
            </p>

            {/* Qualifications list */}
            <div className="space-y-3 mb-8">
              {doctorBio.map((item, i) => (
                <motion.div
                  key={item.slice(0, 30)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#dcf0e6" }}
                  >
                    <span className="text-xs" style={{ color: "#1a5c3a" }}>✓</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#5a7a68" }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                document.querySelector("#appointment")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#1a5c3a", color: "#ffffff" }}
            >
              Book a Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clinicInfo } from "../data/content";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f3d26 0%, #1a5c3a 50%, #2d7a52 100%)",
      }}
    >
      {/* Background decorative circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
        style={{ backgroundColor: "#f0a500" }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 translate-y-1/3 -translate-x-1/3"
        style={{ backgroundColor: "#f0a500" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full opacity-5"
        style={{ backgroundColor: "#ffffff" }}
      />

      {/* Leaf pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
                style={{ backgroundColor: "rgba(240,165,0,0.2)", color: "#f0a500" }}
              >
                🌿 Holistic Homeopathic Care · Jaipur
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Heal Naturally,{" "}
              <span style={{ color: "#f0a500" }}>Live Better</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-lg md:text-xl mb-3 font-medium"
              style={{ color: "#dcf0e6" }}
            >
              {clinicInfo.doctor} · {clinicInfo.qualifications}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-base md:text-lg mb-10 leading-relaxed max-w-lg"
              style={{ color: "#a7d4b8" }}
            >
              {clinicInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => handleScroll("#appointment")}
                className="px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-100"
                style={{ backgroundColor: "#f0a500", color: "#1a1a1a" }}
              >
                Book Free Consultation
              </button>
              <button
                onClick={() => handleScroll("#services")}
                className="px-8 py-4 rounded-full font-semibold text-base border-2 transition-all duration-200 hover:scale-105 active:scale-100"
                style={{
                  borderColor: "rgba(255,255,255,0.4)",
                  color: "#ffffff",
                  backgroundColor: "transparent",
                }}
              >
                Explore Services
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              {["No Side Effects", "Root Cause Treatment", "Personalised Care"].map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 text-sm"
                  style={{ color: "#a7d4b8" }}
                >
                  <span style={{ color: "#f0a500" }}>✓</span> {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Content – Doctor Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="relative rounded-3xl p-8 max-w-sm w-full shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {/* Doctor Photo */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-36 h-36 rounded-full overflow-hidden shadow-2xl ring-4"
                  style={{ border: "3px solid #f0a500" }}
                >
                  <Image
                    src="/doctor.jpeg"
                    alt={clinicInfo.doctor}
                    width={144}
                    height={144}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-white mb-1">{clinicInfo.doctor}</h2>
                <p className="text-sm font-medium mb-1" style={{ color: "#f0a500" }}>
                  {clinicInfo.qualifications}
                </p>
                <p className="text-xs" style={{ color: "#a7d4b8" }}>
                  Homeopathic Physician & Nutrition Advisor
                </p>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { val: "4+", lab: "Years" },
                  { val: "5K+", lab: "Patients" },
                  { val: "98%", lab: "Success" },
                ].map((s) => (
                  <div
                    key={s.lab}
                    className="text-center rounded-xl py-3"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <p className="text-lg font-bold" style={{ color: "#f0a500" }}>
                      {s.val}
                    </p>
                    <p className="text-xs" style={{ color: "#a7d4b8" }}>
                      {s.lab}
                    </p>
                  </div>
                ))}
              </div>

              {/* Address tag */}
              <div
                className="mt-5 flex items-center gap-2 rounded-xl px-4 py-3"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              >
                <span className="text-lg">📍</span>
                <span className="text-xs" style={{ color: "#a7d4b8" }}>
                  Jaipur, Rajasthan
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-6 h-10 rounded-full border-2 flex justify-center pt-2 mx-auto"
          style={{ borderColor: "rgba(255,255,255,0.3)" }}
        >
          <div className="w-1 h-2 rounded-full" style={{ backgroundColor: "#f0a500" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { services } from "../data/content";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding" style={{ backgroundColor: "#f0f9f4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            What We Treat
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1a5c3a" }}>
            Our Services
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#4a7a5e" }}>
            From chronic conditions to acute illnesses, we provide holistic homeopathic
            care tailored to every individual's unique constitution.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(26,92,58,0.15)" }}
      className="bg-white rounded-2xl p-6 shadow-md transition-shadow duration-300 cursor-default group"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "#dcf0e6" }}
      >
        {service.icon}
      </div>
      <h3 className="text-lg font-bold mb-3" style={{ color: "#1a5c3a" }}>
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#5a7a68" }}>
        {service.description}
      </p>
      <div
        className="mt-5 flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group-hover:gap-2.5"
        style={{ color: "#1a5c3a" }}
      >
        Learn more <span>→</span>
      </div>
    </motion.div>
  );
}

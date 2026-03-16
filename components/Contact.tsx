"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { clinicInfo, whatsappMessage } from "../data/content";

export default function Contact() {
  const ref = useRef(null);
  const waMsg = whatsappMessage;
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const items = [
    {
      icon: "📍",
      label: "Address",
      value: clinicInfo.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(clinicInfo.address)}`,
    },
    {
      icon: "🕐",
      label: "Clinic Hours",
      value: "Morning: 9 AM – 1 PM",
      value2: "Evening: 4 PM – 8 PM",
      link: null,
    },
    {
      icon: "✉️",
      label: "Email",
      value: clinicInfo.email,
      link: `mailto:${clinicInfo.email}`,
    },
    {
      icon: "📅",
      label: "Days Open",
      value: "Monday to Saturday",
      value2: "Sunday: Emergency only",
      link: null,
    },
  ];

  return (
    <section id="contact" style={{ backgroundColor: "#1a5c3a" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Visit or Contact Us
          </h2>
          <p className="text-sm" style={{ color: "#a7d4b8" }}>
            Siyaram Market, Kapurawala Road, Muhana, Jaipur
          </p>
        </motion.div>

        {/* Call & WhatsApp CTA — prominent buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          {/* Call Button */}
          <a
            href={`tel:+${clinicInfo.phoneRaw}`}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base shadow-xl transition-all duration-200 hover:scale-105 active:scale-100"
            style={{ backgroundColor: "#f0a500", color: "#1a1a1a" }}
          >
            <span className="text-xl">📞</span>
            <span>Call Now: {clinicInfo.phone}</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${clinicInfo.phoneRaw}?text=${waMsg}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base shadow-xl transition-all duration-200 hover:scale-105 active:scale-100"
            style={{ backgroundColor: "#25D366", color: "#ffffff" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp Message</span>
          </a>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="rounded-2xl p-6 text-center transition-all duration-200 hover:scale-[1.03]"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#f0a500" }}>
                {item.label}
              </p>
              {item.link ? (
                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-sm text-white hover:opacity-80 transition-opacity"
                >
                  {item.value}
                </a>
              ) : (
                <>
                  <p className="text-sm text-white">{item.value}</p>
                  {"value2" in item && item.value2 && (
                    <p className="text-xs mt-1" style={{ color: "#a7d4b8" }}>{item.value2}</p>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 rounded-2xl overflow-hidden relative"
          style={{ border: "1px solid rgba(255,255,255,0.15)" }}
        >
          {/* Map iframe — pointer-events disabled so wrong place doesn't open on click */}
          <div style={{ height: "260px", pointerEvents: "none" }}>
            <iframe
              src="https://maps.google.com/maps?q=26.7918493,75.7242146&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Santosh Homeopathic Clinic Location"
            />
          </div>

          {/* Get Directions overlay button */}
          <a
            href="https://www.google.com/maps?q=26.7918493,75.7242146&z=17"
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm shadow-xl transition-all duration-200 hover:scale-105 active:scale-100 whitespace-nowrap"
            style={{ backgroundColor: "#f0a500", color: "#1a1a1a" }}
          >
            <span>📍</span> Get Directions to Clinic
          </a>
        </motion.div>
      </div>
    </section>
  );
}

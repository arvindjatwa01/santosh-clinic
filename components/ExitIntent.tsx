"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappMessage } from "../data/content";

export default function ExitIntent() {
  const waMsg = whatsappMessage;
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show after 30 seconds OR on mouse leaving viewport (desktop)
    const timer = setTimeout(() => {
      if (!dismissed && !sessionStorage.getItem("exitPopupShown")) {
        setShow(true);
      }
    }, 30000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !dismissed && !sessionStorage.getItem("exitPopupShown")) {
        setShow(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("exitPopupShown", "1");
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed z-[101] top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white z-10 transition-opacity hover:opacity-70"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Content */}
            <div
              className="p-8 text-center text-white"
              style={{ background: "linear-gradient(135deg, #0f3d26, #1a5c3a)" }}
            >
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold mb-2">Ruko — Ek Khaas Offer!</h3>
              <p className="text-sm mb-1" style={{ color: "#a7d4b8" }}>
                Pehli consultation BILKUL FREE hai
              </p>
              <p className="text-lg font-bold mb-6" style={{ color: "#f0a500" }}>
                Dr. Amit Kumar Jatwa se aaj hi milein
              </p>

              <div className="flex flex-col gap-3 mb-5">
                <a
                  href="tel:+918384906044"
                  onClick={handleClose}
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base shadow-xl transition-all hover:scale-105"
                  style={{ backgroundColor: "#f0a500", color: "#1a1a1a" }}
                >
                  📞 Call Now: 8384 906044
                </a>
                <a
                  href={`https://wa.me/918384906044?text=${waMsg}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleClose}
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base shadow-xl transition-all hover:scale-105"
                  style={{ backgroundColor: "#25D366", color: "#ffffff" }}
                >
                  💬 WhatsApp Message Karein
                </a>
              </div>

              <div className="flex justify-center gap-6 text-xs" style={{ color: "#a7d4b8" }}>
                <span>✓ No Side Effects</span>
                <span>✓ Free First Visit</span>
                <span>✓ 4+ Yrs Exp</span>
              </div>
            </div>

            {/* Footer */}
            <div className="py-3 text-center text-xs" style={{ backgroundColor: "#0f3d26", color: "#4a7a5e" }}>
              Muhana, Jaipur · Mon–Sat · Morning 9–1 | Evening 4–8
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

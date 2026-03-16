"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { clinicInfo, whatsappMessage } from "../data/content";

const navItems = [
  { label: "Home", href: "/", type: "link" },
  {
    label: "Services", type: "dropdown",
    children: [
      { label: "All Services", href: "/#services" },
      { label: "Conditions We Treat", href: "/#conditions" },
      { label: "Psoriasis", href: "/diseases/psoriasis-treatment-homeopathy-jaipur" },
      { label: "PCOS / PCOD", href: "/diseases/pcos-pcod-treatment-homeopathy-jaipur" },
      { label: "Migraine", href: "/diseases/migraine-treatment-homeopathy-jaipur" },
      { label: "Anxiety & Depression", href: "/diseases/anxiety-depression-homeopathy-jaipur" },
    ],
  },
  { label: "Blog", href: "/blog", type: "link" },
  { label: "About", href: "/about", type: "link" },
  { label: "Gallery", href: "/gallery", type: "link" },
  { label: "Contact", href: "/#contact", type: "link" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const waMsg = whatsappMessage;
  const navBg = scrolled ? "#1a5c3a" : "transparent";
  const textColor = scrolled ? "#dcf0e6" : "#ffffff";
  const logoTextColor = scrolled ? "#ffffff" : "#ffffff";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ backgroundColor: navBg, boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.15)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0"
              style={{ backgroundColor: "#f0a500" }}
            >
              S
            </div>
            <div>
              <p className="font-bold text-sm md:text-base leading-tight" style={{ color: logoTextColor }}>
                {clinicInfo.name}
              </p>
              <p className="text-xs leading-tight" style={{ color: scrolled ? "#a7d4b8" : "#2d7a52" }}>
                {clinicInfo.doctor} · {clinicInfo.qualifications}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.type === "dropdown" ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: textColor }}
                  >
                    {item.label}
                    <span className={`text-xs transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}>▾</span>
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-1 w-56 rounded-2xl shadow-xl overflow-hidden"
                        style={{ backgroundColor: "#ffffff", border: "1px solid #dcf0e6" }}
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2.5 text-sm hover:bg-green-50 transition-colors"
                            style={{ color: "#1a5c3a" }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href ?? "/"}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: textColor }}
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="tel:+918384906044"
              className="ml-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-100"
              style={{ backgroundColor: "#f0a500", color: "#1a1a1a" }}
            >
              📞 Book Appointment
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: "#ffffff" }}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "#1a5c3a" }}
          >
            <div className="px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) =>
                item.type === "dropdown" ? (
                  <div key={item.label}>
                    <p className="text-xs font-bold uppercase tracking-wider px-2 pt-3 pb-1" style={{ color: "#f0a500" }}>
                      {item.label}
                    </p>
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-2 text-sm rounded-lg hover:bg-white/10 transition-colors"
                        style={{ color: "#dcf0e6" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href ?? "/"}
                    onClick={() => setMenuOpen(false)}
                    className="px-2 py-2.5 text-sm font-medium border-b hover:opacity-80 transition-opacity"
                    style={{ color: "#dcf0e6", borderBottomColor: "rgba(255,255,255,0.1)" }}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="flex gap-2 mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <a href="tel:+918384906044" onClick={() => setMenuOpen(false)} className="flex-1 py-3 rounded-full text-sm font-bold text-center" style={{ backgroundColor: "#f0a500", color: "#1a1a1a" }}>
                  📞 Call Now
                </a>
                <a href={`https://wa.me/918384906044?text=${waMsg}`} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="flex-1 py-3 rounded-full text-sm font-bold text-center" style={{ backgroundColor: "#25D366", color: "#fff" }}>
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

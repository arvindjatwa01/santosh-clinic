"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

type FormData = {
  name: string;
  phone: string;
  date: string;
  time: string;
  condition: string;
  message: string;
};

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM",
];

export default function Appointment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    date: "",
    time: "",
    condition: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2";
  const inputStyle = {
    borderColor: "#dcf0e6",
    color: "#1a1a1a",
    backgroundColor: "#ffffff",
  };

  return (
    <section id="appointment" className="section-padding" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5"
              style={{ backgroundColor: "#dcf0e6", color: "#1a5c3a" }}
            >
              Easy Booking
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1a5c3a" }}>
              Book an Appointment
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#5a7a68" }}>
              Schedule your consultation with Dr. Amit Kumar Jatwa. First consultation
              is free. We&apos;ll confirm your appointment within 2 hours.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                { icon: "🕐", title: "Clinic Timings", desc: "Morning 9–1 PM | Evening 4–8 PM (Mon–Sat)" },
                { icon: "🆓", title: "Free First Consultation", desc: "No charge for your first visit" },
                { icon: "📋", title: "Detailed Case Taking", desc: "60-minute in-depth assessment" },
                { icon: "💊", title: "Custom Remedies", desc: "Medicines prepared specifically for you" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: "#f0f9f4" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: "#1a5c3a" }}>
                      {item.title}
                    </p>
                    <p className="text-sm" style={{ color: "#7a9e8c" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="rounded-3xl p-7 md:p-9 shadow-xl"
              style={{ backgroundColor: "#f0f9f4", border: "1px solid #dcf0e6" }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="text-6xl mb-5">✅</div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "#1a5c3a" }}>
                    Appointment Requested!
                  </h3>
                  <p className="text-sm mb-6" style={{ color: "#5a7a68" }}>
                    Thank you, {form.name}! We&apos;ll call you on{" "}
                    <strong>{form.phone}</strong> to confirm your appointment.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", date: "", time: "", condition: "", message: "" });
                    }}
                    className="px-6 py-3 rounded-full text-sm font-semibold"
                    style={{ backgroundColor: "#1a5c3a", color: "#ffffff" }}
                  >
                    Book Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold mb-6" style={{ color: "#1a5c3a" }}>
                    Fill in your details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#1a5c3a" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass}
                        style={{
                          ...inputStyle,
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#1a5c3a";
                          e.target.style.boxShadow = "0 0 0 3px rgba(26,92,58,0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#dcf0e6";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#1a5c3a" }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass}
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#1a5c3a";
                          e.target.style.boxShadow = "0 0 0 3px rgba(26,92,58,0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#dcf0e6";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#1a5c3a" }}>
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={form.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        className={inputClass}
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#1a5c3a";
                          e.target.style.boxShadow = "0 0 0 3px rgba(26,92,58,0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#dcf0e6";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#1a5c3a" }}>
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        required
                        value={form.time}
                        onChange={handleChange}
                        className={inputClass}
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#1a5c3a";
                          e.target.style.boxShadow = "0 0 0 3px rgba(26,92,58,0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#dcf0e6";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#1a5c3a" }}>
                      Health Concern
                    </label>
                    <input
                      type="text"
                      name="condition"
                      value={form.condition}
                      onChange={handleChange}
                      placeholder="e.g., Migraine, Skin allergy, Child health..."
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#1a5c3a";
                        e.target.style.boxShadow = "0 0 0 3px rgba(26,92,58,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#dcf0e6";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#1a5c3a" }}>
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us more about your health concern or any specific questions..."
                      className={inputClass}
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#1a5c3a";
                        e.target.style.boxShadow = "0 0 0 3px rgba(26,92,58,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#dcf0e6";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-100 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: "#1a5c3a", color: "#ffffff" }}
                  >
                    {loading ? "Sending..." : "Request Appointment →"}
                  </button>

                  <p className="text-xs text-center" style={{ color: "#7a9e8c" }}>
                    We respect your privacy. Your information is safe with us.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

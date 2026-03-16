import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clinic Gallery | Santosh Homeopathic Clinic Jaipur",
  description:
    "Photos of Santosh Homeopathic Clinic, Muhana Jaipur — clinic interior, medicines, certificates and more.",
};

const galleryItems = [
  { id: 1, label: "Clinic Reception", emoji: "🏥", bg: "#dcf0e6", desc: "Welcoming reception area" },
  { id: 2, label: "Consultation Room", emoji: "🪑", bg: "#fef3c7", desc: "Private consultation chamber" },
  { id: 3, label: "Homeopathic Medicines", emoji: "💊", bg: "#e0e7ff", desc: "Wide range of classical remedies" },
  { id: 4, label: "Dr. Amit at Clinic", emoji: "👨‍⚕️", bg: "#fce7f3", desc: "During patient consultation" },
  { id: 5, label: "BHMS Certificate", emoji: "📜", bg: "#dcf0e6", desc: "Bachelor of Homeopathic Medicine" },
  { id: 6, label: "DNHE Certificate", emoji: "🏆", bg: "#fef3c7", desc: "Diploma in Naturopathy & Health Education" },
  { id: 7, label: "Dispensary", emoji: "🧪", bg: "#e0e7ff", desc: "In-clinic medicine preparation" },
  { id: 8, label: "Waiting Area", emoji: "🛋️", bg: "#fce7f3", desc: "Comfortable patient waiting area" },
];

export default function GalleryPage() {
  return (
    <main style={{ backgroundColor: "#f0f9f4", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#1a5c3a" }} className="pt-28 pb-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4" style={{ backgroundColor: "rgba(240,165,0,0.2)", color: "#f0a500" }}>
            Our Clinic
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Clinic Gallery</h1>
          <p className="text-base" style={{ color: "#a7d4b8" }}>
            Santosh Homeopathic Clinic, Siyaram Market, Kapurawala Road, Muhana, Jaipur
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        {/* Upload Notice */}
        <div className="rounded-2xl p-5 mb-10 flex items-start gap-3" style={{ backgroundColor: "#fef3c7", border: "1px solid #f0a500" }}>
          <span className="text-xl">📸</span>
          <div>
            <p className="font-semibold text-sm" style={{ color: "#92400e" }}>Clinic Photos Coming Soon</p>
            <p className="text-xs mt-1" style={{ color: "#78350f" }}>
              Apni clinic ki real photos <code className="bg-yellow-100 px-1 rounded">public/gallery/</code> folder mein add karein aur yahan automatically show hongi.
            </p>
          </div>
        </div>

        {/* Gallery Grid — Placeholder Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div
                className="h-44 flex flex-col items-center justify-center"
                style={{ backgroundColor: item.bg }}
              >
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
              </div>
              <div className="bg-white p-3">
                <p className="font-semibold text-sm" style={{ color: "#1a5c3a" }}>{item.label}</p>
                <p className="text-xs mt-0.5" style={{ color: "#7a9e8c" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-3xl p-8 text-center" style={{ background: "linear-gradient(135deg, #1a5c3a, #2d7a52)" }}>
          <h3 className="text-2xl font-bold text-white mb-3">Clinic Visit Karein</h3>
          <p className="mb-6" style={{ color: "#a7d4b8" }}>
            Siyaram Market, Kapurawala Road, Muhana, Jaipur
            <br />Morning 9–1 PM | Evening 4–8 PM (Mon–Sat)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918384906044" className="px-8 py-3.5 rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-transform" style={{ backgroundColor: "#f0a500", color: "#1a1a1a" }}>
              📞 Call for Directions: 8384 906044
            </a>
            <Link href="https://www.google.com/maps?q=26.7918493,75.7242146" target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-full font-bold text-sm border-2 transition-all hover:scale-105" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#ffffff" }}>
              📍 Get Directions
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

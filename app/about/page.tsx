import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicInfo, doctorBio, stats, whatsappMessage } from "../../data/content";

export const metadata: Metadata = {
  title: "About Dr. Amit Kumar Jatwa — BHMS, DNHE | Santosh Homeopathic Clinic Jaipur",
  description:
    "Know about Dr. Amit Kumar Jatwa — BHMS, DNHE qualified homeopathic physician at Santosh Clinic, Muhana Jaipur. 4+ years experience, 5000+ patients treated.",
};

const timeline = [
  { year: "2010", event: "BHMS Graduation — Rajasthan University", icon: "🎓" },
  { year: "2011", event: "DNHE (Diploma in Naturopathy & Health Education)", icon: "📜" },
  { year: "2012", event: "Clinical training in constitutional homeopathy", icon: "🏥" },
  { year: "2020", event: "Founded Santosh Homeopathic Clinic, Muhana, Jaipur", icon: "🌿" },
  { year: "2022", event: "Completed 2000+ successful patient cases", icon: "⭐" },
  { year: "2024", event: "5000+ patients treated, 98% satisfaction rate", icon: "🏆" },
];

const specializations = [
  { title: "Chronic Disease Management", desc: "Long-term conditions ke liye specialised constitutional treatment", icon: "🫀" },
  { title: "Skin Disorders", desc: "Psoriasis, eczema, vitiligo ke permanent solutions", icon: "🧴" },
  { title: "Women's Health", desc: "PCOS, hormonal imbalance, fertility specialist", icon: "🌸" },
  { title: "Child Health & Immunity", desc: "Bachon ki immunity naturally strong karna", icon: "👶" },
  { title: "Mental Wellness", desc: "Anxiety, depression, insomnia ke bina side effects treatment", icon: "🧠" },
  { title: "Nutrition Counselling", desc: "DNHE certified diet aur lifestyle guidance", icon: "🥗" },
];

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0f3d26, #1a5c3a, #2d7a52)" }} className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5" style={{ backgroundColor: "rgba(240,165,0,0.2)", color: "#f0a500" }}>
                Meet Your Doctor
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                {clinicInfo.doctor}
              </h1>
              <p className="text-lg font-semibold mb-3" style={{ color: "#f0a500" }}>{clinicInfo.qualifications}</p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#a7d4b8" }}>
                Muhana, Jaipur ke trusted homeopathic physician — 4+ saalon se patients ko natural, lasting healing de rahe hain. Unka approach hai: har patient ek unique individual hai, sirf ek bimari nahi.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+918384906044" className="px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-transform" style={{ backgroundColor: "#f0a500", color: "#1a1a1a" }}>
                  📞 Book Consultation
                </a>
                <a href={`https://wa.me/918384906044?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full font-bold text-sm border-2 transition-all hover:scale-105" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#ffffff" }}>
                  💬 WhatsApp
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl" style={{ border: "4px solid #f0a500" }}>
                  <Image src="/doctor.jpeg" alt={clinicInfo.doctor} width={320} height={320} className="w-full h-full object-cover object-top" priority />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-5 py-3">
                  <p className="text-2xl font-extrabold" style={{ color: "#1a5c3a" }}>4+</p>
                  <p className="text-xs font-medium" style={{ color: "#5a7a68" }}>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ backgroundColor: "#f0f9f4" }} className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold mb-1" style={{ color: "#1a5c3a" }}>{s.value}</p>
                <p className="text-sm" style={{ color: "#5a7a68" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        {/* Qualifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#1a5c3a" }}>Qualifications & Expertise</h2>
            <div className="space-y-4">
              {doctorBio.map((item, i) => (
                <div key={item.slice(0, 30)} className="flex items-start gap-3 p-4 rounded-2xl" style={{ backgroundColor: "#f0f9f4", border: "1px solid #dcf0e6" }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#1a5c3a" }}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#5a7a68" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#1a5c3a" }}>Treatment Philosophy</h2>
            <div
              className="rounded-3xl p-7 text-white h-full"
              style={{ background: "linear-gradient(135deg, #1a5c3a, #2d7a52)", minHeight: "300px" }}
            >
              <div className="text-4xl mb-4">💬</div>
              <blockquote className="text-base leading-relaxed italic mb-6" style={{ color: "#dcf0e6" }}>
                &ldquo;Main sirf bimari nahi dekhta — main us insaan ko dekhta hoon jisे yeh bimari hui hai. Har patient ki apni story hai, apna constitution hai. Wahi story mujhe sahi dawa tak pahunchati hai.&rdquo;
              </blockquote>
              <p className="font-bold" style={{ color: "#f0a500" }}>— {clinicInfo.doctor}</p>
              <p className="text-sm" style={{ color: "#a7d4b8" }}>{clinicInfo.qualifications}</p>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#1a5c3a" }}>Areas of Specialisation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specializations.map((spec) => (
              <div key={spec.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow" style={{ border: "1px solid #dcf0e6" }}>
                <div className="text-3xl mb-3">{spec.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#1a5c3a" }}>{spec.title}</h3>
                <p className="text-sm" style={{ color: "#5a7a68" }}>{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#1a5c3a" }}>Journey So Far</h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ backgroundColor: "#dcf0e6" }} />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex items-start gap-5 pl-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-md z-10 text-lg" style={{ backgroundColor: "#1a5c3a", border: "3px solid #f0f9f4" }}>
                    {item.icon}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-4 shadow-sm" style={{ border: "1px solid #dcf0e6" }}>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#f0f9f4", color: "#f0a500" }}>{item.year}</span>
                    <p className="text-sm font-medium mt-1.5" style={{ color: "#1a5c3a" }}>{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #1a5c3a, #2d7a52)" }}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Dr. Amit se Milna Chahte Hain?</h3>
          <p className="mb-7" style={{ color: "#a7d4b8" }}>Pehli consultation free hai — aaj hi appointment book karein</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918384906044" className="px-8 py-4 rounded-full font-bold text-base shadow-xl hover:scale-105 transition-transform" style={{ backgroundColor: "#f0a500", color: "#1a1a1a" }}>
              📞 Call: 8384 906044
            </a>
            <Link href="/#appointment" className="px-8 py-4 rounded-full font-bold text-base border-2 transition-all hover:scale-105" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#ffffff" }}>
              📋 Book Online
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";

const tips = [
  "🌿 Homeopathy treats the ROOT CAUSE — not just symptoms",
  "💧 Drink 8 glasses of water daily for better health",
  "🧘 Stress is a major trigger for chronic diseases — manage it naturally",
  "🥗 DNHE Tip: Avoid processed foods for better immunity",
  "🌙 Quality sleep is the best natural medicine",
  "💊 Homeopathic medicines are safe for babies, pregnant women & elderly",
  "🫀 Psoriasis, PCOS, thyroid — all respond well to homeopathy",
  "📞 FREE first consultation — Call Dr. Amit: 8384 906044",
  "🌸 PCOS ko hormones ke bina control kar sakte hain — homeopathy se",
  "👶 Bachon ki recurring cold-cough — homeopathy mein permanent solution hai",
];

export default function HealthTicker() {
  const doubledTips = [...tips, ...tips];

  return (
    <div
      className="overflow-hidden py-3 relative"
      style={{ backgroundColor: "#0f3d26", borderTop: "2px solid #f0a500" }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(to right, #0f3d26, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(to left, #0f3d26, transparent)" }} />

      <div
        className="flex gap-0 whitespace-nowrap"
        style={{
          animation: "ticker 40s linear infinite",
          width: "max-content",
        }}
      >
        {doubledTips.map((tip, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-sm font-medium px-8" style={{ color: "#dcf0e6" }}>
            {tip}
            <span style={{ color: "#f0a500", marginLeft: "1rem" }}>•</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

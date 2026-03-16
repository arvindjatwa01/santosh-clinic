import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Santosh Homeopathic Clinic | Dr. Amit Kumar Jatwa – Muhana, Jaipur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "linear-gradient(135deg, #0f3d26 0%, #1a5c3a 55%, #2d7a52 100%)",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", backgroundColor: "rgba(240,165,0,0.15)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, borderRadius: "50%", backgroundColor: "rgba(240,165,0,0.1)", display: "flex" }} />

        {/* Left content */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 60px", flex: 1 }}>
          {/* Badge */}
          <div style={{ display: "flex", backgroundColor: "rgba(240,165,0,0.2)", borderRadius: "50px", padding: "8px 20px", marginBottom: "28px", width: "fit-content" }}>
            <span style={{ color: "#f0a500", fontSize: "14px", fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase" }}>
              🌿 Homeopathic Clinic · Jaipur
            </span>
          </div>

          {/* Clinic name */}
          <div style={{ color: "#ffffff", fontSize: "44px", fontWeight: "900", lineHeight: 1.1, marginBottom: "12px" }}>
            Santosh Homeopathic
          </div>
          <div style={{ color: "#f0a500", fontSize: "44px", fontWeight: "900", lineHeight: 1.1, marginBottom: "24px" }}>
            Clinic
          </div>

          {/* Doctor */}
          <div style={{ color: "#dcf0e6", fontSize: "22px", fontWeight: "600", marginBottom: "6px" }}>
            Dr. Amit Kumar Jatwa
          </div>
          <div style={{ color: "#a7d4b8", fontSize: "16px", marginBottom: "36px" }}>
            BHMS, DNHE · Homeopathic Physician
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "32px" }}>
            {[["5000+", "Patients"], ["10+", "Years"], ["50+", "Conditions"], ["98%", "Satisfaction"]].map(([val, lab]) => (
              <div key={lab} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ color: "#f0a500", fontSize: "26px", fontWeight: "900" }}>{val}</span>
                <span style={{ color: "#a7d4b8", fontSize: "12px" }}>{lab}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — doctor avatar card */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 60px 60px 0" }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "24px",
            padding: "36px 32px",
            border: "1px solid rgba(255,255,255,0.15)",
            width: "280px",
          }}>
            {/* Avatar */}
            <div style={{ width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "#f0a500", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "52px", marginBottom: "20px", border: "3px solid rgba(255,255,255,0.3)" }}>
              👨‍⚕️
            </div>
            <div style={{ color: "#ffffff", fontSize: "16px", fontWeight: "700", marginBottom: "4px", textAlign: "center" }}>Dr. Amit Kumar Jatwa</div>
            <div style={{ color: "#f0a500", fontSize: "13px", marginBottom: "20px" }}>BHMS, DNHE</div>
            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#a7d4b8", fontSize: "13px" }}>
                <span>📞</span><span>8384 906044</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#a7d4b8", fontSize: "13px" }}>
                <span>📍</span><span>Muhana, Jaipur</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#a7d4b8", fontSize: "13px" }}>
                <span>🕐</span><span>9–1 PM | 4–8 PM</span>
              </div>
            </div>
            {/* Free badge */}
            <div style={{ marginTop: "18px", backgroundColor: "#f0a500", borderRadius: "50px", padding: "8px 20px", color: "#1a1a1a", fontSize: "13px", fontWeight: "bold" }}>
              Free First Consultation
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

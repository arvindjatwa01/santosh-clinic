import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { diseases, getDiseaseBySlug } from "../../../data/diseases";
import { whatsappMessage } from "../../../data/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const disease = getDiseaseBySlug(slug);
  if (!disease) return {};
  return {
    title: `${disease.name} Treatment in Jaipur | Homeopathy | Santosh Clinic`,
    description: `Best homeopathic treatment for ${disease.name} in Muhana, Jaipur by Dr. Amit Kumar Jatwa (BHMS). ${disease.shortDesc}. Call: 8384906044.`,
    keywords: [`${disease.name} treatment Jaipur`, `homeopathy for ${disease.name}`, `${disease.name} doctor Muhana Jaipur`],
  };
}

export default async function DiseasePage({ params }: Props) {
  const { slug } = await params;
  const disease = getDiseaseBySlug(slug);
  if (!disease) notFound();

  const diseasesSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: disease.name,
    alternateName: disease.hindiName,
    description: disease.description,
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Homeopathic Treatment",
      provider: {
        "@type": "MedicalBusiness",
        name: "Santosh Homeopathic Clinic",
        telephone: "+918384906044",
        address: "Siyaram Market, Kapurawala Road, Muhana, Jaipur",
      },
    },
  };

  return (
    <main style={{ backgroundColor: "#f0f9f4", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(diseasesSchema) }} />

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0f3d26, #1a5c3a, #2d7a52)" }} className="pt-28 pb-14 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/#services" className="inline-flex items-center gap-1 text-sm mb-5 hover:opacity-80" style={{ color: "#a7d4b8" }}>
            ← Back to Home
          </Link>
          <div className="flex items-start gap-5">
            <div className="text-5xl">{disease.icon}</div>
            <div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: "rgba(240,165,0,0.2)", color: "#f0a500" }}>
                {disease.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{disease.name}</h1>
              <p className="text-lg" style={{ color: "#a7d4b8" }}>{disease.hindiName} — Homeopathic Treatment in Jaipur</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-7">
            {/* Description */}
            <div className="bg-white rounded-2xl p-7 shadow-sm" style={{ border: "1px solid #dcf0e6" }}>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#1a5c3a" }}>Kya Hai {disease.name}?</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#5a7a68" }}>{disease.description}</p>
            </div>

            {/* Symptoms */}
            <div className="bg-white rounded-2xl p-7 shadow-sm" style={{ border: "1px solid #dcf0e6" }}>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#1a5c3a" }}>Symptoms / Lakshan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {disease.symptoms.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#f0a500" }} />
                    <span className="text-sm" style={{ color: "#5a7a68" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How Homeopathy Helps */}
            <div className="rounded-2xl p-7" style={{ background: "linear-gradient(135deg, #f0f9f4, #dcf0e6)" }}>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#1a5c3a" }}>Homeopathy Kaise Madad Karta Hai?</h2>
              <div className="space-y-2">
                {disease.homeopathyHelps.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#1a5c3a" }}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-sm" style={{ color: "#2d5a3d" }}>{h}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Remedies */}
            <div className="bg-white rounded-2xl p-7 shadow-sm" style={{ border: "1px solid #dcf0e6" }}>
              <h2 className="text-xl font-bold mb-2" style={{ color: "#1a5c3a" }}>Common Homeopathic Remedies</h2>
              <p className="text-xs mb-4" style={{ color: "#7a9e8c" }}>⚠️ Remedies sirf Dr. ki guidance mein lein — self-medication se bachein</p>
              <div className="space-y-3">
                {disease.remedies.map((r, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ backgroundColor: "#f0f9f4" }}>
                    <span className="text-sm font-bold min-w-fit" style={{ color: "#f0a500" }}>{r.name}</span>
                    <span className="text-xs" style={{ color: "#5a7a68" }}>— {r.indication}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl p-7 shadow-sm" style={{ border: "1px solid #dcf0e6" }}>
              <h2 className="text-xl font-bold mb-5" style={{ color: "#1a5c3a" }}>Aksar Pooche Jaane Waale Sawaal</h2>
              <div className="space-y-4">
                {disease.faqs.map((faq, i) => (
                  <div key={i} className="pb-4" style={{ borderBottom: i < disease.faqs.length - 1 ? "1px solid #dcf0e6" : "none" }}>
                    <p className="font-semibold text-sm mb-2" style={{ color: "#1a5c3a" }}>Q: {faq.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#5a7a68" }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Stats Card */}
            <div className="rounded-2xl p-6 text-center text-white" style={{ background: "linear-gradient(135deg, #1a5c3a, #2d7a52)" }}>
              <div className="text-5xl mb-4">{disease.icon}</div>
              <h3 className="font-bold text-lg mb-4">{disease.name}</h3>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="rounded-xl p-3" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <p className="text-xl font-extrabold" style={{ color: "#f0a500" }}>{disease.successRate}</p>
                  <p className="text-xs" style={{ color: "#a7d4b8" }}>Success Rate</p>
                </div>
                <div className="rounded-xl p-3" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <p className="text-sm font-bold" style={{ color: "#f0a500" }}>{disease.treatmentTime}</p>
                  <p className="text-xs" style={{ color: "#a7d4b8" }}>Treatment Time</p>
                </div>
              </div>
              <a href="tel:+918384906044" className="block w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-105" style={{ backgroundColor: "#f0a500", color: "#1a1a1a" }}>
                📞 Book Free Consultation
              </a>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm" style={{ border: "1px solid #dcf0e6" }}>
              <h4 className="font-bold text-sm mb-4" style={{ color: "#1a5c3a" }}>Santosh Homeopathic Clinic</h4>
              <div className="space-y-2 text-xs" style={{ color: "#5a7a68" }}>
                <p className="flex gap-2"><span>📍</span><span>Siyaram Market, Kapurawala Road, Muhana, Jaipur</span></p>
                <p className="flex gap-2"><span>🕐</span><span>Morning 9–1 PM | Evening 4–8 PM</span></p>
                <p className="flex gap-2"><span>📅</span><span>Monday to Saturday</span></p>
              </div>
              <div className="flex gap-2 mt-4">
                <a href="tel:+918384906044" className="flex-1 py-2.5 rounded-xl text-xs font-bold text-center transition-all hover:scale-105" style={{ backgroundColor: "#1a5c3a", color: "#fff" }}>Call Now</a>
                <a href={`https://wa.me/918384906044?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="flex-1 py-2.5 rounded-xl text-xs font-bold text-center transition-all hover:scale-105" style={{ backgroundColor: "#25D366", color: "#fff" }}>WhatsApp</a>
              </div>
            </div>

            {/* Other Diseases */}
            <div className="bg-white rounded-2xl p-5 shadow-sm" style={{ border: "1px solid #dcf0e6" }}>
              <h4 className="font-bold text-sm mb-4" style={{ color: "#1a5c3a" }}>Aur Conditions</h4>
              <div className="space-y-2">
                {diseases.filter((d) => d.slug !== disease.slug).slice(0, 5).map((d) => (
                  <Link key={d.slug} href={`/diseases/${d.slug}`} className="flex items-center gap-2 py-1.5 hover:opacity-70 transition-opacity">
                    <span>{d.icon}</span>
                    <span className="text-sm" style={{ color: "#1a5c3a" }}>{d.name}</span>
                    <span className="ml-auto text-xs" style={{ color: "#7a9e8c" }}>→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "../../data/blogs";

export const metadata: Metadata = {
  title: "Health Blog — Homeopathy Tips & Guides | Santosh Clinic Jaipur",
  description:
    "Expert health articles by Dr. Amit Kumar Jatwa on homeopathic treatment for psoriasis, PCOS, migraine, anxiety, child health and more. Free advice from best homeopathic doctor in Jaipur.",
};

const categoryColors: Record<string, string> = {
  "Skin Diseases": "#dcf0e6",
  "Women's Health": "#fce7f3",
  "Child Health": "#fef3c7",
  "Neurological": "#e0e7ff",
  "General Health": "#f0f9f4",
  "Mental Wellness": "#ede9fe",
};

export default function BlogPage() {
  return (
    <main style={{ backgroundColor: "#f0f9f4", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#1a5c3a" }} className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
            style={{ backgroundColor: "rgba(240,165,0,0.2)", color: "#f0a500" }}
          >
            Health Education
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Homeopathy Health Blog
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#a7d4b8" }}>
            Dr. Amit Kumar Jatwa ke expert articles — homeopathic treatment, health tips, aur
            common diseases ke baare mein poori jaankari
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image placeholder */}
              <div
                className="h-44 flex items-center justify-center text-5xl"
                style={{ backgroundColor: categoryColors[post.category] ?? "#f0f9f4" }}
              >
                {post.category === "Skin Diseases" ? "🧴" :
                 post.category === "Women's Health" ? "🌸" :
                 post.category === "Child Health" ? "👶" :
                 post.category === "Neurological" ? "🧠" :
                 post.category === "Mental Wellness" ? "🌿" : "💊"}
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: categoryColors[post.category] ?? "#f0f9f4", color: "#1a5c3a" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: "#7a9e8c" }}>{post.readTime} read</span>
                </div>

                <h2
                  className="font-bold text-base leading-snug mb-2 group-hover:opacity-80 transition-opacity"
                  style={{ color: "#1a5c3a" }}
                >
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#5a7a68" }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#7a9e8c" }}>
                    {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: "#1a5c3a" }}>
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-6xl mx-auto px-4 pb-14">
        <div
          className="rounded-3xl p-8 md:p-10 text-center"
          style={{ background: "linear-gradient(135deg, #1a5c3a, #2d7a52)" }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Apni Bimari ke baare mein Personally Jaanna Chahte Hain?
          </h3>
          <p className="mb-6" style={{ color: "#a7d4b8" }}>
            Free first consultation — Dr. Amit Kumar Jatwa se seedha baat karein
          </p>
          <a
            href="tel:+918384906044"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm shadow-xl transition-all hover:scale-105"
            style={{ backgroundColor: "#f0a500", color: "#1a1a1a" }}
          >
            📞 Call Now: 8384 906044
          </a>
        </div>
      </div>
    </main>
  );
}

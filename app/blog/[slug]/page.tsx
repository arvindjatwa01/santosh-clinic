import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "../../../data/blogs";
import { whatsappMessage } from "../../../data/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let tableRows: string[][] = [];

  const flushTable = (key: string) => {
    if (tableRows.length < 2) { tableRows = []; return; }
    const headers = tableRows[0];
    const rows = tableRows.slice(2);
    elements.push(
      <div key={key} className="overflow-x-auto my-5">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ backgroundColor: "#1a5c3a" }}>
              {headers.map((h, j) => (
                <th key={j} className="px-4 py-2 text-left text-white font-semibold">{h.trim()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, j) => (
              <tr key={j} style={{ backgroundColor: j % 2 === 0 ? "#f0f9f4" : "#ffffff" }}>
                {row.map((cell, k) => (
                  <td key={k} className="px-4 py-2 border-b" style={{ borderColor: "#dcf0e6", color: "#5a7a68" }}>{cell.trim()}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
  };

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("|")) {
      tableRows.push(line.split("|").filter((_, idx) => idx > 0 && idx < line.split("|").length - 1));
      i++;
      continue;
    } else if (tableRows.length > 0) {
      flushTable(`table-${i}`);
    }

    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a5c3a" }}>{line.slice(3)}</h2>);
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\* — (.+)$/);
      if (match) {
        elements.push(
          <div key={i} className="flex items-start gap-2 mb-2">
            <span style={{ color: "#f0a500" }} className="mt-0.5">•</span>
            <p className="text-sm" style={{ color: "#5a7a68" }}>
              <strong style={{ color: "#1a5c3a" }}>{match[1]}</strong> — {match[2]}
            </p>
          </div>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <div key={i} className="flex items-start gap-2 mb-1.5">
          <span style={{ color: "#f0a500" }} className="mt-0.5">•</span>
          <p className="text-sm" style={{ color: "#5a7a68" }}>{line.slice(2)}</p>
        </div>
      );
    } else if (/^\d+\. /.test(line)) {
      elements.push(
        <div key={i} className="flex items-start gap-2 mb-1.5">
          <span className="font-bold text-sm shrink-0" style={{ color: "#f0a500" }}>{(/^\d+/).exec(line)?.[0]}.</span>
          <p className="text-sm" style={{ color: "#5a7a68" }}>{line.replace(/^\d+\. /, "")}</p>
        </div>
      );
    } else if (line.trim() !== "") {
      elements.push(<p key={i} className="text-sm md:text-base leading-relaxed mb-3" style={{ color: "#5a7a68" }}>{line}</p>);
    }
    i++;
  }
  if (tableRows.length > 0) flushTable("table-end");
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main style={{ backgroundColor: "#f0f9f4", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ backgroundColor: "#1a5c3a" }} className="pt-28 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm mb-6 hover:opacity-80" style={{ color: "#a7d4b8" }}>
            ← Back to Blog
          </Link>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ backgroundColor: "rgba(240,165,0,0.2)", color: "#f0a500" }}
          >
            {post.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: "#a7d4b8" }}>
            <span>👨‍⚕️ Dr. Amit Kumar Jatwa (BHMS, DNHE)</span>
            <span>📅 {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>⏱ {post.readTime} read</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Article */}
        <article className="bg-white rounded-3xl shadow-md p-7 md:p-10 mb-10">
          <p className="text-base md:text-lg font-medium leading-relaxed mb-6 pb-6" style={{ color: "#2d7a52", borderBottom: "1px solid #dcf0e6" }}>
            {post.excerpt}
          </p>
          <div>{renderMarkdown(post.content)}</div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6" style={{ borderTop: "1px solid #dcf0e6" }}>
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: "#f0f9f4", color: "#1a5c3a", border: "1px solid #dcf0e6" }}>
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* CTA */}
        <div
          className="rounded-3xl p-7 text-center mb-10"
          style={{ background: "linear-gradient(135deg, #1a5c3a, #2d7a52)" }}
        >
          <h3 className="text-xl font-bold text-white mb-2">Is Bimari ka Ilaj Karwana Chahte Hain?</h3>
          <p className="text-sm mb-5" style={{ color: "#a7d4b8" }}>Free first consultation — Dr. Amit Kumar Jatwa, Muhana Jaipur</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+918384906044" className="px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-transform" style={{ backgroundColor: "#f0a500", color: "#1a1a1a" }}>
              📞 Call: 8384 906044
            </a>
            <a href={`https://wa.me/918384906044?text=${whatsappMessage}`} target="_blank" rel="noreferrer"
              className="px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-transform" style={{ backgroundColor: "#25D366", color: "#ffffff" }}>
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div>
            <h3 className="text-lg font-bold mb-5" style={{ color: "#1a5c3a" }}>Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`}
                  className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  style={{ border: "1px solid #dcf0e6" }}
                >
                  <span className="text-xs font-semibold" style={{ color: "#f0a500" }}>{r.category}</span>
                  <p className="text-sm font-semibold mt-1 leading-snug" style={{ color: "#1a5c3a" }}>{r.title}</p>
                  <p className="text-xs mt-2" style={{ color: "#7a9e8c" }}>{r.readTime} read →</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

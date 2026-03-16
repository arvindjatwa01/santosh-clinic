"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { diseases } from "../data/diseases";
import { blogPosts } from "../data/blogs";

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const certificates = [
    { title: "BHMS", full: "Bachelor of Homeopathic Medicine & Surgery", icon: "🎓", year: "2010", color: "#dcf0e6" },
    { title: "DNHE", full: "Diploma in Naturopathy & Health Education", icon: "📜", year: "2011", color: "#fef3c7" },
    { title: "4+ Years", full: "Clinical Practice in Jaipur, Rajasthan", icon: "⭐", year: "Since 2020", color: "#e0e7ff" },
    { title: "Registered", full: "Rajasthan Homeopathic Council Certified", icon: "✅", year: "Verified", color: "#fce7f3" },
  ];

  return (
    <section ref={ref} className="section-padding" style={{ backgroundColor: "#f0f9f4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4" style={{ backgroundColor: "#dcf0e6", color: "#1a5c3a" }}>
            Qualifications & Trust
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1a5c3a" }}>
            Why Trust Dr. Amit Kumar Jatwa?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow"
              style={{ border: "1px solid #dcf0e6" }}
            >
              <div className="text-3xl mb-3">{cert.icon}</div>
              <p className="text-lg font-extrabold mb-1" style={{ color: "#1a5c3a" }}>{cert.title}</p>
              <p className="text-xs leading-snug mb-2" style={{ color: "#5a7a68" }}>{cert.full}</p>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: cert.color, color: "#1a5c3a" }}>
                {cert.year}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Diseases Treated Quick Links */}
        <div className="mb-14">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl font-bold mb-6 text-center"
            style={{ color: "#1a5c3a" }}
          >
            Treatments Available — Click to Learn More
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-3">
            {diseases.map((d, i) => (
              <motion.div
                key={d.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.07 }}
              >
                <Link
                  href={`/diseases/${d.slug}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white shadow-sm hover:shadow-md transition-all hover:scale-105 text-sm font-medium"
                  style={{ border: "1px solid #dcf0e6", color: "#1a5c3a" }}
                >
                  <span>{d.icon}</span> {d.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Blog Previews */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between mb-6"
          >
            <h3 className="text-xl font-bold" style={{ color: "#1a5c3a" }}>Latest Health Articles</h3>
            <Link href="/blog" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: "#1a5c3a" }}>
              View all →
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                  style={{ border: "1px solid #dcf0e6" }}
                >
                  <span className="text-xs font-semibold px-2 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: "#dcf0e6", color: "#1a5c3a" }}>
                    {post.category}
                  </span>
                  <h4 className="font-bold text-sm leading-snug mb-2" style={{ color: "#1a5c3a" }}>{post.title}</h4>
                  <p className="text-xs" style={{ color: "#7a9e8c" }}>{post.readTime} read →</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

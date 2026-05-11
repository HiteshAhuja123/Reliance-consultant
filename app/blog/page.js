"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    category: "isms",
    label: "ISO 27001",
    gradient: "from-[#243659] to-[#1a2b4a]",
    title: "ISO 27001:2022 — What Has Changed and What It Means for Australian Organisations",
    excerpt: "The 2022 revision of ISO 27001 introduced significant structural changes, new controls, and an updated Annex A framework. For Australian organisations still working toward certification under the old standard, the transition deadline has passed. Here's everything you need to know...",
    date: "15 April 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    category: "quality",
    label: "Quality",
    gradient: "from-[#c9a84c] to-[#9a7830]",
    title: "The 7 Quality Management Principles of ISO 9001 Explained",
    excerpt: "A practical breakdown of the seven core principles underpinning ISO 9001 and how they translate into real operational improvements for Australian businesses.",
    date: "28 March 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    category: "safety",
    label: "Safety",
    gradient: "from-[#8a3a1a] to-[#c9513a]",
    title: "Understanding the WHS Act 2011: Key Obligations for PCBUs",
    excerpt: "A clear, practical guide to the primary duties of care under Australia's Work Health and Safety Act 2011, with guidance for Persons Conducting a Business or Undertaking.",
    date: "12 March 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 4,
    category: "environmental",
    label: "Environmental",
    gradient: "from-[#1a5c2a] to-[#2d8a3e]",
    title: "ISO 14001 vs. EMAS: Which Environmental Standard is Right for Your Organisation?",
    excerpt: "Comparing the two leading environmental management frameworks to help Australian organisations select the most appropriate pathway for their sustainability goals.",
    date: "5 March 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    category: "rail",
    label: "Rail Safety",
    gradient: "from-[#1a2b4a] to-[#00838f]",
    title: "RSNL Compliance in 2025: Key Changes and What Rail Operators Need to Know",
    excerpt: "A summary of recent amendments to the Rail Safety National Law and what they mean for accredited rail transport operators across Australia.",
    date: "20 February 2025",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 6,
    category: "risk",
    label: "Risk",
    gradient: "from-[#1a2b4a] to-[#243659]",
    title: "Building a Risk Register That Actually Works: Lessons from the Field",
    excerpt: "Most risk registers end up as static documents that gather dust. Here's how to build a dynamic, useful risk register based on our experience across 150+ client engagements.",
    date: "8 February 2025",
    readTime: "6 min read",
    featured: false,
  },
];

const filters = ["All Topics", "Quality", "Safety", "Environmental", "Rail Safety", "ISMS", "Risk"];
const filterMap = { "All Topics": "all", Quality: "quality", Safety: "safety", Environmental: "environmental", "Rail Safety": "rail", ISMS: "isms", Risk: "risk" };

export default function Blog() {
  const [active, setActive] = useState("all");

  const featured = posts.find((p) => p.featured);
  const regular = posts.filter((p) => !p.featured && (active === "all" || p.category === active));
  const showFeatured = active === "all" || featured?.category === active;

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-40 pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[#f857a6]/10 blur-[100px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 max-w-3xl">Insights &amp; Industry Updates</h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Expert commentary, practical guides, and regulatory updates from our team of compliance specialists — keeping you informed and ahead of change.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured */}
          {showFeatured && featured && (
            <div className="mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-6">Featured Article</span>
              <div className="bg-card border border-border rounded-2xl overflow-hidden grid md:grid-cols-2 hover:border-accent/30 transition-colors group">
                <div className={`h-72 md:h-auto bg-gradient-to-br ${featured.gradient} flex items-center justify-center relative`}>
                  <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">{featured.label}</span>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex gap-4 mb-4">
                    <span className="flex items-center gap-1.5 text-xs text-foreground/50"><Calendar size={12} className="text-accent" /> {featured.date}</span>
                    <span className="flex items-center gap-1.5 text-xs text-foreground/50"><Clock size={12} className="text-accent" /> {featured.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">{featured.title}</h2>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-6">{featured.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
                    Read Full Article <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="text-sm font-semibold text-foreground/50 flex items-center mr-2">Filter by:</span>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(filterMap[f])}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  active === filterMap[f]
                    ? "bg-accent text-white shadow-[0_4px_12px_rgba(0,242,254,0.3)]"
                    : "bg-card border border-border text-foreground/60 hover:border-accent hover:text-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regular.map((post) => (
              <article key={post.id} className="bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative`}>
                  <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest bg-white/10 text-white px-3 py-1 rounded-full border border-white/20">
                    {post.label}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex gap-4 mb-3">
                    <span className="flex items-center gap-1.5 text-xs text-foreground/50"><Calendar size={11} className="text-accent" /> {post.date}</span>
                    <span className="flex items-center gap-1.5 text-xs text-foreground/50"><Clock size={11} className="text-accent" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3 leading-snug">{post.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-4">{post.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all">
                    Read Article <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {regular.length === 0 && (
            <div className="text-center py-16 text-foreground/40">No articles in this category yet.</div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have a Compliance Question?</h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">Our specialists are happy to discuss your organisation's specific challenges. Get a free initial consultation today.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent to-[#f857a6] hover:shadow-[0_8px_20px_rgba(0,242,254,0.4)] hover:-translate-y-1 transition-all">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

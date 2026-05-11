"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight, MapPin, Calendar, Building2, X } from "lucide-react";

const projects = [
  {
    id: "p1",
    category: "rail",
    label: "Rail Safety",
    gradient: "from-[#1a2b4a] to-[#00838f]",
    title: "Metro Rail Operator SMS Overhaul",
    desc: "Full redevelopment of Safety Management System documentation and process for a major metropolitan rail operator — achieving ONRSR re-accreditation.",
    location: "Melbourne, VIC",
    year: "2024",
    sector: "Government",
    detail: {
      client: "Major Metropolitan Rail Operator, Melbourne VIC",
      scope: "Complete redevelopment of the operator's Safety Management System (SMS) documentation, including all required elements under the Rail Safety National Law (RSNL). The engagement involved document gap analysis, stakeholder interviews, SMS restructuring, staff consultation, and ONRSR submission support.",
      outcome: "Successful ONRSR re-accreditation achieved on first submission with zero major non-conformances raised. Staff safety awareness and documentation accessibility improved measurably across all depots.",
      duration: "12 months",
      team: "3 consultants",
    },
  },
  {
    id: "p2",
    category: "isms",
    label: "ISMS",
    gradient: "from-[#243659] to-[#1a2b4a]",
    title: "ISO 27001 Certification — Federal Agency",
    desc: "End-to-end ISO 27001:2022 ISMS implementation for a federal government agency, achieving first-time certification within 9 months.",
    location: "Canberra, ACT",
    year: "2024",
    sector: "Federal Government",
    detail: {
      client: "Federal Government Agency, Canberra ACT",
      scope: "End-to-end ISO 27001:2022 ISMS implementation covering all 93 Annex A controls. Delivered Statement of Applicability, risk register, internal audit program, management review framework, and full certification preparation including stage 1 and stage 2 audit support.",
      outcome: "ISO 27001:2022 certification achieved within 9 months of project commencement. Zero major non-conformances at certification audit. ISMS integrated with existing ASD Essential Eight obligations.",
      duration: "9 months",
      team: "2 consultants",
    },
  },
  {
    id: "p3",
    category: "quality",
    label: "Quality",
    gradient: "from-[#c9a84c] to-[#9a7830]",
    title: "ISO 9001 Multi-site Certification",
    desc: "Quality Management System implementation across 6 sites for a national construction company, achieving ISO 9001:2015 certification across all sites simultaneously.",
    location: "National",
    year: "2023",
    sector: "Private Sector",
    detail: null,
  },
  {
    id: "p4",
    category: "environmental",
    label: "Environmental",
    gradient: "from-[#1a5c2a] to-[#2d8a3e]",
    title: "Mining Company ISO 14001 EMS",
    desc: "Design and implementation of an ISO 14001:2015 Environmental Management System for a mid-tier mining operation in Western Australia, including stakeholder consultation.",
    location: "Perth, WA",
    year: "2023",
    sector: "Mining",
    detail: null,
  },
  {
    id: "p5",
    category: "safety",
    label: "Safety",
    gradient: "from-[#8a3a1a] to-[#c9513a]",
    title: "FSC Accreditation — Major Contractor",
    desc: "Supported a top-tier building contractor in achieving Federal Safety Commissioner accreditation, including WHS system redesign, documentation, and staff training.",
    location: "Sydney, NSW",
    year: "2023",
    sector: "Construction",
    detail: null,
  },
  {
    id: "p6",
    category: "risk",
    label: "Risk",
    gradient: "from-[#1a2b4a] to-[#243659]",
    title: "Enterprise Risk Framework — Utility Provider",
    desc: "ISO 31000 enterprise risk framework and risk register development for a major utility provider, including facilitated risk workshops with executive leadership.",
    location: "Brisbane, QLD",
    year: "2022",
    sector: "Utilities",
    detail: null,
  },
  {
    id: "p7",
    category: "quality",
    label: "Quality",
    gradient: "from-[#00838f] to-[#00a8b5]",
    title: "Integrated IMS — Manufacturing Group",
    desc: "Integrated Management System (ISO 9001, 14001, 45001) design and implementation for a Queensland manufacturing group, achieving triple certification.",
    location: "Brisbane, QLD",
    year: "2022",
    sector: "Manufacturing",
    detail: null,
  },
  {
    id: "p8",
    category: "rail",
    label: "Rail Safety",
    gradient: "from-[#2d3a5a] to-[#1a2b4a]",
    title: "Regional Rail Safety Audit Program",
    desc: "Three-year internal audit program for a regional rail network operator — covering all RSNL elements, corrective actions tracking, and management review reporting.",
    location: "Adelaide, SA",
    year: "2021–2024",
    sector: "Government",
    detail: null,
  },
  {
    id: "p9",
    category: "isms",
    label: "ISMS",
    gradient: "from-[#3a1a5c] to-[#6a3a9c]",
    title: "Cyber Risk Assessment — Financial Services",
    desc: "Comprehensive ISO 27001 gap assessment and cyber risk programme for a financial services firm, resulting in a prioritised 18-month security improvement roadmap.",
    location: "Sydney, NSW",
    year: "2024",
    sector: "Financial Services",
    detail: null,
  },
];

const filters = ["All Projects", "Quality", "Safety", "Environmental", "Rail Safety", "ISMS", "Risk"];
const filterMap = { "All Projects": "all", Quality: "quality", Safety: "safety", Environmental: "environmental", "Rail Safety": "rail", ISMS: "isms", Risk: "risk" };

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const [modal, setModal] = useState(null);

  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

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
            <span className="text-white/80">Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 max-w-3xl">Our Work &amp; Case Studies</h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Real-world projects delivering measurable compliance outcomes for government, corporate, and SME clients across Australia and internationally.
          </p>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(filterMap[f])}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
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
            {visible.map((project) => (
              <div
                key={project.id}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => project.detail && setModal(project)}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                  <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest bg-white/10 text-white px-3 py-1 rounded-full border border-white/20">
                    {project.label}
                  </span>
                  {project.detail && (
                    <span className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/60 text-xs">
                      View Details →
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-foreground mb-2">{project.title}</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-foreground/50">
                    <span className="flex items-center gap-1"><MapPin size={12} className="text-accent" /> {project.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} className="text-accent" /> {project.year}</span>
                    <span className="flex items-center gap-1"><Building2 size={12} className="text-accent" /> {project.sector}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[["150+", "Engagements Completed"], ["12", "Industry Sectors"], ["8", "States & Territories"], ["100%", "First-time Cert. Success"]].map(([num, label]) => (
              <div key={label}>
                <div className="text-4xl font-extrabold text-accent mb-2">{num}</div>
                <div className="text-sm text-white/50">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your Organisation Could Be Our Next Success Story</h2>
          <p className="text-lg text-foreground/60 mb-10 max-w-2xl mx-auto">Contact us for an obligation-free consultation and discover how we can help achieve your compliance objectives.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent to-[#f857a6] hover:shadow-[0_8px_20px_rgba(0,242,254,0.4)] hover:-translate-y-1 transition-all">
              Start the Conversation
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-foreground border-2 border-border hover:border-accent hover:text-accent transition-all">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setModal(null)}>
          <div className="bg-card border border-border rounded-2xl max-w-lg w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModal(null)} className="absolute top-4 right-4 p-2 text-foreground/40 hover:text-foreground transition-colors">
              <X size={20} />
            </button>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-4">{modal.label}</span>
            <h3 className="text-xl font-bold text-foreground mb-6">{modal.title}</h3>
            {modal.detail && (
              <div className="space-y-4 text-sm text-foreground/70 leading-relaxed">
                <p><span className="font-semibold text-foreground">Client:</span> {modal.detail.client}</p>
                <p><span className="font-semibold text-foreground">Scope:</span> {modal.detail.scope}</p>
                <p><span className="font-semibold text-foreground">Outcome:</span> {modal.detail.outcome}</p>
                <div className="flex gap-8 pt-2">
                  <div><span className="font-semibold text-foreground">Duration:</span> {modal.detail.duration}</div>
                  <div><span className="font-semibold text-foreground">Team:</span> {modal.detail.team}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

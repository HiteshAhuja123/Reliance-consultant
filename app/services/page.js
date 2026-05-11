import Link from "next/link";
import { Award, HardHat, Leaf, Train, Gavel, AlertTriangle, Lock, GraduationCap, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Services | Reliance Consultant Services Pty Ltd",
  description:
    "Expert consulting, auditing, and training in Quality Management (ISO 9001), Safety, Environmental (ISO 14001), Rail Safety, FSC, Risk Management, and ISMS (ISO 27001).",
};

const services = [
  {
    id: "quality",
    icon: Award,
    title: "Quality Management Systems",
    desc: "We help organisations design, implement, and maintain ISO 9001:2015 Quality Management Systems that drive operational efficiency, reduce errors, and build customer confidence. Our consultants work from initial gap analysis through to third-party certification.",
    tags: ["ISO 9001:2015", "Gap Analysis", "Internal Audits", "Documentation", "Training", "Certification Support"],
    highlight: ["ISO 9001:2015", "Training"],
  },
  {
    id: "safety",
    icon: HardHat,
    title: "Work Health & Safety (WHS/OHS)",
    desc: "From comprehensive WHS management systems to targeted safety audits, incident investigations, and risk assessments — we help protect your workforce and achieve full WHS/OHS compliance across all Australian jurisdictions.",
    tags: ["WHS Act 2011", "OHS Compliance", "Safety Auditing", "Incident Investigation", "Hazard Identification", "SMS Development"],
    highlight: ["WHS Act 2011", "Hazard Identification"],
  },
  {
    id: "environmental",
    icon: Leaf,
    title: "Environmental Management Systems",
    desc: "We support organisations in achieving ISO 14001:2015 certification, meeting state and federal environmental regulations, and integrating sustainability into core business operations. From EMS design to environmental impact assessments.",
    tags: ["ISO 14001:2015", "EMS Design", "Environmental Auditing", "Impact Assessments", "Sustainability Reporting", "Regulatory Compliance"],
    highlight: ["ISO 14001:2015", "Sustainability Reporting"],
  },
  {
    id: "rail",
    icon: Train,
    title: "Rail Safety Consulting",
    desc: "Specialist rail safety consulting under the Rail Safety National Law (RSNL). We assist accredited rail transport operators with Safety Management System development, ONRSR compliance, independent safety assessments, and risk-based safety programs.",
    tags: ["RSNL Compliance", "ONRSR Accreditation", "SMS Development", "Safety Assurance", "Risk Assessment", "Safety Culture"],
    highlight: ["RSNL Compliance", "Risk Assessment"],
  },
  {
    id: "fsc",
    icon: Gavel,
    title: "Federal Safety Commission (FSC)",
    desc: "Expert guidance for accreditation under the Building and Construction Industry (Improving Productivity) Act. We support contractors in achieving FSC accreditation, maintaining WHS management systems, and meeting federal building and construction safety standards.",
    tags: ["FSC Accreditation", "BCII Act", "WHS Documentation", "Audit Preparation", "Compliance Review", "Training"],
    highlight: ["FSC Accreditation", "Compliance Review"],
  },
  {
    id: "risk",
    icon: AlertTriangle,
    title: "Risk Management",
    desc: "ISO 31000:2018 compliant enterprise risk management frameworks, tailored risk registers, business impact analyses, business continuity planning, and bow-tie risk assessments. We help organisations understand, quantify, and mitigate their most critical risks.",
    tags: ["ISO 31000:2018", "Enterprise Risk", "Risk Registers", "BCP Development", "Bow-Tie Analysis", "Risk Workshops"],
    highlight: ["ISO 31000:2018", "Bow-Tie Analysis"],
  },
  {
    id: "isms",
    icon: Lock,
    title: "Information Security Management (ISMS)",
    desc: "End-to-end ISO 27001:2022 ISMS implementation, from Statement of Applicability development to internal audit programs and third-party certification readiness. We also conduct cyber risk assessments and support compliance with the Australian Privacy Act and Essential Eight.",
    tags: ["ISO 27001:2022", "ISMS Implementation", "SOA Development", "Cyber Risk", "Essential Eight", "Privacy Act"],
    highlight: ["ISO 27001:2022", "Essential Eight"],
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training & Capability Building",
    desc: "Customised training programs covering internal auditor development, awareness training for all staff, management system training, and certification preparation workshops. Available on-site, online, or blended — across all our service areas.",
    tags: ["Internal Auditor", "Lead Auditor", "Awareness Programs", "Online & On-site", "Customised Workshops", "CPD Accredited"],
    highlight: ["Internal Auditor", "Customised Workshops"],
  },
];

const standards = [
  ["ISO 9001", "Quality Management"],
  ["ISO 14001", "Environmental"],
  ["ISO 27001", "Info Security"],
  ["ISO 31000", "Risk Management"],
  ["ISO 45001", "OH&S"],
  ["AS/NZS", "4801 Safety"],
  ["RSNL", "Rail Safety Law"],
  ["FSC", "Fed. Safety Comm."],
  ["WHS Act", "2011 (Cth)"],
  ["PSPF", "Protective Security"],
  ["E8", "Essential Eight"],
  ["Privacy Act", "1988 (Cth)"],
];

export default function Services() {
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
            <span className="text-white/80">Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 max-w-3xl">Our Consulting Services</h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Comprehensive compliance, auditing, and training solutions across all major ISO standards and Australian regulatory frameworks.
          </p>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-4">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">End-to-End Compliance Solutions</h2>
            <p className="text-foreground/60">Whether you need initial certification support, internal audit programs, or ongoing compliance management, we have the expertise to deliver.</p>
          </div>

          <div className="space-y-6">
            {services.map(({ id, icon: Icon, title, desc, tags, highlight }) => (
              <div key={id} id={id} className="bg-card border border-border rounded-2xl p-8 flex gap-8 items-start hover:border-accent/30 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
                  <p className="text-foreground/60 leading-relaxed mb-5">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          highlight.includes(tag)
                            ? "bg-accent/20 text-accent border border-accent/30"
                            : "bg-foreground/5 text-foreground/60 border border-border"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STANDARDS GRID */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1.5 rounded-full mb-4">Standards & Frameworks</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ISO Standards & Regulatory Frameworks We Cover</h2>
            <p className="text-white/50">Our consultants hold certifications across a broad range of international standards and Australian legislative frameworks.</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {standards.map(([iso, desc]) => (
              <div key={iso} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-accent/10 hover:border-accent/30 transition-colors">
                <div className="text-lg font-extrabold text-white mb-1">{iso}</div>
                <div className="text-xs text-white/50">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-4">Flexible Delivery</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Engage With You</h2>
            <p className="text-foreground/60">We offer three core engagement models to suit your organisation's needs, timeline, and budget.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-accent text-2xl mx-auto mb-6">📋</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Project-Based</h3>
              <p className="text-sm text-foreground/60 mb-6">Fixed-scope engagements for specific deliverables — certification support, gap assessments, or system implementations with defined milestones.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold border-2 border-border text-foreground hover:border-accent hover:text-accent transition-colors">
                Enquire Now
              </Link>
            </div>
            <div className="bg-primary border-2 border-accent/30 rounded-2xl p-8 text-center relative hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent text-2xl mx-auto mb-6">📅</div>
              <h3 className="text-xl font-bold text-white mb-3">Retained Services</h3>
              <p className="text-sm text-white/60 mb-6">Ongoing monthly or quarterly support retainers for continuous compliance management, regular audits, and management system maintenance.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-accent to-accent/80 text-white hover:shadow-[0_8px_20px_rgba(0,242,254,0.3)] transition-all">
                Enquire Now
              </Link>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-accent text-2xl mx-auto mb-6">👥</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Embedded Consulting</h3>
              <p className="text-sm text-foreground/60 mb-6">Our consultants work on-site as embedded team members, providing intensive hands-on support for complex transformation programs and major compliance overhauls.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold border-2 border-border text-foreground hover:border-accent hover:text-accent transition-colors">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Not Sure Where to Start?</h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">Our free initial consultation includes a high-level compliance health check so you know exactly where you stand and what steps to take next.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent to-[#f857a6] hover:shadow-[0_8px_20px_rgba(0,242,254,0.4)] hover:-translate-y-1 transition-all">
              Get Free Consultation
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/20 hover:border-white hover:bg-white/10 transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, ShieldCheck, Award, HardHat, Leaf, Train, AlertTriangle, Lock, Users, Activity, Target } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

const serviceIcons = [Award, HardHat, Leaf, Train, AlertTriangle, Lock];
const whyChooseIcons = [Users, Activity, Target];

const heroTitleLines = ["Compliance.", "Confidence.", "Excellence."];
const heroDescription =
  "Reliance Consultant Services delivers expert ISO consulting, auditing, and training across quality management, safety, environmental, rail safety, and information security — empowering your organisation to achieve and maintain world-class standards.";
const heroStats = [
  { num: "150+", label: "Projects Completed" },
  { num: "20+", label: "Years Experience" },
  { num: "98%", label: "Client Satisfaction" },
];
const heroCoreServices = [
  { name: "Quality Management Systems", badge: "ISO 9001" },
  { name: "Safety (WHS/OHS)", badge: "Compliance" },
  { name: "Environmental Management", badge: "ISO 14001" },
  { name: "Rail Safety", badge: "RSNL" },
  { name: "Information Security", badge: "ISO 27001" },
  { name: "Risk Management", badge: "ISO 31000" },
];
const servicesOverview = {
  label: "What We Do",
  title: "Comprehensive Compliance & Risk Solutions",
  description:
    "From initial gap analysis to full certification, we support your journey across all major ISO standards and regulatory frameworks.",
  cards: [
    { title: "Quality Management", description: "Implement and maintain ISO 9001 compliant QMS frameworks to drive operational excellence and customer satisfaction.", href: "/services#quality" },
    { title: "Safety (WHS/OHS)", description: "Comprehensive WHS/OHS management, safety auditing, and hazard identification to protect your workforce and reduce liability.", href: "/services#safety" },
    { title: "Environmental Management", description: "ISO 14001 environmental management systems, compliance auditing, and sustainability reporting for responsible operations.", href: "/services#environmental" },
    { title: "Rail Safety", description: "Specialised rail safety consulting, RSNL compliance, safety management systems and independent safety assurance.", href: "/services#rail" },
    { title: "Risk Management", description: "ISO 31000 compliant risk frameworks, enterprise risk assessment, and business continuity planning for resilient operations.", href: "/services#risk" },
    { title: "Information Security (ISMS)", description: "ISO 27001 information security management systems, cyber risk assessments, and data protection compliance frameworks.", href: "/services#isms" },
  ],
};
const whyChoose = {
  label: "Why Choose Us",
  title: "Your Trusted Partner in Risk, Quality & Safety",
  description:
    "We bring deep industry expertise, practical on-the-ground experience, and a client-first approach that goes far beyond box-ticking compliance.",
  features: [
    { title: "Expert Consultants", desc: "Our team comprises certified lead auditors and sector specialists with decades of hands-on experience across government and industry." },
    { title: "Tailored Solutions", desc: "Every engagement is customised to your organisation's unique context, risk profile, and strategic objectives — no cookie-cutter approaches." },
    { title: "Measurable Outcomes", desc: "We focus on delivering tangible, measurable improvements with clear metrics and continuous improvement pathways built in." },
  ],
  stats: [
    { num: "150+", label: "Projects Completed" },
    { num: "20+", label: "Years Experience" },
    { num: "7", label: "ISO Standards Covered" },
    { num: "98%", label: "Client Satisfaction" },
  ],
  highlight: { num: "100%", label: "First-time Certification Success Rate" },
};
const ctaBanner = {
  title: "Ready to Achieve Compliance Excellence?",
  description:
    "Partner with Australia's leading ISO consultants. Get a free gap analysis and discover how we can fast-track your certification journey.",
  cta: { text: "Get Free Consultation", href: "/contact" },
};

export default function Home() {
  return (
    <>
      {/* ======= HERO ======= */}
      <section className="relative lg:min-h-screen min-h-[calc(100vh-5rem)] flex items-center pt-24 pb-12 sm:pt-32 sm:pb-20 overflow-hidden bg-primary">
        {/* Background Mesh */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Hero Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex flex-col sm:flex-row items-center gap-2 bg-white/10 border border-white/15 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 shadow-sm">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  Australia & International
                </div>
                <span className="text-[10px] text-white/70 uppercase tracking-[0.2em]">ISO Consulting & Certification</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                {heroTitleLines.map((line, index) => (
                  <Fragment key={index}>
                    {line}
                    {index < heroTitleLines.length - 1 && <br />}
                  </Fragment>
                ))}
              </h1>

              <p className="max-w-2xl text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-10">
                {heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-16">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent to-accent/80 hover:shadow-[0_8px_20px_rgba(39,105,114,0.35)] hover:-translate-y-1 transition-all w-full sm:w-auto">
                  <MessageSquare size={20} /> Get Free Consultation
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-white border-2 border-white/20 hover:border-white hover:bg-white/10 transition-all w-full sm:w-auto">
                  Explore Services <ArrowRight size={20} />
                </Link>
              </div>

              <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-white/10">
                {heroStats.map((stat, i) => (
                  <div key={i}>
                    <span className="block text-3xl font-bold text-accent mb-1">{stat.num}</span>
                    <span className="text-sm font-medium text-white/50">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Right Card */}
            <div className="relative hidden lg:block">
              <div className="bg-white/10 border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white shadow-[0_4px_16px_rgba(0,242,254,0.3)]">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Our Core Services</h3>
                    <p className="text-sm text-white/50">ISO & Compliance Expertise</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {heroCoreServices.map((service, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm font-medium text-white/80">{service.name}</span>
                      <span className="ml-auto text-xs font-bold px-2.5 py-1 bg-white/15 text-white rounded-full">{service.badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-3 bg-black/80 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Ready to start?</p>
            <p className="text-sm font-semibold text-white">Book a free consultation</p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center px-4 py-3 rounded-2xl bg-accent text-sm font-semibold text-white shadow-lg hover:bg-accent/90 transition">
            Contact Us
          </Link>
        </div>
      </div>


      {/* ======= SERVICES OVERVIEW ======= */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-4">{servicesOverview.label}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{servicesOverview.title}</h2>
            <p className="text-foreground/60 text-base md:text-lg">{servicesOverview.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesOverview.cards.map((card, i) => {
              const Icon = serviceIcons[i];
              return (
                <ServiceCard
                  key={card.title}
                  icon={Icon}
                  title={card.title}
                  description={card.description}
                  href={card.href}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ======= WHY CHOOSE US ======= */}
      <section className="py-16 sm:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-4">{whyChoose.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{whyChoose.title}</h2>
              <p className="text-foreground/60 text-lg mb-10">{whyChoose.description}</p>

              <div className="space-y-8">
                {whyChoose.features.map((feature, i) => {
                  const Icon = whyChooseIcons[i];
                  return (
                    <div key={i} className="flex gap-5">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
                        <p className="text-sm text-foreground/60 leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {whyChoose.stats.map((stat, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <span className="block text-4xl font-extrabold text-accent mb-2">{stat.num}</span>
                  <span className="text-sm font-medium text-foreground/60">{stat.label}</span>
                </div>
              ))}
              <div className="sm:col-span-2 bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">
                  <Award size={32} />
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-foreground mb-1">{whyChoose.highlight.num}</span>
                  <span className="text-sm font-medium text-foreground/70">{whyChoose.highlight.label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= CTA BANNER ======= */}
      <section className="relative py-16 sm:py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-3xl rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{ctaBanner.title}</h2>
          <p className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto">{ctaBanner.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={ctaBanner.cta.href} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent to-primary hover:shadow-[0_8px_20px_rgba(39,105,114,0.35)] hover:-translate-y-1 transition-all">
              {ctaBanner.cta.text}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

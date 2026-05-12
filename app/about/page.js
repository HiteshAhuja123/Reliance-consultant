import Link from "next/link";
import { Target, Eye, Handshake, ChevronRight } from "lucide-react";

export const metadata = {
  title: "About Us | Reliance Consultant Services Pty Ltd",
  description:
    "Learn about Reliance Consultant Services — our story, mission, values, and the expert team behind Australia's trusted compliance consulting firm.",
};

const values = [
  { icon: "🎯", title: "Integrity", desc: "We provide honest, unbiased assessments — even when it's not what clients initially want to hear. Trust is our most important asset." },
  { icon: "💡", title: "Excellence", desc: "We hold ourselves to the same rigorous standards we help our clients achieve — continuous improvement is not just something we preach." },
  { icon: "🤝", title: "Partnership", desc: "We invest in long-term relationships, not one-off transactions. Your success is our success, and we measure ourselves by your outcomes." },
  { icon: "🔍", title: "Thoroughness", desc: "Compliance lives in the details. We are meticulous, structured, and comprehensive in everything we do — no shortcuts, no compromises." },
  { icon: "🌱", title: "Sustainability", desc: "We design systems and processes built for longevity — helping organisations maintain compliance independently long after we've gone." },
  { icon: "🌏", title: "Inclusivity", desc: "We serve organisations of every size — from government agencies to small businesses — bringing the same level of commitment to all." },
  { icon: "⚡", title: "Responsiveness", desc: "Regulatory environments don't stand still. We respond quickly to client needs and keep pace with the latest standards and legislative changes." },
  { icon: "📚", title: "Knowledge", desc: "Our consultants invest heavily in ongoing professional development — ensuring you always benefit from the most current expertise and best practices." },
];

const team = [
  { initials: "AR", name: "Andrew Reynolds", role: "Managing Director & Principal Consultant", bio: "Lead auditor with 22 years across ISO 9001, ISO 14001, and WHS frameworks. Former federal government compliance officer." },
  { initials: "LC", name: "Laura Chen", role: "Director — Rail Safety & Risk", bio: "Specialised rail safety expert and ISO 31000 practitioner with 18 years in rail infrastructure safety management systems." },
  { initials: "DM", name: "David Mitchell", role: "Senior Consultant — ISMS & Cyber Risk", bio: "ISO 27001 certified lead implementer and CISM holder. Former CISO with deep expertise in information security governance." },
  { initials: "PS", name: "Priya Sharma", role: "Senior Consultant — Environmental", bio: "ISO 14001 lead auditor and sustainability specialist, with expertise spanning mining, construction, and utilities sectors." },
];

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-40 pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-primary/10 blur-3xl rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 max-w-3xl">
            About Reliance Consultant Services
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Delivering compliance confidence across Australia and the world since our founding — driven by integrity, expertise, and genuine commitment to client success.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl h-[400px] flex items-center justify-center border border-white/10">
                <div className="text-center text-white/20">
                  <div className="text-8xl font-extrabold">RC</div>
                  <div className="text-sm font-medium tracking-widest uppercase mt-2">Reliance Consultant Services</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-3xl font-extrabold text-white">20+</div>
                <div className="text-sm font-medium text-white/80">Years of Excellence</div>
              </div>
            </div>
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Built on a Foundation of Trust &amp; Expertise</h2>
              <p className="text-foreground/60 leading-relaxed mb-4">
                Reliance Consultant Services Pty Ltd was established by a team of seasoned compliance and risk professionals who recognised a critical gap in the Australian market: organisations needed a consulting partner that combined genuine technical expertise with practical, on-the-ground support.
              </p>
              <p className="text-foreground/60 leading-relaxed mb-4">
                Since our inception, we have grown from a small boutique practice to a nationally recognised firm, trusted by corporations, government bodies, infrastructure operators, and SMEs across Australia and internationally.
              </p>
              <p className="text-foreground/60 leading-relaxed mb-8">
                Our ethos has always been the same: we don't just help clients tick boxes. We work shoulder-to-shoulder with your teams to build genuine capability and create cultures of compliance that endure well beyond our engagement.
              </p>
              <div className="flex gap-12">
                {[["150+", "Organisations Helped"], ["7", "ISO Standards"], ["5", "States Covered"]].map(([num, label]) => (
                  <div key={label}>
                    <div className="text-3xl font-bold text-accent">{num}</div>
                    <div className="text-sm text-foreground/50 font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission / Vision / Approach */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To empower organisations of all sizes to achieve and sustain compliance excellence through expert consulting, practical training, and rigorous auditing — building capability that lasts." },
              { icon: Eye, title: "Our Vision", desc: "To be Australia's most trusted compliance and risk consultancy — recognised for integrity, measurable impact, and the depth of relationships we build with every client we serve." },
              { icon: Handshake, title: "Our Approach", desc: "We integrate deeply with your organisation, speaking your industry's language, understanding your unique pressures, and co-creating solutions that actually work in your operating environment." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-4">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-foreground/60">These principles guide every client engagement, every audit, and every conversation we have.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:border-accent/30 transition-all duration-300">
                <span className="text-3xl block mb-4">{icon}</span>
                <h4 className="text-lg font-bold text-foreground mb-2">{title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-4">The People Behind the Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Leadership Team</h2>
            <p className="text-foreground/60">Experienced professionals who bring decades of sector expertise, genuine passion, and a commitment to client success.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(({ initials, name, role, bio }) => (
              <div key={name} className="bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="h-40 bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-4xl font-extrabold text-accent">{initials}</span>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-foreground mb-1">{name}</h4>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wide block mb-3">{role}</span>
                  <p className="text-sm text-foreground/60 leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Work With a Team That Truly Understands Compliance</h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">Let's discuss how Reliance Consultant Services can support your organisation's compliance journey.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent to-primary hover:shadow-[0_8px_20px_rgba(0,242,254,0.4)] hover:-translate-y-1 transition-all">
              Get In Touch
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/20 hover:border-white hover:bg-white/10 transition-all">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

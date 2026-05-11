import Link from "next/link";
import { ArrowRight, MessageSquare, ShieldCheck, Award, HardHat, Leaf, Train, AlertTriangle, Lock, Users, Activity, Target, Globe } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      {/* ======= HERO ======= */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-primary">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[100px] rounded-full mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#f857a6]/20 blur-[120px] rounded-full mix-blend-screen"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Australia & International
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Compliance.<br />
                <span className="text-accent drop-shadow-[0_0_15px_rgba(0,242,254,0.3)]">Confidence.</span><br />
                Excellence.
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10">
                Reliance Consultant Services delivers expert ISO consulting, auditing, and training across quality management, safety, environmental, rail safety, and information security — empowering your organisation to achieve world-class standards.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-16">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent to-accent/80 hover:shadow-[0_8px_20px_rgba(0,242,254,0.4)] hover:-translate-y-1 transition-all">
                  <MessageSquare size={20} /> Get Free Consultation
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/20 hover:border-white hover:bg-white/10 transition-all">
                  Explore Services <ArrowRight size={20} />
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                {[
                  { num: "150+", label: "Projects Completed" },
                  { num: "20+", label: "Years Experience" },
                  { num: "98%", label: "Client Satisfaction" },
                ].map((stat, i) => (
                  <div key={i}>
                    <span className="block text-3xl font-bold text-accent mb-1">{stat.num}</span>
                    <span className="text-sm font-medium text-white/50">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Right Card */}
            <div className="relative hidden lg:block">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-[#f857a6] flex items-center justify-center text-white shadow-[0_4px_16px_rgba(0,242,254,0.3)]">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Our Core Services</h3>
                    <p className="text-sm text-white/50">ISO & Compliance Expertise</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { name: "Quality Management Systems", badge: "ISO 9001" },
                    { name: "Safety (WHS/OHS)", badge: "Compliance" },
                    { name: "Environmental Management", badge: "ISO 14001" },
                    { name: "Rail Safety", badge: "RSNL" },
                    { name: "Information Security", badge: "ISO 27001" },
                    { name: "Risk Management", badge: "ISO 31000" },
                  ].map((service, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#f857a6]"></div>
                      <span className="text-sm font-medium text-white/80">{service.name}</span>
                      <span className="ml-auto text-xs font-bold px-2.5 py-1 bg-accent/20 text-accent rounded-full">{service.badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= TRUST BAR ======= */}
      <div className="bg-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Trust logos or icons could go here, currently text items */}
          <div className="flex items-center gap-2 font-medium text-sm text-primary"><Award className="text-accent" /> ISO Certified Consultants</div>
          <div className="flex items-center gap-2 font-medium text-sm text-primary"><Globe className="text-accent" /> Australia-wide & International</div>
          <div className="flex items-center gap-2 font-medium text-sm text-primary"><ShieldCheck className="text-accent" /> Government & Private Sector</div>
          <div className="flex items-center gap-2 font-medium text-sm text-primary"><Users className="text-accent" /> 20+ Years Experience</div>
        </div>
      </div>

      {/* ======= SERVICES OVERVIEW ======= */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-4">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Compliance & Risk Solutions</h2>
            <p className="text-foreground/60 text-lg">From initial gap analysis to full certification, we support your journey across all major ISO standards and regulatory frameworks.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Award} 
              title="Quality Management" 
              description="Implement and maintain ISO 9001 compliant QMS frameworks to drive operational excellence and customer satisfaction." 
              href="/services#quality" 
            />
            <ServiceCard 
              icon={HardHat} 
              title="Safety (WHS/OHS)" 
              description="Comprehensive WHS/OHS management, safety auditing, and hazard identification to protect your workforce and reduce liability." 
              href="/services#safety" 
            />
            <ServiceCard 
              icon={Leaf} 
              title="Environmental Management" 
              description="ISO 14001 environmental management systems, compliance auditing, and sustainability reporting for responsible operations." 
              href="/services#environmental" 
            />
            <ServiceCard 
              icon={Train} 
              title="Rail Safety" 
              description="Specialised rail safety consulting, RSNL compliance, safety management systems and independent safety assurance." 
              href="/services#rail" 
            />
            <ServiceCard 
              icon={AlertTriangle} 
              title="Risk Management" 
              description="ISO 31000 compliant risk frameworks, enterprise risk assessment, and business continuity planning for resilient operations." 
              href="/services#risk" 
            />
            <ServiceCard 
              icon={Lock} 
              title="Information Security (ISMS)" 
              description="ISO 27001 information security management systems, cyber risk assessments, and data protection compliance frameworks." 
              href="/services#isms" 
            />
          </div>
        </div>
      </section>

      {/* ======= WHY CHOOSE US ======= */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-4">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your Trusted Partner in Risk, Quality & Safety</h2>
              <p className="text-foreground/60 text-lg mb-10">We bring deep industry expertise, practical on-the-ground experience, and a client-first approach that goes far beyond box-ticking compliance.</p>
              
              <div className="space-y-8">
                {[
                  { icon: Users, title: "Expert Consultants", desc: "Our team comprises certified lead auditors and sector specialists with decades of hands-on experience." },
                  { icon: Activity, title: "Tailored Solutions", desc: "Every engagement is customised to your organisation's unique context, risk profile, and strategic objectives." },
                  { icon: Target, title: "Measurable Outcomes", desc: "We focus on delivering tangible, measurable improvements with clear metrics and continuous improvement." },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-foreground/60 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { num: "150+", label: "Projects Completed" },
                { num: "20+", label: "Years Experience" },
                { num: "7", label: "ISO Standards Covered" },
                { num: "98%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <span className="block text-4xl font-extrabold text-accent mb-2">{stat.num}</span>
                  <span className="text-sm font-medium text-foreground/60">{stat.label}</span>
                </div>
              ))}
              <div className="sm:col-span-2 bg-gradient-to-br from-accent/10 to-[#f857a6]/10 border border-accent/20 rounded-2xl p-8 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">
                  <Award size={32} />
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-foreground mb-1">100%</span>
                  <span className="text-sm font-medium text-foreground/70">First-time Certification Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= CTA BANNER ======= */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Achieve Compliance Excellence?</h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">Speak with one of our specialists today and discover how Reliance Consultant Services can strengthen your organisation's compliance posture.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent to-[#f857a6] hover:shadow-[0_8px_20px_rgba(0,242,254,0.4)] hover:-translate-y-1 transition-all">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

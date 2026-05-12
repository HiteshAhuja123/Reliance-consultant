"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight, MapPin, Phone, Mail, Globe } from "lucide-react";

const offices = [
  { emoji: "🏙️", city: "Sydney (HQ)", address: "Level 10, 123 Business Avenue\nSydney NSW 2000" },
  { emoji: "🌆", city: "Melbourne", address: "Level 5, 456 Collins Street\nMelbourne VIC 3000" },
  { emoji: "🏛️", city: "Brisbane", address: "Level 8, 789 George Street\nBrisbane QLD 4000" },
  { emoji: "🏢", city: "Perth", address: "Level 3, 321 St Georges Terrace\nPerth WA 6000" },
];

const faqs = [
  {
    q: "How long does an ISO certification typically take?",
    a: "It depends on the standard and the size/complexity of your organisation. For a small-to-medium organisation pursuing ISO 9001, 6–12 months is typical. For ISO 27001, 9–15 months. We conduct an initial gap assessment to give you a more precise timeline based on your specific starting point.",
  },
  {
    q: "Do you only work with large organisations?",
    a: "Not at all. We work with organisations of all sizes — from sole traders and SMEs to large government agencies and multinationals. Our approach is always scaled to suit your organisation's resources and context.",
  },
  {
    q: "What does the free initial consultation involve?",
    a: "Our free 30-minute consultation is a no-obligation conversation to understand your goals, current compliance position, and any immediate challenges. We use this to determine whether and how we can help, and to outline a potential engagement approach. There's no sales pressure — just honest, expert advice.",
  },
  {
    q: "Can you work with clients outside Australia?",
    a: "Yes. While most of our engagements are across Australia, we regularly support organisations in New Zealand, Southeast Asia, and the Pacific. Our consultants are experienced in working remotely and can adapt to different regulatory environments.",
  },
  {
    q: "Do you provide certification body services?",
    a: "No — we are independent consultants, not a certification body. This means our role is to prepare and support your organisation for third-party certification audits. This independence means we have no conflicts of interest and our advice is always in your organisation's best interest.",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

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
            <span className="text-white/80">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 max-w-3xl">Get In Touch</h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Ready to start your compliance journey? Reach out for a free, obligation-free consultation with one of our specialists.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-4">Contact Information</span>
              <h2 className="text-3xl font-bold text-foreground mb-4">We're Here to Help</h2>
              <p className="text-foreground/60 leading-relaxed mb-10">
                Whether you have a specific project in mind or just want to explore your options, our team is ready to listen. We offer a free 30-minute initial consultation to all new enquiries.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: MapPin, label: "Office Address", value: "Level 10, 123 Business Avenue\nSydney NSW 2000, Australia" },
                  { icon: Phone, label: "Phone", value: "+61 2 9000 0000\nMon–Fri, 8:30am – 5:30pm AEST" },
                  { icon: Mail, label: "Email", value: "info@relianceconsultant.com.au\nWe respond within 1 business day" },
                  { icon: Globe, label: "Website", value: "www.relianceconsultant.com.au" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 bg-card border border-border rounded-xl p-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-1">{label}</div>
                      <div className="text-sm text-foreground/60 whitespace-pre-line">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border rounded-xl h-48 flex items-center justify-center text-foreground/30">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto mb-2 text-accent/40" />
                  <div className="text-sm">Google Maps — Sydney CBD Office</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-4">Free Consultation</span>
              <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
              <p className="text-sm text-foreground/60 mb-8">Fill in your details and we'll be in touch within one business day to arrange your free initial consultation.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-foreground/60">Thank you — we've received your message and will be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">First Name <span className="text-red-400">*</span></label>
                      <input type="text" required placeholder="Jane" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Last Name <span className="text-red-400">*</span></label>
                      <input type="text" required placeholder="Smith" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent transition-colors" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email Address <span className="text-red-400">*</span></label>
                      <input type="email" required placeholder="jane@company.com.au" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                      <input type="tel" placeholder="+61 4XX XXX XXX" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Organisation / Company</label>
                    <input type="text" placeholder="Your organisation name" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Service of Interest <span className="text-red-400">*</span></label>
                    <select required className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                      <option value="">Select a service area…</option>
                      <option>Quality Management (ISO 9001)</option>
                      <option>Safety / WHS / OHS</option>
                      <option>Environmental Management (ISO 14001)</option>
                      <option>Rail Safety</option>
                      <option>Federal Safety Commission (FSC)</option>
                      <option>Risk Management (ISO 31000)</option>
                      <option>Information Security / ISMS (ISO 27001)</option>
                      <option>Training & Capability Building</option>
                      <option>Integrated Management System (IMS)</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">How Can We Help? <span className="text-red-400">*</span></label>
                    <textarea required rows={4} placeholder="Tell us about your organisation, current challenges, and what you're hoping to achieve…" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent transition-colors resize-none" />
                  </div>
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" required className="mt-0.5 accent-accent" />
                      <span className="text-xs text-foreground/60">
                        I agree to the <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link> and consent to Reliance Consultant Services contacting me regarding my enquiry.
                      </span>
                    </label>
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent to-primary hover:shadow-[0_8px_20px_rgba(39,105,114,0.3)] hover:-translate-y-0.5 transition-all">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-4">Our Offices</span>
            <h2 className="text-3xl font-bold text-foreground mb-3">Where We Operate</h2>
            <p className="text-foreground/60">We serve clients across Australia and internationally. Our primary office is in Sydney, with consultant networks in all major Australian cities.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map(({ emoji, city, address }) => (
              <div key={city} className="bg-card border border-border rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">{emoji}</div>
                <h4 className="font-bold text-foreground mb-2">{city}</h4>
                <p className="text-sm text-foreground/50 whitespace-pre-line">{address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-4">Common Questions</span>
            <h2 className="text-3xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
            <p className="text-foreground/60">Answers to the questions we hear most often from new clients.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-foreground font-semibold hover:text-accent transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronRight size={18} className={`shrink-0 transition-transform ${openFaq === i ? "rotate-90 text-accent" : "text-foreground/40"}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-foreground/60 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

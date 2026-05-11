import Link from "next/link";
import { Users, Share, MessageCircle, Mail, MapPin, Phone, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary pt-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-accent rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-lg">
              RC
            </div>
            <div className="text-white">
              <span className="font-bold text-lg leading-tight block">
                Reliance Consultant
              </span>
              <span className="text-xs font-medium text-white/60 tracking-wider uppercase block">
                Services Pty Ltd
              </span>
            </div>
          </Link>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Your trusted partner in quality, safety, environmental management, rail safety, risk, and information security. Delivering compliance excellence across Australia and internationally.
          </p>
          <div className="flex gap-3">
            {[Users, Share, MessageCircle, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">Services</h5>
          <ul className="space-y-3">
            {[
              "Quality Management (ISO 9001)",
              "Safety (WHS/OHS)",
              "Environmental (ISO 14001)",
              "Rail Safety",
              "Risk Management",
              "ISMS (ISO 27001)",
            ].map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span className="text-accent text-lg">›</span> {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">Quick Links</h5>
          <ul className="space-y-3">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "Blog", href: "/blog" },
              { name: "Contact Us", href: "/contact" },
              { name: "Privacy Policy", href: "/privacy" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span className="text-accent text-lg">›</span> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">Contact</h5>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-sm text-primary-foreground/60">
              <MapPin className="text-accent mt-0.5 shrink-0" size={18} />
              <span>Level 10, 123 Business Avenue<br />Sydney NSW 2000, Australia</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
              <Phone className="text-accent shrink-0" size={18} />
              <span>+61 2 9000 0000</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
              <Mail className="text-accent shrink-0" size={18} />
              <span>info@relianceconsultant.com.au</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
              <Globe className="text-accent shrink-0" size={18} />
              <span>www.relianceconsultant.com.au</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Reliance Consultant Services Pty Ltd. All rights reserved. ABN: XX XXX XXX XXX</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-accent transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

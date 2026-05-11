import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Reliance Consultant Services Pty Ltd",
  description: "Privacy Policy for Reliance Consultant Services Pty Ltd — how we collect, use, and protect your personal information.",
};

export default function Privacy() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-40 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[100px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/50 text-sm">Last updated: 1 January 2025</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 prose prose-invert prose-sm max-w-none">
          <div className="space-y-10 text-foreground/70 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Introduction</h2>
              <p>Reliance Consultant Services Pty Ltd (ABN: XX XXX XXX XXX) ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Name, email address, phone number, and organisation details provided via our contact form</li>
                <li>Information provided during consultations or in correspondence</li>
                <li>Usage data from our website (via cookies and analytics tools)</li>
                <li>Business contact details of representatives of our clients and prospective clients</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
              <p>We use your personal information to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Respond to your enquiries and provide consulting services</li>
                <li>Send relevant communications, including proposals, invoices, and service updates</li>
                <li>Improve our website and services</li>
                <li>Meet legal and regulatory obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Disclosure of Information</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business (e.g., cloud storage, email platforms), strictly under confidentiality obligations. We may also disclose information if required by law.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Data Security</h2>
              <p>We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised access, modification, or disclosure. This includes physical, electronic, and procedural safeguards aligned with best practices for information security.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Cookies</h2>
              <p>Our website may use cookies to improve your browsing experience. You can disable cookies in your browser settings, though this may affect the functionality of some parts of the site.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Access and Correction</h2>
              <p>You have the right to request access to the personal information we hold about you and to request corrections if the information is inaccurate or incomplete. To make such a request, please contact us at the details below.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or wish to make a privacy-related request, please contact:</p>
              <div className="bg-card border border-border rounded-xl p-6 mt-4 space-y-2 text-sm">
                <p><strong className="text-foreground">Reliance Consultant Services Pty Ltd</strong></p>
                <p>Level 10, 123 Business Avenue, Sydney NSW 2000, Australia</p>
                <p>Email: <a href="mailto:privacy@relianceconsultant.com.au" className="text-accent hover:underline">privacy@relianceconsultant.com.au</a></p>
                <p>Phone: +61 2 9000 0000</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

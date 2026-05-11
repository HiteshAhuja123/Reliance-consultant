import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServiceCard({ icon: Icon, title, description, href }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-9 relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300">
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      
      <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary-foreground group-hover:shadow-[0_4px_16px_rgba(0,242,254,0.4)] transition-all duration-300">
        <Icon size={32} />
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-foreground/70 leading-relaxed mb-6">{description}</p>
      
      <Link 
        href={href} 
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all"
      >
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  );
}

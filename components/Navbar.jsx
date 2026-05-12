"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const scrolledRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          const nextScrolled = window.scrollY > 50;
          if (scrolledRef.current !== nextScrolled) {
            scrolledRef.current = nextScrolled;
            setScrolled(nextScrolled);
          }
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 ${
          scrolled
            ? "bg-primary border-b border-white/10 py-3 shadow-lg"
            : "bg-primary/90 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-accent rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-lg group-hover:scale-105 transition-transform">
              RC
            </div>
            <div className="text-white hidden sm:block">
              <span className="font-bold text-sm md:text-lg leading-tight block">
                Reliance Consultant
              </span>
              <span className="text-[10px] md:text-xs font-medium text-white/60 tracking-wider uppercase block">
                Services Pty Ltd
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => mounted && setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all bg-gradient-to-r from-accent to-accent/80 text-white hover:shadow-[0_8px_20px_rgba(0,242,254,0.4)] hover:-translate-y-0.5"
            >
              Get Free Consultation
            </Link>

            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-background/95 transition-opacity duration-300 flex flex-col items-center justify-center gap-6 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-6 right-6 p-2 text-foreground/60 hover:text-foreground"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-bold text-foreground hover:text-accent transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}

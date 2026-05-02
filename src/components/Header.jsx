import React, { useState, useEffect } from "react";
import { Terminal, Menu, X } from "lucide-react";
import { profile, navLinks } from "../mock";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href, label) => {
    setActive(label);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#07070b]/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          className="flex items-center gap-2 group"
          onClick={() => scrollTo("#home", "Home")}
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400/20 to-amber-300/10 border border-teal-400/30">
            <Terminal className="h-4 w-4 text-teal-300" aria-hidden />
          </span>
          <span className="font-display font-semibold text-white/90 tracking-tight">
            {profile.firstName}
            <span className="text-teal-300">.</span>
            badgujar
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((n, i) => (
            <button
              key={n.label}
              onClick={() => scrollTo(n.href, n.label)}
              className={`relative px-3 py-2 text-sm transition-colors ${
                active === n.label
                  ? "text-teal-300"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              <span className="mono mr-1 text-[10px] opacity-60">
                0{i + 1}.
              </span>
              {n.label}
              {active === n.label && (
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-teal-300/70" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={`mailto:${profile.email}?subject=Opportunity%20for%20you%2C%20Swami`}
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm shadow h-9 px-4 py-2 bg-teal-400/95 hover:bg-teal-300 text-[#07070b] font-medium transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white/80"
          aria-label="menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#07070b]/95 backdrop-blur-xl border-b border-white/10 px-6 pb-6">
          {navLinks.map((n, i) => (
            <button
              key={n.label}
              onClick={() => scrollTo(n.href, n.label)}
              className="block w-full text-left py-3 text-sm text-white/70 hover:text-white border-b border-white/5 last:border-0"
            >
              <span className="mono text-[10px] text-teal-300/60 mr-2">0{i + 1}.</span>
              {n.label}
            </button>
          ))}
          <a
            href={`mailto:${profile.email}?subject=Opportunity%20for%20you%2C%20Swami`}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-md text-sm h-10 px-4 w-full bg-teal-400 hover:bg-teal-300 text-[#07070b] font-medium"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}

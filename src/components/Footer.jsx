import React from "react";
import { Terminal, Github, Linkedin, Mail, Download, ArrowUp } from "lucide-react";
import { profile, navLinks } from "../mock";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#06060a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400/20 to-amber-300/10 border border-teal-400/30">
                <Terminal className="h-4 w-4 text-teal-300" aria-hidden />
              </span>
              <span className="font-display font-semibold text-white tracking-tight">
                {profile.firstName}
                <span className="text-teal-300">.</span>badgujar
              </span>
            </div>
            <p className="text-white/55 text-sm max-w-md leading-relaxed">
              {profile.role} • {profile.subRole}. Currently building MERN apps and learning the
              DevOps stack — Docker, Kubernetes and GitHub Actions.
            </p>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3">
            <div className="mono text-xs uppercase tracking-wider text-white/40 mb-3">Sitemap</div>
            <ul className="space-y-2">
              {navLinks.map((n) => (
                <li key={n.label}>
                  <button
                    onClick={() => scrollTo(n.href)}
                    className="text-white/70 hover:text-teal-300 text-sm transition-colors"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <div className="mono text-xs uppercase tracking-wider text-white/40 mb-3">Connect</div>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://github.com/SwamiBadgujar"
                className="h-9 w-9 grid place-items-center rounded-lg border border-white/10 hover:border-teal-300/40 hover:text-teal-300 text-white/80 transition-colors"
                aria-label="github"
              >
                <Github className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="https://www.linkedin.com/in/swami-badgujar-a66845293"
                className="h-9 w-9 grid place-items-center rounded-lg border border-white/10 hover:border-teal-300/40 hover:text-teal-300 text-white/80 transition-colors"
                aria-label="linkedin"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="h-9 w-9 grid place-items-center rounded-lg border border-white/10 hover:border-teal-300/40 hover:text-teal-300 text-white/80 transition-colors"
                aria-label="email"
              >
                <Mail className="h-4 w-4" aria-hidden />
              </a>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="mono text-sm text-white/70 hover:text-teal-300 break-all"
            >
              {profile.email}
            </a>
            <a
              href="/resume/Swami_Badgujar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Swami_Badgujar.pdf"
              className="mt-4 inline-flex items-center gap-2 h-9 px-4 rounded-md border border-amber-300/40 text-amber-200 hover:bg-amber-300/10 text-sm transition-colors"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="mono text-[12px] text-white/40">
            © {new Date().getFullYear()} {profile.name}. Designed &amp; built with React.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 mono text-[12px] text-white/55 hover:text-teal-300 transition-colors"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import { profile } from "../mock";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="hero-gradient-orb bg-teal-500/30 w-[420px] h-[420px] -bottom-32 -left-24" />
      <div className="hero-gradient-orb bg-amber-400/20 w-[360px] h-[360px] -top-24 -right-24" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="mono text-xs text-teal-300/80 mb-2">/07 — contact</div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Let's build something <span className="text-teal-300">together</span>.
            </h2>
            <p className="text-white/60 mt-3 max-w-xl">
              Have an opportunity, a freelance gig or just want to chat about DevOps and web
              development? Reach out on any of the channels below — I usually reply within a day.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 ml-10 section-title-bar" />
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0e0e14] p-6 hover:border-teal-300/40 transition-colors"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-300/10 border border-teal-300/30 shrink-0">
              <Mail className="h-5 w-5 text-teal-300" aria-hidden />
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="mono text-[11px] uppercase tracking-wider text-white/45">Email</span>
                <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-teal-300 transition" aria-hidden />
              </div>
              <div className="text-white/90 font-medium mt-1 break-all">{profile.email}</div>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0e0e14] p-6 hover:border-teal-300/40 transition-colors"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-300/10 border border-teal-300/30 shrink-0">
              <Phone className="h-5 w-5 text-teal-300" aria-hidden />
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="mono text-[11px] uppercase tracking-wider text-white/45">Phone</span>
                <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-teal-300 transition" aria-hidden />
              </div>
              <div className="text-white/90 font-medium mt-1">{profile.phone}</div>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0e0e14] p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-300/10 border border-amber-300/30 shrink-0">
              <MapPin className="h-5 w-5 text-amber-300" aria-hidden />
            </span>
            <div>
              <span className="mono text-[11px] uppercase tracking-wider text-white/45">
                Based in
              </span>
              <div className="text-white/90 font-medium mt-1">{profile.location}</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-white/10 bg-[#0e0e14] p-6 lg:p-8">
          <div>
            <div className="font-display text-xl text-white font-semibold mb-1">
              Prefer the long version?
            </div>
            <p className="text-white/60 text-sm">
              Download my full résumé or connect on social — happy to chat.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Swami_Badgujar_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md text-sm shadow py-2 bg-amber-300 hover:bg-amber-200 text-[#07070b] font-semibold h-11 px-5 transition-colors"
            >
              <Download className="mr-2 h-4 w-4" aria-hidden />
              Download CV
            </a>
            <a
              href={profile.github}
              className="h-11 w-11 grid place-items-center rounded-xl border border-white/10 bg-[#0a0a0f] text-white/85 hover:text-teal-300 hover:border-teal-300/40 transition-colors"
              aria-label="github"
            >
              <Github className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={profile.linkedin}
              className="h-11 w-11 grid place-items-center rounded-xl border border-white/10 bg-[#0a0a0f] text-white/85 hover:text-teal-300 hover:border-teal-300/40 transition-colors"
              aria-label="linkedin"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={`mailto:${profile.email}?subject=Opportunity%20for%20you%2C%20Swami`}
              className="inline-flex items-center gap-2 rounded-md text-sm shadow py-2 bg-teal-400 hover:bg-teal-300 text-[#07070b] font-semibold h-11 px-5 transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" aria-hidden />
              Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

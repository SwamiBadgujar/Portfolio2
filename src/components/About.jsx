import React from "react";
import { Cloud, CodeXml, Cpu, Zap, BadgeCheck } from "lucide-react";
import { profile } from "../mock";

const iconMap = { Cloud, CodeXml, Cpu, Zap, BadgeCheck };

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section heading */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="mono text-xs text-teal-300/80 mb-2">/01 — about</div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              The path between <span className="text-teal-300">code</span> &amp;{" "}
              <span className="text-amber-300">production</span>.
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 ml-10 section-title-bar" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Bio + stats */}
          <div className="lg:col-span-7">
            <p className="text-white/70 text-lg leading-relaxed">{profile.about}</p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {profile.stats.map((s) => {
                const Icon = iconMap[s.icon] || Cloud;
                const isCert = s.accent === "amber";
                return (
                  <div
                    key={s.label}
                    className={`group relative rounded-xl border bg-[#0e0e14] p-5 overflow-hidden transition-colors ${
                      isCert
                        ? "border-amber-300/20 hover:border-amber-300/50"
                        : "border-white/10 hover:border-teal-300/40"
                    }`}
                  >
                    {/* glow orb */}
                    <div
                      className={`absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl transition ${
                        isCert
                          ? "bg-amber-300/10 group-hover:bg-amber-300/20"
                          : "bg-teal-400/10 group-hover:bg-teal-400/20"
                      }`}
                    />

                    {/* certified pill — only on cert boxes */}
                    {isCert && (
                      <span className="absolute top-3 right-3 mono text-[9px] uppercase tracking-widest text-amber-300/70 border border-amber-300/25 rounded-full px-1.5 py-0.5">
                        certified
                      </span>
                    )}

                    <Icon
                      className={`h-5 w-5 mb-3 ${isCert ? "text-amber-300" : "text-teal-300"}`}
                      aria-hidden
                    />
                    <div className="font-display text-2xl text-white font-semibold leading-tight">
                      {s.value}
                    </div>
                    <div className="mono text-[11px] uppercase tracking-wider text-white/50 mt-1">
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Profile Picture */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative group w-full max-w-[360px]">
              {/* Glow ring behind image */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-teal-400 via-teal-300/50 to-amber-300 opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />

              {/* Border frame */}
              <div className="relative rounded-2xl border border-white/10 bg-[#0e0e14] p-1.5 overflow-hidden">
                <img
                  src="/swami.jpg"
                  alt="Swami Badgujar — Full Stack Web Developer"
                  className="w-full h-[420px] rounded-xl object-cover object-top block"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />
                {/* Fallback initials avatar */}
                <div
                  className="w-full h-[420px] rounded-xl bg-gradient-to-br from-teal-400/20 to-amber-300/20 items-center justify-center flex-col gap-3"
                  style={{ display: "none" }}
                >
                  <span className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-amber-300 text-[#07070b] font-bold text-4xl">
                    {profile.initials}
                  </span>
                  <span className="mono text-xs text-white/30">add swami.jpg to /public</span>
                </div>

                {/* Overlay badge — bottom */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 rounded-xl border border-white/10 bg-[#07070b]/80 backdrop-blur-md">
                  <div>
                    <div className="text-white font-semibold text-sm">{profile.name}</div>
                    <div className="mono text-[11px] text-teal-300/80 mt-0.5">
                      Full Stack Web Developer
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mono text-[11px] text-amber-200/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-300 animate-pulse" />
                    available
                  </div>
                </div>
              </div>

              {/* Floating tag — top right */}
              <div className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-300/25 bg-[#0e0e14]/90 backdrop-blur-md mono text-[11px] text-teal-200/80 float-slow">
                MERN · DevOps
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
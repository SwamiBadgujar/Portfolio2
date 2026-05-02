import React from "react";
import { Award, BadgeCheck, Hourglass } from "lucide-react";
import { certifications } from "../mock";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="mono text-xs text-teal-300/80 mb-2">/05 — certifications</div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Validated &amp; <span className="text-teal-300">in progress</span>.
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 ml-10 section-title-bar" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certifications.map((c) => {
            const isDone = c.statusType === "done";
            return (
              <div
                key={c.title}
                className="relative rounded-2xl border border-white/10 bg-[#0e0e14] p-6 overflow-hidden hover:border-teal-300/40 transition-colors"
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-teal-400/10 blur-3xl" />

                <div className="flex items-center justify-between mb-3">
                  <Award className="h-5 w-5 text-amber-300" aria-hidden />
                  <span
                    className={`mono text-[10.5px] px-2 py-0.5 rounded-full border ${
                      isDone
                        ? "border-teal-300/40 bg-teal-300/10 text-teal-200"
                        : "border-amber-300/40 bg-amber-300/10 text-amber-200"
                    }`}
                  >
                    {isDone ? (
                      <BadgeCheck className="h-3 w-3 inline -mt-0.5 mr-1" aria-hidden />
                    ) : (
                      <Hourglass className="h-3 w-3 inline -mt-0.5 mr-1" aria-hidden />
                    )}
                    {c.status}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-white leading-snug">
                  {c.title}
                </h3>
                <div className="mono text-[12px] text-white/50 mt-1">
                  {c.issuer} — {c.code}
                </div>
                <p className="text-white/65 text-sm leading-relaxed mt-3">{c.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

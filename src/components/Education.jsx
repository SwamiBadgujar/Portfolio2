import React from "react";
import { GraduationCap, Calendar, MapPin, Star } from "lucide-react";
import { education } from "../mock";

export default function Education() {
  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="mono text-xs text-teal-300/80 mb-2">/06 — education</div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Where it all <span className="text-amber-300">started</span>.
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 ml-10 section-title-bar" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5">
          {education.map((e) => (
            <div
              key={e.institution}
              className="relative rounded-2xl border border-white/10 bg-[#0e0e14] p-6 lg:p-8 overflow-hidden hover:border-teal-300/40 transition-colors"
            >
              <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-amber-300/10 blur-3xl" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-300/10 border border-teal-300/30 shrink-0">
                    <GraduationCap className="h-6 w-6 text-teal-300" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-white">
                      {e.degree}
                    </h3>
                    <div className="text-teal-300/90 mono text-sm mt-0.5">{e.institution}</div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mono text-[12px] text-white/55 mt-2">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" aria-hidden />
                        {e.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" aria-hidden />
                        {e.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Grade badge */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-300/10 border border-amber-300/30 self-start">
                  <Star className="h-4 w-4 text-amber-300" aria-hidden />
                  <span className="mono text-sm text-amber-200">{e.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

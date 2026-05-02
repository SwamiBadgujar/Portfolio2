import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { experience } from "../mock";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="mono text-xs text-teal-300/80 mb-2">/03 — experience</div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Where I've <span className="text-teal-300">shipped</span>.
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 ml-10 section-title-bar" />
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-300/40 via-white/10 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {experience.map((job, idx) => (
              <div
                key={job.company}
                className={`relative grid md:grid-cols-2 gap-6 ${
                  idx % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Timeline dot */}
                <span className="absolute left-3 md:left-1/2 -translate-x-1/2 top-3 h-3 w-3 rounded-full bg-teal-300 ring-4 ring-teal-300/15" />

                {/* Spacer on even rows */}
                <div className="hidden md:block" />

                {/* Card */}
                <div className="pl-10 md:pl-0 md:pr-0">
                  <div className="group rounded-2xl border border-white/10 bg-[#0e0e14] p-6 hover:border-teal-300/40 transition-colors">
                    {/* Meta row */}
                    <div className="flex items-center gap-2 mono text-[11px] text-white/50 mb-2">
                      <Calendar className="h-3.5 w-3.5 text-teal-300" aria-hidden />
                      {job.period}
                      <span className="mx-1 opacity-40">•</span>
                      <MapPin className="h-3.5 w-3.5 text-teal-300" aria-hidden />
                      {job.location}
                      <span className="mx-1 opacity-40">•</span>
                      <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/60">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="h-4 w-4 text-amber-300" aria-hidden />
                      <h3 className="font-display text-xl font-semibold text-white">{job.role}</h3>
                    </div>
                    <div className="text-teal-300/90 mono text-sm mb-4">{job.company}</div>

                    <ul className="space-y-2">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="text-white/70 text-[15px] leading-relaxed pl-4 relative">
                          <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-teal-300" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.stack.map((s) => (
                        <span
                          key={s}
                          className="mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-white/70"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

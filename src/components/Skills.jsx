import React from "react";
import { Sparkles } from "lucide-react";
import { skills, learning } from "../mock";

const allSkillNames = skills.flatMap((g) => g.items);

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Heading */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="mono text-xs text-teal-300/80 mb-2">/02 — skills</div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              The stack I <span className="text-teal-300">ship</span> with.
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 ml-10 section-title-bar" />
        </div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="group relative rounded-2xl border border-white/10 bg-[#0e0e14] p-6 overflow-hidden hover:border-teal-300/40 transition-colors"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-teal-400/5 blur-3xl group-hover:bg-teal-400/15 transition" />
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg font-semibold text-white">{group.category}</h3>
                <span className="mono text-[11px] text-white/40">
                  {String(group.items.length).padStart(2, "0")} • items
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="mono text-[12px] px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/10 text-white/80 hover:border-teal-300/40 hover:text-teal-200 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently learning */}
        <div className="mt-8 rounded-2xl border border-amber-300/20 bg-gradient-to-r from-amber-300/[0.04] to-transparent p-5 sm:p-6">
          <div className="flex items-start gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-300" aria-hidden />
              <span className="font-display text-white font-medium">Currently learning</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {learning.map((l) => (
                <span
                  key={l}
                  className="mono text-[12px] px-3 py-1.5 rounded-md bg-amber-300/10 border border-amber-300/30 text-amber-200"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-12 overflow-hidden border-y border-white/5 py-5">
          <div className="flex gap-12 marquee-track whitespace-nowrap">
            {[...allSkillNames, ...allSkillNames].map((s, i) => (
              <span
                key={i}
                className="font-display text-2xl lg:text-3xl text-white/15 hover:text-teal-300/60 transition-colors"
              >
                {s} •
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

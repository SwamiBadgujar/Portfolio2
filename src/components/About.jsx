import React from "react";
import { Cloud, CodeXml, Cpu, Zap } from "lucide-react";
import { profile } from "../mock";

const iconMap = { Cloud, CodeXml, Cpu, Zap };

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

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {profile.stats.map((s) => {
                const Icon = iconMap[s.icon] || Cloud;
                return (
                  <div
                    key={s.label}
                    className="group relative rounded-xl border border-white/10 bg-[#0e0e14] p-5 overflow-hidden hover:border-teal-300/40 transition-colors"
                  >
                    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-teal-400/10 blur-2xl group-hover:bg-teal-400/20 transition" />
                    <Icon className="h-5 w-5 text-teal-300 mb-3" aria-hidden />
                    <div className="font-display text-2xl text-white font-semibold">{s.value}</div>
                    <div className="mono text-[11px] uppercase tracking-wider text-white/50 mt-1">
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Terminal card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-[#0e0e14] overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0a0a0f]">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-teal-300/80" />
                <span className="mono text-[11px] text-white/40 ml-2">~/swami — zsh</span>
              </div>
              <pre className="mono text-[13px] leading-relaxed p-5 text-white/80 whitespace-pre-wrap">
{`$ whoami
> swami.badgujar

$ cat role.yaml
role: Aspiring DevOps Engineer
builds: ["MERN apps", "REST APIs"]
learning: ["Docker", "K8s", "GitHub Actions"]
certified: "AZ-900 (Microsoft Azure)"

$ ./deploy.sh
`}
                <span className="text-teal-300">[ok]</span>{" "}
                <span className="text-white/70">build packaged</span>{"\n"}
                <span className="text-teal-300">[ok]</span>{" "}
                <span className="text-white/70">tests passed (cross-browser)</span>{"\n"}
                <span className="text-teal-300">[ok]</span>{" "}
                <span className="text-white/70">shipped to production</span>{"\n"}
                <span className="text-amber-300">$ </span>
                <span className="animate-pulse">_</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

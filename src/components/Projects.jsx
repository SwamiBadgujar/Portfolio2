import React, { useRef } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "../mock";

function TiltCard({ children }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const rotX = ((my / rect.height) - 0.5) * -10;
    const rotY = ((mx / rect.width)  - 0.5) *  10;
    card.style.transform = `perspective(1100px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    card.style.setProperty("--mx", `${mx}px`);
    card.style.setProperty("--my", `${my}px`);
  };

  const handleMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="tilt-card group relative rounded-2xl border border-white/10 bg-[#0e0e14] overflow-hidden hover:border-teal-300/40"
      style={{ transform: "perspective(1100px) rotateX(0deg) rotateY(0deg)" }}
    >
      {/* Glow follow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx) var(--my), rgba(20,224,198,0.10), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 perspective-1500">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="mono text-xs text-teal-300/80 mb-2">/04 — projects</div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Things I've <span className="text-amber-300">built</span>.
            </h2>
            <p className="text-white/60 mt-3 max-w-2xl">
              A mix of healthcare-tech, internal tooling and interactive web work — each one taken
              from <code className="mono text-teal-300 text-sm">git init</code> all the way to a
              real user.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 ml-10 section-title-bar" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <TiltCard key={p.title}>
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] via-[#0e0e14]/30 to-transparent" />

                {/* Year badge */}
                <div className="absolute top-4 left-4 mono text-[11px] px-2 py-1 rounded-md bg-black/50 backdrop-blur border border-white/10 text-teal-200">
                  {p.year}
                </div>

                {/* Links */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={p.github}
                    className="h-8 w-8 grid place-items-center rounded-md bg-black/50 backdrop-blur border border-white/10 text-white/85 hover:text-teal-300 hover:border-teal-300/40"
                    aria-label="github"
                  >
                    <Github className="h-4 w-4" aria-hidden />
                  </a>
                  <a
                    href={p.live}
                    className="h-8 w-8 grid place-items-center rounded-md bg-black/50 backdrop-blur border border-white/10 text-white/85 hover:text-teal-300 hover:border-teal-300/40"
                    aria-label="live"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mono text-[12px] text-teal-300/90 mt-0.5">{p.subtitle}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-teal-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition shrink-0" aria-hidden />
                </div>

                <p className="text-white/65 text-[15px] leading-relaxed mt-3">{p.summary}</p>
                <p className="text-white/50 text-[13px] leading-relaxed mt-3">{p.description}</p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="text-white/60 text-[12.5px] flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

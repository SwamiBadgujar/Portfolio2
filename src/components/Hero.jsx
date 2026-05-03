import React, { useEffect, useRef } from "react";
import {
  ArrowDownRight,
  Download,
  MapPin,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { profile } from "../mock";

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20,224,198,${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden noise"
    >
      <ParticleCanvas />

      {/* Gradient orbs */}
      <div className="hero-gradient-orb bg-teal-500/40 w-[480px] h-[480px] -top-32 -left-24" />
      <div className="hero-gradient-orb bg-amber-400/25 w-[420px] h-[420px] top-1/3 -right-24" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07070b] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-7">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-300/30 bg-teal-300/5 mono text-xs text-teal-200/90 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300 pulse-glow" />
            available_for_opportunities = true
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.02] tracking-tight">
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="text-glow text-teal-300">{profile.firstName}</span>
              <span className="text-glow text-teal-300">.</span>
            </span>
            <br />
            I build apps &amp;
            <br />
            <span className="text-amber-300">deploy</span> them.
          </h1>

          <p className="mt-6 text-white/65 text-lg max-w-2xl leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 rounded-md text-sm shadow py-2 group bg-teal-400 hover:bg-teal-300 text-[#07070b] font-semibold h-11 px-5 transition-colors"
            >
              View my work
              <ArrowDownRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden />
            </button>

            <a
              href="/resume/Swami_Badgujar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Swami_Badgujar_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md text-sm shadow py-2 group h-11 px-5 bg-amber-300 hover:bg-amber-200 text-[#07070b] font-semibold transition-colors"
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
              Download CV
            </a>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border shadow-sm py-2 h-11 px-5 bg-transparent border-white/15 text-white/85 hover:bg-white/5 hover:text-white transition-colors"
            >
              Get in touch
            </button>
          </div>

          {/* Meta info */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-white/60 text-sm">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-300" aria-hidden />
              {profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4 text-teal-300" aria-hidden />
              {profile.email}
            </a>
            <a href={profile.github} className="inline-flex items-center gap-2 hover:text-white">
              <Github className="h-4 w-4 text-teal-300" aria-hidden />
              github
            </a>
            <a href={profile.linkedin} className="inline-flex items-center gap-2 hover:text-white">
              <Linkedin className="h-4 w-4 text-teal-300" aria-hidden />
              linkedin
            </a>
          </div>
        </div>

        {/* Right — 3-D cube */}
        <div className="lg:col-span-5 flex items-center justify-center perspective-1500">
          <div className="relative">
            <div className="cube-wrapper">
              <div className="cube">
                <div className="cube-face front">&lt;DevOps /&gt;</div>
                <div className="cube-face back">{"{ ship: 'fast' }"}</div>
                <div className="cube-face right">CI / CD</div>
                <div className="cube-face left">MERN</div>
                <div className="cube-face top">$ kubectl apply</div>
                <div className="cube-face bottom">git push origin main</div>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div className="absolute -bottom-6 -left-10 hidden md:flex items-center gap-3 px-3 py-2 rounded-xl border border-white/10 bg-[#0e0e14]/80 backdrop-blur-md float-slow">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-amber-300 text-[#07070b] font-bold">
                {profile.initials}
              </span>
              <div className="text-xs leading-tight">
                <div className="text-white/90 font-medium">{profile.name}</div>
                <div className="text-white/50 mono">{profile.role}</div>
              </div>
            </div>

            {/* Floating badge — top right */}
            <div className="absolute -top-6 -right-8 hidden md:flex items-center gap-2 px-3 py-2 rounded-xl border border-amber-300/25 bg-[#0e0e14]/80 backdrop-blur-md float-slow mono text-xs text-amber-200/90">
              status: <span className="text-teal-300">deployed ✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

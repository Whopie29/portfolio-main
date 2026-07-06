import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Code2, Braces, Sparkles } from "lucide-react";
import CosmicScene from "./CosmicScene";
import { profile } from "../data/portfolio";
import { HERO } from "../constants/testIds";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-testid={HERO.section}
      className="relative min-h-screen w-full overflow-hidden grain-overlay"
    >
      {/* 3D background */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#020617]" />}>
        <CosmicScene />
      </Suspense>

      {/* radial vignette */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(2,6,23,0.4) 55%, rgba(2,6,23,0.95) 100%)",
        }}
      />

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-eyebrow flex items-center gap-3"
        >
          <span className="w-8 h-px bg-cyan-400" />
          Portfolio · 2025
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="mt-6 font-display font-black text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tighter"
        >
          <span className="block text-white">{profile.firstName}</span>
          <span className="block gradient-text">{profile.lastName}.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 max-w-xl font-body text-lg sm:text-xl text-slate-300 leading-relaxed"
        >
          {profile.tagline}{" "}
          <span className="text-cyan-300 font-mono text-sm">// {profile.role}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            data-testid={HERO.ctaContact}
            onClick={() => scrollTo("contact")}
            className="btn-primary"
          >
            Let&#39;s Build <ArrowUpRight size={16} />
          </button>
          <a
            data-testid={HERO.ctaResume}
            href="/Gaurav_Malik_Resume.pdf"
            download
            className="btn-ghost"
          >
            <Download size={16} /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-16 flex items-center gap-6"
        >
          <div className="hair-divider w-16" />
          <div className="flex items-center gap-5">
            <a
              data-testid={HERO.socialGithub}
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-300 transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              data-testid={HERO.socialLinkedin}
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-300 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              data-testid={HERO.socialLeetcode}
              href={profile.links.leetcode}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-300 transition font-mono text-xs tracking-widest"
            >
              LEETCODE
            </a>
            <a
              data-testid={HERO.socialGfg}
              href={profile.links.gfg}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-300 transition font-mono text-xs tracking-widest"
            >
              GFG
            </a>
            <a
              data-testid={HERO.socialCodolio}
              href={profile.links.codolio}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-300 transition font-mono text-xs tracking-widest"
            >
              CODOLIO
            </a>
          </div>
        </motion.div>

        {/* Stat rail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="absolute bottom-10 left-6 right-6 lg:left-12 lg:right-12 hidden sm:flex items-center justify-between text-slate-400 font-mono text-[11px] tracking-[0.3em] uppercase"
        >
          <div className="flex items-center gap-2">
            <Sparkles size={12} className="text-cyan-400" />
            <span>Scroll to explore</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <span><span className="text-cyan-300">1600+</span> LeetCode</span>
            <span><span className="text-cyan-300">1800+</span> GFG</span>
            <span><span className="text-cyan-300">700+</span> DSA Solved</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  MapPin,
  Sparkles,
  BarChart3,
  Database,
  TrendingUp,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { experiences, experienceTimeline } from "../data/portfolio";
import { EXPERIENCE } from "../constants/testIds";

const bulletIcons = [BarChart3, Database, TrendingUp];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid={EXPERIENCE.section}
      className="relative py-28 sm:py-36 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-3">
            <Briefcase size={12} className="text-cyan-400" />
            <span className="text-eyebrow text-[10px] text-cyan-300">03 / Experience</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight leading-[1.05]">
            Where I&#39;ve <span className="gradient-text">worked & built.</span>
          </h2>
        </motion.div>

        {/* Featured Professional Experience Cards */}
        <div className="mt-14 max-w-5xl mx-auto space-y-6">
          {experiences.map((exp, expIdx) => (
            <motion.div
              key={exp.company + exp.role}
              data-testid={EXPERIENCE.card(expIdx)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="glass-surface relative p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden"
            >
              {/* Animated corner glow */}
              <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-cyan-400/15 blur-3xl group-hover:bg-cyan-400/25 transition-all duration-500 pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

              {/* Card Header */}
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 pb-6 border-b border-white/10">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-cyan-400/20 via-cyan-500/10 to-transparent border border-cyan-400/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.2)] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.35)] transition-all">
                    <Building2 className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display font-bold text-2xl lg:text-3xl text-white tracking-tight">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="mt-1.5 font-display text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-100">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Metadata Pills */}
                <div className="flex flex-wrap items-center gap-2.5 lg:flex-col lg:items-end">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-xs text-slate-300">
                    <Calendar size={12} className="text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-xs text-slate-400">
                    <MapPin size={12} className="text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities / Impact Bullets */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 mt-6 space-y-3"
              >
                {exp.description.map((bullet, bIdx) => {
                  const BulletIcon = bulletIcons[bIdx % bulletIcons.length] || ChevronRight;
                  return (
                    <motion.div
                      key={bIdx}
                      variants={itemVariants}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="group/item flex items-start gap-3.5 p-2.5 sm:p-3 rounded-xl bg-white/[0.015] hover:bg-white/[0.04] border border-transparent hover:border-cyan-400/20 transition-all duration-200"
                    >
                      <div className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 group-hover/item:text-white group-hover/item:border-cyan-400/50 group-hover/item:bg-cyan-400/20 transition-all shadow-[0_0_15px_rgba(0,229,255,0.15)]">
                        <BulletIcon size={14} />
                      </div>
                      <p className="font-body text-slate-300 text-sm sm:text-[15px] leading-relaxed pt-0.5">
                        {bullet}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Skills Footer */}
              <div className="relative z-10 mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400">
                  <Sparkles size={12} className="text-cyan-400" />
                  <span>Skills & Tools</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, sIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: sIdx * 0.05 }}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-200 hover:border-cyan-300 hover:text-white hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


import React from "react";
import { motion } from "framer-motion";
import { experienceTimeline } from "../data/portfolio";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-28 sm:py-36 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background ambient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-eyebrow">06 / Journey</p>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight leading-[1.05]">
            A short <span className="gradient-text">timeline.</span>
          </h2>
          <p className="mt-4 font-body text-slate-400 text-lg max-w-xl">
            Key milestones across education, projects, and industry experience.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated vertical spine */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-cyan-400/30 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experienceTimeline.map((e, i) => (
              <motion.div
                key={e.year + e.title + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className={`relative grid sm:grid-cols-2 gap-6 items-start ${
                  i % 2 === 0 ? "" : "sm:col-start-2"
                }`}
              >
                {/* Glowing Node Dot */}
                <motion.div
                  whileHover={{ scale: 1.4 }}
                  className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-[#020617] border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.7)] z-10 cursor-pointer"
                />

                {/* Content Box */}
                <div
                  className={`pl-12 sm:pl-0 ${
                    i % 2 === 0 ? "sm:pr-12" : "sm:pl-12 sm:col-start-2"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className={`glass-surface p-6 rounded-xl hover:border-cyan-400/40 transition-all duration-300 ${
                      i % 2 === 0 ? "sm:text-right" : "text-left"
                    }`}
                  >
                    <span className="inline-block font-mono text-cyan-300 text-xs tracking-widest px-2.5 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                      {e.year}
                    </span>
                    <p className="mt-2 font-display font-semibold text-lg sm:text-xl text-white">
                      {e.title}
                    </p>
                    <p className="mt-1 font-mono text-xs text-slate-500 uppercase tracking-widest">
                      {e.org}
                    </p>
                    <p className="mt-3 font-body text-slate-400 text-sm leading-relaxed text-left">
                      {e.detail}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

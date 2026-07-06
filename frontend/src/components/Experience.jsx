import React from "react";
import { motion } from "framer-motion";
import { experienceTimeline } from "../data/portfolio";
import { EXPERIENCE } from "../constants/testIds";

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid={EXPERIENCE.section}
      className="relative py-28 sm:py-36 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-eyebrow">05 / Journey</p>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight leading-[1.05]">
            A short <span className="gradient-text">timeline.</span>
          </h2>
        </motion.div>

        <div className="mt-16 relative">
          {/* vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />

          <div className="space-y-12">
            {experienceTimeline.map((e, i) => (
              <motion.div
                key={e.year + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative grid sm:grid-cols-2 gap-6 items-start ${
                  i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8 sm:col-start-2"
                }`}
              >
                {/* dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-[#020617] border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.6)]" />

                <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:pr-8" : "sm:pl-8 sm:col-start-2"}`}>
                  <p className="font-mono text-cyan-300 text-xs tracking-widest">{e.year}</p>
                  <p className="mt-2 font-display font-semibold text-xl text-white">{e.title}</p>
                  <p className="mt-1 font-mono text-xs text-slate-500 uppercase tracking-widest">{e.org}</p>
                  <p className="mt-3 font-body text-slate-400 max-w-md sm:ml-auto text-sm leading-relaxed">
                    {e.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

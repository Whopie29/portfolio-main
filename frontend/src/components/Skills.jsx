import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { skills, skillsFlat } from "../data/portfolio";
import { SKILLS } from "../constants/testIds";

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid={SKILLS.section}
      className="relative py-28 sm:py-36 px-6 lg:px-12"
    >
      {/* Background giant marquee */}
      <div className="absolute inset-x-0 top-16 pointer-events-none select-none">
        <Marquee speed={40} gradient={false} className="opacity-[0.06]">
          <span className="font-display font-black text-[14vw] tracking-tighter text-white mr-16 whitespace-nowrap">
            PYTHON · TENSORFLOW · PYTORCH · LANGCHAIN · MONGODB · FLASK ·
          </span>
        </Marquee>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-eyebrow">02 / Stack</p>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight leading-[1.05]">
            The tools I <span className="gradient-text">think with.</span>
          </h2>
          <p className="mt-5 font-body text-slate-400 text-lg">
            A working toolkit spanning modeling, deployment, and pure algorithm work.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-surface p-6 transition-all hover:-translate-y-1"
            >
              <p className="text-eyebrow text-[10px]">{String(idx + 1).padStart(2, "0")}</p>
              <p className="mt-2 font-display font-semibold text-xl text-white">{category}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1.5 text-xs font-mono rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom moving strip */}
        <div className="mt-16">
          <Marquee speed={30} gradient={false} pauseOnHover>
            {skillsFlat.map((s, i) => (
              <span
                key={i}
                className="mx-6 font-display font-semibold text-lg text-slate-500 hover:text-cyan-300 transition"
              >
                ✦ {s}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

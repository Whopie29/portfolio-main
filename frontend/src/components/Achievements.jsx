import React from "react";
import { motion } from "framer-motion";
import { Trophy, Zap, Code2 } from "lucide-react";
import { achievements, certifications } from "../data/portfolio";
import { ACHIEVEMENTS } from "../constants/testIds";

const iconFor = (i) => (i === 0 ? Trophy : i === 1 ? Code2 : Zap);

export default function Achievements() {
  return (
    <section
      id="achievements"
      data-testid={ACHIEVEMENTS.section}
      className="relative py-28 sm:py-36 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-eyebrow">04 / Achievements</p>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight leading-[1.05]">
            Numbers that <span className="gradient-text">back the story.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => {
            const Icon = iconFor(i);
            return (
              <motion.a
                key={a.title}
                href={a.link || "#"}
                target={a.link ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass-surface p-8 transition-all hover:-translate-y-2 group relative overflow-hidden"
              >
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition"
                  style={{ background: i === 1 ? "#FFB800" : "#00E5FF" }}
                />
                <Icon
                  size={26}
                  className={i === 1 ? "text-amber-400" : "text-cyan-400"}
                />
                <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  {a.tag}
                </p>
                <p className="mt-2 font-display font-bold text-4xl text-white">
                  {a.stat}
                </p>
                <p className="mt-5 font-display font-semibold text-lg text-white">
                  {a.title}
                </p>
                <p className="mt-2 font-body text-sm text-slate-400 leading-relaxed">
                  {a.detail}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <p className="text-eyebrow">Certifications</p>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {certifications.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-surface px-5 py-4 flex items-center justify-between hover:-translate-y-1 transition"
              >
                <div>
                  <p className="font-display font-semibold text-white text-sm">{c.title}</p>
                  <p className="font-mono text-[11px] text-slate-500 tracking-widest uppercase mt-1">
                    {c.issuer}
                  </p>
                </div>
                <span className="text-cyan-400 font-mono text-xs">✓</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

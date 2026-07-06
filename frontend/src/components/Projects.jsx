import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";
import { PROJECTS } from "../constants/testIds";

export default function Projects() {
  return (
    <section
      id="projects"
      data-testid={PROJECTS.section}
      className="relative py-28 sm:py-36 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-eyebrow">03 / Selected Work</p>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight leading-[1.05]">
              Projects that <span className="gradient-text">shipped.</span>
            </h2>
          </div>
          <p className="max-w-md font-body text-slate-400">
            Real projects with real numbers — from EDA studios to forecasting engines and AI travel agents.
          </p>
        </motion.div>

        <div className="mt-16 space-y-8">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              data-testid={PROJECTS.card(idx)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.05 }}
              className="group block glass-surface overflow-hidden transition-all hover:-translate-y-2"
              style={{
                boxShadow: `0 20px 60px -20px ${p.accent}22`,
              }}
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Image */}
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${p.accent}22 0%, rgba(2,6,23,0.85) 100%)`,
                    }}
                  />
                  <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: p.accent }}
                    />
                    <span className="font-mono text-[11px] tracking-widest uppercase text-white">
                      Project {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display font-bold text-3xl lg:text-4xl text-white tracking-tight">
                          {p.title}
                        </h3>
                        <p
                          className="mt-2 font-mono text-sm tracking-wider"
                          style={{ color: p.accent }}
                        >
                          {p.subtitle}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={24}
                        className="text-slate-400 group-hover:text-cyan-300 group-hover:rotate-[-12deg] transition duration-300 shrink-0"
                      />
                    </div>
                    <p className="mt-5 font-body text-slate-300 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-8 space-y-5">
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      {p.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl bg-white/[0.03] border border-white/10 px-3 py-3"
                        >
                          <p
                            className="font-display font-bold text-lg"
                            style={{ color: p.accent }}
                          >
                            {m.value}
                          </p>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mt-1">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 text-[11px] font-mono rounded-full border border-white/10 text-slate-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

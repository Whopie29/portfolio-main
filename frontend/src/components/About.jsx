import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";
import { profile, education } from "../data/portfolio";
import { ABOUT } from "../constants/testIds";

export default function About() {
  return (
    <section
      id="about"
      data-testid={ABOUT.section}
      className="relative py-28 sm:py-36 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <p className="text-eyebrow">01 / About</p>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight leading-[1.05]">
            Curious mind, <br />
            <span className="gradient-text">builder&#39;s hands.</span>
          </h2>
          <div className="mt-8 flex flex-col gap-3 font-mono text-sm text-slate-400">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-cyan-400" /> {profile.location}</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-cyan-400" /> {profile.email}</span>
            <span className="flex items-center gap-2"><Phone size={14} className="text-cyan-400" /> {profile.phone}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 space-y-8"
        >
          <p className="font-body text-lg leading-relaxed text-slate-300">
            {profile.bio}
          </p>

          <div className="hair-divider" />

          <div className="space-y-5">
            <p className="text-eyebrow flex items-center gap-2">
              <GraduationCap size={14} /> Education
            </p>
            {education.map((e, i) => (
              <div
                key={i}
                className="glass-surface p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-all hover:-translate-y-1"
              >
                <div>
                  <p className="font-display font-semibold text-white">{e.school}</p>
                  <p className="font-body text-sm text-slate-400 mt-1">{e.degree}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-cyan-300 tracking-widest">{e.duration}</p>
                  <p className="font-mono text-[11px] text-slate-500 mt-1">{e.location}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

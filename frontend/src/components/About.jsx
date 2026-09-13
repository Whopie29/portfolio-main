import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Mail,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Flame,
} from "lucide-react";
import { profile, education } from "../data/portfolio";
import { ABOUT } from "../constants/testIds";

const pages = [
  {
    chapter: "CHAPTER 01",
    subtitle: "THE BUILDER'S MINDSET",
    tag: "Philosophy",
    icon: Terminal,
    content: [
      {
        type: "lead",
        text: "I'm Gaurav, a Computer Science (AI/ML) graduate who is more interested in building things than collecting technologies.",
      },
      {
        type: "body",
        text: "I enjoy taking an idea apart, understanding the problem underneath it, and then putting it back together as something people can actually use.",
      },
    ],
    pillars: [
      {
        title: "Deconstruct First",
        desc: "Uncover ground truth before writing code.",
        icon: Cpu,
      },
      {
        title: "Shipped > Theory",
        desc: "Building tools that real people can use.",
        icon: Layers,
      },
    ],
  },
  {
    chapter: "CHAPTER 02",
    subtitle: "THE 3-DAY DEBUG",
    tag: "Curiosity",
    icon: Flame,
    content: [
      {
        type: "lead",
        text: "I also have a habit of adding one unnecessary feature to every project just because my brain asked, “But wouldn't it be cool if…?”",
      },
      {
        type: "body",
        text: "Sometimes it is. Sometimes it's a three-day debugging session. Either way, I learn something.",
      },
    ],
    highlight: {
      title: "The Debugging Philosophy",
      badge: "Curiosity Driven",
      text: "Down every rabbit hole lies a deeper understanding of memory models, WebSocket race conditions, or gradient instabilities.",
    },
    takeaways: [
      {
        label: "Curiosity First",
        text: "Pushing beyond standard specs creates memorable software.",
      },
      {
        label: "Root-Cause Thinking",
        text: "Fixing bugs at the structural layer, not just patching symptoms.",
      },
    ],
  },
  {
    chapter: "CHAPTER 03",
    subtitle: "ACADEMIC FOUNDATION",
    tag: "Education",
    icon: GraduationCap,
    content: [
      {
        type: "lead",
        text: "Formal engineering education rooted in core computer science, mathematics, and hands-on AI/ML specialization.",
      },
    ],
    showEducation: true,
    coursework: [
      "DSA",
      "Operating Systems",
      "Statistics",
      "ML/DL",
      "Computer Networks",
      "DBMS",
    ],
  },
];

export default function About() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const flipTo = (pageIdx) => {
    if (pageIdx === currentPage) return;
    setDirection(pageIdx > currentPage ? 1 : -1);
    setCurrentPage(pageIdx);
  };

  const next = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    } else {
      setDirection(-1);
      setCurrentPage(0);
    }
  };

  const prev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    } else {
      setDirection(1);
      setCurrentPage(pages.length - 1);
    }
  };

  const activePage = pages[currentPage];
  const PageIcon = activePage.icon;

  // Variants for realistic 3D book page flip
  const pageVariants = {
    enter: (dir) => ({
      rotateY: dir > 0 ? 55 : -55,
      opacity: 0,
      scale: 0.94,
      transformOrigin: dir > 0 ? "left center" : "right center",
      filter: "brightness(0.7)",
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transformOrigin: "center center",
      filter: "brightness(1)",
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (dir) => ({
      rotateY: dir > 0 ? -55 : 55,
      opacity: 0,
      scale: 0.94,
      transformOrigin: dir > 0 ? "right center" : "left center",
      filter: "brightness(0.6)",
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      id="about"
      data-testid={ABOUT.section}
      className="relative py-20 sm:py-28 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Bio Header & Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-2.5">
              <BookOpen size={11} className="text-cyan-400" />
              <span className="text-eyebrow text-[9px] text-cyan-300">01 / About</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight leading-[1.08]">
              Curious mind, <br />
              <span className="gradient-text">builder&#39;s hands.</span>
            </h2>

            <p className="mt-3 font-body text-slate-400 text-sm sm:text-[15px] leading-relaxed">
              Open my developer logbook to explore the philosophy, quirks, and principles behind what I build.
            </p>

            {/* Quick Metadata Card */}
            <div className="mt-5 p-4 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md space-y-2.5 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 tracking-wider uppercase text-[10px] font-semibold">
                  Open to Opportunities
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={13} className="text-cyan-400 shrink-0" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail size={13} className="text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-cyan-300 transition-colors truncate"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            {/* Interactive Chapter Switcher */}
            <div className="mt-4 flex items-center gap-1.5">
              {pages.map((p, idx) => (
                <button
                  key={p.chapter}
                  onClick={() => flipTo(idx)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all flex items-center gap-1.5 ${
                    currentPage === idx
                      ? "bg-cyan-400/20 text-cyan-200 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,229,255,0.2)]"
                      : "bg-white/[0.02] text-slate-400 border border-white/5 hover:text-white hover:border-white/20"
                  }`}
                >
                  <span
                    className={`w-1 h-1 rounded-full ${
                      currentPage === idx ? "bg-cyan-400" : "bg-slate-600"
                    }`}
                  />
                  {p.tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Interactive Flippable Logbook */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="lg:col-span-7"
          style={{ perspective: 1400 }}
        >
          {/* Book Wrapper */}
          <div className="relative rounded-2xl p-1 bg-gradient-to-br from-cyan-500/20 via-white/5 to-transparent border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]">
            {/* Top Tab Bookmarks */}
            <div className="flex items-center justify-between px-5 pt-2.5 pb-2 border-b border-white/10 bg-black/40 rounded-t-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                {pages.map((p, idx) => (
                  <button
                    key={p.chapter}
                    onClick={() => flipTo(idx)}
                    className={`relative pb-1.5 text-[11px] font-mono uppercase tracking-wider transition-all ${
                      currentPage === idx
                        ? "text-cyan-300 font-semibold"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    <span>{p.chapter}</span>
                    {currentPage === idx && (
                      <motion.div
                        layoutId="activeBookmark"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-sky-300 shadow-[0_0_8px_#00e5ff]"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Page Number & Navigation Controls */}
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[10px] text-slate-500 tracking-wider">
                  0{currentPage + 1} / 0{pages.length}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={prev}
                    aria-label="Previous Page"
                    className="p-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-300 transition"
                  >
                    <ChevronLeft size={13} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next Page"
                    className="p-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-300 transition"
                  >
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Book Page Body with 3D Flip */}
            <div className="relative min-h-[380px] sm:h-[390px] p-5 sm:p-6 bg-[#040916]/90 rounded-b-2xl backdrop-blur-2xl overflow-hidden flex flex-col justify-between">
              {/* Subtle notebook spine effect on the left edge */}
              <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none z-20 border-r border-white/5" />
              <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-gradient-to-l from-black/60 to-transparent pointer-events-none z-20" />

              {/* Interactive Flipping Page */}
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative z-10 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Chapter Subtitle Header */}
                    <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(0,229,255,0.2)]">
                          <PageIcon size={14} />
                        </div>
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-widest text-cyan-400">
                            {activePage.chapter}
                          </p>
                          <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-tight">
                            {activePage.subtitle}
                          </h3>
                        </div>
                      </div>
                      <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[9px] text-slate-400 uppercase tracking-widest">
                        <Sparkles size={10} className="text-cyan-400" />
                        Logbook
                      </span>
                    </div>

                    {/* Quotation / Lead Text */}
                    <div className="mt-4 space-y-3">
                      {activePage.content.map((item, idx) => (
                        <p
                          key={idx}
                          className={`${
                            item.type === "lead"
                              ? "font-display text-sm sm:text-base text-white font-medium leading-snug p-3 sm:p-3.5 rounded-lg bg-gradient-to-r from-cyan-950/40 via-cyan-900/15 to-transparent border-l-2 border-cyan-400"
                              : "font-body text-slate-300 text-xs sm:text-sm leading-relaxed pl-1"
                          }`}
                        >
                          {item.text}
                        </p>
                      ))}
                    </div>

                    {/* Page 1 Pillars */}
                    {activePage.pillars && (
                      <div className="mt-4 grid sm:grid-cols-2 gap-2.5">
                        {activePage.pillars.map((pillar, pIdx) => {
                          const PillarIcon = pillar.icon;
                          return (
                            <motion.div
                              key={pillar.title}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.15 + pIdx * 0.08 }}
                              whileHover={{ y: -1.5 }}
                              className="p-3 rounded-lg bg-white/[0.02] border border-white/10 hover:border-cyan-400/30 transition-all group"
                            >
                              <div className="flex items-center gap-1.5 text-cyan-300 mb-1">
                                <PillarIcon size={13} className="group-hover:scale-110 transition-transform" />
                                <span className="font-display font-semibold text-xs text-white">
                                  {pillar.title}
                                </span>
                              </div>
                              <p className="font-body text-slate-400 text-[11px] leading-relaxed">
                                {pillar.desc}
                              </p>
                            </motion.div>
                          );
                        })}
                      </div>
                    )}

                    {/* Page 2 Highlight & Takeaways */}
                    {activePage.highlight && (
                      <div className="mt-3.5 p-3 rounded-lg bg-amber-500/[0.05] border border-amber-500/20">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-display font-semibold text-xs text-amber-200 flex items-center gap-1.5">
                            <Sparkles size={11} className="text-amber-400" />
                            {activePage.highlight.title}
                          </span>
                          <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                            {activePage.highlight.badge}
                          </span>
                        </div>
                        <p className="font-body text-slate-300 text-[11px] leading-relaxed">
                          {activePage.highlight.text}
                        </p>
                      </div>
                    )}

                    {activePage.takeaways && (
                      <div className="mt-3 grid sm:grid-cols-2 gap-2">
                        {activePage.takeaways.map((t) => (
                          <div
                            key={t.label}
                            className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10"
                          >
                            <span className="font-mono text-[10px] text-cyan-300 uppercase tracking-wider block mb-0.5">
                              {t.label}
                            </span>
                            <p className="font-body text-slate-400 text-[11px] leading-relaxed">
                              {t.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Page 3 Academic Foundation */}
                    {activePage.showEducation && (
                      <div className="mt-3 space-y-2.5">
                        <div className="grid gap-2">
                          {education.map((e, i) => (
                            <div
                              key={i}
                              className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 hover:border-cyan-400/30 transition-all"
                            >
                              <div>
                                <p className="font-display font-semibold text-white text-xs sm:text-sm">
                                  {e.school}
                                </p>
                                <p className="font-body text-[11px] text-slate-400">
                                  {e.degree}
                                </p>
                              </div>
                              <div className="sm:text-right shrink-0">
                                <span className="font-mono text-[10px] text-cyan-300 tracking-wider">
                                  {e.duration}
                                </span>
                                <p className="font-mono text-[9px] text-slate-500">
                                  {e.location}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {activePage.coursework && (
                          <div className="pt-2.5 border-t border-white/10">
                            <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 mb-1.5">
                              Core Academic Focus
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {activePage.coursework.map((c) => (
                                <span
                                  key={c}
                                  className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-200"
                                >
                                  {c}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Interactive Flip Footer CTA */}
                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={next}
                      className="group flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>
                        {currentPage === 0
                          ? "Turn Page: Curiosity & Debugging"
                          : currentPage === 1
                          ? "Turn Page: Academic Foundation"
                          : "Flip back: The Builder's Mindset"}
                      </span>
                      <ChevronRight
                        size={13}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>

                    {/* Clickable Dog-ear corner note */}
                    <button
                      onClick={next}
                      title="Click to turn page"
                      className="relative w-6 h-6 flex items-center justify-center rounded-md bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all cursor-pointer group"
                    >
                      <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-cyan-400/70 group-hover:border-cyan-300 transition-colors" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


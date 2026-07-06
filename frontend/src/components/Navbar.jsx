import React, { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { NAV } from "../constants/testIds";

const links = [
  { id: "home", label: "Home", testId: NAV.linkHome },
  { id: "about", label: "About", testId: NAV.linkAbout },
  { id: "skills", label: "Skills", testId: NAV.linkSkills },
  { id: "projects", label: "Projects", testId: NAV.linkProjects },
  { id: "achievements", label: "Achievements", testId: NAV.linkAchievements },
  { id: "contact", label: "Contact", testId: NAV.linkContact },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-[#020617]/70 border-b border-white/5" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <button
          data-testid={NAV.logo}
          onClick={() => go("home")}
          className="flex items-center gap-2 group"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60 animate-ping"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
          </span>
          <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-cyan-300 transition">
            gaurav<span className="text-cyan-400">.malik</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={l.testId}
              onClick={() => go(l.id)}
              className="text-sm font-mono uppercase tracking-widest text-slate-400 hover:text-cyan-300 transition"
            >
              {l.label}
            </button>
          ))}
        </div>

        <a
          data-testid={NAV.resumeDownload}
          href="/Gaurav_Malik_Resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/40 text-cyan-300 text-xs font-mono uppercase tracking-widest hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(0,229,255,0.35)] transition"
        >
          <Download size={14} /> Resume
        </a>

        <button
          data-testid={NAV.toggle}
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 mx-6 rounded-2xl border border-white/10 bg-[#0B1220]/95 backdrop-blur-xl p-6 space-y-3">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`${l.testId}-mobile`}
              onClick={() => go(l.id)}
              className="w-full text-left text-slate-300 font-mono uppercase text-sm tracking-widest py-2 hover:text-cyan-300"
            >
              {l.label}
            </button>
          ))}
          <a
            href="/Gaurav_Malik_Resume.pdf"
            download
            className="block text-cyan-300 font-mono uppercase text-sm tracking-widest py-2"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}

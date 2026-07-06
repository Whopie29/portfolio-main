import React from "react";
import { Github, Linkedin, Download } from "lucide-react";
import { profile } from "../data/portfolio";
import { FOOTER } from "../constants/testIds";

export default function Footer() {
  return (
    <footer
      data-testid={FOOTER.root}
      className="relative border-t border-white/5 px-6 lg:px-12 pt-14 pb-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-display font-black text-4xl sm:text-5xl tracking-tighter">
              <span className="text-white">Let&#39;s build </span>
              <span className="gradient-text">something.</span>
            </p>
            <p className="mt-4 font-body text-slate-400 max-w-md text-sm">
              Available for internships, freelance ML work, and interesting collaborations.
            </p>
          </div>

          <a
            data-testid={FOOTER.resumeDownload}
            href="/Gaurav_Malik_Resume.pdf"
            download
            className="btn-primary self-start md:self-auto"
          >
            <Download size={14} /> Grab Resume
          </a>
        </div>

        <div className="hair-divider my-10" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-mono text-xs text-slate-500 tracking-widest uppercase">
            © {new Date().getFullYear()} Gaurav Malik
          </p>
          <div className="flex items-center gap-5">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-300 transition"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-300 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-300 transition font-mono text-[11px] tracking-widest"
            >
              LEETCODE
            </a>
            <a
              href={profile.links.gfg}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-300 transition font-mono text-[11px] tracking-widest"
            >
              GFG
            </a>
            <a
              href={profile.links.codolio}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-300 transition font-mono text-[11px] tracking-widest"
            >
              CODOLIO
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

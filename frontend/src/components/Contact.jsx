import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { toast, Toaster } from "sonner";
import { profile } from "../data/portfolio";
import { CONTACT } from "../constants/testIds";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      setSubmitted(true);
      toast.success("Message sent! I&#39;ll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const msg = err?.response?.data?.detail || "Something went wrong. Please try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid={CONTACT.section}
      className="relative py-28 sm:py-36 px-6 lg:px-12"
    >
      <Toaster theme="dark" position="top-right" richColors />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <p className="text-eyebrow">06 / Contact</p>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight leading-[1.05]">
            Have a project? <br />
            <span className="gradient-text">Let&#39;s talk.</span>
          </h2>
          <p className="mt-6 font-body text-slate-400 max-w-md">
            Whether it&#39;s an ML prototype, a data problem, or a collaboration — drop me a line and I&#39;ll get back within 48 hours.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 text-slate-300 hover:text-cyan-300 transition group"
            >
              <span className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50">
                <Mail size={16} />
              </span>
              <span className="font-mono text-sm">{profile.email}</span>
            </a>
            <div className="flex items-center gap-4 text-slate-300">
              <span className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center">
                <MapPin size={16} />
              </span>
              <span className="font-mono text-sm">{profile.location}</span>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 transition"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={submit}
          className="lg:col-span-7 glass-surface p-8 sm:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <FormField label="Name" testId={CONTACT.name}>
              <input
                type="text"
                value={form.name}
                onChange={onChange("name")}
                data-testid={CONTACT.name}
                required
                maxLength={100}
                className="input-field"
                placeholder="Your name"
              />
            </FormField>
            <FormField label="Email" testId={CONTACT.email}>
              <input
                type="email"
                value={form.email}
                onChange={onChange("email")}
                data-testid={CONTACT.email}
                required
                className="input-field"
                placeholder="you@domain.com"
              />
            </FormField>
          </div>
          <FormField label="Subject" testId={CONTACT.subject}>
            <input
              type="text"
              value={form.subject}
              onChange={onChange("subject")}
              data-testid={CONTACT.subject}
              maxLength={200}
              className="input-field"
              placeholder="What is this about?"
            />
          </FormField>
          <FormField label="Message" testId={CONTACT.message}>
            <textarea
              rows={6}
              value={form.message}
              onChange={onChange("message")}
              data-testid={CONTACT.message}
              required
              maxLength={5000}
              className="input-field resize-none"
              placeholder="Tell me a bit about your idea..."
            />
          </FormField>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
            {submitted ? (
              <p
                data-testid={CONTACT.success}
                className="font-mono text-cyan-300 text-sm flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Message received. Talk soon!
              </p>
            ) : (
              <p className="font-mono text-xs text-slate-500 tracking-widest uppercase">
                Response within 48 hours
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              data-testid={CONTACT.submit}
              className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"} <Send size={14} />
            </button>
          </div>
        </motion.form>
      </div>

      <style>{`
        .input-field {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          color: #F8FAFC;
          padding: 14px 16px;
          font-family: 'Manrope', sans-serif;
          font-size: 15px;
          outline: none;
          transition: all 0.25s ease;
        }
        .input-field:focus {
          border-color: rgba(0,229,255,0.5);
          background: rgba(0,229,255,0.04);
          box-shadow: 0 0 0 4px rgba(0,229,255,0.08);
        }
        .input-field::placeholder { color: #475569; }
      `}</style>
    </section>
  );
}

function FormField({ label, children }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

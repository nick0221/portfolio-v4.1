"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// Replace this with your actual Formspree form ID
// Create a free form at https://formspree.io and copy the form ID
const FORMSPREE_ID = "your-form-id";
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json?.error?.message || "Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setState("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-12 gap-3 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/15 flex items-center justify-center">
              <CheckCircle2 size={24} className="text-emerald-500" />
            </div>
            <p className="text-sm font-medium text-[var(--foreground)]">
              Message sent successfully!
            </p>
            <p className="text-[11px] text-[var(--foreground-secondary)]">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible.
            </p>
            <button
              type="button"
              onClick={() => setState("idle")}
              className="mt-2 text-[11px] font-medium text-[var(--accent)] hover:underline transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {/* Honeypot — hidden from humans, bots will fill it */}
            <div aria-hidden="true">
              <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
            </div>
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[10px] font-semibold text-[var(--foreground-secondary)] uppercase tracking-wider mb-1.5"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-3.5 py-2.5 text-[13px] rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--foreground-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 focus:border-[var(--accent)] transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[10px] font-semibold text-[var(--foreground-secondary)] uppercase tracking-wider mb-1.5"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 text-[13px] rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--foreground-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 focus:border-[var(--accent)] transition-all duration-200"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="contact-subject"
                className="block text-[10px] font-semibold text-[var(--foreground-secondary)] uppercase tracking-wider mb-1.5"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                required
                placeholder="What's this about?"
                className="w-full px-3.5 py-2.5 text-[13px] rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--foreground-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 focus:border-[var(--accent)] transition-all duration-200"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-[10px] font-semibold text-[var(--foreground-secondary)] uppercase tracking-wider mb-1.5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, idea, or just say hello..."
                className="w-full px-3.5 py-2.5 text-[13px] rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--foreground-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 focus:border-[var(--accent)] transition-all duration-200 resize-y min-h-[100px]"
              />
            </div>

            {/* Error */}
            {state === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-[12px] text-red-500"
              >
                <AlertCircle size={14} className="shrink-0" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={state === "loading"}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[12px] font-semibold tracking-wide bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-sm shadow-[var(--accent-glow)]"
              >
                {state === "loading" ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

"use client";

import { Education } from "@/data/education";
import { motion } from "framer-motion";
import { GraduationCap, ArrowUpRight } from "lucide-react";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative pl-10"
    >
      {/* Timeline line */}
      <div className="absolute left-[15px] top-3 bottom-0 w-px bg-gradient-to-b from-[var(--accent)]/40 via-[var(--border)] to-transparent" />

      {/* Timeline dot */}
      <div className="absolute left-[9px] top-[6px] w-[13px] h-[13px] rounded-full border-2 border-[var(--accent)] bg-[var(--background)] z-10 group-hover:bg-[var(--accent)] group-hover:scale-110 transition-all duration-300" />

      {/* Year badge */}
      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--accent)] font-medium mb-2.5 bg-[var(--accent-light)]/60 px-2.5 py-1 rounded-md tracking-tight">
        <GraduationCap size={11} />
        {education.year}
      </span>

      <div className="flex flex-col">
        <h3 className="text-base font-semibold text-[var(--foreground)] mb-1 leading-snug">
          {education.institution}
        </h3>
        <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed">
          {education.degree}
        </p>
        {education.advisor && (
          <p className="text-sm text-[var(--foreground-tertiary)] mt-2">
            <span className="text-[10px] uppercase tracking-wider font-medium text-[var(--foreground-secondary)]">
              Advisor:{" "}
            </span>
            {education.advisor}
          </p>
        )}
        {education.thesis && (
          <p className="text-sm text-[var(--foreground-tertiary)] mt-1">
            <span className="text-[10px] uppercase tracking-wider font-medium text-[var(--foreground-secondary)]">
              Thesis:{" "}
            </span>
            {education.thesisUrl ? (
              <a
                href={education.thesisUrl}
                className="text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {education.thesis}
                <ArrowUpRight size={10} />
              </a>
            ) : (
              education.thesis
            )}
          </p>
        )}
      </div>
    </motion.div>
  );
}

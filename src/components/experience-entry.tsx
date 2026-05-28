"use client";

import { Experience } from "@/data/experience";
import { motion } from "framer-motion";
import { Building2, ArrowUpRight } from "lucide-react";

export function ExperienceEntry({ experience }: { experience: Experience }) {
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

      {/* Date badge */}
      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--accent)] font-medium mb-2.5 bg-[var(--accent-light)]/60 px-2.5 py-1 rounded-md tracking-tight">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
        {experience.date}
      </span>

      <div className="flex flex-col">
        {/* Title & Company */}
        <h3 className="text-base font-semibold text-[var(--foreground)] mb-1 leading-snug">
          {experience.title}
          <span className="text-[var(--foreground-tertiary)] font-normal mx-1.5">
            —
          </span>
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="inline-flex items-center gap-1 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Building2 size={13} />
              <span className="underline underline-offset-2 decoration-[var(--accent)]/30">
                {experience.company}
              </span>
              <ArrowUpRight size={11} className="opacity-60" />
            </a>
          ) : (
            <span className="text-[var(--foreground-secondary)]">
              {experience.company}
            </span>
          )}
        </h3>

        {/* Description */}
        <ul className="mt-2 space-y-1.5">
          {experience.description.map((item, index) => (
            <li
              key={index}
              className="text-sm text-[var(--foreground-secondary)] leading-relaxed pl-5 relative before:absolute before:left-1 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[var(--foreground-tertiary)] before:opacity-50"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

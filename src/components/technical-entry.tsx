"use client";

import { TechnicalSkill } from "@/data/technical-skills";
import { motion } from "framer-motion";

const skillCategories: Record<string, { color: string; bg: string }> = {
  "Backend Development": { color: "border-l-[var(--accent)]", bg: "from-[var(--accent)]/10" },
  "Frontend Development": { color: "border-l-[var(--amber)]", bg: "from-[var(--amber)]/10" },
  Database: { color: "border-l-blue-500", bg: "from-blue-500/10" },
  "Version Control": { color: "border-l-purple-500", bg: "from-purple-500/10" },
  "Cloud Services and Hosting": { color: "border-l-orange-500", bg: "from-orange-500/10" },
  "Other tools and Technologies": { color: "border-l-pink-500", bg: "from-pink-500/10" },
};

export function TechnicalEntry({ technical }: { technical: TechnicalSkill }) {
  const style = skillCategories[technical.category] || { color: "border-l-[var(--accent)]", bg: "from-[var(--accent)]/10" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`border-l-2 ${style.color} pl-4 py-1`}
    >
      {/* Category */}
      <span className="text-[11px] font-semibold text-[var(--foreground-secondary)] uppercase tracking-wider mb-3 block">
        {technical.category}
      </span>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {technical.skills.map((skill, index) => (
          <span
            key={index}
            className="relative text-[12px] text-[var(--foreground)] px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-md shadow-sm hover:shadow-md hover:border-[var(--accent)]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default overflow-hidden group"
          >
            {/* Subtle hover glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">{skill}</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}

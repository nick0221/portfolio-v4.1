"use client";

import { TechnicalSkill } from "@/data/technical-skills";
import { motion } from "framer-motion";

const skillCategories: Record<
  string,
  { color: string; barColor: string; bg: string }
> = {
  "Backend Development": {
    color: "border-l-[var(--accent)]",
    barColor: "bg-[var(--accent)]",
    bg: "from-[var(--accent)]/10",
  },
  "Frontend Development": {
    color: "border-l-[var(--amber)]",
    barColor: "bg-[var(--amber)]",
    bg: "from-[var(--amber)]/10",
  },
  Database: {
    color: "border-l-blue-500",
    barColor: "bg-blue-500",
    bg: "from-blue-500/10",
  },
  "Version Control": {
    color: "border-l-purple-500",
    barColor: "bg-purple-500",
    bg: "from-purple-500/10",
  },
  "Cloud Services and Hosting": {
    color: "border-l-orange-500",
    barColor: "bg-orange-500",
    bg: "from-orange-500/10",
  },
  "Other tools and Technologies": {
    color: "border-l-pink-500",
    barColor: "bg-pink-500",
    bg: "from-pink-500/10",
  },
};

function SkillBar({
  name,
  level,
  barColor,
  index,
}: {
  name: string;
  level: number;
  barColor: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
      className="group"
    >
      {/* Label row */}
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[12px] text-[var(--foreground)] font-medium leading-none">
          {name}
        </span>
        <span className="text-[10px] font-mono font-semibold text-[var(--foreground-tertiary)] tabular-nums">
          {level}%
        </span>
      </div>

      {/* Track */}
      <div className="h-2 rounded-full bg-[var(--border-light)] dark:bg-white/5 overflow-hidden">
        <motion.div
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} proficiency: ${level}%`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{
            duration: 0.8,
            delay: index * 0.04 + 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={`h-full rounded-full ${barColor} relative`}
        >
          {/* Subtle shimmer on hover */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-0" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function TechnicalEntry({ technical }: { technical: TechnicalSkill }) {
  const style =
    skillCategories[technical.category] || {
      color: "border-l-[var(--accent)]",
      barColor: "bg-[var(--accent)]",
      bg: "from-[var(--accent)]/10",
    };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`border-l-2 ${style.color} pl-4 py-1`}
    >
      {/* Category */}
      <span className="text-[11px] font-semibold text-[var(--foreground-secondary)] uppercase tracking-wider mb-4 block">
        {technical.category}
      </span>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
        {technical.skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            barColor={style.barColor}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

"use client";

import { TechnicalSkill } from "@/data/technical-skills";
import { motion } from "framer-motion";
import { useMemo } from "react";

const skillCategories: Record<
  string,
  { color: string; starColor: string; bg: string }
> = {
  "Backend Development": {
    color: "border-l-[var(--accent)]",
    starColor: "text-[var(--accent)]",
    bg: "from-[var(--accent)]/10",
  },
  "Frontend Development": {
    color: "border-l-[var(--amber)]",
    starColor: "text-[var(--amber)]",
    bg: "from-[var(--amber)]/10",
  },
  Database: {
    color: "border-l-blue-500",
    starColor: "text-blue-500",
    bg: "from-blue-500/10",
  },
  "Version Control": {
    color: "border-l-purple-500",
    starColor: "text-purple-500",
    bg: "from-purple-500/10",
  },
  "Cloud Services and Hosting": {
    color: "border-l-orange-500",
    starColor: "text-orange-500",
    bg: "from-orange-500/10",
  },
  "Other tools and Technologies": {
    color: "border-l-pink-500",
    starColor: "text-pink-500",
    bg: "from-pink-500/10",
  },
};

const STAR_PATH =
  "M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z";

function StarIcon({
  fill,
  className,
}: {
  fill: "full" | "half" | "empty";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`w-3.5 h-3.5 ${className ?? ""}`}
      aria-hidden="true"
    >
      {fill === "half" ? (
        <>
          {/* Empty background star */}
          <path
            d={STAR_PATH}
            fill="none"
            stroke="currentColor"
            className="text-[var(--border)]"
            strokeWidth="1.5"
          />
          {/* Filled left half — no duplicate ID needed */}
          <path
            d={STAR_PATH}
            fill="currentColor"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        </>
      ) : (
        <path
          d={STAR_PATH}
          fill={fill === "full" ? "currentColor" : "none"}
          stroke={fill === "empty" ? "currentColor" : "none"}
          strokeWidth={fill === "empty" ? "1.5" : "0"}
        />
      )}
    </svg>
  );
}

function StarsRow({ level, starColor }: { level: number; starColor: string }) {
  const { fullStars, hasHalfStar, emptyStars } = useMemo(() => {
    const full = Math.floor(level / 20);
    const remainder = level % 20;
    return {
      fullStars: full,
      hasHalfStar: remainder >= 10,
      emptyStars: 5 - full - (remainder >= 10 ? 1 : 0),
    };
  }, [level]);

  return (
    <span
      className="inline-flex items-center gap-[1px]"
      role="img"
      aria-label={`${level}% proficiency`}
    >
      {Array.from({ length: fullStars }).map((_, i) => (
        <StarIcon key={`full-${i}`} fill="full" className={starColor} />
      ))}
      {hasHalfStar && <StarIcon fill="half" className={starColor} />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <StarIcon key={`empty-${i}`} fill="empty" />
      ))}
    </span>
  );
}

function SkillStars({
  name,
  level,
  starColor,
  index,
}: {
  name: string;
  level: number;
  starColor: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
      className="group flex items-center justify-between gap-3"
    >
      {/* Skill name */}
      <span className="text-[12px] text-[var(--foreground)] font-medium leading-none truncate min-w-0">
        {name}
      </span>

      {/* Stars + percentage */}
      <span className="inline-flex items-center gap-2 shrink-0">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{
            duration: 0.4,
            delay: index * 0.04 + 0.15,
            ease: "easeOut",
          }}
        >
          <StarsRow level={level} starColor={starColor} />
        </motion.span>
        <span className="text-[10px] font-mono font-semibold text-[var(--foreground-tertiary)] tabular-nums">
          {level}%
        </span>
      </span>
    </motion.div>
  );
}

export function TechnicalEntry({ technical }: { technical: TechnicalSkill }) {
  const style =
    skillCategories[technical.category] || {
      color: "border-l-[var(--accent)]",
      starColor: "text-[var(--accent)]",
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

      {/* Skills — 2-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
        {technical.skills.map((skill, index) => (
          <SkillStars
            key={skill.name}
            name={skill.name}
            level={skill.level}
            starColor={style.starColor}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

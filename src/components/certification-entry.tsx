"use client";

import { Certification } from "@/data/certification";
import { ArrowUpRight, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function CertificationEntry({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[var(--accent)]/30 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 border border-[var(--accent)]/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
          <Award size={18} className="text-[var(--accent)]" />
        </div>

        <div className="flex-1 min-w-0">
          {/* Issuer & Date */}
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="text-xs font-medium text-[var(--foreground-secondary)]">
              {certification.issuer}
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--foreground-tertiary)]" />
            <span className="text-[10px] font-mono text-[var(--foreground-tertiary)]">
              {certification.date}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-semibold text-[var(--foreground)] mb-1.5">
            {certification.credentialUrl ? (
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors duration-200"
              >
                {certification.title}
                <ArrowUpRight
                  size={13}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            ) : (
              certification.title
            )}
          </h3>

          {/* Description */}
          {certification.shortDescription && (
            <p className="text-xs text-[var(--foreground-tertiary)] leading-relaxed">
              {certification.shortDescription}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

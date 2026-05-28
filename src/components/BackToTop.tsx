"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const RADIUS = 16;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(pct);
      setVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const offset = CIRCUMFERENCE - progress * CIRCUMFERENCE;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          title={`${Math.round(progress * 100)}% scrolled`}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-[60] flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--overlay)] backdrop-blur-xl border border-[var(--border)] shadow-lg shadow-[var(--accent-glow)]/10 text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 hover:shadow-[var(--accent-glow)]/20 transition-colors duration-200"
        >
          {/* Progress ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 40 40"
            aria-hidden="true"
          >
            {/* Track */}
            <circle
              cx="20"
              cy="20"
              r={RADIUS}
              fill="none"
              stroke="currentColor"
              className="text-[var(--border-light)] dark:text-white/5"
              strokeWidth="2.5"
            />
            {/* Progress arc */}
            <circle
              cx="20"
              cy="20"
              r={RADIUS}
              fill="none"
              stroke="currentColor"
              className="text-[var(--accent)]"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
          </svg>
          <ArrowUp size={16} className="relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;

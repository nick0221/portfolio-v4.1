"use client";

import { sectionOrder, sectionIds } from "@/data/section-order";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Code2,
  FolderKanban,
  Award,
  Mail,
  Moon,
  Sun,
} from "lucide-react";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const sectionIcons = {
  Education: GraduationCap,
  Experience: Briefcase,
  Techstacks: Code2,
  Portfolio: FolderKanban,
  Certification: Award,
  Contact: Mail,
} as const;

export function FloatingMenu() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState<string | null>(null);
  const [menuRevealed, setMenuRevealed] = useState(false);
  const [focusIndex, setFocusIndex] = useState(-1);
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ── Intersection Observer for active section tracking ──
  useEffect(() => {
    const sections = sectionOrder
      .map((section) => document.getElementById(sectionIds[section]))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const candidates = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.id,
            top: entry.boundingClientRect.top,
          }));

        if (!candidates.length) return;
        candidates.sort((a, b) => Math.abs(a.top) - Math.abs(b.top));
        setActive(candidates[0].id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Reset focus index when menu is revealed/hidden
  useEffect(() => {
    if (!menuRevealed) setFocusIndex(-1);
  }, [menuRevealed]);

  // ── Scroll to a section by index ──
  const scrollTo = useCallback((index: number) => {
    const section = sectionOrder[index];
    if (!section) return;
    const id = sectionIds[section];
    setActive(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // ── Keyboard navigation ──
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const totalItems = sectionOrder.length + 1;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusIndex((prev) => {
          const next = prev + 1 >= totalItems ? 0 : prev + 1;
          return next;
        });
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusIndex((prev) => {
          const next = prev - 1 < 0 ? totalItems - 1 : prev - 1;
          return next;
        });
      }

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (focusIndex >= 0 && focusIndex < sectionOrder.length) {
          scrollTo(focusIndex);
        } else if (focusIndex === sectionOrder.length) {
          toggleTheme();
        }
      }

      if (e.key === "Escape") {
        setMenuRevealed(false);
        containerRef.current?.blur();
      }
    },
    [focusIndex, scrollTo, toggleTheme]
  );

  const activeIndex = sectionOrder.findIndex(
    (s) => sectionIds[s] === active
  );

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed right-6 top-[30%] -translate-y-1/2 z-50 hidden lg:block"
      aria-label="Floating section navigation"
    >
      <div
        ref={containerRef}
        tabIndex={0}
        role="toolbar"
        aria-orientation="vertical"
        onMouseEnter={() => setMenuRevealed(true)}
        onMouseLeave={() => {
          setMenuRevealed(false);
          setTooltipIndex(null);
        }}
        onFocus={() => setMenuRevealed(true)}
        onBlur={(e) => {
          if (!containerRef.current?.contains(e.relatedTarget as Node)) {
            setMenuRevealed(false);
          }
        }}
        onKeyDown={handleKeyDown}
        className="relative flex flex-col items-center gap-1 py-3 bg-[var(--overlay)] backdrop-blur-xl rounded-2xl border border-[var(--border)] shadow-lg shadow-[var(--accent-glow)]/5 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-[width] duration-300"
      >
        {/* Active indicator line */}
        <div
          className="absolute right-0 top-0 w-0.5 rounded-full transition-all duration-700 ease-out"
          style={{
            height: "20px",
            transform: `translateY(${Math.max(0, activeIndex) * 44 + 22}px)`,
            opacity: active ? 1 : 0,
            background:
              "linear-gradient(to bottom, var(--accent), var(--accent-hover))",
            boxShadow: "0 0 8px var(--accent-glow)",
          }}
        />

        {sectionOrder.map((section, i) => {
          const id = sectionIds[section];
          const isActive = active === id;
          const isFocused = focusIndex === i;
          const Icon = sectionIcons[section];
          const labelVisible = menuRevealed || tooltipIndex === i;

          return (
            <button
              key={section}
              type="button"
              aria-label={`Go to ${section} section`}
              aria-current={isActive ? "true" : undefined}
              tabIndex={-1}
              onClick={() => scrollTo(i)}
              onMouseEnter={() => {
                setFocusIndex(i);
                setTooltipIndex(i);
              }}
              onMouseLeave={() => setTooltipIndex(null)}
              className={`group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                isFocused && menuRevealed
                  ? "bg-[var(--background-secondary)]"
                  : ""
              }`}
            >
              {/* Hover/Active background */}
              <span
                className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[var(--accent-light)] to-transparent scale-100 opacity-100"
                    : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-[var(--background-secondary)]"
                }`}
              />

              {/* Icon */}
              {Icon && (
                <Icon
                  aria-hidden="true"
                  size={15}
                  className={`relative z-10 transition-all duration-300 ${
                    isActive
                      ? "text-[var(--accent)] scale-110"
                      : "text-[var(--foreground-secondary)] group-hover:text-[var(--foreground)] group-hover:scale-110"
                  }`}
                />
              )}

              {/* Label — absolute positioned to the left, never takes layout space */}
              <span
                className="absolute right-full mr-3 top-1/2 z-10 pointer-events-none whitespace-nowrap text-[10px] font-semibold tracking-widest uppercase"
                style={{
                  transform: `translateY(-50%) translateX(${labelVisible ? 0 : 8}px)`,
                  opacity: labelVisible ? 1 : 0,
                  transitionDelay: menuRevealed
                    ? `${i * 30}ms`
                    : tooltipIndex === i
                    ? "0ms"
                    : `${(sectionOrder.length - i) * 15}ms`,
                  transitionDuration: "250ms",
                  transitionProperty: "opacity, transform",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  color: isActive
                    ? "var(--accent)"
                    : "var(--foreground-secondary)",
                }}
              >
                {section}
              </span>
            </button>
          );
        })}

        {/* Separator */}
        <div className="flex justify-center py-1">
          <div className="w-5 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
        </div>

        {/* Theme toggle */}
        <button
          type="button"
          tabIndex={-1}
          onClick={toggleTheme}
          onMouseEnter={() => {
            setFocusIndex(sectionOrder.length);
            setTooltipIndex(sectionOrder.length);
          }}
          onMouseLeave={() => setTooltipIndex(null)}
          className="group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          aria-pressed={theme === "dark"}
        >
          <span
            className={`absolute inset-0 rounded-xl transition-all duration-300 ${
              focusIndex === sectionOrder.length && menuRevealed
                ? "scale-100 opacity-100 bg-[var(--background-secondary)]"
                : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-[var(--background-secondary)]"
            }`}
          />

          {theme === "dark" ? (
            <Sun
              size={15}
              className="relative z-10 text-[var(--foreground-secondary)] group-hover:text-[var(--amber)] group-hover:scale-110 transition-all duration-300"
            />
          ) : (
            <Moon
              size={15}
              className="relative z-10 text-[var(--foreground-secondary)] group-hover:text-[var(--foreground)] group-hover:scale-110 transition-all duration-300"
            />
          )}

          <span
            className="absolute right-full mr-3 top-1/2 z-10 pointer-events-none whitespace-nowrap text-[10px] font-semibold tracking-widest uppercase"
            style={{
              color: "var(--foreground-secondary)",
              transform: `translateY(-50%) translateX(${
                menuRevealed || tooltipIndex === sectionOrder.length ? 0 : 8
              }px)`,
              opacity:
                menuRevealed || tooltipIndex === sectionOrder.length ? 1 : 0,
              transitionDelay: menuRevealed
                ? `${sectionOrder.length * 30}ms`
                : "0ms",
              transitionDuration: "250ms",
              transitionProperty: "opacity, transform",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </span>
        </button>
      </div>
    </motion.nav>
  );
}

export default FloatingMenu;

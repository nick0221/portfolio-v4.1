"use client";

import { sectionOrder, sectionIds } from "@/data/section-order";
import { useEffect, useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Code2,
  FolderKanban,
  Award,
} from "lucide-react";

import { SlideToLeft } from "@/components/motion";

/**
 * Icon mapping MUST use the same keys as sectionOrder
 */
const sectionIcons = {
  Education: GraduationCap,
  Experience: Briefcase,
  Techstacks: Code2,
  Portfolio: FolderKanban,
  Certification: Award,
} as const;

export function FloatingMenu() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionOrder
      .map((section) => document.getElementById(sectionIds[section]))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        /**
         * ScrollSpy logic:
         * choose the section closest to top of viewport
         */
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
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.2, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <ul className="flex flex-col gap-4">
        {sectionOrder.map((section, i) => {
          const id = sectionIds[section];
          const isActive = active === id;
          const Icon = sectionIcons[section];

          return (
            <SlideToLeft key={section} delay={i * 0.2} duration={0.2}>
              <li key={section}>
                <button
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => {
                    setActive(id); // immediate feedback
                    document.getElementById(id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="group flex items-center gap-3"
                >
                  {/* Icon */}
                  {Icon && (
                    <Icon
                      className={`h-5 w-5 transition-all
                      ${
                        isActive
                          ? "text-blue-900 scale-150"
                          : "text-zinc-400 group-hover:text-blue-900"
                      }
                    `}
                    />
                  )}

                  {/* Label */}
                  <span
                    className={`text-xs font-semibold tracking-wide uppercase transition-opacity
                    ${
                      isActive
                        ? "text-blue-900"
                        : "text-zinc-500  group-hover:text-blue-900"
                    }
                  `}
                  >
                    {section}
                  </span>
                </button>
              </li>
            </SlideToLeft>
          );
        })}
      </ul>
    </nav>
  );
}

export default FloatingMenu;

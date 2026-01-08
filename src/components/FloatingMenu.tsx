"use client";

import { sectionOrder, sectionIds } from "@/data/section-order";

import { useEffect, useState } from "react";

export function FloatingMenu() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sectionOrder.forEach((section) => {
      const el = document.getElementById(sectionIds[section]);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <ul className="flex flex-col gap-3">
        {sectionOrder.map((section) => {
          const id = sectionIds[section];
          const isActive = active === id;

          return (
            <li key={section}>
              <button
                onClick={() =>
                  document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="group flex items-center gap-3"
              >
                {/* Dot */}
                <span
                  className={`h-2 w-2 rounded-full transition-all
                    ${
                      isActive
                        ? "bg-zinc-900 scale-125"
                        : "bg-zinc-400 group-hover:bg-zinc-700"
                    }
                  `}
                />

                {/* Label */}
                <span
                  className={`text-xs tracking-wide uppercase transition-opacity
                    ${
                      isActive
                        ? "text-zinc-900 opacity-100"
                        : "text-zinc-500 opacity-0 group-hover:opacity-100"
                    }
                  `}
                >
                  {section}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default FloatingMenu;

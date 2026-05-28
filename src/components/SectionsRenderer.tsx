"use client";

import { aboutMe } from "@/data/aboutme";
import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { TechnicalEntry } from "@/components/technical-entry";
import technicalData from "@/data/technical-skills";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";
import CertificationEntry from "@/components/certification-entry";
import { certificationData } from "@/data/certification";
import { ContactForm } from "@/components/ContactForm";
import { useMemo, useState } from "react";
import {
  Reveal,
  StaggerReveal,
  StaggerItem,
} from "@/components/motion";

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-end justify-between mb-8">
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-mono font-semibold text-[var(--accent)] tracking-wider">
          {num}
        </span>
        <h2 className="font-serif text-xl md:text-2xl text-[var(--foreground)] font-medium tracking-tight">
          {title}
        </h2>
      </div>
      <div className="hidden sm:block h-px flex-1 max-w-[120px] bg-gradient-to-l from-[var(--border)] to-transparent ml-6" />
    </div>
  );
}

export function SectionsRenderer() {
  const [techFilter, setTechFilter] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(4);
  const ITEMS_PER_PAGE = 4;

  const showMore = () =>
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  const resetVisible = () => setVisibleCount(ITEMS_PER_PAGE);

  const techOptions = useMemo(() => {
    const techs = portfolioData.flatMap((p) => p.technologies ?? []);
    return ["All", ...Array.from(new Set(techs)).sort()];
  }, []);

  const filteredPortfolio = useMemo(() => {
    if (techFilter === "All") return portfolioData;
    return portfolioData.filter((p) => p.technologies?.includes(techFilter));
  }, [techFilter]);

  return (
    <>
      {/* ── Hero / Tagline ── */}
      <Reveal>
        <section>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--accent)] font-medium tracking-widest uppercase">
              <span className="w-6 h-px bg-[var(--accent)]/60" />
              <span>Introduction</span>
            </div>
            <p className="font-serif text-base md:text-lg text-[var(--foreground)] leading-relaxed">
              Crafting digital experiences with clean code and
              thoughtful design. Focused on building modern,
              performant web applications that make a difference.
            </p>
            {aboutMe.description && (
              <p
                className="font-serif text-sm leading-relaxed text-[var(--foreground-secondary)] [&_a]:underline [&_a]:text-[var(--foreground)] [&_a:hover]:text-[var(--foreground-secondary)]"
                dangerouslySetInnerHTML={{
                  __html: aboutMe.description,
                }}
              />
            )}
          </div>
        </section>
      </Reveal>

      {/* ── Dynamic Sections ── */}
      {sectionOrder.map((sectionName, sectionIndex) => {
        const sectionNumber = String(sectionIndex + 1).padStart(2, "0");

        switch (sectionName) {
          case Section.Education:
            return (
              educationData.length > 0 && (
                <Reveal key={sectionName}>
                  <section id="education" className="scroll-mt-32">
                    <SectionHeader num={sectionNumber} title="Education" />
                    <StaggerReveal staggerDelay={0.08}>
                      {educationData.map((education, index) => (
                        <StaggerItem key={index} y={8}>
                          <div className={index > 0 ? "mt-8" : ""}>
                            <EducationEntry education={education} />
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerReveal>
                  </section>
                </Reveal>
              )
            );

          case Section.Experience:
            return (
              experienceData.length > 0 && (
                <Reveal key={sectionName}>
                  <section id="experience" className="scroll-mt-32">
                    <SectionHeader num={sectionNumber} title="Experience" />
                    <StaggerReveal staggerDelay={0.08}>
                      {experienceData.map((experience, index) => (
                        <StaggerItem key={index} y={8}>
                          <div className={index > 0 ? "mt-10" : ""}>
                            <ExperienceEntry experience={experience} />
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerReveal>
                  </section>
                </Reveal>
              )
            );

          case Section.technical:
            return (
              <Reveal key={sectionName}>
                <section id="techStacks" className="scroll-mt-32">
                  <SectionHeader num={sectionNumber} title="Tech Stacks & Tools" />
                  <StaggerReveal staggerDelay={0.06}>
                    {technicalData.map((technical, index) => (
                      <StaggerItem key={index} y={6}>
                        <div className={index > 0 ? "mt-6" : ""}>
                          <TechnicalEntry technical={technical} />
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerReveal>
                </section>
              </Reveal>
            );

          case Section.Portfolio:
            return (
              portfolioData.length > 0 && (
                <Reveal key={sectionName}>
                  <section id="portfolio" className="scroll-mt-32">
                    <SectionHeader num={sectionNumber} title="Portfolio" />

                    {/* Filter */}
                    <div className="flex items-center gap-3 mb-8">
                      <span className="text-[10px] font-mono font-medium text-[var(--foreground-secondary)] uppercase tracking-wider">
                        Filter
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {techOptions.map((tech) => (
                          <button
                            key={tech}
                            onClick={() => {
                              setTechFilter(tech);
                              resetVisible();
                            }}
                            aria-pressed={techFilter === tech}
                            className={`text-[10px] font-medium px-2.5 py-1 rounded-lg border transition-all duration-200 ${
                              techFilter === tech
                                ? "bg-[var(--accent)] text-white border-[var(--accent)] shadow-sm"
                                : "text-[var(--foreground-secondary)] border-[var(--border)] hover:border-[var(--accent)]/40 hover:text-[var(--foreground)] bg-[var(--surface)]"
                            }`}
                          >
                            {tech}
                          </button>
                        ))}
                      </div>
                    </div>

                    <p className="text-[11px] text-[var(--foreground-tertiary)] mb-8 font-mono">
                      Showing {Math.min(visibleCount, filteredPortfolio.length)} of {filteredPortfolio.length} project
                      {filteredPortfolio.length !== 1 ? "s" : ""}
                    </p>

                    {filteredPortfolio.slice(0, visibleCount).map((portfolio, index) => (
                      <div key={index} className={index > 0 ? "mt-6" : ""}>
                        <PortfolioEntry portfolio={portfolio} />
                      </div>
                    ))}

                    {visibleCount < filteredPortfolio.length && (
                      <div className="flex justify-center mt-10">
                        <button
                          onClick={showMore}
                          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[11px] font-medium tracking-wide border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-secondary)] hover:border-[var(--accent)]/50 hover:text-[var(--accent)] hover:shadow-sm transition-all duration-300"
                        >
                          <span>Show {Math.min(ITEMS_PER_PAGE, filteredPortfolio.length - visibleCount)} more</span>
                          <svg
                            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 5v14" />
                            <path d="m19 12-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </section>
                </Reveal>
              )
            );

          case Section.Certification:
            return (
              certificationData.length > 0 && (
                <Reveal key={sectionName}>
                  <section id="certifications" className="scroll-mt-32">
                    <SectionHeader num={sectionNumber} title="Certifications" />
                    <StaggerReveal staggerDelay={0.06}>
                      {certificationData.map((certification, index) => (
                        <StaggerItem key={index} y={8}>
                          <div className={index > 0 ? "mt-4" : ""}>
                            <CertificationEntry certification={certification} />
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerReveal>
                  </section>
                </Reveal>
              )
            );

          case Section.Contact:
            return (
              <Reveal key={sectionName}>
                <section id="contact" className="scroll-mt-32">
                  <SectionHeader num={sectionNumber} title="Get in Touch" />
                  <div className="max-w-lg">
                    <p className="text-[12px] text-[var(--foreground-secondary)] leading-relaxed mb-6">
                      Have a project in mind, a question, or just want to say hello?
                      Fill out the form below and I&apos;ll get back to you.
                    </p>
                    <ContactForm />
                  </div>
                </section>
              </Reveal>
            );

          default:
            return null;
        }
      })}

      {/* Footer note */}
      <Reveal delay={0.2}>
        <div className="pt-12 border-t border-[var(--border)]">
          <p className="text-[11px] text-[var(--foreground-tertiary)] font-mono text-center">
            Thanks for scrolling.{" "}
            <span className="text-[var(--accent)]">✦</span> Let&apos;s
            build something great.
          </p>
        </div>
      </Reveal>
    </>
  );
}

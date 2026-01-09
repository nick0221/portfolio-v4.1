"use client";

import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";

import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";

import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { TechnicalEntry } from "@/components/technical-entry";
import technicalData from "@/data/technical-skills";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";
import CertificationEntry from "@/components/certification-entry";
import { certificationData } from "@/data/certification";
import { FloatingMenu } from "@/components/FloatingMenu";

import { useMemo, useState } from "react";

import { FadeIn, Reveal } from "@/components/motion";

export default function Home() {
  const [techFilter, setTechFilter] = useState<string>("All");

  /**
   * Collect all unique technologies from portfolioData
   */
  const techOptions = useMemo(() => {
    const techs = portfolioData.flatMap((p) => p.technologies ?? []);
    return ["All", ...Array.from(new Set(techs)).sort()];
  }, []);

  /**
   * Filtered portfolio list
   */
  const filteredPortfolio = useMemo(() => {
    if (techFilter === "All") return portfolioData;

    return portfolioData.filter((p) => p.technologies?.includes(techFilter));
  }, [techFilter]);

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <FloatingMenu />
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}

            <div className="md:sticky top-12 space-y-8">
              <FadeIn>
                <ProfileSection aboutMe={aboutMe} />
              </FadeIn>
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {/* About section is typically first */}
            {aboutMe.description && (
              <Reveal key="about-me-description">
                <section>
                  <p
                    className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                    dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                  />
                </section>
              </Reveal>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <Reveal key={sectionName}>
                        <section
                          key={sectionName}
                          id="education"
                          className="scroll-mt-32"
                        >
                          <h2 className="font-serif text-zinc-700 mb-12 tracking-wide uppercase">
                            Education
                          </h2>
                          <div className="space-y-12">
                            {educationData.map((education, index) => (
                              <Reveal key={index} delay={index * 0.05}>
                                <EducationEntry
                                  key={index}
                                  education={education}
                                />
                              </Reveal>
                            ))}
                          </div>
                        </section>
                      </Reveal>
                    )
                  );

                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <Reveal key={sectionName}>
                        <section
                          key={sectionName}
                          id="experience"
                          className="scroll-mt-32"
                        >
                          <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                            Experience
                          </h2>
                          <div className="space-y-12">
                            {experienceData.map((experience, index) => (
                              <Reveal key={index} delay={index * 0.05} y={12}>
                                <ExperienceEntry
                                  key={index}
                                  experience={experience}
                                />
                              </Reveal>
                            ))}
                          </div>
                        </section>
                      </Reveal>
                    )
                  );
                case Section.technical:
                  return (
                    <Reveal key={sectionName}>
                      <section
                        key={sectionName}
                        id="techStacks"
                        className="scroll-mt-32"
                      >
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Tech Stacks & Tools
                        </h2>
                        <div className="space-y-4">
                          {technicalData.map((technical, index) => (
                            <div key={index}>
                              <Reveal delay={index * 0.05} y={6}>
                                <TechnicalEntry technical={technical} />
                                {index < technicalData.length - 1 && (
                                  <div className="h-px bg-zinc-200 my-8" />
                                )}
                              </Reveal>
                            </div>
                          ))}
                        </div>
                      </section>
                    </Reveal>
                  );

                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <Reveal key={sectionName}>
                        <section
                          key={sectionName}
                          id="portfolio"
                          className="scroll-mt-32"
                        >
                          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between mb-12">
                            <h2 className="font-serif text-md tracking-wide uppercase ">
                              Portfolio <br />
                              <small className="text-sm capitalize font-normal text-zinc-500">
                                ({filteredPortfolio.length} Projects)
                              </small>
                            </h2>

                            {/* Tech Stack Filter */}
                            <div className="flex items-center gap-2 text-xs text-zinc-500">
                              <span
                                className="uppercase tracking-wide"
                                id="filter-tech"
                              >
                                Filter
                              </span>
                              <select
                                araia-label="Filter projects by technology"
                                aria-labelledby="filter-tech"
                                value={techFilter}
                                onChange={(e) => setTechFilter(e.target.value)}
                                className="
                                text-zinc-700
                                focus:outline-none focus:text-zinc-900
                              "
                              >
                                {techOptions.map((tech) => (
                                  <option key={tech} value={tech}>
                                    {tech}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="space-y-12">
                            {filteredPortfolio.map((portfolio, index) => (
                              <Reveal key={index} delay={index * 0.05} y={12}>
                                <PortfolioEntry
                                  key={index}
                                  portfolio={portfolio}
                                />
                              </Reveal>
                            ))}
                          </div>
                        </section>
                      </Reveal>
                    )
                  );

                case Section.Certification:
                  return (
                    certificationData.length > 0 && (
                      <Reveal key={sectionName}>
                        <section
                          key={sectionName}
                          id="certifications"
                          className="scroll-mt-32"
                        >
                          <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                            Certifications
                          </h2>
                          <div className="space-y-12">
                            {certificationData.map((certification, index) => (
                              <Reveal key={index} delay={index * 0.05} y={12}>
                                <CertificationEntry
                                  key={index}
                                  certification={certification}
                                />
                              </Reveal>
                            ))}
                          </div>
                        </section>
                      </Reveal>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

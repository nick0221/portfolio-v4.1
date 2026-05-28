"use client";

import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { portfolioData } from "@/data/portfolio";
import { certificationData } from "@/data/certification";
import { Briefcase, FolderKanban, Award, Zap } from "lucide-react";
import { FloatingMenu } from "@/components/FloatingMenu";
import { BackToTop } from "@/components/BackToTop";
import { FadeIn } from "@/components/motion";
import { SectionsRenderer } from "@/components/SectionsRenderer";

const experienceYears = 8;

const sidebarStats = [
  {
    icon: Briefcase,
    value: experienceYears,
    label: "Years Exp.",
    suffix: "+",
  },
  {
    icon: FolderKanban,
    value: portfolioData.length,
    label: "Projects",
  },
  {
    icon: Award,
    value: certificationData.length,
    label: "Certs",
  },
  {
    icon: Zap,
    value: "Immediate",
    label: "Availability",
  },
].filter((s) => typeof s.value === "number" ? s.value > 0 : true);

export default function Home() {
  return (
    <div className="min-h-screen">
      <FloatingMenu />
      <BackToTop />

      <div className="max-w-screen-lg mx-auto px-6 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Profile Sidebar */}
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <div className="md:sticky top-12 space-y-8">
              <FadeIn>
                <ProfileSection aboutMe={aboutMe} />
              </FadeIn>

              {/* ── Sidebar Stats ── */}
              <FadeIn>
                <div className="grid grid-cols-2 gap-2">
                  {sidebarStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-7 h-7 rounded-md bg-[var(--accent-light)] flex items-center justify-center">
                          <Icon size={13} className="text-[var(--accent)]" />
                        </div>
                        <div className="min-w-0">                              <p className="text-[13px] font-semibold text-[var(--foreground)] leading-none mb-0.5">
                                {stat.value}{"suffix" in stat ? stat.suffix : ""}
                              </p>
                          <p className="text-[9px] font-medium text-[var(--foreground-tertiary)] uppercase tracking-wider">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-28">
            <SectionsRenderer />
          </div>
        </div>
      </div>
    </div>
  );
}

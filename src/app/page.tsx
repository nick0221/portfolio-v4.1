"use client";

import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { FloatingMenu } from "@/components/FloatingMenu";
import { BackToTop } from "@/components/BackToTop";
import { FadeIn } from "@/components/motion";
import { SectionsRenderer } from "@/components/SectionsRenderer";

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

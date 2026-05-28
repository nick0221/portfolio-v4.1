import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  FileDown,
  MapPin,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";
import { BLUR_DATA_URL } from "@/lib/constants";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) return null;

  return (
    <div className="md:sticky top-12 flex flex-row-reverse md:flex-col gap-5 md:gap-0">
      {/* Photo */}
      {aboutMe.imageUrl && (
        <div className="w-1/3 md:w-full flex-shrink-0 md:mb-6">
          <div className="relative md:w-[65%] aspect-square">
            {/* Decorative ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-[var(--amber)]/10 animate-[spin_8s_linear_infinite] opacity-70" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[var(--accent)]/10 via-transparent to-[var(--accent)]/5" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[var(--border)]">
              <Image
                src={aboutMe.imageUrl}
                alt={aboutMe.name}
                fill
                priority
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                sizes="(max-width: 768px) 33vw, 20vw"
                className="object-cover"
              />
            </div>
            {/* Status dot */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-[3px] border-[var(--background)] shadow-sm" />
          </div>
        </div>
      )}

      {/* Info */}
      <div className="w-2/3 md:w-full">
        {/* Name */}
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-1 leading-tight tracking-tight">
          {aboutMe.name}
        </h1>

        {aboutMe.altName && (
          <p className="text-sm text-[var(--foreground-secondary)] mb-2">
            {aboutMe.altName}
          </p>
        )}

        {/* Title */}
        <p className="text-[13px] text-[var(--accent)] font-medium mb-4 leading-relaxed">
          {aboutMe.title}
        </p>

        {aboutMe.institution && (
          <p className="text-xs text-[var(--foreground-tertiary)] mb-4 flex items-center gap-1.5">
            <MapPin size={12} />
            {aboutMe.institutionUrl ? (
              <a
                href={aboutMe.institutionUrl}
                className="hover:text-[var(--accent)] transition-colors underline underline-offset-2 decoration-[var(--border)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {aboutMe.institution}
              </a>
            ) : (
              aboutMe.institution
            )}
          </p>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 mb-5">
          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] px-3 py-1.5 rounded-lg transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
            >
              <FileDown size={12} />
              <span>Download CV</span>
            </a>
          )}
          {aboutMe.blogUrl && (
            <a
              href={aboutMe.blogUrl}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[var(--foreground-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] px-3 py-1.5 rounded-lg transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blog"
            >
              <ArrowUpRight size={12} />
              <span>Blog</span>
            </a>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[var(--border)] to-transparent mb-4" />

        {/* Social links */}
        <div className="flex gap-2">
          {aboutMe.githubUsername && (
            <a
              href={`https://github.com/${aboutMe.githubUsername}`}
              className="p-2 text-[var(--foreground-tertiary)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)] rounded-lg transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {aboutMe.linkedinUsername && (
            <a
              href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
              className="p-2 text-[var(--foreground-tertiary)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)] rounded-lg transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          )}
          {aboutMe.email && (
            <a
              href={`mailto:${aboutMe.email}`}
              className="p-2 text-[var(--foreground-tertiary)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)] rounded-lg transition-all duration-200"
              aria-label="Email"
              title={aboutMe.email}
            >
              <Mail size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

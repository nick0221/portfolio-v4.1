import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  FolderDownIcon,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";
import { SlideToRight } from "@/components/motion";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) {
    return null;
  }

  return (
    <div className="md:sticky top-12 flex flex-row-reverse md:flex-col gap-2 md:space-y-8">
      {aboutMe.imageUrl && (
        <div className="w-1/3 md:w-full flex-shrink-0">
          <div className="relative max-h-[45vh] md:w-[65%] aspect-[3/4] ">
            {/* Adaptive overlay */}
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply rounded-2xl shadow-sm" />
            <Image
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      )}
      <div className="w-2/3 md:w-full">
        <h1 className="font-serif text-3xl font-light tracking-wide mb-3">
          <SlideToRight delay={0.2}>{aboutMe.name}</SlideToRight>
        </h1>
        {aboutMe.altName && (
          <SlideToRight delay={0.2}>
            <p className="text-zinc-600 text-md leading-relaxed tracking-wide mb-6">
              {aboutMe.altName}
            </p>
          </SlideToRight>
        )}

        <div className="text-zinc-600 text-xs leading-relaxed tracking-wide uppercase  ">
          <SlideToRight delay={0.2}>{aboutMe.title}</SlideToRight>

          <br />
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </div>

        <div className="flex  mb-2">
          {aboutMe.blogUrl && (
            <a
              href={aboutMe.blogUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Blog</span>
            </a>
          )}

          {/* download cv */}
          {aboutMe.cvUrl && (
            <SlideToRight delay={0.3}>
              <a
                href={aboutMe.cvUrl}
                className="group inline-flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-900 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              /> */}
                <FolderDownIcon
                  size={15}
                  className="group-hover:-translate-x-0.5 transition-transform duration-300"
                />
                <span className="tracking-wider uppercase">Download CV</span>
              </a>
            </SlideToRight>
          )}
        </div>
        <div className="space-y-2">
          {/* email */}
          <SlideToRight delay={0.4}>
            <a
              href={`mailto:${aboutMe.email}`}
              className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={14} />
              {aboutMe.email}
            </a>
          </SlideToRight>

          {/* github  */}
          <SlideToRight delay={0.6}>
            {aboutMe.githubUsername && (
              <a
                href={`https://github.com/${aboutMe.githubUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} />
                github.com/{aboutMe.githubUsername}
              </a>
            )}
          </SlideToRight>

          <SlideToRight delay={0.8}>
            {aboutMe.linkedinUsername && (
              <a
                href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={14} />
                linkedin.com/in/{aboutMe.linkedinUsername}
              </a>
            )}
          </SlideToRight>
        </div>
      </div>
    </div>
  );
}

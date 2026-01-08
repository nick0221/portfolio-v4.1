import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
import { LinkedinIcon, LucideGithub, LucideMail } from "lucide-react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <main className="">{children}</main>
        <footer className="border-t border-neutral-200 dark:border-neutral-400 bg-[#FFFCF8]">
          <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 1️⃣ Brand / About */}
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                © {new Date().getFullYear()} NickDevs Web Portfolio
              </p>
              {aboutMe.secretDescription && (
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {aboutMe.secretDescription}
                </p>
              )}
            </div>

            {/* 2️⃣ Quick Links / Section Navigation */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-400 uppercase tracking-wide">
                Quick Links
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#education"
                    className="text-neutral-500 dark:text-neutral-400 hover:text-blue-900 transition-colors text-sm"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-neutral-500 dark:text-neutral-400 hover:text-blue-900 transition-colors text-sm"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-neutral-500 dark:text-neutral-400 hover:text-blue-900 transition-colors text-sm"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#certification"
                    className="text-neutral-500 dark:text-neutral-400 hover:text-blue-900 transition-colors text-sm"
                  >
                    Certifications
                  </a>
                </li>
              </ul>
            </div>

            {/* 3️⃣ Social Links */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-400 uppercase tracking-wide">
                Let&apos;s Connect
              </h3>
              <div className="flex gap-4">
                {aboutMe.githubUsername && (
                  <a
                    href={`https://github.com/${aboutMe.githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 dark:text-neutral-400 hover:text-blue-500 transition-colors"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    {/* Optional: Replace with Lucide Icon */}
                    <LucideGithub size={20} />
                  </a>
                )}
                {aboutMe.linkedinUsername && (
                  <a
                    href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 dark:text-neutral-400 hover:text-blue-500 transition-colors"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    {/* Optional: Replace with Lucide Icon */}
                    <LinkedinIcon size={20} />
                  </a>
                )}
                {aboutMe.email && (
                  <a
                    href={`mailto:${aboutMe.email}`}
                    className="text-neutral-500 dark:text-neutral-400 hover:text-blue-500 transition-colors"
                    aria-label="Email"
                    title="Email"
                  >
                    {/* Optional: Replace with Lucide Icon */}
                    <LucideMail size={20} />
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs  text-neutral-700 dark:text-neutral-400 uppercase ">
                Built with ❤️ using Next.js, TailwindCSS & Lucide
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

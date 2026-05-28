import type { Metadata } from "next";
import { Geist, Geist_Mono, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
import { LinkedinIcon, LucideGithub, LucideMail, Sparkles } from "lucide-react";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Reveal } from "@/components/motion";
import { NickDevsDarkLogo, NickDevsLightLogo } from "@/components/logo/NickDevsLogo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nickdevs.vercel.app/"),
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: {
      rel: "android-chrome-192x192",
      url: "/favicon/android-chrome-192x192.png",
    },
  },
  verification: {
    google: "H-hU2TROsFDkDkK5qhrkbO4aF1t83MfNHIEtOXqEy_k",
  },
  alternates: {
    canonical: "https://nickdevs.vercel.app/",
  },
  openGraph: {
    title: customMetadata.title || aboutMe.name,
    description:
      customMetadata.description ||
      "Modern portfolio website showcasing projects, experience, and technical skills.",
    url: "https://nickdevs.vercel.app/",
    siteName: "NickDevs Web Portfolio",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "NickDevs Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: customMetadata.title || aboutMe.name,
    description:
      customMetadata.description ||
      "Full-stack developer portfolio by NickDevs.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
        <link rel="preconnect" href="https://avatars.githubusercontent.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://placehold.co" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ptSerif.variable} antialiased`}
      >
        <AmbientBackground />
        <ThemeProvider>
          <div className="min-h-screen">
            <main>{children}</main>

            {/* ── Premium Footer ── */}
            <footer className="border-t border-[var(--border)] mt-24">
            <Reveal delay={0.1} y={8}>
              <div className="mx-auto max-w-screen-lg px-6 sm:px-8 py-16">
                {/* Top section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                  {/* Brand */}
                  <div className="space-y-4 lg:col-span-1">
                    <div className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                      <div className="dark:hidden">
                        <NickDevsLightLogo width={110} height={26} />
                      </div>
                      <div className="hidden dark:block">
                        <NickDevsDarkLogo width={110} height={26} />
                      </div>
                    </div>
                    <p className="text-xs text-[var(--foreground-secondary)] leading-relaxed max-w-xs">
                      Full-stack web developer passionate about crafting
                      modern, performant web applications with clean
                      architecture.
                    </p>
                    <div className="flex gap-2">
                      {aboutMe.githubUsername && (
                        <a
                          href={`https://github.com/${aboutMe.githubUsername}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-[var(--foreground-tertiary)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)] rounded-lg transition-all duration-200"
                          aria-label="GitHub"
                        >
                          <LucideGithub size={16} />
                        </a>
                      )}
                      {aboutMe.linkedinUsername && (
                        <a
                          href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-[var(--foreground-tertiary)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)] rounded-lg transition-all duration-200"
                          aria-label="LinkedIn"
                        >
                          <LinkedinIcon size={16} />
                        </a>
                      )}
                      {aboutMe.email && (
                        <a
                          href={`mailto:${aboutMe.email}`}
                          className="p-2 text-[var(--foreground-tertiary)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)] rounded-lg transition-all duration-200"
                          aria-label="Email"
                        >
                          <LucideMail size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="space-y-4">
                    <h3 className="text-[10px] font-semibold text-[var(--foreground-secondary)] uppercase tracking-[0.15em]">
                      Sections
                    </h3>
                    <ul className="space-y-2.5">
                      {[
                        { label: "Education", href: "#education" },
                        { label: "Experience", href: "#experience" },
                        { label: "Tech Stacks", href: "#techStacks" },
                        { label: "Portfolio", href: "#portfolio" },
                        { label: "Certifications", href: "#certifications" },
                      ].map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="text-xs text-[var(--foreground-tertiary)] hover:text-[var(--accent)] transition-colors duration-200"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-4">
                    <h3 className="text-[10px] font-semibold text-[var(--foreground-secondary)] uppercase tracking-[0.15em]">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Next.js",
                        "React",
                        "TypeScript",
                        "Tailwind CSS",
                        "Framer Motion",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] text-[var(--foreground-secondary)] px-2 py-1 bg-[var(--background-secondary)] rounded-md border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* About */}
                  <div className="space-y-4">
                    <h3 className="text-[10px] font-semibold text-[var(--foreground-secondary)] uppercase tracking-[0.15em]">
                      About
                    </h3>
                    <p className="text-xs text-[var(--foreground-tertiary)] leading-relaxed">
                      Building the web, one component at a time. Always
                      exploring new technologies and pushing boundaries.
                    </p>
                    {aboutMe.secretDescription && (
                      <p className="text-[11px] text-[var(--foreground-tertiary)]/60 italic font-serif">
                        {aboutMe.secretDescription}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-[var(--foreground-tertiary)] font-mono">
                    &copy; {new Date().getFullYear()} NICKDEVS — Built with{" "}
                    <span className="text-[var(--accent)]">Next.js</span> &amp;{" "}
                    <span className="text-[var(--accent)]">Tailwind CSS</span>
                  </p>
                  <p className="text-[11px] text-[var(--foreground-tertiary)] font-mono flex items-center gap-1.5">
                    <Sparkles size={11} className="text-[var(--accent)]" />
                    Designed with care
                  </p>
                </div>
              </div>
            </Reveal>
          </footer>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

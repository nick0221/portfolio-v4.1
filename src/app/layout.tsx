import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
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
                {aboutMe.twitterUsername && (
                  <a
                    href={`https://twitter.com/${aboutMe.twitterUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 dark:text-neutral-400 hover:text-blue-500 transition-colors"
                    aria-label="Twitter"
                  >
                    {/* Optional: Replace with Lucide Icon */}
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.13 12.13 0 0 1 3 4.9a4.28 4.28 0 0 0 1.32 5.7 4.27 4.27 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97 8.58 8.58 0 0 1-5.3 1.82A8.73 8.73 0 0 1 2 19.54a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.37-.02-.55A8.72 8.72 0 0 0 24 5.5a8.6 8.6 0 0 1-2.54.7z" />
                    </svg>
                  </a>
                )}
                {/* Add more social links like GitHub, LinkedIn, etc. */}
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

"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowUpRight, ExternalLink, ImageIcon, Code2 } from "lucide-react";
import { Portfolio } from "@/data/portfolio";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BLUR_DATA_URL } from "@/lib/constants";

const GalleryModal = dynamic(
  () => import("./GalleryModal").then((mod) => mod.GalleryModal),
  { ssr: false }
);

const DESCRIPTION_LIMIT = 150;

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  const [expanded, setExpanded] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);

  const isLong = portfolio.description.length > DESCRIPTION_LIMIT;
  const shortText = portfolio.description.slice(0, DESCRIPTION_LIMIT);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          {portfolio.imageUrl && (
            <div className="relative w-full sm:w-[220px] sm:min-w-[220px] h-52 sm:h-auto overflow-hidden bg-[var(--background-secondary)]">
              <Image
                src={portfolio.imageUrl}
                alt={portfolio.title}
                fill
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="object-cover transition-all duration-500 group-hover:scale-105"
                sizes="220px"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Project URL indicator */}
              {portfolio.projectUrl && (
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md">
                    <ExternalLink size={10} />
                    Live
                  </span>
                </div>
              )}
            </div>
          )}

          <div className="flex-1 p-5 flex flex-col min-w-0">
            {/* Title */}
            <h3 className="text-[15px] font-semibold text-[var(--foreground)] mb-2 leading-snug">
              {portfolio.projectUrl ? (
                <a
                  aria-label={portfolio.title + " Project Link"}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={portfolio.projectUrl}
                  className="group/link inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors duration-200"
                >
                  {portfolio.title}
                  <ArrowUpRight
                    size={14}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                  />
                </a>
              ) : (
                portfolio.title
              )}
            </h3>

            {/* Tech stack */}
            {portfolio.technologies && portfolio.technologies.length > 0 && (
              <div className="flex gap-1.5 mb-3 flex-wrap">
                {portfolio.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-[10px] font-medium text-[var(--foreground-secondary)] px-2 py-0.5 bg-[var(--background-secondary)] rounded-md border border-[var(--border-light)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Description */}
            <div className="mb-3">
              <AnimatePresence initial={false}>
                <motion.p
                  key={expanded ? "expanded" : "collapsed"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-sm text-[var(--foreground-secondary)] leading-relaxed"
                >
                  {expanded || !isLong ? portfolio.description : `${shortText}…`}
                </motion.p>
              </AnimatePresence>

              {isLong && !expanded && (
                <button
                  onClick={() => setExpanded(true)}
                  className="mt-1.5 text-[11px] font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                >
                  Read more →
                </button>
              )}
            </div>

            {/* Links */}
            <div className="flex gap-3 flex-wrap mt-auto pt-1">
              {portfolio.projectUrl && (
                <a
                  aria-label={portfolio.title + " Demo link"}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={portfolio.projectUrl}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                >
                  <ExternalLink size={12} />
                  <span>Live Demo</span>
                </a>
              )}

              {portfolio.projectGallery && portfolio.projectGallery.length > 0 && (
                <button
                  onClick={() => setOpenGallery(true)}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  <ImageIcon size={12} />
                  <span>Gallery ({portfolio.projectGallery.length})</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {openGallery && portfolio.projectGallery && (
          <GalleryModal
            images={portfolio.projectGallery}
            onClose={() => setOpenGallery(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

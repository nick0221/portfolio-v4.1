"use client";

import Image from "next/image";
import { ArrowUpRight, LinkIcon } from "lucide-react";
import { Portfolio } from "@/data/portfolio";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DESCRIPTION_LIMIT = 120;

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  const [expanded, setExpanded] = useState(false);

  const isLong = portfolio.description.length > DESCRIPTION_LIMIT;
  const shortText = portfolio.description.slice(0, DESCRIPTION_LIMIT);

  return (
    <div className="flex flex-col sm:flex-row gap-6  hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] transition-all duration-300 p-6 rounded-lg">
      {portfolio.imageUrl && (
        <div className="w-1/4 min-w-[160px] relative">
          <Image
            src={portfolio.imageUrl}
            alt={portfolio.title}
            width={160}
            height={200}
            className="rounded-lg"
          />
        </div>
      )}

      <div className="flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-serif text-md mb-3">
          {portfolio.projectUrl ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={portfolio.projectUrl}
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
            >
              {portfolio.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            portfolio.title
          )}
        </h3>

        {/* Tech stack */}
        {portfolio.technologies && (
          <div className="flex gap-2 mb-4 flex-wrap">
            {portfolio.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs text-zinc-600 px-2 py-1 bg-zinc-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-6">
          {portfolio.projectUrl && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={portfolio.projectUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <LinkIcon
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Demo link</span>
            </a>
          )}
          {portfolio.codeUrl && (
            <a
              href={portfolio.codeUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Code</span>
            </a>
          )}
        </div>

        {/* Description */}
        <div className="mt-4">
          <AnimatePresence initial={false}>
            <motion.p
              key={expanded ? "expanded" : "collapsed"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-sm text-zinc-600 italic leading-relaxed"
            >
              {expanded || !isLong ? portfolio.description : `${shortText}…`}
            </motion.p>
          </AnimatePresence>

          {isLong && !expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="mt-2 text-xs uppercase tracking-wide text-blue-500 hover:text-zinc-900 transition-colors"
            >
              View more
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

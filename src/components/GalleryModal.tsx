"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GalleryModalProps {
  images: { urlImage: string; label: string }[];
  onClose: () => void;
}

export function GalleryModal({ images, onClose }: GalleryModalProps) {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const paginate = (direction: number) => {
    setIndex((prev) =>
      Math.min(Math.max(prev + direction, 0), images.length - 1)
    );
  };

  // Keyboard support
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white max-w-4xl w-full rounded-xl p-6 relative overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-900 z-10"
        >
          <X size={18} />
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-4 text-xs text-zinc-500">
          {index + 1} / {images.length}
        </div>

        {/* Left Arrow */}
        {index > 0 && (
          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow hover:bg-white z-10"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        {/* Right Arrow */}
        {index < images.length - 1 && (
          <button
            onClick={() => paginate(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow hover:bg-white z-10"
          >
            <ChevronRight size={18} />
          </button>
        )}

        {/* Slider */}
        <motion.div
          className="flex cursor-grab active:cursor-grabbing touch-pan-x"
          // drag="x"
          // dragConstraints={{ left: 0, right: 0 }}
          // dragElastic={0.5}
          // onDragEnd={(_, info) => {
          //   if (info.offset.x < -80) paginate(1);
          //   if (info.offset.x > 80) paginate(-1);
          // }}
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {images.map((img, i) => {
            return (
              <div
                key={i}
                className="min-w-full flex flex-col items-center px-6"
              >
                <div className="w-full max-h-[70vh] overflow-y-auto rounded-lg relative">
                  {/* Loading placeholder */}
                  {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse rounded-lg">
                      <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}

                  {/* Image */}
                  <Image
                    src={img.urlImage}
                    alt={img.label}
                    width={900}
                    height={2000}
                    className={`w-full h-auto rounded-lg select-none transition-opacity duration-500 ${
                      loading ? "opacity-0" : "opacity-100"
                    }`}
                    draggable={false}
                    onLoadingComplete={() => setLoading(false)}
                  />
                </div>

                {/* Label */}
                <p className="text-xs text-zinc-500 mt-2 text-center">
                  {img.label}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index
                  ? "bg-zinc-900 scale-125"
                  : "bg-zinc-300 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

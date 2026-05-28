"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { BLUR_DATA_URL } from "@/lib/constants";

interface GalleryModalProps {
  images: { urlImage: string; label: string }[];
  onClose: () => void;
}

export function GalleryModal({ images, onClose }: GalleryModalProps) {
  const [[index, direction], setPage] = useState([0, 0]);
  const [loading, setLoading] = useState(true);

  // ── Swipe / drag state ──
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    currentX: 0,
    isTouch: false,
  });
  const [dragOffset, setDragOffset] = useState(0);
  const SWIPE_THRESHOLD = 60;

  const paginate = useCallback(
    (newDirection: number) => {
      setLoading(true);
      setPage(([prev]) => [
        Math.min(Math.max(prev + newDirection, 0), images.length - 1),
        newDirection,
      ]);
    },
    [images.length]
  );

  // ── Swipe / drag handlers ──
  const handleDragStart = useCallback(
    (clientX: number, isTouch: boolean) => {
      dragState.current = {
        isDragging: true,
        startX: clientX,
        currentX: clientX,
        isTouch,
      };
      setDragOffset(0);
    },
    []
  );

  const handleDragMove = useCallback((clientX: number) => {
    if (!dragState.current.isDragging) return;
    dragState.current.currentX = clientX;
    setDragOffset(clientX - dragState.current.startX);
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!dragState.current.isDragging) return;
    const delta = dragState.current.currentX - dragState.current.startX;
    dragState.current.isDragging = false;
    setDragOffset(0);

    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      if (delta > 0 && index > 0) {
        paginate(-1);
      } else if (delta < 0 && index < images.length - 1) {
        paginate(1);
      }
    }
  }, [index, images.length, paginate]);

  // Global listeners for mouse up/move (to catch events outside the element)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleDragMove(e.clientX);
    const handleMouseUp = () => handleDragEnd();
    const handleTouchMove = (e: TouchEvent) => {
      if (dragState.current.isTouch) {
        handleDragMove(e.touches[0].clientX);
      }
    };
    const handleTouchEnd = () => {
      if (dragState.current.isTouch) handleDragEnd();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleDragMove, handleDragEnd]);

  // Keyboard support
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, paginate]);

  // ── Focus trap ──
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = modalRef.current;
    if (!el) return;

    const focusable = el.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    // Focus the first focusable element
    first?.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [index]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery"
        className="bg-[var(--surface)] max-w-4xl w-full rounded-2xl relative overflow-hidden shadow-2xl"
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--background-secondary)]/50">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono font-medium text-[var(--foreground-secondary)]">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>
            <span className="text-[11px] text-[var(--foreground-tertiary)] hidden sm:inline">
              {images[index]?.label}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--background-secondary)] transition-all duration-200"
            aria-label="Close gallery"
          >
            <X size={16} />
          </button>
        </div>

        {/* Image area */}
        <div className="relative bg-[var(--background)]">
          {/* Navigation arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-3 z-20 pointer-events-none">
            {index > 0 && (
              <button
                onClick={() => paginate(-1)}
                className="pointer-events-auto p-2.5 bg-[var(--overlay-heavy)] backdrop-blur-sm rounded-full shadow-lg hover:bg-[var(--surface)] hover:scale-105 active:scale-95 transition-all duration-200 border border-[var(--border)]"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} className="text-[var(--foreground)]" />
              </button>
            )}
            {index < images.length - 1 && (
              <button
                onClick={() => paginate(1)}
                className="pointer-events-auto p-2.5 bg-[var(--overlay-heavy)] backdrop-blur-sm rounded-full shadow-lg hover:bg-[var(--surface)] hover:scale-105 active:scale-95 transition-all duration-200 border border-[var(--border)]"
                aria-label="Next image"
              >
                <ChevronRight size={18} className="text-[var(--foreground)]" />
              </button>
            )}
          </div>

          {/* Image slider */}
          <div className="overflow-hidden select-none">
            <div className="flex items-center justify-center min-h-[300px] sm:min-h-[400px] p-6 sm:p-10">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate={
                    dragState.current.isDragging
                      ? { x: dragOffset, opacity: 1 - Math.abs(dragOffset) / 800 }
                      : "center"
                  }
                  exit="exit"
                  transition={{
                    x: dragState.current.isDragging
                      ? { type: "tween", duration: 0 }
                      : { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="w-full flex flex-col items-center cursor-grab active:cursor-grabbing"
                  onMouseDown={(e) => handleDragStart(e.clientX, false)}
                  onTouchStart={(e) =>
                    handleDragStart(e.touches[0].clientX, true)
                  }
                >
                  <div className="w-full max-h-[60vh] overflow-hidden rounded-xl relative bg-[var(--background-secondary)]">
                    {/* Loading placeholder */}
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[var(--background-secondary)]">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-8 h-8 border-2 border-[var(--border)] border-t-[var(--accent)] rounded-full animate-spin" />
                          <span className="text-[10px] font-mono text-[var(--foreground-tertiary)]">
                            Loading...
                          </span>
                        </div>
                      </div>
                    )}

                    <Image
                      src={images[index].urlImage}
                      alt={images[index].label}
                      width={900}
                      height={2000}
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                      sizes="(max-width: 768px) 100vw, 900px"
                      className={`w-full h-auto rounded-xl select-none transition-opacity duration-500 ${
                        loading ? "opacity-0" : "opacity-100"
                      }`}
                      draggable={false}
                      onLoad={() => setLoading(false)}
                      priority
                    />
                  </div>

                  {/* Label */}
                  <p className="text-xs text-[var(--foreground-secondary)] mt-4 text-center font-medium">
                    {images[index].label}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dots */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 px-5 py-4 border-t border-[var(--border)] bg-[var(--background-secondary)]/50">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setLoading(true);
                  setPage([i, i > index ? 1 : -1]);
                }}
                className={`transition-all duration-500 ${
                  i === index
                    ? "w-7 h-2 bg-[var(--accent)] rounded-full shadow-sm shadow-[var(--accent-glow)]"
                    : "w-2 h-2 bg-[var(--border)] hover:bg-[var(--foreground-tertiary)] rounded-full"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

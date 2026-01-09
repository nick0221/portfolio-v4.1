"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
}

export function SlideToRight({
  children,
  delay = 0,
  duration = 0.3,
  distance = 16,
}: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -distance }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideToLeft({
  children,
  delay = 0,
  duration = 0.3,
  distance = 16,
}: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: distance }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideUp({
  children,
  delay = 0,
  duration = 0.6,
  distance = 12,
}: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
export function SlideDown({
  children,
  delay = 0,
  duration = 0.6,
  distance = 12,
}: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

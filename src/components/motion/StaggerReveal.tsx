"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  itemDelay?: number;
  y?: number;
}

export function StaggerReveal({
  children,
  className,
  staggerDelay = 0.06,
  itemDelay = 0,
  y = 10,
}: StaggerRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.2, delay: itemDelay }}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: staggerDelay,
            },
          },
          hidden: {},
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 10,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

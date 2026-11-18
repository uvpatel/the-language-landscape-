"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export const ease = [0.22, 1, 0.36, 1] as const;

export function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className={`h-px w-9 ${light ? "bg-white/50" : "bg-[#B32526]"}`} />
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${
          light ? "text-white/70" : "text-[#81766C]"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
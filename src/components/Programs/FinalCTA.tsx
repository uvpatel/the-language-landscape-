"use client";

import Link from "next/link";
import {
  motion,
  type Variants,
} from "framer-motion";
import { IconArrowUpRight, IconWorld } from "@tabler/icons-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#B32526] px-6 py-28 text-[#F7F5EF] sm:py-32 lg:px-12"
    >
      {/* Subtle concentric decorative rings matching FounderSection */}
      <div className="pointer-events-none absolute -left-36 -top-36 h-[460px] w-[460px] rounded-full border border-white/[0.08]" />
      <div className="pointer-events-none absolute -left-20 -top-20 h-[320px] w-[320px] rounded-full border border-white/[0.08]" />
      <div className="pointer-events-none absolute -bottom-48 -right-36 h-[500px] w-[500px] rounded-full border border-white/[0.08]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
        className="relative mx-auto max-w-4xl text-center"
      >
        {/* World Icon Pill */}
        <motion.div variants={fadeUp} className="mb-8 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white backdrop-blur-sm">
            <IconWorld size={22} stroke={1.4} />
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/70"
        >
          Your next chapter begins here
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="mt-6 font-[family-name:var(--font-heading)] text-5xl font-normal leading-[1.06] tracking-[-0.035em] sm:text-6xl lg:text-7xl"
        >
          Your goals. Your language.{" "}
          <span className="block mt-2 text-[#D9C6A5]">
            Your journey.
          </span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-8 max-w-xl text-[15px] leading-8 text-white/80 sm:text-base sm:leading-8"
        >
          Find the right learning program and take your next step towards a
          world of opportunities.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeUp} className="mt-10">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-sm bg-[#F7F5EF] px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#B32526] shadow-lg transition-all duration-300 hover:bg-[#EFE9DF]"
          >
            <span>Say Bonjour</span>
            <IconArrowUpRight
              size={16}
              stroke={2}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        {/* Editorial Subline */}
        <motion.p
          variants={fadeUp}
          className="mt-8 font-[family-name:var(--font-heading)] text-sm text-white/60"
        >
          Every language opens a new world.
        </motion.p>
      </motion.div>
    </section>
  );
}

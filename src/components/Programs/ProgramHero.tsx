"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { IconArrowDown } from "@tabler/icons-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const lineReveal: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};

export default function ProgramHero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 45]);
  const ringY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -35]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[640px] items-center overflow-hidden bg-[#F7F5EF] px-6 py-24 sm:py-32 lg:px-12"
    >
      {/* Decorative concentric background rings */}
      <div className="pointer-events-none absolute right-[5%] top-[10%] h-72 w-72 rounded-full border border-[#B32526]/10 md:h-[460px] md:w-[460px]" />
      <div className="pointer-events-none absolute right-[12%] top-[18%] h-56 w-56 rounded-full border border-[#B32526]/10 md:h-[320px] md:w-[320px]" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full border border-[#D9CFC2]/60" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
        {/* Left Column: Typography & Content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="relative z-10"
        >
          {/* Section label matching FounderSection */}
          <div className="mb-10 flex items-center gap-3">
            <motion.span
              variants={{
                hidden: { scaleX: 0 },
                show: { scaleX: 1, transition: { duration: 0.8, ease: EASE } },
              }}
              style={{ originX: 0 }}
              className="h-px w-10 bg-[#B32526]"
            />
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#81766C]"
            >
              01 — Find your learning journey
            </motion.p>
          </div>

          {/* Masked line reveal heading */}
          <h1 className="font-[family-name:var(--font-heading)] text-5xl font-normal leading-[1.08] tracking-[-0.035em] text-[#292624] sm:text-6xl lg:text-7xl">
            <span className="block overflow-hidden pb-1">
              <motion.span variants={lineReveal} className="block">
                Find your path.
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                variants={lineReveal}
                className="block text-[#B32526]"
              >
                Discover a language.
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-[15px] leading-8 text-[#514A45] sm:text-base sm:leading-8"
          >
            Every learner has a different reason to learn. Whether your goal is
            immigration, education, professional growth or personal exploration,
            discover a program that takes you closer to it.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Link
              href="#programs"
              className="group inline-flex items-center gap-2.5 rounded-sm bg-[#B32526] px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm transition-all duration-300 hover:bg-[#781E24]"
            >
              <span>Find Your Program</span>
              <IconArrowDown
                size={16}
                stroke={2}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </Link>

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#81766C]">
              Six paths · Endless possibilities
            </span>
          </motion.div>
        </motion.div>

        {/* Right Column: Editorial Visual matching FounderSection */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          {/* Decorative floating parallax ring */}
          <motion.div
            style={{ y: ringY }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
            className="pointer-events-none absolute -left-6 -top-6 h-32 w-32 rounded-full border border-[#B32526]/30"
          />

          {/* Arch visual composition in warm decorative background */}
          <motion.div
            style={{ y: visualY }}
            className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-2xl border border-[#D9CFC2] bg-[#EFE9DF] p-8"
          >
            {/* Interior decorative circular motif */}
            <div className="absolute inset-6 rounded-full border border-[#D9CFC2]" />
            <div className="absolute inset-14 rounded-full border border-[#B32526]/15" />

            <div className="relative flex h-full flex-col items-center justify-center text-center">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
                One world · Many voices
              </p>

              <div className="space-y-1 font-[family-name:var(--font-heading)] leading-none">
                <p className="text-4xl text-[#B32526] sm:text-5xl">
                  Bonjour.
                </p>
                <p className="text-3xl text-[#292624] sm:text-4xl">
                  Hello.
                </p>
                <p className="text-3xl text-[#81766C] sm:text-4xl">
                  Hallo.
                </p>
                <p className="text-3xl text-[#A58B64] sm:text-4xl">
                  Hola.
                </p>
              </div>

              <div className="my-6 h-px w-12 bg-[#D9CFC2]" />

              <p className="font-[family-name:var(--font-heading)] text-sm text-[#B32526]">
                Every word opens a door.
              </p>
            </div>
          </motion.div>

          {/* Floating badge matching FounderSection floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
            className="absolute -bottom-5 -right-4"
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="rounded-xl border border-[#D9CFC2] bg-[#F8F5EF] px-6 py-4 shadow-lg shadow-[#292624]/5"
            >
              <p className="font-[family-name:var(--font-heading)] text-xl text-[#B32526]">
                Learn differently.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

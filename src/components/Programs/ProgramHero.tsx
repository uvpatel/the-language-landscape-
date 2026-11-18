
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { IconArrowDownRight } from "@tabler/icons-react";

export default function ProgramHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F7F5EF] px-6 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="mb-6 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#B52A27] md:text-xs">
            <span className="h-px w-8 bg-[#B52A27]" />
            The Language Landscapes
            <span className="h-px w-8 bg-[#B52A27]" />
          </span>

          <h1 className="font-[var(--font-satoshi)] text-5xl leading-[1.08] tracking-[-0.045em] text-[#292620] sm:text-6xl md:text-7xl lg:text-[88px]">
            Find your path.
            <span className="block text-[#B52A27]">
              Discover a language.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#77736C] md:text-base md:leading-8">
            Every learner has a different reason to learn. Whether your goal
            is immigration, education, professional growth or personal
            exploration, discover a program that takes you closer to it.
          </p>

          <div className="mt-9 flex justify-center">
            <Link
              href="#programs"
              className="group inline-flex items-center gap-4 bg-[#B52A27] px-7 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#92211F]"
            >
              Find Your Program

              <IconArrowDownRight
                size={17}
                stroke={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full border border-[#B52A27]/10" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full border border-[#B52A27]/10" />
    </section>
  );
}


"use client";

import { motion, useReducedMotion } from "motion/react";

export default function ProgramIntro() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F7F5EF] px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr] md:items-end md:gap-20"
        >
          <div>
            <span className="mb-5 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#B52A27] md:text-xs">
              <span className="h-px w-8 bg-[#B52A27]" />
              A world of possibilities
            </span>

            <h2 className="max-w-xl font-[var(--font-satoshi)] text-4xl leading-[1.12] tracking-[-0.04em] text-[#292620] sm:text-5xl md:text-6xl">
              Learning journeys designed around you.
            </h2>
          </div>

          <div className="max-w-xl pb-1">
            <p className="text-sm leading-7 text-[#77736C] md:text-base md:leading-8">
              At The Language Landscapes, we believe language learning should
              be purposeful, practical and meaningful.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#77736C] md:text-base md:leading-8">
              Our programs are designed for different learning needs, age
              groups and aspirations, helping learners build language skills
              while developing confidence and cultural understanding.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-[#B52A27]/40" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A39B8E]">
                Learn · Connect · Discover
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

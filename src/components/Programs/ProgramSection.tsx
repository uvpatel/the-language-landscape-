
"use client";

import { motion, useReducedMotion } from "motion/react";
import ProgramCard from "@/components/Programs/ProgramCard";
import { programs, type Program } from "@/data/programs";

export default function ProgramSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="programs"
      className="bg-[#F7F5EF] px-6 py-16 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 max-w-2xl md:mb-20"
        >
          <span className="mb-5 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#B52A27] md:text-xs">
            <span className="h-px w-8 bg-[#B52A27]" />
            Explore our programs
          </span>

          <h2 className="font-[var(--font-satoshi)] text-4xl leading-[1.12] tracking-[-0.04em] text-[#292620] sm:text-5xl md:text-6xl">
            Find the learning path that moves you forward.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#77736C] md:text-base md:leading-8">
            From international examinations to professional development and
            early language learning, discover a program designed around your
            aspirations.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {programs.map((program: Program, index: number) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { ProgramSection, ProgramSection as ProgramSections };

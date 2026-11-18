
"use client";

import { motion, useReducedMotion } from "motion/react";
import LearningPillar from "@/components/Programs/LearningPillar";

const pillars = [
  {
    number: "01",
    title: "Listening",
    description:
      "Understand spoken language, accents and everyday conversations.",
  },
  {
    number: "02",
    title: "Speaking",
    description:
      "Express your thoughts and communicate with confidence.",
  },
  {
    number: "03",
    title: "Reading",
    description:
      "Develop comprehension through texts, stories and real-world content.",
  },
  {
    number: "04",
    title: "Writing",
    description:
      "Build clarity and accuracy through structured written expression.",
  },
  {
    number: "05",
    title: "Grammar",
    description:
      "Understand language structures and develop a strong foundation.",
  },
];

export default function OurLearning() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F1EEE6] px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
        >
          <span className="mb-5 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#B52A27] md:text-xs">
            <span className="h-px w-8 bg-[#B52A27]" />
            Our learning methodology
            <span className="h-px w-8 bg-[#B52A27]" />
          </span>

          <h2 className="font-[var(--font-satoshi)] text-4xl leading-[1.12] tracking-[-0.04em] text-[#292620] sm:text-5xl md:text-6xl">
            Every language journey begins with a foundation.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#77736C] md:text-base md:leading-8">
            Our learning approach focuses on developing practical language
            abilities through structured lessons, guided practice and
            meaningful interaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, index) => (
            <LearningPillar
              key={pillar.number}
              pillar={pillar}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-[#B52A27]/30" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#A39B8E]">
            Listen · Speak · Read · Write · Understand
          </span>
          <span className="h-px w-10 bg-[#B52A27]/30" />
        </motion.div>
      </div>
    </section>
  );
}

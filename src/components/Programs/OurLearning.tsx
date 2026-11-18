"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  IconEar,
  IconMessages,
  IconBook2,
  IconPencil,
  IconAlphabetLatin,
} from "@tabler/icons-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const lineReveal: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};

const pillars = [
  {
    number: "01",
    title: "Listening",
    description: "Develop comprehension and understand spoken language in everyday contexts.",
    icon: IconEar,
  },
  {
    number: "02",
    title: "Speaking",
    description: "Build confidence through conversation, pronunciation and expression.",
    icon: IconMessages,
  },
  {
    number: "03",
    title: "Reading",
    description: "Explore written language, understand meaning and expand vocabulary.",
    icon: IconBook2,
  },
  {
    number: "04",
    title: "Writing",
    description: "Express ideas clearly through structured writing and practical exercises.",
    icon: IconPencil,
  },
  {
    number: "05",
    title: "Grammar",
    description: "Understand language structures and develop accuracy in communication.",
    icon: IconAlphabetLatin,
  },
];

export default function OurLearning() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F7F5EF] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section Label */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mb-14 sm:mb-16 flex items-center gap-3"
        >
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
            03 — The TLL approach
          </motion.p>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B32526]"
            >
              Core linguistic pillars
            </motion.p>

            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-normal leading-[1.1] tracking-[-0.035em] text-[#292624] sm:text-5xl">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  Every language journey
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  variants={lineReveal}
                  className="block text-[#B32526]"
                >
                  begins with a foundation.
                </motion.span>
              </span>
            </h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-md text-[15px] leading-8 text-[#514A45]"
          >
            Our learning approach focuses on developing practical language
            abilities through structured lessons, guided practice and
            meaningful interaction.
          </motion.p>
        </motion.div>

        {/* 5 Feature Columns */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
                className="group relative flex min-h-[280px] flex-col justify-between rounded-sm border border-[#D9CFC2] bg-[#F8F5EF] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B32526]/50 hover:shadow-lg hover:shadow-[#292624]/5"
              >
                {/* Top: Icon & Number */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9CFC2] text-[#B32526] transition-colors duration-300 group-hover:border-[#B32526] group-hover:bg-[#B32526] group-hover:text-white">
                    <Icon size={20} stroke={1.5} />
                  </div>

                  <span className="font-[family-name:var(--font-heading)] text-lg text-[#A58B64]">
                    {pillar.number}
                  </span>
                </div>

                {/* Bottom: Title & Description */}
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-normal text-[#292624] transition-colors duration-300 group-hover:text-[#B32526]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#514A45]">
                    {pillar.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

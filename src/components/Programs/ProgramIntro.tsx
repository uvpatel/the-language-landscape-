"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { IconCompass, IconHeartHandshake, IconWorld } from "@tabler/icons-react";

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

const principles = [
  {
    icon: IconCompass,
    number: "01",
    title: "Purposeful learning",
    description: "Learning shaped around your personal goals and aspirations.",
  },
  {
    icon: IconHeartHandshake,
    number: "02",
    title: "Personal guidance",
    description: "Support and guidance throughout your learning journey.",
  },
  {
    icon: IconWorld,
    number: "03",
    title: "Cultural connection",
    description: "Language learning that builds confidence and cultural understanding.",
  },
];

export default function ProgramIntro() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-[#EFE9DF] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section label */}
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
            02 — Learning at TLL
          </motion.p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left Column: Story & Philosophy */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B32526]"
            >
              The learning philosophy
            </motion.p>

            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-normal leading-[1.1] tracking-[-0.035em] text-[#292624] sm:text-5xl">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  Learning journeys
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  variants={lineReveal}
                  className="block text-[#B32526]"
                >
                  designed around you.
                </motion.span>
              </span>
            </h2>

            <div className="mt-8 space-y-4 text-[15px] leading-8 text-[#514A45] sm:text-base sm:leading-8">
              <motion.p variants={fadeUp}>
                At The Language Landscapes, we believe language learning should
                be purposeful, practical and meaningful.
              </motion.p>
              <motion.p variants={fadeUp}>
                Our programs are designed for different learning needs, age
                groups and aspirations, helping learners build language skills
                while developing confidence and cultural understanding.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column: Three Principles cards */}
          <div className="space-y-4">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: index * 0.12, ease: EASE }}
                  className="group flex items-center justify-between gap-6 rounded-sm border border-[#D9CFC2] bg-[#F7F5EF] p-6 transition-all duration-300 hover:border-[#B32526]/40 hover:shadow-md hover:shadow-[#292624]/5"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D9CFC2] text-[#B32526] transition-colors duration-300 group-hover:border-[#B32526] group-hover:bg-[#B32526] group-hover:text-white">
                      <Icon size={20} stroke={1.5} />
                    </div>

                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-normal text-[#292624] transition-colors duration-300 group-hover:text-[#B32526]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#81766C]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span className="font-[family-name:var(--font-heading)] text-lg text-[#A58B64]">
                    {item.number}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

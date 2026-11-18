
"use client";

import {
  IconMessageCircle,
  IconHandStop,
  IconMusic,
  IconWorld,
  IconArrowUpRight,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const expressions = [
  {
    number: "01",
    title: "Spoken",
    description: "Words, conversations and voices that bring ideas to life.",
    icon: IconMessageCircle,
  },
  {
    number: "02",
    title: "Unspoken",
    description: "Gestures, expressions and the language of silence.",
    icon: IconHandStop,
  },
  {
    number: "03",
    title: "Artistic",
    description: "Music, dance, film and theatre as forms of expression.",
    icon: IconMusic,
  },
  {
    number: "04",
    title: "Cultural",
    description: "Traditions, identity and the stories that connect us.",
    icon: IconWorld,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.15,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function IntroductionSection() {
  const shouldReduceMotion = useReducedMotion();

  const revealVariants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : reveal;

  const cardVariants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : cardReveal;

  const containerVariants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : cardContainer;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F5EF] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="mb-16 flex items-center gap-3"
        >
          <motion.span
            variants={revealVariants}
            className="h-px w-10 origin-left bg-[#B32526]"
          />
          <motion.p
            variants={revealVariants}
            className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#81766C]"
          >
            02 — The TLL philosophy
          </motion.p>
        </motion.div>

        {/* Main editorial layout */}
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">

          {/* Left column */}
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="max-w-2xl font-[family-name:var(--font-heading)] text-5xl font-normal leading-[1.12] tracking-[-0.035em] text-[#292624] sm:text-6xl lg:text-[68px]"
            >
              <motion.span variants={revealVariants} className="block">
                Language is not just what we speak.
              </motion.span>

              <motion.span
                variants={revealVariants}
                className="mt-2 block text-[#B32526]"
              >
                It is everything we express.
              </motion.span>
            </motion.h2>

            {/* Supporting statement */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={revealVariants}
              className="mt-10 flex items-start gap-5"
            >
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ originY: 0 }}
                className="mt-2 h-16 w-[2px] shrink-0 bg-[#B32526]"
              />

              <p className="max-w-lg text-lg leading-8 text-[#514A45]">
                Language, in all its forms — spoken and unspoken — is a
                bridge to understanding ourselves and the world around us.
              </p>
            </motion.div>

            {/* Description and CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={revealVariants}
              className="mt-12"
            >
              <p className="max-w-lg text-[15px] leading-8 text-[#81766C]">
                Born in India, a land of extraordinary linguistic diversity,
                The Language Landscapes celebrates the richness of human
                expression and the connections that language makes possible.
                Whether you are a curious beginner or a professional seeking
                fluency, TLL is a space where your voice matters.
              </p>

              <Link
                href="#programs"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#B32526]"
              >
                Discover what we offer

                <motion.span
                  whileHover={shouldReduceMotion ? undefined : { x: 4, y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <IconArrowUpRight size={18} />
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Right column: expression cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {expressions.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  variants={cardVariants}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -7,
                          transition: {
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }
                  }
                  className="group flex min-h-[210px] flex-col justify-between rounded-2xl border border-[#E4DDD3] bg-[#EFE9DF] p-7 transition-colors duration-500 hover:border-[#B32526]/30 hover:bg-white"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-widest text-[#A58B64]">
                      {item.number}
                    </span>

                    <motion.span
                      whileHover={
                        shouldReduceMotion ? undefined : { rotate: 8, scale: 1.12 }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      <Icon
                        size={27}
                        stroke={1.4}
                        className="text-[#B32526]"
                      />
                    </motion.span>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-3xl text-[#292624] transition-transform duration-300 group-hover:translate-x-1">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#81766C]">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

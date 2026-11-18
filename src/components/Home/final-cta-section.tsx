
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  IconArrowUpRight,
  IconArrowDown,
  IconMessageCircle,
  IconWorld,
} from "@tabler/icons-react";

const languages = [
  { word: "Bonjour", position: "top-10 left-[8%]", rotate: "-rotate-12" },
  { word: "Hello", position: "top-20 right-[10%]", rotate: "rotate-6" },
  { word: "Hola", position: "bottom-28 left-[12%]", rotate: "rotate-6" },
  { word: "Ciao", position: "bottom-16 right-[12%]", rotate: "-rotate-6" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const revealUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

const contentContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export default function FinalCTASection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="start-journey"
      className="relative overflow-hidden bg-[#781E24] px-5 py-28 text-[#F8F5EF] sm:px-8 lg:px-16 lg:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/[0.07]" />

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0.4, scale: 0.9 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease }}
        className="pointer-events-none absolute -left-20 -top-20 h-[340px] w-[340px] rounded-full border border-white/[0.07]"
      />

      <div className="pointer-events-none absolute -bottom-48 -right-40 h-[550px] w-[550px] rounded-full border border-white/[0.07]" />

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B32526]/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Eyebrow */}
        <motion.div
          variants={contentContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true }}
          className="mb-14 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D9C6A5]"
        >
          <motion.span
            variants={revealUp}
            className="h-px w-8 bg-[#D9C6A5]"
          />

          <motion.span variants={revealUp}>
            12 — Your next chapter begins here
          </motion.span>

          <motion.span
            variants={revealUp}
            className="h-px w-8 bg-[#D9C6A5]"
          />
        </motion.div>

        {/* Main content */}
        <div className="relative mx-auto max-w-5xl text-center">
          {/* Floating language words — desktop */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {languages.map((item, index) => (
              <motion.span
                key={item.word}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 20, rotate: 0 }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 0.55,
                        y: 0,
                        rotate: index % 2 === 0 ? -8 : 6,
                      }
                }
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, -9, 0],
                      }
                }
                viewport={{ once: true }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.2 + index * 0.12, ease },
                  y: {
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  },
                  rotate: { duration: 0.8, ease },
                }}
                className={`absolute ${item.position} ${item.rotate} font-[family-name:var(--font-heading)] text-2xl text-[#D9C6A5]`}
              >
                {item.word}.
              </motion.span>
            ))}
          </div>

          <motion.div
            variants={contentContainer}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* World icon */}
            <motion.div
              variants={revealUp}
              className="mb-8 flex justify-center"
            >
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { rotate: [0, 8, 0, -8, 0] }
                }
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-[#D9C6A5]"
              >
                <IconWorld size={27} stroke={1.3} />
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={revealUp}
              className="font-[family-name:var(--font-heading)] text-5xl leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
            >
              Every language
              <br />
              <span className="text-[#D9C6A5]">
                opens a new world.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={revealUp}
              className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#F0E4DD]/80 sm:text-lg"
            >
              Whether you are taking your first step, preparing for an
              examination or exploring a new culture, your language journey
              can begin here.
            </motion.p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#contact"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -4, scale: 1.02 }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.3, ease }}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#F8F5EF] px-8 py-4 text-sm font-semibold text-[#781E24] transition-colors duration-300 hover:bg-[#D9C6A5] sm:w-auto"
            >
              Let's Talk
              <IconArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href="#programs"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -4, scale: 1.02 }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.3, ease }}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-[#F8F5EF] transition-all duration-300 hover:border-white hover:bg-white/10 sm:w-auto"
            >
              Explore programs
              <IconArrowDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-24 border-t border-white/15 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <IconMessageCircle
                size={20}
                stroke={1.4}
                className="text-[#D9C6A5]"
              />

              <p className="text-sm text-[#F0E4DD]/80">
                One conversation can begin a new journey.
              </p>
            </div>

            <p className="font-[family-name:var(--font-heading)] text-xl text-[#D9C6A5]">
              Step in curious. Step out multilingual.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

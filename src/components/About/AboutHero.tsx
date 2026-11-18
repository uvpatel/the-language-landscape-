"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { IconArrowDown } from "@tabler/icons-react";
import { ease } from "./shared";

const words = ["Bonjour", "Hello", "Hallo", "Hola", "Ciao", "Namaste"];

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF]">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease }}
        className="pointer-events-none absolute -left-48 -top-48 h-[520px] w-[520px] rounded-full border border-[#B32526]/[0.07]"
      />
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease }}
        className="pointer-events-none absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full border border-[#A58B64]/20"
      />

      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-24 text-center sm:px-10 sm:pt-32 lg:pb-28">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <span className="h-px w-9 bg-[#B32526]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
            About TLL
          </p>
          <span className="h-px w-9 bg-[#B32526]" />
        </motion.div>

        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.1, ease }}
          className="mx-auto max-w-4xl font-[family-name:var(--font-heading)] text-5xl font-normal leading-[1.08] tracking-[-0.035em] text-[#292624] sm:text-6xl lg:text-[76px]"
        >
          Language is where the world
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease }}
            className="mt-1 block text-[#B32526]"
          >
            begins to connect.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.55, ease }}
          className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#514A45] sm:text-lg"
        >
          A journey into languages, cultures and the many ways we express what
          makes us human.
        </motion.p>

        {/* Greeting ticker */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 1, delay: 0.9, ease }}
          className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3 border-y border-[#E4DDD3] py-5"
        >
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + i * 0.1, ease }}
              whileHover={
                shouldReduceMotion ? undefined : { y: -3, color: "#B32526" }
              }
              className={`cursor-default font-[family-name:var(--font-heading)] text-xl ${
                i % 2 === 0 ? "text-[#B32526]" : "text-[#81766C]"
              }`}
            >
              {word}.
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5, ease }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="#our-story"
            aria-label="Scroll to our story"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#D9CFC2] text-[#B32526] transition-colors duration-300 hover:bg-[#B32526] hover:text-white"
          >
            <IconArrowDown
              size={18}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { IconArrowDown, IconArrowUpRight } from "@tabler/icons-react";

const ease = [0.22, 1, 0.36, 1] as const;

const programs = [
  "TEF & TCF Preparation",
  "DELF Preparation",
  "Kids Program",
  "Corporate Training",
  "Teachers Training",
];

const greetings = [
  {
    word: "Bonjour.",
    lang: "French",
    card: "bg-[#B32526] text-white",
    langColor: "text-white/70",
    offset: "lg:ml-0",
  },
  {
    word: "Hello.",
    lang: "English",
    card: "bg-[#EFE9DF] text-[#292624]",
    langColor: "text-[#81766C]",
    offset: "lg:ml-14",
  },
  {
    word: "Hallo.",
    lang: "German",
    card: "border border-[#E4DDD3] bg-[#F8F5EF] text-[#292624]",
    langColor: "text-[#81766C]",
    offset: "lg:ml-5",
  },
  {
    word: "Hola.",
    lang: "Spanish",
    card: "bg-[#781E24] text-white",
    langColor: "text-white/70",
    offset: "lg:ml-20",
  },
];

const ticker = [
  "Bonjour",
  "Hello",
  "Hallo",
  "Hola",
  "Ciao",
  "Namaste",
  "Salaam",
  "Konnichiwa",
];

export function HeroSection2() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF]">
      {/* Background rings */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease }}
        className="pointer-events-none absolute -left-52 top-1/3 h-[560px] w-[560px] rounded-full border border-[#B32526]/[0.06]"
      />
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease }}
        className="pointer-events-none absolute -right-44 -top-44 h-[520px] w-[520px] rounded-full border border-[#A58B64]/20"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 sm:px-10 sm:pt-28 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          {/* Left: copy */}
          <div className="relative z-10">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="mb-8 flex items-center gap-3"
            >
              <motion.span
                initial={shouldReduceMotion ? false : { scaleX: 0 }}
                animate={shouldReduceMotion ? undefined : { scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease }}
                className="h-px w-9 origin-left bg-[#B32526]"
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
                The Language Landscapes
              </p>
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.1, ease }}
              className="font-[family-name:var(--font-heading)] text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-[#292624] sm:text-5xl lg:text-[58px]"
            >
              We speak in many expressions, but our message is one:
              <motion.span
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.45, ease }}
                className="mt-3 block text-5xl leading-[1.02] text-[#B32526] sm:text-6xl lg:text-[88px]"
              >
                Unity through language.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.55, ease }}
              className="mt-8 max-w-xl text-base leading-8 text-[#514A45] sm:text-lg"
            >
              Discover the world through languages, cultures and human
              expression. Begin your journey with The Language Landscapes, where
              every language opens a new way of seeing, thinking and connecting.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.65, ease }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.3, ease }}
              >
                <Link
                  href="#programs"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#B32526] px-7 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#781E24]"
                >
                  Explore Our Programs
                  <IconArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.3, ease }}
              >
                <Link
                  href="#about"
                  className="inline-flex items-center rounded-full border border-[#D9CFC2] px-7 py-4 text-sm font-medium text-[#292624] transition-colors duration-300 hover:border-[#B32526] hover:text-[#B32526]"
                >
                  Discover Our Story
                </Link>
              </motion.div>
            </motion.div>

            {/* Program strip */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9, ease }}
              className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-3 pt-6"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#81766C]">
                Programs
              </span>
              {programs.map((item) => (
                <motion.span
                  key={item}
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -3, color: "#B32526" }
                  }
                  className="cursor-default text-sm text-[#514A45]"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right: greeting cards */}
          <div className="relative mx-auto w-full max-w-[400px] lg:max-w-none">
            {/* Rotating badge */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9, ease }}
              className="absolute -right-3 -top-12 z-20 hidden h-28 w-28 sm:block lg:-right-6"
            >
              <motion.svg
                viewBox="0 0 120 120"
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="h-full w-full"
                aria-hidden
              >
                <defs>
                  <path
                    id="tll-badge-circle"
                    d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                  />
                </defs>
                <circle
                  cx="60"
                  cy="60"
                  r="58"
                  fill="#F8F5EF"
                  stroke="#E4DDD3"
                />
                <text
                  fill="#B32526"
                  fontSize="9.5"
                  fontWeight="600"
                  letterSpacing="2.4"
                >
                  <textPath href="#tll-badge-circle">
                    STEP IN CURIOUS • STEP OUT MULTILINGUAL •
                  </textPath>
                </text>
              </motion.svg>
              <span className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-heading)] text-2xl text-[#B32526]">
                TLL
              </span>
            </motion.div>

            <div className="space-y-4">
              {greetings.map((item, i) => (
                <motion.div
                  key={item.word}
                  initial={
                    shouldReduceMotion ? false : { opacity: 0, x: 40 }
                  }
                  animate={
                    shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
                  }
                  transition={{
                    duration: 0.9,
                    delay: 0.4 + i * 0.14,
                    ease,
                  }}
                  className={item.offset}
                >
                  <motion.div
                    animate={
                      shouldReduceMotion ? undefined : { y: [0, -6, 0] }
                    }
                    transition={{
                      duration: 5 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.6,
                    }}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                    className={`flex items-center justify-between rounded-[2rem] px-8 py-6 ${item.card}`}
                  >
                    <span className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl">
                      {item.word}
                    </span>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${item.langColor}`}
                    >
                      {item.lang}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Greeting ticker */}
      <div className="relative mt-20 overflow-hidden border-y border-[#E4DDD3] py-5">
        <motion.div
          animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          className="flex w-max items-center"
        >
          {[...ticker, ...ticker].map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="flex items-center font-[family-name:var(--font-heading)] text-2xl text-[#81766C]"
            >
              <span className="px-8">{word}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#B32526]/60" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#81766C]">
          Step in curious. Step out multilingual.
        </p>

        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          whileHover={
            shouldReduceMotion
              ? undefined
              : { y: 4, backgroundColor: "#B32526", color: "#FFFFFF" }
          }
          whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
          transition={{ duration: 0.3, ease }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9CFC2] text-[#B32526]"
        >
          <IconArrowDown size={18} />
        </motion.a>
      </div>
    </section>
  );
}
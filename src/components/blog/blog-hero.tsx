"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { IconArrowDown } from "@tabler/icons-react";

const multilingualWords = [
  { word: "Parole", lang: "Italian", pos: "top-8 left-8 sm:left-16", rot: "-rotate-6" },
  { word: "Écrire", lang: "French", pos: "top-14 right-10 sm:right-24", rot: "rotate-6" },
  { word: "Kintsugi", lang: "Japanese", pos: "bottom-20 left-12 sm:left-28", rot: "rotate-3" },
  { word: "Fernweh", lang: "German", pos: "bottom-12 right-12 sm:right-20", rot: "-rotate-3" },
];

export function BlogHero() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative isolate overflow-hidden border-b border-[#292624]/10 bg-[#F8F5EF] pb-20 pt-20 sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-28">
      {/* Decorative concentric background rings */}
      <div className="pointer-events-none absolute -right-36 -top-36 h-[500px] w-[500px] rounded-full border border-[#B32526]/8" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-[340px] w-[340px] rounded-full border border-[#B32526]/8" />
      <div className="pointer-events-none absolute -bottom-48 -left-36 h-[460px] w-[460px] rounded-full border border-[#A58B64]/10" />

      {/* Floating subtle multilingual expressions */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-40">
        {multilingualWords.map((item) => (
          <div
            key={item.word}
            className={`absolute hidden md:block ${item.pos} ${item.rot} transition-transform duration-700`}
          >
            <span className="font-serif text-3xl font-normal tracking-wider text-[#A58B64]/60 lg:text-4xl">
              {item.word}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#81766C]/60">
              {item.lang}
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#B32526]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#81766C]">
              The Language Landscapes Journal
            </span>
            <span className="h-px w-8 bg-[#B32526]" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-[clamp(2.75rem,6.2vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#292624]"
          >
            Words, ideas and{" "}
            <span className="text-[#B32526]">perspectives.</span>
          </motion.h1>

          {/* Subtitle / Intro paragraph */}
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
            className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-[#514A45] sm:text-xl sm:leading-9"
          >
            Explore the world of language, linguistics and culture through
            conversations, insights and stories that inspire curiosity and
            understanding.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.38, ease: "easeOut" }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <Link
              href="#latest-articles"
              className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-xs bg-[#B32526] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#781E24]"
            >
              <span>Explore Articles</span>
              <IconArrowDown
                size={16}
                stroke={2}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

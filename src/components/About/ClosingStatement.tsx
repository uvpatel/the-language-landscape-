"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { IconArrowUpRight, IconGlobe } from "@tabler/icons-react";
import { ease, Reveal } from "./shared";

const floating = [
  { word: "Bonjour.", className: "left-[6%] top-[14%] -rotate-6" },
  { word: "Hello.", className: "right-[8%] top-[10%] rotate-6" },
  { word: "Hola.", className: "left-[10%] bottom-[16%] rotate-3" },
  { word: "Ciao.", className: "right-[10%] bottom-[18%] -rotate-3" },
];

export default function ClosingStatement() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#781E24] text-white">
      {floating.map((item, i) => (
        <motion.span
          key={item.word}
          aria-hidden
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease }}
          className={`pointer-events-none absolute hidden font-[family-name:var(--font-heading)] text-2xl text-white/15 md:block ${item.className}`}
        >
          {item.word}
        </motion.span>
      ))}

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:px-10 lg:py-32">
        <Reveal>
          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="mx-auto mb-8 flex h-12 w-12 items-center justify-center text-white/50"
          >
            <IconGlobe size={40} stroke={1} />
          </motion.div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-[family-name:var(--font-heading)] text-5xl font-normal leading-[1.08] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            Language connects
            <span className="mt-1 block text-[#F2D9C4]">
              what the world keeps apart.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
            Every language carries a story. Every culture offers a perspective.
            Every conversation creates an opportunity to understand one
            another.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
            Join us in celebrating the richness of human expression.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.3, ease }}
            className="mt-10 inline-block"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#F8F5EF] px-8 py-4 text-sm font-medium text-[#781E24] transition-colors duration-300 hover:bg-white"
            >
              Say Bonjour
              <IconArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </Reveal>

        <p className="mt-16 text-[10px] uppercase tracking-[0.2em] text-white/50">
          Step in curious. Step out multilingual.
        </p>
      </div>
    </section>
  );
}
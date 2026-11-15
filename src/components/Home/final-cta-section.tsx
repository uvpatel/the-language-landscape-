
"use client";

import { motion } from "framer-motion";
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

export default function FinalCTASection() {
  return (
    <section
      id="start-journey"
      className="relative overflow-hidden bg-[#781E24] px-5 py-28 text-[#F8F5EF] sm:px-8 lg:px-16 lg:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/[0.07]" />
      <div className="pointer-events-none absolute -left-20 -top-20 h-[340px] w-[340px] rounded-full border border-white/[0.07]" />
      <div className="pointer-events-none absolute -bottom-48 -right-40 h-[550px] w-[550px] rounded-full border border-white/[0.07]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D9C6A5]"
        >
          <span className="h-px w-8 bg-[#D9C6A5]" />
          12 — Your next chapter begins here
          <span className="h-px w-8 bg-[#D9C6A5]" />
        </motion.div>

        {/* Main content */}
        <div className="relative mx-auto max-w-5xl text-center">
          {/* Floating language words — desktop */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {languages.map((item, index) => (
              <motion.span
                key={item.word}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 0.55, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 * index }}
                className={`absolute ${item.position} ${item.rotate} font-[family-name:var(--font-heading)] text-2xl italic text-[#D9C6A5]`}
              >
                {item.word}.
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-[#D9C6A5]">
                <IconWorld size={27} stroke={1.3} />
              </div>
            </div>

            <h2 className="font-[family-name:var(--font-heading)] text-5xl leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              Every language
              <br />
              <span className="italic text-[#D9C6A5]">
                opens a new world.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#F0E4DD]/80 sm:text-lg">
              Whether you are taking your first step, preparing for an
              examination or exploring a new culture, your language journey
              can begin here.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#F8F5EF] px-8 py-4 text-sm font-semibold text-[#781E24] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9C6A5] sm:w-auto"
            >
              Start your journey
              <IconArrowUpRight
                size={19}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#programs"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-[#F8F5EF] transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10 sm:w-auto"
            >
              Explore programs
              <IconArrowDown
                size={18}
                className="transition-transform group-hover:translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
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

            <p className="font-[family-name:var(--font-heading)] text-xl italic text-[#D9C6A5]">
              Step in curious. Step out multilingual.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  IconBook,
  IconEar,
  IconLanguage,
  IconMessageCircle,
  IconPencil,
} from "@tabler/icons-react";
import { ease, Reveal, SectionLabel } from "./shared";

const pillars = [
  { label: "Listen", icon: IconEar },
  { label: "Speak", icon: IconMessageCircle },
  { label: "Read", icon: IconBook },
  { label: "Write", icon: IconPencil },
  { label: "Explore", icon: IconLanguage },
];

const layers = [
  {
    title: "Structured education",
    text: "Clear frameworks and guided lessons that build real foundations.",
  },
  {
    title: "Practical application",
    text: "Conversation, role-play and everyday use of the language.",
  },
  {
    title: "Cultural understanding",
    text: "Context, stories and traditions that give words their meaning.",
  },
];

export default function OurApproach() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F8F5EF] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <Reveal>
          <SectionLabel>03 — Our approach</SectionLabel>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Left */}
          <div>
            <Reveal>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-[#292624] sm:text-5xl lg:text-6xl">
                Learning
                <span className="mt-1 block text-[#B32526]">
                  beyond words.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-base leading-8 text-[#514A45] sm:text-lg">
                We believe that language is more than a collection of words,
                rules and expressions. It is an experience shaped by
                communication, culture and human connection.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#514A45]">
                We encourage learners to listen, read, write, speak and explore
                language in its many forms.
              </p>
            </Reveal>

            {/* Pillar chips */}
            <div className="mt-10 flex flex-wrap gap-3">
              {pillars.map(({ label, icon: Icon }, i) => (
                <Reveal key={label} delay={0.25 + i * 0.06} y={14}>
                  <motion.span
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { y: -3, borderColor: "#B32526" }
                    }
                    transition={{ duration: 0.3, ease }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#D9CFC2] px-5 py-2.5 text-sm text-[#292624]"
                  >
                    <Icon size={16} className="text-[#B32526]" stroke={1.6} />
                    {label}
                  </motion.span>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: three layers */}
          <div className="relative">
            <div className="absolute bottom-6 left-[19px] top-6 w-px bg-[#E4DDD3]" />
            <ul className="space-y-8">
              {layers.map((layer, i) => (
                <Reveal key={layer.title} delay={i * 0.12}>
                  <li className="relative flex gap-6">
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B32526]/30 bg-[#F8F5EF] text-xs font-semibold text-[#B32526]">
                      0{i + 1}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl text-[#292624]">
                        {layer.title}
                      </h3>
                      <p className="mt-2 max-w-sm text-sm leading-7 text-[#514A45]">
                        {layer.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  IconHeartHandshake,
  IconWorld,
  IconEar,
  IconBook2,
  IconUsers,
  IconMessageCircle,
  IconArrowUpRight,
  IconEye,
} from "@tabler/icons-react";

const differentiators = [
  {
    number: "01",
    icon: IconHeartHandshake,
    title: "Learning with inclusion",
    description:
      "We believe language education should be accessible and welcoming. TLL's philosophy recognises that every learner deserves the opportunity to discover and express themselves.",
  },
  {
    number: "02",
    icon: IconWorld,
    title: "Language beyond words",
    description:
      "Language is also culture, identity and human connection. We encourage learners to explore the perspectives and expressions that make communication meaningful.",
  },
  {
    number: "03",
    icon: IconEar,
    title: "A holistic approach",
    description:
      "Listening, speaking, reading, writing and grammar come together to build a more complete understanding of a language.",
  },
  {
    number: "04",
    icon: IconUsers,
    title: "Learning for different goals",
    description:
      "From young learners and examination candidates to educators and professionals, TLL offers different learning pathways for different aspirations.",
  },
];

const values = [
  {
    icon: IconEye,
    title: "Understand",
    description: "Discover the meaning behind language.",
  },
  {
    icon: IconMessageCircle,
    title: "Express",
    description: "Develop confidence in communication.",
  },
  {
    icon: IconWorld,
    title: "Connect",
    description: "Build bridges across cultures.",
  },
];

export default function WhyChooseTLLSection() {
  return (
    <section
      id="why-tll"
      className="overflow-hidden bg-[#292624] px-5 py-24 text-[#F8F5EF] sm:px-8 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D9A09A]">
              <span className="h-px w-8 bg-[#D9A09A]" />
              10 — The TLL difference
            </span>

            <h2 className="max-w-3xl font-[family-name:var(--font-heading)] text-5xl leading-[1.05] text-[#F8F5EF] sm:text-6xl lg:text-7xl">
              More than learning.
              <br />
              <span className="text-[#D9C6A5]">
                A way of connecting.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="max-w-lg pb-1 text-base leading-8 text-[#D8CEC2] lg:ml-auto"
          >
            At The Language Landscapes, we see language as more than a
            subject to study. It is a way to understand ourselves, appreciate
            others and find our place in a connected world.
          </motion.p>
        </div>

        {/* Main philosophy panel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-8 overflow-hidden rounded-[2rem] bg-[#781E24] p-8 sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <span className="mb-6 block text-xs uppercase tracking-[0.2em] text-[#D9C6A5]">
                Our teaching philosophy
              </span>

              <h3 className="max-w-xl font-[family-name:var(--font-heading)] text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Every learner has a voice.
                <span className="text-[#D9C6A5]">
                  {" "}Every voice matters.
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-8 text-[#F0E4DD]/85 sm:text-base">
                We believe that learning should create opportunities to
                understand, communicate and participate. Our philosophy
                places the learner at the heart of the experience and
                celebrates the many ways people engage with language.
              </p>
            </div>

            <div className="space-y-0">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="flex items-center gap-5 py-6 first:pt-0 last:pb-0"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-[#D9C6A5]">
                      <Icon size={23} stroke={1.4} />
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-heading)] text-2xl text-[#F8F5EF]">
                        {value.title}
                      </h4>
                      <p className="mt-1 text-sm text-[#F0E4DD]/65">
                        {value.description}
                      </p>
                    </div>
                    <span className="ml-auto text-xs text-[#D9C6A5]">
                      0{index + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Differentiators */}
        <div className="mb-10 mt-20">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[#D9A09A]">
            What makes the difference
          </span>

          <h3 className="max-w-2xl font-[family-name:var(--font-heading)] text-4xl leading-tight text-[#F8F5EF] sm:text-5xl">
            A thoughtful approach at every step.
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {differentiators.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-300 hover:border-[#D9C6A5]/40 hover:bg-white/[0.07] sm:p-9"
              >
                <div className="mb-9 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#781E24] text-[#D9C6A5] transition-colors group-hover:bg-[#B32526]">
                    <Icon size={23} stroke={1.5} />
                  </div>

                  <span className="font-[family-name:var(--font-heading)] text-2xl text-[#A58B64]">
                    {item.number}
                  </span>
                </div>

                <h4 className="mb-4 font-[family-name:var(--font-heading)] text-3xl text-[#F8F5EF] sm:text-4xl">
                  {item.title}
                </h4>

                <p className="max-w-lg text-sm leading-8 text-[#C2B7AC]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-20 pt-10">
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-[#D9A09A]">
                The TLL promise
              </span>

              <p className="max-w-3xl font-[family-name:var(--font-heading)] text-3xl leading-snug text-[#F8F5EF] sm:text-4xl">
                Step in curious.
                <span className="text-[#D9C6A5]">
                  {" "}Step out multilingual.
                </span>
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#F8F5EF] px-6 py-3.5 text-sm font-semibold text-[#781E24] transition-colors hover:bg-[#D9C6A5]"
            >
              Begin your journey
              <IconArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "motion/react";
import {
  IconDeviceLaptop,
  IconMessages,
  IconBook2,
  IconUsers,
  IconArrowUpRight,
  IconWorld,
  IconMicrophone2,
} from "@tabler/icons-react";

const experiences = [
  {
    number: "01",
    icon: IconDeviceLaptop,
    title: "Learn from anywhere",
    description:
      "Explore language learning through an online environment that lets you learn from the comfort of your own space.",
  },
  {
    number: "02",
    icon: IconMessages,
    title: "Learn through interaction",
    description:
      "Engage with language through conversations, questions and opportunities to express your thoughts.",
  },
  {
    number: "03",
    icon: IconBook2,
    title: "Build understanding",
    description:
      "Develop your language skills through a learning journey that brings together comprehension and expression.",
  },
  {
    number: "04",
    icon: IconUsers,
    title: "Grow with guidance",
    description:
      "Move forward with guidance and a learning approach that recognises your individual journey.",
  },
];

const words = ["Listen", "Understand", "Speak", "Connect"];

export default function LearningExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#EFE9DF] px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#B32526]">
              <span className="h-px w-8 bg-[#B32526]" />
              07 — Inside the experience
            </span>

            <h2 className="max-w-3xl font-[family-name:var(--font-heading)] text-5xl leading-[1.08] text-[#292624] sm:text-6xl lg:text-7xl">
              A classroom without
              <span className="text-[#B32526]"> boundaries.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="max-w-lg pb-1 text-base leading-8 text-[#514A45] lg:ml-auto"
          >
            Learning a language is more than attending a lesson. It is about
            discovering new ways to think, communicate and connect — wherever
            you are.
          </motion.p>
        </div>

        {/* Main experience panel */}
        <div className="grid overflow-hidden rounded-[2rem] bg-[#292624] lg:grid-cols-[1.05fr_0.95fr]">
          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex min-h-[420px] flex-col justify-between overflow-hidden p-8 sm:p-12 lg:min-h-[540px]"
          >
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[#F8F5EF]/10" />
            <div className="absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#F8F5EF]/10" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D9C6A5]">
                The world is your classroom
              </span>
              <IconWorld size={24} stroke={1.3} className="text-[#D9C6A5]" />
            </div>

            <div className="relative z-10 py-12">
              <p className="mb-5 font-[family-name:var(--font-heading)] text-2xl italic text-[#D9C6A5]">
                Every lesson is a new beginning.
              </p>

              <div className="space-y-2">
                {words.map((word, index) => (
                  <motion.div
                    key={word}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12, duration: 0.45 }}
                    className="flex items-center gap-4"
                  >
                    <span className="font-[family-name:var(--font-body)] text-xs text-[#A58B64]">
                      0{index + 1}
                    </span>
                    <span
                      className={`font-[family-name:var(--font-heading)] text-5xl sm:text-6xl ${
                        index === 2
                          ? "text-[#D9A09A] italic"
                          : "text-[#F8F5EF]"
                      }`}
                    >
                      {word}.
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-3 border-t border-[#F8F5EF]/15 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B32526] text-[#F8F5EF]">
                <IconMicrophone2 size={19} stroke={1.5} />
              </div>
              <p className="text-sm leading-6 text-[#D8CEC2]">
                Learn to express. Find your voice.
              </p>
            </div>
          </motion.div>

          {/* Experience points */}
          <div className="bg-[#F8F5EF] p-8 sm:p-12 lg:p-14">
            <span className="mb-8 block text-xs font-semibold uppercase tracking-[0.2em] text-[#B32526]">
              What your journey feels like
            </span>

            <div className="space-y-0">
              {experiences.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="group grid grid-cols-[44px_1fr] gap-4 border-b border-[#292624]/10 py-6 first:pt-0 last:border-0 last:pb-0"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFE9DF] text-[#B32526] transition-colors duration-300 group-hover:bg-[#B32526] group-hover:text-white">
                      <Icon size={20} stroke={1.5} />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-[10px] tracking-widest text-[#A58B64]">
                          {item.number}
                        </span>
                        <h3 className="font-[family-name:var(--font-heading)] text-2xl text-[#292624]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="max-w-md text-sm leading-7 text-[#81766C]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-center lg:mt-20"
        >
          <p className="max-w-2xl font-[family-name:var(--font-heading)] text-3xl leading-snug text-[#292624] sm:text-4xl">
            The goal is not simply to learn a language.
            <span className="text-[#B32526]"> It is to live it.</span>
          </p>

          <a
            href="#programs"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#B32526] pb-2 text-sm font-semibold text-[#B32526] transition-all hover:gap-5"
          >
            Explore our programs
            <IconArrowUpRight
              size={18}
              stroke={1.7}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconBook2,
  IconMessages,
  IconWorld,
  IconQuote,
  IconLanguage,
  IconMicrophone2,
} from "@tabler/icons-react";

const topics = [
  {
    number: "01",
    icon: IconLanguage,
    title: "Linguistic awareness",
    description:
      "Discover how languages work, evolve and shape the way we communicate with one another.",
    tag: "The science of language",
  },
  {
    number: "02",
    icon: IconWorld,
    title: "Cultural diversity",
    description:
      "Explore the traditions, perspectives and expressions that make every culture unique.",
    tag: "Beyond borders",
  },
  {
    number: "03",
    icon: IconBook2,
    title: "Language & identity",
    description:
      "Reflect on the relationship between language, heritage, identity and human connection.",
    tag: "Stories we carry",
  },
];

export default function TeteATeteSection() {
  return (
    <section
      id="tete-a-tete"
      className="overflow-hidden bg-[#F8F5EF] px-5 py-24 sm:px-8 lg:px-16 lg:py-32"
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
            <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#B32526]">
              <span className="h-px w-8 bg-[#B32526]" />
              08 — Conversations that connect
            </div>

            <h2 className="font-[family-name:var(--font-heading)] text-6xl leading-[0.98] text-[#292624] sm:text-7xl lg:text-8xl">
              Tête-à-
              <span className="text-[#B32526] italic">tête.</span>
            </h2>

            <p className="mt-6 font-[family-name:var(--font-heading)] text-2xl italic text-[#81766C]">
              A conversation between languages, cultures and minds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="max-w-lg lg:ml-auto"
          >
            <p className="text-base leading-8 text-[#514A45]">
              Some of the most meaningful learning happens beyond a
              classroom. Tête-à-tête brings people closer to the fascinating
              world of language through conversations about linguistic
              awareness, language science and cultural diversity.
            </p>
          </motion.div>
        </div>

        {/* Featured conversation panel */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-[#781E24] p-8 text-[#F8F5EF] sm:p-12 lg:p-16"
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-24 -top-32 h-[440px] w-[440px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-8 -top-16 h-[300px] w-[300px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute bottom-[-150px] left-[35%] h-[300px] w-[300px] rounded-full bg-[#B32526]/40 blur-3xl" />

          <div className="relative z-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#E9D9C8]">
                <IconMessages size={15} />
                The art of conversation
              </span>

              <h3 className="max-w-2xl font-[family-name:var(--font-heading)] text-4xl leading-[1.12] sm:text-5xl lg:text-6xl">
                More than words.
                <br />
                <span className="italic text-[#D9C6A5]">
                  A world of perspectives.
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-8 text-[#F0E4DD]/80 sm:text-base">
                Tête-à-tête creates space to look at language from different
                angles, question what we know and appreciate the richness
                of the ways people express themselves.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25">
                  <IconMicrophone2 size={20} stroke={1.4} />
                </div>
                <p className="text-sm leading-6 text-[#E9D9C8]">
                  Listen with curiosity.
                  <br />
                  Speak with understanding.
                </p>
              </div>
            </div>

            {/* Conversation graphic */}
            <div className="relative mx-auto w-full max-w-md py-5">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative z-10 ml-1 max-w-[85%] rounded-2xl rounded-bl-sm bg-[#F8F5EF] p-6 text-[#292624] shadow-xl"
              >
                <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B32526]">
                  A question
                </span>
                <p className="font-[family-name:var(--font-heading)] text-2xl italic leading-snug sm:text-3xl">
                  Can a language change the way we see the world?
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative z-10 ml-auto mt-5 max-w-[85%] rounded-2xl rounded-br-sm border border-white/20 bg-[#A58B64] p-6 text-[#292624]"
              >
                <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#781E24]">
                  A thought
                </span>
                <p className="font-[family-name:var(--font-heading)] text-2xl italic leading-snug sm:text-3xl">
                  Perhaps every new word opens a new perspective.
                </p>
              </motion.div>

              <div className="relative z-10 mt-7 flex justify-center">
                <span className="rounded-full border border-white/20 px-5 py-2 text-xs tracking-widest text-[#E9D9C8]">
                  ET SI ON EN PARLAIT ?
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Discussion themes */}
        <div className="mb-10 mt-24 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[#B32526]">
              Ideas worth exploring
            </span>
            <h3 className="font-[family-name:var(--font-heading)] text-4xl text-[#292624] sm:text-5xl">
              Conversations that go beyond words.
            </h3>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#81766C]">
            Every discussion is an opportunity to discover something new
            about language and the people who speak it.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {topics.map((topic, index) => {
            const Icon = topic.icon;

            return (
              <motion.article
                key={topic.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.55 }}
                className="group flex min-h-[300px] flex-col rounded-2xl border border-[#292624]/10 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B32526]/30 hover:bg-white sm:p-9"
              >
                <div className="mb-9 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFE9DF] text-[#B32526] transition-colors group-hover:bg-[#B32526] group-hover:text-white">
                    <Icon size={23} stroke={1.4} />
                  </div>

                  <span className="font-[family-name:var(--font-heading)] text-2xl text-[#A58B64]">
                    {topic.number}
                  </span>
                </div>

                <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B32526]">
                  {topic.tag}
                </span>

                <h4 className="mb-4 font-[family-name:var(--font-heading)] text-3xl text-[#292624]">
                  {topic.title}
                </h4>

                <p className="text-sm leading-7 text-[#81766C]">
                  {topic.description}
                </p>

                <div className="mt-auto flex justify-end pt-7 text-[#B32526] transition-transform group-hover:translate-x-1 group-hover:translate-y-1">
                  <IconArrowDownRight size={22} stroke={1.5} />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-20 border-t border-[#292624]/15 pt-10">
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="flex gap-4">
              <IconQuote
                size={36}
                stroke={1.2}
                className="shrink-0 text-[#B32526]"
              />
              <p className="max-w-3xl font-[family-name:var(--font-heading)] text-3xl leading-snug text-[#292624] sm:text-4xl">
                Language connects us. Conversation helps us understand one
                another.
              </p>
            </div>

            <a
              href="#programs"
              className="group inline-flex w-fit items-center gap-3 border-b border-[#B32526] pb-2 text-sm font-semibold text-[#B32526]"
            >
              Discover TLL
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

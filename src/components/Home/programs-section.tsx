
"use client";

import { motion } from "framer-motion";
import {
  IconArrowUpRight,
  IconBook2,
  IconBriefcase2,
  IconCertificate,
  IconGlobe,
  IconSchool,
  IconUsers,
  IconLanguage,
} from "@tabler/icons-react";

const programs = [
  {
    number: "01",
    category: "Immigration & French proficiency",
    title: "TEF & TCF",
    description:
      "Prepare for French proficiency examinations designed for individuals pursuing immigration pathways and language certification.",
    detail: "French examination preparation",
    icon: IconCertificate,
    featured: true,
  },
  {
    number: "02",
    category: "French language studies",
    title: "DELF",
    description:
      "Build your French language proficiency and prepare for internationally recognised DELF examinations.",
    detail: "Diploma in French studies",
    icon: IconBook2,
  },
  {
    number: "03",
    category: "Young learners",
    title: "Kids Program",
    description:
      "Introduce children to the joy of languages through an engaging and age-conscious learning journey.",
    detail: "Discover languages early",
    icon: IconSchool,
  },
  {
    number: "04",
    category: "For organisations",
    title: "Corporate Training",
    description:
      "Language learning opportunities designed around communication needs in professional and workplace environments.",
    detail: "Language for the workplace",
    icon: IconBriefcase2,
  },
  {
    number: "05",
    category: "For educators",
    title: "Teachers Training",
    description:
      "Explore language teaching, strengthen instructional knowledge and develop as a language educator.",
    detail: "Learn to teach languages",
    icon: IconUsers,
  },
  {
    number: "06",
    category: "Explore beyond French",
    title: "More Languages",
    description:
      "Step beyond familiar words and discover opportunities to explore more languages and cultures with TLL.",
    detail: "A world of languages",
    icon: IconGlobe,
  },
];

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-[#EFE9DF] px-5 py-24 sm:px-8 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#B32526]">
              <span className="h-px w-8 bg-[#B32526]" />
              09 — Find your language journey
            </span>

            <h2 className="max-w-3xl font-[family-name:var(--font-heading)] text-5xl leading-[1.05] text-[#292624] sm:text-6xl lg:text-7xl">
              A program for every
              <span className="text-[#B32526] italic"> purpose.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-lg pb-1 text-base leading-8 text-[#514A45] lg:ml-auto"
          >
            Whether you are preparing for an examination, introducing a child
            to a new language or developing professional communication skills,
            discover a learning path that aligns with your aspirations.
          </motion.p>
        </div>

        {/* Featured program */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative mb-7 overflow-hidden rounded-[2rem] bg-[#781E24] p-8 text-[#F8F5EF] sm:p-12 lg:p-14"
        >
          <div className="pointer-events-none absolute -right-24 -top-36 h-[460px] w-[460px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-8 -top-20 h-[330px] w-[330px] rounded-full border border-white/10" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#E9D9C8]">
                <IconCertificate size={15} />
                Immigration-based examinations
              </span>

              <h3 className="font-[family-name:var(--font-heading)] text-5xl leading-tight sm:text-6xl lg:text-7xl">
                Your French.
                <br />
                <span className="italic text-[#D9C6A5]">
                  Your next chapter.
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-8 text-[#F0E4DD]/80 sm:text-base">
                Work towards your French proficiency goals with preparation
                for TEF and TCF examinations. Take the next step in your
                language journey with purpose.
              </p>

              <a
                href="#contact"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#F8F5EF] px-6 py-3.5 text-sm font-semibold text-[#781E24] transition-all hover:bg-[#D9C6A5]"
              >
                Enquire about TEF & TCF
                <IconArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="relative flex min-h-[230px] items-center justify-center lg:min-h-[300px]">
              <div className="absolute h-64 w-64 rounded-full border border-white/15 sm:h-72 sm:w-72" />
              <div className="absolute h-48 w-48 rounded-full border border-white/15 sm:h-56 sm:w-56" />

              <div className="relative z-10 text-center">
                <span className="block font-[family-name:var(--font-heading)] text-8xl italic text-[#D9C6A5] sm:text-9xl">
                  FR.
                </span>
                <span className="mt-2 block text-xs uppercase tracking-[0.3em] text-[#F0E4DD]/70">
                  French proficiency
                </span>
              </div>

              <span className="absolute left-0 top-8 font-[family-name:var(--font-heading)] text-2xl italic text-white/70">
                Bonjour
              </span>
              <span className="absolute bottom-8 right-0 font-[family-name:var(--font-heading)] text-2xl italic text-white/70">
                Bienvenue
              </span>
            </div>
          </div>
        </motion.div>

        {/* Program grid heading */}
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <h3 className="font-[family-name:var(--font-heading)] text-3xl text-[#292624] sm:text-4xl">
            Explore our programs
          </h3>
          <span className="text-xs uppercase tracking-[0.18em] text-[#81766C]">
            Six ways to begin
          </span>
        </div>

        {/* Program cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.slice(1).map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.article
                key={program.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                }}
                className="group flex min-h-[340px] flex-col rounded-2xl border border-[#292624]/10 bg-[#F8F5EF] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B32526]/30 hover:shadow-[0_18px_45px_rgba(41,38,36,0.07)] sm:p-9"
              >
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFE9DF] text-[#B32526] transition-colors duration-300 group-hover:bg-[#B32526] group-hover:text-white">
                    <Icon size={23} stroke={1.5} />
                  </div>

                  <span className="font-[family-name:var(--font-heading)] text-2xl text-[#A58B64]">
                    {program.number}
                  </span>
                </div>

                <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B32526]">
                  {program.category}
                </span>

                <h4 className="mb-4 font-[family-name:var(--font-heading)] text-3xl text-[#292624] sm:text-4xl">
                  {program.title}
                </h4>

                <p className="text-sm leading-7 text-[#81766C]">
                  {program.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#292624]/10 pt-6 mt-8">
                  <span className="text-xs text-[#81766C]">
                    {program.detail}
                  </span>
                  <a
                    href="#contact"
                    aria-label={`Enquire about ${program.title}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B32526]/30 text-[#B32526] transition-all group-hover:border-[#B32526] group-hover:bg-[#B32526] group-hover:text-white"
                  >
                    <IconArrowUpRight size={18} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col justify-between gap-6 rounded-2xl border border-[#292624]/10 bg-[#F8F5EF] p-8 sm:flex-row sm:items-center sm:p-10"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EFE9DF] text-[#B32526]">
              <IconLanguage size={24} stroke={1.5} />
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl text-[#292624] sm:text-3xl">
                Not sure where to begin?
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-7 text-[#81766C]">
                Tell us about your goals. We would be happy to help you
                explore a suitable language-learning path.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#B32526] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#781E24]"
          >
            Talk to TLL
            <IconArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

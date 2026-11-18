"use client";

import Link from "next/link";
import {
  motion,
  type Variants,
} from "framer-motion";
import {
  IconArrowUpRight,
  IconCheck,
  IconSparkles,
  IconTargetArrow,
  IconCompass,
} from "@tabler/icons-react";
import type { Program } from "@/data/programs";
import { ProgramTestimonials } from "./ProgramTestimonials";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

interface ProgramCardProps {
  program: Program;
  index: number;
}

export function ProgramCard({ program, index }: ProgramCardProps) {
  const isAlternate = index % 2 !== 0;

  // Split headline at the first period for burgundy emphasis
  const headlineParts = program.headline.split(".");
  const headlineFirst = headlineParts[0] ? `${headlineParts[0].trim()}.` : "";
  const headlineRest = headlineParts.slice(1).join(".").trim();

  return (
    <section
      id={program.id}
      className={`scroll-mt-24 overflow-hidden py-24 sm:py-32 ${
        isAlternate ? "bg-[#EFE9DF]" : "bg-[#F7F5EF]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section Label */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mb-14 sm:mb-16 flex items-center justify-between border-b border-[#D9CFC2] pb-6"
        >
          <div className="flex items-center gap-3">
            <motion.span
              variants={{
                hidden: { scaleX: 0 },
                show: { scaleX: 1, transition: { duration: 0.8, ease: EASE } },
              }}
              style={{ originX: 0 }}
              className="h-px w-10 bg-[#B32526]"
            />
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#81766C]"
            >
              Program {program.number} · {program.title}
            </motion.p>
          </div>

          <span className="font-[family-name:var(--font-heading)] text-2xl text-[#A58B64] sm:text-3xl">
            {program.number}
          </span>
        </motion.div>

        {/* Program Hero Header */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start lg:gap-20">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B32526]">
              {program.audience}
            </span>

            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-normal leading-[1.08] tracking-[-0.035em] text-[#292624] sm:text-5xl lg:text-6xl">
              {headlineFirst && (
                <span className="block overflow-hidden pb-1">
                  <motion.span
                    initial={{ y: "110%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, ease: EASE }}
                    className="block"
                  >
                    {headlineFirst}
                  </motion.span>
                </span>
              )}
              {headlineRest && (
                <span className="block overflow-hidden pb-2">
                  <motion.span
                    initial={{ y: "110%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
                    className="block text-[#B32526]"
                  >
                    {headlineRest}
                  </motion.span>
                </span>
              )}
            </h2>

            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-[#514A45] sm:text-base sm:leading-8">
              {program.description}
            </p>
          </div>

          {/* Quick CTA Box */}
          <div className="rounded-sm border border-[#D9CFC2] bg-[#F8F5EF] p-8 shadow-sm lg:mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#81766C]">
              Program Overview
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-heading)] text-2xl text-[#292624]">
              {program.title}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-[#514A45]">
              {program.cta}
            </p>
            <div className="mt-6 border-t border-[#D9CFC2] pt-6">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#B32526] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#781E24]"
              >
                <span>Enquire Now</span>
                <IconArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose & Course Offerings */}
        <div className="my-16 grid gap-12 border-y border-[#D9CFC2] py-16 lg:grid-cols-2 lg:gap-16">
          {/* Why choose this program */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B32526]/10 text-[#B32526]">
                <IconTargetArrow size={18} stroke={1.6} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-normal text-[#292624]">
                Why choose this program?
              </h3>
            </div>
            <p className="text-[15px] leading-8 text-[#514A45]">
              {program.description}
            </p>
          </div>

          {/* What this course offers */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B32526]/10 text-[#B32526]">
                <IconCompass size={18} stroke={1.6} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-normal text-[#292624]">
                What this course offers
              </h3>
            </div>
            <ul className="space-y-3.5">
              {program.offerings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-sm text-[#514A45]">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#B32526]/10 text-[#B32526]">
                    <IconCheck size={11} stroke={2.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Learning Journey (Numbered Steps) */}
        <div className="mb-16">
          <div className="mb-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B32526]">
              Structured Pathway
            </span>
            <h3 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-normal text-[#292624]">
              Your learning journey
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {program.journey.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-sm border border-[#D9CFC2] bg-[#F8F5EF] p-6 transition-all duration-300 hover:border-[#B32526]/40 hover:shadow-sm"
              >
                <div>
                  <span className="font-[family-name:var(--font-heading)] text-2xl text-[#A58B64]">
                    0{idx + 1}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-[#514A45]">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You'll Gain (Outcomes) */}
        <div className="rounded-sm border border-[#D9CFC2] bg-[#F8F5EF] p-8 sm:p-10">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B32526]/10 text-[#B32526]">
              <IconSparkles size={18} stroke={1.6} />
            </div>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#81766C]">
                Key Outcomes
              </span>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-normal text-[#292624]">
                What you&rsquo;ll gain
              </h3>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {program.outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-[#514A45]">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B32526]" />
                <span className="leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Student/Alumni Experiences */}
        <ProgramTestimonials testimonials={program.testimonials} />

        {/* Program Closing CTA */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-[#D9CFC2] pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm text-[#81766C]">
            {program.cta}
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#B32526]"
          >
            <span className="relative">
              Book a Consultation
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#B32526] transition-transform duration-500 group-hover:scale-x-100" />
            </span>
            <IconArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

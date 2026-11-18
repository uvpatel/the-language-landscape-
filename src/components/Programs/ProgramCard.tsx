
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconCheck,
  IconChevronDown,
} from "@tabler/icons-react";
import type { Program } from "@/data/programs";

interface ProgramCardProps {
  program: Program;
  index: number;
}

export default function ProgramCard({
  program,
  index,
}: ProgramCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : 0.08,
        ease: "easeOut",
      }}
      className="overflow-hidden border border-[#E6E0D5] bg-[#FBFAF6]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr]">
        {/* Program Information */}
        <div className="flex flex-col justify-between border-b border-[#E6E0D5] p-7 md:border-b-0 md:border-r md:p-10 lg:p-12">
          <div>
            <div className="mb-12 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#B52A27]">
                Program {program.number}
              </span>

              <span className="text-sm text-[#A39B8E]">
                0{index + 1} / 06
              </span>
            </div>

            <h3 className="max-w-md font-[var(--font-satoshi)] text-3xl leading-[1.15] tracking-[-0.035em] text-[#292620] md:text-4xl lg:text-5xl">
              {program.title}
            </h3>

            <p className="mt-5 max-w-md font-[var(--font-satoshi)] text-lg leading-relaxed text-[#B52A27] md:text-xl">
              {program.headline}
            </p>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#77736C]">
              {program.description}
            </p>
          </div>

          <Link
            href="/contact"
            className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-[#B52A27]/40 pb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#B52A27] transition-colors hover:border-[#B52A27]"
          >
            Explore this program

            <IconArrowUpRight
              size={16}
              stroke={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* Program Details */}
        <div className="p-7 md:p-10 lg:p-12">
          <div>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#A39B8E]">
              What you will learn
            </span>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {program.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-start gap-3"
                >
                  <IconCheck
                    size={16}
                    stroke={1.5}
                    className="mt-0.5 shrink-0 text-[#B52A27]"
                  />

                  <span className="text-sm leading-6 text-[#555149]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Expandable Details */}
          <div className="mt-10 border-t border-[#E6E0D5] pt-5">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#292620]">
                {isExpanded ? "Show less" : "Discover the learning journey"}
              </span>

              <IconChevronDown
                size={18}
                stroke={1.5}
                className={`shrink-0 text-[#B52A27] transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {isExpanded && (
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-9 pt-8"
              >
                {/* Learning Journey */}
                <div>
                  <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A39B8E]">
                    Your learning journey
                  </h4>

                  <div className="space-y-4">
                    {program.journey.map((step, stepIndex) => (
                      <div
                        key={stepIndex}
                        className="flex items-start gap-4"
                      >
                        <span className="text-xs text-[#B52A27]">
                          {String(stepIndex + 1).padStart(2, "0")}
                        </span>

                        <p className="text-sm leading-6 text-[#77736C]">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A39B8E]">
                    What you will gain
                  </h4>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {program.outcomes.map((outcome, outcomeIndex) => (
                      <div
                        key={outcomeIndex}
                        className="flex items-start gap-3"
                      >
                        <IconCheck
                          size={15}
                          stroke={1.5}
                          className="mt-1 shrink-0 text-[#B52A27]"
                        />

                        <p className="text-sm leading-6 text-[#77736C]">
                          {outcome}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonials */}
                {program.testimonials.length > 0 && (
                  <div>
                    <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A39B8E]">
                      Student experiences
                    </h4>

                    <div className="space-y-5">
                      {program.testimonials.map((testimonial, testimonialIndex) => (
                        <blockquote
                          key={testimonialIndex}
                          className="border-l border-[#B52A27]/40 pl-5"
                        >
                          <p className="text-sm leading-7 text-[#77736C]">
                            "{testimonial.quote}"
                          </p>

                          <cite className="mt-3 block text-xs not-italic text-[#292620]">
                            — {testimonial.name}
                          </cite>
                        </blockquote>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-[#B52A27] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#92211F]"
                >
                  {program.cta}

                  <IconArrowDownRight
                    size={16}
                    stroke={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

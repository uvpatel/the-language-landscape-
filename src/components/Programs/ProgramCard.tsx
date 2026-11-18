
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
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


const programImages = [
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85",
];

export default function ProgramCard({
  program,
  index,
}: ProgramCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const isReversed = index % 2 !== 0;
  const image = programImages[index % programImages.length];
  const detailsId = `program-details-${program.id}`;

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 50,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: "easeOut",
      }}
      className="group relative"
    >
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
        {/* Program Image */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  x: isReversed ? 40 : -40,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            ease: "easeOut",
          }}
          className={`relative min-h-[420px] overflow-hidden bg-cover bg-center md:min-h-[500px] lg:min-h-[580px] ${
            isReversed ? "lg:order-2" : "lg:order-1"
          }`}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(25, 22, 19, 0.12) 0%, rgba(25, 22, 19, 0.2) 40%, rgba(25, 22, 19, 0.8) 100%), url("${image}")`,
          }}
        >
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/5 transition-colors duration-700 group-hover:bg-black/0" />

          {/* Program Number */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-7 md:p-10">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">
              The Language Landscapes
            </span>

            <span className="text-xs text-white/80">
              {program.number} / 06
            </span>
          </div>

          {/* Oversized Background Number */}
          <span
            className={`pointer-events-none absolute -bottom-12 z-0 select-none font-[var(--font-satoshi)] text-[180px] leading-none font-medium text-white/[0.09] md:text-[240px] ${
              isReversed ? "left-5" : "right-5"
            }`}
          >
            0{index + 1}
          </span>

          {/* Image Content */}
          <div
            className={`absolute inset-x-0 bottom-0 z-10 p-7 md:p-10 lg:p-12 ${
              isReversed ? "lg:text-right" : ""
            }`}
          >
            <span className="mb-5 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
              Discover your potential
            </span>

            <h3 className="max-w-lg font-[var(--font-satoshi)] text-4xl leading-[1.08] font-medium tracking-[-0.035em] text-white md:text-5xl lg:text-6xl">
              {program.title}
            </h3>

            <p
              className={`mt-5 max-w-md text-sm leading-7 text-white/80 ${
                isReversed ? "lg:ml-auto" : ""
              }`}
            >
              {program.description}
            </p>

            <Link
              href="/contact"
              className={`group/link mt-8 inline-flex items-center gap-3 border-b border-white/50 pb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:border-white ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              Explore this program

              <IconArrowUpRight
                size={16}
                stroke={1.5}
                className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
              />
            </Link>
          </div>
        </motion.div>

        {/* Program Details */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  x: isReversed ? -40 : 40,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease: "easeOut",
          }}
          className={`flex flex-col justify-between border-b border-[#E6E0D5] bg-[#FBFAF6] p-7 md:p-10 lg:min-h-[580px] lg:p-12 ${
            isReversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#A39B8E]">
                The learning experience
              </span>

              <span className="h-2 w-2 rounded-full bg-[#B52A27]" />
            </div>

            <h4 className="mt-10 font-[var(--font-satoshi)] text-2xl leading-tight tracking-tight text-[#292620] md:text-3xl">
              What you will learn
            </h4>

            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
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
          <div className="mt-12 border-t border-[#E6E0D5] pt-6">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-controls={detailsId}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#292620] transition-colors hover:text-[#B52A27]">
                {isExpanded
                  ? "Close program details"
                  : "Discover the learning journey"}
              </span>

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E6E0D5] transition-colors duration-300 hover:border-[#B52A27]">
                <IconChevronDown
                  size={17}
                  stroke={1.5}
                  className={`text-[#B52A27] transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  id={detailsId}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          height: 0,
                        }
                  }
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.35,
                  }}
                  className="overflow-hidden"
                >
                  <div className="space-y-9 pt-9">
                    {/* Learning Journey */}
                    <div>
                      <h5 className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A39B8E]">
                        Your learning journey
                      </h5>

                      <div className="space-y-4">
                        {program.journey.map((step, stepIndex) => (
                          <div
                            key={stepIndex}
                            className="flex items-start gap-4"
                          >
                            <span className="text-xs tabular-nums text-[#B52A27]">
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
                      <h5 className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A39B8E]">
                        What you will gain
                      </h5>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                        <h5 className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A39B8E]">
                          Student experiences
                        </h5>

                        <div className="space-y-5">
                          {program.testimonials.map(
                            (testimonial, testimonialIndex) => (
                              <blockquote
                                key={testimonialIndex}
                                className="border-l border-[#B52A27]/40 pl-5"
                              >
                                <p className="text-sm leading-7 text-[#77736C]">
                                  "{testimonial.quote}"
                                </p>

                                <cite className="mt-3 block text-xs not-italic text-[#292620]">
                                  — {testimonial.name || testimonial.author}
                                </cite>
                              </blockquote>
                            ),
                          )}
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="group/cta inline-flex items-center gap-3 bg-[#B52A27] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#92211F]"
                    >
                      {program.cta}

                      <IconArrowDownRight
                        size={16}
                        stroke={1.5}
                        className="transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:translate-y-1"
                      />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

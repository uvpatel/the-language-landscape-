
"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
} from "motion/react";
import {
  IconArrowDown,
  IconArrowUpRight,
  IconGlobe,
} from "@tabler/icons-react";

const languages = ["French", "English", "German", "More"];

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease,
    },
  },
};

const languageVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease,
    },
  },
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF]">
      {/* Subtle background decoration */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease }}
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full border border-[#B32526]/[0.06]"
      />

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 sm:px-10 sm:pt-28 lg:px-12 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* Left: Editorial copy */}
          <motion.div
            variants={containerVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
            className="relative z-10"
          >
            {/* Eyebrow */}
            <motion.div
              variants={revealVariants}
              className="mb-8 flex items-center gap-3"
            >
              <motion.span
                initial={shouldReduceMotion ? false : { scaleX: 0 }}
                animate={shouldReduceMotion ? undefined : { scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease }}
                className="h-px w-9 origin-left bg-[#B32526]"
              />

              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
                A world beyond words
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={revealVariants}
              className="max-w-3xl font-[family-name:var(--font-heading)] text-5xl font-normal leading-[1.08] tracking-[-0.035em] text-[#292624] sm:text-6xl lg:text-[76px]"
            >
              Language begins as sound,
              <motion.span
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 24 }
                }
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 1, y: 0 }
                }
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease,
                }}
                className="mt-1 block italic text-[#B32526]"
              >
                and slowly becomes meaning.
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={revealVariants}
              className="mt-8 max-w-xl text-base leading-8 text-[#514A45] sm:text-lg"
            >
              Discover languages, embrace cultures, and find new ways to
              connect with the world. Your journey towards meaningful
              communication starts here.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={revealVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <motion.div
                whileHover={
                  shouldReduceMotion ? undefined : { y: -4 }
                }
                whileTap={
                  shouldReduceMotion ? undefined : { scale: 0.97 }
                }
                transition={{ duration: 0.3, ease }}
              >
                <Link
                  href="#programs"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#B32526] px-7 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#781E24]"
                >
                  Explore our programs
                  <IconArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={
                  shouldReduceMotion ? undefined : { y: -4 }
                }
                whileTap={
                  shouldReduceMotion ? undefined : { scale: 0.97 }
                }
                transition={{ duration: 0.3, ease }}
              >
                <Link
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D9CFC2] px-7 py-4 text-sm font-medium text-[#292624] transition-colors duration-300 hover:border-[#B32526] hover:text-[#B32526]"
                >
                  Discover our story
                </Link>
              </motion.div>
            </motion.div>

            {/* Language list */}
            <motion.div
              variants={revealVariants}
              className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#E4DDD3] pt-6"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#81766C]">
                Explore
              </span>

              {languages.map((language, index) => (
                <motion.span
                  key={language}
                  variants={languageVariants}
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -3, color: "#B32526" }
                  }
                  className="cursor-default text-sm text-[#514A45]"
                >
                  {language}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Editorial visual */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 45, scale: 0.96 }
            }
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{
              duration: 1.15,
              delay: 0.2,
              ease,
            }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            {/* Decorative rings */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
              animate={
                shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 1.2, delay: 0.5, ease }}
              className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#B32526]/20"
            />

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
              animate={
                shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 1.2, delay: 0.7, ease }}
              className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full border border-[#A58B64]/40"
            />

            {/* Main composition */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { clipPath: "inset(12% 0 12% 0)", opacity: 0 }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : { clipPath: "inset(0% 0 0% 0)", opacity: 1 }
              }
              transition={{
                duration: 1.3,
                delay: 0.3,
                ease,
              }}
              className="relative overflow-hidden rounded-t-[48%] rounded-b-2xl bg-[#EFE9DF] px-8 pb-9 pt-14 sm:px-12 sm:pt-16"
            >
              {/* Globe decoration */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { rotate: 360 }
                }
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute right-8 top-8 text-[#B32526]/20"
              >
                <IconGlobe size={54} stroke={1} />
              </motion.div>

              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease }}
                className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-[#81766C]"
              >
                The art of expression
              </motion.p>

              {/* Multilingual typography */}
              <div className="my-12 space-y-1 text-center">
                {[
                  { word: "Bonjour.", className: "text-6xl italic text-[#B32526] sm:text-7xl" },
                  { word: "Hello.", className: "text-5xl text-[#292624] sm:text-6xl" },
                  { word: "Hallo.", className: "text-5xl italic text-[#81766C] sm:text-6xl" },
                  { word: "Hola.", className: "text-5xl text-[#A58B64] sm:text-6xl" },
                ].map((item, index) => (
                  <motion.p
                    key={item.word}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, x: index % 2 === 0 ? -25 : 25 }
                    }
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 1, x: 0 }
                    }
                    transition={{
                      duration: 0.85,
                      delay: 0.65 + index * 0.15,
                      ease,
                    }}
                    className={`font-[family-name:var(--font-heading)] ${item.className}`}
                  >
                    {item.word}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={shouldReduceMotion ? false : { scaleX: 0 }}
                animate={shouldReduceMotion ? undefined : { scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.3, ease }}
                className="mx-auto h-px w-16 origin-center bg-[#B32526]/50"
              />

              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.35, ease }}
                className="mt-6 text-center font-[family-name:var(--font-heading)] text-2xl italic text-[#514A45]"
              >
                One message. Many expressions.
              </motion.p>
            </motion.div>

            {/* Floating philosophy card */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 20, x: 10 }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0, x: 0 }
              }
              transition={{ duration: 0.85, delay: 1, ease }}
              whileHover={
                shouldReduceMotion ? undefined : { y: -5 }
              }
              className="absolute -bottom-5 right-5 rounded-xl border border-[#E4DDD3] bg-[#F8F5EF] px-5 py-4 shadow-lg shadow-[#292624]/5 sm:-right-5"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#81766C]">
                Our philosophy
              </p>
              <p className="mt-1 font-[family-name:var(--font-heading)] text-xl italic text-[#B32526]">
                Unity through language.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom navigation */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          className="mt-24 flex items-center justify-between border-t border-[#E4DDD3] pt-5"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#81766C]">
            Step in curious. Step out multilingual.
          </p>

          <motion.a
            href="#about"
            aria-label="Scroll to about section"
            whileHover={
              shouldReduceMotion ? undefined : { y: 4, backgroundColor: "#B32526", color: "#FFFFFF" }
            }
            whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
            transition={{ duration: 0.3, ease }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9CFC2] text-[#B32526] transition-colors hover:bg-[#B32526] hover:text-white"
          >
            <IconArrowDown size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

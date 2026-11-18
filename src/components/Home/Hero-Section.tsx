
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  IconArrowDown,
  IconArrowUpRight,
} from "@tabler/icons-react";

const expressions = [
  {
    word: "Bonjour",
    language: "French",
    position: "top-[12%] left-[4%]",
    rotate: "-rotate-6",
  },
  {
    word: "नमस्ते",
    language: "Hindi",
    position: "top-[30%] right-[0%]",
    rotate: "rotate-6",
  },
  {
    word: "Hello",
    language: "English",
    position: "bottom-[28%] left-[0%]",
    rotate: "rotate-3",
  },
  {
    word: "Hola",
    language: "Spanish",
    position: "bottom-[12%] right-[7%]",
    rotate: "-rotate-6",
  },
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#F8F5EF]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#B32526]/[0.025] blur-3xl" />

      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-20 sm:px-10 sm:pb-20 sm:pt-24 lg:px-16 lg:pb-24 lg:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Hero content */}
          <div className="relative z-10">
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#B32526]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
                Language · Culture · Connection
              </span>
            </motion.div>

            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.85,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="max-w-[800px] font-[family-name:var(--font-heading)] text-[clamp(3.3rem,6.3vw,6.6rem)] leading-[0.98] tracking-[-0.045em] text-[#292624]"
            >
              We speak in many expressions,
              <span className="mt-2 block text-[#B32526]">
                but our message is one.
              </span>
            </motion.h1>

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.75,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="mt-7 flex items-center gap-4"
            >
              <span className="h-px w-8 bg-[#A58B64]" />
              <p className="font-[family-name:var(--font-heading)] text-2xl text-[#B32526] sm:text-3xl">
                Unity through language.
              </p>
            </motion.div>

            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.75,
                delay: 0.35,
                ease: "easeOut",
              }}
              className="mt-7 max-w-[540px] text-base leading-8 text-[#514A45] sm:text-lg sm:leading-9"
            >
              Discover the world through languages, cultures and human
              expression. Begin your journey with The Language Landscapes,
              where every language opens a new way of seeing, thinking and
              connecting.
            </motion.p>

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.75,
                delay: 0.45,
                ease: "easeOut",
              }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="#programs"
                className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#B32526] px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#781E24]"
              >
                Explore Our Programs
                <IconArrowUpRight
                  size={18}
                  stroke={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="#about"
                className="group inline-flex min-h-14 items-center justify-center gap-3 px-7 py-4 text-sm font-semibold text-[#292624] transition-colors duration-300 hover:text-[#B32526]"
              >
                Discover Our Story
                <IconArrowUpRight
                  size={18}
                  stroke={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>

          {/* Editorial visual */}
          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.96,
              y: shouldReduceMotion ? 0 : 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[600px]"
          >
            <div className="relative aspect-[0.95] w-full">
              {/* Soft background glow */}
              <div className="absolute inset-[8%] rounded-full bg-[#D9C6A5]/25 blur-[70px]" />

              {/* Main photograph */}
              <div className="absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_68%_72%_at_50%_50%,black_48%,transparent_100%)]">
                <Image
                  src="/french-learning.png"
                  alt="French language textbooks, vocabulary notes and learning materials"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />

                {/* Warm color blending */}
                <div className="absolute inset-0 bg-[#EFE9DF]/15 mix-blend-soft-light" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8F5EF]/40 via-transparent to-[#F8F5EF]/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5EF]/30 via-transparent to-[#F8F5EF]/25" />
              </div>

              {/* Floating language expressions */}
              {expressions.map((item, index) => (
                <motion.div
                  key={item.word}
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: shouldReduceMotion ? 0 : 0.5 + index * 0.12,
                  }}
                  className={`absolute ${item.position} ${item.rotate} z-10`}
                >
                  <div className="px-3 py-2 sm:px-5 sm:py-3">
                    <p className="font-[family-name:var(--font-heading)] text-2xl text-[#B32526] sm:text-3xl">
                      {item.word}
                    </p>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#81766C]">
                      {item.language}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Subtle decorative accent */}
              <div className="absolute right-[17%] top-[15%] h-2 w-2 rounded-full bg-[#B32526]/70" />
              <div className="absolute bottom-[18%] left-[18%] h-1.5 w-1.5 rounded-full bg-[#A58B64]" />
            </div>

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-2 flex items-center justify-center"
            >
              <p className="font-[family-name:var(--font-heading)] text-lg text-[#81766C]">
                Every expression carries meaning.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="mt-20 flex items-center justify-center gap-3 pt-6 sm:mt-24">
          <IconArrowDown
            size={15}
            stroke={1.5}
            className="text-[#B32526]"
          />
          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
            Explore the language landscape
          </span>
        </div>
      </div>
    </section>
  );
}

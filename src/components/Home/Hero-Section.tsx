"use client";

import { useEffect, useState } from "react";
import type { PointerEvent } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { IconArrowDown, IconArrowUpRight } from "@tabler/icons-react";

const ease = [0.22, 1, 0.36, 1] as const;

const greetings = [
  { word: "Bonjour.", lang: "French" },
  { word: "Hello.", lang: "English" },
  { word: "नमस्ते", lang: "Hindi" },
  { word: "Hola.", lang: "Spanish" },
  { word: "Hallo.", lang: "German" },
  { word: "Ciao.", lang: "Italian" },
];

const centerColors = ["#B32526", "#781E24", "#A58B64"];

const languageChip =
  "whitespace-nowrap rounded-full bg-[#F8F5EF] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#292624] shadow-[0_10px_28px_rgba(41,38,36,0.09)] sm:text-xs";

const pillarChip =
  "whitespace-nowrap rounded-full bg-[#B32526]/10 px-3 py-1.5 font-[family-name:var(--font-heading)] text-sm italic text-[#781E24] sm:text-base";

const outerItems = [
  { label: "French", className: languageChip },
  { label: "English", className: languageChip },
  { label: "German", className: languageChip },
  { label: "Hindi", className: languageChip },
  { label: "Spanish", className: languageChip },
  {
    label: "More",
    className:
      "whitespace-nowrap rounded-full bg-[#D9C6A5] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#781E24] shadow-[0_10px_28px_rgba(165,139,100,0.3)] sm:text-xs",
  },
];

const innerItems = [
  { label: "Listening", className: pillarChip },
  { label: "Speaking", className: pillarChip },
  { label: "Reading", className: pillarChip },
  { label: "Writing", className: pillarChip },
  { label: "Grammar", className: pillarChip },
];

/**
 * A ring of labels that rotates around the centre.
 * Each label counter-rotates so the text always stays upright.
 */
function Orbit({
  items,
  inset,
  duration,
  reverse = false,
  reduce,
}: {
  items: { label: string; className: string }[];
  inset: string;
  duration: number;
  reverse?: boolean;
  reduce: boolean | null;
}) {
  const dir = reverse ? -1 : 1;

  return (
    <motion.div
      aria-hidden
      className="absolute"
      style={{ inset }}
      animate={reduce ? undefined : { rotate: 360 * dir }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map((item, i) => {
        const angle = (360 / items.length) * i;

        return (
          <div
            key={item.label}
            className="absolute inset-0"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ rotate: -angle }}
                animate={
                  reduce
                    ? { rotate: -angle }
                    : { rotate: [-angle, -angle - 360 * dir] }
                }
                transition={{ duration, repeat: Infinity, ease: "linear" }}
                className={item.className}
              >
                {item.label}
              </motion.div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  /* Cycle the greeting in the centre */
  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % greetings.length),
      2400
    );
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  /* Cursor parallax */
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);
  const pointerX = useSpring(rawX, { stiffness: 70, damping: 18 });
  const pointerY = useSpring(rawY, { stiffness: 70, damping: 18 });

  const wheelX = useTransform(pointerX, [0, 1], [-12, 12]);
  const wheelY = useTransform(pointerY, [0, 1], [-12, 12]);
  const dotAX = useTransform(pointerX, [0, 1], [-30, 30]);
  const dotAY = useTransform(pointerY, [0, 1], [-30, 30]);
  const dotBX = useTransform(pointerX, [0, 1], [40, -40]);
  const dotBY = useTransform(pointerY, [0, 1], [28, -28]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - rect.left) / rect.width);
    rawY.set((event.clientY - rect.top) / rect.height);
  };

  const handlePointerLeave = () => {
    rawX.set(0.5);
    rawY.set(0.5);
  };

  const current = greetings[index];
  const centerColor = centerColors[index % centerColors.length];

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative isolate overflow-hidden bg-[#F8F5EF]"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 pb-12 pt-20 sm:px-10 sm:pt-24 lg:px-16 lg:pb-16 lg:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Copy */}
          <div className="relative z-10">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#B32526]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
                The Language Landscapes
              </span>
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="font-[family-name:var(--font-heading)] text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.98] tracking-[-0.035em] text-[#292624]"
            >
              We speak in many expressions, but our message is one:
              <span className="mt-3 block text-[clamp(2.5rem,.5vw,5.5rem)] leading-[0.98] tracking-[-0.04em] text-[#B32526]">
                Unity through language.
              </span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="mt-8 max-w-[540px] text-base leading-8 text-[#514A45] sm:text-lg sm:leading-9"
            >
              Discover the world through languages, cultures and human
              expression. Begin your journey with The Language Landscapes,
              where every language opens a new way of seeing, thinking and
              connecting.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
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

          {/* Language wheel */}
          <motion.div
            aria-hidden
            initial={
              shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease }}
            className="relative mx-auto w-full max-w-[580px]"
          >
            <div className="relative aspect-square w-full">
              {/* Accent dots, drift with the cursor at different depths */}
              <motion.div
                style={shouldReduceMotion ? undefined : { x: dotAX, y: dotAY }}
                className="absolute right-[4%] top-[6%] z-20 h-6 w-6 rounded-full bg-[#A58B64]"
              />
              <motion.div
                style={shouldReduceMotion ? undefined : { x: dotBX, y: dotBY }}
                className="absolute bottom-[8%] left-[6%] z-20 h-3.5 w-3.5 rounded-full bg-[#B32526]"
              />
              <motion.div
                style={shouldReduceMotion ? undefined : { x: dotAX, y: dotBY }}
                className="absolute bottom-[4%] right-[12%] z-20 h-12 w-12 rounded-full bg-[#781E24]/90"
              />

              <motion.div
                style={
                  shouldReduceMotion ? undefined : { x: wheelX, y: wheelY }
                }
                className="absolute inset-0"
              >
                {/* Soft concentric discs (no borders) */}
                <div className="absolute inset-0 rounded-full bg-[#EFE9DF]/45" />
                <div className="absolute inset-[13%] rounded-full bg-[#EFE9DF]/70" />
                <div className="absolute inset-[26%] rounded-full bg-[#EFE9DF]" />

                {/* Outer orbit: languages */}
                <Orbit
                  items={outerItems}
                  inset="2%"
                  duration={70}
                  reduce={shouldReduceMotion}
                />

                {/* Inner orbit: the five learning pillars */}
                <Orbit
                  items={innerItems}
                  inset="20%"
                  duration={55}
                  reverse
                  reduce={shouldReduceMotion}
                />

                {/* Centre: cycling greeting */}
                <motion.div
                  animate={{ backgroundColor: centerColor }}
                  transition={{ duration: 0.8, ease }}
                  className="absolute inset-[34%] z-10 flex items-center justify-center rounded-full shadow-[0_24px_60px_rgba(120,30,36,0.25)]"
                >
                  <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden text-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={current.word}
                        initial={
                          shouldReduceMotion
                            ? false
                            : { opacity: 0, y: 16, filter: "blur(4px)" }
                        }
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={
                          shouldReduceMotion
                            ? undefined
                            : { opacity: 0, y: -16, filter: "blur(4px)" }
                        }
                        transition={{ duration: 0.5, ease }}
                      >
                        <p className="font-[family-name:var(--font-heading)] text-[clamp(1.6rem,4vw,2.8rem)] italic leading-none text-white">
                          {current.word}
                        </p>
                        <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/75">
                          {current.lang}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 pt-6 sm:mt-20 sm:flex-row">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
            Step in curious. Step out multilingual.
          </p>

          <div className="flex items-center gap-3">
            <IconArrowDown size={15} stroke={1.5} className="text-[#B32526]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
              Explore the language landscape
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const lineReveal: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};

const paragraphs = [
  "The Language Landscapes is rooted in the belief that language is more than a subject to be studied — it is a way to understand people, discover cultures and create meaningful connections.",
  "With a Ph.D. in French, Dr. Bansari Thakkar brings an academic perspective and a deep commitment to foreign-language education. Her work has also focused on making foreign-language education more accessible to visually impaired students in India.",
  "This commitment to accessibility and inclusive learning reflects a broader vision — one where opportunities to learn, communicate and participate are not limited by barriers.",
  "That vision forms the foundation of The Language Landscapes: a space that celebrates languages in their many forms and encourages learners to explore the world through communication.",
];

export function FounderSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax for portrait + decorative ring
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [1.12, 1.04, 1]);
  const ringY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-30, 50]);

  return (
    <section
      ref={sectionRef}
      id="founder"
      className="relative overflow-hidden bg-[#EFE9DF] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mb-16 flex items-center gap-3"
        >
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
            04 — The person behind the vision
          </motion.p>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Founder portrait */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: EASE }}
            className="relative mx-auto w-full max-w-[440px]"
          >
            {/* Decorative ring */}
            <motion.div
              style={{ y: ringY }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
              className="absolute -left-5 -top-5 h-32 w-32 rounded-full border border-[#B32526]/30"
            />

            {/* Arch reveals upward */}
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0% round 9999px 9999px 16px 16px)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0% round 9999px 9999px 16px 16px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.3, ease: EASE }}
              className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-2xl bg-[#D9C6A5]"
            >
              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="absolute inset-0"
              >
                <Image
                  src="/founder.png"
                  alt="Dr. Bansari Thakkar, founder of The Language Landscapes"
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover object-center"
                />
              </motion.div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
              className="absolute -bottom-6 -right-4"
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.8,
                }}
                className="rounded-xl border border-[#D9CFC2] bg-[#F8F5EF] px-6 py-5 shadow-lg shadow-[#292624]/5"
              >
                <p className="font-[family-name:var(--font-heading)] text-2xl italic text-[#B32526]">
                  The vision behind TLL.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Founder story */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="pt-5 lg:pt-0"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B32526]"
            >
              The story begins with a belief
            </motion.p>

            {/* Heading: masked line reveal */}
            <h2 className="mt-5 font-[family-name:var(--font-heading)] text-5xl font-normal leading-[1.1] tracking-[-0.035em] text-[#292624] sm:text-6xl">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  A journey shaped by language,
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  variants={lineReveal}
                  className="block italic text-[#B32526]"
                >
                  learning and inclusion.
                </motion.span>
              </span>
            </h2>

            <motion.div variants={fadeUp} className="mt-9">
              <h3 className="font-[family-name:var(--font-heading)] text-3xl text-[#292624]">
                Dr. Bansari Thakkar
              </h3>
              <p className="mt-2 text-sm text-[#81766C]">
                Founder, The Language Landscapes · Ph.D. in French
              </p>
            </motion.div>

            <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#514A45]">
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, ease: EASE, delay: i * 0.05 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div variants={fadeUp}>
              <Link
                href="#approach"
                className="group relative mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#B32526]"
              >
                <span className="relative">
                  Explore our learning philosophy
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#B32526] transition-transform duration-500 group-hover:scale-x-100" />
                </span>
                <IconArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
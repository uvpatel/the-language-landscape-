
"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  IconHeadphones,
  IconMessageCircle,
  IconBook2,
  IconPencil,
  IconLanguage,
  IconArrowUpRight,
} from "@tabler/icons-react";

const pillars = [
  {
    number: "01",
    title: "Listening",
    description:
      "Develop an ear for pronunciation, accents and natural conversations.",
    detail: "Understand the world around you.",
    icon: IconHeadphones,
  },
  {
    number: "02",
    title: "Speaking",
    description:
      "Build confidence through communication, interaction and expression.",
    detail: "Find the confidence to express.",
    icon: IconMessageCircle,
  },
  {
    number: "03",
    title: "Reading",
    description:
      "Understand written language, context and different forms of communication.",
    detail: "Discover meaning in every word.",
    icon: IconBook2,
  },
  {
    number: "04",
    title: "Writing",
    description:
      "Express thoughts, ideas and information with clarity and accuracy.",
    detail: "Give your thoughts a voice.",
    icon: IconPencil,
  },
  {
    number: "05",
    title: "Grammar",
    description:
      "Understand the structures and patterns that make communication meaningful.",
    detail: "Build a strong language foundation.",
    icon: IconLanguage,
  },
];

function BookPage({
  pillar,
  index,
  progress,
}: {
  pillar: (typeof pillars)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const rotateY = useTransform(
    progress,
    [index / pillars.length, (index + 1) / pillars.length],
    [0, -180],
  );

  const Icon = pillar.icon;

  return (
    <motion.article
      style={{
        rotateY,
        zIndex: pillars.length - index,
        transformOrigin: "left center",
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
      }}
      className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-r-2xl border border-[#DED5C9] bg-[#F8F5EF] p-7 shadow-[8px_8px_25px_rgba(41,38,36,0.08)] sm:p-10 lg:p-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.7),transparent_55%,rgba(217,198,165,0.12))]" />

      <div className="relative flex items-center justify-between">
        <span className="font-[family-name:var(--font-body)] text-xs font-semibold tracking-[0.25em] text-[#A58B64]">
          CHAPTER {pillar.number}
        </span>

        <Icon
          size={30}
          stroke={1.3}
          className="text-[#B32526]"
        />
      </div>

      <div className="relative">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
          THE FIVE PILLARS OF LANGUAGE
        </p>

        <h3 className="font-[family-name:var(--font-heading)] text-4xl font-medium leading-tight tracking-[-0.035em] text-[#292624] sm:text-5xl lg:text-6xl">
          {pillar.title}
          <span className="mt-2 block h-[2px] w-16 bg-[#B32526]" />
        </h3>

        <p className="mt-7 max-w-md text-sm leading-8 text-[#514A45] sm:text-base sm:leading-9">
          {pillar.description}
        </p>

        <p className="mt-7 font-[family-name:var(--font-heading)] text-xl text-[#B32526] sm:text-2xl">
          {pillar.detail}
        </p>
      </div>

      <div className="relative flex items-center justify-between border-t border-[#DED5C9] pt-5">
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A69A8B]">
          THE LANGUAGE LANDSCAPES
        </span>

        <span className="font-[family-name:var(--font-heading)] text-lg text-[#81766C]">
          {pillar.number}
        </span>
      </div>
    </motion.article>
  );
}

function StaticPillar({
  pillar,
}: {
  pillar: (typeof pillars)[number];
}) {
  const Icon = pillar.icon;

  return (
    <article className="flex min-h-[300px] flex-col justify-between rounded-xl border border-[#DED5C9] bg-[#F8F5EF] p-7 shadow-sm sm:p-9">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tracking-[0.2em] text-[#A58B64]">
          CHAPTER {pillar.number}
        </span>

        <Icon
          size={28}
          stroke={1.4}
          className="text-[#B32526]"
        />
      </div>

      <div>
        <h3 className="font-[family-name:var(--font-heading)] text-3xl text-[#292624]">
          {pillar.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#514A45]">
          {pillar.description}
        </p>

        <p className="mt-5 font-[family-name:var(--font-heading)] text-xl text-[#B32526]">
          {pillar.detail}
        </p>
      </div>
    </article>
  );
}

export function LearningApproachSection2() {
  const shouldReduceMotion = useReducedMotion();
  const bookRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: bookRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="approach"
      className="bg-[#EFE9DF] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section heading */}
        <div className="mb-14 flex items-center gap-3">
          <span className="h-px w-10 bg-[#B32526]" />

          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
            05 — The way we learn
          </p>
        </div>

        {/* Introduction */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="max-w-2xl font-[family-name:var(--font-heading)] text-5xl font-normal leading-[1.1] tracking-tight text-[#292624] sm:text-6xl lg:text-[68px]">
            A language is learned by
            <span className="block text-[#B32526]">
              living it.
            </span>
          </h2>

          <p className="max-w-xl text-base leading-8 text-[#514A45] sm:text-lg lg:justify-self-end">
            Meaningful language learning happens when understanding meets
            expression. Our approach brings together five essential skills,
            helping learners move beyond textbooks and develop the ability
            to use language in real-life situations.
          </p>
        </div>
      </div>

      {/* Book experience */}
      {shouldReduceMotion ? (
        <div className="mx-auto mt-16 grid max-w-7xl gap-5 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:px-12">
          {pillars.map((pillar) => (
            <StaticPillar
              key={pillar.number}
              pillar={pillar}
            />
          ))}
        </div>
      ) : (
        <div
          ref={bookRef}
          className="relative mt-16 h-[600vh]"
        >
          <div className="sticky top-0 flex h-screen items-center justify-center px-5 sm:px-10 lg:px-12">
            <div className="relative mx-auto grid h-[min(620px,75vh)] w-full max-w-6xl grid-cols-2 [perspective:2200px] max-md:grid-cols-1">
              {/* Left page */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-l-2xl border border-r-0 border-[#DED5C9] bg-[#F3EEE5] p-7 shadow-[-8px_8px_25px_rgba(41,38,36,0.06)] sm:p-10 lg:p-14 max-md:hidden">
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#D9CFC2]/40 to-transparent" />

                <div className="relative">
                  <span className="text-xs font-semibold tracking-[0.25em] text-[#A58B64]">
                    THE LANGUAGE LANDSCAPES
                  </span>

                  <div className="mt-10 h-px w-12 bg-[#B32526]" />
                </div>

                <div className="relative">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
                    A JOURNEY THROUGH LANGUAGE
                  </p>

                  <h3 className="mt-6 font-[family-name:var(--font-heading)] text-4xl leading-[1.2] text-[#292624] lg:text-5xl">
                    Five skills.
                    <span className="mt-2 block text-[#B32526]">
                      One language.
                    </span>
                  </h3>

                  <p className="mt-7 max-w-sm text-sm leading-8 text-[#6B6259]">
                    Every language is a world waiting to be discovered.
                    Turn each page and explore the skills that bring
                    that world to life.
                  </p>
                </div>

                <div className="relative flex items-center justify-between border-t border-[#DED5C9] pt-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A69A8B]">
                    OPEN YOUR WORLD
                  </span>

                  <span className="font-[family-name:var(--font-heading)] text-lg text-[#B32526]">
                    01 — 05
                  </span>
                </div>
              </div>

              {/* Right pages */}
              <div className="relative min-h-0 [transform-style:preserve-3d] max-md:col-span-1">
                {pillars.map((pillar, index) => (
                  <BookPage
                    key={pillar.number}
                    pillar={pillar}
                    index={index}
                    progress={scrollYProgress}
                  />
                ))}
              </div>

              {/* Book spine */}
              <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-20 w-px -translate-x-1/2 bg-[#D1C3B2] shadow-[0_0_8px_rgba(41,38,36,0.12)] max-md:hidden" />
            </div>
          </div>
        </div>
      )}

      {/* Closing statement */}
      <div className="mx-auto mt-20 flex max-w-7xl flex-col items-center border-y border-[#D9CFC2] px-6 py-12 text-center sm:px-10 sm:py-16 lg:mt-24 lg:px-12">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#81766C]">
          Five skills. One journey.
        </p>

        <h3 className="mt-5 font-[family-name:var(--font-heading)] text-4xl text-[#781E24] sm:text-5xl">
          Understand. Express. Connect.
        </h3>

        <p className="mt-5 max-w-xl text-sm leading-7 text-[#81766C]">
          We don&apos;t just teach you to learn a language.
          We help you find your voice in it.
        </p>

        <Link
          href="#programs"
          className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#B32526]"
        >
          Find your learning path

          <IconArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </section>
  );
}

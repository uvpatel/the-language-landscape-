"use client";

import { motion, useReducedMotion } from "motion/react";
import { ease, Reveal, SectionLabel } from "./shared";

const beliefs = [
  {
    no: "01",
    title: "It holds our past",
    text: "Language carries heritage, stories and the memory of communities.",
  },
  {
    no: "02",
    title: "It shapes our present",
    text: "It forms our thoughts, our narratives and the way we meet one another.",
  },
  {
    no: "03",
    title: "It guides our future",
    text: "It is the thread that can stitch a smaller, more fragmented world back together.",
  },
];

export default function OurPhilosohpy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#EFE9DF] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <Reveal>
          <SectionLabel>02 — Our philosophy</SectionLabel>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
          <Reveal>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-[#292624] sm:text-5xl lg:text-6xl">
              Language goes
              <span className="mt-1 block text-[#B32526]">
                beyond communication.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="max-w-xl text-base leading-8 text-[#514A45] sm:text-lg">
              Our programs embrace the full spectrum of language: spoken,
              written and audio-visual. We collaborate with educators, artists,
              researchers and communities to celebrate the richness of
              linguistic diversity.
            </p>
          </Reveal>
        </div>

        {/* Three beliefs */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {beliefs.map((item, i) => (
            <Reveal key={item.no} delay={i * 0.1}>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.3, ease }}
                className="flex h-full min-h-[230px] flex-col justify-between rounded-2xl border border-[#E4DDD3] bg-[#F8F5EF] p-7"
              >
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#A58B64]">
                  {item.no}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl text-[#292624]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#514A45]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Statement */}
        <Reveal delay={0.1}>
          <div className="mt-16 border-t border-[#D9CFC2] pt-12 text-center">
            <p className="mx-auto max-w-3xl font-[family-name:var(--font-heading)] text-2xl leading-snug text-[#514A45] sm:text-3xl">
              In a world that is becoming both smaller and more fragmented,
              language is the thread that can stitch us back together.
            </p>
            <p className="mt-8 font-[family-name:var(--font-heading)] text-xl text-[#292624] sm:text-2xl">
              We don&apos;t just teach language.{" "}
              <span className="text-[#B32526]">
                We honour it. We live it. We pass it on.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
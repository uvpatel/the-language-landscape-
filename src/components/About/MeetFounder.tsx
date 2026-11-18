"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ease, Reveal, SectionLabel } from "./shared";

export default function MeetFounder() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#EFE9DF] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <Reveal>
          <SectionLabel>04 — Meet the founder</SectionLabel>
        </Reveal>

        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Portrait */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-[420px]">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
                }
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease }}
                className="absolute -left-8 -top-8 h-36 w-36 rounded-full border border-[#B32526]/20"
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[50%] rounded-b-2xl bg-[#E4DDD3]">
                {/* Replace with the approved founder photo */}
                <Image
                  src="/banasarithakkar.png"
                  alt="Dr. Bansari Thakkar, founder of The Language Landscapes"
                  fill
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover grayscale"
                />
              </div>

              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                transition={{ duration: 0.3, ease }}
                className="absolute -bottom-5 -right-2 rounded-xl border border-[#E4DDD3] bg-[#F8F5EF] px-5 py-4 shadow-lg shadow-[#292624]/5 sm:-right-6"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#81766C]">
                  The vision behind TLL
                </p>
                <p className="mt-1 font-[family-name:var(--font-heading)] text-xl text-[#B32526]">
                  One language at a time.
                </p>
              </motion.div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B32526]">
                The mind behind the vision
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-[#292624] sm:text-5xl">
                Bansari Thakkar
              </h2>
              <p className="mt-3 font-[family-name:var(--font-heading)] text-xl text-[#B32526]">
                Linguist | Cultural Explorer | Eternal Go-Getter
              </p>
            </Reveal>

            <div className="mt-8 space-y-5 text-base leading-8 text-[#514A45]">
              <Reveal delay={0.08}>
                <p>
                  Known for her intellectual depth and gentle presence, Bansari
                  is an individual who has spent her life collecting languages
                  and cultural experiences.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p>
                  Born with an insatiable curiosity and a deep love for the
                  world&apos;s linguistic diversity, she has dedicated her life
                  to exploring the magic of communication.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  Naturally, this passion led her to pursue a Ph.D. in French,
                  focusing on aiding visually impaired students in foreign
                  language education in India.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <p>
                  Minimalist at heart, spiritual by nature and enterprising in
                  spirit, she finds joy in building, creating and inspiring.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <p className="mt-9 border-l-2 border-[#B32526] pl-6 font-[family-name:var(--font-heading)] text-xl leading-snug text-[#292624] sm:text-2xl">
                At the core of it all, she is here to make a difference, one
                language, one idea and one meaningful connection at a time.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
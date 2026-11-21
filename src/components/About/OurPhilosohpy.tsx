
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
    <section className="relative overflow-hidden bg-[#EFE9DF] py-20 lg:py-28">
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

        {/* Three book-inspired pages */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-7">
          {beliefs.map((item, i) => (
            <Reveal key={item.no} delay={i * 0.12}>
              <motion.article
                whileHover={
                  shouldReduceMotion ? undefined : { y: -8, rotateX: 1 }
                }
                transition={{ duration: 0.35, ease }}
                className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[3px] border border-[#DED5C9] bg-[#F8F5EF] p-8 shadow-[2px_4px_12px_rgba(67,48,34,0.035),0_18px_35px_rgba(67,48,34,0.04)] transition-shadow duration-500 hover:shadow-[4px_16px_35px_rgba(67,48,34,0.10)] sm:p-9 lg:min-h-[340px] lg:p-10"
                style={{ transformPerspective: 1000 }}
              >
                {/* Book spine */}
                <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-r from-[#D2C4B2] via-[#E8DFD3] to-transparent" />

                {/* Paper texture and light */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_45%,rgba(217,198,165,0.08))]" />

                {/* Page number */}
                <div className="relative flex items-center justify-between">
                  <span className="font-[family-name:var(--font-body)] text-xs font-semibold tracking-[0.22em] text-[#A58B64]">
                    {item.no}
                  </span>

                  <span className="h-px w-10 bg-[#D9C6A5] transition-all duration-500 group-hover:w-16 group-hover:bg-[#B32526]" />
                </div>

                {/* Main content */}
                <div className="relative mt-auto pt-16">
                  <h3 className="font-[family-name:var(--font-heading)] text-[27px] font-medium leading-[1.2] tracking-[-0.035em] text-[#292624] sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-[15px] leading-8 text-[#6B6259]">
                    {item.text}
                  </p>
                </div>

                {/* Bottom page detail */}
                <div className="relative mt-9 flex items-center justify-between border-t border-[#E5DDD2] pt-5">
                  <span className="font-[family-name:var(--font-body)] text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A69A8B]">
                    The Language Landscapes
                  </span>

                  <span className="font-[family-name:var(--font-heading)] text-sm text-[#B32526]">
                    {item.no}
                  </span>
                </div>

                {/* Decorative page edge */}
<div className="absolute bottom-0 right-0 h-8 w-8 border-l border-t border-[#D8CFC2] bg-[#E2D9CD] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* Closing statement */}
        <Reveal delay={0.1}>
          <div className="mt-20 border-t border-[#D9CFC2] pt-12 text-center lg:mt-24">
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

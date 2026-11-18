"use client";

import { Reveal, SectionLabel } from "./shared";

const paragraphs = [
  "The Language Landscapes, originating in India, a land of unparalleled linguistic diversity, was founded with the aim of understanding the profound connection between language and life.",
  "This question inspired an exploration of traditions, culture and human interaction, ultimately revealing that language is at the very root of human existence.",
  "For our founder, what began as a challenge became a source of empowerment through the study of foreign languages. Her lifelong passion for languages reshaped her identity, transforming what was once foreign into an integral part of her inner dialogue, almost a second mother tongue.",
  "At The Language Landscapes, we embrace the power of language in shaping thoughts, forming narratives and preserving heritage.",
];

export default function OurStory() {
  return (
    <section id="our-story" className="bg-[#F8F5EF] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <Reveal>
          <SectionLabel>01 — Our story</SectionLabel>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Left: heading + pull question */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-[#292624] sm:text-5xl lg:text-6xl">
                Rooted in diversity.
                <span className="mt-1 block text-[#B32526]">
                  Connected through language.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <blockquote className="mt-10 border-l-2 border-[#B32526] pl-6">
                <p className="font-[family-name:var(--font-heading)] text-2xl leading-snug text-[#514A45] sm:text-3xl">
                  What does it truly mean to speak, to be heard and to belong?
                </p>
              </blockquote>
            </Reveal>
          </div>

          {/* Right: story */}
          <div className="space-y-7">
            {paragraphs.map((text, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p
                  className={
                    i === 0
                      ? "text-lg leading-9 text-[#292624] sm:text-xl"
                      : "text-base leading-8 text-[#514A45]"
                  }
                >
                  {text}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <div className="mt-4 rounded-2xl border border-[#E4DDD3] bg-[#EFE9DF] p-7 sm:p-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#81766C]">
                  Our pursuit
                </p>
                <p className="mt-3 text-base leading-8 text-[#514A45]">
                  To make language learning accessible, support linguistic
                  preservation and encourage creative expression across
                  cultures and communities.
                </p>
                <p className="mt-5 font-[family-name:var(--font-heading)] text-xl text-[#B32526]">
                  Whether you are a curious beginner or a professional seeking
                  fluency, this is a space where your voice matters.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
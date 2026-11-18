
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ease, Reveal, SectionLabel } from "./shared";

const team = [
  {
    name: "Janki Thakkar",
    image: "/banasarithakkar.png",
    role: "Head of Operations | Writer | Curator",
    imageShape: "rounded-tl-[140px] rounded-tr-[20px] rounded-br-[140px] rounded-bl-[20px]",
    imagePosition: "object-center",
    paragraphs: [
      "An avid reader, Janki's love affair with the written word started very early on.",
      "Writing became her way of making sense of fleeting thoughts, half-held memories and feelings that have no name. Words have always been her way of listening, of reaching out gently to the world and hoping it reaches back.",
      "At The Language Landscapes, she seeks to help shape voices that celebrate diversity, learning and connection.",
      "Her drive is to be part of something deeply meaningful: the celebration of human expression in all its forms.",
    ],
    quote:
      "All you need is a little delusion and audacity, and you can do anything in life.",
  },
  {
    name: "Shailja Lekhadia",
    image: "/banasarithakkar.png",
    role: "Design Strategist | Researcher",
    imageShape: "rounded-tl-[80px] rounded-tr-[80px] rounded-br-[80px] rounded-bl-xl",
    imagePosition: "object-center",
    paragraphs: [
      "An interior architect who moves fluidly between the poetic and practical realms, Shailja continues to work in the space between research and imagination.",
      "A thinker as much as a maker, her canvas spans interior and graphic design, exhibition storytelling and educational spaces, all through the lens of design thinking.",
      "At The Language Landscapes, she is the creative force turning ideas into immersive experiences.",
      "Her vision is a global platform where language education transforms, aligning deeply with contemporary learning systems: experiential, intuitive and endlessly inspiring.",
    ],
    quote:
      "Design is not just a subject, but a living, breathing journey.",
  },
];

export default function People() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F8F5EF] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <Reveal>
          <SectionLabel>05 — The people behind the purpose</SectionLabel>
        </Reveal>

        <Reveal>
          <h2 className="max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-[#292624] sm:text-5xl lg:text-6xl">
            A team built on
            <span className="mt-1 block text-[#B32526]">
              curiosity and craft.
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {team.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.12}>
              <motion.article
                whileHover={
                  shouldReduceMotion ? undefined : { y: -6 }
                }
                transition={{ duration: 0.35, ease }}
                className="flex h-full flex-col"
              >
                <div className="relative flex flex-col items-center rounded-2xl border border-[#E4DDD3] bg-[#EFE9DF] p-6 sm:p-8">
                  <div
                    className={`relative h-[300px] w-full max-w-[280px] overflow-hidden border-[6px] border-[#F8F5EF] bg-[#D9C6A5] shadow-[0_15px_40px_rgba(41,38,36,0.10)] transition-transform duration-500 group-hover:scale-[1.02] sm:h-[340px] sm:max-w-[310px] ${person.imageShape}`}
                  >
                    <Image
                      src={person.image}
                      alt={`Portrait of ${person.name}`}
                      fill
                      sizes="(max-width: 640px) 280px, 310px"
                      className={`object-cover ${person.imagePosition}`}
                    />
                  </div>

                  <div className="mt-7 text-center">
                    <h3 className="font-[family-name:var(--font-heading)] text-3xl text-[#292624] sm:text-4xl">
                      {person.name}
                    </h3>

                    <p className="mt-3 text-[10px] font-semibold uppercase leading-5 tracking-[0.16em] text-[#81766C] sm:text-xs">
                      {person.role}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-2 pt-8 sm:px-4">
                  <div className="space-y-4 text-sm leading-7 text-[#514A45] sm:text-base sm:leading-8">
                    {person.paragraphs.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}
                  </div>

                  <p className="mt-8 border-t border-[#D9CFC2] pt-7 font-[family-name:var(--font-heading)] text-xl leading-snug text-[#B32526] sm:text-2xl">
                    &ldquo;{person.quote}&rdquo;
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

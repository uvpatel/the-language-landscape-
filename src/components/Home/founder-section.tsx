
import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconQuote } from "@tabler/icons-react";

export function FounderSection() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#EFE9DF] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-3">
          <span className="h-px w-10 bg-[#B32526]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
            04 — The person behind the vision
          </p>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Founder portrait */}
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full border border-[#B32526]/30" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-2xl bg-[#D9C6A5]">
              <Image
                src="/founder.png"
                alt="Dr. Bansari Thakkar, founder of The Language Landscapes"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-center"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 rounded-xl border border-[#D9CFC2] bg-[#F8F5EF] px-6 py-5 shadow-lg shadow-[#292624]/5">
              <p className="font-[family-name:var(--font-heading)] text-2xl italic text-[#B32526]">
                The vision behind TLL.
              </p>
            </div>
          </div>

          {/* Founder story */}
          <div className="pt-5 lg:pt-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B32526]">
              The story begins with a belief
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-heading)] text-5xl font-normal leading-[1.1] tracking-[-0.035em] text-[#292624] sm:text-6xl">
              A journey shaped by language,
              <span className="block italic text-[#B32526]">
                learning and inclusion.
              </span>
            </h2>

            <div className="mt-9">
              <h3 className="font-[family-name:var(--font-heading)] text-3xl text-[#292624]">
                Dr. Bansari Thakkar
              </h3>
              <p className="mt-2 text-sm text-[#81766C]">
                Founder, The Language Landscapes · Ph.D. in French
              </p>
            </div>

            <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#514A45]">
              <p>
                The Language Landscapes is rooted in the belief that
                language is more than a subject to be studied — it is
                a way to understand people, discover cultures and
                create meaningful connections.
              </p>

              <p>
                With a Ph.D. in French, Dr. Bansari Thakkar brings
                an academic perspective and a deep commitment to
                foreign-language education. Her work has also
                focused on making foreign-language education more
                accessible to visually impaired students in India.
              </p>

              <p>
                This commitment to accessibility and inclusive
                learning reflects a broader vision — one where
                opportunities to learn, communicate and participate
                are not limited by barriers.
              </p>

              <p>
                That vision forms the foundation of The Language
                Landscapes: a space that celebrates languages in
                their many forms and encourages learners to explore
                the world through communication.
              </p>
            </div>

            <Link
              href="#approach"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#B32526]"
            >
              Explore our learning philosophy
              <IconArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* Founder quote */}
     
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { IconArrowUpRight, IconMessage2, IconQuote } from "@tabler/icons-react";

export function TeteATeteFeature() {
  return (
    <section className="relative isolate overflow-hidden bg-[#781E24] py-24 text-[#F8F5EF] sm:py-28 lg:py-32">
      {/* Decorative concentric background circles */}
      <div className="pointer-events-none absolute -left-36 -top-36 h-[460px] w-[460px] rounded-full border border-white/[0.07]" />
      <div className="pointer-events-none absolute -bottom-48 -right-40 h-[520px] w-[520px] rounded-full border border-white/[0.07]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B32526]/25 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: Text & Content */}
          <div>
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#D9C6A5]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D9C6A5]">
                Special Series · Tête-à-tête
              </p>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl font-normal leading-[1.08] tracking-tight text-[#F8F5EF] sm:text-4xl lg:text-5xl">
              Conversations that go beyond words.
            </h2>

            {/* Paragraphs */}
            <div className="mt-8 space-y-5 text-base leading-relaxed text-[#EFE9DF]/85 sm:text-lg sm:leading-8">
              <p>
                Tête-à-tête is dedicated to expert-led discussions on linguistic
                awareness, language science and cultural diversity.
              </p>
              <p>
                Beyond language education, our goal is to spark wider awareness
                and appreciation for the richness of languages and cultures.
              </p>
              <p>
                Through thoughtful conversations and shared perspectives, we
                invite you to look at language from new angles.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/blog/category/tete-a-tete"
                className="group inline-flex items-center gap-2.5 rounded-xs bg-[#F8F5EF] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#781E24] transition-all duration-300 hover:bg-[#EFE9DF] hover:shadow-lg"
              >
                <span>Discover Tête-à-tête</span>
                <IconArrowUpRight
                  size={16}
                  stroke={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Right: Editorial Typography Composition */}
          <div className="relative">
            <div className="relative rounded-sm border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-12">
              <div className="text-[#D9C6A5]/40">
                <IconQuote size={48} stroke={1.2} />
              </div>

              <blockquote className="mt-4 font-serif text-2xl leading-relaxed text-[#F8F5EF] sm:text-3xl">
                &ldquo;To understand someone&rsquo;s language is to step into their shoes;
                to understand their nuances is to walk with them.&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#D9C6A5]">
                  <IconMessage2 size={20} stroke={1.6} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D9C6A5]">
                    Linguistic Dialogue
                  </p>
                  <p className="text-xs text-[#EFE9DF]/70">
                    Curated conversations with linguists, educators & speakers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

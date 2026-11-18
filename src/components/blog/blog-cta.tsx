import React from "react";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

export function BlogCTA() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-24 sm:py-28 lg:py-32">
      {/* Decorative concentric background rings */}
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[480px] w-[480px] rounded-full border border-[#B32526]/10" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full border border-[#A58B64]/10" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#B32526]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
              Join The Conversation
            </p>
            <span className="h-px w-9 bg-[#B32526]" />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] text-[#292624] sm:text-4xl lg:text-5xl">
            Stay curious.{" "}
            <span className="text-[#B32526]">Keep discovering.</span>
          </h2>

          {/* Supporting text */}
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-[#514A45] sm:text-lg sm:leading-8">
            The world of language is constantly evolving. Join us as we explore
            new ideas, perspectives and possibilities.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-xs bg-[#B32526] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#781E24]"
            >
              <span>Say Bonjour</span>
              <IconArrowUpRight
                size={16}
                stroke={2}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/programs"
              className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-xs border border-[#292624]/20 bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#292624] transition-all duration-300 hover:border-[#B32526] hover:text-[#B32526]"
            >
              <span>Explore Programs</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

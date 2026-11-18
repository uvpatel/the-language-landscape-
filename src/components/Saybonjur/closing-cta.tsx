
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import SectionLabel from "./section-label";

export default function ClosingCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#781E24] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="pointer-events-none absolute -right-40 -top-48 h-[600px] w-[600px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-20 -top-28 h-[400px] w-[400px] rounded-full border border-white/10" />

      <div className="relative z-10 mx-auto max-w-[1440px] text-center">
        <SectionLabel>One hello can change everything</SectionLabel>

        <h2 className="mx-auto max-w-5xl font-[family-name:var(--font-heading)] text-5xl leading-[1.05] tracking-tight text-[#F8F5EF] sm:text-7xl lg:text-8xl">
          Or simply say{" "}
          <span className="text-[#D9C6A5]">bonjour.</span>

          <span className="mt-3 block text-3xl text-[#F8F5EF]/80 sm:text-5xl">
            We&apos;ll take it from there.
          </span>
        </h2>

        <Link
          href="#inquiry"
          className="group mt-12 inline-flex min-h-14 items-center gap-3 bg-[#F8F5EF] px-8 py-4 text-sm font-semibold text-[#781E24] transition-colors hover:bg-[#D9C6A5]"
        >
          Start a Conversation

          <IconArrowUpRight
            size={18}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>

        <p className="mt-10 font-[family-name:var(--font-heading)] text-xl text-[#E8D9C7]">
          Step in curious. Step out multilingual.
        </p>
      </div>
    </section>
  );
}

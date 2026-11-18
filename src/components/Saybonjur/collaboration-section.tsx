
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import SectionLabel from "./section-label";

export default function CollaborationSection() {
  return (
    <section className="bg-[#EFE9DF] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionLabel>Beyond the classroom</SectionLabel>

          <h2 className="font-[family-name:var(--font-heading)] text-5xl leading-[1.05] tracking-tight text-[#292624] sm:text-6xl">
            Ideas, conversations and{" "}
            <span className="text-[#B32526]">
              collaborations.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-8 text-[#514A45]">
            We believe language brings people together. If you are an
            educator, researcher, artist or organisation interested in
            collaborating with us, we&apos;d love to hear from you.
          </p>

          <Link
            href="#inquiry"
            className="group mt-9 inline-flex min-h-14 items-center gap-3 bg-[#292624] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#781E24]"
          >
            Let&apos;s Collaborate

            <IconArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="relative flex aspect-[1.15] items-center justify-center overflow-hidden bg-[#781E24] p-8 sm:p-12">
          <div className="absolute inset-6 border border-white/15" />
          <div className="absolute inset-12 rounded-full border border-white/10" />

          <div className="relative z-10 text-center">
            <p className="font-[family-name:var(--font-heading)] text-6xl leading-none text-[#F8F5EF] sm:text-8xl">
              Bonjour.
            </p>

            <p className="mt-5 font-[family-name:var(--font-heading)] text-3xl text-[#D9C6A5] sm:text-4xl">
              Hello. Namaste.
            </p>

            <div className="mx-auto mt-8 h-px w-16 bg-[#D9C6A5]/60" />

            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E8D9C7]">
              Many voices. One connection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

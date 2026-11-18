import React from "react";
import Link from "next/link";
import { IconArrowUpRight, IconCompass } from "@tabler/icons-react";

export function ArticleProgramsCTA() {
  return (
    <aside className="my-16 overflow-hidden rounded-sm border border-[#292624]/10 bg-[#EFE9DF]/80 p-8 sm:p-12">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-xl">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#781E24]">
            <IconCompass size={17} stroke={1.8} />
            <span>Discover The Language Landscapes</span>
          </div>

          <h3 className="font-serif text-2xl font-normal tracking-tight text-[#292624] sm:text-3xl">
            Step in curious.{" "}
            <span className="text-[#B32526]">Step out multilingual.</span>
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[#514A45] sm:text-base">
            From conversational French to DELF and TEF/TCF Canada certification,
            our bespoke language learning programs are designed for depth,
            clarity, and lifelong fluency.
          </p>
        </div>

        <div className="shrink-0">
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2.5 rounded-xs bg-[#B32526] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#781E24]"
          >
            <span>Explore Programs</span>
            <IconArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </aside>
  );
}

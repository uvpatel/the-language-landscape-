import Link from "next/link";
import { IconArrowUpRight, IconSparkles } from "@tabler/icons-react";

export default function FAQContactCard() {
  return (
    <div className="border border-[#3D3834] bg-[#292624] p-8 text-[#F8F5EF] sm:p-9">
      <div className="flex h-10 w-10 items-center justify-center border border-[#A58B64]/30 bg-[#342F2C]">
        <IconSparkles
          size={20}
          stroke={1.5}
          className="text-[#D9C6A5]"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl leading-snug font-medium text-[#F8F5EF] sm:text-[26px]">
        Still have a question?
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#D0C7BB]">
        Every learner&apos;s journey is different. Tell us what you&apos;re
        looking for, and we&apos;ll help you take the next step.
      </p>

      <div className="mt-6 pt-5 border-t border-[#3D3834]">
        <Link
          href="#inquiry"
          className="group inline-flex items-center gap-2.5 text-sm font-semibold text-[#E5CBA6] transition-colors hover:text-[#F8F5EF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5CBA6]"
        >
          <span>Ask us directly</span>
          <IconArrowUpRight
            size={16}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}

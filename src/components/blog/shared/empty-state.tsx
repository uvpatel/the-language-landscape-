import React from "react";
import Link from "next/link";
import { IconFeather, IconArrowUpRight } from "@tabler/icons-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
}

export function EmptyState({
  title = "Inaugural essays forthcoming",
  description = "Our editorial team is curating thought-provoking perspectives on language, linguistics, and cultural awareness. Join our community to be the first to read them.",
  actionText = "Explore Interest Areas",
  actionHref = "#categories",
}: EmptyStateProps) {
  return (
    <div className="relative overflow-hidden rounded-sm border border-[#292624]/10 bg-[#EFE9DF]/40 px-8 py-16 text-center sm:px-12 sm:py-20">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#B32526]/10 text-[#B32526]">
        <IconFeather size={26} stroke={1.6} />
      </div>

      <h3 className="mt-6 font-serif text-2xl font-normal text-[#292624] sm:text-3xl">
        {title}
      </h3>

      <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-[#514A45]">
        {description}
      </p>

      {actionHref && actionText && (
        <div className="mt-8">
          <Link
            href={actionHref}
            className="group inline-flex items-center gap-2 rounded-xs bg-[#B32526] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#781E24]"
          >
            {actionText}
            <IconArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      )}
    </div>
  );
}

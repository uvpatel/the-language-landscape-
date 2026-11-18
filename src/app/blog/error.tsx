"use client";

import { useEffect } from "react";
import Link from "next/link";
import { IconAlertTriangle, IconRefresh, IconArrowLeft } from "@tabler/icons-react";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Blog page error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#F8F5EF] px-6 py-24">
      <div className="max-w-md text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#B32526]/10 text-[#B32526]">
          <IconAlertTriangle size={28} stroke={1.8} />
        </div>

        <h1 className="mt-6 font-serif text-3xl font-normal text-[#292624]">
          Unable to Load Stories
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-[#514A45]">
          An unexpected issue occurred while preparing our editorial stream.
          Please try refreshing or return to the journal home.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-xs bg-[#B32526] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#781E24]"
          >
            <IconRefresh size={15} />
            <span>Try Again</span>
          </button>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xs border border-[#292624]/20 bg-transparent px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#292624] transition-colors hover:border-[#B32526] hover:text-[#B32526]"
          >
            <IconArrowLeft size={15} />
            <span>Blog Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

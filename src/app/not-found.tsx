
import Link from "next/link";
import { IconArrowLeft, IconGlobe, IconHome } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#F8F6F1] px-6 py-24 text-[#29251F]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#DCCFC0]/50" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#DCCFC0]/50" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-[#DCCFC0]/50" />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#D9C7B5] text-[#A45E43]">
          <IconGlobe size={25} stroke={1.3} />
        </div>

        <span className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#A45E43]">
          The Language Landscape
        </span>

        {/* 404 */}
        <h1 className="font-serif text-[clamp(7rem,20vw,12rem)] font-normal leading-none tracking-[-0.08em] text-[#A45E43]">
          404
        </h1>

        <h2 className="mt-7 font-serif text-3xl font-normal leading-tight tracking-tight sm:text-4xl">
          Lost in translation?
        </h2>

        <p className="mt-5 max-w-md text-base leading-8 text-[#777066]">
          It seems this page has wandered beyond our landscape.
          Sometimes, even words take unexpected turns.
          Let&apos;s help you find your way back.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#A45E43] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#854832] hover:shadow-lg"
          >
            <IconHome size={17} stroke={1.7} />
            Back to homepage
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#D9C7B5] px-7 py-3.5 text-sm font-medium text-[#66594D] transition-colors duration-300 hover:border-[#A45E43] hover:text-[#A45E43]"
          >
            <IconArrowLeft size={17} stroke={1.7} />
            Explore TLL
          </Link>
        </div>

        {/* Footer note */}
        <div className="mt-20 flex items-center gap-3">
          <span className="h-px w-10 bg-[#D9C7B5]" />
          <p className="font-serif text-sm text-[#A18F7D]">
            Every journey begins with a word.
          </p>
          <span className="h-px w-10 bg-[#D9C7B5]" />
        </div>
      </div>
    </main>
  );
}

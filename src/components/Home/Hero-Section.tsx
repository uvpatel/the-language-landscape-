
import Link from "next/link";
import {
  IconArrowDown,
  IconArrowUpRight,
  IconGlobe,
} from "@tabler/icons-react";

const languages = ["French", "English", "German", "More"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5EF]">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 sm:px-10 sm:pt-28 lg:px-12 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* Left: Editorial copy */}
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-9 bg-[#B32526]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
                A world beyond words
              </p>
            </div>

            <h1 className="max-w-3xl font-[family-name:var(--font-heading)] text-5xl font-normal leading-[1.08] tracking-[-0.035em] text-[#292624] sm:text-6xl lg:text-[76px]">
              Language begins as sound,
              <span className="mt-1 block italic text-[#B32526]">
                and slowly becomes meaning.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#514A45] sm:text-lg">
              Discover languages, embrace cultures, and find new ways to
              connect with the world. Your journey towards meaningful
              communication starts here.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#programs"
                className="group inline-flex items-center gap-3 rounded-full bg-[#B32526] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#781E24]"
              >
                Explore our programs
                <IconArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-[#D9CFC2] px-7 py-4 text-sm font-medium text-[#292624] transition-colors hover:border-[#B32526] hover:text-[#B32526]"
              >
                Discover our story
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#E4DDD3] pt-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#81766C]">
                Explore
              </span>
              {languages.map((language) => (
                <span
                  key={language}
                  className="text-sm text-[#514A45]"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Editorial visual */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#B32526]/20" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full border border-[#A58B64]/40" />

            <div className="relative overflow-hidden rounded-t-[48%] rounded-b-2xl bg-[#EFE9DF] px-8 pb-9 pt-14 sm:px-12 sm:pt-16">
              <div className="absolute right-8 top-8 text-[#B32526]/20">
                <IconGlobe size={54} stroke={1} />
              </div>

              <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-[#81766C]">
                The art of expression
              </p>

              <div className="my-12 space-y-1 text-center">
                <p className="font-[family-name:var(--font-heading)] text-6xl italic text-[#B32526] sm:text-7xl">
                  Bonjour.
                </p>
                <p className="font-[family-name:var(--font-heading)] text-5xl text-[#292624] sm:text-6xl">
                  Hello.
                </p>
                <p className="font-[family-name:var(--font-heading)] text-5xl italic text-[#81766C] sm:text-6xl">
                  Hallo.
                </p>
                <p className="font-[family-name:var(--font-heading)] text-5xl text-[#A58B64] sm:text-6xl">
                  Hola.
                </p>
              </div>

              <div className="mx-auto h-px w-16 bg-[#B32526]/50" />

              <p className="mt-6 text-center font-[family-name:var(--font-heading)] text-2xl italic text-[#514A45]">
                One message. Many expressions.
              </p>
            </div>

            <div className="absolute -bottom-5 right-5 rounded-xl border border-[#E4DDD3] bg-[#F8F5EF] px-5 py-4 shadow-lg shadow-[#292624]/5 sm:-right-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#81766C]">
                Our philosophy
              </p>
              <p className="mt-1 font-[family-name:var(--font-heading)] text-xl italic text-[#B32526]">
                Unity through language.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-[#E4DDD3] pt-5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#81766C]">
            Step in curious. Step out multilingual.
          </p>
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9CFC2] text-[#B32526] transition-colors hover:bg-[#B32526] hover:text-white"
          >
            <IconArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

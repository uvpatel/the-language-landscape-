"use client";

import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

export function LegalHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F7F5F0] px-6 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-36 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          {/* Eyebrow & Edition Label */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="h-px w-8 bg-[#8A2424]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A2424]">
              THE LANGUAGE LANDSCAPES
            </span>
            <span className="h-1 w-1 rounded-full bg-[#292724]/20" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#81766C]">
              LEGAL DOCUMENTATION / 2026
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-[family-name:var(--font-heading)] text-5xl font-medium leading-[1.08] tracking-tight text-[#292724] sm:text-6xl md:text-7xl">
            Legal &amp; Policies
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#514A45] sm:text-lg">
            Terms, privacy and the principles that guide our relationship with you.
            Experience our official legal repository as an interactive digital book.
          </p>
        </motion.div>

        {/* Editorial Quick Chapter Cards */}
        <div className="mt-12 grid gap-6 border-t border-[#292724]/10 pt-10 sm:grid-cols-2 lg:gap-8">
          <Link
            href="#terms-and-conditions"
            className="group relative flex flex-col justify-between border border-[#292724]/10 bg-[#FFFFFF] p-7 transition-all duration-300 hover:border-[#8A2424] hover:shadow-[0_10px_28px_rgba(41,39,36,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A2424] sm:p-8"
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <span className="font-[family-name:var(--font-heading)] text-3xl font-normal text-[#8A2424] sm:text-4xl">
                  01
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#292724]/10 text-[#292724] transition-all duration-300 group-hover:border-[#8A2424] group-hover:bg-[#8A2424] group-hover:text-white">
                  <IconArrowUpRight size={15} />
                </span>
              </div>

              <span className="mt-5 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#81766C]">
                CHAPTER 01 / TERMS OF SERVICE
              </span>

              <h2 className="mt-1.5 font-[family-name:var(--font-heading)] text-2xl font-medium text-[#292724] transition-colors group-hover:text-[#8A2424]">
                Terms &amp; Conditions
              </h2>
            </div>

            <p className="mt-5 border-t border-[#292724]/10 pt-3.5 text-xs leading-relaxed text-[#514A45]">
              12 binding clauses governing course enrolment, fees, intellectual property, and international jurisdiction.
            </p>
          </Link>

          <Link
            href="#privacy-policy"
            className="group relative flex flex-col justify-between border border-[#292724]/10 bg-[#FFFFFF] p-7 transition-all duration-300 hover:border-[#8A2424] hover:shadow-[0_10px_28px_rgba(41,39,36,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A2424] sm:p-8"
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <span className="font-[family-name:var(--font-heading)] text-3xl font-normal text-[#8A2424] sm:text-4xl">
                  02
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#292724]/10 text-[#292724] transition-all duration-300 group-hover:border-[#8A2424] group-hover:bg-[#8A2424] group-hover:text-white">
                  <IconArrowUpRight size={15} />
                </span>
              </div>

              <span className="mt-5 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#81766C]">
                CHAPTER 02 / DATA &amp; PRIVACY
              </span>

              <h2 className="mt-1.5 font-[family-name:var(--font-heading)] text-2xl font-medium text-[#292724] transition-colors group-hover:text-[#8A2424]">
                Privacy Policy
              </h2>
            </div>

            <p className="mt-5 border-t border-[#292724]/10 pt-3.5 text-xs leading-relaxed text-[#514A45]">
              12 transparent provisions detailing academic data collection, security, PIPEDA &amp; DPDPA compliance, and user rights.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

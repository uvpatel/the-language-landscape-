"use client";

import Link from "next/link";
import { IconArrowUpRight, IconMail } from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

export function LegalCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="mt-4 bg-[#8A2424] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between gap-10 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-[#E5CDBB]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E5CDBB]">
                Need Clarification?
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium leading-tight text-[#FFFFFF] sm:text-4xl md:text-5xl">
              Questions about our policies?
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#FFFFFF]/85 sm:text-base">
              We&apos;re here to help. If you have questions about our terms or how
              we handle your personal information, get in touch with our team.
            </p>

            <div className="mt-6 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#E5CDBB]">
              <IconMail size={16} stroke={1.6} aria-hidden="true" />
              <a
                href="mailto:connect@thelanguagefoundation.com"
                className="underline underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                connect@thelanguagefoundation.com
              </a>
            </div>
          </div>

          <div className="flex shrink-0 items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 border border-[#FFFFFF] bg-[#FFFFFF] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A2424] transition-all hover:bg-[#F7F5F0] hover:text-[#6E1C1C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Contact Us</span>
              <IconArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

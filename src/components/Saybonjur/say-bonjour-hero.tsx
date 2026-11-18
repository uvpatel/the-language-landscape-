
import Link from "next/link";
import {
  IconArrowDown,
  IconArrowUpRight,
  IconMessageCircle,
} from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import SectionLabel from "./section-label";

export default function SayBonjourHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden border-b border-[#D9CFC2]">
      <div className="pointer-events-none absolute -right-40 -top-36 h-[500px] w-[500px] rounded-full border border-[#B32526]/10" />
      <div className="pointer-events-none absolute -right-20 -top-16 h-[340px] w-[340px] rounded-full border border-[#B32526]/10" />

      <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-24 sm:px-10 sm:pb-28 sm:pt-32 lg:px-16">
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 25,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <SectionLabel>Say Bonjour · Get in touch</SectionLabel>

          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(3.4rem,7vw,7rem)] leading-[0.98] tracking-[-0.045em] text-[#292624]">
            Every meaningful connection begins with a{" "}
            <span className="text-[#B32526]">hello.</span>
          </h1>

          <div className="mt-8 flex max-w-2xl gap-4">
            <span className="mt-2 h-12 w-px shrink-0 bg-[#A58B64]" />

            <p className="text-base leading-8 text-[#514A45] sm:text-lg sm:leading-9">
              Have a question about our programs? Looking to collaborate?
              Or simply curious about where a new language could take you?
              We&apos;d love to hear from you.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="#inquiry"
              className="group inline-flex min-h-14 items-center gap-3 bg-[#B32526] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#781E24]"
            >
              Start a Conversation
              <IconArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="#contact-details"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#292624] transition-colors hover:text-[#B32526]"
            >
              Explore contact details
              <IconArrowDown size={17} />
            </Link>
          </div>
        </motion.div>

        <div className="mt-20 flex items-center justify-between border-t border-[#D9CFC2] pt-6">
          <p className="font-[family-name:var(--font-heading)] text-lg text-[#81766C]">
            A conversation can open a new world.
          </p>

          <IconMessageCircle
            size={27}
            stroke={1}
            className="text-[#B32526]"
          />
        </div>
      </div>
    </section>
  );
}


"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  IconArrowUpRight,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "FAQs", href: "/#faqs" },
];

const INSTAGRAM_URL = ""; // Add official Instagram URL
const LINKEDIN_URL = ""; // Add official LinkedIn URL

const ease = [0.22, 1, 0.36, 1] as const;

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const reveal = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const viewport = {
    once: true,
    amount: 0.2,
  };

  return (
    <footer className="relative overflow-hidden bg-[#292624] text-[#F8F5EF]">
      {/* Decorative background */}
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
        whileInView={
          shouldReduceMotion
            ? undefined
            : { opacity: 1, scale: 1 }
        }
        viewport={viewport}
        transition={{ duration: 1.6, ease }}
        className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full border border-[#B32526]/20"
      />

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
        whileInView={
          shouldReduceMotion
            ? undefined
            : { opacity: 1, scale: 1 }
        }
        viewport={viewport}
        transition={{ duration: 1.4, delay: 0.15, ease }}
        className="pointer-events-none absolute -right-24 top-16 h-[320px] w-[320px] rounded-full border border-[#B32526]/15"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Brand */}
        <motion.div
          variants={stagger}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={viewport}
          className="flex items-center justify-between border-b border-white/10 py-8"
        >
          <motion.div variants={reveal}>
            <Link href="/" className="flex items-center gap-3">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { rotate: -5, scale: 1.05 }}
                transition={{ duration: 0.4, ease }}
              >
                <Image
                  src="/logo.png"
                  alt="The Language Landscapes"
                  width={54}
                  height={54}
                  className="h-12 w-12 object-contain"
                />
              </motion.div>

              <span className="font-serif text-xl leading-none">
                The Language
                <br />
                Landscapes
              </span>
            </Link>
          </motion.div>

          <motion.span
            variants={reveal}
            className="hidden text-[10px] tracking-[0.25em] text-[#B9AFA4] md:block"
          >
            LANGUAGE · CULTURE · CONNECTION
          </motion.span>
        </motion.div>

        {/* Main statement */}
        <div className="grid gap-12 py-20 md:grid-cols-[1.5fr_1fr] md:py-28">
          <motion.div
            variants={stagger}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={viewport}
            className="max-w-2xl"
          >
            <motion.p
              variants={reveal}
              className="mb-7 text-[11px] tracking-[0.25em] text-[#B9AFA4] uppercase"
            >
              A world of expression
            </motion.p>

            <motion.h2
              variants={reveal}
              className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-[88px]"
            >
              Step in curious.
              <br />
              <motion.span
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 24 }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 1, y: 0 }
                }
                viewport={viewport}
                transition={{ duration: 1, delay: 0.2, ease }}
                className="inline-block text-[#D9C6A5] italic"
              >
                Step out multilingual.
              </motion.span>
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mt-8 max-w-md text-sm leading-7 text-[#B9AFA4] md:text-base"
            >
              Explore languages, discover cultures and find
              new ways to express yourself. Your journey
              begins with a single word.
            </motion.p>

            <motion.div variants={reveal}>
              <Link
                href="/#contact"
                className="group mt-9 inline-flex items-center gap-4 border-b border-[#B32526] pb-2 text-sm transition-colors hover:text-[#D9C6A5]"
              >
                Let's start a conversation
                <motion.span
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { x: 0, y: 0 }
                  }
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { x: 4, y: -4 }
                  }
                  transition={{ duration: 0.3, ease }}
                >
                  <IconArrowUpRight size={19} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            variants={stagger}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={viewport}
            className="grid grid-cols-2 gap-8 md:pl-12"
          >
            <motion.div variants={reveal}>
              <h3 className="mb-7 text-[11px] tracking-[0.2em] text-[#D9C6A5] uppercase">
                Explore
              </h3>

              <ul className="space-y-5">
                {navigation.map((item) => (
                  <motion.li key={item.label} variants={reveal}>
                    <Link
                      href={item.href}
                      className="inline-block text-sm text-[#B9AFA4] transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={reveal}>
              <h3 className="mb-7 text-[11px] tracking-[0.2em] text-[#D9C6A5] uppercase">
                Connect
              </h3>

              <ul className="space-y-5">
                <motion.li variants={reveal}>
                  <a
                    href="mailto:connect@thelanguagefoundation.com"
                    className="flex items-start gap-2 text-sm leading-6 text-[#B9AFA4] transition-colors hover:text-white"
                  >
                    <IconMail size={17} stroke={1.5} className="mt-1 shrink-0" />
                    <span className="break-all">
                      connect@thelanguagefoundation.com
                    </span>
                  </a>
                </motion.li>

                <motion.li variants={reveal}>
                  <a
                    href="https://wa.me/916353145434"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-[#B9AFA4] transition-colors hover:text-white"
                  >
                    <IconBrandWhatsapp size={17} stroke={1.5} />
                    +91 6353 145 434
                  </a>
                </motion.li>

                <motion.li variants={reveal}>
                  <a
                    href="https://wa.me/3673800601"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-[#B9AFA4] transition-colors hover:text-white"
                  >
                    <IconBrandWhatsapp size={17} stroke={1.5} />
                    +367-380-0601
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Social section */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col justify-between gap-5 border-t border-white/10 py-8 md:flex-row md:items-center"
        >
          <div>
            <p className="text-[10px] tracking-[0.2em] text-[#B9AFA4] uppercase">
              Follow our journey
            </p>
            <p className="mt-2 font-serif text-xl text-[#F8F5EF]">
              Stories without borders.
            </p>
          </div>

          <div className="flex items-center gap-5">
            {INSTAGRAM_URL && (
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="text-[#B9AFA4] transition-colors hover:text-white"
              >
                <IconBrandInstagram size={22} stroke={1.5} />
              </motion.a>
            )}

            {LINKEDIN_URL && (
              <motion.a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="text-[#B9AFA4] transition-colors hover:text-white"
              >
                <IconBrandLinkedin size={22} stroke={1.5} />
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col justify-between gap-4 border-t border-white/10 py-7 text-[11px] text-[#81766C] md:flex-row md:items-center"
        >
          <p>
            © {year ?? 2026} The Language Landscape.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>

          <p className="font-serif text-sm italic text-[#D9C6A5]">
            Made for the love of language.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}


"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "FAQs", href: "/#faqs" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Keep the year client-derived so prerendering and hydration stay deterministic.
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
    amount: 0.15,
  };

  return (
    <footer className="bg-[#F8F5EF] text-[#514A45]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <motion.div
          variants={stagger}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={viewport}
          className="grid gap-8 border-t border-[#292624]/10 py-9 md:grid-cols-[1.35fr_1fr_1fr_1.15fr] md:gap-0"
        >
          <motion.div variants={reveal} className="md:pr-10">
            <Link href="/" className="group inline-flex items-center gap-3">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { rotate: -5, scale: 1.05 }}
                transition={{ duration: 0.4, ease }}
              >
                <Image
                  src="/logo.png"
                  alt="The Language Landscapes"
                  width={42}
                  height={42}
                  className="h-14 w-14 object-contain"
                />
              </motion.div>

              <span className="font-body text-[19px] font-bold leading-tight tracking-[-0.04em] text-[#292624]">
                The Language<br />
                <span className="text-[13px] font-semibold tracking-[0.22em] text-[#A32429]">
                  LANDSCAPE
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-[310px] text-sm leading-6 text-[#6F6963]">
              A space where languages, cultures and people come together.
              Discover the confidence to communicate with the world.
            </p>
            <div className="mt-5 flex gap-3">
              {[IconBrandInstagram, IconBrandFacebook, IconBrandLinkedin].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={["Instagram", "Facebook", "LinkedIn"][index]}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#292624]/10 text-[#514A45] transition-colors hover:border-[#A32429] hover:text-[#A32429]"
                  >
                    <Icon size={17} stroke={1.6} />
                  </a>
                ),
              )}
            </div>
          </motion.div>

          <motion.div variants={reveal} className="border-[#292624]/10 md:border-l md:px-10">
            <h2 className="mb-5 text-[11px] font-bold tracking-[0.2em] text-[#A32429] uppercase">
              Explore
            </h2>
            <ul className="space-y-3 text-[15px] text-[#6F6963]">
              {[
                ...navigation.slice(0, 2),
                { label: "Our programs", href: "/#programs" },
                { label: "Our approach", href: "/#approach" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-[#A32429]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={reveal} className="border-[#292624]/10 md:border-l md:px-10">
            <h2 className="mb-5 text-[11px] font-bold tracking-[0.2em] text-[#A32429] uppercase">
              Our programs
            </h2>
            <ul className="space-y-3 text-[15px] text-[#6F6963]">
              {["French Language", "TEF & TCF Preparation", "DELF Preparation", "Kids Programs", "Corporate Training", "Teacher Training"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={reveal} className="border-[#292624]/10 md:border-l md:pl-10">
            <h2 className="mb-5 text-[11px] font-bold tracking-[0.2em] text-[#A32429] uppercase">
              Get in touch
            </h2>
            <div className="space-y-4 text-[15px] leading-6 text-[#6F6963]">
              <a
                href="mailto:connect@thelanguagefoundation.com"
                className="flex items-start gap-4 transition-colors hover:text-[#A32429]"
              >
                <IconMail size={18} stroke={1.5} className="mt-1 shrink-0" />
                <span>Write to us</span>
              </a>
              <a
                href="https://wa.me/916353145434"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 transition-colors hover:text-[#A32429]"
              >
                <IconPhone size={18} stroke={1.5} className="mt-1 shrink-0" />
                <span>Call us</span>
              </a>
              <a
                href="#contact"
                className="flex items-start gap-4 transition-colors hover:text-[#A32429]"
              >
                <IconMapPin size={18} stroke={1.5} className="mt-1 shrink-0" />
                <span>
                  Visit The Language Landscape
                  <br />
                  Contact us for our location.
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col justify-between gap-3 border-t border-[#292624]/10 py-5 text-[11px] tracking-[0.1em] text-[#81766C] sm:flex-row sm:items-center"
        >
          <p>© {year ?? 2026} The Language Landscape. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            <Link href="/privacy-policy" className="transition-colors hover:text-[#A32429]">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-[#A32429]">
              Terms & Conditions
            </Link>
            <p className="font-serif text-base italic tracking-normal text-[#A32429]">
              A world beyond words.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

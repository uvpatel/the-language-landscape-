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

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "FAQs", href: "/#faqs" },
];

const INSTAGRAM_URL = ""; // Add official Instagram URL
const LINKEDIN_URL = "";  // Add official LinkedIn URL

export function Footer() {
     const [year, setYear] = useState<number | null>(null);

     useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[#292624] text-[#F8F5EF]">

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full border border-[#B32526]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 h-[320px] w-[320px] rounded-full border border-[#B32526]/15"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">

        {/* Brand */}
        <div className="flex items-center justify-between border-b border-white/10 py-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="The Language Landscapes"
              width={54}
              height={54}
              className="h-12 w-12 object-contain"
            />
            <span className="font-serif text-xl leading-none">
              The Language
              <br />
              Landscapes
            </span>
          </Link>

          <span className="hidden text-[10px] tracking-[0.25em] text-[#B9AFA4] md:block">
            LANGUAGE · CULTURE · CONNECTION
          </span>
        </div>

        {/* Main statement */}
        <div className="grid gap-12 py-20 md:grid-cols-[1.5fr_1fr] md:py-28">

          <div className="max-w-2xl">
            <p className="mb-7 text-[11px] tracking-[0.25em] text-[#B9AFA4] uppercase">
              A world of expression
            </p>

            <h2 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-[88px]">
              Step in curious.
              <br />
              <span className="text-[#D9C6A5] italic">
                Step out multilingual.
              </span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-[#B9AFA4] md:text-base">
              Explore languages, discover cultures and find
              new ways to express yourself. Your journey
              begins with a single word.
            </p>

            <Link
              href="/#contact"
              className="group mt-9 inline-flex items-center gap-4 border-b border-[#B32526] pb-2 text-sm transition-colors hover:text-[#D9C6A5]"
            >
              Let's start a conversation
              <IconArrowUpRight
                size={19}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 md:pl-12">
            <div>
              <h3 className="mb-7 text-[11px] tracking-[0.2em] text-[#D9C6A5] uppercase">
                Explore
              </h3>

              <ul className="space-y-5">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#B9AFA4] transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-7 text-[11px] tracking-[0.2em] text-[#D9C6A5] uppercase">
                Connect
              </h3>

              <ul className="space-y-5">
                <li>
                  <a
                    href="mailto:connect@thelanguagefoundation.com"
                    className="flex items-start gap-2 text-sm leading-6 text-[#B9AFA4] transition-colors hover:text-white"
                  >
                    <IconMail size={17} stroke={1.5} className="mt-1 shrink-0" />
                    <span className="break-all">
                      connect@thelanguagefoundation.com
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/916353145434"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-[#B9AFA4] transition-colors hover:text-white"
                  >
                    <IconBrandWhatsapp size={17} stroke={1.5} />
                    +91 6353 145 434
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/3673800601"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-[#B9AFA4] transition-colors hover:text-white"
                  >
                    <IconBrandWhatsapp size={17} stroke={1.5} />
                    +367-380-0601
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social section */}
        <div className="flex flex-col justify-between gap-5 border-t border-white/10 py-8 md:flex-row md:items-center">
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
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-[#B9AFA4] transition-colors hover:text-white"
              >
                <IconBrandInstagram size={22} stroke={1.5} />
              </a>
            )}

            {LINKEDIN_URL && (
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-[#B9AFA4] transition-colors hover:text-white"
              >
                <IconBrandLinkedin size={22} stroke={1.5} />
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-7 text-[11px] text-[#81766C] md:flex-row md:items-center">
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
        </div>
      </div>
    </footer>
  );
}

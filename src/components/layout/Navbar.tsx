
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowUpRight,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Our Approach", href: "/approach" },
  { label: "Tête-à-tête", href: "/tete-a-tete" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#292624]/10 bg-[#F8F5EF]/95 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label="The Language Landscapes home"
        >
          <Image
            src="/logo.png"
            alt="The Language Landscapes logo"
            width={52}
            height={52}
            priority
            className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105 md:h-[52px] md:w-[52px]"
          />

          <span className="font-serif text-[19px] leading-[0.95] tracking-[-0.6px] text-[#292624] md:text-[21px]">
            The Language
            <br />
            Landscapes
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative py-2 text-[13px] font-medium tracking-wide text-[#514A45] transition-colors duration-300 hover:text-[#B32526]"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#B32526] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-sm bg-[#B32526] px-5 py-3 text-[13px] font-medium text-white transition-all duration-300 hover:bg-[#781E24]"
          >
            Start your journey
            <IconArrowUpRight
              size={16}
              stroke={1.8}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center text-[#292624] transition-colors hover:text-[#B32526] lg:hidden"
        >
          {isOpen ? (
            <IconX size={25} stroke={1.5} />
          ) : (
            <IconMenu2 size={25} stroke={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="border-t border-[#292624]/10 bg-[#F8F5EF] px-6 pb-7 pt-4">
            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between border-b border-[#292624]/10 py-4 font-serif text-xl text-[#292624] transition-colors hover:text-[#B32526]"
                >
                  <span>{link.label}</span>
                  <span className="text-sm text-[#B32526]">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 flex w-full items-center justify-center gap-2 bg-[#B32526] px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-[#781E24]"
            >
              Start your journey
              <IconArrowUpRight size={18} />
            </Link>

            <p className="mt-6 text-center text-[10px] tracking-[0.2em] text-[#81766C]">
              LANGUAGE · CULTURE · CONNECTION
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import {
  IconArrowUpRight,
  IconBookmark,
  IconDatabase,
  IconShieldLock,
  IconUserCheck,
} from "@tabler/icons-react";
import { LegalBookPage } from "./legal-book-page";
import {
  termsAndConditions,
  privacyPolicy,
  privacyEffectiveDate,
} from "@/lib/legal/data";

export function LegalBook() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const [currentSpread, setCurrentSpread] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [mobilePageMode, setMobilePageMode] = useState<"left" | "right">("left");

  const shouldReduceMotion = useReducedMotion();
  const totalSpreads = 8;

  // Native Scroll-Driven Progress Tracking
  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll progress across the runway to current spread
    const rawSpread = Math.floor(latest * totalSpreads);
    const targetSpread = Math.min(totalSpreads - 1, Math.max(0, rawSpread));

    if (targetSpread !== currentSpread) {
      setDirection(targetSpread > currentSpread ? 1 : -1);
      setCurrentSpread(targetSpread);
    }

    // On mobile screens, automatically advance between Left and Right page
    const subProgress = (latest * totalSpreads) % 1;
    setMobilePageMode(subProgress < 0.5 ? "left" : "right");
  });

  // Keyboard navigation through scroll runway
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;
      if (!runwayRef.current) return;

      const spreadDistance = runwayRef.current.offsetHeight / totalSpreads;

      if (e.key === "ArrowRight" || e.key === "PageDown") {
        window.scrollBy({ top: spreadDistance, behavior: "smooth" });
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        window.scrollBy({ top: -spreadDistance, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSpreads]);

  return (
    <div
      ref={runwayRef}
      id="legal-book-runway"
      className="relative w-full h-[520vh] bg-[#F7F5F0]"
    >
      {/* Anchor targets positioned along the scroll runway for Navbar / Hero jumps */}
      <div id="terms-and-conditions" className="absolute top-[13%] -scroll-mt-10" />
      <div id="privacy-policy" className="absolute top-[51%] -scroll-mt-10" />

      {/* Sticky Book Container - Perfectly Centered in Reading Section */}
      <div className="sticky top-20 lg:top-[82px] flex h-[calc(100vh-5rem)] lg:h-[calc(100vh-82px)] w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Book Outer Presentation Canvas */}
        <div className="relative mx-auto w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:w-[92vw] lg:max-w-[1500px] xl:w-[88vw] xl:max-w-[1500px]">
          {/* Soft ground ambient shadow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 lg:-bottom-10 inset-x-6 sm:inset-x-12 lg:inset-x-16 h-10 -z-10 rounded-full bg-[#292724]/15 blur-2xl"
          />

          {/* Hardcover bottom outer casing base */}
          <div
            aria-hidden="true"
            className="absolute -bottom-6 lg:-bottom-7 inset-x-5 sm:inset-x-8 lg:inset-x-10 h-3 rounded-b-sm border-x border-b border-[#292724]/20 bg-[#292724]/90 shadow-md"
          />

          {/* Paper stack leaf layer 2 (deep pages) */}
          <div
            aria-hidden="true"
            className="absolute -bottom-4 lg:-bottom-4.5 inset-x-3.5 sm:inset-x-5 lg:inset-x-7 h-3 rounded-b-sm border-x border-b border-[#292724]/15 bg-gradient-to-b from-[#EAE2D4] to-[#DFD5C4] shadow-xs"
          />

          {/* Paper stack leaf layer 1 (upper pages immediately beneath the opening) */}
          <div
            aria-hidden="true"
            className="absolute -bottom-2 lg:-bottom-2.5 inset-x-2 sm:inset-x-3 lg:inset-x-4 h-2.5 rounded-b-sm border-x border-b border-[#292724]/20 bg-gradient-to-b from-[#F4EFE6] to-[#EAE3D6] shadow-xs"
          />

          {/* The Open Hardcover Book Shell */}
          <div className="relative w-full h-[68vh] min-h-[500px] max-h-[620px] lg:h-[76vh] lg:min-h-[650px] lg:max-h-[800px] xl:h-[80vh] xl:min-h-[650px] xl:max-h-[800px] overflow-hidden rounded-sm border border-[#292724]/20 bg-[#FFFFFF] shadow-[0_25px_60px_-15px_rgba(41,39,36,0.18),0_12px_24px_-8px_rgba(41,39,36,0.08)]">
            {/* Central Book Spine Crease & Shadow Gutter (Desktop only) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-1/2 z-30 hidden w-14 xl:w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/[0.14] to-transparent lg:block"
            />

            {/* Central Vertical Spine Line & Seam */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-1/2 z-30 hidden w-px -translate-x-1/2 bg-[#292724]/30 shadow-[0_0_8px_rgba(0,0,0,0.15)] lg:block"
            />

            {/* Central Spine Groove Stitching Accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-1/2 z-30 hidden w-1.5 -translate-x-1/2 bg-gradient-to-r from-black/[0.08] via-transparent to-black/[0.08] lg:block"
            />

            {/* Animated 3D Spread Container */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSpread}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        rotateY: direction > 0 ? 10 : -10,
                        scale: 0.99,
                      }
                }
                animate={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, rotateY: 0, scale: 1 }
                }
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        rotateY: direction > 0 ? -10 : 10,
                        scale: 0.99,
                      }
                }
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                className="grid h-full w-full lg:grid-cols-2"
              >
                {/* ================= SPREAD 0: HARDCOVER COVER ================= */}
                {currentSpread === 0 && (
                  <>
                    <div
                      className={`h-full ${
                        mobilePageMode === "right" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage side="left" isCover>
                        <div className="flex h-full flex-col justify-between border border-[#292724]/10 bg-[#FDFCFA] p-8 sm:p-10 lg:p-12 xl:p-14">
                          <div>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
                              ACADEMIC REPOSITORY
                            </span>
                            <h3 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-medium text-[#292724]">
                              The Language Landscapes
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-[#514A45]">
                              Official governance, student agreements, and digital
                              privacy provisions for language learners
                              internationally.
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-6">
                            <p className="text-[11px] font-mono uppercase tracking-wider text-[#8A2424]">
                              FIRST DIGITAL EDITION / 2026
                            </p>
                            <p className="mt-1 text-[11px] text-[#81766C]">
                              Enforceable across India, Canada, and global
                              operations.
                            </p>
                          </div>
                        </div>
                      </LegalBookPage>
                    </div>

                    <div
                      className={`h-full ${
                        mobilePageMode === "left" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage side="right" isCover>
                        <div className="flex h-full flex-col justify-between border-2 border-[#8A2424]/30 bg-[#FFFFFF] p-8 sm:p-12 lg:p-14 xl:p-16 shadow-xs">
                          <div>
                            <div className="flex items-center gap-2">
                              <IconBookmark
                                size={18}
                                className="text-[#8A2424]"
                              />
                              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A2424]">
                                LEGAL DOCUMENTATION / 2026
                              </span>
                            </div>

                            <h2 className="mt-8 font-[family-name:var(--font-heading)] text-4xl font-medium leading-[1.1] text-[#292724] sm:text-5xl lg:text-6xl">
                              Legal &amp; Policies
                            </h2>

                            <div className="my-6 h-0.5 w-12 bg-[#8A2424]" />

                            <p className="text-sm leading-relaxed text-[#514A45] sm:text-base">
                              Terms, privacy, and the principles that guide our
                              relationship with every language learner.
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-6">
                            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A2424]">
                              <span>Scroll down to open Chapter One</span>
                              <span className="animate-bounce">↓</span>
                            </span>
                          </div>
                        </div>
                      </LegalBookPage>
                    </div>
                  </>
                )}

                {/* ================= SPREAD 1: CHAPTER 01 OPENING & CLAUSES 1-2 ================= */}
                {currentSpread === 1 && (
                  <>
                    <div
                      className={`h-full ${
                        mobilePageMode === "right" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage
                        pageNumber={1}
                        runningHeader="CHAPTER 01 / TERMS OF SERVICE"
                        side="left"
                      >
                        <div className="space-y-6">
                          <div>
                            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A2424]">
                              CHAPTER 01
                            </span>
                            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-medium text-[#292724] sm:text-4xl">
                              Terms &amp; Conditions
                            </h2>
                            <p className="mt-2 text-xs leading-relaxed text-[#514A45]">
                              The agreement governing your use of The Language
                              Landscapes services.
                            </p>
                          </div>

                          <div className="border-l-2 border-[#8A2424] bg-[#F7F5F0] p-5">
                            <p className="text-[13px] leading-relaxed text-[#292724]">
                              Welcome to The Language Landscapes Inc. (TLL). By
                              accessing our website, enrolling in our courses or
                              using our services, you agree to comply with and be
                              bound by the following Terms &amp; Conditions. If
                              you do not agree, kindly refrain from using our
                              services.
                            </p>
                          </div>

                          <div className="pt-2">
                            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#81766C]">
                              Part One: Scope &amp; Access
                            </span>
                            <p className="mt-1 text-xs text-[#81766C]">
                              Clauses 01 &amp; 02 on opposing page establish
                              operational scope and digital use standards.
                            </p>
                          </div>
                        </div>
                      </LegalBookPage>
                    </div>

                    <div
                      className={`h-full ${
                        mobilePageMode === "left" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage
                        pageNumber={2}
                        runningHeader="TERMS &amp; CONDITIONS"
                        side="right"
                      >
                        <div className="space-y-7">
                          <div>
                            <span className="font-mono text-xs font-semibold text-[#8A2424]">
                              01
                            </span>
                            <h3 className="mt-1 font-[family-name:var(--font-heading)] text-xl font-medium text-[#292724]">
                              {termsAndConditions[0].title}
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-[#514A45] sm:text-[13px]">
                              {termsAndConditions[0].paragraphs[0]}
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-5">
                            <span className="font-mono text-xs font-semibold text-[#8A2424]">
                              02
                            </span>
                            <h3 className="mt-1 font-[family-name:var(--font-heading)] text-xl font-medium text-[#292724]">
                              {termsAndConditions[1].title}
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-[#514A45] sm:text-[13px]">
                              {termsAndConditions[1].paragraphs[0]}
                            </p>
                          </div>
                        </div>
                      </LegalBookPage>
                    </div>
                  </>
                )}

                {/* ================= SPREAD 2: TERMS CLAUSES 3, 4, 5, 6 ================= */}
                {currentSpread === 2 && (
                  <>
                    <div
                      className={`h-full ${
                        mobilePageMode === "right" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage
                        pageNumber={3}
                        runningHeader="TERMS &amp; CONDITIONS"
                        side="left"
                      >
                        <div className="space-y-7">
                          <div>
                            <span className="font-mono text-xs font-semibold text-[#8A2424]">
                              03
                            </span>
                            <h3 className="mt-1 font-[family-name:var(--font-heading)] text-xl font-medium text-[#292724]">
                              {termsAndConditions[2].title}
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-[#514A45] sm:text-[13px]">
                              {termsAndConditions[2].paragraphs[0]}
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-5">
                            <span className="font-mono text-xs font-semibold text-[#8A2424]">
                              04
                            </span>
                            <h3 className="mt-1 font-[family-name:var(--font-heading)] text-xl font-medium text-[#292724]">
                              {termsAndConditions[3].title}
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-[#514A45] sm:text-[13px]">
                              {termsAndConditions[3].paragraphs[0]}
                            </p>
                          </div>
                        </div>
                      </LegalBookPage>
                    </div>

                    <div
                      className={`h-full ${
                        mobilePageMode === "left" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage
                        pageNumber={4}
                        runningHeader="TERMS &amp; CONDITIONS"
                        side="right"
                      >
                        <div className="space-y-7">
                          <div>
                            <span className="font-mono text-xs font-semibold text-[#8A2424]">
                              05
                            </span>
                            <h3 className="mt-1 font-[family-name:var(--font-heading)] text-xl font-medium text-[#292724]">
                              {termsAndConditions[4].title}
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-[#514A45] sm:text-[13px]">
                              {termsAndConditions[4].paragraphs[0]}
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-5">
                            <span className="font-mono text-xs font-semibold text-[#8A2424]">
                              06
                            </span>
                            <h3 className="mt-1 font-[family-name:var(--font-heading)] text-xl font-medium text-[#292724]">
                              {termsAndConditions[5].title}
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-[#514A45] sm:text-[13px]">
                              {termsAndConditions[5].paragraphs[0]}
                            </p>
                          </div>
                        </div>
                      </LegalBookPage>
                    </div>
                  </>
                )}

                {/* ================= SPREAD 3: TERMS CLAUSES 7, 8, 9, 10, 11, 12 ================= */}
                {currentSpread === 3 && (
                  <>
                    <div
                      className={`h-full ${
                        mobilePageMode === "right" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage
                        pageNumber={5}
                        runningHeader="TERMS &amp; CONDITIONS"
                        side="left"
                      >
                        <div className="space-y-6">
                          <div>
                            <span className="font-mono text-xs font-semibold text-[#8A2424]">
                              07
                            </span>
                            <h3 className="mt-1 font-[family-name:var(--font-heading)] text-xl font-medium text-[#292724]">
                              {termsAndConditions[6].title}
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-[#514A45] sm:text-[13px]">
                              {termsAndConditions[6].paragraphs[0]}
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-5">
                            <span className="font-mono text-xs font-semibold text-[#8A2424]">
                              08
                            </span>
                            <h3 className="mt-1 font-[family-name:var(--font-heading)] text-xl font-medium text-[#292724]">
                              {termsAndConditions[7].title}
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-[#514A45] sm:text-[13px]">
                              {termsAndConditions[7].paragraphs[0]}
                            </p>
                          </div>
                        </div>
                      </LegalBookPage>
                    </div>

                    <div
                      className={`h-full ${
                        mobilePageMode === "left" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage
                        pageNumber={6}
                        runningHeader="TERMS &amp; CONDITIONS"
                        side="right"
                      >
                        <div className="space-y-4">
                          <div>
                            <span className="font-mono text-[11px] font-semibold text-[#8A2424]">
                              09
                            </span>
                            <h3 className="font-[family-name:var(--font-heading)] text-base font-medium text-[#292724]">
                              {termsAndConditions[8].title}
                            </h3>
                            <p className="mt-1 text-[12px] leading-relaxed text-[#514A45]">
                              {termsAndConditions[8].paragraphs[0]}
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-3">
                            <span className="font-mono text-[11px] font-semibold text-[#8A2424]">
                              10
                            </span>
                            <h3 className="font-[family-name:var(--font-heading)] text-base font-medium text-[#292724]">
                              {termsAndConditions[9].title}
                            </h3>
                            <p className="mt-1 text-[12px] leading-relaxed text-[#514A45]">
                              {termsAndConditions[9].paragraphs[0]}
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-3">
                            <span className="font-mono text-[11px] font-semibold text-[#8A2424]">
                              11
                            </span>
                            <h3 className="font-[family-name:var(--font-heading)] text-base font-medium text-[#292724]">
                              {termsAndConditions[10].title}
                            </h3>
                            <p className="mt-1 text-[12px] leading-relaxed text-[#514A45]">
                              {termsAndConditions[10].paragraphs[0]}
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-3">
                            <span className="font-mono text-[11px] font-semibold text-[#8A2424]">
                              12
                            </span>
                            <h3 className="font-[family-name:var(--font-heading)] text-base font-medium text-[#292724]">
                              {termsAndConditions[11].title}
                            </h3>
                            <p className="mt-1 text-[12px] leading-relaxed text-[#514A45]">
                              {termsAndConditions[11].paragraphs[0]}
                            </p>
                          </div>
                        </div>
                      </LegalBookPage>
                    </div>
                  </>
                )}

                {/* ================= SPREAD 4: CHAPTER 02 PRIVACY OPENING & CLAUSE 1 ================= */}
                {currentSpread === 4 && (
                  <>
                    <div
                      className={`h-full ${
                        mobilePageMode === "right" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage
                        pageNumber={7}
                        runningHeader="CHAPTER 02 / DATA &amp; PRIVACY"
                        side="left"
                      >
                        <div className="space-y-6">
                          <div>
                            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A2424]">
                              CHAPTER 02
                            </span>
                            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-medium text-[#292724] sm:text-4xl">
                              Privacy Policy
                            </h2>
                            <p className="mt-1 text-xs text-[#81766C]">
                              Your information. Your privacy. Our responsibility.
                            </p>
                            <p className="mt-1 font-mono text-[11px] font-semibold text-[#8A2424]">
                              Effective Date: {privacyEffectiveDate}
                            </p>
                          </div>

                          <div className="border-l-2 border-[#8A2424] bg-[#F7F5F0] p-4">
                            <p className="text-[12px] leading-relaxed text-[#292724]">
                              At The Language Landscapes Inc. (TLL), we believe
                              trust is earned, not assumed. Your personal
                              information is treated with care, respect and
                              responsibility. This Privacy Policy explains how we
                              collect, use and protect your data when you interact
                              with our website and services.
                            </p>
                          </div>

                          {/* Privacy Highlights */}
                          <div className="grid grid-cols-3 gap-2 border-t border-[#292724]/10 pt-4">
                            <div className="border border-[#292724]/10 bg-[#FFFFFF] p-2.5">
                              <IconDatabase
                                size={15}
                                className="text-[#8A2424]"
                              />
                              <p className="mt-1 text-[10px] font-bold text-[#292724]">
                                01. Collection
                              </p>
                              <p className="text-[9px] text-[#81766C]">
                                Academic &amp; learner data
                              </p>
                            </div>
                            <div className="border border-[#292724]/10 bg-[#FFFFFF] p-2.5">
                              <IconShieldLock
                                size={15}
                                className="text-[#8A2424]"
                              />
                              <p className="mt-1 text-[10px] font-bold text-[#292724]">
                                02. Security
                              </p>
                              <p className="text-[9px] text-[#81766C]">
                                TLS &amp; cross-border
                              </p>
                            </div>
                            <div className="border border-[#292724]/10 bg-[#FFFFFF] p-2.5">
                              <IconUserCheck
                                size={15}
                                className="text-[#8A2424]"
                              />
                              <p className="mt-1 text-[10px] font-bold text-[#292724]">
                                03. Rights
                              </p>
                              <p className="text-[9px] text-[#81766C]">
                                Access &amp; deletion
                              </p>
                            </div>
                          </div>
                        </div>
                      </LegalBookPage>
                    </div>

                    <div
                      className={`h-full ${
                        mobilePageMode === "left" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage
                        pageNumber={8}
                        runningHeader="PRIVACY POLICY"
                        side="right"
                      >
                        <div>
                          <span className="font-mono text-xs font-semibold text-[#8A2424]">
                            01
                          </span>
                          <h3 className="mt-1 font-[family-name:var(--font-heading)] text-xl font-medium text-[#292724]">
                            {privacyPolicy[0].title}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-[#514A45]">
                            {privacyPolicy[0].paragraphs[0]}
                          </p>

                          {privacyPolicy[0].list && (
                            <ul className="mt-3 space-y-2 pl-4 text-xs leading-relaxed text-[#514A45]">
                              {privacyPolicy[0].list.map((item, idx) => (
                                <li key={idx} className="list-disc pl-1">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </LegalBookPage>
                    </div>
                  </>
                )}

                {/* ================= SPREAD 5: PRIVACY CLAUSES 2, 3, 4, 5, 6 ================= */}
                {currentSpread === 5 && (
                  <>
                    <div
                      className={`h-full ${
                        mobilePageMode === "right" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage
                        pageNumber={9}
                        runningHeader="PRIVACY POLICY"
                        side="left"
                      >
                        <div className="space-y-6">
                          <div>
                            <span className="font-mono text-xs font-semibold text-[#8A2424]">
                              02
                            </span>
                            <h3 className="mt-1 font-[family-name:var(--font-heading)] text-lg font-medium text-[#292724]">
                              {privacyPolicy[1].title}
                            </h3>
                            <p className="mt-1 text-[11px] leading-relaxed text-[#514A45]">
                              {privacyPolicy[1].paragraphs[0]}
                            </p>
                            {privacyPolicy[1].list && (
                              <ul className="mt-2 space-y-1 pl-4 text-[11px] leading-relaxed text-[#514A45]">
                                {privacyPolicy[1].list.map((item, idx) => (
                                  <li key={idx} className="list-disc pl-1">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>

                          <div className="border-t border-[#292724]/10 pt-4">
                            <span className="font-mono text-xs font-semibold text-[#8A2424]">
                              03
                            </span>
                            <h3 className="mt-1 font-[family-name:var(--font-heading)] text-lg font-medium text-[#292724]">
                              {privacyPolicy[2].title}
                            </h3>
                            <p className="mt-1 text-[11px] leading-relaxed text-[#514A45]">
                              {privacyPolicy[2].paragraphs[0]}
                            </p>
                            {privacyPolicy[2].list && (
                              <ul className="mt-2 space-y-1 pl-4 text-[11px] leading-relaxed text-[#514A45]">
                                {privacyPolicy[2].list.map((item, idx) => (
                                  <li key={idx} className="list-disc pl-1">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </LegalBookPage>
                    </div>

                    <div
                      className={`h-full ${
                        mobilePageMode === "left" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage
                        pageNumber={10}
                        runningHeader="PRIVACY POLICY"
                        side="right"
                      >
                        <div className="space-y-5">
                          <div>
                            <span className="font-mono text-xs font-semibold text-[#8A2424]">
                              04
                            </span>
                            <h3 className="mt-1 font-[family-name:var(--font-heading)] text-base font-medium text-[#292724]">
                              {privacyPolicy[3].title}
                            </h3>
                            <p className="mt-1 text-[12px] leading-relaxed text-[#514A45]">
                              {privacyPolicy[3].paragraphs[0]}
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-4">
                            <span className="font-mono text-xs font-semibold text-[#8A2424]">
                              05
                            </span>
                            <h3 className="mt-1 font-[family-name:var(--font-heading)] text-base font-medium text-[#292724]">
                              {privacyPolicy[4].title}
                            </h3>
                            <p className="mt-1 text-[12px] leading-relaxed text-[#514A45]">
                              {privacyPolicy[4].paragraphs[0]}
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-4">
                            <span className="font-mono text-xs font-semibold text-[#8A2424]">
                              06
                            </span>
                            <h3 className="mt-1 font-[family-name:var(--font-heading)] text-base font-medium text-[#292724]">
                              {privacyPolicy[5].title}
                            </h3>
                            <p className="mt-1 text-[12px] leading-relaxed text-[#514A45]">
                              {privacyPolicy[5].paragraphs[0]}
                            </p>
                          </div>
                        </div>
                      </LegalBookPage>
                    </div>
                  </>
                )}

                {/* ================= SPREAD 6: PRIVACY CLAUSES 7, 8, 9, 10, 11, 12 ================= */}
                {currentSpread === 6 && (
                  <>
                    <div
                      className={`h-full ${
                        mobilePageMode === "right" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage
                        pageNumber={11}
                        runningHeader="PRIVACY POLICY"
                        side="left"
                      >
                        <div className="space-y-5">
                          <div>
                            <span className="font-mono text-xs font-semibold text-[#8A2424]">
                              07
                            </span>
                            <h3 className="mt-1 font-[family-name:var(--font-heading)] text-base font-medium text-[#292724]">
                              {privacyPolicy[6].title}
                            </h3>
                            <p className="mt-1 text-[12px] leading-relaxed text-[#514A45]">
                              {privacyPolicy[6].paragraphs[0]}
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-4">
                            <span className="font-mono text-xs font-semibold text-[#8A2424]">
                              08
                            </span>
                            <h3 className="mt-1 font-[family-name:var(--font-heading)] text-base font-medium text-[#292724]">
                              {privacyPolicy[7].title}
                            </h3>
                            <p className="mt-1 text-[12px] leading-relaxed text-[#514A45]">
                              {privacyPolicy[7].paragraphs[0]}
                            </p>
                            {privacyPolicy[7].list && (
                              <ul className="mt-2 space-y-1 pl-4 text-[11px] leading-relaxed text-[#514A45]">
                                {privacyPolicy[7].list.map((item, idx) => (
                                  <li key={idx} className="list-disc pl-1">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </LegalBookPage>
                    </div>

                    <div
                      className={`h-full ${
                        mobilePageMode === "left" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage
                        pageNumber={12}
                        runningHeader="PRIVACY POLICY"
                        side="right"
                      >
                        <div className="space-y-4">
                          <div>
                            <span className="font-mono text-[11px] font-semibold text-[#8A2424]">
                              09
                            </span>
                            <h3 className="font-[family-name:var(--font-heading)] text-base font-medium text-[#292724]">
                              {privacyPolicy[8].title}
                            </h3>
                            <p className="mt-1 text-[12px] leading-relaxed text-[#514A45]">
                              {privacyPolicy[8].paragraphs[0]}
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-3">
                            <span className="font-mono text-[11px] font-semibold text-[#8A2424]">
                              10
                            </span>
                            <h3 className="font-[family-name:var(--font-heading)] text-base font-medium text-[#292724]">
                              {privacyPolicy[9].title}
                            </h3>
                            <p className="mt-1 text-[12px] leading-relaxed text-[#514A45]">
                              {privacyPolicy[9].paragraphs[0]}
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-3">
                            <span className="font-mono text-[11px] font-semibold text-[#8A2424]">
                              11
                            </span>
                            <h3 className="font-[family-name:var(--font-heading)] text-base font-medium text-[#292724]">
                              {privacyPolicy[10].title}
                            </h3>
                            <p className="mt-1 text-[12px] leading-relaxed text-[#514A45]">
                              {privacyPolicy[10].paragraphs[0]}
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-3">
                            <span className="font-mono text-[11px] font-semibold text-[#8A2424]">
                              12
                            </span>
                            <h3 className="font-[family-name:var(--font-heading)] text-base font-medium text-[#292724]">
                              {privacyPolicy[11].title}
                            </h3>
                            <p className="mt-1 text-[12px] leading-relaxed text-[#514A45]">
                              {privacyPolicy[11].paragraphs[0]}
                            </p>
                          </div>
                        </div>
                      </LegalBookPage>
                    </div>
                  </>
                )}

                {/* ================= SPREAD 7: COLOPHON & CLOSING PAGE ================= */}
                {currentSpread === 7 && (
                  <>
                    <div
                      className={`h-full ${
                        mobilePageMode === "right" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage
                        pageNumber={13}
                        runningHeader="ACADEMIC COLOPHON"
                        side="left"
                      >
                        <div className="flex h-full flex-col justify-between space-y-6">
                          <div>
                            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A2424]">
                              PUBLICATION METADATA
                            </span>
                            <h3 className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-medium text-[#292724]">
                              Academic Colophon
                            </h3>
                            <p className="mt-3 text-xs leading-relaxed text-[#514A45]">
                              This digital publication constitutes the
                              authoritative legal documentation of The Language
                              Landscapes Inc., governing all language training
                              programs, examination preparation, and platform
                              interactions.
                            </p>
                          </div>

                          <div className="space-y-3 border-t border-[#292724]/10 pt-4 text-[11px] text-[#514A45]">
                            <p>
                              <strong className="text-[#292724]">
                                Published By:
                              </strong>{" "}
                              The Language Landscapes Inc.
                            </p>
                            <p>
                              <strong className="text-[#292724]">
                                Governance:
                              </strong>{" "}
                              India &amp; Canada Operations
                            </p>
                            <p>
                              <strong className="text-[#292724]">
                                Official Enquiries:
                              </strong>{" "}
                              connect@thelanguagefoundation.com
                            </p>
                            <p>
                              <strong className="text-[#292724]">
                                Effective Period:
                              </strong>{" "}
                              Academic Year 2026
                            </p>
                          </div>
                        </div>
                      </LegalBookPage>
                    </div>

                    <div
                      className={`h-full ${
                        mobilePageMode === "left" ? "hidden lg:block" : "block"
                      }`}
                    >
                      <LegalBookPage
                        pageNumber={14}
                        runningHeader="THE LANGUAGE LANDSCAPES"
                        side="right"
                      >
                        <div className="flex h-full flex-col justify-between border-2 border-[#8A2424]/30 bg-[#FFFFFF] p-6 sm:p-10 lg:p-12 xl:p-14">
                          <div>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8A2424]">
                              DIRECT SUPPORT
                            </span>

                            <h3 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-medium leading-snug text-[#292724] sm:text-3xl">
                              Questions about our policies?
                            </h3>

                            <p className="mt-3 text-xs leading-relaxed text-[#514A45] sm:text-sm">
                              We&apos;re here to help. If you have questions about
                              our terms or how we handle your personal
                              information, get in touch with our team.
                            </p>
                          </div>

                          <div className="border-t border-[#292724]/10 pt-6">
                            <Link
                              href="/contact"
                              className="group inline-flex items-center gap-2 border border-[#8A2424] bg-[#8A2424] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all hover:bg-[#6E1C1C]"
                            >
                              <span>Contact Us</span>
                              <IconArrowUpRight
                                size={15}
                                className="transition-transform group-hover:translate-x-0.5"
                              />
                            </Link>

                            <p className="mt-4 text-[11px] text-[#81766C]">
                              Email:{" "}
                              <a
                                href="mailto:connect@thelanguagefoundation.com"
                                className="underline hover:text-[#8A2424]"
                              >
                                connect@thelanguagefoundation.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </LegalBookPage>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

       
      </div>
    </div>
  );
}

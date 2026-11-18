"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconArrowDown, IconShieldLock, IconDatabase, IconUserCheck } from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";
import { privacyPolicy, privacyEffectiveDate } from "@/lib/legal/data";
import { DocumentToc } from "./document-toc";

const privacyHighlights = [
  {
    num: "01",
    label: "Information Collection",
    desc: "Personal identification, placement scores, and session logs collected solely for academic delivery.",
    targetId: "pp-clause-1",
    icon: IconDatabase,
  },
  {
    num: "02",
    label: "Data Protection",
    desc: "Standard TLS encryption, restricted access, and cross-border compliance (PIPEDA & DPDPA).",
    targetId: "pp-clause-4",
    icon: IconShieldLock,
  },
  {
    num: "03",
    label: "Your Rights",
    desc: "Direct statutory access, record rectification, consent withdrawal, and deletion requests.",
    targetId: "pp-clause-8",
    icon: IconUserCheck,
  },
];

export function PrivacyPolicy() {
  const [activeClauseId, setActiveClauseId] = useState<string | null>("pp-clause-1");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveClauseId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      },
    );

    privacyPolicy.forEach((_, index) => {
      const el = document.getElementById(`pp-clause-${index + 1}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="privacy-policy"
      aria-labelledby="privacy-heading"
      className="scroll-mt-32 border-t border-[#292724]/10 bg-[#F7F5F0] px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Document Running Header & Identification */}
        <div className="mb-12 border-b border-[#292724]/10 pb-8 sm:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#8A2424]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A2424]">
                DOCUMENT 02 / DATA & PRIVACY
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#81766C]">
              <span>Effective Date:</span>
              <span className="text-[#292724]">{privacyEffectiveDate}</span>
            </div>
          </div>

          <h2
            id="privacy-heading"
            className="mt-5 font-[family-name:var(--font-heading)] text-4xl font-medium tracking-tight text-[#292724] sm:text-5xl lg:text-6xl"
          >
            Privacy Policy
          </h2>

          <p className="mt-3 text-base text-[#514A45] sm:text-lg">
            How The Language Landscapes Inc. handles, protects, and respects your personal data.
          </p>

          {/* Opening Statement */}
          <div className="mt-8 border-l-2 border-[#8A2424] bg-[#FFFFFF] p-6 shadow-[0_2px_12px_rgba(41,39,36,0.02)] sm:p-7">
            <p className="text-[15px] leading-relaxed text-[#292724] sm:text-base">
              At The Language Landscapes Inc. (TLL), we believe trust is earned,
              not assumed. Your personal information is treated with care,
              respect and responsibility. This Privacy Policy explains how we
              collect, use and protect your data when you interact with our
              website and services.
            </p>
          </div>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16 xl:grid-cols-[300px_1fr] xl:gap-20">
          {/* Left Column: Sticky Table of Contents */}
          <aside className="w-full">
            <DocumentToc
              clauses={privacyPolicy}
              prefix="pp"
              activeClauseId={activeClauseId}
            />
          </aside>

          {/* Right Column: Reading Surface */}
          <main className="min-w-0 max-w-[850px]">
            {/* Privacy Highlights Navigation Aids */}
            <div className="mb-12">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#81766C]">
                  Privacy Framework Highlights
                </span>
                <span className="text-xs text-[#81766C]">Quick Access</span>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {privacyHighlights.map((highlight) => {
                  const Icon = highlight.icon;

                  return (
                    <Link
                      key={highlight.targetId}
                      href={`#${highlight.targetId}`}
                      className="group flex flex-col justify-between border border-[#292724]/10 bg-[#FFFFFF] p-5 transition-all duration-200 hover:border-[#8A2424] hover:shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8A2424]"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[#81766C]">
                          <span className="font-mono text-xs font-semibold text-[#8A2424]">
                            {highlight.num}
                          </span>
                          <Icon size={18} stroke={1.5} className="text-[#81766C] group-hover:text-[#8A2424] transition-colors" />
                        </div>

                        <h4 className="mt-3 font-[family-name:var(--font-heading)] text-base font-medium text-[#292724] group-hover:text-[#8A2424] transition-colors">
                          {highlight.label}
                        </h4>

                        <p className="mt-2 text-xs leading-relaxed text-[#514A45]">
                          {highlight.desc}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#8A2424]">
                        <span>Read clause</span>
                        <IconArrowDown size={13} className="transition-transform group-hover:translate-y-0.5" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Document Paper Canvas with Continuous Timeline */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-sm border border-[#292724]/10 bg-[#FFFFFF] p-8 shadow-[0_4px_24px_rgba(41,39,36,0.03)] sm:p-12 lg:p-14"
            >
              <div className="relative pl-8 sm:pl-11">
                {/* Continuous Vertical Timeline Line */}
                <div
                  className="absolute left-3 sm:left-4.5 top-3.5 bottom-6 w-px bg-[#292724]/15"
                  aria-hidden="true"
                />

                <div className="space-y-12 sm:space-y-14">
                  {privacyPolicy.map((clause, index) => {
                    const clauseNum = index + 1;
                    const clauseId = `pp-clause-${clauseNum}`;
                    const formattedNum = String(clauseNum).padStart(2, "0");
                    const isActive = activeClauseId === clauseId;

                    return (
                      <article
                        key={clause.title}
                        id={clauseId}
                        className="scroll-mt-36 relative"
                      >
                        {/* Animated Timeline Marker */}
                        <span
                          className={`absolute -left-8 sm:-left-11 top-1 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border text-[10px] sm:text-[11px] font-mono font-semibold transition-all duration-300 ${
                            isActive
                              ? "border-[#8A2424] bg-[#8A2424] text-white shadow-xs scale-105"
                              : "border-[#292724]/20 bg-[#FFFFFF] text-[#81766C]"
                          }`}
                          aria-hidden="true"
                        >
                          {formattedNum}
                        </span>

                        {/* Clause Heading */}
                        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-medium tracking-tight text-[#292724] sm:text-3xl">
                          {clause.title}
                        </h3>

                        {/* Clause Paragraphs */}
                        <div className="mt-4 space-y-4">
                          {clause.paragraphs.map((p, pIdx) => (
                            <p
                              key={pIdx}
                              className="text-[15px] leading-8 text-[#514A45] sm:text-base"
                            >
                              {p}
                            </p>
                          ))}
                        </div>

                        {/* Structured Semantic Lists */}
                        {clause.list && clause.list.length > 0 && (
                          <ul className="mt-4 space-y-2.5 pl-5 text-[15px] leading-7 text-[#514A45]">
                            {clause.list.map((item, itemIdx) => (
                              <li key={itemIdx} className="list-disc pl-1">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </section>
  );
}

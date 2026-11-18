"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { termsAndConditions } from "@/lib/legal/data";
import { DocumentToc } from "./document-toc";

const chapterGroups = [
  {
    chapterId: "group-01",
    tag: "CHAPTER 01 / FOUNDATIONS & ACCESS",
    clauseIndices: [0, 1, 2], // 1. About Us, 2. Use of Website, 3. Course Enrolment & Access
  },
  {
    chapterId: "group-02",
    tag: "CHAPTER 02 / TUITION, CONDUCT & REFUNDS",
    clauseIndices: [3, 4, 5], // 4. Fees & Payment, 5. Cancellation & Refund Policy, 6. Code of Conduct
  },
  {
    chapterId: "group-03",
    tag: "CHAPTER 03 / INTELLECTUAL PROPERTY & LIABILITY",
    clauseIndices: [6, 7, 8], // 7. Intellectual Property, 8. Limitation of Liability, 9. Privacy
  },
  {
    chapterId: "group-04",
    tag: "CHAPTER 04 / GOVERNANCE & COMMUNICATION",
    clauseIndices: [9, 10, 11], // 10. Changes to Terms, 11. Governing Law, 12. Contact Us
  },
];

export function TermsAndConditions() {
  const [activeClauseId, setActiveClauseId] = useState<string | null>("tc-clause-1");
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

    termsAndConditions.forEach((_, index) => {
      const el = document.getElementById(`tc-clause-${index + 1}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="terms-and-conditions"
      aria-labelledby="terms-heading"
      className="scroll-mt-32 border-t border-[#292724]/10 bg-[#F7F5F0] px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Document Running Header & Identification */}
        <div className="mb-12 border-b border-[#292724]/10 pb-8 sm:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#8A2424]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A2424]">
                DOCUMENT 01 / TERMS OF SERVICE
              </span>
            </div>

            <span className="text-xs uppercase tracking-[0.16em] text-[#81766C]">
              12 Binding Clauses
            </span>
          </div>

          <h2
            id="terms-heading"
            className="mt-5 font-[family-name:var(--font-heading)] text-4xl font-medium tracking-tight text-[#292724] sm:text-5xl lg:text-6xl"
          >
            Terms & Conditions
          </h2>

          <p className="mt-3 text-base text-[#514A45] sm:text-lg">
            The agreement governing your use of The Language Landscapes services.
          </p>

          {/* Opening Statement */}
          <div className="mt-8 border-l-2 border-[#8A2424] bg-[#FFFFFF] p-6 shadow-[0_2px_12px_rgba(41,39,36,0.02)] sm:p-7">
            <p className="text-[15px] leading-relaxed text-[#292724] sm:text-base">
              Welcome to The Language Landscapes Inc. (TLL). By accessing our
              website, enrolling in our courses or using our services, you agree
              to comply with and be bound by the following Terms & Conditions. If
              you do not agree, kindly refrain from using our services.
            </p>
          </div>
        </div>

        {/* Two-Column Editorial Layout (Linear Inspired) */}
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16 xl:grid-cols-[300px_1fr] xl:gap-20">
          {/* Left Column: Sticky Table of Contents */}
          <aside className="w-full">
            <DocumentToc
              clauses={termsAndConditions}
              prefix="tc"
              activeClauseId={activeClauseId}
            />
          </aside>

          {/* Right Column: Printed Paper Canvas with Animated Timeline & Grouped Overlapping Chapters */}
          <main className="min-w-0 max-w-[850px]">
            <div className="space-y-12">
              {chapterGroups.map((group, groupIdx) => (
                <motion.div
                  key={group.chapterId}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 16 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-sm border border-[#292724]/10 bg-[#FFFFFF] p-8 shadow-[0_4px_24px_rgba(41,39,36,0.03)] sm:p-12 lg:p-14"
                >
                  {/* Chapter Meta Bar */}
                  <div className="mb-10 flex items-center justify-between border-b border-[#292724]/10 pb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A2424]">
                      {group.tag}
                    </span>
                    <span className="text-[11px] font-mono text-[#81766C]">
                      Part {groupIdx + 1} of {chapterGroups.length}
                    </span>
                  </div>

                  {/* Continuous Timeline Stream for this Chapter */}
                  <div className="relative pl-8 sm:pl-11">
                    {/* Continuous Vertical Timeline Line */}
                    <div
                      className="absolute left-3 sm:left-4.5 top-3.5 bottom-6 w-px bg-[#292724]/15"
                      aria-hidden="true"
                    />

                    <div className="space-y-12 sm:space-y-14">
                      {group.clauseIndices.map((clauseIdx) => {
                        const clause = termsAndConditions[clauseIdx];
                        const clauseNum = clauseIdx + 1;
                        const clauseId = `tc-clause-${clauseNum}`;
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

                            {/* Sub-list if present */}
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
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

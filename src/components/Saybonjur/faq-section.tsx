
"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrowUpRight, IconSparkles } from "@tabler/icons-react";

import { faqGroups } from "@/data/say-bonjur/data";
import SectionLabel from "./section-label";
import FAQAccordion from "./faq-accordion";

export default function FAQSection() {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(
    faqGroups[0].questions[0].question
  );

  return (
    <section
      id="faqs"
      className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel>Frequently asked questions</SectionLabel>

            <h2 className="font-[family-name:var(--font-heading)] text-5xl leading-[1.05] tracking-tight text-[#292624] sm:text-6xl">
              Curious? We&apos;ve got{" "}
              <span className="text-[#B32526]">answers.</span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-8 text-[#514A45] lg:justify-self-end">
            A few things you might want to know before beginning your
            language journey. Can&apos;t find your answer? We&apos;re always
            happy to help.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <div className="h-fit bg-[#292624] p-8 text-[#F8F5EF] sm:p-10">
            <IconSparkles
              size={29}
              stroke={1.2}
              className="text-[#D9C6A5]"
            />

            <h3 className="mt-7 font-[family-name:var(--font-heading)] text-3xl leading-tight">
              Still have a question?
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#D0C7BB]">
              Every learner&apos;s journey is different. Tell us what
              you&apos;re looking for, and we&apos;ll help you take the
              next step.
            </p>

            <Link
              href="#inquiry"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#E5CBA6]"
            >
              Ask us directly

              <IconArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div>
            {faqGroups.map((group) => (
              <FAQAccordion
                key={group.category}
                category={group.category}
                questions={group.questions}
                activeQuestion={activeQuestion}
                onToggle={(question) =>
                  setActiveQuestion((current) =>
                    current === question ? null : question
                  )
                }
              />
            ))}

            <div className="border-t border-[#D9CFC2]" />
          </div>
        </div>
      </div>
    </section>
  );
}

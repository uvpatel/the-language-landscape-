"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { faqGroups } from "@/data/say-bonjur/data";
import SectionLabel from "./section-label";
import FAQCategoryNavigation from "./faq-category-navigation";
import FAQAccordion from "./faq-accordion";


export default function FAQSection() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  // Default first question of selected category open
  const [activeQuestion, setActiveQuestion] = useState<string | null>(
    faqGroups[0]?.questions[0]?.question ?? null,
  );

  const currentCategory = faqGroups[selectedCategoryIndex] ?? faqGroups[0];

  const handleSelectCategory = (index: number) => {
    setSelectedCategoryIndex(index);
    // Reset active question to the first question of the newly selected category
    const nextCategory = faqGroups[index];
    setActiveQuestion(nextCategory?.questions[0]?.question ?? null);
  };

  const handleToggleQuestion = (question: string) => {
    setActiveQuestion((current) => (current === question ? null : question));
  };

  return (
    <section
      id="faqs"
      aria-label="Frequently Asked Questions"
      className="scroll-mt-24 bg-[#F8F5EF] px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Editorial Header */}
        <div className="mb-14 grid gap-6 border-b border-[#D9CFC2] pb-12 lg:mb-16 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <SectionLabel>FREQUENTLY ASKED QUESTIONS</SectionLabel>

            <h2 className="font-[family-name:var(--font-heading)] text-4xl leading-[1.1] font-medium tracking-tight text-[#292624] sm:text-5xl lg:text-6xl">
              Curious? We&apos;ve got{" "}
              <span className="text-[#B32526]">answers.</span>
            </h2>
          </div>

          <p className="max-w-lg text-[15px] leading-relaxed text-[#514A45] lg:justify-self-end sm:text-base">
            A few things you might want to know before beginning your
            language journey. Can&apos;t find your answer? We&apos;re always
            happy to help.
          </p>
        </div>

        {/* Asymmetric 2-Column Main Layout */}
        <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-16 xl:grid-cols-[400px_1fr] xl:gap-20">
          {/* Left Column: Category Navigation + Desktop Contact Card */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#81766C]">
                Explore By Topic
              </p>
              <FAQCategoryNavigation
                categories={faqGroups}
                selectedIndex={selectedCategoryIndex}
                onSelectCategory={handleSelectCategory}
              />
            </div>

           
          </div>

          {/* Right Column: Selected Category Accordion */}
          <div className="min-w-0">
            <FAQAccordion
              category={currentCategory.category}
              categoryIndex={selectedCategoryIndex}
              questions={currentCategory.questions}
              activeQuestion={activeQuestion}
              onToggle={handleToggleQuestion}
            />
          </div>
        </div>

        {/* Mobile Contact Support Card (placed cleanly below questions) */}
    

        {/* Closing Editorial Detail */}
        <div className="mt-16 border-t border-[#D9CFC2] pt-8 sm:mt-20">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[#81766C]">
              The Language Landscapes — Inquiries & Guidance
            </p>

            <Link
              href="#inquiry"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#B32526] transition-colors hover:text-[#781E24]"
            >
              <span>Have a different query? Contact our academic team</span>
              <IconArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

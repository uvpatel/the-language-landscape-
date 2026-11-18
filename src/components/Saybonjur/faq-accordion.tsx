
"use client";

import { AnimatePresence, motion } from "motion/react";
import { IconChevronDown } from "@tabler/icons-react";

interface FAQAccordionProps {
  category: string;
  questions: {
    question: string;
    answer: string;
  }[];
  activeQuestion: string | null;
  onToggle: (question: string) => void;
}

export default function FAQAccordion({
  category,
  questions,
  activeQuestion,
  onToggle,
}: FAQAccordionProps) {
  return (
    <div className="border-t border-[#D9CFC2] py-7">
      <h3 className="mb-5 font-[family-name:var(--font-heading)] text-2xl text-[#781E24]">
        {category}
      </h3>

      <div className="space-y-1">
        {questions.map((item) => {
          const isOpen = activeQuestion === item.question;

          return (
            <div
              key={item.question}
              className="border-b border-[#D9CFC2]/70"
            >
              <button
                type="button"
                onClick={() => onToggle(item.question)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-5 py-5 text-left"
              >
                <span className="font-medium text-[#292624] transition-colors hover:text-[#B32526] sm:text-[15px]">
                  {item.question}
                </span>

                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-all ${
                    isOpen
                      ? "border-[#B32526] bg-[#B32526] text-white"
                      : "border-[#D9CFC2] text-[#81766C]"
                  }`}
                >
                  <IconChevronDown
                    size={17}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-3xl pb-6 pr-10 text-sm leading-7 text-[#514A45]">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

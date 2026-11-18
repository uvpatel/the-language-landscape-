"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { IconChevronDown } from "@tabler/icons-react";

interface FAQQuestionProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQQuestion({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: FAQQuestionProps) {
  const shouldReduceMotion = useReducedMotion();

  const contentId = `faq-content-${id}`;
  const buttonId = `faq-btn-${id}`;

  return (
    <div className="border-b border-[#D9CFC2] transition-colors">
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="group flex w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B32526] focus-visible:ring-offset-2"
      >
        <span className="text-[15px] font-medium leading-relaxed text-[#292624] transition-colors group-hover:text-[#B32526] sm:text-base">
          {question}
        </span>

        {/* Minimal square chevron control */}
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center border transition-all duration-300 ${
            isOpen
              ? "border-[#B32526] bg-[#B32526] text-[#F8F5EF]"
              : "border-[#D9CFC2] bg-transparent text-[#81766C] group-hover:border-[#B32526] group-hover:text-[#B32526]"
          }`}
          aria-hidden="true"
        >
          <IconChevronDown
            size={15}
            stroke={2}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      {/* Expandable answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={buttonId}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { height: 0, opacity: 0 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { height: "auto", opacity: 1 }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { height: 0, opacity: 0 }
            }
            transition={{
              duration: shouldReduceMotion ? 0.05 : 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-6 sm:pr-10">
              <p className="text-[14px] leading-7 text-[#514A45] sm:text-[15px]">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

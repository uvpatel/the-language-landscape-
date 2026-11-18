
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconPlus } from "@tabler/icons-react";

const faqs = [
  {
    question: "How can I enroll in a TLL program?",
    answer:
      "You can get started by contacting The Language Landscapes through our enquiry form or WhatsApp. Share your learning goals and our team will guide you through the enrollment process.",
  },
  {
    question: "Which language programs does TLL offer?",
    answer:
      "TLL offers French Studies, TEF and TCF preparation, Kids Programs, Corporate Training, Teachers Training and opportunities to explore more languages.",
  },
  {
    question: "Are classes conducted online?",
    answer:
      "TLL presents an online learning experience. Contact our team to confirm the current class format, available batches and schedules for your chosen program.",
  },
  {
    question: "Does TLL provide preparation for language exams?",
    answer:
      "Yes. TLL offers preparation for TEF, TCF and DELF examinations. Get in touch with our team to learn about available levels, course structure and upcoming batches.",
  },
  {
    question: "What are the course fees and payment options?",
    answer:
      "Course fees vary depending on the selected program. Contact The Language Landscapes to receive the latest fee details and information about available payment methods.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="bg-[#F8F5EF] px-5 py-24 sm:px-8 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#B32526]">
            <span className="h-px w-8 bg-[#B32526]" />
            11 — Frequently asked questions
            <span className="h-px w-8 bg-[#B32526]" />
          </span>

          <h2 className="font-[family-name:var(--font-heading)] text-5xl leading-[1.08] text-[#292624] sm:text-6xl lg:text-7xl">
            A little clarity
            <br />
            <span className="text-[#B32526]">
              goes a long way.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#81766C] sm:text-base">
            Everything you need to know before beginning
            your language learning journey with TLL.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="border-t border-[#292624]/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#292624]/15"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center gap-6 py-7 text-left sm:gap-10 sm:py-9"
                >
                  <span className="w-8 shrink-0 font-[family-name:var(--font-heading)] text-lg text-[#B32526] sm:text-xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`flex-1 font-[family-name:var(--font-heading)] text-xl leading-snug transition-colors sm:text-2xl lg:text-3xl ${
                      isOpen
                        ? "text-[#B32526]"
                        : "text-[#292624] hover:text-[#B32526]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-12 sm:w-12 ${
                      isOpen
                        ? "rotate-45 bg-[#781E24] text-white"
                        : "bg-[#EFE9DF] text-[#781E24]"
                    }`}
                  >
                    <IconPlus size={20} stroke={1.5} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-8 pl-14 pr-12 text-sm leading-8 text-[#81766C] sm:pb-10 sm:pl-[4.5rem] sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      

      </div>
    </section>
  );
}

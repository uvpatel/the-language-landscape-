
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconArrowUpRight,
  IconChevronDown,
  IconMessageCircleQuestion,
} from "@tabler/icons-react";

const faqCategories = [
  {
    id: "enrollment",
    label: "Enrollment",
    questions: [
      {
        question: "How can I enroll in a TLL program?",
        answer:
          "You can get started by contacting The Language Landscapes through the enquiry form or WhatsApp. Share your learning goals and the program you are interested in, and the TLL team can guide you through the next steps.",
      },
      {
        question: "Which program should I choose?",
        answer:
          "It depends on your goals. TLL offers TEF and TCF preparation, DELF studies, Kids Programs, Corporate Training, Teachers Training and opportunities to explore more languages. Contact the team to discuss which option may suit you.",
      },
      {
        question: "Can a beginner join?",
        answer:
          "Your starting point depends on the language and program. Contact TLL with your current language experience so the team can help you understand the appropriate learning pathway.",
      },
    ],
  },
  {
    id: "classes",
    label: "Classes",
    questions: [
      {
        question: "Are classes conducted online?",
        answer:
          "TLL presents an online learning experience. Contact the team to confirm the current class format, schedule and arrangements for your chosen program.",
      },
      {
        question: "What is the class schedule?",
        answer:
          "Class schedules may depend on the program and batch. Please contact TLL to enquire about current timings and available options.",
      },
      {
        question: "Will I receive learning materials?",
        answer:
          "Learning-material availability and format can vary by program. Please confirm the resources included with the TLL team before enrollment.",
      },
    ],
  },
  {
    id: "exams",
    label: "Examinations",
    questions: [
      {
        question: "Does TLL provide TEF and TCF preparation?",
        answer:
          "Yes. TLL lists Immigration Based Examinations, including TEF and TCF, among its programs. Contact the team for details about preparation, course structure and enrollment.",
      },
      {
        question: "What is the difference between TEF and TCF?",
        answer:
          "TEF and TCF are separate French-language proficiency tests. Their versions, scoring systems and acceptance requirements can differ depending on the institution or immigration pathway. Check the requirements of your intended destination before choosing an exam.",
      },
      {
        question: "Does TLL offer DELF preparation?",
        answer:
          "Yes. DELF is included in TLL's French Studies program. Contact the team to enquire about available levels, preparation format and upcoming batches.",
      },
      {
        question: "Does completing a TLL course guarantee an exam result?",
        answer:
          "No examination result can be guaranteed. Your progress and result depend on your preparation, proficiency and exam performance.",
      },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    questions: [
      {
        question: "What are the course fees?",
        answer:
          "Fees may differ across programs. Contact TLL for the latest fee details for the course you are interested in.",
      },
      {
        question: "What payment methods are available?",
        answer:
          "Please contact the TLL team to confirm currently accepted payment methods and payment instructions.",
      },
      {
        question: "Is there a refund or cancellation policy?",
        answer:
          "Please review TLL's official Terms and Conditions or contact the team before making a payment to understand the applicable cancellation and refund terms.",
      },
    ],
  },
  {
    id: "learning",
    label: "Learning",
    questions: [
      {
        question: "Which language skills will I develop?",
        answer:
          "TLL's learning approach brings together five important areas: listening, speaking, reading, writing and grammar.",
      },
      {
        question: "Does TLL offer programs for children?",
        answer:
          "Yes. TLL includes a Kids Program among its learning opportunities. Contact the team for details about age eligibility, format and enrollment.",
      },
      {
        question: "Can professionals or organisations learn with TLL?",
        answer:
          "Yes. TLL lists a Corporate Training Program designed for professional and organisational learning needs. Contact the team to discuss your requirements.",
      },
      {
        question: "Does TLL train language teachers?",
        answer:
          "Yes. TLL offers a Teachers Training Program. Get in touch for details about its current scope and learning format.",
      },
    ],
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("enrollment");
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    "How can I enroll in a TLL program?"
  );

  const selectedCategory = faqCategories.find(
    (category) => category.id === activeCategory
  );

  return (
    <section
      id="faqs"
      className="bg-[#F8F5EF] px-5 py-24 sm:px-8 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <span className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#B32526]">
              <span className="h-px w-8 bg-[#B32526]" />
              11 — A little clarity
            </span>

            <h2 className="max-w-3xl font-[family-name:var(--font-heading)] text-5xl leading-[1.05] text-[#292624] sm:text-6xl lg:text-7xl">
              Questions are the
              <span className="text-[#B32526]"> beginning.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-[#514A45] lg:ml-auto">
            Starting something new often comes with questions. Here are
            answers to help you understand TLL programs, classes, examinations
            and the learning journey ahead.
          </p>
        </div>

        {/* FAQ content */}
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
          {/* Category navigation */}
          <aside>
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.18em] text-[#81766C]">
              Explore by topic
            </span>

            <div className="flex gap-2 overflow-x-auto pb-3 lg:flex-col lg:overflow-visible">
              {faqCategories.map((category, index) => {
                const active = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpenQuestion(null);
                    }}
                    className={`flex shrink-0 items-center justify-between gap-5 rounded-full px-5 py-3 text-sm transition-all duration-300 lg:w-full lg:rounded-xl lg:px-4 ${
                      active
                        ? "bg-[#781E24] text-[#F8F5EF]"
                        : "bg-[#EFE9DF] text-[#514A45] hover:bg-[#E5D7C5]"
                    }`}
                  >
                    <span>{category.label}</span>
                    <span
                      className={`text-xs ${
                        active ? "text-[#D9C6A5]" : "text-[#A58B64]"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-10 hidden rounded-2xl border border-[#292624]/10 p-6 lg:block">
              <IconMessageCircleQuestion
                size={28}
                stroke={1.3}
                className="mb-5 text-[#B32526]"
              />
              <h3 className="font-[family-name:var(--font-heading)] text-2xl text-[#292624]">
                Still curious?
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#81766C]">
                Every learning journey is different. Talk to TLL about your
                questions.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B32526]"
              >
                Contact us
                <IconArrowUpRight size={17} />
              </a>
            </div>
          </aside>

          {/* Questions accordion */}
          <div>
            <div className="mb-7 flex items-center justify-between border-b border-[#292624]/15 pb-5">
              <h3 className="font-[family-name:var(--font-heading)] text-3xl text-[#292624] sm:text-4xl">
                {selectedCategory?.label}
              </h3>
              <span className="text-xs tracking-widest text-[#A58B64]">
                {String(selectedCategory?.questions.length ?? 0).padStart(
                  2,
                  "0"
                )}{" "}
                QUESTIONS
              </span>
            </div>

            <div>
              {selectedCategory?.questions.map((item, index) => {
                const isOpen = openQuestion === item.question;

                return (
                  <div
                    key={item.question}
                    className="border-b border-[#292624]/15"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenQuestion(isOpen ? null : item.question)
                      }
                      className="flex w-full items-center gap-5 py-6 text-left sm:py-7"
                    >
                      <span className="font-[family-name:var(--font-heading)] text-lg text-[#B32526]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`flex-1 font-[family-name:var(--font-heading)] text-xl leading-snug transition-colors sm:text-2xl ${
                          isOpen ? "text-[#B32526]" : "text-[#292624]"
                        }`}
                      >
                        {item.question}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#B32526] text-white"
                            : "bg-[#EFE9DF] text-[#781E24]"
                        }`}
                      >
                        <IconChevronDown size={18} stroke={1.7} />
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
                          <p className="max-w-2xl pb-7 pl-10 pr-10 text-sm leading-8 text-[#81766C] sm:pl-12">
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
        </div>

        {/* Contact panel */}
        <div className="mt-20 overflow-hidden rounded-[2rem] bg-[#781E24] p-8 text-[#F8F5EF] sm:p-12 lg:p-14">
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-[#D9C6A5]">
                Your question matters
              </span>

              <h3 className="max-w-2xl font-[family-name:var(--font-heading)] text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Didn't find what you were looking for?
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#F0E4DD]/75">
                Reach out to The Language Landscapes. Let's talk about your
                questions and the language journey you have in mind.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#F8F5EF] px-6 py-3.5 text-sm font-semibold text-[#781E24] transition-colors hover:bg-[#D9C6A5]"
            >
              Ask us anything
              <IconArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

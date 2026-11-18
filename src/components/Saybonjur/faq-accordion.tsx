"use client";

import FAQQuestion from "./faq-question";

interface FAQAccordionProps {
  category: string;
  categoryIndex: number;
  questions: {
    question: string;
    answer: string;
  }[];
  activeQuestion: string | null;
  onToggle: (question: string) => void;
}

export default function FAQAccordion({
  category,
  categoryIndex,
  questions,
  activeQuestion,
  onToggle,
}: FAQAccordionProps) {
  const formattedIndex = String(categoryIndex + 1).padStart(2, "0");

  return (
    <div
      role="tabpanel"
      id={`faq-panel-${categoryIndex}`}
      aria-labelledby={`faq-tab-${categoryIndex}`}
      className="w-full"
    >
      {/* Category header meta */}
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-[#D9CFC2] pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold tracking-wider text-[#B32526]">
            {formattedIndex}
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#81766C]">
            Category
          </span>
          <span className="h-1 w-1 rounded-full bg-[#D9CFC2]" />
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-[#292624] sm:text-2xl">
            {category}
          </h3>
        </div>

        <span className="text-xs font-medium text-[#81766C]">
          {questions.length} {questions.length === 1 ? "question" : "questions"}
        </span>
      </div>

      {/* Question list */}
      <div className="border-t border-[#D9CFC2]">
        {questions.map((item, qIndex) => (
          <FAQQuestion
            key={item.question}
            id={`${categoryIndex}-${qIndex}`}
            question={item.question}
            answer={item.answer}
            isOpen={activeQuestion === item.question}
            onToggle={() => onToggle(item.question)}
          />
        ))}
      </div>
    </div>
  );
}

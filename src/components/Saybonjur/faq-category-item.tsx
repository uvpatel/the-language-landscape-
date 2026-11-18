"use client";

interface FAQCategoryItemProps {
  index: number;
  category: string;
  questionCount: number;
  isActive: boolean;
  onClick: () => void;
}

export default function FAQCategoryItem({
  index,
  category,
  questionCount,
  isActive,
  onClick,
}: FAQCategoryItemProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`faq-panel-${index}`}
      id={`faq-tab-${index}`}
      onClick={onClick}
      className={`group relative flex w-full items-center justify-between border px-5 py-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B32526] focus-visible:ring-offset-2 ${
        isActive
          ? "border-[#781E24] bg-[#781E24] text-[#F8F5EF] shadow-sm"
          : "border-[#D9CFC2] bg-[#EFE9DF] text-[#292624] hover:border-[#B32526]/40 hover:bg-[#E8E1D5]"
      }`}
    >
      <div className="flex items-center gap-3.5">
        <span
          className={`font-mono text-xs font-semibold tracking-wider transition-colors ${
            isActive ? "text-[#D9C6A5]" : "text-[#81766C] group-hover:text-[#B32526]"
          }`}
        >
          {formattedIndex}
        </span>
        <span className="text-sm font-semibold tracking-wide sm:text-[15px]">
          {category}
        </span>
      </div>

      <span
        className={`rounded-full px-2 py-0.5 text-[11px] font-medium tabular-nums transition-colors ${
          isActive
            ? "bg-[#5E161C] text-[#D9C6A5]"
            : "bg-[#D9CFC2]/60 text-[#81766C] group-hover:bg-[#D9CFC2]"
        }`}
      >
        {questionCount}
      </span>
    </button>
  );
}

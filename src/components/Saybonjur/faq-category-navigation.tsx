"use client";

import FAQCategoryItem from "./faq-category-item";

interface FAQCategoryNavigationProps {
  categories: {
    category: string;
    questions: { question: string; answer: string }[];
  }[];
  selectedIndex: number;
  onSelectCategory: (index: number) => void;
}

export default function FAQCategoryNavigation({
  categories,
  selectedIndex,
  onSelectCategory,
}: FAQCategoryNavigationProps) {
  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="FAQ Categories"
        className="flex gap-2.5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-col md:gap-3 md:overflow-visible md:pb-0"
      >
        {categories.map((group, index) => (
          <div key={group.category} className="shrink-0 md:w-full">
            <FAQCategoryItem
              index={index}
              category={group.category}
              questionCount={group.questions.length}
              isActive={selectedIndex === index}
              onClick={() => onSelectCategory(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

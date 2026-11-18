import React from "react";
import { BLOG_CATEGORIES } from "@/lib/blog/categories";
import { SectionHeader } from "./shared/section-header";
import { CategoryCard } from "./category-card";

interface BlogCategoriesSectionProps {
  counts?: Record<string, number>;
}

export function BlogCategoriesSection({ counts = {} }: BlogCategoriesSectionProps) {
  return (
    <section
      id="categories"
      className="relative overflow-hidden border-b border-[#292624]/10 bg-[#F8F5EF] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <SectionHeader
            eyebrow="Curated Streams"
            heading="Explore by interest."
            description="Delve into focused explorations across our core linguistic domains, practical French learning, cultural traditions, and reflective conversations."
          />
        </div>

        {/* Categories Grid: 2 columns on tablet, 3 on desktop, 5th card spans nicely */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_CATEGORIES.map((category, index) => (
            <CategoryCard
              key={category.slug}
              category={category}
              index={index}
              count={counts[category.slug]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

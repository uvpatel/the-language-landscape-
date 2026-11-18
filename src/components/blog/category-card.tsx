import React from "react";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { BlogCategory } from "@/types/blog";

interface CategoryCardProps {
  category: BlogCategory;
  index: number;
  count?: number;
}

export function CategoryCard({ category, index, count }: CategoryCardProps) {
  const indexFormatted = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/blog/category/${category.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-[#292624]/10 bg-[#FFFFFF] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#B32526]/40 hover:shadow-[0_16px_36px_rgba(41,38,36,0.06)] sm:p-8"
    >
      {/* Subtle top indicator bar */}
      <div
        className="absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: category.accentColor || "#B32526" }}
      />

      <div>
        {/* Top meta */}
        <div className="mb-6 flex items-center justify-between">
          <span className="font-serif text-xs font-semibold tracking-wider text-[#A58B64]">
            {indexFormatted}
          </span>
          {typeof count === "number" && (
            <span className="rounded-xs bg-[#EFE9DF] px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-[#81766C]">
              {count} {count === 1 ? "Article" : "Articles"}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl font-normal tracking-[-0.01em] text-[#292624] transition-colors duration-300 group-hover:text-[#B32526]">
          {category.title}
        </h3>

        {/* Subtitle */}
        {category.subtitle && (
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#81766C]">
            {category.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-[#514A45]">
          {category.description}
        </p>
      </div>

      {/* CTA footer */}
      <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#292624] transition-colors duration-300 group-hover:text-[#B32526]">
        <span>Explore Category</span>
        <IconArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </Link>
  );
}

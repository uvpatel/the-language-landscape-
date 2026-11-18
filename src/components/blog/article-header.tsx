import React from "react";
import { Article } from "@/types/blog";
import { formatEditorialDate } from "@/lib/blog/utils";
import { BlogBadge } from "./shared/blog-badge";
import { IconClock, IconAlertCircle } from "@tabler/icons-react";

interface ArticleHeaderProps {
  article: Article;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const formattedDate = formatEditorialDate(article.publishedAt);

  return (
    <header className="mx-auto max-w-4xl text-center">
      {/* Draft banner if viewing a draft */}
      {article.status === "draft" && (
        <div className="mb-6 inline-flex items-center gap-2 rounded-xs border border-[#A58B64]/50 bg-[#EFE9DF] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#781E24]">
          <IconAlertCircle size={15} />
          <span>Editorial Draft Preview · Not Published Publicly</span>
        </div>
      )}

      {/* Category & Reading Time */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
        <BlogBadge
          label={article.category}
          href={`/blog/category/${article.categorySlug}`}
          size="md"
        />
        {article.readingTime && (
          <span className="flex items-center gap-1.5 text-xs text-[#81766C]">
            <IconClock size={14} stroke={1.6} />
            {article.readingTime}
          </span>
        )}
      </div>

      {/* Title */}
      <h1 className="font-serif text-[clamp(2.2rem,5vw,4.25rem)] font-normal leading-[1.06] tracking-[-0.03em] text-[#292624]">
        {article.title}
      </h1>

      {/* Excerpt / Lead */}
      {article.excerpt && (
        <p className="mx-auto mt-7 max-w-2xl font-sans text-lg leading-relaxed text-[#514A45] sm:text-xl sm:leading-9">
          {article.excerpt}
        </p>
      )}

      {/* Author & Date metadata */}
      <div className="mt-8 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.18em] text-[#81766C]">
        <span className="font-semibold text-[#292624]">{article.author}</span>
        <span aria-hidden="true" className="text-[#A58B64]">✦</span>
        <time dateTime={article.publishedAt}>{formattedDate}</time>
      </div>
    </header>
  );
}

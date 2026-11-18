import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconClock } from "@tabler/icons-react";
import { Article } from "@/types/blog";
import { formatEditorialDate } from "@/lib/blog/utils";
import { BlogBadge } from "./shared/blog-badge";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = formatEditorialDate(article.publishedAt);

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-sm border border-[#292624]/10 bg-[#FFFFFF] transition-all duration-500 hover:border-[#B32526]/30 hover:shadow-[0_12px_32px_rgba(41,38,36,0.06)]">
      <div>
        {/* Thumbnail container */}
        <Link
          href={`/blog/${article.slug}`}
          className="relative block aspect-[16/10] w-full overflow-hidden bg-[#EFE9DF]"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt || article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292624]/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>

        {/* Content */}
        <div className="p-6 sm:p-7">
          {/* Category & Reading Time */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <BlogBadge
              label={article.category}
              href={`/blog/category/${article.categorySlug}`}
            />
            {article.readingTime && (
              <span className="flex items-center gap-1.5 text-xs text-[#81766C]">
                <IconClock size={14} stroke={1.6} />
                {article.readingTime}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl font-normal tracking-[-0.01em] text-[#292624] transition-colors duration-300 group-hover:text-[#B32526] sm:text-2xl">
            <Link href={`/blog/${article.slug}`} className="focus:outline-none">
              {article.title}
            </Link>
          </h3>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#514A45]">
              {article.excerpt}
            </p>
          )}
        </div>
      </div>

      {/* Footer / Meta */}
      <div className="border-t border-[#292624]/10 px-6 py-4 sm:px-7">
        <div className="flex items-center justify-between text-xs text-[#81766C]">
          <time dateTime={article.publishedAt}>{formattedDate}</time>
          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1.5 font-medium text-[#292624] transition-colors duration-300 group-hover:text-[#B32526]"
            aria-label={`Read article: ${article.title}`}
          >
            <span>Read Article</span>
            <IconArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

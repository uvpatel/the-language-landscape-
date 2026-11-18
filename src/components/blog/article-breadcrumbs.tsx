import React from "react";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";

interface ArticleBreadcrumbsProps {
  categoryTitle: string;
  categorySlug: string;
  articleTitle: string;
}

export function ArticleBreadcrumbs({
  categoryTitle,
  categorySlug,
  articleTitle,
}: ArticleBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumbs" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#81766C]">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-[#B32526]"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <IconChevronRight size={13} stroke={2} className="text-[#81766C]/60" />
        </li>
        <li>
          <Link
            href="/blog"
            className="transition-colors hover:text-[#B32526]"
          >
            Blog
          </Link>
        </li>
        <li aria-hidden="true">
          <IconChevronRight size={13} stroke={2} className="text-[#81766C]/60" />
        </li>
        <li>
          <Link
            href={`/blog/category/${categorySlug}`}
            className="transition-colors hover:text-[#B32526]"
          >
            {categoryTitle}
          </Link>
        </li>
        <li aria-hidden="true">
          <IconChevronRight size={13} stroke={2} className="text-[#81766C]/60" />
        </li>
        <li
          aria-current="page"
          className="max-w-[240px] truncate text-[#292624] sm:max-w-[360px]"
        >
          {articleTitle}
        </li>
      </ol>
    </nav>
  );
}

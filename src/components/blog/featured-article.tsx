import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconClock, IconFeather } from "@tabler/icons-react";
import { Article } from "@/types/blog";
import { formatEditorialDate } from "@/lib/blog/utils";
import { SectionHeader } from "./shared/section-header";
import { BlogBadge } from "./shared/blog-badge";

interface FeaturedArticleSectionProps {
  article: Article | null;
}

export function FeaturedArticleSection({ article }: FeaturedArticleSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#292624]/10 bg-[#FFFFFF] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <SectionHeader
            eyebrow="Editorial Spotlight"
            heading="Featured Perspective"
            description="A curated space for thought-provoking ideas, interesting discoveries and stories that explore the richness of language and human expression."
          />
        </div>

        {/* Featured Content Layout */}
        {article ? (
          <div className="group relative overflow-hidden rounded-sm border border-[#292624]/10 bg-[#F8F5EF] transition-all duration-500 hover:border-[#B32526]/30 hover:shadow-[0_20px_48px_rgba(41,38,36,0.06)]">
            <div className="grid items-stretch lg:grid-cols-[1.2fr_1fr]">
              {/* Image side */}
              <Link
                href={`/blog/${article.slug}`}
                className="relative min-h-[320px] w-full overflow-hidden bg-[#EFE9DF] sm:min-h-[420px] lg:min-h-full"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src={article.featuredImage}
                  alt={article.featuredImageAlt || article.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292624]/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>

              {/* Text side */}
              <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">
                <div>
                  {/* Category & Meta */}
                  <div className="mb-6 flex flex-wrap items-center gap-3">
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
                  <h3 className="font-serif text-2xl font-normal leading-tight tracking-tight text-[#292624] transition-colors duration-300 group-hover:text-[#B32526] sm:text-3xl lg:text-4xl">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  {/* Description / Excerpt */}
                  {article.excerpt && (
                    <p className="mt-5 text-base leading-relaxed text-[#514A45] sm:text-lg">
                      {article.excerpt}
                    </p>
                  )}
                </div>

                {/* Author, Date & Read More */}
                <div className="mt-10 border-t border-[#292624]/10 pt-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#292624]">
                        {article.author}
                      </p>
                      <time
                        dateTime={article.publishedAt}
                        className="text-xs text-[#81766C]"
                      >
                        {formatEditorialDate(article.publishedAt)}
                      </time>
                    </div>

                    <Link
                      href={`/blog/${article.slug}`}
                      className="group/cta inline-flex items-center gap-2 rounded-xs bg-[#B32526] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#781E24]"
                    >
                      <span>Read Perspective</span>
                      <IconArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-sm border border-[#292624]/10 bg-[#F8F5EF] p-12 text-center sm:p-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#B32526]/10 text-[#B32526]">
              <IconFeather size={26} stroke={1.6} />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-normal text-[#292624] sm:text-3xl">
              Inaugural Perspectives Forthcoming
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-[#514A45]">
              Our editorial contributors are preparing in-depth reflections on
              language, identity, and cultural nuances. Check back shortly for our
              first published piece.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

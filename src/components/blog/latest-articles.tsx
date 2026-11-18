import React from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { Article } from "@/types/blog";
import { SectionHeader } from "./shared/section-header";
import { ArticleCard } from "./article-card";
import { EmptyState } from "./shared/empty-state";

interface LatestArticlesSectionProps {
  articles: Article[];
}

export function LatestArticlesSection({ articles }: LatestArticlesSectionProps) {
  return (
    <section
      id="latest-articles"
      className="relative overflow-hidden border-b border-[#292624]/10 bg-[#FFFFFF] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <SectionHeader
            eyebrow="Recent Publications"
            heading="Explore our latest stories."
            description="Ideas worth exploring. Perspectives worth sharing. Discover articles that take you deeper into the world of languages and cultures."
          />
        </div>

        {/* Articles List / Grid */}
        {articles.length > 0 ? (
          <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>

            {/* View All CTA */}
            <div className="mt-14 flex justify-center">
              <Link
                href="#categories"
                className="group inline-flex items-center gap-2 rounded-xs border border-[#292624]/20 bg-transparent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#292624] transition-all duration-300 hover:border-[#B32526] hover:bg-[#B32526] hover:text-white"
              >
                <span>Browse All Categories</span>
                <IconArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </>
        ) : (
          <EmptyState
            title="Stories in preparation"
            description="Our latest articles exploring linguistics, culture, and language learning are currently in editorial review and will be published shortly."
            actionText="Discover Interest Areas"
            actionHref="#categories"
          />
        )}
      </div>
    </section>
  );
}

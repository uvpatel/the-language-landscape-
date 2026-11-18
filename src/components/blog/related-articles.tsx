import React from "react";
import { Article } from "@/types/blog";
import { SectionHeader } from "./shared/section-header";
import { ArticleCard } from "./article-card";

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="border-t border-[#292624]/10 bg-[#F8F5EF] py-16 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Continue Reading"
            heading="Related Perspectives"
            description="Explore more essays and discussions from the same thematic stream."
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

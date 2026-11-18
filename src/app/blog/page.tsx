import type { Metadata } from "next";
import {
  getAllArticles,
  getFeaturedArticle,
  getCategoryCounts,
} from "@/lib/blog/posts";
import { BlogHero } from "@/components/blog/blog-hero";
import { FeaturedArticleSection } from "@/components/blog/featured-article";
import { BlogCategoriesSection } from "@/components/blog/blog-categories";
import { LatestArticlesSection } from "@/components/blog/latest-articles";
import { TeteATeteFeature } from "@/components/blog/tete-a-tete-feature";
import { BlogCTA } from "@/components/blog/blog-cta";

export const metadata: Metadata = {
  title: "Blog | Words, Ideas & Perspectives",
  description:
    "Explore the world of language, linguistics and culture through conversations, insights and stories that inspire curiosity and understanding with The Language Landscapes.",
  openGraph: {
    title: "Blog | The Language Landscapes",
    description:
      "Explore the world of language, linguistics and culture through conversations, insights and stories that inspire curiosity and understanding.",
    type: "website",
  },
};

export default async function BlogPage() {
  // Only published articles are displayed on the public blog page
  const [publishedArticles, featuredArticle, categoryCounts] = await Promise.all([
    getAllArticles({ includeDrafts: false }),
    getFeaturedArticle({ includeDrafts: false }),
    getCategoryCounts(),
  ]);

  return (
    <main className="min-h-screen bg-[#F8F5EF]">
      {/* Section 01 — Blog Hero */}
      <BlogHero />

      {/* Section 02 — Featured Article */}
      <FeaturedArticleSection article={featuredArticle} />

      {/* Section 03 — Blog Categories */}
      <BlogCategoriesSection counts={categoryCounts} />

      {/* Section 04 — Latest Articles */}
      <LatestArticlesSection articles={publishedArticles} />

      {/* Section 05 — Tête-à-tête Feature */}
      <TeteATeteFeature />

      {/* Section 06 — Closing CTA */}
      <BlogCTA />
    </main>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  BLOG_CATEGORIES,
  getCategoryBySlug,
} from "@/lib/blog/categories";
import { getArticlesByCategory, getCategoryCounts } from "@/lib/blog/posts";
import { SectionHeader } from "@/components/blog/shared/section-header";
import { ArticleCard } from "@/components/blog/article-card";
import { EmptyState } from "@/components/blog/shared/empty-state";
import { BlogCTA } from "@/components/blog/blog-cta";
import { IconChevronRight } from "@tabler/icons-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: "Category Not Found | The Language Landscapes",
    };
  }

  return {
    title: `${category.title} | The Language Landscapes`,
    description: category.description,
    openGraph: {
      title: `${category.title} | The Language Landscapes`,
      description: category.description,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const [articles, categoryCounts] = await Promise.all([
    getArticlesByCategory(category.slug, { includeDrafts: false }),
    getCategoryCounts(),
  ]);

  return (
    <main className="min-h-screen bg-[#F8F5EF]">
      {/* Category Header */}
      <section className="border-b border-[#292624]/10 bg-[#FFFFFF] pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-medium text-[#81766C]">
              <li>
                <Link href="/" className="hover:text-[#B32526]">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <IconChevronRight size={13} stroke={2} className="text-[#81766C]/60" />
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#B32526]">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">
                <IconChevronRight size={13} stroke={2} className="text-[#81766C]/60" />
              </li>
              <li aria-current="page" className="text-[#292624]">
                {category.title}
              </li>
            </ol>
          </nav>

          <SectionHeader
            eyebrow={`Editorial Stream · ${category.subtitle}`}
            heading={category.title}
            description={category.description}
          />

          {/* Category Filter Tabs */}
          <div className="mt-12 flex flex-wrap gap-2.5 border-t border-[#292624]/10 pt-6">
            <Link
              href="/blog"
              className="rounded-xs border border-[#292624]/15 bg-[#F8F5EF] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#514A45] transition-colors hover:border-[#B32526] hover:text-[#B32526]"
            >
              All Topics
            </Link>
            {BLOG_CATEGORIES.map((cat) => {
              const isActive = cat.slug === category.slug;
              const count = categoryCounts[cat.slug] || 0;
              return (
                <Link
                  key={cat.slug}
                  href={`/blog/category/${cat.slug}`}
                  className={`inline-flex items-center gap-2 rounded-xs px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                    isActive
                      ? "bg-[#B32526] text-white"
                      : "border border-[#292624]/15 bg-[#F8F5EF] text-[#514A45] hover:border-[#B32526] hover:text-[#B32526]"
                  }`}
                >
                  <span>{cat.title}</span>
                  {count > 0 && (
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-[#292624]/10 text-[#514A45]"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid in Category */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          {articles.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <EmptyState
              title={`No stories in "${category.title}" yet`}
              description={`We are curating thoughtful perspectives for the ${category.title} stream. Check back soon or explore our other interest areas.`}
              actionText="View All Interest Areas"
              actionHref="/blog#categories"
            />
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <BlogCTA />
    </main>
  );
}

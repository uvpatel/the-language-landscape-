import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/blog/posts";
import { isAuthenticatedAdmin } from "@/lib/admin/auth";
import { MarkdownContent } from "@/components/blogs/MarkdownContent";
import { ArticleBreadcrumbs } from "@/components/blog/article-breadcrumbs";
import { ArticleHeader } from "@/components/blog/article-header";
import { ArticleImage } from "@/components/blog/article-image";
import { ArticleToc } from "@/components/blog/article-toc";
import { ArticleContent } from "@/components/blog/article-content";
import { ArticleShare } from "@/components/blog/article-share";
import { ArticleAuthor } from "@/components/blog/article-author";
import { RelatedArticles } from "@/components/blog/related-articles";
import { ArticleProgramsCTA } from "@/components/blog/article-programs-cta";

export const instant = false;

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const isAuthed = await isAuthenticatedAdmin();
  const article = await getArticleBySlug(slug, { includeDrafts: isAuthed });

  if (!article || (!isAuthed && article.status === "draft")) {
    return {
      title: "Article Not Found | The Language Landscapes",
      robots: { index: false, follow: false },
    };
  }

  const title = article.seoTitle || article.title;
  const description = article.seoDescription || article.excerpt;

  return {
    title: `${title} | The Language Landscapes`,
    description,
    authors: [{ name: article.author }],
    openGraph: {
      title: `${title} | The Language Landscapes`,
      description,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: [article.author],
      tags: article.tags,
      images: [
        {
          url: article.featuredImage,
          alt: article.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | The Language Landscapes`,
      description,
      images: [article.featuredImage],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const isAuthed = await isAuthenticatedAdmin();

  // Strict draft security: only authenticated admin can preview drafts
  const article = await getArticleBySlug(slug, { includeDrafts: isAuthed });

  if (!article || (!isAuthed && article.status === "draft")) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(
    article.slug,
    article.categorySlug,
    3,
    { includeDrafts: false }
  );

  // JSON-LD structured data for publication / article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: [article.featuredImage],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "The Language Landscapes",
      logo: {
        "@type": "ImageObject",
        url: "https://thelanguagefoundation.com/logo.png",
      },
    },
    articleSection: article.category,
    keywords: article.tags?.join(", "),
  };

  return (
    <article className="min-h-screen bg-[#F8F5EF] pb-24 pt-10 sm:pt-14">
      {/* Draft Preview Banner for Authenticated Administrator */}
      {article.status === "draft" && (
        <div className="mx-auto mb-8 max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between rounded-sm border border-amber-500/40 bg-amber-500/10 p-4 text-xs font-medium text-amber-900">
            <span>
              ✦ <strong>Editorial Preview:</strong> This article is currently saved as an unpublished draft. It is only visible to you.
            </span>
          </div>
        </div>
      )}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Breadcrumb Navigation */}
        <ArticleBreadcrumbs
          categoryTitle={article.category}
          categorySlug={article.categorySlug}
          articleTitle={article.title}
        />

        {/* Article Header */}
        <ArticleHeader article={article} />

        {/* Featured Image */}
        <div className="mx-auto max-w-4xl">
          <ArticleImage
            src={article.featuredImage}
            alt={article.featuredImageAlt}
          />
        </div>

        {/* Reading Column */}
        <div className="mx-auto max-w-[760px]">
          {/* Table of Contents (if multi-section) */}
          <ArticleToc content={article.content} />

          {/* Rendered Markdown Body Content */}
          <ArticleContent>
            <MarkdownContent content={article.content} />
          </ArticleContent>

          {/* Author Box */}
          <ArticleAuthor
            name={article.author}
            role={article.authorRole}
            bio={article.authorBio}
            image={article.authorImage}
          />

          {/* Social Share Options */}
          <div className="my-10">
            <ArticleShare
              title={article.title}
              excerpt={article.excerpt}
            />
          </div>

          {/* Explore Programs CTA */}
          <ArticleProgramsCTA />
        </div>
      </div>

      {/* Related Articles Section */}
      <RelatedArticles articles={relatedArticles} />
    </article>
  );
}

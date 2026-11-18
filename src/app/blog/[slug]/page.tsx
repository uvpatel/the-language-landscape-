import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/blog/posts";
import { renderMdxContent } from "@/lib/blog/mdx";
import { ArticleBreadcrumbs } from "@/components/blog/article-breadcrumbs";
import { ArticleHeader } from "@/components/blog/article-header";
import { ArticleImage } from "@/components/blog/article-image";
import { ArticleToc } from "@/components/blog/article-toc";
import { ArticleContent } from "@/components/blog/article-content";
import { ArticleShare } from "@/components/blog/article-share";
import { ArticleAuthor } from "@/components/blog/article-author";
import { RelatedArticles } from "@/components/blog/related-articles";
import { ArticleProgramsCTA } from "@/components/blog/article-programs-cta";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const publishedArticles = await getAllArticles({ includeDrafts: false });
  if (publishedArticles.length > 0) {
    return publishedArticles.map((article) => ({
      slug: article.slug,
    }));
  }

  // If no published articles exist yet, supply sample/draft slugs for build validation
  const allArticles = await getAllArticles({ includeDrafts: true });
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug, { includeDrafts: true });

  if (!article) {
    return {
      title: "Article Not Found | The Language Landscapes",
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

  // Allows direct slug preview with clear draft banner if status === 'draft'
  const article = await getArticleBySlug(slug, { includeDrafts: true });

  if (!article) {
    notFound();
  }

  const [mdxContent, relatedArticles] = await Promise.all([
    renderMdxContent(article.content),
    getRelatedArticles(article.slug, article.categorySlug, 3, {
      includeDrafts: false,
    }),
  ]);

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

          {/* MDX Body Content */}
          <ArticleContent>{mdxContent}</ArticleContent>

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

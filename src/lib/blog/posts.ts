import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { connectToDatabase } from "@/lib/mongodb";
import { Blog, IBlog } from "@/models/Blog";
import { Article, ArticleFrontmatter } from "@/types/blog";
import { normalizeCategorySlug } from "./categories";
import { calculateReadingTime } from "./utils";

const BLOG_DIRECTORY = path.join(process.cwd(), "content/blog");

/**
 * Maps a Mongoose Blog document into an Article object used across the public site.
 */
function mapBlogToArticle(blog: IBlog | Record<string, unknown>): Article {
  const b = blog as unknown as IBlog;
  const category = b.category || "Culture & Expression";
  const categorySlug = normalizeCategorySlug(category);
  const content = b.content || "";

  return {
    title: b.title,
    slug: b.slug,
    excerpt: b.excerpt,
    category,
    categorySlug,
    author: b.author?.name || "The Language Landscapes",
    authorImage: b.author?.image || "/banasarithakkar.png",
    publishedAt: b.publishedAt
      ? new Date(b.publishedAt).toISOString().split("T")[0]
      : new Date(b.createdAt).toISOString().split("T")[0],
    featuredImage: b.coverImage?.url || "/banasarithakkar.png",
    featuredImageAlt: b.coverImage?.alt || b.title,
    status: b.status,
    featured: true,
    updatedAt: b.updatedAt
      ? new Date(b.updatedAt).toISOString().split("T")[0]
      : undefined,
    readingTime: calculateReadingTime(content),
    tags: Array.isArray(b.tags) ? b.tags : [],
    seoTitle: b.seo?.metaTitle || b.title,
    seoDescription: b.seo?.metaDescription || b.excerpt,
    content,
  };
}

/**
 * Seeds initial content from content/blog directory into MongoDB if the database has 0 blogs.
 */
async function seedInitialMdxIfEmpty(): Promise<void> {
  try {
    const count = await Blog.countDocuments();
    if (count > 0) return;

    const entries = await fs.readdir(BLOG_DIRECTORY);
    const mdxFiles = entries.filter(
      (f) => f.endsWith(".mdx") || f.endsWith(".md")
    );

    for (const fileName of mdxFiles) {
      const filePath = path.join(BLOG_DIRECTORY, fileName);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const frontmatter = data as Partial<ArticleFrontmatter>;

      const slug =
        frontmatter.slug ||
        fileName.replace(/\.mdx?$/, "").trim().toLowerCase();

      await Blog.create({
        title: frontmatter.title || "The Relationship Between Language and Culture",
        slug,
        excerpt:
          frontmatter.excerpt ||
          "Explore how language reflects cultural identity and shapes the way we understand the world.",
        content,
        coverImage: {
          url: frontmatter.featuredImage || "/banasarithakkar.png",
          publicId: "the-language-landscape/blogs/covers/sample",
          alt: frontmatter.featuredImageAlt || "Editorial visual",
        },
        category: frontmatter.category || "Culture & Expression",
        tags: frontmatter.tags || ["Language", "Culture", "Identity"],
        author: {
          name: frontmatter.author || "The Language Landscapes",
          image: frontmatter.authorImage || "/banasarithakkar.png",
        },
        status: "published",
        publishedAt: frontmatter.publishedAt
          ? new Date(frontmatter.publishedAt)
          : new Date(),
        seo: {
          metaTitle: frontmatter.seoTitle || frontmatter.title,
          metaDescription: frontmatter.seoDescription || frontmatter.excerpt,
          keywords: frontmatter.tags || [],
        },
      });
    }
  } catch (error) {
    console.warn("Could not seed initial MDX files into MongoDB:", error);
  }
}

/**
 * Retrieves all articles from MongoDB.
 * Excludes drafts from public listings unless includeDrafts is true.
 */
export async function getAllArticles(options?: {
  includeDrafts?: boolean;
}): Promise<Article[]> {
  try {
    await connectToDatabase();
    await seedInitialMdxIfEmpty();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: Record<string, any> = {};
    if (!options?.includeDrafts) {
      filter.status = "published";
    }

    const blogs = await Blog.find(filter)
      .sort({ publishedAt: -1, createdAt: -1 })
      .lean();

    return blogs.map((b) => mapBlogToArticle(b));
  } catch (error) {
    console.error("Error reading blog articles from MongoDB:", error);
    return [];
  }
}

/**
 * Retrieves a single article by slug.
 */
export async function getArticleBySlug(
  slug: string,
  options?: { includeDrafts?: boolean }
): Promise<Article | null> {
  try {
    await connectToDatabase();
    await seedInitialMdxIfEmpty();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: Record<string, any> = { slug };
    if (!options?.includeDrafts) {
      filter.status = "published";
    }

    const blog = await Blog.findOne(filter).lean();
    if (!blog) return null;

    return mapBlogToArticle(blog);
  } catch (error) {
    console.error("Error reading blog article by slug:", error);
    return null;
  }
}

/**
 * Retrieves published articles filtered by category slug.
 */
export async function getArticlesByCategory(
  categorySlug: string,
  options?: { includeDrafts?: boolean }
): Promise<Article[]> {
  const articles = await getAllArticles(options);
  return articles.filter((article) => article.categorySlug === categorySlug);
}

/**
 * Retrieves the featured article for the hero/featured section.
 */
export async function getFeaturedArticle(options?: {
  includeDrafts?: boolean;
}): Promise<Article | null> {
  const articles = await getAllArticles(options);
  if (articles.length === 0) return null;

  const featured = articles.find((article) => article.featured);
  return featured || articles[0];
}

/**
 * Retrieves related articles for an individual post.
 */
export async function getRelatedArticles(
  currentSlug: string,
  categorySlug: string,
  limit: number = 3,
  options?: { includeDrafts?: boolean }
): Promise<Article[]> {
  const articles = await getAllArticles(options);
  const candidates = articles.filter((article) => article.slug !== currentSlug);

  const scored = candidates.map((article) => {
    let score = 0;
    if (article.categorySlug === categorySlug) score += 3;
    return { article, score };
  });

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((item) => item.article);
}

/**
 * Counts published articles grouped by category slug.
 */
export async function getCategoryCounts(): Promise<Record<string, number>> {
  const articles = await getAllArticles({ includeDrafts: false });
  const counts: Record<string, number> = {};

  articles.forEach((article) => {
    counts[article.categorySlug] = (counts[article.categorySlug] || 0) + 1;
  });

  return counts;
}

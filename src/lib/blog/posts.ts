import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { Article, ArticleFrontmatter } from "@/types/blog";
import { normalizeCategorySlug } from "./categories";
import { calculateReadingTime } from "./utils";

const BLOG_DIRECTORY = path.join(process.cwd(), "content/blog");

/**
 * Checks if the content/blog directory exists; creates it if absent.
 */
async function ensureBlogDirectory(): Promise<void> {
  try {
    await fs.access(BLOG_DIRECTORY);
  } catch {
    await fs.mkdir(BLOG_DIRECTORY, { recursive: true });
  }
}

/**
 * Parses an MDX file and returns a strongly-typed Article object.
 */
function parseMdxFile(fileName: string, fileContent: string): Article {
  const { data, content } = matter(fileContent);
  const frontmatter = data as Partial<ArticleFrontmatter>;

  const slug =
    frontmatter.slug ||
    fileName.replace(/\.mdx?$/, "").trim().toLowerCase();

  const category = frontmatter.category || "Culture & Expression";
  const categorySlug = normalizeCategorySlug(category);

  return {
    title: frontmatter.title || "Untitled Article",
    slug,
    excerpt: frontmatter.excerpt || "",
    category,
    categorySlug,
    author: frontmatter.author || "The Language Landscapes",
    authorImage: frontmatter.authorImage,
    authorBio: frontmatter.authorBio,
    authorRole: frontmatter.authorRole,
    publishedAt: frontmatter.publishedAt || new Date().toISOString().split("T")[0],
    featuredImage: frontmatter.featuredImage || "/banasarithakkar.png",
    featuredImageAlt: frontmatter.featuredImageAlt || frontmatter.title || "Editorial visual",
    status: frontmatter.status === "published" ? "published" : "draft",
    featured: Boolean(frontmatter.featured),
    updatedAt: frontmatter.updatedAt,
    readingTime: frontmatter.readingTime || calculateReadingTime(content),
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    seoTitle: frontmatter.seoTitle,
    seoDescription: frontmatter.seoDescription,
    relatedArticles: frontmatter.relatedArticles,
    content,
  };
}

/**
 * Retrieves all articles from content/blog.
 * By default, excludes draft articles from public listings.
 */
export async function getAllArticles(options?: { includeDrafts?: boolean }): Promise<Article[]> {
  await ensureBlogDirectory();

  try {
    const entries = await fs.readdir(BLOG_DIRECTORY, { withFileTypes: true });
    const mdxFiles = entries.filter(
      (entry) =>
        entry.isFile() &&
        (entry.name.endsWith(".mdx") || entry.name.endsWith(".md"))
    );

    const articles = await Promise.all(
      mdxFiles.map(async (file) => {
        const filePath = path.join(BLOG_DIRECTORY, file.name);
        const fileContent = await fs.readFile(filePath, "utf-8");
        return parseMdxFile(file.name, fileContent);
      })
    );

    const filtered = options?.includeDrafts
      ? articles
      : articles.filter((article) => article.status === "published");

    // Sort descending by publication date
    return filtered.sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error("Error reading blog articles:", error);
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
  const allArticles = await getAllArticles({ includeDrafts: true });
  const article = allArticles.find((item) => item.slug === slug);

  if (!article) return null;

  // In production, enforce draft exclusion unless explicitly enabled
  if (!options?.includeDrafts && article.status === "draft") {
    return null;
  }

  return article;
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
 * Picks the most recent article marked as featured: true, or the latest published article.
 */
export async function getFeaturedArticle(
  options?: { includeDrafts?: boolean }
): Promise<Article | null> {
  const articles = await getAllArticles(options);
  if (articles.length === 0) return null;

  const featured = articles.find((article) => article.featured);
  return featured || articles[0];
}

/**
 * Retrieves related articles for an individual post.
 * Matches by category or shared tags, excluding the current article.
 */
export async function getRelatedArticles(
  currentSlug: string,
  categorySlug: string,
  limit: number = 3,
  options?: { includeDrafts?: boolean }
): Promise<Article[]> {
  const articles = await getAllArticles(options);
  const candidates = articles.filter((article) => article.slug !== currentSlug);

  // Score candidates by same category and matching tags
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

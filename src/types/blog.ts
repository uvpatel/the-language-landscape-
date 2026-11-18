export type BlogCategorySlug =
  | "learn-french"
  | "language-linguistics"
  | "culture-expression"
  | "tete-a-tete"
  | "learning-journeys";

export interface BlogCategory {
  title: string;
  slug: BlogCategorySlug;
  description: string;
  subtitle: string;
  accentColor: string;
  count?: number;
}

export type ArticleStatus = "published" | "draft";

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  featuredImage: string;
  featuredImageAlt: string;
  status: ArticleStatus;
  featured?: boolean;
  updatedAt?: string;
  readingTime?: string;
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
  authorImage?: string;
  authorBio?: string;
  authorRole?: string;
  relatedArticles?: string[];
}

export interface Article extends ArticleFrontmatter {
  content: string;
  readingTime: string;
  categorySlug: BlogCategorySlug;
}

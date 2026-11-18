import { BlogCategory, BlogCategorySlug } from "@/types/blog";

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    title: "Learn French",
    slug: "learn-french",
    subtitle: "Grammar, Vocabulary & Fluency",
    description:
      "Discover French grammar, vocabulary, pronunciation and practical language-learning tips.",
    accentColor: "#B32526",
  },
  {
    title: "Language & Linguistics",
    slug: "language-linguistics",
    subtitle: "Science, Structure & Meaning",
    description:
      "Explore language science, linguistic awareness and the fascinating structures behind human communication.",
    accentColor: "#781E24",
  },
  {
    title: "Culture & Expression",
    slug: "culture-expression",
    subtitle: "Traditions, Identity & Art",
    description:
      "Discover traditions, cultural diversity and the many ways people express themselves.",
    accentColor: "#A58B64",
  },
  {
    title: "Tête-à-tête",
    slug: "tete-a-tete",
    subtitle: "Conversations & Perspectives",
    description:
      "Expert-led discussions, perspectives and conversations around language, identity and cultural understanding.",
    accentColor: "#781E24",
  },
  {
    title: "Learning Journeys",
    slug: "learning-journeys",
    subtitle: "Stories, Growth & Discoveries",
    description:
      "Explore learning experiences, educational insights and stories of personal growth through languages.",
    accentColor: "#788477",
  },
];

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((cat) => cat.slug === slug);
}

export function getCategoryByTitle(title: string): BlogCategory | undefined {
  const normalized = title.trim().toLowerCase();
  return BLOG_CATEGORIES.find(
    (cat) =>
      cat.title.toLowerCase() === normalized ||
      cat.slug.toLowerCase() === normalized
  );
}

export function normalizeCategorySlug(categoryInput: string): BlogCategorySlug {
  const matched = getCategoryByTitle(categoryInput) || getCategoryBySlug(categoryInput);
  return matched ? matched.slug : "culture-expression";
}

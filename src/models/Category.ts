import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICategory extends Document {
  title: string;
  slug: string;
  subtitle?: string;
  description?: string;
  accentColor?: string;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new Schema<ICategory>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true, index: true },
    subtitle: { type: String, default: "" },
    description: { type: String, default: "" },
    accentColor: { type: String, default: "#B32526" },
  },
  {
    timestamps: true,
  }
);

export const Category: Model<ICategory> =
  mongoose.models.Category || mongoose.model<ICategory>("Category", CategorySchema);

export const DEFAULT_CATEGORIES = [
  {
    title: "Learn French",
    slug: "learn-french",
    subtitle: "Grammar, Vocabulary & Fluency",
    description: "Discover French grammar, vocabulary, pronunciation and practical language-learning tips.",
    accentColor: "#B32526",
  },
  {
    title: "Language & Linguistics",
    slug: "language-linguistics",
    subtitle: "Science, Structure & Meaning",
    description: "Explore language science, linguistic awareness and the fascinating structures behind human communication.",
    accentColor: "#781E24",
  },
  {
    title: "Culture & Expression",
    slug: "culture-expression",
    subtitle: "Traditions, Identity & Art",
    description: "Discover traditions, cultural diversity and the many ways people express themselves.",
    accentColor: "#A58B64",
  },
  {
    title: "Tête-à-tête",
    slug: "tete-a-tete",
    subtitle: "Conversations & Perspectives",
    description: "Expert-led discussions, perspectives and conversations around language, identity and cultural understanding.",
    accentColor: "#781E24",
  },
  {
    title: "Learning Journeys",
    slug: "learning-journeys",
    subtitle: "Stories, Growth & Discoveries",
    description: "Explore learning experiences, educational insights and stories of personal growth through languages.",
    accentColor: "#788477",
  },
];

export async function ensureDefaultCategories() {
  const count = await Category.countDocuments();
  if (count === 0) {
    await Category.insertMany(DEFAULT_CATEGORIES);
  }
}

export default Category;

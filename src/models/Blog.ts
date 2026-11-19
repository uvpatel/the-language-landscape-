import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlogCoverImage {
  url: string;
  publicId: string;
  alt: string;
}

export interface IBlogAuthor {
  name: string;
  image?: string;
}

export interface IBlogSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export type BlogStatus = "draft" | "published";

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: IBlogCoverImage;
  category: string;
  tags: string[];
  author: IBlogAuthor;
  status: BlogStatus;
  seo: IBlogSEO;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const CoverImageSchema = new Schema<IBlogCoverImage>(
  {
    url: { type: String, required: true },
    publicId: { type: String, required: true },
    alt: { type: String, default: "" },
  },
  { _id: false }
);

const AuthorSchema = new Schema<IBlogAuthor>(
  {
    name: { type: String, required: true, default: "The Language Landscapes" },
    image: { type: String, default: "/banasarithakkar.png" },
  },
  { _id: false }
);

const SEOSchema = new Schema<IBlogSEO>(
  {
    metaTitle: { type: String, default: "" },
    metaDescription: { type: String, default: "" },
    keywords: { type: [String], default: [] },
  },
  { _id: false }
);

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true, index: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    coverImage: { type: CoverImageSchema, required: true },
    category: { type: String, required: true, trim: true, index: true },
    tags: { type: [String], default: [], index: true },
    author: { type: AuthorSchema, required: true },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
      index: true,
    },
    seo: { type: SEOSchema, default: () => ({}) },
    publishedAt: { type: Date, index: true },
  },
  {
    timestamps: true,
  }
);

// Compound indexes for optimal querying
BlogSchema.index({ status: 1, publishedAt: -1 });
BlogSchema.index({ category: 1, status: 1, publishedAt: -1 });

// Generate slug utility
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export async function generateUniqueSlug(
  baseTitle: string,
  excludeId?: string
): Promise<string> {
  const baseSlug = slugify(baseTitle) || "untitled-article";
  let slug = baseSlug;
  let counter = 1;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: Record<string, any> = { slug };
  if (excludeId && mongoose.isValidObjectId(excludeId)) {
    query._id = { $ne: excludeId };
  }

  // Check if slug exists in collection
  const BlogModel = mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
  while (await BlogModel.findOne(query)) {
    slug = `${baseSlug}-${counter}`;
    query.slug = slug;
    counter++;
  }

  return slug;
}

export const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;

import { z } from "zod";

export const BlogCoverImageSchema = z.object({
  url: z.string().url("Valid image URL is required"),
  publicId: z.string().min(1, "Cloudinary publicId is required"),
  alt: z.string().default(""),
});

export const BlogAuthorSchema = z.object({
  name: z.string().min(1, "Author name is required").default("The Language Landscapes"),
  image: z.string().optional().default("/banasarithakkar.png"),
});

export const BlogSEOSchema = z.object({
  metaTitle: z.string().optional().default(""),
  metaDescription: z.string().optional().default(""),
  keywords: z.array(z.string()).optional().default([]),
});

export const CreateBlogSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters").max(200, "Title is too long"),
  slug: z.string().optional(),
  excerpt: z.string().min(5, "Excerpt must be at least 5 characters").max(500, "Excerpt is too long"),
  content: z.string().min(1, "Blog content is required"),
  coverImage: BlogCoverImageSchema,
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).default([]),
  author: BlogAuthorSchema.default({ name: "The Language Landscapes", image: "/banasarithakkar.png" }),
  status: z.enum(["draft", "published"]).default("draft"),
  seo: BlogSEOSchema.default({ metaTitle: "", metaDescription: "", keywords: [] }),
  publishedAt: z.union([z.string(), z.date()]).optional(),
});

export const UpdateBlogSchema = CreateBlogSchema.partial().extend({
  id: z.string().optional(),
});

export type CreateBlogInput = z.infer<typeof CreateBlogSchema>;
export type UpdateBlogInput = z.infer<typeof UpdateBlogSchema>;

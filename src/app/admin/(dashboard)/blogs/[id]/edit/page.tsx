import React from "react";
import { notFound } from "next/navigation";
import mongoose from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import { Blog } from "@/models/Blog";
import BlogEditor from "@/components/admin/BlogEditor";

interface EditBlogPageProps {
  params: Promise<{ id: string }>;
}


export const metadata = {
  title: "Edit Article | TLL Editorial CMS",
};

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { id } = await params;

  await connectToDatabase();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: Record<string, any> = mongoose.isValidObjectId(id)
    ? { _id: id }
    : { slug: id };

  const blog = await Blog.findOne(query).lean();

  if (!blog) {
    notFound();
  }

  const initialData = {
    _id: blog._id.toString(),
    title: blog.title,
    slug: blog.slug,
    excerpt: blog.excerpt,
    content: blog.content,
    coverImage: blog.coverImage
      ? {
          url: blog.coverImage.url,
          publicId: blog.coverImage.publicId,
          alt: blog.coverImage.alt || "",
        }
      : undefined,
    category: blog.category,
    tags: blog.tags || [],
    author: {
      name: blog.author?.name || "The Language Landscapes",
      image: blog.author?.image || "/banasarithakkar.png",
    },
    status: blog.status,
    seo: {
      metaTitle: blog.seo?.metaTitle || "",
      metaDescription: blog.seo?.metaDescription || "",
      keywords: blog.seo?.keywords || [],
    },
  };

  return <BlogEditor initialData={initialData} isEditMode={true} />;
}

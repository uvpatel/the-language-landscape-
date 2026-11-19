import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import { Blog, generateUniqueSlug } from "@/models/Blog";
import { isAuthenticatedAdmin } from "@/lib/admin/auth";
import { UpdateBlogSchema } from "@/lib/validations/blog";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    await connectToDatabase();

    const isAuthed = await isAuthenticatedAdmin();

    // Query either by ObjectId or by slug
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: Record<string, any> = mongoose.isValidObjectId(id)
      ? { _id: id }
      : { slug: id };

    if (!isAuthed) {
      query.status = "published";
    }

    const blog = await Blog.findOne(query).lean();

    if (!blog) {
      return NextResponse.json({ error: "Blog article not found" }, { status: 404 });
    }

    return NextResponse.json({ blog });
  } catch (error) {
    console.error("Blog GET by ID error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve blog article" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest, { params }: RouteParams) {
  try {
    const isAuthed = await isAuthenticatedAdmin();
    if (!isAuthed) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const { id } = await params;
    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
    }

    const body = await req.json();
    const validated = UpdateBlogSchema.parse(body);

    await connectToDatabase();

    const existingBlog = await Blog.findById(id);
    if (!existingBlog) {
      return NextResponse.json({ error: "Blog article not found" }, { status: 404 });
    }

    // Handle slug change if title or slug is explicitly updated
    if (validated.slug && validated.slug !== existingBlog.slug) {
      existingBlog.slug = await generateUniqueSlug(validated.slug, id);
    }

    if (validated.title) existingBlog.title = validated.title.trim();
    if (validated.excerpt) existingBlog.excerpt = validated.excerpt.trim();
    if (validated.content) existingBlog.content = validated.content;
    if (validated.coverImage) existingBlog.coverImage = validated.coverImage;
    if (validated.category) existingBlog.category = validated.category.trim();
    if (validated.tags) existingBlog.tags = validated.tags;
    if (validated.author) existingBlog.author = validated.author;
    if (validated.seo) existingBlog.seo = validated.seo;

    // Handle status & publishedAt
    if (validated.status) {
      if (validated.status === "published" && existingBlog.status !== "published") {
        existingBlog.publishedAt = validated.publishedAt
          ? new Date(validated.publishedAt)
          : existingBlog.publishedAt || new Date();
      } else if (validated.publishedAt) {
        existingBlog.publishedAt = new Date(validated.publishedAt);
      }
      existingBlog.status = validated.status;
    }

    await existingBlog.save();

    return NextResponse.json({ success: true, blog: existingBlog });
  } catch (error) {
    console.error("Blog update error:", error);
    return NextResponse.json(
      { error: "Failed to update blog article" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const isAuthed = await isAuthenticatedAdmin();
    if (!isAuthed) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const { id } = await params;
    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
    }

    await connectToDatabase();

    const deleted = await Blog.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: `Blog "${deleted.title}" deleted successfully`,
    });
  } catch (error) {
    console.error("Blog delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete blog article" },
      { status: 500 }
    );
  }
}

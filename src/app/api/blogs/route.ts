import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Blog, generateUniqueSlug } from "@/models/Blog";
import { isAuthenticatedAdmin } from "@/lib/admin/auth";
import { CreateBlogSchema } from "@/lib/validations/blog";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.max(1, Math.min(50, parseInt(searchParams.get("limit") || "10", 10)));
    const statusParam = searchParams.get("status");
    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("search");

    const isAuthed = await isAuthenticatedAdmin();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: Record<string, any> = {};

    // Non-admin can ONLY view published blogs
    if (!isAuthed) {
      filter.status = "published";
    } else if (statusParam && statusParam !== "all") {
      filter.status = statusParam;
    }

    if (categoryParam && categoryParam !== "all") {
      filter.category = { $regex: new RegExp(`^${categoryParam}$`, "i") };
    }

    if (searchParam?.trim()) {
      const regex = new RegExp(searchParam.trim(), "i");
      filter.$or = [
        { title: regex },
        { excerpt: regex },
        { tags: regex },
      ];
    }

    const skip = (page - 1) * limit;

    const [blogs, total] = await Promise.all([
      Blog.find(filter)
        .sort({ publishedAt: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Blog.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      blogs,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error("Blogs GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const isAuthed = await isAuthenticatedAdmin();
    if (!isAuthed) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const body = await req.json();
    const validated = CreateBlogSchema.parse(body);

    await connectToDatabase();

    // Generate guaranteed unique slug
    const uniqueSlug = await generateUniqueSlug(validated.slug || validated.title);

    let publishedAt: Date | undefined;
    if (validated.status === "published") {
      publishedAt = validated.publishedAt ? new Date(validated.publishedAt) : new Date();
    } else if (validated.publishedAt) {
      publishedAt = new Date(validated.publishedAt);
    }

    const blog = await Blog.create({
      ...validated,
      slug: uniqueSlug,
      publishedAt,
    });

    return NextResponse.json({ success: true, blog }, { status: 201 });
  } catch (error) {
    console.error("Blog create error:", error);
    return NextResponse.json(
      { error: "Failed to create blog article" },
      { status: 500 }
    );
  }
}

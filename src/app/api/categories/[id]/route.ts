import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import { Category } from "@/models/Category";
import { Blog } from "@/models/Blog";
import { isAuthenticatedAdmin } from "@/lib/admin/auth";
import { UpdateCategorySchema } from "@/lib/validations/category";
import { slugify } from "@/models/Blog";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function PATCH(req: NextRequest, { params }: RouteParams) {
  try {
    const isAuthed = await isAuthenticatedAdmin();
    if (!isAuthed) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const { id } = await params;
    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({ error: "Invalid category ID" }, { status: 400 });
    }

    const body = await req.json();
    const validated = UpdateCategorySchema.parse(body);

    await connectToDatabase();

    const category = await Category.findById(id);
    if (!category) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    if (validated.title) {
      category.title = validated.title.trim();
    }

    if (validated.slug) {
      category.slug = slugify(validated.slug);
    } else if (validated.title && !category.slug) {
      category.slug = slugify(validated.title);
    }

    if (validated.subtitle !== undefined) category.subtitle = validated.subtitle;
    if (validated.description !== undefined) category.description = validated.description;
    if (validated.accentColor !== undefined) category.accentColor = validated.accentColor;

    await category.save();

    return NextResponse.json({ success: true, category });
  } catch (error) {
    console.error("Category update error:", error);
    return NextResponse.json(
      { error: "Failed to update category" },
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
      return NextResponse.json({ error: "Invalid category ID" }, { status: 400 });
    }

    await connectToDatabase();

    const category = await Category.findById(id);
    if (!category) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    // Safeguard: Check if any blogs are using this category
    const associatedBlogs = await Blog.countDocuments({ category: category.title });
    if (associatedBlogs > 0) {
      return NextResponse.json(
        {
          error: `Cannot delete: ${associatedBlogs} blog(s) are assigned to "${category.title}". Reassign them first.`,
        },
        { status: 400 }
      );
    }

    await Category.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: `Category "${category.title}" deleted`,
    });
  } catch (error) {
    console.error("Category delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete category" },
      { status: 500 }
    );
  }
}

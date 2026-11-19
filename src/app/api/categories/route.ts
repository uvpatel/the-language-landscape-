import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Category, ensureDefaultCategories } from "@/models/Category";
import { Blog } from "@/models/Blog";
import { isAuthenticatedAdmin } from "@/lib/admin/auth";
import { CreateCategorySchema } from "@/lib/validations/category";
import { slugify } from "@/models/Blog";

export async function GET() {
  try {
    await connectToDatabase();
    await ensureDefaultCategories();

    const categories = await Category.find().sort({ title: 1 }).lean();

    // Attach blog count to each category
    const categoriesWithCount = await Promise.all(
      categories.map(async (cat) => {
        const count = await Blog.countDocuments({ category: cat.title });
        return {
          ...cat,
          count,
        };
      })
    );

    return NextResponse.json({ categories: categoriesWithCount });
  } catch (error) {
    console.error("Categories GET error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve categories" },
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
    const validated = CreateCategorySchema.parse(body);

    await connectToDatabase();

    const slug = validated.slug ? slugify(validated.slug) : slugify(validated.title);

    // Check if slug or title already exists
    const existing = await Category.findOne({
      $or: [{ slug }, { title: { $regex: new RegExp(`^${validated.title}$`, "i") } }],
    });

    if (existing) {
      return NextResponse.json(
        { error: "Category with this title or slug already exists" },
        { status: 400 }
      );
    }

    const category = await Category.create({
      title: validated.title.trim(),
      slug,
      subtitle: validated.subtitle || "",
      description: validated.description || "",
      accentColor: validated.accentColor || "#B32526",
    });

    return NextResponse.json({ success: true, category }, { status: 201 });
  } catch (error) {
    console.error("Category create error:", error);
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}

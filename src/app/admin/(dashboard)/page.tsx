import React from "react";
import Link from "next/link";
import {
  IconArticle,
  IconCheck,
  IconFileText,
  IconCategory,
  IconPlus,
  IconArrowUpRight,
  IconClock,
} from "@tabler/icons-react";
import { connectToDatabase } from "@/lib/mongodb";
import { Blog } from "@/models/Blog";
import { Category, ensureDefaultCategories } from "@/models/Category";
import { formatEditorialDate } from "@/lib/blog/utils";



export default async function AdminDashboardPage() {
  await connectToDatabase();
  await ensureDefaultCategories();

  const [totalBlogs, publishedBlogs, draftBlogs, totalCategories, recentBlogs] =
    await Promise.all([
      Blog.countDocuments(),
      Blog.countDocuments({ status: "published" }),
      Blog.countDocuments({ status: "draft" }),
      Category.countDocuments(),
      Blog.find()
        .sort({ updatedAt: -1 })
        .limit(6)
        .select("title slug status category publishedAt updatedAt")
        .lean(),
    ]);

  const stats = [
    {
      label: "Total Articles",
      value: totalBlogs,
      icon: IconArticle,
      color: "text-[#292624]",
      bg: "bg-[#EFE9DF]",
    },
    {
      label: "Published",
      value: publishedBlogs,
      icon: IconCheck,
      color: "text-[#B32526]",
      bg: "bg-[#B32526]/10",
    },
    {
      label: "Drafts",
      value: draftBlogs,
      icon: IconFileText,
      color: "text-[#A58B64]",
      bg: "bg-[#A58B64]/10",
    },
    {
      label: "Categories",
      value: totalCategories,
      icon: IconCategory,
      color: "text-[#788477]",
      bg: "bg-[#788477]/10",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Welcome Banner */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#E6E0D5] pb-8 sm:flex-row sm:items-end">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B32526]">
            Editorial Hub
          </span>
          <h1 className="mt-1 font-serif text-3xl font-medium tracking-tight text-[#292624] sm:text-4xl">
            Welcome back, Editor.
          </h1>
          <p className="mt-2 text-sm text-[#81766C]">
            Manage, compose and publish linguistic and cultural perspectives.
          </p>
        </div>

        <Link
          href="/admin/blogs/create"
          className="inline-flex items-center gap-2 rounded-sm bg-[#B32526] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#92211F]"
        >
          <IconPlus size={16} stroke={2} />
          <span>Write New Article</span>
        </Link>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#81766C]">
                  {stat.label}
                </span>
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-sm ${stat.bg} ${stat.color}`}
                >
                  <Icon size={18} stroke={1.8} />
                </div>
              </div>

              <div className="mt-4">
                <span className="font-serif text-3xl font-medium text-[#292624] sm:text-4xl">
                  {stat.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Access Actions */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Link
          href="/admin/blogs"
          className="group flex items-center justify-between rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-5 transition-all hover:border-[#B32526] hover:shadow-sm"
        >
          <div>
            <h2 className="font-serif text-lg font-medium text-[#292624] group-hover:text-[#B32526]">
              All Blogs
            </h2>
            <p className="mt-1 text-xs text-[#81766C]">
              Review, filter, edit and manage articles
            </p>
          </div>
          <IconArrowUpRight
            size={18}
            className="text-[#81766C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#B32526]"
          />
        </Link>

        <Link
          href="/admin/categories"
          className="group flex items-center justify-between rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-5 transition-all hover:border-[#B32526] hover:shadow-sm"
        >
          <div>
            <h2 className="font-serif text-lg font-medium text-[#292624] group-hover:text-[#B32526]">
              Categories
            </h2>
            <p className="mt-1 text-xs text-[#81766C]">
              Manage editorial topics and accent colors
            </p>
          </div>
          <IconArrowUpRight
            size={18}
            className="text-[#81766C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#B32526]"
          />
        </Link>

        <Link
          href="/admin/media"
          className="group flex items-center justify-between rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-5 transition-all hover:border-[#B32526] hover:shadow-sm"
        >
          <div>
            <h2 className="font-serif text-lg font-medium text-[#292624] group-hover:text-[#B32526]">
              Media Library
            </h2>
            <p className="mt-1 text-xs text-[#81766C]">
              Upload and manage Cloudinary imagery
            </p>
          </div>
          <IconArrowUpRight
            size={18}
            className="text-[#81766C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#B32526]"
          />
        </Link>
      </div>

      {/* Recent Publishing Activity */}
      <div className="rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] shadow-sm">
        <div className="flex items-center justify-between border-b border-[#E6E0D5] px-6 py-4">
          <div className="flex items-center gap-2">
            <IconClock size={18} stroke={1.6} className="text-[#B32526]" />
            <h2 className="font-serif text-lg font-medium text-[#292624]">
              Recent Editorial Activity
            </h2>
          </div>
          <Link
            href="/admin/blogs"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#B32526] hover:underline"
          >
            View all
          </Link>
        </div>

        {recentBlogs.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-sm text-[#81766C]">No articles composed yet.</p>
            <Link
              href="/admin/blogs/create"
              className="mt-4 inline-flex items-center gap-2 rounded-sm bg-[#B32526] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white hover:bg-[#92211F]"
            >
              Create your first article
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-[#E6E0D5]">
            {recentBlogs.map((blog) => (
              <div
                key={blog._id.toString()}
                className="flex flex-col justify-between gap-3 p-5 sm:flex-row sm:items-center sm:px-6 hover:bg-[#F8F5EF] transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`inline-block rounded-xs px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] ${
                        blog.status === "published"
                          ? "bg-[#B32526]/10 text-[#B32526]"
                          : "bg-[#A58B64]/15 text-[#78613D]"
                      }`}
                    >
                      {blog.status}
                    </span>
                    <span className="text-[11px] font-medium text-[#81766C]">
                      {blog.category}
                    </span>
                  </div>

                  <h3 className="mt-1 font-serif text-base font-medium text-[#292624] truncate">
                    {blog.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs text-[#81766C]">
                    Updated {formatEditorialDate(blog.updatedAt.toISOString())}
                  </span>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/blogs/${blog._id}/edit`}
                      className="rounded-sm border border-[#E6E0D5] bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#292624] hover:border-[#B32526] hover:text-[#B32526] transition-colors"
                    >
                      Edit
                    </Link>
                    {blog.status === "published" && (
                      <Link
                        href={`/blog/${blog.slug}`}
                        target="_blank"
                        className="rounded-sm p-1.5 text-[#81766C] hover:text-[#292624]"
                        title="View Public Article"
                      >
                        <IconArrowUpRight size={16} stroke={1.6} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

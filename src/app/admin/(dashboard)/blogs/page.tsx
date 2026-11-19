"use client";


import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IconPlus,
  IconSearch,
  IconEdit,
  IconTrash,
  IconArrowUpRight,
  IconAlertCircle,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconX,
} from "@tabler/icons-react";
import { formatEditorialDate } from "@/lib/blog/utils";

interface BlogItem {
  _id: string;
  title: string;
  slug: string;
  category: string;
  status: "draft" | "published";
  coverImage?: {
    url: string;
    alt: string;
  };
  publishedAt?: string;
  updatedAt: string;
}

interface CategoryItem {
  _id: string;
  title: string;
  slug: string;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);

  // Delete modal state
  const [deleteTarget, setDeleteTarget] = useState<BlogItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchBlogs = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "10",
        status: statusFilter,
        category: categoryFilter,
        search: searchTerm,
      });

      const res = await fetch(`/api/blogs?${params.toString()}`);
      const data = await res.json();

      if (res.ok) {
        setBlogs(data.blogs || []);
        setTotalPages(data.pagination?.totalPages || 1);
        setTotalBlogs(data.pagination?.total || 0);
      } else {
        setError(data.error || "Failed to load blogs");
      }
    } catch {
      setError("An unexpected network error occurred while loading blogs");
    } finally {
      setLoading(false);
    }
  }, [page, statusFilter, categoryFilter, searchTerm]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBlogs();
  }, [fetchBlogs]);

  // Fetch categories once for filter dropdown
  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        if (data.categories) setCategories(data.categories);
      })
      .catch(() => {});
  }, []);

  const handleToggleStatus = async (blog: BlogItem) => {
    const nextStatus = blog.status === "published" ? "draft" : "published";

    try {
      const res = await fetch(`/api/blogs/${blog._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to toggle status");
        return;
      }

      setSuccess(`Article marked as ${nextStatus}`);
      fetchBlogs();
    } catch {
      setError("Error changing article status");
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);

    try {
      const res = await fetch(`/api/blogs/${deleteTarget._id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to delete article");
        setIsDeleting(false);
        setDeleteTarget(null);
        return;
      }

      setSuccess(`Article "${deleteTarget.title}" deleted`);
      setDeleteTarget(null);
      fetchBlogs();
    } catch {
      setError("Error deleting article");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#E6E0D5] pb-6 sm:flex-row sm:items-end">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B32526]">
            Articles Catalog
          </span>
          <h1 className="mt-1 font-serif text-3xl font-medium tracking-tight text-[#292624]">
            Manage Blog Posts
          </h1>
          <p className="mt-1 text-sm text-[#81766C]">
            Total {totalBlogs} {totalBlogs === 1 ? "article" : "articles"} in publication database.
          </p>
        </div>

        <Link
          href="/admin/blogs/create"
          className="inline-flex items-center gap-2 rounded-sm bg-[#B32526] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#92211F] transition-colors"
        >
          <IconPlus size={16} stroke={2} />
          <span>Compose New Article</span>
        </Link>
      </div>

      {/* Notifications */}
      {error && (
        <div
          role="alert"
          className="flex items-start justify-between rounded-sm border border-[#B32526]/30 bg-[#B32526]/10 p-4 text-xs text-[#781E24]"
        >
          <div className="flex items-center gap-2">
            <IconAlertCircle size={18} className="shrink-0 text-[#B32526]" />
            <span>{error}</span>
          </div>
          <button onClick={() => setError(null)}>
            <IconX size={16} />
          </button>
        </div>
      )}

      {success && (
        <div
          role="alert"
          className="flex items-start justify-between rounded-sm border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-800"
        >
          <div className="flex items-center gap-2">
            <IconCheck size={18} className="shrink-0 text-emerald-600" />
            <span>{success}</span>
          </div>
          <button onClick={() => setSuccess(null)}>
            <IconX size={16} />
          </button>
        </div>
      )}

      {/* Search & Filter Bar */}
      <div className="grid grid-cols-1 gap-3 rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-4 sm:grid-cols-12 sm:items-center">
        {/* Search */}
        <div className="relative sm:col-span-6">
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[#81766C]">
            <IconSearch size={16} stroke={1.6} />
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
            placeholder="Search by title, excerpt or tag..."
            className="w-full rounded-sm border border-[#D9CFC2] bg-white py-2 pl-9 pr-3 text-xs text-[#292624] outline-none focus:border-[#B32526]"
          />
        </div>

        {/* Status Filter */}
        <div className="sm:col-span-3">
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-2 text-xs text-[#292624] outline-none focus:border-[#B32526]"
          >
            <option value="all">All Statuses</option>
            <option value="published">Published Only</option>
            <option value="draft">Drafts Only</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className="sm:col-span-3">
          <select
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value);
              setPage(1);
            }}
            className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-2 text-xs text-[#292624] outline-none focus:border-[#B32526]"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c._id} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Blog Table / List */}
      <div className="overflow-hidden rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] shadow-sm">
        {loading ? (
          <div className="p-16 text-center text-sm text-[#81766C]">
            Loading articles...
          </div>
        ) : blogs.length === 0 ? (
          <div className="p-16 text-center">
            <p className="text-sm text-[#81766C]">
              No articles match the current filter criteria.
            </p>
            <Link
              href="/admin/blogs/create"
              className="mt-4 inline-flex items-center gap-1.5 rounded-sm bg-[#B32526] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#92211F]"
            >
              <IconPlus size={15} />
              <span>Compose Article</span>
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-[#E6E0D5]">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 hover:bg-[#F8F5EF] transition-colors"
              >
                {/* Left: Thumbnail & Info */}
                <div className="flex items-start gap-4 min-w-0 flex-1">
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xs border border-[#E6E0D5] bg-[#EFE9DF]">
                    {blog.coverImage?.url ? (
                      <Image
                        src={blog.coverImage.url}
                        alt={blog.coverImage.alt || blog.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-[10px] uppercase text-[#81766C]">
                        No Cover
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
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

                    <h2 className="mt-1 font-serif text-lg font-medium text-[#292624] truncate">
                      {blog.title}
                    </h2>

                    <div className="mt-1 flex flex-wrap items-center gap-4 text-[11px] text-[#81766C]">
                      <span>
                        {blog.publishedAt
                          ? `Published ${formatEditorialDate(blog.publishedAt)}`
                          : "Not published"}
                      </span>
                      <span>·</span>
                      <span>Updated {formatEditorialDate(blog.updatedAt)}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <button
                    type="button"
                    onClick={() => handleToggleStatus(blog)}
                    className="rounded-sm border border-[#E6E0D5] bg-white px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-[#514A45] hover:border-[#292624] transition-colors"
                  >
                    {blog.status === "published" ? "Unpublish" : "Publish"}
                  </button>

                  <Link
                    href={`/admin/blogs/${blog._id}/edit`}
                    className="inline-flex items-center gap-1 rounded-sm border border-[#E6E0D5] bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-[#292624] hover:border-[#B32526] hover:text-[#B32526] transition-colors"
                  >
                    <IconEdit size={14} />
                    <span>Edit</span>
                  </Link>

                  {blog.status === "published" && (
                    <Link
                      href={`/blog/${blog.slug}`}
                      target="_blank"
                      className="rounded-sm border border-[#E6E0D5] bg-white p-1.5 text-[#514A45] hover:text-[#292624]"
                      title="View Live Article"
                    >
                      <IconArrowUpRight size={16} stroke={1.6} />
                    </Link>
                  )}

                  <button
                    type="button"
                    onClick={() => setDeleteTarget(blog)}
                    className="rounded-sm p-1.5 text-[#81766C] hover:bg-[#B32526]/10 hover:text-[#B32526] transition-colors"
                    title="Delete Article"
                  >
                    <IconTrash size={16} stroke={1.6} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Footer */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-[#E6E0D5] px-6 py-4">
            <span className="text-xs text-[#81766C]">
              Page {page} of {totalPages}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="flex items-center gap-1 rounded-sm border border-[#E6E0D5] bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-[#292624] disabled:opacity-40"
              >
                <IconChevronLeft size={16} />
                <span>Prev</span>
              </button>

              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="flex items-center gap-1 rounded-sm border border-[#E6E0D5] bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-[#292624] disabled:opacity-40"
              >
                <span>Next</span>
                <IconChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#292624]/50 p-4 backdrop-blur-xs"
        >
          <div className="w-full max-w-md rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-6 shadow-xl">
            <h3 className="font-serif text-lg font-medium text-[#292624]">
              Delete Article &ldquo;{deleteTarget.title}&rdquo;?
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#77736C]">
              This action permanently deletes this article from MongoDB. If published, it will no longer be visible to readers.
            </p>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                className="rounded-sm border border-[#E6E0D5] bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#514A45]"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={handleDelete}
                className="rounded-sm bg-[#B32526] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-[#92211F] disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Confirm Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";


import React, { useState, useEffect } from "react";
import {
  IconPlus,
  IconEdit,
  IconTrash,
  IconAlertCircle,
  IconCheck,
  IconX,
} from "@tabler/icons-react";

interface CategoryItem {
  _id: string;
  title: string;
  slug: string;
  subtitle?: string;
  description?: string;
  accentColor: string;
  count?: number;
}

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Form modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<CategoryItem | null>(null);
  const [formTitle, setFormTitle] = useState("");
  const [formSlug, setFormSlug] = useState("");
  const [formSubtitle, setFormSubtitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formAccentColor, setFormAccentColor] = useState("#B32526");
  const [submitting, setSubmitting] = useState(false);

  // Delete modal state
  const [deleteTarget, setDeleteTarget] = useState<CategoryItem | null>(null);
  const [deleting, setDeleting] = useState(false);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/categories");
      const data = await res.json();
      if (res.ok) {
        setCategories(data.categories || []);
      } else {
        setError(data.error || "Failed to load categories");
      }
    } catch {
      setError("An unexpected network error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCategories();
  }, []);

  const openCreateModal = () => {
    setEditingCategory(null);
    setFormTitle("");
    setFormSlug("");
    setFormSubtitle("");
    setFormDescription("");
    setFormAccentColor("#B32526");
    setError(null);
    setIsModalOpen(true);
  };

  const openEditModal = (cat: CategoryItem) => {
    setEditingCategory(cat);
    setFormTitle(cat.title);
    setFormSlug(cat.slug);
    setFormSubtitle(cat.subtitle || "");
    setFormDescription(cat.description || "");
    setFormAccentColor(cat.accentColor || "#B32526");
    setError(null);
    setIsModalOpen(true);
  };

  const handleSaveCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const payload = {
      title: formTitle.trim(),
      slug: formSlug.trim() || undefined,
      subtitle: formSubtitle.trim(),
      description: formDescription.trim(),
      accentColor: formAccentColor,
    };

    try {
      const url = editingCategory
        ? `/api/categories/${editingCategory._id}`
        : "/api/categories";
      const method = editingCategory ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to save category");
        setSubmitting(false);
        return;
      }

      setSuccess(
        editingCategory
          ? `Category "${payload.title}" updated successfully`
          : `Category "${payload.title}" created successfully`
      );
      setIsModalOpen(false);
      fetchCategories();
    } catch {
      setError("Error saving category. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    setError(null);

    try {
      const res = await fetch(`/api/categories/${deleteTarget._id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to delete category");
        setDeleting(false);
        setDeleteTarget(null);
        return;
      }

      setSuccess(`Category "${deleteTarget.title}" deleted.`);
      setDeleteTarget(null);
      fetchCategories();
    } catch {
      setError("Error deleting category");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#E6E0D5] pb-6 sm:flex-row sm:items-end">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B32526]">
            Taxonomy
          </span>
          <h1 className="mt-1 font-serif text-3xl font-medium tracking-tight text-[#292624]">
            Editorial Categories
          </h1>
          <p className="mt-1 text-sm text-[#81766C]">
            Define the thematic pillars that structure The Language Landscapes articles.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          className="inline-flex items-center gap-2 rounded-sm bg-[#B32526] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#92211F] transition-colors"
        >
          <IconPlus size={16} stroke={2} />
          <span>New Category</span>
        </button>
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

      {/* Category List */}
      {loading ? (
        <div className="p-12 text-center text-sm text-[#81766C]">
          Loading categories...
        </div>
      ) : categories.length === 0 ? (
        <div className="rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-12 text-center">
          <p className="text-sm text-[#81766C]">No categories configured.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat._id}
              className="flex flex-col justify-between rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-6 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-3.5 w-3.5 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: cat.accentColor || "#B32526" }}
                    />
                    <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#81766C]">
                      {cat.slug}
                    </span>
                  </div>

                  <span className="rounded-xs bg-[#EFE9DF] px-2 py-0.5 text-[10px] font-semibold text-[#514A45]">
                    {cat.count || 0} {cat.count === 1 ? "article" : "articles"}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-xl font-medium text-[#292624]">
                  {cat.title}
                </h3>

                {cat.subtitle && (
                  <p className="mt-1 text-xs font-medium text-[#A58B64]">
                    {cat.subtitle}
                  </p>
                )}

                {cat.description && (
                  <p className="mt-2 text-xs leading-relaxed text-[#77736C]">
                    {cat.description}
                  </p>
                )}
              </div>

              <div className="mt-6 flex items-center justify-end gap-2 border-t border-[#E6E0D5] pt-4">
                <button
                  type="button"
                  onClick={() => openEditModal(cat)}
                  className="inline-flex items-center gap-1 rounded-sm border border-[#E6E0D5] bg-white px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#292624] hover:border-[#B32526] hover:text-[#B32526]"
                >
                  <IconEdit size={14} />
                  <span>Edit</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDeleteTarget(cat)}
                  className="inline-flex items-center gap-1 rounded-sm border border-transparent px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#B32526] hover:bg-[#B32526]/10"
                >
                  <IconTrash size={14} />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create / Edit Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#292624]/50 p-4 backdrop-blur-xs"
        >
          <div className="w-full max-w-lg rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-6 shadow-xl sm:p-8">
            <div className="flex items-center justify-between border-b border-[#E6E0D5] pb-4">
              <h2 className="font-serif text-xl font-medium text-[#292624]">
                {editingCategory ? "Edit Category" : "Create New Category"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#81766C] hover:text-[#292624]"
              >
                <IconX size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveCategory} className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Learn French"
                  className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-2 text-sm text-[#292624] outline-none focus:border-[#B32526]"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]">
                  Slug (Optional)
                </label>
                <input
                  type="text"
                  value={formSlug}
                  onChange={(e) => setFormSlug(e.target.value)}
                  placeholder="e.g. learn-french"
                  className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-2 text-sm text-[#292624] outline-none focus:border-[#B32526]"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={formSubtitle}
                  onChange={(e) => setFormSubtitle(e.target.value)}
                  placeholder="e.g. Grammar, Vocabulary & Fluency"
                  className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-2 text-sm text-[#292624] outline-none focus:border-[#B32526]"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Short thematic summary for readers..."
                  className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-2 text-sm text-[#292624] outline-none focus:border-[#B32526]"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]">
                  Accent Color
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={formAccentColor}
                    onChange={(e) => setFormAccentColor(e.target.value)}
                    className="h-9 w-12 cursor-pointer rounded-xs border border-[#D9CFC2] bg-white p-0.5"
                  />
                  <input
                    type="text"
                    value={formAccentColor}
                    onChange={(e) => setFormAccentColor(e.target.value)}
                    className="w-32 rounded-sm border border-[#D9CFC2] bg-white px-3 py-1.5 font-mono text-xs text-[#292624] uppercase outline-none focus:border-[#B32526]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-[#E6E0D5] pt-5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-sm border border-[#E6E0D5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#514A45]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-sm bg-[#B32526] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#92211F] disabled:opacity-50"
                >
                  {submitting ? "Saving..." : editingCategory ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#292624]/50 p-4 backdrop-blur-xs"
        >
          <div className="w-full max-w-md rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-6 shadow-xl">
            <h3 className="font-serif text-lg font-medium text-[#292624]">
              Delete Category &ldquo;{deleteTarget.title}&rdquo;?
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#77736C]">
              This action cannot be undone. Categories with associated articles cannot be deleted.
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
                disabled={deleting}
                onClick={handleDelete}
                className="rounded-sm bg-[#B32526] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-[#92211F] disabled:opacity-50"
              >
                {deleting ? "Deleting..." : "Confirm Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

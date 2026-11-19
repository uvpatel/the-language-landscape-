"use client";

import React, { useState, useEffect, useRef, useTransition } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  IconArrowLeft,
  IconDeviceFloppy,
  IconCheck,
  IconPhoto,
  IconEye,
  IconAlertCircle,
  IconX,
} from "@tabler/icons-react";
import CoverImageUploader, { CoverImageData } from "./CoverImageUploader";
import InlineImageModal from "./InlineImageModal";
import { calculateReadingTime } from "@/lib/blog/utils";

// Dynamically import MDEditor with SSR disabled
const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

interface CategoryOption {
  _id: string;
  title: string;
  slug: string;
}

export interface BlogEditorInitialData {
  _id?: string;
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  coverImage?: CoverImageData;
  category: string;
  tags?: string[];
  author?: {
    name: string;
    image?: string;
  };
  status?: "draft" | "published";
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

interface BlogEditorProps {
  initialData?: BlogEditorInitialData;
  isEditMode?: boolean;
}

export function BlogEditor({ initialData, isEditMode = false }: BlogEditorProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();

  // Categories
  const [categories, setCategories] = useState<CategoryOption[]>([]);

  // Core Form State
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [coverImage, setCoverImage] = useState<CoverImageData | undefined>(
    initialData?.coverImage
  );
  const [category, setCategory] = useState(initialData?.category || "");
  const [tagsInput, setTagsInput] = useState((initialData?.tags || []).join(", "));
  const [authorName, setAuthorName] = useState(
    initialData?.author?.name || "The Language Landscapes"
  );

  // SEO State
  const [metaTitle, setMetaTitle] = useState(initialData?.seo?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(
    initialData?.seo?.metaDescription || ""
  );
  const [keywordsInput, setKeywordsInput] = useState(
    (initialData?.seo?.keywords || []).join(", ")
  );
  const [showSeo, setShowSeo] = useState(false);

  // UI & Feedback State
  const [status, setStatus] = useState<"draft" | "published">(
    initialData?.status || "draft"
  );
  const [isInlineModalOpen, setIsInlineModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSavedTime, setLastSavedTime] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Current ID if editing or saved once
  const [savedId, setSavedId] = useState<string | undefined>(initialData?._id);

  // Auto-slugify on title change if not manually touched
  const isSlugCustomized = useRef(Boolean(initialData?.slug));

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        if (data.categories?.length) {
          setCategories(data.categories);
          if (!category) {
            setCategory(data.categories[0].title);
          }
        }
      })
      .catch(() => {});
  }, [category]);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    setHasUnsavedChanges(true);
    if (!isSlugCustomized.current) {
      const generated = val
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      setSlug(generated);
    }
  };

  const handleSlugChange = (val: string) => {
    setSlug(val);
    isSlugCustomized.current = true;
    setHasUnsavedChanges(true);
  };

  // Word and reading stats
  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const charCount = content.length;
  const readingTime = calculateReadingTime(content);

  // Insert image markdown at cursor
  const handleInsertInlineImage = (snippet: string) => {
    setContent((prev) => {
      return prev ? `${prev}\n\n${snippet}\n\n` : snippet;
    });
    setHasUnsavedChanges(true);
  };

  // Save handler (draft or published)
  const handleSave = async (targetStatus: "draft" | "published") => {
    if (!title.trim()) {
      setError("Article title is required.");
      return;
    }
    if (!excerpt.trim()) {
      setError("Excerpt is required.");
      return;
    }
    if (!content.trim()) {
      setError("Article Markdown content is required.");
      return;
    }
    if (!coverImage?.url) {
      setError("A cover image is required.");
      return;
    }
    if (!category.trim()) {
      setError("Please select a category.");
      return;
    }

    setError(null);
    setIsSaving(true);

    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const keywords = keywordsInput
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);

    const payload = {
      title: title.trim(),
      slug: slug.trim() || undefined,
      excerpt: excerpt.trim(),
      content,
      coverImage,
      category,
      tags,
      author: {
        name: authorName.trim() || "The Language Landscapes",
        image: "/banasarithakkar.png",
      },
      status: targetStatus,
      seo: {
        metaTitle: metaTitle.trim() || title.trim(),
        metaDescription: metaDescription.trim() || excerpt.trim(),
        keywords,
      },
    };

    try {
      const endpoint = savedId ? `/api/blogs/${savedId}` : "/api/blogs";
      const method = savedId ? "PATCH" : "POST";

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to save article");
        setIsSaving(false);
        return;
      }

      const returnedBlog = data.blog;
      if (returnedBlog?._id && !savedId) {
        setSavedId(returnedBlog._id);
      }

      setStatus(targetStatus);
      setHasUnsavedChanges(false);
      setLastSavedTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      setSuccess(
        targetStatus === "published"
          ? "Article published live!"
          : "Draft saved successfully"
      );

      if (!savedId && returnedBlog?._id) {
        startTransition(() => {
          router.replace(`/admin/blogs/${returnedBlog._id}/edit`);
        });
      }
    } catch {
      setError("An unexpected network error occurred while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  // Warn before leaving if unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasUnsavedChanges]);

  return (
    <div className="space-y-8 pb-16">
      {/* Top Bar Navigation & Actions */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#E6E0D5] pb-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs"
            className="flex items-center gap-1.5 rounded-sm border border-[#E6E0D5] bg-white px-3 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-[#514A45] hover:border-[#292624]"
          >
            <IconArrowLeft size={16} />
            <span>Articles</span>
          </Link>

          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B32526]">
              {isEditMode ? "Editing Post" : "Drafting Post"}
            </span>
            <div className="flex items-center gap-2">
              <span
                className={`inline-block h-2 w-2 rounded-full ${
                  status === "published" ? "bg-emerald-600" : "bg-[#A58B64]"
                }`}
              />
              <span className="text-xs font-mono uppercase text-[#81766C]">
                {status}
              </span>
              {lastSavedTime && (
                <span className="text-[11px] text-[#81766C]">
                  · Saved at {lastSavedTime}
                </span>
              )}
              {hasUnsavedChanges && (
                <span className="text-[11px] font-medium text-amber-700">
                  · (Unsaved changes)
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {slug && status === "published" && (
            <Link
              href={`/blog/${slug}`}
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-sm border border-[#E6E0D5] bg-white px-3.5 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#292624] hover:border-[#B32526]"
            >
              <IconEye size={16} />
              <span>Live Article</span>
            </Link>
          )}

          <button
            type="button"
            disabled={isSaving}
            onClick={() => handleSave("draft")}
            className="inline-flex items-center gap-1.5 rounded-sm border border-[#D9CFC2] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#514A45] hover:border-[#292624] disabled:opacity-40"
          >
            <IconDeviceFloppy size={16} />
            <span>{isSaving ? "Saving..." : "Save Draft"}</span>
          </button>

          <button
            type="button"
            disabled={isSaving}
            onClick={() => handleSave("published")}
            className="inline-flex items-center gap-1.5 rounded-sm bg-[#B32526] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#92211F] disabled:opacity-40"
          >
            <IconCheck size={16} stroke={2} />
            <span>{status === "published" ? "Update Live" : "Publish"}</span>
          </button>
        </div>
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

      {/* Main Grid: Left editor, Right metadata panel */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Title, Excerpt, Content Editor */}
        <div className="space-y-6 lg:col-span-8">
          {/* Article Title */}
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#514A45]">
              Article Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="e.g. The Nuances of French Subjunctive"
              className="w-full rounded-sm border border-[#D9CFC2] bg-white px-4 py-3 font-serif text-2xl font-normal text-[#292624] placeholder-[#A58B64]/50 outline-none focus:border-[#B32526] sm:text-3xl"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#514A45]">
              Article Excerpt *
            </label>
            <textarea
              rows={3}
              required
              value={excerpt}
              onChange={(e) => {
                setExcerpt(e.target.value);
                setHasUnsavedChanges(true);
              }}
              placeholder="A compelling, succinct 2-sentence summary that appears in blog listings and search engines..."
              className="w-full rounded-sm border border-[#D9CFC2] bg-white p-3.5 text-sm leading-relaxed text-[#292624] placeholder-[#A58B64]/50 outline-none focus:border-[#B32526]"
            />
          </div>

          {/* Markdown Content Area with Editor Toolbar */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E6E0D5] pb-2">
              <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#514A45]">
                Markdown Content *
              </label>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsInlineModalOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-[#D9CFC2] bg-white px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-[#292624] hover:border-[#B32526] hover:text-[#B32526]"
                >
                  <IconPhoto size={15} />
                  <span>Insert Image</span>
                </button>

                <div className="text-[11px] font-mono text-[#81766C]">
                  {wordCount} words · {charCount} chars · {readingTime}
                </div>
              </div>
            </div>

            <div data-color-mode="light" className="overflow-hidden rounded-sm border border-[#D9CFC2] bg-white">
              <MDEditor
                value={content}
                onChange={(val) => {
                  setContent(val || "");
                  setHasUnsavedChanges(true);
                }}
                height={550}
                preview="live"
                visibleDragbar={false}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Metadata & Settings Sidebar */}
        <div className="space-y-6 lg:col-span-4">
          {/* Cover Image Uploader */}
          <div className="rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-5 shadow-sm">
            <CoverImageUploader
              value={coverImage}
              onChange={(img) => {
                setCoverImage(img);
                setHasUnsavedChanges(true);
              }}
            />
          </div>

          {/* Category & Tags Card */}
          <div className="space-y-4 rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-5 shadow-sm">
            <h2 className="font-serif text-base font-medium text-[#292624]">
              Publishing Metadata
            </h2>

            <div>
              <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]">
                Category *
              </label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setHasUnsavedChanges(true);
                }}
                className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-2 text-xs text-[#292624] outline-none focus:border-[#B32526]"
              >
                {categories.map((c) => (
                  <option key={c._id} value={c.title}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]">
                Article Slug *
              </label>
              <input
                type="text"
                value={slug}
                onChange={(e) => handleSlugChange(e.target.value)}
                placeholder="the-nuances-of-french"
                className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-2 font-mono text-xs text-[#292624] outline-none focus:border-[#B32526]"
              />
              <span className="mt-1 block text-[10px] text-[#81766C]">
                URL: /blog/{slug || "slug"}
              </span>
            </div>

            <div>
              <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]">
                Tags (Comma separated)
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => {
                  setTagsInput(e.target.value);
                  setHasUnsavedChanges(true);
                }}
                placeholder="French, Grammar, DELF, Linguistics"
                className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-2 text-xs text-[#292624] outline-none focus:border-[#B32526]"
              />
            </div>

            <div>
              <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]">
                Author Display Name
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => {
                  setAuthorName(e.target.value);
                  setHasUnsavedChanges(true);
                }}
                placeholder="The Language Landscapes"
                className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-2 text-xs text-[#292624] outline-none focus:border-[#B32526]"
              />
            </div>
          </div>

          {/* SEO & Social Card */}
          <div className="rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-5 shadow-sm">
            <button
              type="button"
              onClick={() => setShowSeo(!showSeo)}
              className="flex w-full items-center justify-between text-left"
            >
              <h2 className="font-serif text-base font-medium text-[#292624]">
                SEO & Open Graph
              </h2>
              <span className="text-xs text-[#B32526]">
                {showSeo ? "Hide" : "Configure"}
              </span>
            </button>

            {showSeo && (
              <div className="mt-4 space-y-4 border-t border-[#E6E0D5] pt-4">
                <div>
                  <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]">
                    Meta Title (Defaults to Title)
                  </label>
                  <input
                    type="text"
                    value={metaTitle}
                    onChange={(e) => {
                      setMetaTitle(e.target.value);
                      setHasUnsavedChanges(true);
                    }}
                    placeholder={title || "SEO Title..."}
                    className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-2 text-xs text-[#292624] outline-none focus:border-[#B32526]"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]">
                    Meta Description (Defaults to Excerpt)
                  </label>
                  <textarea
                    rows={3}
                    value={metaDescription}
                    onChange={(e) => {
                      setMetaDescription(e.target.value);
                      setHasUnsavedChanges(true);
                    }}
                    placeholder={excerpt || "Search description..."}
                    className="w-full rounded-sm border border-[#D9CFC2] bg-white p-2.5 text-xs text-[#292624] outline-none focus:border-[#B32526]"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]">
                    SEO Keywords (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={keywordsInput}
                    onChange={(e) => {
                      setKeywordsInput(e.target.value);
                      setHasUnsavedChanges(true);
                    }}
                    placeholder="french lessons, online language school, tll blog"
                    className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-2 text-xs text-[#292624] outline-none focus:border-[#B32526]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Inline Image Modal */}
      <InlineImageModal
        isOpen={isInlineModalOpen}
        onClose={() => setIsInlineModalOpen(false)}
        onInsert={handleInsertInlineImage}
      />
    </div>
  );
}

export default BlogEditor;

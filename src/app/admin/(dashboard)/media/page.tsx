"use client";



import React, { useState } from "react";
import Image from "next/image";
import {
  IconUpload,
  IconCopy,
  IconCheck,
  IconAlertCircle,
  IconPhoto,
} from "@tabler/icons-react";

interface UploadedMedia {
  url: string;
  publicId: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
  uploadedAt: string;
}

export default function AdminMediaPage() {
  const [mediaList, setMediaList] = useState<UploadedMedia[]>([]);
  const [uploadType, setUploadType] = useState<"content" | "covers" | "thumbnails">("content");
  const [altText, setAltText] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", uploadType);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Upload failed");
        setIsUploading(false);
        return;
      }

      const newMedia: UploadedMedia = {
        url: data.url,
        publicId: data.publicId,
        format: data.format,
        width: data.width,
        height: data.height,
        bytes: data.bytes,
        uploadedAt: new Date().toLocaleTimeString(),
      };

      setMediaList((prev) => [newMedia, ...prev]);
      e.target.value = "";
    } catch {
      setError("An unexpected network error occurred while uploading.");
    } finally {
      setIsUploading(false);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#E6E0D5] pb-6">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B32526]">
          Asset Management
        </span>
        <h1 className="mt-1 font-serif text-3xl font-medium tracking-tight text-[#292624]">
          Cloudinary Media Library
        </h1>
        <p className="mt-1 text-sm text-[#81766C]">
          Upload, preview and copy image links directly for Markdown articles and covers.
        </p>
      </div>

      {error && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-sm border border-[#B32526]/30 bg-[#B32526]/10 p-4 text-xs text-[#781E24]"
        >
          <IconAlertCircle size={18} className="shrink-0 text-[#B32526]" />
          <span>{error}</span>
        </div>
      )}

      {/* Upload Zone */}
      <div className="rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-6 shadow-sm sm:p-8">
        <h2 className="font-serif text-xl font-medium text-[#292624]">
          Upload Media Asset
        </h2>
        <p className="mt-1 text-xs text-[#81766C]">
          Accepted formats: JPEG, PNG, WebP, AVIF. Max file size: 5MB.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]">
              Destination Folder
            </label>
            <select
              value={uploadType}
              onChange={(e) => setUploadType(e.target.value as "content" | "covers" | "thumbnails")}
              className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-2 text-xs text-[#292624] outline-none focus:border-[#B32526]"
            >
              <option value="content">the-language-landscape/blogs/content (Article Images)</option>
              <option value="covers">the-language-landscape/blogs/covers (Cover Images)</option>
              <option value="thumbnails">the-language-landscape/blogs/thumbnails (Thumbnails)</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]">
              Optional Alt Description
            </label>
            <input
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="e.g. Students in a French cultural workshop"
              className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-2 text-xs text-[#292624] outline-none focus:border-[#B32526]"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-sm border-2 border-dashed border-[#D9CFC2] bg-white p-8 text-center transition-colors hover:border-[#B32526] hover:bg-[#F8F5EF]/50">
            <IconUpload size={32} stroke={1.4} className="text-[#B32526]" />
            <span className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#292624]">
              {isUploading ? "Uploading to Cloudinary..." : "Choose Image or Drag & Drop"}
            </span>
            <span className="mt-1 text-[11px] text-[#81766C]">
              Optimized automatically with fetch_format and quality auto
            </span>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif"
              onChange={handleFileUpload}
              disabled={isUploading}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Uploaded Gallery in Current Session */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <IconPhoto size={20} stroke={1.6} className="text-[#B32526]" />
          <h2 className="font-serif text-xl font-medium text-[#292624]">
            Recent Uploads ({mediaList.length})
          </h2>
        </div>

        {mediaList.length === 0 ? (
          <div className="rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-10 text-center text-xs text-[#81766C]">
            No images uploaded in this session yet. Upload an asset above to copy its Markdown syntax.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mediaList.map((media, idx) => {
              const markdownSnippet = `![${altText || "Editorial Image"}](${media.url})`;
              const isCopied = copiedIndex === idx;

              return (
                <div
                  key={media.publicId}
                  className="overflow-hidden rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] shadow-sm"
                >
                  <div className="relative aspect-video w-full bg-[#EFE9DF]">
                    <Image
                      src={media.url}
                      alt={media.publicId}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between text-[10px] text-[#81766C]">
                      <span className="font-mono uppercase">{media.format} · {media.width}×{media.height}</span>
                      <span>{(media.bytes / 1024).toFixed(0)} KB</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => copyToClipboard(media.url, idx)}
                        className="flex-1 rounded-sm border border-[#E6E0D5] bg-white py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-[#292624] hover:border-[#B32526] transition-colors"
                      >
                        {isCopied ? "URL Copied" : "Copy URL"}
                      </button>

                      <button
                        type="button"
                        onClick={() => copyToClipboard(markdownSnippet, idx)}
                        className="flex-1 inline-flex items-center justify-center gap-1 rounded-sm bg-[#B32526] py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-white hover:bg-[#92211F] transition-colors"
                      >
                        {isCopied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                        <span>{isCopied ? "Copied" : "Copy MD"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

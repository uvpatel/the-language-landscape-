"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconUpload, IconTrash, IconReplace, IconAlertCircle } from "@tabler/icons-react";

export interface CoverImageData {
  url: string;
  publicId: string;
  alt: string;
}

interface CoverImageUploaderProps {
  value?: CoverImageData;
  onChange: (data: CoverImageData | undefined) => void;
}

export function CoverImageUploader({
  value,
  onChange,
}: CoverImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", "covers");

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to upload cover image");
        setIsUploading(false);
        return;
      }

      onChange({
        url: data.url,
        publicId: data.publicId,
        alt: value?.alt || "",
      });
    } catch {
      setError("An unexpected network error occurred while uploading cover");
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }
  };

  const handleAltChange = (alt: string) => {
    if (value) {
      onChange({
        ...value,
        alt,
      });
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#514A45]">
          Cover Image *
        </label>
        <span className="text-[10px] text-[#81766C]">
          Recommended: 1600 × 900 (16:9 ratio)
        </span>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-xs text-[#B32526]">
          <IconAlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      {value?.url ? (
        <div className="space-y-3">
          <div className="group relative aspect-video w-full overflow-hidden rounded-sm border border-[#E6E0D5] bg-[#EFE9DF]">
            <Image
              src={value.url}
              alt={value.alt || "Cover preview"}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[#292624]/40 opacity-0 backdrop-blur-xs transition-opacity group-hover:opacity-100">
              <label className="flex cursor-pointer items-center gap-1.5 rounded-sm bg-white px-3 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-[#292624] shadow-sm hover:bg-[#F8F5EF]">
                <IconReplace size={15} />
                <span>Replace</span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/avif"
                  onChange={handleUpload}
                  disabled={isUploading}
                  className="hidden"
                />
              </label>

              <button
                type="button"
                onClick={() => onChange(undefined)}
                className="flex items-center gap-1.5 rounded-sm bg-[#B32526] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-white shadow-sm hover:bg-[#92211F]"
              >
                <IconTrash size={15} />
                <span>Remove</span>
              </button>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-[10px] uppercase tracking-[0.14em] text-[#81766C]">
              Cover Alt Text (for accessibility & SEO)
            </label>
            <input
              type="text"
              value={value.alt || ""}
              onChange={(e) => handleAltChange(e.target.value)}
              placeholder="Descriptive alt text for the cover image..."
              className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-1.5 text-xs text-[#292624] outline-none focus:border-[#B32526]"
            />
          </div>
        </div>
      ) : (
        <label className="flex aspect-video w-full cursor-pointer flex-col items-center justify-center rounded-sm border-2 border-dashed border-[#D9CFC2] bg-white p-6 text-center transition-colors hover:border-[#B32526] hover:bg-[#F8F5EF]/60">
          <IconUpload size={28} stroke={1.5} className="text-[#B32526]" />
          <span className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#292624]">
            {isUploading ? "Uploading to Cloudinary..." : "Upload Cover Image"}
          </span>
          <span className="mt-1 text-[11px] text-[#81766C]">
            Click to browse or drag and drop (Max 5MB)
          </span>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            onChange={handleUpload}
            disabled={isUploading}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
}

export default CoverImageUploader;

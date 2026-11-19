"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconUpload, IconX, IconAlertCircle } from "@tabler/icons-react";

interface InlineImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (markdownString: string) => void;
}

export function InlineImageModal({
  isOpen,
  onClose,
  onInsert,
}: InlineImageModalProps) {
  const [altText, setAltText] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", "content");

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Image upload failed");
        setIsUploading(false);
        return;
      }

      setUploadedUrl(data.url);
    } catch {
      setError("An unexpected network error occurred");
    } finally {
      setIsUploading(false);
    }
  };

  const handleConfirm = () => {
    if (!uploadedUrl) return;
    const finalAlt = altText.trim() || "Article illustration";
    const snippet = `![${finalAlt}](${uploadedUrl})`;
    onInsert(snippet);
    onClose();
    setUploadedUrl(null);
    setAltText("");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#292624]/50 p-4 backdrop-blur-xs"
    >
      <div className="w-full max-w-md rounded-sm border border-[#E6E0D5] bg-[#FBFAF6] p-6 shadow-xl sm:p-8">
        <div className="flex items-center justify-between border-b border-[#E6E0D5] pb-4">
          <h2 className="font-serif text-lg font-medium text-[#292624]">
            Insert Inline Image
          </h2>
          <button onClick={onClose} className="text-[#81766C] hover:text-[#292624]">
            <IconX size={20} />
          </button>
        </div>

        {error && (
          <div className="mt-4 flex items-center gap-2 text-xs text-[#B32526]">
            <IconAlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <div className="mt-5 space-y-4">
          <div>
            <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45]">
              Alt Text / Caption
            </label>
            <input
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="e.g. Map of French dialect regions"
              className="w-full rounded-sm border border-[#D9CFC2] bg-white px-3 py-2 text-xs text-[#292624] outline-none focus:border-[#B32526]"
            />
          </div>

          {uploadedUrl ? (
            <div className="space-y-3">
              <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-[#E6E0D5] bg-[#EFE9DF]">
                <Image
                  src={uploadedUrl}
                  alt="Uploaded preview"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[11px] text-emerald-700">
                ✓ Image uploaded successfully to Cloudinary.
              </p>
            </div>
          ) : (
            <label className="flex aspect-video w-full cursor-pointer flex-col items-center justify-center rounded-sm border-2 border-dashed border-[#D9CFC2] bg-white p-6 text-center hover:border-[#B32526]">
              <IconUpload size={28} stroke={1.5} className="text-[#B32526]" />
              <span className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#292624]">
                {isUploading ? "Uploading..." : "Select Image to Upload"}
              </span>
              <span className="mt-1 text-[11px] text-[#81766C]">
                JPEG, PNG, WebP, AVIF up to 5MB
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

        <div className="mt-6 flex items-center justify-end gap-3 border-t border-[#E6E0D5] pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-sm border border-[#E6E0D5] bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#514A45]"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={!uploadedUrl}
            onClick={handleConfirm}
            className="rounded-sm bg-[#B32526] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-[#92211F] disabled:opacity-40"
          >
            Insert at Cursor
          </button>
        </div>
      </div>
    </div>
  );
}

export default InlineImageModal;

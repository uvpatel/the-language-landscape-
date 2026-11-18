"use client";

import React, { useState } from "react";
import {
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
  IconCheck,
  IconCopy,
  IconShare,
} from "@tabler/icons-react";
import { buildShareLinks } from "@/lib/blog/utils";

interface ArticleShareProps {
  title: string;
  excerpt?: string;
  url?: string;
}

export function ArticleShare({ title, excerpt, url }: ArticleShareProps) {
  const [copied, setCopied] = useState(false);

  // Derive current URL safely on client
  const currentUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");

  const shareLinks = buildShareLinks(currentUrl, title, excerpt);

  const handleCopy = async () => {
    if (!currentUrl) return;

    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text: excerpt || title,
          url: currentUrl,
        });
      } catch {
        // User cancelled or aborted share
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="rounded-sm border border-[#292624]/10 bg-[#FFFFFF] p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-lg font-medium text-[#292624]">
            Share this perspective
          </p>
          <p className="mt-1 text-xs text-[#81766C]">
            If this article sparked an idea, pass it on to fellow curious minds.
          </p>
        </div>

        {/* Share buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Native Web Share API (if supported) */}
          {typeof navigator !== "undefined" && typeof navigator.share === "function" && (
            <button
              type="button"
              onClick={handleNativeShare}
              className="inline-flex h-10 items-center gap-2 rounded-xs border border-[#292624]/15 bg-[#F8F5EF] px-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#292624] transition-all hover:border-[#B32526] hover:text-[#B32526]"
              aria-label="Share article"
            >
              <IconShare size={16} stroke={1.8} />
              <span>Share</span>
            </button>
          )}

          {/* Copy Link */}
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex h-10 items-center gap-2 rounded-xs border border-[#292624]/15 bg-[#F8F5EF] px-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#292624] transition-all hover:border-[#B32526] hover:text-[#B32526]"
            aria-label="Copy link to article"
          >
            {copied ? (
              <>
                <IconCheck size={16} stroke={2} className="text-emerald-700" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <IconCopy size={16} stroke={1.8} />
                <span>Copy Link</span>
              </>
            )}
          </button>

          {/* LinkedIn */}
          <a
            href={shareLinks.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xs border border-[#292624]/15 bg-[#F8F5EF] text-[#514A45] transition-all hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
            aria-label="Share on LinkedIn"
          >
            <IconBrandLinkedin size={18} stroke={1.8} />
          </a>

          {/* WhatsApp */}
          <a
            href={shareLinks.whatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xs border border-[#292624]/15 bg-[#F8F5EF] text-[#514A45] transition-all hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
            aria-label="Share on WhatsApp"
          >
            <IconBrandWhatsapp size={18} stroke={1.8} />
          </a>

          {/* X / Twitter */}
          <a
            href={shareLinks.x}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xs border border-[#292624]/15 bg-[#F8F5EF] text-[#514A45] transition-all hover:border-[#292624] hover:bg-[#292624] hover:text-white"
            aria-label="Share on X"
          >
            <IconBrandX size={17} stroke={1.8} />
          </a>
        </div>
      </div>
    </div>
  );
}

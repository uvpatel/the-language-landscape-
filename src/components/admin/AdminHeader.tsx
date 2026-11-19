"use client";

import React from "react";
import Link from "next/link";
import { IconMenu2, IconPlus, IconExternalLink } from "@tabler/icons-react";

interface AdminHeaderProps {
  onToggleMobileSidebar: () => void;
  title?: string;
}

export function AdminHeader({
  onToggleMobileSidebar,
  title,
}: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-[#E6E0D5] bg-[#F8F5EF]/95 px-6 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onToggleMobileSidebar}
          aria-label="Open navigation menu"
          className="rounded-sm p-1.5 text-[#514A45] transition-colors hover:bg-[#EFE9DF] lg:hidden"
        >
          <IconMenu2 size={22} stroke={1.6} />
        </button>

        {title && (
          <h1 className="font-serif text-lg font-semibold tracking-tight text-[#292624] sm:text-xl">
            {title}
          </h1>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1.5 rounded-sm border border-[#E6E0D5] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#514A45] transition-colors hover:border-[#292624] sm:inline-flex"
        >
          <span>Live Site</span>
          <IconExternalLink size={14} stroke={1.5} />
        </Link>

        <Link
          href="/admin/blogs/create"
          className="inline-flex items-center gap-1.5 rounded-sm bg-[#B32526] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#92211F]"
        >
          <IconPlus size={15} stroke={1.8} />
          <span>New Article</span>
        </Link>
      </div>
    </header>
  );
}

export default AdminHeader;

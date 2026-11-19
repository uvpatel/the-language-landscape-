"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  IconDashboard,
  IconArticle,
  IconPlus,
  IconCategory,
  IconPhoto,
  IconLogout,
  IconExternalLink,
} from "@tabler/icons-react";

interface AdminSidebarProps {
  onCloseMobile?: () => void;
}

export function AdminSidebar({ onCloseMobile }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const navItems = [
    {
      label: "Overview",
      href: "/admin",
      icon: IconDashboard,
      exact: true,
    },
    {
      label: "All Blogs",
      href: "/admin/blogs",
      icon: IconArticle,
      exact: true,
    },
    {
      label: "Write Article",
      href: "/admin/blogs/create",
      icon: IconPlus,
      exact: true,
    },
    {
      label: "Categories",
      href: "/admin/categories",
      icon: IconCategory,
      exact: false,
    },
    {
      label: "Media Library",
      href: "/admin/media",
      icon: IconPhoto,
      exact: false,
    },
  ];

  return (
    <aside className="flex h-full w-64 flex-col justify-between border-r border-[#E6E0D5] bg-[#FBFAF6] px-5 py-6">
      <div>
        {/* Brand */}
        <Link
          href="/admin"
          onClick={onCloseMobile}
          className="flex items-center gap-3 px-2 pb-6 border-b border-[#E6E0D5]"
        >
          <Image
            src="/logo.png"
            alt="The Language Landscapes logo"
            width={38}
            height={38}
            className="h-9 w-9 object-contain"
          />
          <div>
            <span className="font-serif text-[17px] font-semibold leading-tight text-[#292624]">
              TLL Editorial
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#B32526]">
              Admin CMS
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="mt-6 space-y-1" aria-label="Admin Navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onCloseMobile}
                className={`flex items-center gap-3 rounded-sm px-3 py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-colors ${
                  isActive
                    ? "bg-[#B32526] text-white shadow-sm"
                    : "text-[#514A45] hover:bg-[#EFE9DF] hover:text-[#292624]"
                }`}
              >
                <Icon size={18} stroke={1.6} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer controls */}
      <div className="space-y-2 border-t border-[#E6E0D5] pt-4">
        <Link
          href="/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-sm px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#81766C] transition-colors hover:bg-[#EFE9DF] hover:text-[#292624]"
        >
          <span className="flex items-center gap-2">
            <IconExternalLink size={16} stroke={1.5} />
            View Live Site
          </span>
          <span className="text-[10px] text-[#A58B64]">/blog</span>
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#B32526] transition-colors hover:bg-[#B32526]/10"
        >
          <IconLogout size={16} stroke={1.6} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}

export default AdminSidebar;

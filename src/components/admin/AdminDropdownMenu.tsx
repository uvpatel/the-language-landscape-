"use client";

import React, { useState, useRef, useEffect, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export interface AdminDropdownMenuItem {
  id?: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
  badge?: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "danger" | "warning";
  disabled?: boolean;
  dividerBefore?: boolean;
}

export interface AdminDropdownMenuProps {
  trigger: React.ReactNode;
  items: AdminDropdownMenuItem[];
  align?: "left" | "right";
  className?: string;
  menuClassName?: string;
}

export function AdminDropdownMenu({
  trigger,
  items,
  align = "right",
  className = "",
  menuClassName = "",
}: AdminDropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${isOpen ? "z-50" : "z-10"} ${className}`}
    >
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen((prev) => !prev);
          }
        }}
        className="cursor-pointer outline-none inline-flex"
      >
        {trigger}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={menuId}
            role="menu"
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute top-full mt-1.5 min-w-[200px] overflow-hidden rounded-md border border-[#D9CFC2] bg-[#FCFAF7] shadow-[0_14px_34px_-6px_rgba(41,38,36,0.14),0_4px_12px_rgba(41,38,36,0.06)] z-50 ${
              align === "right" ? "right-0" : "left-0"
            } ${menuClassName}`}
          >
            {/* Top gold/burgundy accent line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[#B32526] via-[#A58B64] to-[#B32526]" />

            <div className="p-1.5 space-y-0.5">
              {items.map((item, idx) => {
                const isDanger = item.variant === "danger";

                const content = (
                  <div
                    className={`flex items-center justify-between rounded-sm px-3 py-2 text-xs transition-colors select-none ${
                      item.disabled
                        ? "cursor-not-allowed opacity-40 text-[#81766C]"
                        : isDanger
                        ? "cursor-pointer text-[#B32526] hover:bg-[#B32526]/10"
                        : "cursor-pointer text-[#292624] hover:bg-[#F3EEE5] hover:text-[#781E24]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      {item.icon && (
                        <span
                          className={`shrink-0 ${
                            isDanger
                              ? "text-[#B32526]"
                              : "text-[#81766C] group-hover:text-[#781E24]"
                          }`}
                        >
                          {item.icon}
                        </span>
                      )}
                      <div className="flex flex-col min-w-0">
                        <span className="font-medium truncate">{item.label}</span>
                        {item.description && (
                          <span className="text-[10px] text-[#81766C]">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </div>

                    {item.badge && (
                      <span className="rounded-xs bg-[#EFE9DF] px-1.5 py-0.5 text-[9px] font-semibold text-[#514A45]">
                        {item.badge}
                      </span>
                    )}
                  </div>
                );

                return (
                  <React.Fragment key={item.id || `${item.label}-${idx}`}>
                    {item.dividerBefore && (
                      <div className="my-1 border-t border-[#E6E0D5]" />
                    )}
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => {
                          setIsOpen(false);
                          if (item.onClick) item.onClick();
                        }}
                        className="block no-underline"
                        role="menuitem"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div
                        role="menuitem"
                        onClick={() => {
                          if (item.disabled) return;
                          setIsOpen(false);
                          if (item.onClick) item.onClick();
                        }}
                      >
                        {content}
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AdminDropdownMenu;

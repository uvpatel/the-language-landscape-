"use client";

import Link from "next/link";

interface DocumentTocProps {
  clauses: { title: string }[];
  prefix: string;
  activeClauseId: string | null;
}

export function DocumentToc({
  clauses,
  prefix,
  activeClauseId,
}: DocumentTocProps) {
  return (
    <div className="w-full">
      {/* Desktop Sticky Index */}
      <div className="hidden lg:block">
        <div className="sticky top-36 rounded-sm border border-[#292724]/10 bg-[#FFFFFF] p-6 shadow-[0_2px_12px_rgba(41,39,36,0.03)]">
          <div className="mb-4 flex items-center justify-between border-b border-[#292724]/10 pb-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#81766C]">
              Table of Contents
            </span>
            <span className="text-[11px] font-mono font-medium text-[#8A2424]">
              {clauses.length} Clauses
            </span>
          </div>

          <ul className="space-y-1 text-xs">
            {clauses.map((clause, index) => {
              const clauseId = `${prefix}-clause-${index + 1}`;
              const formattedIndex = String(index + 1).padStart(2, "0");
              const isActive = activeClauseId === clauseId;

              return (
                <li key={clause.title}>
                  <Link
                    href={`#${clauseId}`}
                    className={`group flex items-center gap-2.5 rounded-xs px-2.5 py-1.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8A2424] ${
                      isActive
                        ? "bg-[#8A2424]/10 font-semibold text-[#8A2424]"
                        : "text-[#514A45] hover:bg-[#F7F5F0] hover:text-[#292724]"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] tabular-nums transition-colors ${
                        isActive
                          ? "text-[#8A2424]"
                          : "text-[#81766C] group-hover:text-[#292724]"
                      }`}
                    >
                      {formattedIndex}
                    </span>
                    <span className="truncate leading-normal">
                      {clause.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile / Tablet Horizontal Scrollable TOC Bar */}
      <div className="block lg:hidden mb-8">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#81766C]">
          Quick Navigation
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {clauses.map((clause, index) => {
            const clauseId = `${prefix}-clause-${index + 1}`;
            const formattedIndex = String(index + 1).padStart(2, "0");
            const isActive = activeClauseId === clauseId;

            return (
              <Link
                key={clause.title}
                href={`#${clauseId}`}
                className={`shrink-0 rounded-xs border px-3 py-1.5 text-xs transition-colors ${
                  isActive
                    ? "border-[#8A2424] bg-[#8A2424] font-medium text-white"
                    : "border-[#292724]/10 bg-white text-[#514A45] hover:border-[#8A2424]/40"
                }`}
              >
                <span className="font-mono text-[10px] mr-1.5 opacity-70">
                  {formattedIndex}
                </span>
                <span>{clause.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

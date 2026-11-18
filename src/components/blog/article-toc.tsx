import React from "react";
import { IconListTree } from "@tabler/icons-react";

interface TocItem {
  id: string;
  title: string;
}

interface ArticleTocProps {
  content: string;
}

export function ArticleToc({ content }: ArticleTocProps) {
  // Extract all h2 headings from markdown: ## Heading Text
  const headingMatches = content.match(/^##\s+(.+)$/gm);

  if (!headingMatches || headingMatches.length < 2) {
    return null;
  }

  const items: TocItem[] = headingMatches.map((match) => {
    const title = match.replace(/^##\s+/, "").trim();
    const id = title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    return { id, title };
  });

  return (
    <nav
      aria-label="Table of Contents"
      className="my-10 rounded-sm border border-[#292624]/10 bg-[#EFE9DF]/50 p-6 sm:p-7"
    >
      <div className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#781E24]">
        <IconListTree size={16} stroke={2} />
        <span>Contents & Themes</span>
      </div>

      <ol className="space-y-2.5">
        {items.map((item, index) => (
          <li key={item.id} className="flex items-baseline gap-3 text-sm">
            <span className="font-serif text-xs font-semibold text-[#A58B64]">
              0{index + 1}
            </span>
            <a
              href={`#${item.id}`}
              className="text-[#514A45] transition-colors duration-200 hover:text-[#B32526] hover:underline hover:decoration-[#B32526]/50 hover:underline-offset-4"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

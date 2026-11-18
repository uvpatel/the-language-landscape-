import React from "react";

interface ArticleContentProps {
  children: React.ReactNode;
}

export function ArticleContent({ children }: ArticleContentProps) {
  return (
    <div className="mx-auto max-w-[760px]">
      <div className="editorial-prose text-[#514A45]">
        {children}
      </div>
    </div>
  );
}

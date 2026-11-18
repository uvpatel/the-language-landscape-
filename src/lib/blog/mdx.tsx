import React from "react";
import Image from "next/image";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { IconInfoCircle, IconQuote } from "@tabler/icons-react";

interface CalloutProps {
  title?: string;
  children: React.ReactNode;
}

export function Callout({ title, children }: CalloutProps) {
  return (
    <aside className="my-8 overflow-hidden rounded-sm border border-[#A58B64]/40 bg-[#EFE9DF]/60 p-6 sm:p-7">
      <div className="flex items-start gap-4">
        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B32526]/10 text-[#B32526]">
          <IconInfoCircle size={18} stroke={1.8} />
        </div>
        <div className="min-w-0 flex-1">
          {title && (
            <h4 className="font-serif text-lg font-semibold tracking-tight text-[#292624]">
              {title}
            </h4>
          )}
          <div className="mt-2 text-[15px] leading-relaxed text-[#514A45]">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}

export const mdxCustomComponents = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    // Generate anchor id from heading text
    const id =
      typeof children === "string"
        ? children.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")
        : undefined;

    return (
      <h2
        id={id}
        className="group relative mb-5 mt-12 scroll-mt-28 font-serif text-2xl font-semibold tracking-tight text-[#292624] sm:text-3xl"
        {...props}
      >
        <span className="text-[#B32526] opacity-0 transition-opacity group-hover:opacity-100 mr-2 -ml-6 select-none font-sans text-xl">
          #
        </span>
        {children}
      </h2>
    );
  },

  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id =
      typeof children === "string"
        ? children.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")
        : undefined;

    return (
      <h3
        id={id}
        className="mb-4 mt-8 scroll-mt-28 font-serif text-xl font-medium tracking-tight text-[#292624] sm:text-2xl"
        {...props}
      >
        {children}
      </h3>
    );
  },

  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mb-6 font-sans text-[17px] leading-[1.8] text-[#514A45] selection:bg-[#B32526] selection:text-white"
      {...props}
    >
      {children}
    </p>
  ),

  blockquote: ({ children, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <figure className="my-10 border-l-2 border-[#B32526] pl-6 sm:pl-8">
      <div className="mb-2 text-[#B32526]/40">
        <IconQuote size={28} stroke={1.5} />
      </div>
      <blockquote
        className="font-serif text-xl leading-relaxed text-[#292624] sm:text-2xl"
        {...props}
      >
        {children}
      </blockquote>
    </figure>
  ),

  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-6 space-y-3 pl-6" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="my-6 list-decimal space-y-3 pl-6 font-sans text-[17px] text-[#514A45]" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li
      className="relative pl-2 font-sans text-[17px] leading-[1.75] text-[#514A45] marker:text-[#B32526]"
      {...props}
    >
      {children}
    </li>
  ),

  a: ({ href = "", children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link
          href={href}
          className="font-medium text-[#B32526] underline decoration-[#B32526]/40 underline-offset-4 transition-colors hover:text-[#781E24] hover:decoration-[#781E24]"
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[#B32526] underline decoration-[#B32526]/40 underline-offset-4 transition-colors hover:text-[#781E24] hover:decoration-[#781E24]"
        {...props}
      >
        {children}
      </a>
    );
  },

  hr: () => (
    <div className="my-12 flex items-center justify-center gap-3">
      <span className="h-px w-16 bg-[#292624]/10" />
      <span className="text-[#A58B64] font-serif text-lg">✦</span>
      <span className="h-px w-16 bg-[#292624]/10" />
    </div>
  ),

  img: ({ src, alt }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    if (!src || typeof src !== "string") return null;
    return (
      <figure className="my-10">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#EFE9DF]">
          <Image
            src={src}
            alt={alt || "Article illustration"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
        {alt && (
          <figcaption className="mt-3 text-center text-xs tracking-wide text-[#81766C]">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  },

  Callout,
};

export async function renderMdxContent(rawSource: string) {
  const { content } = await compileMDX({
    source: rawSource,
    components: mdxCustomComponents,
  });

  return content;
}

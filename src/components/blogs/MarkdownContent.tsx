import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IconQuote } from "@tabler/icons-react";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="editorial-prose font-sans text-[17px] leading-[1.8] text-[#514A45]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => {
            const id =
              typeof children === "string"
                ? children.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")
                : undefined;
            return (
              <h1
                id={id}
                className="mb-6 mt-12 scroll-mt-28 font-serif text-3xl font-semibold tracking-tight text-[#292624] sm:text-4xl"
              >
                {children}
              </h1>
            );
          },

          h2: ({ children }) => {
            const id =
              typeof children === "string"
                ? children.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")
                : undefined;
            return (
              <h2
                id={id}
                className="group relative mb-5 mt-12 scroll-mt-28 font-serif text-2xl font-semibold tracking-tight text-[#292624] sm:text-3xl"
              >
                <span className="mr-2 -ml-6 select-none font-sans text-xl text-[#B32526] opacity-0 transition-opacity group-hover:opacity-100">
                  #
                </span>
                {children}
              </h2>
            );
          },

          h3: ({ children }) => {
            const id =
              typeof children === "string"
                ? children.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")
                : undefined;
            return (
              <h3
                id={id}
                className="mb-4 mt-8 scroll-mt-28 font-serif text-xl font-medium tracking-tight text-[#292624] sm:text-2xl"
              >
                {children}
              </h3>
            );
          },

          h4: ({ children }) => (
            <h4 className="mb-3 mt-6 font-serif text-lg font-medium text-[#292624]">
              {children}
            </h4>
          ),

          p: ({ children }) => (
            <p className="mb-6 font-sans text-[17px] leading-[1.8] text-[#514A45]">
              {children}
            </p>
          ),

          blockquote: ({ children }) => (
            <figure className="my-10 border-l-2 border-[#B32526] pl-6 sm:pl-8">
              <div className="mb-2 text-[#B32526]/40">
                <IconQuote size={28} stroke={1.5} />
              </div>
              <blockquote className="font-serif text-xl leading-relaxed text-[#292624] sm:text-2xl">
                {children}
              </blockquote>
            </figure>
          ),

          ul: ({ children }) => (
            <ul className="my-6 space-y-3 pl-6 list-disc marker:text-[#B32526]">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="my-6 space-y-3 pl-6 list-decimal marker:text-[#B32526]">
              {children}
            </ol>
          ),

          li: ({ children }) => (
            <li className="text-[17px] leading-relaxed text-[#514A45]">
              {children}
            </li>
          ),

          hr: () => (
            <hr className="my-12 border-t border-[#D9CFC2]/60" />
          ),

          a: ({ href, children }) => {
            const isExternal = href?.startsWith("http");
            if (isExternal) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#B32526] underline decoration-[#B32526]/40 underline-offset-4 hover:decoration-[#B32526]"
                >
                  {children}
                </a>
              );
            }
            return (
              <Link
                href={href || "#"}
                className="font-medium text-[#B32526] underline decoration-[#B32526]/40 underline-offset-4 hover:decoration-[#B32526]"
              >
                {children}
              </Link>
            );
          },

          img: ({ src, alt }) => {
            if (!src || typeof src !== "string") return null;

            return (
              <figure className="my-10 overflow-hidden rounded-sm border border-[#D9CFC2] bg-[#FBFAF6]">
                <div className="relative aspect-video w-full bg-[#EFE9DF]">
                  <Image
                    src={src}
                    alt={alt || "Article illustration"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                  />
                </div>
                {alt && (
                  <figcaption className="border-t border-[#D9CFC2]/70 bg-[#F8F5EF] px-5 py-3 text-center text-xs text-[#81766C]">
                    {alt}
                  </figcaption>
                )}
              </figure>
            );
          },

          table: ({ children }) => (
            <div className="my-8 overflow-x-auto rounded-sm border border-[#D9CFC2]">
              <table className="w-full text-left text-sm text-[#514A45]">
                {children}
              </table>
            </div>
          ),

          thead: ({ children }) => (
            <thead className="border-b border-[#D9CFC2] bg-[#EFE9DF] text-xs font-semibold uppercase tracking-[0.1em] text-[#292624]">
              {children}
            </thead>
          ),

          th: ({ children }) => (
            <th className="px-4 py-3">{children}</th>
          ),

          td: ({ children }) => (
            <td className="border-b border-[#D9CFC2]/50 px-4 py-3 text-xs sm:text-sm">
              {children}
            </td>
          ),

          code: ({ children, className }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <div className="my-6 overflow-x-auto rounded-sm bg-[#292624] p-5 text-sm text-[#F8F5EF] font-mono">
                  <code>{children}</code>
                </div>
              );
            }
            return (
              <code className="rounded-xs bg-[#EFE9DF] px-1.5 py-0.5 font-mono text-xs text-[#B32526]">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownContent;

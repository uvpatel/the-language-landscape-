import React from "react";
import Image from "next/image";

interface ArticleImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export function ArticleImage({ src, alt, priority = true }: ArticleImageProps) {
  return (
    <figure className="my-12 sm:my-16">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-[#292624]/10 bg-[#EFE9DF] sm:aspect-[21/10]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
      </div>
      {alt && (
        <figcaption className="mt-3.5 text-center font-sans text-xs tracking-wide text-[#81766C]">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}

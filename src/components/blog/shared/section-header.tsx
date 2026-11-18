import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "left",
  light = false,
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : ""
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-3 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span
            className={`h-px w-9 ${
              light ? "bg-white/50" : "bg-[#B32526]"
            }`}
          />
          <p
            className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${
              light ? "text-[#EFE9DF]/80" : "text-[#81766C]"
            }`}
          >
            {eyebrow}
          </p>
          {isCenter && (
            <span
              className={`h-px w-9 ${
                light ? "bg-white/50" : "bg-[#B32526]"
              }`}
            />
          )}
        </div>
      )}

      <h2
        className={`font-serif text-3xl font-normal tracking-[-0.02em] sm:text-4xl lg:text-5xl ${
          light ? "text-[#F8F5EF]" : "text-[#292624]"
        }`}
      >
        {heading}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? "text-[#EFE9DF]/85" : "text-[#514A45]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

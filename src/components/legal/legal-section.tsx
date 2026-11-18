import type { ReactNode } from "react";

interface LegalSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  openingStatement?: string;
  effectiveDate?: string;
  children: ReactNode;
}

export function LegalSection({
  id,
  eyebrow,
  title,
  openingStatement,
  effectiveDate,
  children,
}: LegalSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-36 border-t border-[#292724]/10 bg-[#FDFCFA] px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-14 max-w-4xl sm:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 bg-[#8A2424]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A2424]">
              {eyebrow}
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-medium tracking-tight text-[#292724] sm:text-5xl md:text-6xl">
            {title}
          </h2>

          {effectiveDate && (
            <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#81766C]">
              <span>Effective Date:</span>
              <span className="text-[#292724]">{effectiveDate}</span>
            </div>
          )}

          {openingStatement && (
            <div className="mt-8 border-l-2 border-[#8A2424] bg-[#F7F5F0] p-6 sm:p-7">
              <p className="text-[15px] leading-relaxed text-[#292724] sm:text-base">
                {openingStatement}
              </p>
            </div>
          )}
        </div>

        {/* Content Clauses */}
        <div className="border-t border-[#292724]/15">{children}</div>
      </div>
    </section>
  );
}

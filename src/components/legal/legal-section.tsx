
import type { ReactNode } from "react";

type LegalSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalSection({
  id,
  eyebrow,
  title,
  description,
  children,
}: LegalSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-36 bg-[#F8F5EF] px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl md:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B32526]">
            {eyebrow}
          </span>

          <h2 className="mt-5 font-heading text-4xl leading-tight text-[#292624] md:text-6xl">
            {title}
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#514A45] md:text-base">
            {description}
          </p>
        </div>

        <div className="border-t border-[#292624]/15">{children}</div>
      </div>
    </section>
  );
}

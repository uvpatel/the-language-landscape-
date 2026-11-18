import type { LegalClause } from "@/lib/legal/data";

interface LegalContentProps {
  clauses: LegalClause[];
}

export function LegalContent({ clauses }: LegalContentProps) {
  return (
    <div className="divide-y divide-[#292724]/10">
      {clauses.map((clause, index) => {
        const formattedIndex = String(index + 1).padStart(2, "0");

        return (
          <article
            key={clause.title}
            className="py-10 first:pt-4 last:pb-0 sm:py-12"
          >
            <div className="grid gap-6 md:grid-cols-[72px_1fr] md:gap-10">
              {/* Sequential numeral */}
              <span className="font-mono text-sm font-semibold tracking-wider text-[#8A2424]">
                {formattedIndex}
              </span>

              {/* Clause Body */}
              <div className="max-w-3xl">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-medium tracking-tight text-[#292724] sm:text-3xl">
                  {clause.title}
                </h3>

                <div className="mt-5 space-y-4">
                  {clause.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-[15px] leading-8 text-[#514A45] sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {clause.list && clause.list.length > 0 && (
                  <ul className="mt-5 space-y-3 pl-5 text-[15px] leading-7 text-[#514A45] sm:text-base">
                    {clause.list.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-disc pl-1 text-[#514A45]">
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

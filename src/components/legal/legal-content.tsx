
import type { LegalClause } from "@/lib/legal/data";

type LegalContentProps = {
  clauses: LegalClause[];
};

export function LegalContent({ clauses }: LegalContentProps) {
  return (
    <div className="divide-y divide-[#292624]/10">
      {clauses.map((clause, index) => (
        <article key={clause.title} className="py-8 md:py-10">
          <div className="grid gap-4 md:grid-cols-[64px_1fr] md:gap-8">
            <span className="font-heading text-2xl text-[#B32526]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3 className="font-heading text-2xl text-[#292624] md:text-3xl">
                {clause.title}
              </h3>

              {clause.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="mt-4 max-w-3xl text-sm leading-8 text-[#514A45] md:text-base"
                >
                  {paragraph}
                </p>
              ))}

              {clause.list && (
                <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-[#514A45] md:text-base">
                  {clause.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

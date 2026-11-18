
import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-[#B32526]" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
        {children}
      </span>
    </div>
  );
}

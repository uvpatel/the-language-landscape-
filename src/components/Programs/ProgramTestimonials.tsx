import React from "react";
import { IconQuote } from "@tabler/icons-react";
import type { ProgramTestimonial } from "@/data/programs";

interface ProgramTestimonialsProps {
  testimonials: ProgramTestimonial[];
}

export function ProgramTestimonials({ testimonials }: ProgramTestimonialsProps) {
  // Only display verified and approved testimonials
  const approvedTestimonials = testimonials.filter((t) => t.approved);

  if (approvedTestimonials.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 border-t border-[#D9CFC2] pt-12">
      <div className="mb-8 flex items-center gap-3">
        <span className="h-px w-6 bg-[#B32526]" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#81766C]">
          Learner Perspectives
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {approvedTestimonials.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-sm border border-[#D9CFC2] bg-[#F8F5EF] p-8 shadow-sm"
          >
            <div className="mb-4 text-[#B32526]/30">
              <IconQuote size={28} stroke={1.4} />
            </div>

            <blockquote className="font-[family-name:var(--font-heading)] text-lg leading-relaxed text-[#292624] sm:text-xl">
              &ldquo;{item.quote}&rdquo;
            </blockquote>

            <div className="mt-6 flex items-center gap-2 border-t border-[#D9CFC2]/70 pt-4">
              <span className="h-px w-4 bg-[#A58B64]" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#81766C]">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

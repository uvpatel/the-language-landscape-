import type { ReactNode } from "react";

interface LegalBookPageProps {
  pageNumber?: number | string;
  runningHeader?: string;
  side: "left" | "right" | "single";
  isCover?: boolean;
  children: ReactNode;
}

export function LegalBookPage({
  pageNumber,
  runningHeader,
  side,
  isCover = false,
  children,
}: LegalBookPageProps) {
  const isLeft = side === "left";
  const isRight = side === "right";

  return (
    <div
      className={`custom-scrollbar relative flex h-full flex-col justify-between overflow-y-auto p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 ${
        isLeft
          ? "lg:pr-14 xl:pr-16"
          : isRight
          ? "lg:pl-14 xl:pl-16"
          : ""
      } ${
        isCover
          ? "bg-[#FDFCFA]"
          : isLeft
          ? "bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#F9F7F2]"
          : isRight
          ? "bg-gradient-to-l from-[#FFFFFF] via-[#FFFFFF] to-[#F9F7F2]"
          : "bg-[#FFFFFF]"
      }`}
    >
      {/* Top Running Header */}
      {!isCover && (
        <div className="mb-6 flex items-center justify-between border-b border-[#292724]/10 pb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#81766C] lg:mb-8 lg:text-[11px]">
          <span>{isLeft ? runningHeader ?? "THE LANGUAGE LANDSCAPES" : "OFFICIAL PUBLICATION"}</span>
          <span className="font-mono text-[#8A2424]">{isRight ? runningHeader : ""}</span>
        </div>
      )}

      {/* Main Page Content */}
      <div className="flex-1 w-full max-w-[620px] mx-auto flex flex-col justify-between">
        {children}
      </div>

      {/* Bottom Folio / Page Number */}
      {!isCover && pageNumber !== undefined && (
        <div
          className={`mt-6 flex items-center border-t border-[#292724]/10 pt-3 text-xs font-mono text-[#81766C] lg:mt-8 ${
            isLeft ? "justify-start" : "justify-end"
          }`}
        >
          <span>Page {pageNumber}</span>
        </div>
      )}
    </div>
  );
}

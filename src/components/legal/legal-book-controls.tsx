"use client";

interface LegalBookProgressProps {
  currentSpread: number;
  totalSpreads: number;
  chapterTitle: string;
  progressPercent: number;
}

export function LegalBookControls({
  currentSpread,
  totalSpreads,
  chapterTitle,
  progressPercent,
}: LegalBookProgressProps) {
  // Compute page range
  const getPageLabel = () => {
    if (currentSpread === 0) return "Cover Edition";
    if (currentSpread === 1) return "Pages 01–02";
    if (currentSpread === 2) return "Pages 03–04";
    if (currentSpread === 3) return "Pages 05–06";
    if (currentSpread === 4) return "Pages 07–08";
    if (currentSpread === 5) return "Pages 09–10";
    if (currentSpread === 6) return "Pages 11–12";
    return "Pages 13–14 · Colophon";
  };

  return (
    <div className="mt-6 flex w-full max-w-xl flex-col items-center gap-2.5 px-4">
      {/* Chapter & Page Metadata */}
      <div className="flex w-full items-center justify-between text-xs text-[#514A45]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8A2424]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A2424]">
            {chapterTitle}
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-[#81766C]">
          <span>{getPageLabel()}</span>
          <span>·</span>
          <span>Spread {currentSpread + 1} of {totalSpreads}</span>
        </div>
      </div>

      {/* Thin Reading Progress Indicator */}
      <div
        role="progressbar"
        aria-valuenow={Math.round(progressPercent)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Legal book reading progress"
        className="relative h-1 w-full overflow-hidden rounded-full bg-[#292724]/10"
      >
        <div
          className="h-full bg-[#8A2424] transition-all duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
        />
      </div>

      {/* Discrete Scroll Cue */}
      <span className="text-[10px] tracking-widest uppercase text-[#81766C]/70">
        Scroll naturally to turn pages
      </span>
    </div>
  );
}

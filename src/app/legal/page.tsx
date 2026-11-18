import type { Metadata } from "next";
import { LegalHero } from "@/components/legal/legal-hero";

import { LegalBook } from "@/components/legal/legal-book";
import { LegalCta } from "@/components/legal/legal-cta";

export const metadata: Metadata = {
  title: "Legal & Policies | The Language Landscapes",
  description:
    "Explore the interactive digital legal documentation of The Language Landscapes Inc., including Terms & Conditions and Privacy Policy.",
};

export default function LegalPage() {
  return (
    <>
      <main className="bg-[#F7F5F0]">
        <LegalHero />
        <LegalBook />
        <LegalCta />
      </main>
    </>
  );
}

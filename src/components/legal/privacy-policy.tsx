
import {
  privacyEffectiveDate,
  privacyPolicy,
} from "@/lib/legal/data";
import { LegalContent } from "./legal-content";
import { LegalSection } from "./legal-section";

export function PrivacyPolicy() {
  return (
    <LegalSection
      id="privacy-policy"
      eyebrow="02 — Your information"
      title="Privacy Policy"
      description="Your privacy matters to us. This policy explains how The Language Landscapes collects, uses, stores and protects your personal information."
    >
      <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#81766C]">
        <span>Effective Date:</span>
        <span className="font-medium text-[#292624]">
          {privacyEffectiveDate}
        </span>
      </div>

      <LegalContent clauses={privacyPolicy} />
    </LegalSection>
  );
}

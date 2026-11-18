
import { termsAndConditions } from "@/lib/legal/data";
import { LegalContent } from "./legal-content";
import { LegalSection } from "./legal-section";

export function TermsAndConditions() {
  return (
    <LegalSection
      id="terms-and-conditions"
      eyebrow="01 — Terms of service"
      title="Terms & Conditions"
      description="Please read these terms carefully to understand the conditions that apply when using our website, enrolling in our programs and accessing our services."
    >
      <LegalContent clauses={termsAndConditions} />
    </LegalSection>
  );
}

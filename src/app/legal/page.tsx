

import { LegalHero } from "@/components/legal/legal-hero";
import { LegalNavigation } from "@/components/legal/legal-navigation";
import { TermsAndConditions } from "@/components/legal/terms-and-conditions";
import { PrivacyPolicy } from "@/components/legal/privacy-policy";
import { LegalCta } from "@/components/legal/legal-cta";

export default function LegalPage() {
  return (
    <>
  

      <main>
        <LegalHero />
        <LegalNavigation />
        <TermsAndConditions />
        <PrivacyPolicy />
        <LegalCta />
      </main>

   
    </>
  );
}

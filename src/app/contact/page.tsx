"use client";
import ClosingCTA from "@/components/Saybonjur/closing-cta";
import CollaborationSection from "@/components/Saybonjur/collaboration-section";
import ContactInformation from "@/components/Saybonjur/contact-information";
import FAQSection from "@/components/Saybonjur/faq-section";
import InquirySection from "@/components/Saybonjur/inquiry-section";
import SayBonjourHero from "@/components/Saybonjur/say-bonjour-hero";


export default function ContactPage() {
  return (
    <>
     
      <main className="overflow-hidden bg-[#F8F5EF]">
        <SayBonjourHero />
        <ContactInformation />
        <InquirySection />
        <FAQSection />
        <CollaborationSection />
        <ClosingCTA />
      </main>
   
    </>
  );
}

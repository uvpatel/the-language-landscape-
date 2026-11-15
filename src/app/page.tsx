import { FounderSection } from "@/components/Home/founder-section";
import { HeroSection } from "@/components/Home/Hero-Section";
import { IntroductionSection } from "@/components/Home/introduction-section";
import { LearningApproachSection } from "@/components/Home/learning-approach";


import WhyChooseTLLSection from "@/components/Home/why-choose-tll-section";
import FAQSection from "@/components/Home/faq-section";
import FinalCTASection from "@/components/Home/final-cta-section";
import FAQSectionVariant from "@/components/Home/FAQVarient";

export default function Home() {
  return (
    <>
     <HeroSection />
     <IntroductionSection />
    
     <FounderSection />
     <LearningApproachSection />
    
  
     {/* <FAQSection /> */}
     <FAQSectionVariant />
     <FinalCTASection />
    </>
  );
}

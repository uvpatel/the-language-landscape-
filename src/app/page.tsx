import { FounderSection } from "@/components/Home/founder-section";

import { IntroductionSection } from "@/components/Home/introduction-section";
import { LearningApproachSection } from "@/components/Home/learning-approach";


import WhyChooseTLLSection from "@/components/Home/why-choose-tll-section";
import FAQSection from "@/components/Home/faq-section";
import FinalCTASection from "@/components/Home/final-cta-section";
import FAQSectionVariant from "@/components/Home/FAQVarient";
import Testimonial from "@/components/Home/testimonial";
import Testimonial2 from "@/components/Home/varient/testimonial";
import HeroSection from "@/components/Home/Hero-Section";
import { HeroSection2 } from "@/components/Home/varient/Herosection2";

export default function Home() {
  return (
    <>
     <HeroSection />
     <HeroSection2 />
     <IntroductionSection />    
     <FounderSection />
     <LearningApproachSection />
    
     {/* <FAQSection /> */}
     <FAQSectionVariant />
     <Testimonial />
     <Testimonial2 />
     <FinalCTASection />
    </>
  );
}

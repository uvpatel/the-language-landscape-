import { FounderSection } from "@/components/Home/founder-section";

import { IntroductionSection } from "@/components/Home/introduction-section";
import { LearningApproachSection } from "@/components/Home/learning-approach";

import FinalCTASection from "@/components/Home/final-cta-section";
import FAQSectionVariant from "@/components/Home/FAQVarient";
import Testimonial from "@/components/Home/testimonial";

import HeroSection from "@/components/Home/Hero-Section";

export default function Home() {
  return (
    <>
     <HeroSection />
     <IntroductionSection />    
     <FounderSection />
     <LearningApproachSection />
    

     <FAQSectionVariant />
     <Testimonial />
     <FinalCTASection />
    </>
  );
}

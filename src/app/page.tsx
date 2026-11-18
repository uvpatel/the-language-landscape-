import { FounderSection } from "@/components/Home/founder-section";

import { IntroductionSection } from "@/components/Home/introduction-section";

import FinalCTASection from "@/components/Home/final-cta-section";
import FAQSectionVariant from "@/components/Home/FAQVarient";
import Testimonial from "@/components/Home/testimonial";

import HeroSection from "@/components/Home/Hero-Section";
import { LearningApproachSection2 } from "@/components/Home/learningapproch2";

export default function Home() {
  return (
    <>
     <HeroSection />
     <IntroductionSection />    
     <FounderSection />
    
     <LearningApproachSection2 />

     <FAQSectionVariant />
     <Testimonial />
     <FinalCTASection />
    </>
  );
}

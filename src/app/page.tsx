import { FounderSection } from "@/components/Home/founder-section";
import { HeroSection } from "@/components/Home/Hero-Section";
import { IntroductionSection } from "@/components/Home/introduction-section";
import { LearningApproachSection } from "@/components/Home/learning-approach";
import LearningExperienceSection from "@/components/Home/learning-experience-section";
import { LearnerJourneySection } from "@/components/Home/LearningJourney";
import ProgramsSection from "@/components/Home/programs-section";
import TeteATeteSection from "@/components/Home/tete-a-tete-section";
import WhyChooseTLLSection from "@/components/Home/why-choose-tll-section";
import FAQSection from "@/components/Home/faq-section";
import FinalCTASection from "@/components/Home/final-cta-section";

export default function Home() {
  return (
    <>
     <HeroSection />
     <IntroductionSection />
     <LearnerJourneySection />
     <FounderSection />
     <LearningApproachSection />
     <LearningExperienceSection />
     <TeteATeteSection />
     <ProgramsSection />
     <WhyChooseTLLSection />
     <FAQSection />
     <FinalCTASection />
    </>
  );
}


import ProgramHero from "@/components/Programs/ProgramHero";
import ProgramIntro from "@/components/Programs/ProgramIntro";
import ProgramSections from "@/components/Programs/ProgramSections";
import OurLearning from "@/components/Programs/OurLearning";
import FinalCTA from "@/components/Programs/FinalCTA";

export default function ProgramsPage() {
    return (
        <main className="min-h-screen bg-[#F7F5EF]">
            <ProgramHero />
            <ProgramIntro />
            <ProgramSections />
            <OurLearning />
            <FinalCTA />
        </main>
    );
}

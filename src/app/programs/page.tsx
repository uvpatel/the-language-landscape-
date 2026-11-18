import React from "react";
import type { Metadata } from "next";
import ProgramHero from "@/components/Programs/ProgramHero";
import ProgramIntro from "@/components/Programs/ProgramIntro";
import ProgramSections from "@/components/Programs/ProgramSections";
import OurLearning from "@/components/Programs/OurLearning";
import FinalCTA from "@/components/Programs/FinalCTA";

export const metadata: Metadata = {
  title: "Programs | Language Learning & Exam Preparation",
  description:
    "Explore French courses, DELF, TEF/TCF preparation, Kids Programs, Corporate Training, and Multilingual education with The Language Landscapes.",
  openGraph: {
    title: "Programs | The Language Landscapes",
    description:
      "Explore French courses, DELF, TEF/TCF preparation, Kids Programs, Corporate Training, and Multilingual education with The Language Landscapes.",
    type: "website",
  },
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#F7F5EF]">
      {/* 01. ProgramHero */}
      <ProgramHero />

      {/* 02. ProgramIntro */}
      <ProgramIntro />

      {/* 03. ProgramSections (All 6 Programs) */}
      <ProgramSections />

      {/* 04. OurLearning (The 5 Linguistic Pillars) */}
      <OurLearning />

      {/* 05. FinalCTA */}
      <FinalCTA />
    </main>
  );
}

import React from "react";
import { programs, type Program } from "@/data/programs";
import ProgramCard from "./ProgramCard";

export default function ProgramSections() {
  return (
    <div id="all-programs">
      {programs.map((program: Program, index: number) => (
        <ProgramCard key={program.id} program={program} index={index} />
      ))}
    </div>
  );
}

export { ProgramSections };

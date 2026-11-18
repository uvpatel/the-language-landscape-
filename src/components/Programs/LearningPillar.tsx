
"use client";

import { motion, useReducedMotion } from "motion/react";

interface LearningPillarProps {
  pillar: {
    number: string;
    title: string;
    description: string;
  };
  index: number;
}

export default function LearningPillar({
  pillar,
  index,
}: LearningPillarProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: "easeOut",
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      className="group flex min-h-[210px] flex-col justify-between border border-[#E3DED3] bg-[#F7F5EF] p-6 transition-colors duration-300 hover:border-[#B52A27]/50 md:p-7"
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium tracking-[0.2em] text-[#B52A27]">
          {pillar.number}
        </span>

        <span className="h-2 w-2 rounded-full bg-[#D8CFC1] transition-colors duration-300 group-hover:bg-[#B52A27]" />
      </div>

      <div className="mt-10">
        <h3 className="font-[var(--font-satoshi)] text-2xl tracking-[-0.03em] text-[#292620] transition-colors duration-300 group-hover:text-[#B52A27]">
          {pillar.title}
        </h3>

        <p className="mt-3 text-xs leading-6 text-[#77736C] md:text-sm">
          {pillar.description}
        </p>
      </div>
    </motion.article>
  );
}

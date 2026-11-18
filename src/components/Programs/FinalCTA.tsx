
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function FinalCTA() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="bg-[#B52A27] px-6 py-16 md:px-12 md:py-20">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto flex max-w-4xl flex-col items-center text-center"
                >
                    <span className="mb-6 font-[var(--font-inter)] text-xs font-medium tracking-[0.2em] text-white/70 uppercase">
                        Your next chapter starts here
                    </span>

                    <h2 className="font-[var(--font-satoshi)] text-4xl leading-[1.15] font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
                        Your goals. Your language. Your journey.
                    </h2>

                    <p className="mt-6 max-w-2xl font-[var(--font-inter)] text-sm leading-7 text-white/80 md:text-base md:leading-8">
                        Find the right learning program and take your next step
                        towards a world of opportunities.
                    </p>

                    <Link
                        href="/contact"
                        className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#F7F5EF] px-7 py-4 font-[var(--font-inter)] text-sm font-semibold text-[#292620] transition-all duration-300 hover:bg-white"
                    >
                        Say Bonjour

                        <IconArrowUpRight
                            size={18}
                            stroke={1.8}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

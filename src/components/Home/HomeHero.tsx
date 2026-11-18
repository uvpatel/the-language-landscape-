
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
    IconArrowDownRight,
    IconArrowUpRight,
    IconWorld,
    IconSparkles,
    IconBook2,
} from "@tabler/icons-react";

const words = [
    { french: "Bonjour", english: "Hello", pronunciation: "bohn-zhoor", description: "A warm greeting that opens every conversation." },
    { french: "Merci", english: "Thank you", pronunciation: "mehr-see", description: "A little word that carries a lot of gratitude." },
    { french: "Amour", english: "Love", pronunciation: "ah-moor", description: "One beautiful feeling, understood everywhere." },
    { french: "Voyage", english: "Journey", pronunciation: "vwah-yahzh", description: "Every journey begins with a single step." },
    { french: "Rêve", english: "Dream", pronunciation: "rehv", description: "Imagine a world without boundaries." },
    { french: "Ensemble", english: "Together", pronunciation: "ahn-sahmbl", description: "Growing, learning and experiencing together." },
    { french: "Découvrir", english: "Discover", pronunciation: "day-koo-vreer", description: "The joy of finding something new." },
    { french: "Sourire", english: "Smile", pronunciation: "soo-reer", description: "A universal language that needs no translation." },
    { french: "Liberté", english: "Freedom", pronunciation: "lee-behr-tay", description: "The beauty of being free." },
    { french: "Espoir", english: "Hope", pronunciation: "es-pwahr", description: "The beginning of something wonderful." },
];

export default function HomeHero() {
    const shouldReduceMotion = useReducedMotion();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);

    const currentWord = words[currentIndex];
    const nextWord = words[(currentIndex + 1) % words.length];

    useEffect(() => {
        const interval = setInterval(() => {
            if (shouldReduceMotion) {
                setCurrentIndex((prev) => (prev + 1) % words.length);
            } else {
                setIsFlipping(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [shouldReduceMotion]);

    const handlePageTurn = () => {
        if (!isFlipping) return;

        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsFlipping(false);
    };

    return (
        <section className="relative overflow-hidden bg-[#F7F5EF] px-5 pt-16 pb-16 md:px-10 md:pt-20 md:pb-24 lg:px-16 lg:pt-24">

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -left-40 top-32 h-[420px] w-[420px] rounded-full border border-[#B52A27]/[0.06]" />
            <div className="pointer-events-none absolute -left-28 top-44 h-[320px] w-[320px] rounded-full border border-[#B52A27]/[0.05]" />

            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

                    {/* Hero Content */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: shouldReduceMotion ? 0 : 0.9,
                            ease: "easeOut",
                        }}
                        className="relative z-10 order-1"
                    >
                        <div className="mb-8 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#B52A27]" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#B52A27]">
                                The Language Landscapes
                            </span>
                        </div>

                        <h1 className="max-w-2xl font-[var(--font-satoshi)] text-[clamp(3.5rem,6.5vw,6.5rem)] leading-[0.98] font-medium tracking-[-0.055em] text-[#292620]">
                            Find your path.
                            <span className="mt-2 block text-[#B52A27]">
                                Discover a language.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-md text-sm leading-8 text-[#77736C] md:text-base">
                            Explore new languages, embrace different cultures and open
                            doors to opportunities beyond borders. Your journey into a
                            wider world begins here.
                        </p>

                        {/* French Words */}
                        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium tracking-wide text-[#A7A197] sm:text-xs">
                            <span>Apprendre</span>
                            <span className="text-[#B52A27]">·</span>
                            <span>Découvrir</span>
                            <span className="text-[#B52A27]">·</span>
                            <span>Voyager</span>
                            <span className="text-[#B52A27]">·</span>
                            <span>Partager</span>
                        </div>

                        {/* Hero Actions */}
                        <div className="mt-10 flex flex-wrap items-center gap-6">
                            <Link
                                href="/programs"
                                className="group inline-flex items-center gap-4 bg-[#B52A27] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#92211F]"
                            >
                                Explore our programs

                                <IconArrowUpRight
                                    size={17}
                                    stroke={1.6}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>

                            <Link
                                href="/about-us"
                                className="group inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#555149]"
                            >
                                Our approach

                                <IconArrowUpRight
                                    size={15}
                                    stroke={1.5}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>
                        </div>

                        {/* Hero Footer */}
                        <div className="mt-16 flex items-center gap-4 border-t border-[#E6E0D5] pt-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCD5C9]">
                                <IconWorld
                                    size={19}
                                    stroke={1.3}
                                    className="text-[#B52A27]"
                                />
                            </div>

                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#292620]">
                                    More than learning words
                                </p>

                                <p className="mt-1 text-xs text-[#77736C]">
                                    Discover cultures. Build connections.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interactive Open French Book */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92, x: 35 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{
                            duration: shouldReduceMotion ? 0 : 1,
                            delay: shouldReduceMotion ? 0 : 0.15,
                            ease: "easeOut",
                        }}
                        className="relative order-2 mx-auto w-full max-w-[720px] lg:ml-auto"
                    >

                        {/* Background Decorations */}
                        <div className="pointer-events-none absolute -right-12 top-0 h-64 w-64 rounded-full border border-[#B52A27]/10" />
                        <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full border border-[#B52A27]/10" />

                        {/* Book Introduction */}
                        <div className="relative z-10 mb-8 flex items-center justify-between">
                            <div>
                                <div className="flex items-center gap-2">
                                    <IconBook2 size={17} className="text-[#B52A27]" />

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#B52A27]">
                                        Le petit livre
                                    </span>
                                </div>

                                <p className="mt-2 font-[var(--font-satoshi)] text-xl font-medium tracking-tight text-[#292620] sm:text-2xl">
                                    A little French, every day.
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-[#A7A197]">
                                <IconSparkles size={17} stroke={1.4} />

                                <span className="text-[9px] uppercase tracking-[0.16em]">
                                    Daily discovery
                                </span>
                            </div>
                        </div>

                        {/* Open Book */}
                        <motion.div
                            animate={shouldReduceMotion ? undefined : { y: [0, -5, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative z-10"
                        >

                            {/* Book Shadow */}
                            <div className="absolute -inset-4 translate-y-5 rounded-[30px] bg-[#292620]/15 blur-2xl" />

                            {/* Burgundy Book Cover */}
                            <div className="relative rounded-[9px] bg-[#722522] p-[7px] shadow-[0_25px_60px_rgba(41,38,32,0.18)] sm:p-[10px]">

                                {/* Layered Pages */}
                                <div className="relative">

                                    <div className="absolute -bottom-2 left-2 right-2 h-3 rounded-b-md bg-[#CFC4B2]" />
                                    <div className="absolute -bottom-1 left-1 right-1 h-2 rounded-b-md bg-[#E7DFD2]" />

                                    {/* Book Spread */}
                                    <div
                                        className="relative grid h-[280px] grid-cols-2 overflow-visible rounded-md sm:h-[370px] lg:h-[410px]"
                                        style={{ perspective: "1800px" }}
                                    >

                                        {/* LEFT PAGE - FRENCH */}
                                        <div className="relative overflow-hidden rounded-l-[4px] border-y border-l border-[#DED4C3] bg-[#FFFEFA] px-4 py-5 sm:px-8 sm:py-8">

                                            {/* Paper Texture */}
                                            <div className="pointer-events-none absolute inset-0 opacity-40">
                                                <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_29px,#E9E2D6_30px)]" />
                                            </div>

                                            <div className="relative z-10 flex items-center justify-between">
                                                <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#B52A27] sm:text-[10px]">
                                                    Français
                                                </span>

                                                <span className="text-[9px] text-[#A7A197]">
                                                    {String(currentIndex + 1).padStart(2, "0")}
                                                </span>
                                            </div>

                                            <div className="relative z-10 mt-8 sm:mt-14">
                                                <span className="text-[8px] uppercase tracking-[0.2em] text-[#A7A197] sm:text-[10px]">
                                                    Le mot du jour
                                                </span>

                                                <motion.h2
                                                    key={currentWord.french}
                                                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                    className="mt-4 break-words font-[var(--font-satoshi)] text-3xl font-medium leading-tight tracking-[-0.045em] text-[#292620] sm:text-5xl lg:text-6xl"
                                                >
                                                    {currentWord.french}
                                                </motion.h2>

                                                <div className="my-5 h-px w-10 bg-[#B52A27] sm:my-7" />

                                                <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#A7A197] sm:text-[11px]">
                                                    Pronunciation
                                                </p>

                                                <p className="mt-2 text-[10px] text-[#77736C] sm:text-sm">
                                                    / {currentWord.pronunciation} /
                                                </p>
                                            </div>

                                            <div className="absolute bottom-5 left-4 right-4 z-10 flex items-center justify-between sm:bottom-7 sm:left-8 sm:right-8">
                                                <span className="text-[8px] font-medium uppercase tracking-[0.15em] text-[#A7A197] sm:text-[9px]">
                                                    Apprendre
                                                </span>

                                                <span className="font-[var(--font-satoshi)] text-sm text-[#B52A27]">
                                                    TLL
                                                </span>
                                            </div>

                                            <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 bg-gradient-to-tl from-[#EDE5D7] to-transparent" />
                                        </div>

                                        {/* RIGHT PAGE - ENGLISH */}
                                        <div className="relative overflow-hidden rounded-r-[4px] border-y border-r border-[#DED4C3] bg-[#FDFBF5] px-4 py-5 sm:px-8 sm:py-8">

                                            {/* Paper Texture */}
                                            <div className="pointer-events-none absolute inset-0 opacity-40">
                                                <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_29px,#E9E2D6_30px)]" />
                                            </div>

                                            <div className="relative z-10 flex items-center justify-between">
                                                <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#B52A27] sm:text-[10px]">
                                                    English
                                                </span>

                                                <IconSparkles size={15} className="text-[#B52A27]/60" />
                                            </div>

                                            <div className="relative z-10 mt-8 sm:mt-14">
                                                <span className="text-[8px] uppercase tracking-[0.2em] text-[#A7A197] sm:text-[10px]">
                                                    Translation
                                                </span>

                                                <motion.h2
                                                    key={currentWord.english}
                                                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                    className="mt-4 break-words font-[var(--font-satoshi)] text-3xl font-medium leading-tight tracking-[-0.045em] text-[#292620] sm:text-5xl lg:text-6xl"
                                                >
                                                    {currentWord.english}
                                                </motion.h2>

                                                <div className="my-5 h-px w-10 bg-[#B52A27] sm:my-7" />

                                                <p className="max-w-[220px] text-[10px] leading-6 text-[#77736C] sm:text-sm sm:leading-7">
                                                    {currentWord.description}
                                                </p>
                                            </div>

                                            <div className="absolute bottom-5 left-4 right-4 z-10 flex items-center justify-between sm:bottom-7 sm:left-8 sm:right-8">
                                                <span className="text-[8px] font-medium uppercase tracking-[0.15em] text-[#A7A197] sm:text-[9px]">
                                                    A world of words
                                                </span>

                                                <span className="text-[9px] text-[#A7A197]">
                                                    {String(currentIndex + 1).padStart(2, "0")}
                                                </span>
                                            </div>

                                            <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-16 bg-gradient-to-tr from-[#EDE5D7] to-transparent" />
                                        </div>

                                        {/* Center Spine */}
                                        <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-20 w-[7px] -translate-x-1/2 bg-gradient-to-r from-[#C7BBA8] via-[#E6DDCE] to-[#B7A991] shadow-[0_0_8px_rgba(41,38,32,0.16)]" />

                                        {/* Page Turning Layer */}
                                        {!shouldReduceMotion && (
                                            <motion.div
                                                key={currentIndex}
                                                initial={false}
                                                animate={{
                                                    rotateY: isFlipping ? -180 : 0,
                                                }}
                                                transition={{
                                                    duration: isFlipping ? 1.35 : 0,
                                                    ease: [0.65, 0, 0.35, 1],
                                                }}
                                                onAnimationComplete={handlePageTurn}
                                                style={{
                                                    transformOrigin: "left center",
                                                    transformStyle: "preserve-3d",
                                                }}
                                                className="absolute bottom-0 left-1/2 top-0 z-30 w-1/2"
                                            >
                                                {/* Front of Page */}
                                                <div
                                                    className="absolute inset-0 overflow-hidden rounded-r-[4px] border-y border-r border-[#DED4C3] bg-[#FDFBF5] px-4 py-5 sm:px-8 sm:py-8"
                                                    style={{
                                                        backfaceVisibility: "hidden",
                                                        WebkitBackfaceVisibility: "hidden",
                                                    }}
                                                >
                                                    <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#B52A27] sm:text-[10px]">
                                                        English
                                                    </span>

                                                    <p className="mt-8 font-[var(--font-satoshi)] text-2xl font-medium text-[#292620] sm:mt-14 sm:text-5xl">
                                                        {currentWord.english}
                                                    </p>

                                                    <div className="my-5 h-px w-10 bg-[#B52A27]" />

                                                    <p className="text-[9px] leading-5 text-[#77736C] sm:text-sm sm:leading-7">
                                                        {currentWord.description}
                                                    </p>
                                                </div>

                                                {/* Back of Page */}
                                                <div
                                                    className="absolute inset-0 overflow-hidden rounded-l-[4px] border-y border-l border-[#DED4C3] bg-[#FFFEFA] px-4 py-5 sm:px-8 sm:py-8"
                                                    style={{
                                                        transform: "rotateY(180deg)",
                                                        backfaceVisibility: "hidden",
                                                        WebkitBackfaceVisibility: "hidden",
                                                    }}
                                                >
                                                    <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#B52A27] sm:text-[10px]">
                                                        Français
                                                    </span>

                                                    <p className="mt-8 break-words font-[var(--font-satoshi)] text-2xl font-medium text-[#292620] sm:mt-14 sm:text-5xl">
                                                        {nextWord.french}
                                                    </p>

                                                    <div className="my-5 h-px w-10 bg-[#B52A27]" />

                                                    <p className="text-[9px] text-[#77736C] sm:text-sm">
                                                        / {nextWord.pronunciation} /
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Book Bottom Edge */}
                                    <div className="h-[7px] rounded-b-sm bg-gradient-to-b from-[#E7DFD1] to-[#C2B49F]" />
                                </div>
                            </div>

                            {/* Book Caption */}
                            <div className="mt-7 flex items-center justify-between gap-3">
                                <div>
                                    <p className="font-[var(--font-satoshi)] text-sm font-medium text-[#292620]">
                                        Le français au quotidien
                                    </p>

                                    <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#A7A197]">
                                        Learn a word. Discover a world.
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#B52A27]" />

                                    <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#77736C]">
                                        {String(currentIndex + 1).padStart(2, "0")} / {String(words.length).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="mt-16 flex items-center justify-between border-t border-[#E6E0D5] pt-6">
                    <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#A39B8E]">
                        A journey of possibilities
                    </span>

                    <Link
                        href="/programs"
                        className="group flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.18em] text-[#77736C]"
                    >
                        Scroll to explore

                        <IconArrowDownRight
                            size={17}
                            stroke={1.5}
                            className="text-[#B52A27] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}

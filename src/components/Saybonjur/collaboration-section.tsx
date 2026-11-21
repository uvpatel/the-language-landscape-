"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import SectionLabel from "./section-label";

// French word shown large, English counterpart shown beneath
const GREETINGS = [
  { fr: "Bonjour.", en: "Hello" },
  { fr: "Bienvenue.", en: "Welcome" },
  { fr: "Ensemble.", en: "Together" },
  { fr: "Merci.", en: "Thank you" },
  { fr: "Langue.", en: "Language" },
  { fr: "Amitié.", en: "Friendship" },
  { fr: "Partage.", en: "Share" },
  { fr: "À bientôt.", en: "See you soon" },
];

// Floating words around the card (alternating French / English)
const FLOATERS = [
  { text: "Voix", className: "left-[8%] top-[14%]", delay: 0, depth: 18 },
  { text: "Voices", className: "right-[10%] top-[18%]", delay: 0.8, depth: 26 },
  { text: "Idées", className: "left-[12%] bottom-[18%]", delay: 1.6, depth: 22 },
  { text: "Ideas", className: "right-[14%] bottom-[16%]", delay: 2.4, depth: 30 },
  { text: "Conversation", className: "left-[40%] top-[6%]", delay: 3.2, depth: 14 },
  { text: "Connexion", className: "right-[36%] bottom-[6%]", delay: 4, depth: 16 },
];

function Floater({
  text,
  className,
  delay,
  depth,
  px,
  py,
  reduce,
}: {
  text: string;
  className: string;
  delay: number;
  depth: number;
  px: ReturnType<typeof useSpring>;
  py: ReturnType<typeof useSpring>;
  reduce: boolean;
}) {
  // Parallax: each floater moves a different amount with the pointer
  const x = useTransform(px, (v) => v * depth);
  const y = useTransform(py, (v) => v * depth);

  return (
    <motion.span
      style={{ x, y }}
      className={`pointer-events-none absolute z-10 ${className}`}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          reduce
            ? { opacity: 0.5, scale: 1 }
            : { opacity: [0, 0.65, 0.65, 0], y: [8, -10, -22, -34], scale: 1 }
        }
        transition={
          reduce
            ? { duration: 0.6 }
            : {
                duration: 7,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.75, 1],
              }
        }
        className="block rounded-full border border-white/15 bg-white/5 px-3 py-1 font-[family-name:var(--font-heading)] text-sm text-[#E8D9C7] backdrop-blur-sm sm:text-base"
      >
        {text}
      </motion.span>
    </motion.span>
  );
}

function GreetingCard() {
  const reduce = useReducedMotion() ?? false;
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Pointer parallax (-0.5 .. 0.5), smoothed with springs
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 80, damping: 18 });
  const py = useSpring(my, { stiffness: 80, damping: 18 });

  const rotateY = useTransform(px, (v) => v * 8);
  const rotateX = useTransform(py, (v) => v * -8);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % GREETINGS.length),
      2600
    );
    return () => clearInterval(id);
  }, [reduce]);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  const current = GREETINGS[reduce ? 0 : index];

  return (
    <div style={{ perspective: 1200 }} className="w-full">
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={reduce ? undefined : { rotateX, rotateY }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex aspect-[1.15] items-center justify-center overflow-hidden bg-[#781E24] p-8 sm:p-12"
      >
        {/* Soft moving glow */}
        <motion.div
          aria-hidden
          animate={
            reduce
              ? undefined
              : { x: ["-20%", "20%", "-20%"], y: ["-10%", "15%", "-10%"] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/4 h-2/3 w-2/3 rounded-full bg-[#B32526]/50 blur-3xl"
        />

        {/* Frame that draws itself in */}
        <motion.div
          aria-hidden
          initial={{ clipPath: "inset(0 100% 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0% 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          className="absolute inset-6 border border-white/20"
        />

        {/* Counter-rotating dashed rings */}
        <motion.div
          aria-hidden
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-12 rounded-full border border-dashed border-white/15"
        />
        <motion.div
          aria-hidden
          animate={reduce ? undefined : { rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute inset-20 rounded-full border border-white/10"
        >
          {/* Orbiting dot */}
          <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-[#D9C6A5]" />
        </motion.div>

        {/* Pulsing ripples behind the word */}
        {!reduce &&
          [0, 1.6].map((d) => (
            <motion.span
              key={d}
              aria-hidden
              initial={{ scale: 0.4, opacity: 0.35 }}
              animate={{ scale: 1.6, opacity: 0 }}
              transition={{
                duration: 4,
                delay: d,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute size-1/2 rounded-full border border-[#D9C6A5]/40"
            />
          ))}

        {/* Floating multilingual chips */}
        {FLOATERS.map((f) => (
          <Floater key={f.text} {...f} px={px} py={py} reduce={reduce} />
        ))}

        {/* Center content */}
        <div className="relative z-20 text-center">
          <div className="relative flex h-20 items-center justify-center overflow-hidden sm:h-32">
            <AnimatePresence mode="wait">
              <motion.p
                key={current.fr}
                initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="font-[family-name:var(--font-heading)] text-6xl leading-none text-[#F8F5EF] sm:text-8xl"
              >
                {current.fr}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-3 h-9">
            <AnimatePresence mode="wait">
              <motion.p
                key={current.en}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="font-[family-name:var(--font-heading)] text-2xl italic text-[#D9C6A5] sm:text-3xl"
              >
                {current.en}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mt-6 h-px w-16 origin-center bg-[#D9C6A5]/60"
          />

          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E8D9C7]">
            Many voices. One connection.
          </p>

          {/* Progress dots */}
         
          
        </div>
      </motion.div>
    </div>
  );
}

export default function CollaborationSection() {
  return (
    <section className="bg-[#EFE9DF] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionLabel>Beyond the classroom</SectionLabel>

          <h2 className="font-[family-name:var(--font-heading)] text-5xl leading-[1.05] tracking-tight text-[#292624] sm:text-6xl">
            Ideas, conversations and{" "}
            <span className="text-[#B32526]">collaborations.</span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-8 text-[#514A45]">
            We believe language brings people together. If you are an
            educator, researcher, artist or organisation interested in
            collaborating with us, we&apos;d love to hear from you.
          </p>

          <Link
            href="#inquiry"
            className="group mt-9 inline-flex min-h-14 items-center gap-3 bg-[#292624] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#781E24]"
          >
            Let&apos;s Collaborate
            <IconArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <GreetingCard />
      </div>
    </section>
  );
}
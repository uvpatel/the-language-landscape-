
"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import {
  IconArrowUpRight,
  IconQuote,
  IconSparkles,
} from "@tabler/icons-react"

const testimonials = [
  {
    quote:
      "I was nervous about the TCF exam, but the personalized attention and clear feedback at TLL made all the difference. The sessions were structured, yet flexible to my pace. Highly recommend!",
    name: "Priya Patel",
    number: "01",
    featured: true,
  },
  {
    quote:
      "What I loved most was the balance of grammar drills and real-life practice. The toolkit and resources were so well-organized, and the faculty was always available to guide me. I couldn't have done it without TLL!",
    name: "Samiksha Gandhi",
    number: "02",
  },
  {
    quote:
      "I wanted DELF to boost my career profile, and TLL helped me every step of the way. The classes were practical, the resources were excellent, and I cleared my exam with ease.",
    name: "Arjun Parikh",
    number: "03",
  },
  {
    quote:
      "What stood out was the cultural immersion TLL added to the lessons. It wasn't just exam prep, it was learning to live the language. My DELF results were beyond what I expected!",
    name: "Ravi Kalmani",
    number: "04",
  },
]

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export default function Testimonial2() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F7F5F0] px-5 py-24 md:px-10 lg:px-16 lg:py-32"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#781E24]/[0.07]" />
      <div className="pointer-events-none absolute -right-20 top-32 h-56 w-56 rounded-full border border-[#781E24]/[0.07]" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full border border-[#781E24]/[0.05]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#781E24]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#781E24]">
                Voices of TLL
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2.7rem,5vw,4.7rem)] leading-[1.04] tracking-[-0.045em] text-[#272321]">
              Stories of learning.
              <br />
              <span className="text-[#781E24]">
                Journeys of growth.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#77716B] md:pb-2">
            Every learner has a story. Discover how language learning has
            helped our students build confidence, achieve their goals and
            see the world differently.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.article
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mb-5 overflow-hidden rounded-sm bg-[#781E24] p-8 text-[#F7F5F0] md:p-12 lg:p-16"
        >
          {/* Decorative Circle */}
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/[0.10] transition-transform duration-1000 group-hover:scale-110" />
          <div className="pointer-events-none absolute -right-5 -top-12 h-48 w-48 rounded-full border border-white/[0.10]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <div className="max-w-4xl">
              <div className="mb-8 flex items-center gap-3">
                <IconQuote
                  size={32}
                  stroke={1}
                  className="text-[#DDB7A9]"
                />
                <span className="text-[10px] uppercase tracking-[0.22em] text-white/60">
                  A learner's perspective
                </span>
              </div>

              <blockquote className="font-serif text-[clamp(1.6rem,3.2vw,3rem)] leading-[1.35] tracking-[-0.02em]">
                “I was nervous about the TCF exam, but the personalized
                attention and clear feedback at TLL made all the difference.
                The sessions were structured, yet flexible to my pace.
                <span className="text-[#E7C4B7]">
                  {" "}Highly recommend!
                </span>”
              </blockquote>
            </div>

            <div className="flex items-center justify-between gap-6 border-t border-white/20 pt-6 lg:min-w-48 lg:flex-col lg:items-start lg:justify-end lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <p className="font-serif text-2xl">Priya Patel</p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/60">
                  TLL Learner
                </p>
              </div>

              <span className="font-serif text-5xl text-white/20">
                01
              </span>
            </div>
          </div>
        </motion.article>

        {/* Supporting Testimonials */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.article
              key={testimonial.number}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex min-h-[310px] flex-col justify-between border border-[#E6DED3] bg-[#EFE9DF] p-7 transition-colors duration-500 hover:bg-[#EAE1D5] md:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-sm text-[#A69B90]">
                  {testimonial.number} / 04
                </span>

                <IconQuote
                  size={27}
                  stroke={1}
                  className="text-[#781E24]/50 transition-transform duration-500 group-hover:rotate-12"
                />
              </div>

              <blockquote className="my-9 font-serif text-xl leading-relaxed text-[#302B27]">
                “{testimonial.quote}”
              </blockquote>

              <div className="flex items-center justify-between border-t border-[#DCD3C8] pt-5">
                <div>
                  <p className="font-serif text-lg text-[#781E24]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#898078]">
                    TLL Learner
                  </p>
                </div>

                <IconArrowUpRight
                  size={19}
                  stroke={1.3}
                  className="text-[#781E24] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-20 border-y border-[#DED8CF] py-14 text-center md:mt-24 md:py-20"
        >
          <IconSparkles
            size={23}
            stroke={1}
            className="mx-auto mb-6 text-[#781E24]"
          />

          <p className="mb-4 text-[9px] uppercase tracking-[0.24em] text-[#898078]">
            Every journey begins somewhere
          </p>

          <h3 className="font-serif text-3xl leading-tight text-[#272321] md:text-5xl">
            Your story is waiting to
            <span className="text-[#781E24]"> unfold.</span>
          </h3>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#77716B]">
            Discover a learning experience that goes beyond words.
            Find the program that speaks to you.
          </p>

          <Link
            href="/programs"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#781E24] px-7 py-3.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-[#922A32]"
          >
            Explore Our Programs
            <IconArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

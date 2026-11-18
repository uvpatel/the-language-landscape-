
import React from 'react'
import Link from 'next/link'
import {
  IconQuote,
  IconArrowUpRight,
} from '@tabler/icons-react'

const testimonials = [
  {
    quote:
      'I was nervous about the TCF exam, but the personalized attention and clear feedback at TLL made all the difference. The sessions were structured, yet flexible to my pace. Highly recommend!',
    name: 'Priya Patel',
    featured: true,
  },
  {
    quote:
      "What I loved most was the balance of grammar drills and real-life practice. The toolkit and resources were so well-organized, and the faculty was always available to guide me. I couldn't have done it without TLL!",
    name: 'Samiksha Gandhi',
  },
  {
    quote:
      'I wanted DELF to boost my career profile, and TLL helped me every step of the way. The classes were practical, the resources were excellent, and I cleared my exam with ease.',
    name: 'Arjun Parikh',
  },
  {
    quote:
      "What stood out was the cultural immersion TLL added to the lessons. It wasn't just exam prep, it was learning to live the language. My DELF results were beyond what I expected!",
    name: 'Ravi Kalmani',
  },
]

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F0] px-5 py-24 md:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#781E24]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#781E24]">
                Voices of TLL
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-[1.08] tracking-tight text-[#24211F] md:text-5xl lg:text-6xl">
              Stories of learning.
              <br />
              <span className="text-[#781E24]">
                Journeys of growth.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#77716B] md:pb-1">
            Every learner has a story. Discover how language learning has
            helped our students build confidence, achieve their goals and
            see the world differently.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-lg border border-[#E7E0D7] bg-[#EFE9DF] p-7 transition-all duration-500 hover:border-[#781E24]/30 hover:bg-[#F0E8DD] md:p-9 ${
                testimonial.featured
                  ? 'md:col-span-2 lg:min-h-[280px]'
                  : 'min-h-[270px]'
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-sm text-[#A69B90]">
                  0{index + 1}
                </span>

                <IconQuote
                  size={34}
                  stroke={1}
                  className="text-[#781E24]/60 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className={`my-8 ${testimonial.featured ? 'max-w-4xl' : ''}`}>
                <p className={`font-serif leading-relaxed text-[#302B27] ${
                  testimonial.featured
                    ? 'text-xl md:text-2xl lg:text-3xl'
                    : 'text-lg md:text-xl'
                }`}>
                  “{testimonial.quote}”
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-[#DCD3C8] pt-5">
                <div>
                  <p className="font-serif text-lg text-[#781E24]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#898078]">
                    TLL Learner
                  </p>
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9CFC3] text-[#781E24] transition-all duration-300 group-hover:border-[#781E24] group-hover:bg-[#781E24] group-hover:text-white">
                  <IconArrowUpRight size={17} stroke={1.5} />
                </span>
              </div>
            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center border-t border-[#DED8CF] pt-12 text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#898078]">
            Your story could be next
          </p>

          <h3 className="font-serif text-3xl text-[#781E24] md:text-4xl">
            Begin your language journey.
          </h3>

          <Link
            href="/programs"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#781E24] px-7 py-3.5 text-xs font-medium text-white transition-all duration-300 hover:bg-[#922A32]"
          >
            Explore Our Programs
            <IconArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  )
}


import Link from "next/link";
import {
  IconMessageCircle,
  IconEar,
  IconCompass,
  IconTargetArrow,
  IconArrowUpRight,
} from "@tabler/icons-react";

const challenges = [
  {
    number: "01",
    category: "FINDING YOUR VOICE",
    title: "I understand, but I hesitate to speak.",
    description:
      "You know the words, but expressing yourself in a real conversation feels difficult.",
    icon: IconMessageCircle,
  },
  {
    number: "02",
    category: "MAKING SENSE OF IT",
    title: "Real conversations move too quickly.",
    description:
      "Different accents, unfamiliar expressions and everyday speech can feel overwhelming.",
    icon: IconEar,
  },
  {
    number: "03",
    category: "FINDING YOUR PATH",
    title: "I don't know where to begin.",
    description:
      "You have the curiosity and motivation, but need a clear direction and learning plan.",
    icon: IconCompass,
  },
  {
    number: "04",
    category: "REACHING YOUR GOALS",
    title: "I want my learning to take me somewhere.",
    description:
      "Perhaps it is an examination, a career opportunity, travel or a new cultural connection.",
    icon: IconTargetArrow,
  },
];

export function LearnerJourneySection() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#EFE9DF] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

        {/* Section label */}
        <div className="mb-14 flex items-center gap-3">
          <span className="h-px w-10 bg-[#B32526]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
            03 — The learner's journey
          </p>
        </div>

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="max-w-3xl font-[family-name:var(--font-heading)] text-5xl font-normal leading-[1.1] tracking-[-0.035em] text-[#292624] sm:text-6xl lg:text-[72px]">
            Every new language begins with a
            <span className="italic text-[#B32526]"> first step.</span>
          </h2>

          <div className="max-w-md lg:justify-self-end">
            <p className="text-base leading-8 text-[#514A45]">
              The excitement of learning something new often comes with
              questions, uncertainty and a little hesitation. Wherever you
              are in your journey, there is a place to begin.
            </p>
          </div>
        </div>

        {/* Challenges */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group flex min-h-[310px] flex-col rounded-2xl border border-[#D9CFC2] bg-[#F8F5EF] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B32526]/40 hover:shadow-xl hover:shadow-[#292624]/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-[#A58B64]">
                    {item.number}
                  </span>

                  <Icon
                    size={26}
                    stroke={1.4}
                    className="text-[#B32526] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="mt-auto pt-16">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#81766C]">
                    {item.category}
                  </p>

                  <h3 className="font-[family-name:var(--font-heading)] text-3xl leading-[1.15] text-[#292624]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#81766C]">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Transformation statement */}
        <div className="relative mt-20 overflow-hidden rounded-3xl bg-[#781E24] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-4 -top-12 h-48 w-48 rounded-full border border-white/10" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E5C6B8]">
                Every journey has a beginning
              </p>

              <h3 className="max-w-3xl font-[family-name:var(--font-heading)] text-4xl leading-[1.12] text-[#F8F5EF] sm:text-5xl lg:text-6xl">
                From learning words to
                <span className="italic text-[#E5C6B8]">
                  {" "}finding your voice.
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#F0DDD5]">
                With thoughtful guidance, meaningful practice and a
                supportive learning environment, every small step can
                become a new possibility.
              </p>
            </div>

            <Link
              href="#programs"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/30 px-6 py-4 text-sm font-medium text-white transition-all hover:bg-[#F8F5EF] hover:text-[#781E24]"
            >
              Find your starting point
              <IconArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* Closing line */}
        <p className="mt-8 text-center font-[family-name:var(--font-heading)] text-xl italic text-[#81766C] sm:text-2xl">
          Your journey. Your pace. Your voice.
        </p>
      </div>
    </section>
  );
}

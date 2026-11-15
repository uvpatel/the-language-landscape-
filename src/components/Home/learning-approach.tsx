
import {
  IconHeadphones,
  IconMessageCircle,
  IconBook2,
  IconPencil,
  IconLanguage,
  IconArrowUpRight,
} from "@tabler/icons-react";
import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Listening",
    description:
      "Develop an ear for pronunciation, accents and natural conversations.",
    detail: "Understand the world around you.",
    icon: IconHeadphones,
  },
  {
    number: "02",
    title: "Speaking",
    description:
      "Build confidence through communication, interaction and expression.",
    detail: "Find the confidence to express.",
    icon: IconMessageCircle,
  },
  {
    number: "03",
    title: "Reading",
    description:
      "Understand written language, context and different forms of communication.",
    detail: "Discover meaning in every word.",
    icon: IconBook2,
  },
  {
    number: "04",
    title: "Writing",
    description:
      "Express thoughts, ideas and information with clarity and accuracy.",
    detail: "Give your thoughts a voice.",
    icon: IconPencil,
  },
  {
    number: "05",
    title: "Grammar",
    description:
      "Understand the structures and patterns that make communication meaningful.",
    detail: "Build a strong language foundation.",
    icon: IconLanguage,
  },
];

export function LearningApproachSection() {
  return (
    <section
      id="approach"
      className="bg-[#F8F5EF] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section heading */}
        <div className="mb-14 flex items-center gap-3">
          <span className="h-px w-10 bg-[#B32526]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
            05 — The way we learn
          </p>
        </div>

        {/* Intro */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="max-w-2xl font-[family-name:var(--font-heading)] text-5xl font-normal leading-[1.1] tracking-tight text-[#292624] sm:text-6xl lg:text-[68px]">
            A language is learned by
            <span className="block italic text-[#B32526]">
              living it.
            </span>
          </h2>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-[#514A45] sm:text-lg">
              Meaningful language learning happens when understanding
              meets expression. Our approach brings together five
              essential skills, helping learners move beyond textbooks
              and develop the ability to use language in real-life situations.
            </p>
          </div>
        </div>

        {/* Five learning pillars */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isLast = index === 4;

            return (
              <article
                key={pillar.number}
                className={`group flex min-h-[270px] flex-col justify-between rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  isLast
                    ? "border-[#781E24] bg-[#781E24] text-[#F8F5EF] lg:col-span-2"
                    : "border-[#E4DDD3] bg-[#EFE9DF] text-[#292624] hover:border-[#B32526]/40 hover:bg-white lg:col-span-2"
                } ${index === 3 ? "lg:col-start-2" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs tracking-widest ${
                      isLast ? "text-[#D9C6A5]" : "text-[#A58B64]"
                    }`}
                  >
                    {pillar.number}
                  </span>
                  <Icon
                    size={30}
                    stroke={1.4}
                    className={
                      isLast ? "text-[#E9CFC4]" : "text-[#B32526]"
                    }
                  />
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl">
                    {pillar.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-6 ${
                      isLast ? "text-[#F0DDD4]" : "text-[#81766C]"
                    }`}
                  >
                    {pillar.description}
                  </p>

                  <p
                    className={`mt-5 text-xs font-medium ${
                      isLast ? "text-[#D9C6A5]" : "text-[#B32526]"
                    }`}
                  >
                    {pillar.detail}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-20 flex flex-col items-center border-y border-[#D9CFC2] py-12 text-center sm:py-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#81766C]">
            Five skills. One journey.
          </p>

          <h3 className="mt-5 font-[family-name:var(--font-heading)] text-4xl italic text-[#781E24] sm:text-5xl">
            Understand. Express. Connect.
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#81766C]">
            We don't just teach you to learn a language.
            We help you find your voice in it.
          </p>

          <Link
            href="#programs"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#B32526]"
          >
            Find your learning path
            <IconArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

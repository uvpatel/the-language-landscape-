
import {
  IconMessageCircle,
  IconHandStop,
  IconMusic,
  IconWorld,
  IconArrowUpRight,
} from "@tabler/icons-react";
import Link from "next/link";

const expressions = [
  {
    number: "01",
    title: "Spoken",
    description: "Words, conversations and voices that bring ideas to life.",
    icon: IconMessageCircle,
  },
  {
    number: "02",
    title: "Unspoken",
    description: "Gestures, expressions and the language of silence.",
    icon: IconHandStop,
  },
  {
    number: "03",
    title: "Artistic",
    description: "Music, dance, film and theatre as forms of expression.",
    icon: IconMusic,
  },
  {
    number: "04",
    title: "Cultural",
    description: "Traditions, identity and the stories that connect us.",
    icon: IconWorld,
  },
];

export function IntroductionSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F5EF] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section heading */}
        <div className="mb-16 flex items-center gap-3">
          <span className="h-px w-10 bg-[#B32526]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
            02 — The TLL philosophy
          </p>
        </div>

        {/* Main editorial layout */}
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          {/* Left column */}
          <div>
            <h2 className="max-w-2xl font-[family-name:var(--font-heading)] text-5xl font-normal leading-[1.12] tracking-[-0.035em] text-[#292624] sm:text-6xl lg:text-[68px]">
              Language is not just what we speak.
              <span className="mt-2 block italic text-[#B32526]">
                It is everything we express.
              </span>
            </h2>

            <div className="mt-10 flex items-start gap-5">
              <span className="mt-2 h-16 w-[2px] shrink-0 bg-[#B32526]" />
              <p className="max-w-lg text-lg leading-8 text-[#514A45]">
                Language, in all its forms — spoken and unspoken — is a
                bridge to understanding ourselves and the world around us.
              </p>
            </div>

            <div className="mt-12">
              <p className="max-w-lg text-[15px] leading-8 text-[#81766C]">
                Born in India, a land of extraordinary linguistic diversity,
                The Language Landscapes celebrates the richness of human
                expression and the connections that language makes possible.
                Whether you are a curious beginner or a professional seeking
                fluency, TLL is a space where your voice matters.
              </p>

              <Link
                href="#programs"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#B32526]"
              >
                Discover what we offer
                <IconArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          {/* Right column: expression cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {expressions.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group flex min-h-[210px] flex-col justify-between rounded-2xl border border-[#E4DDD3] bg-[#EFE9DF] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B32526]/30 hover:bg-white"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-widest text-[#A58B64]">
                      {item.number}
                    </span>
                    <Icon
                      size={27}
                      stroke={1.4}
                      className="text-[#B32526] transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-3xl text-[#292624]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#81766C]">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Brand statement */}
       
      </div>
    </section>
  );
}

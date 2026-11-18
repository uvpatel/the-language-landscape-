
import Link from "next/link";

export function LegalCta() {
  return (
    <section className="bg-[#781E24] px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E5CDBB]">
            Need clarification?
          </span>

          <h2 className="mt-5 font-heading text-4xl leading-tight text-[#F8F5EF] md:text-6xl">
            Questions about our policies?
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-8 text-[#F8F5EF]/75 md:text-base">
            We are happy to help you understand our policies. Get in touch
            with our team for further information.
          </p>
        </div>

        <Link
          href="mailto:connect@thelanguagefoundation.com"
          className="inline-flex w-fit items-center rounded-full bg-[#F8F5EF] px-7 py-4 text-sm font-semibold text-[#781E24] transition hover:bg-white"
        >
          Contact Our Team
        </Link>
      </div>
    </section>
  );
}


import Link from "next/link";

export function LegalHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] px-6 pb-20 pt-32 md:px-12 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.24em] text-[#B32526]">
          The Language Landscapes
        </span>

        <h1 className="max-w-4xl font-heading text-5xl leading-[1.08] text-[#292624] md:text-7xl">
          Transparency
          <br />
          builds trust.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-[#514A45] md:text-lg">
          We believe in clear communication and responsible practices.
          Explore the terms that govern our services and understand how
          we respect and protect your information.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#terms-and-conditions"
            className="rounded-full bg-[#B32526] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#781E24]"
          >
            Terms & Conditions
          </Link>

          <Link
            href="#privacy-policy"
            className="rounded-full border border-[#292624]/20 px-7 py-3.5 text-sm font-medium text-[#292624] transition hover:border-[#B32526] hover:text-[#B32526]"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
}

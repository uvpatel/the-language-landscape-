
import SectionLabel from "./section-label";
import InquiryForm from "./inquiry-form";

export default function InquirySection() {
  return (
    <section
      id="inquiry"
      className="scroll-mt-24 bg-[#EFE9DF] px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1440px] items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div className="lg:sticky lg:top-32">
          <SectionLabel>Your journey starts here</SectionLabel>

          <h2 className="font-[family-name:var(--font-heading)] text-5xl leading-[1.05] tracking-tight text-[#292624] sm:text-6xl">
            Tell us what you&apos;re{" "}
            <span className="text-[#B32526]">looking for.</span>
          </h2>

          <p className="mt-7 max-w-md text-sm leading-8 text-[#514A45]">
            Share a little about yourself and your learning goals. Our team
            will help you find the right way forward.
          </p>

          <div className="mt-12 hidden border-l border-[#B32526]/40 pl-6 lg:block">
            <p className="font-[family-name:var(--font-heading)] text-2xl text-[#781E24]">
              Every great journey begins with a first step.
            </p>
          </div>
        </div>

        <InquiryForm />
      </div>
    </section>
  );
}

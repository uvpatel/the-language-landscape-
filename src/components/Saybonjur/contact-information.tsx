
import {
  IconBrandWhatsapp,
  IconClock,
  IconMail,
  IconMessageCircle,
} from "@tabler/icons-react";

import SectionLabel from "./section-label";
import ContactCard from "./contact-card";

export default function ContactInformation() {
  return (
    <section
      id="contact-details"
      className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionLabel>We&apos;re listening</SectionLabel>

            <h2 className="max-w-md font-[family-name:var(--font-heading)] text-5xl leading-[1.05] tracking-tight text-[#292624] sm:text-6xl">
              Let&apos;s start a{" "}
              <span className="text-[#B32526]">
                conversation.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-8 text-[#514A45]">
              Whether it&apos;s a question, an idea or the beginning of a
              new learning journey, we&apos;re just a message away.
            </p>

            <div className="mt-10 flex items-center gap-3 text-xs text-[#81766C]">
              <IconClock size={17} stroke={1.5} />
              We look forward to hearing from you.
            </div>
          </div>

          <div className="grid gap-4">
            <ContactCard
              icon={IconBrandWhatsapp}
              label="WhatsApp · India"
              value="+91 6353 145 434"
              href="https://wa.me/916353145434"
              description="Connect with us directly on WhatsApp."
            />

            <ContactCard
              icon={IconMessageCircle}
              label="International Contact"
              value="+367-380-0601"
              href="tel:+3673800601"
              description="Reach out from outside India."
            />

            <ContactCard
              icon={IconMail}
              label="Write to us"
              value="connect@thelanguagefoundation.com"
              href="mailto:connect@thelanguagefoundation.com"
              description="For questions, ideas and collaborations."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

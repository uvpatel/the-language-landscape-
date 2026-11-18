
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  IconArrowDown,
  IconArrowUpRight,
  IconBrandWhatsapp,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconMail,
  IconMessageCircle,
  IconSend,
  IconSparkles,
} from "@tabler/icons-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";


const programs = [
  "TEF & TCF Preparation",
  "DELF Preparation",
  "Kids Program",
  "Corporate Training",
  "Teachers Training",
  "Explore More Languages",
  "General Enquiry",
  "Collaboration",
];

const proficiencyLevels = [
  "Complete Beginner",
  "Beginner (A1)",
  "Elementary (A2)",
  "Intermediate (B1)",
  "Upper Intermediate (B2)",
  "Advanced (C1/C2)",
  "Not Sure",
];

const faqGroups = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "Who can enrol in your courses?",
        answer:
          "Anyone with a curiosity for languages. Whether you're a student, working professional or complete beginner, our programs are designed to meet you at your current level.",
      },
      {
        question: "Do I need prior knowledge of French to start?",
        answer:
          "Not at all. We offer beginner to advanced levels, so you can start from scratch or join a level that matches your current proficiency.",
      },
      {
        question: "How do I know which level is right for me?",
        answer:
          "We conduct an initial assessment or consultation to help identify the right level for your learning journey.",
      },
    ],
  },
  {
    category: "Classes & Learning",
    questions: [
      {
        question: "How are the classes conducted?",
        answer:
          "Our sessions are interactive and practical, conducted online through group or one-on-one classes. Expect real conversations, activities and guided practice, not just theory.",
      },
      {
        question: "Are the courses suitable for working professionals?",
        answer:
          "Absolutely. Our flexible schedules and practical approach are designed to fit into busy routines.",
      },
      {
        question: "Can I switch batches or timings?",
        answer:
          "We try our best to accommodate scheduling changes, depending on availability.",
      },
      {
        question: "What if I miss a class?",
        answer:
          "We provide support through recordings or catch-up sessions wherever possible, so you don't fall behind.",
      },
      {
        question: "How long does it take to become fluent in French?",
        answer:
          "Fluency depends on consistency and practice. With regular effort and guided learning, you'll gradually develop confidence in communicating.",
      },
      {
        question: "What kind of support will I receive during the course?",
        answer:
          "You'll receive continuous guidance from mentors, regular feedback and a supportive learning environment.",
      },
    ],
  },
  {
    category: "Examinations & Career",
    questions: [
      {
        question: "Do you prepare students for TEF, TCF and DELF?",
        answer:
          "Yes. We offer structured preparation for TEF Canada, TCF and DELF examinations, with focused training, mock tests and expert guidance.",
      },
      {
        question: "Is this course useful for studying or working abroad?",
        answer:
          "Yes. Our programs support academic goals, career growth and international opportunities, including immigration-related language requirements.",
      },
      {
        question: "Do you offer corporate or group training?",
        answer:
          "Yes. We provide customised Corporate French Training programs tailored to your industry, team size and business goals.",
      },
    ],
  },
  {
    category: "Enrolment & Payments",
    questions: [
      {
        question: "How do I enrol?",
        answer:
          "Simply reach out to us via email or complete the enquiry form on our website. We'll guide you through the next steps.",
      },
      {
        question: "Do you offer trial classes?",
        answer:
          "We may offer trial or demonstration sessions so you can experience our teaching approach before enrolling.",
      },
      {
        question: "What payment options are available?",
        answer:
          "Payment details will be shared during the enrolment process.",
      },
      {
        question: "Are course materials provided?",
        answer:
          "Yes. We provide curated in-house learning resources, study materials and reference documents throughout the course at appropriate stages of your learning journey.",
      },
    ],
  },
  {
    category: "Other Languages",
    questions: [
      {
        question: "Can I learn languages other than French at TLL?",
        answer:
          "French is our core offering, and we are working towards expanding into other languages through expert-led programs.",
      },
    ],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-[#B32526]" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#81766C]">
        {children}
      </span>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  description,
}: {
  icon: typeof IconMail;
  label: string;
  value: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-start gap-5 border border-[#D9CFC2] bg-[#F8F5EF] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B32526]/50 hover:shadow-[0_15px_40px_rgba(41,38,36,0.06)] sm:p-7"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#EFE9DF] text-[#B32526] transition-colors group-hover:bg-[#B32526] group-hover:text-white">
        <Icon size={22} stroke={1.5} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#81766C]">
          {label}
        </p>
        <p className="mt-2 break-words font-[family-name:var(--font-heading)] text-xl text-[#292624] sm:text-2xl">
          {value}
        </p>
        <p className="mt-2 text-sm leading-6 text-[#81766C]">
          {description}
        </p>
      </div>

      <IconArrowUpRight
        size={19}
        className="shrink-0 text-[#A58B64] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </a>
  );
}

function FAQAccordion({
  category,
  questions,
  activeQuestion,
  onToggle,
}: {
  category: string;
  questions: { question: string; answer: string }[];
  activeQuestion: string | null;
  onToggle: (question: string) => void;
}) {
  return (
    <div className="border-t border-[#D9CFC2] py-7">
      <h3 className="mb-5 font-[family-name:var(--font-heading)] text-2xl text-[#781E24]">
        {category}
      </h3>

      <div className="space-y-1">
        {questions.map((item) => {
          const isOpen = activeQuestion === item.question;

          return (
            <div
              key={item.question}
              className="border-b border-[#D9CFC2]/70"
            >
              <button
                type="button"
                onClick={() => onToggle(item.question)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-5 py-5 text-left"
              >
                <span className="font-medium text-[#292624] transition-colors hover:text-[#B32526] sm:text-[15px]">
                  {item.question}
                </span>

                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-all ${
                    isOpen
                      ? "border-[#B32526] bg-[#B32526] text-white"
                      : "border-[#D9CFC2] text-[#81766C]"
                  }`}
                >
                  <IconChevronDown
                    size={17}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-3xl pb-6 pr-10 text-sm leading-7 text-[#514A45]">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    proficiency: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Connect this handler to your enquiry API before production.
    // The current implementation provides frontend form interaction only.
    setSubmitted(true);
  }

  function updateField(
    field: keyof typeof formData,
    value: string
  ) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  const inputClass =
    "w-full border-b border-[#D9CFC2] bg-transparent px-0 py-4 text-sm text-[#292624] outline-none transition-colors placeholder:text-[#A69B90] focus:border-[#B32526]";

  return (
    <div className="border border-[#D9CFC2] bg-[#F8F5EF] p-6 sm:p-9 lg:p-11">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex min-h-[440px] flex-col items-center justify-center text-center"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#788477]/10 text-[#788477]">
            <IconCheck size={32} stroke={1.5} />
          </div>

          <h3 className="font-[family-name:var(--font-heading)] text-4xl text-[#292624]">
            Thank you for reaching out.
          </h3>

          <p className="mt-5 max-w-md text-sm leading-7 text-[#514A45]">
            We&apos;ve received your enquiry and look forward to connecting
            with you.
          </p>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                program: "",
                proficiency: "",
                message: "",
              });
            }}
            className="mt-8 text-sm font-semibold text-[#B32526] underline underline-offset-4"
          >
            Send another enquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-9">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="text-xs font-semibold text-[#514A45]"
              >
                Full Name <span className="text-[#B32526]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-xs font-semibold text-[#514A45]"
              >
                Email Address <span className="text-[#B32526]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-xs font-semibold text-[#514A45]"
              >
                Phone Number <span className="text-[#B32526]">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 00000 00000"
                required
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="program"
                className="text-xs font-semibold text-[#514A45]"
              >
                Program of Interest{" "}
                <span className="text-[#B32526]">*</span>
              </label>
              <select
                id="program"
                name="program"
                required
                value={formData.program}
                onChange={(e) => updateField("program", e.target.value)}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" disabled>
                  Select a program
                </option>
                {programs.map((program) => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="proficiency"
                className="text-xs font-semibold text-[#514A45]"
              >
                Current Language Proficiency
              </label>
              <select
                id="proficiency"
                name="proficiency"
                value={formData.proficiency}
                onChange={(e) =>
                  updateField("proficiency", e.target.value)
                }
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" disabled>
                  Select your current level
                </option>
                {proficiencyLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="text-xs font-semibold text-[#514A45]"
              >
                Your Message <span className="text-[#B32526]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us a little about your goals, questions or ideas..."
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xs text-xs leading-6 text-[#81766C]">
              Your information will only be used to respond to your enquiry.
            </p>

            <button
              type="submit"
              className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#B32526] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#781E24]"
            >
              Send Your Enquiry
              <IconSend
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(
    faqGroups[0].questions[0].question
  );

  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>

      <main className="overflow-hidden bg-[#F8F5EF]">
        {/* 01. Hero */}
        <section className="relative isolate overflow-hidden border-b border-[#D9CFC2]">
          <div className="pointer-events-none absolute -right-40 -top-36 h-[500px] w-[500px] rounded-full border border-[#B32526]/10" />
          <div className="pointer-events-none absolute -right-20 -top-16 h-[340px] w-[340px] rounded-full border border-[#B32526]/10" />

          <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-24 sm:px-10 sm:pb-28 sm:pt-32 lg:px-16">
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <SectionLabel>Say Bonjour · Get in touch</SectionLabel>

              <h1 className="font-[family-name:var(--font-heading)] text-[clamp(3.4rem,7vw,7rem)] leading-[0.98] tracking-[-0.045em] text-[#292624]">
                Every meaningful connection begins with a{" "}
                <span className="text-[#B32526]">hello.</span>
              </h1>

              <div className="mt-8 flex max-w-2xl gap-4">
                <span className="mt-2 h-12 w-px shrink-0 bg-[#A58B64]" />
                <p className="text-base leading-8 text-[#514A45] sm:text-lg sm:leading-9">
                  Have a question about our programs? Looking to collaborate?
                  Or simply curious about where a new language could take you?
                  We&apos;d love to hear from you.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="#inquiry"
                  className="group inline-flex min-h-14 items-center gap-3 bg-[#B32526] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#781E24]"
                >
                  Start a Conversation
                  <IconArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="#contact-details"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#292624] transition-colors hover:text-[#B32526]"
                >
                  Explore contact details
                  <IconArrowDown size={17} />
                </Link>
              </div>
            </motion.div>

            <div className="mt-20 flex items-center justify-between border-t border-[#D9CFC2] pt-6">
              <p className="font-[family-name:var(--font-heading)] text-lg text-[#81766C]">
                A conversation can open a new world.
              </p>
              <IconMessageCircle
                size={27}
                stroke={1}
                className="text-[#B32526]"
              />
            </div>
          </div>
        </section>

        {/* 02. Contact Information */}
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

        {/* 03. Inquiry Form */}
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
                Share a little about yourself and your learning goals. Our
                team will help you find the right way forward.
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

        {/* 04. FAQs */}
        <section
          id="faqs"
          className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <SectionLabel>Frequently asked questions</SectionLabel>

                <h2 className="font-[family-name:var(--font-heading)] text-5xl leading-[1.05] tracking-tight text-[#292624] sm:text-6xl">
                  Curious? We&apos;ve got{" "}
                  <span className="text-[#B32526]">answers.</span>
                </h2>
              </div>

              <p className="max-w-lg text-sm leading-8 text-[#514A45] lg:justify-self-end">
                A few things you might want to know before beginning your
                language journey. Can&apos;t find your answer? We&apos;re
                always happy to help.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
              <div className="h-fit bg-[#292624] p-8 text-[#F8F5EF] sm:p-10">
                <IconSparkles
                  size={29}
                  stroke={1.2}
                  className="text-[#D9C6A5]"
                />

                <h3 className="mt-7 font-[family-name:var(--font-heading)] text-3xl leading-tight">
                  Still have a question?
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#D0C7BB]">
                  Every learner&apos;s journey is different. Tell us what
                  you&apos;re looking for, and we&apos;ll help you take the
                  next step.
                </p>

                <Link
                  href="#inquiry"
                  className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#E5CBA6]"
                >
                  Ask us directly
                  <IconArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              <div>
                {faqGroups.map((group) => (
                  <FAQAccordion
                    key={group.category}
                    category={group.category}
                    questions={group.questions}
                    activeQuestion={activeQuestion}
                    onToggle={(question) =>
                      setActiveQuestion((current) =>
                        current === question ? null : question
                      )
                    }
                  />
                ))}
                <div className="border-t border-[#D9CFC2]" />
              </div>
            </div>
          </div>
        </section>

        {/* 05. Collaborations */}
        <section className="bg-[#EFE9DF] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionLabel>Beyond the classroom</SectionLabel>

              <h2 className="font-[family-name:var(--font-heading)] text-5xl leading-[1.05] tracking-tight text-[#292624] sm:text-6xl">
                Ideas, conversations and{" "}
                <span className="text-[#B32526]">
                  collaborations.
                </span>
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

            <div className="relative flex aspect-[1.15] items-center justify-center overflow-hidden bg-[#781E24] p-8 sm:p-12">
              <div className="absolute inset-6 border border-white/15" />
              <div className="absolute inset-12 rounded-full border border-white/10" />

              <div className="relative z-10 text-center">
                <p className="font-[family-name:var(--font-heading)] text-6xl leading-none text-[#F8F5EF] sm:text-8xl">
                  Bonjour.
                </p>

                <p className="mt-5 font-[family-name:var(--font-heading)] text-3xl text-[#D9C6A5] sm:text-4xl">
                  Hello. Namaste.
                </p>

                <div className="mx-auto mt-8 h-px w-16 bg-[#D9C6A5]/60" />

                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E8D9C7]">
                  Many voices. One connection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 06. Closing CTA */}
        <section className="relative isolate overflow-hidden bg-[#781E24] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
          <div className="pointer-events-none absolute -right-40 -top-48 h-[600px] w-[600px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-20 -top-28 h-[400px] w-[400px] rounded-full border border-white/10" />

          <div className="relative z-10 mx-auto max-w-[1440px] text-center">
            <SectionLabel>One hello can change everything</SectionLabel>

            <h2 className="mx-auto max-w-5xl font-[family-name:var(--font-heading)] text-5xl leading-[1.05] tracking-tight text-[#F8F5EF] sm:text-7xl lg:text-8xl">
              Or simply say{" "}
              <span className="text-[#D9C6A5]">bonjour.</span>
              <span className="mt-3 block text-3xl text-[#F8F5EF]/80 sm:text-5xl">
                We&apos;ll take it from there.
              </span>
            </h2>

            <Link
              href="#inquiry"
              className="group mt-12 inline-flex min-h-14 items-center gap-3 bg-[#F8F5EF] px-8 py-4 text-sm font-semibold text-[#781E24] transition-colors hover:bg-[#D9C6A5]"
            >
              Start a Conversation
              <IconArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <p className="mt-10 font-[family-name:var(--font-heading)] text-xl text-[#E8D9C7]">
              Step in curious. Step out multilingual.
            </p>
          </div>
        </section>
      </main>


    </>
  );
}


"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { IconCheck, IconSend } from "@tabler/icons-react";

import { programs, proficiencyLevels } from "@/data/say-bonjur/data";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  program: "",
  proficiency: "",
  message: "",
};

export default function InquiryForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Connect this handler to your enquiry API before production.
    // Currently this only displays the frontend success state.
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
              setFormData(initialFormData);
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

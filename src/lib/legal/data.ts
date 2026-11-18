export type LegalClause = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

export const termsAndConditions: LegalClause[] = [
  {
    title: "About Us",
    paragraphs: [
      "The Language Landscapes Inc. (TLL) provides premier language education, cultural immersion courses, examination preparation (including TEF, TCF, and DELF), and corporate linguistic training programs. Our services are accessible through digital platforms and interactive learning environments connecting learners internationally.",
    ],
  },
  {
    title: "Use of Website",
    paragraphs: [
      "You may access and use our website and learning resources solely for lawful personal, educational, and professional developmental purposes. You agree not to copy, reverse-engineer, distribute, or disrupt any content, software, or digital infrastructure associated with our domain or academy.",
    ],
  },
  {
    title: "Course Enrolment & Access",
    paragraphs: [
      "Enrolment is subject to availability, eligibility verification, and completion of the onboarding process. Course access credentials, batch timings, digital learning materials, and session recordings are strictly personal to the registered learner and may not be shared, transferred, or sub-licensed to any third party.",
    ],
  },
  {
    title: "Fees & Payment",
    paragraphs: [
      "All course fees must be paid in full prior to course commencement unless an approved structured instalment schedule is agreed in writing. Payments must be processed through authorized financial channels. All listed fees are exclusive of any applicable local transaction taxes or bank conversion charges unless specified otherwise.",
    ],
  },
  {
    title: "Cancellation & Refund Policy",
    paragraphs: [
      "Course cancellations requested prior to the start of the first instructional session may be eligible for a refund minus administrative processing charges. Once course sessions have commenced or customized curriculum materials have been issued, fees are strictly non-refundable. Under exceptional, documented circumstances, batch transfers or credit deferrals may be granted at the sole discretion of TLL management.",
    ],
  },
  {
    title: "Code of Conduct",
    paragraphs: [
      "We foster a collaborative, inclusive, respectful, and academically rigorous learning environment. Harassment, discrimination, abusive behavior, unauthorized recording of sessions, or disruption of virtual classrooms will result in immediate termination of enrolment without entitlement to a refund.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "All educational curricula, pedagogical frameworks, proprietary exercise materials, audio/video assets, logos, and website copy remain the exclusive intellectual property of The Language Landscapes Inc. No material may be published, repurposed, recorded, or commercially exploited without our prior written consent.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "While we strive for pedagogical excellence and test-taking success, TLL does not guarantee specific exam score outcomes, immigration approvals, or career opportunities. To the fullest extent permitted by law, TLL and its educators shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of our educational services.",
    ],
  },
  {
    title: "Privacy",
    paragraphs: [
      "Your personal and academic data is collected, handled, and protected in accordance with our Privacy Policy. By agreeing to these Terms, you consent to data practices outlined therein.",
    ],
  },
  {
    title: "Changes to Terms",
    paragraphs: [
      "We reserve the right to review, update, and modify these Terms & Conditions periodically to reflect evolving pedagogical standards, operational updates, or legal compliance. Continued engagement with our services following updates constitutes acceptance of the amended terms.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These Terms & Conditions shall be governed by and construed in accordance with the applicable laws of the jurisdictions in which The Language Landscapes operates (including India and Canada), without regard to conflict of law principles. Any legal disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts of the governing operational entity.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "For questions regarding these Terms & Conditions, contact us at connect@thelanguagefoundation.com.",
    ],
  },
];

export const privacyPolicy: LegalClause[] = [
  {
    title: "Information We Collect",
    paragraphs: [
      "We collect personal information necessary to deliver educational services, academic administration, and platform operations:",
    ],
    list: [
      "Personal identification: full name, email address, phone number, residential country, and language proficiency level.",
      "Academic records: diagnostic placement scores, assignment submissions, course progression metrics, and attendance logs.",
      "Financial transactions: payment confirmations and invoice receipts (processed securely via certified third-party payment gateways; we do not store full payment card details).",
      "Technical usage data: IP address, browser type, operating system, and analytical cookies that assist in improving site performance.",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "We use the collected information for specific, legitimate educational and administrative purposes:",
    ],
    list: [
      "Coordinating course registrations, placement assessments, and classroom scheduling.",
      "Delivering live interactive instruction, individualized mentor evaluations, and study guidance.",
      "Issuing formal certificates of completion, course transcripts, and academic recommendations.",
      "Communicating essential schedule changes, service updates, and responding to inquiries.",
      "Ensuring compliance with applicable legal, accounting, and regulatory standards.",
    ],
  },
  {
    title: "Data Sharing & Disclosure",
    paragraphs: [
      "We respect your privacy and never sell, rent, or trade your personal information. Information is shared only with:",
    ],
    list: [
      "Assigned educators and academic coordinators strictly to facilitate your learning curriculum.",
      "Vetted third-party service providers (such as secure video conferencing, cloud storage, and payment processors) under strict confidentiality agreements.",
      "Legal and regulatory authorities when strictly mandated by applicable statutory obligations or judicial orders.",
    ],
  },
  {
    title: "Data Protection & Security",
    paragraphs: [
      "We implement industry-standard technical, organizational, and physical security measures to safeguard your personal data from unauthorized access, accidental loss, misuse, or alteration. All electronic communications and data transmissions are encrypted using standard TLS protocols.",
    ],
  },
  {
    title: "International Users (India & Canada)",
    paragraphs: [
      "The Language Landscapes serves international learners primarily across India and Canada, as well as globally. Your personal information may be processed and stored in secure data facilities located in India, Canada, or globally distributed cloud networks. We ensure cross-border data handling complies with relevant statutory standards, including Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and India's Digital Personal Data Protection Act (DPDPA).",
    ],
  },
  {
    title: "Learning Resources",
    paragraphs: [
      "Curriculum materials, workbooks, practice portals, and recorded classroom interactions provided during courses are hosted on secure academic repositories. Access is monitored to ensure copyright compliance and to safeguard the privacy of participating learners and educators.",
    ],
  },
  {
    title: "Attendance for Referred Students",
    paragraphs: [
      "Where a learner has been enrolled or sponsored through an authorized partner, institutional affiliate, academic referral program, or corporate sponsor, attendance records, progress milestones, and evaluation summaries may be shared with the referring institution or sponsor in accordance with their contractual sponsorship agreement.",
    ],
  },
  {
    title: "Your Rights",
    paragraphs: [
      "Depending on your jurisdiction, you retain statutory rights regarding your personal information:",
    ],
    list: [
      "The right to request access to the personal data we hold about you.",
      "The right to request correction of inaccurate, incomplete, or outdated records.",
      "The right to request deletion of your data, subject to statutory recordkeeping requirements.",
      "The right to withdraw consent for non-essential communications or marketing updates.",
    ],
  },
  {
    title: "Cookies & Tracking",
    paragraphs: [
      "Our website utilizes essential and performance cookies to maintain site security, remember your preferences, and analyze visitor traffic. You can modify your browser settings to decline non-essential cookies, though certain interactive features may experience reduced functionality.",
    ],
  },
  {
    title: "Third-Party Links",
    paragraphs: [
      "Our website and materials may contain links to external examination bodies (such as France Éducation international or CCIP) or partner platforms. We do not control and are not responsible for the privacy policies, content, or practices of third-party domains.",
    ],
  },
  {
    title: "Updates to This Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically to reflect pedagogical developments, system enhancements, or statutory changes. Any updates will take effect upon publication with a revised effective date. We encourage regular review of this policy.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "For questions regarding this Privacy Policy, or to exercise your privacy rights, contact us at connect@thelanguagefoundation.com.",
    ],
  },
];

export const privacyEffectiveDate = "1 January 2026";

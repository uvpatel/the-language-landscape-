
export type LegalClause = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

export const termsAndConditions: LegalClause[] = [
  { title: "About Us", paragraphs: [] },
  { title: "Use of Website", paragraphs: [] },
  { title: "Course Enrolment & Access", paragraphs: [] },
  { title: "Fees & Payment", paragraphs: [] },
  { title: "Cancellation & Refund Policy", paragraphs: [] },
  { title: "Code of Conduct", paragraphs: [] },
  { title: "Intellectual Property", paragraphs: [] },
  { title: "Limitation of Liability", paragraphs: [] },
  { title: "Privacy", paragraphs: [] },
  { title: "Changes to Terms", paragraphs: [] },
  { title: "Governing Law", paragraphs: [] },
  {
    title: "Contact Us",
    paragraphs: [
      "For questions regarding these Terms & Conditions, contact us at connect@thelanguagefoundation.com.",
    ],
  },
];

export const privacyPolicy: LegalClause[] = [
  { title: "Information We Collect", paragraphs: [] },
  { title: "How We Use Your Information", paragraphs: [] },
  { title: "Data Sharing & Disclosure", paragraphs: [] },
  { title: "Data Protection & Security", paragraphs: [] },
  { title: "International Users (India & Canada)", paragraphs: [] },
  { title: "Learning Resources", paragraphs: [] },
  { title: "Attendance for Referred Students", paragraphs: [] },
  { title: "Your Rights", paragraphs: [] },
  { title: "Cookies & Tracking", paragraphs: [] },
  { title: "Third-Party Links", paragraphs: [] },
  { title: "Updates to This Policy", paragraphs: [] },
  {
    title: "Contact Us",
    paragraphs: [
      "For questions regarding this Privacy Policy, contact us at connect@thelanguagefoundation.com.",
    ],
  },
];

export const privacyEffectiveDate = "1st January, 2026";

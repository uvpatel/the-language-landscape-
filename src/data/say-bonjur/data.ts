
export interface FormOption {
  value: string;
  label: string;
  description?: string;
}

export const programs = [
  "TEF & TCF Preparation",
  "DELF Preparation",
  "Kids Program",
  "Corporate Training",
  "Teachers Training",
  "Explore More Languages",
  "General Enquiry",
  "Collaboration",
];

export const programOptions: FormOption[] = [
  {
    value: "TEF & TCF Preparation",
    label: "TEF & TCF Preparation",
    description: "Targeted training for Canada immigration, PR & citizenship exams",
  },
  {
    value: "DELF Preparation",
    label: "DELF Preparation",
    description: "Internationally recognized French diplomas (A1 to C2 certification)",
  },
  {
    value: "Kids Program",
    label: "Kids Program",
    description: "Immersive, engaging French learning designed for young minds",
  },
  {
    value: "Corporate Training",
    label: "Corporate Training",
    description: "Customized business French programs for teams and enterprises",
  },
  {
    value: "Teachers Training",
    label: "Teachers Training",
    description: "Advanced pedagogy, teaching methodology & classroom skills",
  },
  {
    value: "Explore More Languages",
    label: "Explore More Languages",
    description: "Spanish, German, and multilingual tracks with expert mentors",
  },
  {
    value: "General Enquiry",
    label: "General Enquiry",
    description: "Schedules, fee structure, personalized consultations & questions",
  },
  {
    value: "Collaboration",
    label: "Collaboration",
    description: "Institutional partnerships, cultural events & workshops",
  },
];

export const proficiencyLevels = [
  "Complete Beginner",
  "Beginner (A1)",
  "Elementary (A2)",
  "Intermediate (B1)",
  "Upper Intermediate (B2)",
  "Advanced (C1/C2)",
  "Not Sure",
];

export const proficiencyOptions: FormOption[] = [
  {
    value: "Complete Beginner",
    label: "Complete Beginner",
    description: "No prior background; starting your French journey from scratch",
  },
  {
    value: "Beginner (A1)",
    label: "Beginner (A1)",
    description: "Can understand and use simple everyday phrases and introductions",
  },
  {
    value: "Elementary (A2)",
    label: "Elementary (A2)",
    description: "Can communicate in routine tasks and discuss personal background",
  },
  {
    value: "Intermediate (B1)",
    label: "Intermediate (B1)",
    description: "Can express opinions, narrate experiences, and handle travel needs",
  },
  {
    value: "Upper Intermediate (B2)",
    label: "Upper Intermediate (B2)",
    description: "Can converse fluently and spontaneously with native speakers",
  },
  {
    value: "Advanced (C1/C2)",
    label: "Advanced (C1/C2)",
    description: "Near-native fluency, complex texts, and professional nuance",
  },
  {
    value: "Not Sure",
    label: "Not Sure",
    description: "We will evaluate your level together during an initial assessment",
  },
];

export const faqGroups = [
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

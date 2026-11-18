
export interface ProgramTestimonial {
  quote: string;
  name?: string;
  author?: string;
  approved?: boolean;
}

export interface Program {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  features: string[];
  journey: string[];
  outcomes: string[];
  testimonials: ProgramTestimonial[];
  cta: string;
}

// export type ProgramTestimonial = {
//   quote: string
//   name: string
//   approved: boolean
// }

// export type Program = {
//   id: string
//   number: string
//   title: string
//   headline: string
//   description: string
//   offerings: string[]
//   journey: string[]
//   outcomes: string[]
//   testimonials: ProgramTestimonial[]
//   cta: string
//   audience: string
// }

// export const programs: Program[] = [
//   {
//     id: "tef-tcf",
//     number: "01",
//     title: "TEF & TCF Preparation",
//     headline: "Prepare with purpose. Progress with confidence.",
//     audience: "French certification",
//     description:
//       "French-language examinations like TEF and TCF can be important steps towards building a new life in French-speaking regions. Whether your goal is immigration or a new beginning abroad, our structured preparation helps you understand examination formats, overcome time constraints and approach each section with confidence.",
//     offerings: [
//       "Listening comprehension",
//       "Reading comprehension",
//       "Written expression",
//       "Oral expression",
//     ],
//     journey: [
//       "Assessment of your current language proficiency and goals.",
//       "Tailored lessons focusing on your weaker areas.",
//       "Mock examinations simulating real test conditions.",
//       "Mock speaking sessions to improve articulation.",
//       "Strategy sessions to improve time management and examination performance.",
//     ],
//     outcomes: [
//       "Greater confidence in test-taking.",
//       "Familiarity with TEF and TCF question formats.",
//       "Improved performance across all examination sections.",
//       "Structured preparation aligned with your French-language immigration goals.",
//     ],
//     testimonials: [
//       {
//         quote:
//           "I was nervous about the TCF exam, but the personalized attention and clear feedback at TLL made all the difference. The sessions were structured, yet flexible to my pace. Highly recommend!",
//         name: "Priya Patel",
//         approved: true,
//       },
//       {
//         quote:
//           "What I loved most was the balance of grammar drills and real-life practice. The toolkit and resources were so well-organized, and the faculty was always available to guide me. I couldn't have done it without TLL!",
//         name: "Samiksha Gandhi",
//         approved: true,
//       },
//     ],
//     cta: "Reserve your spot today and book a consultation to plan your journey.",
//   },
//   {
//     id: "delf",
//     number: "02",
//     title: "DELF Preparation",
//     headline: "Build your proficiency. Earn your recognition.",
//     audience: "French certification",
//     description:
//       "A DELF qualification validates your French-language proficiency and can strengthen your academic and professional profile. It offers a structured way to develop practical French communication skills while preparing for an internationally recognised certification.",
//     offerings: [
//       "Listening comprehension",
//       "Reading comprehension",
//       "Written expression",
//       "Oral expression",
//       "Vocabulary and grammar development",
//     ],
//     journey: [
//       "Systematic learning following the DELF framework.",
//       "Practice using authentic exam-oriented content.",
//       "Regular evaluations to track progress.",
//       "Mock speaking sessions for better articulation.",
//       "Feedback sessions to improve unfinished linguistic areas and build confidence.",
//     ],
//     outcomes: [
//       "Readiness for DELF certification examinations.",
//       "Stronger command of French across all skills.",
//       "Confidence in real-world communication.",
//       "Opportunities in global academics and careers.",
//     ],
//     testimonials: [
//       {
//         quote:
//           "I wanted DELF to boost my career profile, and TLL helped me every step of the way. The classes were practical, the resources were excellent, and I cleared my exam with ease.",
//         name: "Arjun Parikh",
//         approved: true,
//       },
//       {
//         quote:
//           "What stood out was the cultural immersion TLL added to the lessons. It wasn't just exam prep, it was learning to live the language. My DELF results were beyond what I expected!",
//         name: "Ravi Kalmani",
//         approved: true,
//       },
//     ],
//     cta: "Reserve your spot today and book a consultation to plan your journey.",
//   },
//   {
//     id: "kids",
//     number: "03",
//     title: "Kids Program",
//     headline: "Little learners. Bigger worlds.",
//     audience: "Young learners",
//     description:
//       "Children naturally absorb sounds, words and patterns. Early exposure to another language can nurture communication, creativity, cognitive development and cultural openness. Our Kids Program goes beyond language learning. We focus on nurturing curiosity and confidence from the very beginning.",
//     offerings: [
//       "Stories and storytelling.",
//       "Games and activities.",
//       "Songs and audio-visual learning.",
//       "Role-plays and conversations.",
//       "Progressive vocabulary and grammar.",
//     ],
//     journey: [
//       "Immersive sessions designed to make learning enjoyable.",
//       "Visual and audio tools to support memory and focus.",
//       "Progressive vocabulary and grammar learning in context.",
//       "Supportive activities that encourage curiosity and expression.",
//     ],
//     outcomes: [
//       "Early multilingual exposure.",
//       "Stronger memory, focus and problem-solving skills.",
//       "Confidence in expressing themselves in another language.",
//       "A lifelong interest in language learning.",
//     ],
//     testimonials: [
//       {
//         quote:
//           "I was amazed when my 7-year-old started greeting us in French at the breakfast table. TLL makes learning fun and interactive. My child looks forward to every class!",
//         name: "Radhika Majithia",
//         approved: true,
//       },
//       {
//         quote:
//           "What impressed me most was how quickly my son started forming simple sentences. The program balances fun with real learning, and it shows!",
//         name: "Kunal Rao",
//         approved: true,
//       },
//     ],
//     cta: "Reserve your spot today and book a consultation to plan your child's learning journey.",
//   },
//   {
//     id: "corporate",
//     number: "04",
//     title: "Corporate Training Program",
//     headline: "Where language meets leadership.",
//     audience: "Professional development",
//     description:
//       "French connects professionals with more than 300 million speakers across continents, from Paris to Montreal to Dakar. It is a language of diplomacy, design and international business. Whether you are working with international clients, expanding into French-speaking markets or managing overseas projects, learning French can help your team communicate and collaborate more confidently.",
//     offerings: [
//       "Business communication and professional writing.",
//       "Industry-focused vocabulary for finance, IT, hospitality and healthcare.",
//       "Presentations and negotiation skills.",
//       "Cross-cultural communication.",
//       "French workplace etiquette.",
//       "Flexible training formats.",
//     ],
//     journey: [
//       "Understand team proficiency and business objectives.",
//       "Design tailored training modules around your industry.",
//       "Develop professional communication skills.",
//       "Explore cultural intelligence and workplace etiquette.",
//       "Apply learning through practical business scenarios.",
//     ],
//     outcomes: [
//       "Confident communication in workplace settings.",
//       "Understanding of French business etiquette and culture.",
//       "Greater cross-cultural awareness.",
//       "Effective networking with international professionals.",
//       "Stronger leadership and collaboration.",
//     ],
//     testimonials: [
//       {
//         quote:
//           "As a senior consultant, I often had to sit in on meetings with our French partners. After the course, I could lead presentations confidently and handle negotiations in French. It's a skill that's opened doors across our European offices.",
//         name: "Anirudh Mehta",
//         approved: true,
//       },
//       {
//         quote:
//           "Beyond language, this program taught us how to think cross-culturally. Our communication with partners in Canada and Europe feels more natural and respectful now. It's transformed our global outlook.",
//         name: "Nandita Rao",
//         approved: true,
//       },
//     ],
//     cta: "Give your team a global voice. Get in touch to discuss a customised corporate training program.",
//   },
//   {
//     id: "teachers-training",
//     number: "05",
//     title: "Teachers Training Program",
//     headline: "Inspire learners. Shape language journeys.",
//     audience: "Aspiring educators",
//     description:
//       "Teaching a language requires more than knowing it. It requires passion, pedagogy and practice. Our program equips aspiring and practising educators with the skills and resources needed to become confident and impactful language instructors. It is designed for those who want to refine their teaching methods, gain professional recognition and explore opportunities in language education.",
//     offerings: [
//       "Language teaching methodologies.",
//       "Classroom management.",
//       "Digital tools for education.",
//       "Lesson planning and curriculum development.",
//       "Student engagement strategies.",
//       "Practical teaching assignments.",
//     ],
//     journey: [
//       "Training modules designed by experienced educators.",
//       "Practical teaching assignments.",
//       "Peer reviews and constructive feedback.",
//       "Tools for lesson planning and student engagement.",
//       "Guidance on building a career in language teaching.",
//     ],
//     outcomes: [
//       "Pedagogical and methodological expertise.",
//       "Confidence in teaching across age groups.",
//       "Practical teaching skills.",
//       "Professional development as a language instructor.",
//       "A foundation for a teaching career.",
//     ],
//     testimonials: [
//       {
//         quote:
//           "The program helped me approach language teaching with greater confidence. The practical assignments and guidance gave me useful tools to engage learners and plan lessons effectively.",
//         name: "TLL Alumni",
//         approved: false,
//       },
//     ],
//     cta: "Turn your passion for languages into a teaching journey. Enquire about our Teachers Training Program.",
//   },
//   {
//     id: "explore-languages",
//     number: "06",
//     title: "Explore More Languages",
//     headline: "One world. Many languages. Endless possibilities.",
//     audience: "Curious minds",
//     description:
//       "Every language offers a new way to understand people, cultures and the world. At The Language Landscapes, we believe multilingualism connects cultures and creates opportunities. Explore languages beyond your mother tongue and discover new possibilities for personal growth, travel, education and professional development.",
//     offerings: [
//       "Beginner-friendly introductions to grammar and vocabulary.",
//       "Culturally immersive sessions.",
//       "Real-life communication practice.",
//       "Learning roadmaps customised to your interests.",
//       "Access to diverse learning resources and expert instructors.",
//     ],
//     journey: [
//       "Discover languages that interest you.",
//       "Build foundations in vocabulary and grammar.",
//       "Explore cultural contexts.",
//       "Practise everyday communication.",
//       "Follow a learning roadmap suited to your goals.",
//     ],
//     outcomes: [
//       "A multilingual advantage in academics and careers.",
//       "Broader cultural awareness.",
//       "Strong communication skills across borders.",
//       "A lifelong habit of global learning.",
//     ],
//     testimonials: [
//       {
//         quote:
//           "Exploring a new language has helped me become more curious about different cultures and ways of communicating. The learning experience has encouraged me to keep discovering.",
//         name: "TLL Learner",
//         approved: false,
//       },
//     ],
//     cta: "There is always another language to discover. Tell us which language interests you.",
//   },
// ]


export const programs: Program[] = [
  {
    id: "tef-tcf",
    number: "01",
    title: "TEF & TCF Preparation",
    headline: "Prepare with purpose. Progress with confidence.",

    description:
      "French-language examinations like TEF and TCF can be important steps towards building a new life in French-speaking regions. Whether your goal is immigration or a new beginning abroad, our structured preparation helps you understand examination formats, overcome time constraints and approach each section with confidence.",

    features: [
      "Listening comprehension",
      "Reading comprehension",
      "Written expression",
      "Oral expression",
    ],

    journey: [
      "Assessment of your current language proficiency and goals.",
      "Tailored lessons focusing on your weaker areas.",
      "Mock examinations simulating real test conditions.",
      "Mock speaking sessions to improve articulation.",
      "Strategy sessions to improve time management and examination performance.",
    ],

    outcomes: [
      "Greater confidence in test-taking.",
      "Familiarity with TEF and TCF question formats.",
      "Improved performance across all examination sections.",
      "Structured preparation aligned with your French-language immigration goals.",
    ],

    testimonials: [
      {
        quote:
          "I was nervous about the TCF exam, but the personalized attention and clear feedback at TLL made all the difference. The sessions were structured, yet flexible to my pace. Highly recommend!",
        author: "Priya Patel",
        name: "Priya Patel",
        approved: true,
      },
      {
        quote:
          "What I loved most was the balance of grammar drills and real-life practice. The toolkit and resources were so well-organized, and the faculty was always available to guide me. I couldn't have done it without TLL!",
        author: "Samiksha Gandhi",
        name: "Samiksha Gandhi",
        approved: true,
      },
    ],

    cta: "Reserve your spot today",
  },

  {
    id: "delf",
    number: "02",
    title: "DELF Preparation",
    headline: "Build your proficiency. Earn your recognition.",

    description:
      "A DELF qualification validates your French-language proficiency and can strengthen your academic and professional profile. It offers a structured way to develop practical French communication skills while preparing for an internationally recognised certification.",

    features: [
      "Listening comprehension",
      "Reading comprehension",
      "Written expression",
      "Oral expression",
      "Vocabulary and grammar development",
    ],

    journey: [
      "Systematic learning following the DELF framework.",
      "Practice using authentic exam-oriented content.",
      "Regular evaluations to track progress.",
      "Mock speaking sessions for better articulation.",
      "Feedback sessions to improve unfinished linguistic areas and build confidence.",
    ],

    outcomes: [
      "Readiness for DELF certification examinations.",
      "Stronger command of French across all skills.",
      "Confidence in real-world communication.",
      "Opportunities in global academics and careers.",
    ],

    testimonials: [
      {
        quote:
          "I wanted DELF to boost my career profile, and TLL helped me every step of the way. The classes were practical, the resources were excellent, and I cleared my exam with ease.",
        author: "Arjun Parikh",
        name: "Arjun Parikh",
        approved: true,
      },
      {
        quote:
          "What stood out was the cultural immersion TLL added to the lessons. It wasn't just exam prep, it was learning to live the language. My DELF results were beyond what I expected!",
        author: "Ravi Kalmani",
        name: "Ravi Kalmani",
        approved: true,
      },
    ],

    cta: "Reserve your spot today",
  },

  {
    id: "kids-program",
    number: "03",
    title: "Kids Program",
    headline: "Little learners. Bigger worlds.",

    description:
      "Children naturally absorb sounds, words and patterns. Early exposure to another language can nurture communication, creativity, cognitive development and cultural openness. Our Kids Program goes beyond language learning. We focus on nurturing curiosity and confidence from the very beginning.",

    features: [
      "Stories and storytelling",
      "Games and activities",
      "Songs and audio-visual learning",
      "Role-plays and conversations",
      "Progressive vocabulary and grammar",
    ],

    journey: [
      "Immersive sessions designed to make learning enjoyable.",
      "Visual and audio tools to support memory and focus.",
      "Progressive vocabulary and grammar learning in context.",
      "Supportive activities that encourage curiosity and expression.",
    ],

    outcomes: [
      "Early multilingual exposure.",
      "Stronger memory, focus and problem-solving skills.",
      "Confidence in expressing themselves in another language.",
      "A lifelong interest in language learning.",
    ],

    testimonials: [
      {
        quote:
          "I was amazed when my 7-year-old started greeting us in French at the breakfast table. TLL makes learning fun and interactive. My child looks forward to every class!",
        author: "Radhika Majithia",
        name: "Radhika Majithia",
        approved: true,
      },
      {
        quote:
          "What impressed me most was how quickly my son started forming simple sentences. The program balances fun with real learning, and it shows!",
        author: "Kunal Rao",
        name: "Kunal Rao",
        approved: true,
      },
    ],

    cta: "Reserve your child's spot",
  },

  {
    id: "corporate-training",
    number: "04",
    title: "Corporate Training Program",
    headline: "Where language meets leadership.",

    description:
      "French connects professionals with more than 300 million speakers across continents, from Paris to Montreal to Dakar. It is a language of diplomacy, design and international business. Whether you are working with international clients, expanding into French-speaking markets or managing overseas projects, learning French can help your team communicate and collaborate more confidently.",

    features: [
      "Business communication and professional writing",
      "Industry-focused vocabulary for finance, IT, hospitality and healthcare",
      "Presentations and negotiation skills",
      "Cross-cultural communication",
      "French workplace etiquette",
      "Flexible training formats",
    ],

    journey: [
      "Understand team proficiency and business objectives.",
      "Design tailored training modules around your industry.",
      "Develop professional communication skills.",
      "Explore cultural intelligence and workplace etiquette.",
      "Apply learning through practical business scenarios.",
    ],

    outcomes: [
      "Confident communication in workplace settings.",
      "Understanding of French business etiquette and culture.",
      "Greater cross-cultural awareness.",
      "Effective networking with international professionals.",
      "Stronger leadership and collaboration.",
    ],

    testimonials: [
      {
        quote:
          "As a senior consultant, I often had to sit in on meetings with our French partners. After the course, I could lead presentations confidently and handle negotiations in French. It's a skill that's opened doors across our European offices.",
        author: "Anirudh Mehta",
        name: "Anirudh Mehta",
        approved: true,
      },
      {
        quote:
          "Beyond language, this program taught us how to think cross-culturally. Our communication with partners in Canada and Europe feels more natural and respectful now. It's transformed our global outlook.",
        author: "Nandita Rao",
        name: "Nandita Rao",
        approved: true,
      },
    ],

    cta: "Discuss corporate training",
  },

  {
    id: "teachers-training",
    number: "05",
    title: "Teachers Training Program",
    headline: "Inspire learners. Shape language journeys.",

    description:
      "Teaching a language requires more than knowing it. It requires passion, pedagogy and practice. Our program equips aspiring and practising educators with the skills and resources needed to become confident and impactful language instructors. It is designed for those who want to refine their teaching methods, gain professional recognition and explore opportunities in language education.",

    features: [
      "Language teaching methodologies",
      "Classroom management",
      "Digital tools for education",
      "Lesson planning and curriculum development",
      "Student engagement strategies",
      "Practical teaching assignments",
    ],

    journey: [
      "Training modules designed by experienced educators.",
      "Practical teaching assignments.",
      "Peer reviews and constructive feedback.",
      "Tools for lesson planning and student engagement.",
      "Guidance on building a career in language teaching.",
    ],

    outcomes: [
      "Pedagogical and methodological expertise.",
      "Confidence in teaching across age groups.",
      "Practical teaching skills.",
      "Professional development as a language instructor.",
      "A foundation for a teaching career.",
    ],

    // Add an approved real testimonial before publishing.

    testimonials: [],

    cta: "Enquire about teacher training",
  },

  {
    id: "explore-languages",
    number: "06",
    title: "Explore More Languages",
    headline: "One world. Many languages. Endless possibilities.",

    description:
      "Every language offers a new way to understand people, cultures and the world. At The Language Landscapes, we believe multilingualism connects cultures and creates opportunities. Explore languages beyond your mother tongue and discover new possibilities for personal growth, travel, education and professional development.",

    features: [
      "Beginner-friendly introductions to grammar and vocabulary",
      "Culturally immersive sessions",
      "Real-life communication practice",
      "Learning roadmaps customised to your interests",
      "Access to diverse learning resources and expert instructors",
    ],

    journey: [
      "Discover languages that interest you.",
      "Build foundations in vocabulary and grammar.",
      "Explore cultural contexts.",
      "Practise everyday communication.",
      "Follow a learning roadmap suited to your goals.",
    ],

    outcomes: [
      "A multilingual advantage in academics and careers.",
      "Broader cultural awareness.",
      "Strong communication skills across borders.",
      "A lifelong habit of global learning.",
    ],

    // Add an approved real testimonial before publishing.

    testimonials: [],

    cta: "Discover more languages",
  },
];

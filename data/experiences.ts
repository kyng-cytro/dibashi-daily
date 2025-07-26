export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  image: {
    src: string;
    alt: string;
  };
  headline?: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    title: "Full-Stack Software Developer",
    company: "earlySTEMer",
    location: "Lagos, Nigeria",
    period: "JUL 2021-PRESENT",
    image: {
      src: "/images/experiences/earlystemer.png",
      alt: "earlySTEMer",
    },
    achievements: [
      "Developed and launched the Virtual Sessions Management System (VSMS), streamlining operations and increasing user engagement by 40%, while managing over 1,500 virtual sessions monthly.",
      "Engineered a comprehensive Lead Management System that improved client interaction tracking, reduced response time by 30%, and generated ₦5.5M+ in new business within six months.",
      "Created an interactive Student Portfolio platform that enhanced user satisfaction by 25%, providing seamless progress tracking for 3,000+ students annually.",
    ],
  },
  {
    title: "Contract Backend Developer & System Architect",
    company: "Tourism Business Unit - Sterling Bank Limited",
    location: "Lagos, Nigeria",
    period: "AUG 2024",
    headline: "BREAKING: Developer Makes Tour Booking That Actually Works!",
    image: {
      src: "/images/experiences/torrista.png",
      alt: "Torrista",
    },
    achievements: [
      "Designed and implemented the backend architecture for Torrista, a comprehensive tour marketplace ensuring seamless booking, payment, and user management while supporting 10,000+ daily interactions.",
      "Built a comprehensive admin application for efficient management of over 5,000 bookings and payments, with intuitive workflows that improved operational efficiency by 40%.",
      "Engineered a streamlined in-house CRM system tailored for blog management, enhancing content publication efficiency and user engagement metrics.",
    ],
  },
  {
    title: "Contract Frontend Developer & Performance Specialist",
    company: "Blanche Aigle Communications",
    location: "Lagos, Nigeria",
    period: "JAN 2025",
    image: {
      src: "/placeholder.svg?height=200&width=400",
      alt: "Website performance optimization results",
    },
    achievements: [
      "Redesigned and optimized the company's landing page, resulting in a 35% increase in user engagement and 20% reduction in bounce rates through improved UX design.",
      "Enhanced web performance achieving Core Web Vitals green scores, improving loading speeds by 1.5 seconds and boosting user retention by 30%.",
      "Implemented advanced SEO strategies that led to a 45% increase in organic search traffic and improved the website's ranking from page 3 to top 10 results for key industry terms.",
    ],
  },
  {
    title: "Contract Systems Developer & Technical Consultant",
    company: "F.O. Lanraj Enterprises",
    location: "Lagos, Nigeria",
    period: "APR 2024-PRESENT",
    image: {
      src: "/placeholder.svg?height=200&width=400",
      alt: "Internal business management systems",
    },
    achievements: [
      "Developed and deployed a comprehensive sales, purchase, expense, and inventory management system, reducing manual record-keeping by 80% and improving data accuracy by 45%.",
      "Optimized and launched the company's landing page, achieving Core Web Vitals green scores, improving load time by 1.8 seconds, and increasing search engine visibility by 20%.",
      "Provided technical consulting on system architecture and workflow automation, resulting in a 25% improvement in overall business efficiency.",
    ],
  },
];

export type Project = {
  title: string;
  link?: string;
  imageAlt: string;
  description: string;
  techStack: string;
};

export const projects: Project[] = [
  {
    title: "Spen Agro",
    imageAlt: "Spen Agro Site Interface",
    description: "",
    techStack: "Laravel, Vue.js, Tailwind CSS, Inertia.js",
  },
  {
    title: "Torrista",
    imageAlt: "Torrista Marketplace Interface",
    description:
      "A robust tour marketplace handling 10,000+ daily interactions with seamless booking, secure payment processing, and comprehensive user management. Includes tour discovery, reviews, and booking analytics.",
    techStack: "Node.js, Hono.js, Drizzle, Zod,PostgreSQL, Docker",
    link: "#",
  },
  {
    title: "Virtual Sessions Management System",
    imageAlt: "VSMS Dashboard Interface",
    description:
      "A comprehensive platform managing 1,500+ monthly virtual sessions with automated scheduling, user management, and real-time notifications. Features include session analytics, participant tracking, and integrated communication tools.",
    techStack: "Node.js, Vue.js, MySQL, Express.js",
    link: "#",
  },
  {
    title: "Lead Management System",
    imageAlt: "Lead Management System Dashboard",
    description:
      "A powerful CRM solution that generated ₦5.5M+ in revenue through improved client tracking and automated follow-ups. Includes sales pipeline management, client communication history, and performance analytics.",
    techStack: "TypeScript, Nuxt.js, PostgreSQL, Hono.js",
    link: "#",
  },
  {
    title: "Interactive Student Portfolio",
    imageAlt: "Student Portfolio System Interface",
    description:
      "A comprehensive platform serving 3,000+ students with progress tracking, achievement badges, and parent notifications. Features include skill assessments, project showcases, and performance analytics.",
    techStack: "Vue.js, Node.js, MySQL, Chart.js",
    link: "#",
  },
];

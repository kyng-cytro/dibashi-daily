export type Project = {
  title: string;
  link?: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  techStack: string;
};

export const projects: Project[] = [
  {
    title: "Cylip|Notes",
    image: {
      src: "/images/projects/cylip-notes.png",
      alt: "Cylip|Notes",
    },
    description:
      "Snap, Note, Remember - A lightweight, real-time note-taking application powered by AI, with support for labels, public notes and designed to run efficiently on Cloudflare.",
    link: "https://cylip-notes.cytro.com.ng",
    techStack:
      "Nuxt.js, Vue.js, Tailwind CSS, Drizzle, Zod, SQLite, Cloudflare",
  },
  {
    title: "Cy-Paid",
    image: {
      src: "/images/projects/cy-paid.png",
      alt: "Cy-Paid",
    },
    description:
      "Professional Invoicing, Simplified - Create, manage, and track invoices with ease. Built for freelancers and small businesses who want to focus on their work, not paperwork.",
    link: "https://cy-paid.cytro.com.ng",
    techStack: "Next.js, Tailwind CSS, React.js, Supabase, PostgreSQL",
  },
  {
    title: "Torrista",
    image: {
      src: "/images/projects/torrista.png",
      alt: "Torrista",
    },
    link: "https://torrista.com.ng",
    description:
      "A robust tour marketplace handling seamless booking, secure payment processing, and comprehensive user management. Includes tour discovery, reviews, and booking analytics.",
    techStack: "Node.js, Hono.js, Drizzle, Zod, PostgreSQL, Docker",
  },
  {
    title: "Spen Agro",
    image: {
      src: "/images/projects/spen-agro.png",
      alt: "Spen Agro",
    },
    description:
      "A dynamic landing page and admin dashboard, the platform allows the team to list products, manage a user waiting list, compose and send targeted emails to users, streamlining marketing and customer engagement from a unified interface.",
    link: "https://spenagro.com",
    techStack: "Laravel, Vue.js, Tailwind CSS, Inertia.js",
  },
];

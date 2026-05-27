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
    title: "Cy TTY",
    image: {
      src: "/images/projects/cy-tty.png",
      alt: "Cy TTY",
    },
    description:
      "A mobile SSH terminal for Android and iOS. Connect to remote servers, manage multiple live sessions, and work from your phone with a proper terminal experience. Features SSH key auth (RSA, Ed25519, ECDSA), VT100/xterm-256color emulation, local network host discovery, encrypted credential storage, and customizable themes.",
    link: "https://github.com/kyng-cytro/cy-tty",
    techStack:
      "Expo, React Native, TypeScript, React Native Skia, React Native Paper, Expo Router",
  },
  {
    title: "Super Win League (SWL)",
    image: {
      src: "/images/projects/swl.png",
      alt: "Super Win League (SWL)",
    },
    description:
      "Play Smart, Win Live. A real-time competitive trivia platform with live session orchestration, dynamic leaderboards, and daily competitions. Reached 1,000+ active users in its first week with ~2,000 daily gameplay sessions.",
    link: "https://swl.live",
    techStack:
      "TypeScript, Node.js, WebSockets, PostgreSQL, Docker",
  },
  {
    title: "Over Tune",
    image: {
      src: "/images/projects/over-tune.png",
      alt: "Over Tune",
    },
    description:
      "A Chrome extension that brings full control to YouTube Music. Customize keyboard shortcuts, route audio to any device, view a now-playing widget, and control playback remotely from another device via secure QR pairing.",
    link: "https://github.com/kyng-cytro/over-tune",
    techStack: "Vue.js, TypeScript, Tailwind CSS, Vite, Supabase, CRXJS",
  },
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
];

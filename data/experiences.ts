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
      "earlySTEMer sits right at the center of my professional journey. I've been with them for years, and it's been a place where I got to do a bit of everything, building real systems, making key decisions, and even teaching.",
      "As the sole developer on the team, I had the freedom and responsibility to shape our entire tech stack. Not every choice I made was perfect, but the impact was real. I built the Virtual Sessions Management System (VSMS) that finally got us off spreadsheets and helped cut down missed sessions in a big way. Then came the Lead Management System, which helped us stay on top of client conversations and grow the business. I later built a Student Portfolio platform so the kids could easily show off their work, and most recently, I launched a real-time chat system that lets students connect directly with live tutors when they need help.",
      "But that's just the engineering side. I've also spent a lot of time tutoring/teaching dozens of students how to code, from the basics of Python to building full websites. Watching them go from “I don't get it” to building their own projects has been one of the most rewarding parts of this whole experience.",
      "earlySTEMer gave me room to grow, fail, build, teach, and learn.",
    ],
  },
  {
    title: "CONTRACT: Backend Developer & System Architect",
    company: "Tourism Business Unit - Sterling Bank Limited",
    location: "Lagos, Nigeria",
    period: "AUG 2024",
    headline: "BREAKING: Developer Makes Tour Booking That Actually Works!",
    image: {
      src: "/images/experiences/torrista.png",
      alt: "Torrista",
    },
    achievements: [
      "Torrista was a doozy. Still is, honestly. Working with the team at Sterling gave me a whole new perspective on tight deadlines and fast turnarounds. I was brought in to rebuild their rough proof-of-concept Django app into a proper production-ready system that could scale and actually work.",
      "Luckily, I was already used to making technical decisions under pressure. I chose Node.js for the backend to make the codebase approachable for any developer joining the project. But the more controversial choice was going with Hono.js over Express. At the time, it raised eyebrows. I was betting on Hono becoming the kind of framework I knew it could be, and that bet absolutely paid off. Hono wasn't just faster and easier to work with, it could run anywhere. With Docker in the mix, deploying the app became ridiculously smooth no matter the environment.",
      "Beyond the backend, I also built an admin application and a lightweight CRM to help the internal team manage day-to-day operations and generate reports without needing to touch code. The platform continues to evolve. We recently added a vendor module, and working on it is still just as exciting as it was on day one.",
    ],
  },
  {
    title: "CONTRACT: Frontend Developer & Performance Specialist",
    company: "Blanche Aigle Communications",
    location: "Lagos, Nigeria",
    period: "JAN 2025",
    image: {
      src: "/images/experiences/blanche-aigle.png",
      alt: "Blanche Aigle Communications",
    },
    achievements: [
      "You're probably wondering why a full-stack developer has a mostly frontend project on their portfolio. You're not wrong to ask. The Blanche Aigle project earned its spot here because of one deceptively simple challenge: get all green Core Web Vitals scores and nail the SEO.",
      "Sounds easy, right? But I wanted to do it using a proper framework, not just handcrafted vanilla code. I went with Nuxt, yes, Nuxt, not Next. If you haven't looked into it yet, please do. Might just change your life.",
      "Nuxt gave me everything I needed to deliver. Its server-side rendering gave us excellent SEO support out of the box, and modules like @nuxt/image meant I could still build fancy sliders and dynamic layouts without sacrificing performance. The result was a site that looked sharp, loaded fast, and ranked well.",
      "This project was genuinely fun to work on. It reminded me how much of a difference good tooling and thoughtful decisions can make when it comes to user experience.",
    ],
  },
  {
    title: "CONTRACT: Systems Developer & Technical Consultant",
    company: "F.O. Lanraj Enterprises",
    location: "Lagos, Nigeria",
    period: "APR 2024-PRESENT",
    image: {
      src: "/images/experiences/fo-lanraj.png",
      alt: "F.O. Lanraj Enterprises",
    },
    achievements: [
      "Quick background: F.O. Lanraj Enterprises is, in my opinion, one of the best PET recycling firms in Lagos. It's run by a close friend and their family, and they were doing great except for one big gap. There was no digitalisation at all. Not just a missing online presence, but zero internal systems. Everything was done on paper or over the phone.",
      "I reached out, and soon after, I was contracted to help fix that. We started by building an internal tool to manage sales, purchases, expenses, and inventory. That opened the door to automation, so we could trigger alerts for low stock or flag pending actions without needing someone to track it manually.",
      "Once the internal system was stable, we turned our attention to the company's online presence. We launched a simple but solid website, and we're still working on getting the brand more visibility online.",
      "All in all, it's been an amazing experience. Helping a great team level up their operations from the ground up is exactly the kind of work I love doing.",
    ],
  },
];

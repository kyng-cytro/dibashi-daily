import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceItem } from "@/components/experience-item";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectItem } from "@/components/project-item";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
import Link from "next/link";

export default function Component() {
  return (
    <div className="min-h-screen font-serif">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6 md:py-8">
        <AboutSection />
        <section id="experience" className="mb-8 md:mb-12">
          <div className="bg-background border-2 border-foreground p-4 md:p-6">
            <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-foreground pb-2 mb-6 tracking-wide">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <ExperienceItem
                  key={index}
                  title={experience.title}
                  image={experience.image}
                  company={experience.company}
                  period={experience.period}
                  location={experience.location}
                  headline={experience.headline}
                  achievements={experience.achievements}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="mb-8 md:mb-12">
          <div className="bg-background border-2 border-foreground p-4 md:p-6">
            <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-foreground pb-2 mb-6 tracking-wide">
              FEATURED PROJECTS
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {projects.map((project, index) => (
                <ProjectItem
                  key={index}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  link={project.link}
                />
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link
                target="_blank"
                href="https://github.com/kyng-cytro"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                SEE MORE ON <GithubIcon size={16} />
              </Link>
            </div>
          </div>
        </section>
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

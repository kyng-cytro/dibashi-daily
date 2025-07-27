import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceItem } from "@/components/experience-item";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectItem } from "@/components/project-item";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { GithubIcon } from "lucide-react";
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

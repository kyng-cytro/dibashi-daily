import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type ProjectItemProps = Project & {
  className?: string;
};

export function ProjectItem({
  link,
  title,
  imageAlt,
  className,
  techStack,
  description,
}: ProjectItemProps) {
  return (
    <article className={cn("border border-foreground p-4", className)}>
      <div className="mb-3">
        <img
          src={`/placeholder.svg?height=150&width=300`}
          alt={imageAlt}
          className="w-full h-32 object-cover border boder-muted-foreground"
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
        <h3 className="text-lg font-bold">{title}</h3>
        {link && (
          <Link
            href={link}
            className="text-xs hover:underline flex items-center gap-1 self-start"
          >
            VIEW <ExternalLink size={12} />
          </Link>
        )}
      </div>
      <p className="text-sm mb-3 leading-relaxed">{description}</p>
      <div className="text-xs">
        <span className="font-bold">TECH STACK:</span> {techStack}
      </div>
    </article>
  );
}

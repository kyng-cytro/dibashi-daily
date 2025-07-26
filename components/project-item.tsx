import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface ProjectItemProps {
  title: string
  imageAlt: string
  description: string
  techStack: string
  link?: string
}

export function ProjectItem({ title, imageAlt, description, techStack, link }: ProjectItemProps) {
  return (
    <article className="border border-black p-4">
      <div className="mb-3">
        <img
          src={`/placeholder.svg?height=150&width=300`}
          alt={imageAlt}
          className="w-full h-32 object-cover border border-gray-300"
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
        <h3 className="text-lg font-bold">{title}</h3>
        {link && (
          <Link href={link} className="text-xs hover:underline flex items-center gap-1 self-start">
            VIEW <ExternalLink size={12} />
          </Link>
        )}
      </div>
      <p className="text-sm mb-3 leading-relaxed">{description}</p>
      <div className="text-xs">
        <span className="font-bold">TECH STACK:</span> {techStack}
      </div>
    </article>
  )
}

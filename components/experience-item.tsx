interface ExperienceItemProps {
  title: string
  company: string
  location: string
  period: string
  imageAlt: string
  headline?: string
  achievements: string[]
  isLast?: boolean
}

export function ExperienceItem({
  title,
  company,
  location,
  period,
  imageAlt,
  headline,
  achievements,
  isLast = false,
}: ExperienceItemProps) {
  return (
    <article className={`${!isLast ? "border-b border-gray-300 pb-6" : ""}`}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
        <div>
          <h3 className="text-lg md:text-xl font-bold">{title}</h3>
          <p className="font-semibold text-sm md:text-base">
            {company} • {location}
          </p>
        </div>
        <span className="text-xs md:text-sm font-bold bg-black text-white px-2 py-1 self-start">{period}</span>
      </div>
      <div className="mb-4">
        <img
          src={`/placeholder.svg?height=200&width=400`}
          alt={imageAlt}
          className="w-full h-32 md:h-48 object-cover border border-black"
        />
      </div>
      <div className="space-y-2 text-sm leading-relaxed">
        {headline && (
          <p>
            <span className="font-bold">{headline}</span>
          </p>
        )}
        {achievements.map((achievement, index) => (
          <p key={index}>• {achievement}</p>
        ))}
      </div>
    </article>
  )
}

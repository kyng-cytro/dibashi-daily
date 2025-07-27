import { Experience } from "@/data/experiences";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ExperienceItemProps = Experience & {
  className?: string;
  isLast?: boolean;
};

export function ExperienceItem({
  image,
  title,
  company,
  period,
  headline,
  location,
  className,
  achievements,
  isLast = false,
}: ExperienceItemProps) {
  return (
    <article
      className={cn(
        isLast ? "border-b border-muted-foreground pb-6" : "",
        className,
      )}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
        <div>
          <h3 className="text-lg md:text-xl font-bold">{title}</h3>
          <p className="font-semibold text-sm md:text-base">
            {company} • {location}
          </p>
        </div>
        <span className="text-xs md:text-sm font-bold bg-foreground text-background px-2 py-1 self-start">
          {period}
        </span>
      </div>
      <div className="mb-4">
        <Image
          width={620}
          height={200}
          src={image.src}
          alt={image.alt}
          className="w-full h-32 md:h-48 object-cover border border-foreground"
        />
      </div>
      <div className="space-y-2 text-sm leading-relaxed">
        {headline && (
          <p>
            <span className="font-bold">{headline}</span>
          </p>
        )}
        {achievements.map((achievement, index) => (
          <p key={index}>{achievement}</p>
        ))}
      </div>
    </article>
  );
}

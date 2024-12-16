"use client";

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  isActive: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
}

export default function ExperienceCard({title, company, duration, description, isActive, onHover, onHoverEnd}: ExperienceCardProps) {

  return (
    <div>
      <div
        className={`grid grid-cols-10 gap-4 transition-opacity duration-300 p-6 border border-transparent hover:border-secondary rounded-lg ${
          isActive ? "opacity-100" : "opacity-35"
        }`}
        onMouseEnter={onHover}
        onMouseLeave={onHoverEnd}
      >
        <div className="col-span-3">
          {duration}
        </div>
        <div className="col-span-7">
          <h3 className="text-xl font-bold">{title}</h3>
          <h3 className="">{company}</h3>
          <p className="text-secondary-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
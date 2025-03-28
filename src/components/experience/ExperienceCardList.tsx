"use client";

import { useState } from "react";
import ExperienceCard from "@/components/experience/ExperienceCard";

const cardData = [
  {
    id: 1,
    title: "Admissions Officer",
    company: "Singapore Management University",
    duration: "Mar 2022 - Aug 2022",
    description: "Managed student admission processes and coordinated interviews and tests for prospective students. Conducted data analysis for the social media accounts, providing feedback for improved cost-effectiveness of promotional posts.",
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company: "Guidesify",
    duration: "Jun 2024 - Present",
    description: "Designed and developed websites using WordPress on a freelance basis.",
  },
];

export default function ExperienceCardList() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 space-y-8">
      {cardData.map((data, index) => (
        <ExperienceCard
          key={index}
          title={data.title}
          company={data.company}
          duration={data.duration}
          description={data.description}
          isActive={hoveredCard === null || hoveredCard === index}
          onHover={() => { setHoveredCard(index); }}
          onHoverEnd={() => { setHoveredCard(null); }}
        />
      ))}
    </div>
  );
}

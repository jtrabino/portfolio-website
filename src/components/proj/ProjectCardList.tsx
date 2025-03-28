"use client";

import { useState } from "react";
import ProjectCard from "@/components/proj/ProjectCard";

const cardData = [
  {
    id: 1,
    title: "Visual Analytics for Business Intelligence",
    description: "An interactive web application for visualizing and analyzing relationships between TikTok and Spotify songs. Uses machine learning models to predict a song's popularity using song traits like liveness, danceability and acousticness.",
    link: "https://tiktokspotify-analysis.vercel.app/",
  },
  {
    id: 2,
    title: "UBS Transactions",
    description: "A web application built for a school project with sponsorship from UBS. The application is a CRM system for UBS agents to manage transactions and client information.",
    link: "https://github.com/cs301-itsa/project-2024-25t1-g2-t1",
  },
];

export default function ExperienceCardList() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 space-y-8">
      {cardData.map((data, index) => (
        <ProjectCard
          key={index}
          title={data.title}
          description={data.description}
          link={data.link}
          isActive={hoveredCard === null || hoveredCard === index}
          isHovered={hoveredCard === index}
          onHover={() => { setHoveredCard(index); }}
          onHoverEnd={() => { setHoveredCard(null); }}
        />
      ))}
    </div>
  );
}

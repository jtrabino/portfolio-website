"use client";

import { useState } from "react";
import ExperienceCard from "@/components/experience/ExperienceCard";

const cardData = [
  {
    id: 1,
    title: "Admissions Officer",
    company: "Singapore Management University",
    duration: "Mar 2022 - Aug 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies ac massa vel lobortis. In et dapibus lectus, et posuere nunc. Quisque imperdiet maximus eros at rutrum. Donec ex orci, dignissim in ante id, volutpat rutrum lorem. In in consequat eros. Aliquam eu cursus velit. Proin consequat dolor felis, sit amet eleifend lorem hendrerit vel. Donec ultricies tincidunt rhoncus. Mauris pretium arcu turpis, vitae fringilla tortor consequat vitae. Maecenas lorem neque, mattis vitae elit non, ornare gravida purus. Mauris semper dignissim lorem vitae pharetra.",
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company: "Guidesify",
    duration: "Jun 2024 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies ac massa vel lobortis. In et dapibus lectus, et posuere nunc. Quisque imperdiet maximus eros at rutrum. Donec ex orci, dignissim in ante id, volutpat rutrum lorem. In in consequat eros. Aliquam eu cursus velit. Proin consequat dolor felis, sit amet eleifend lorem hendrerit vel. Donec ultricies tincidunt rhoncus. Mauris pretium arcu turpis, vitae fringilla tortor consequat vitae. Maecenas lorem neque, mattis vitae elit non, ornare gravida purus. Mauris semper dignissim lorem vitae pharetra.",
  },
  {
    id: 3,
    title: "Job 3",
    company: "Company XXX",
    duration: "Then - Now",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies ac massa vel lobortis. In et dapibus lectus, et posuere nunc. Quisque imperdiet maximus eros at rutrum. Donec ex orci, dignissim in ante id, volutpat rutrum lorem. In in consequat eros. Aliquam eu cursus velit. Proin consequat dolor felis, sit amet eleifend lorem hendrerit vel. Donec ultricies tincidunt rhoncus. Mauris pretium arcu turpis, vitae fringilla tortor consequat vitae. Maecenas lorem neque, mattis vitae elit non, ornare gravida purus. Mauris semper dignissim lorem vitae pharetra.",
  }
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

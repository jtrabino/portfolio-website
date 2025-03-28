"use client";

import { useRef, useCallback } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";

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

  const formattedDescription = description.split("\n").map((line, index) => (
    <p key={index} className="text-secondary-foreground py-1">{line}</p>
  ));

  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!overlayRef.current) {
      return;
    }

    const { width, height } = overlayRef.current?.getBoundingClientRect() ?? {};
    const xOffset = x - width / 2;
    const yOffset = y - height / 2;

    overlayRef.current?.style.setProperty("--x", `${xOffset}px`);
    overlayRef.current?.style.setProperty("--y", `${yOffset}px`);
  }, []);

  useMousePosition(containerRef as React.RefObject<HTMLElement>, update);

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden grid grid-cols-10 transition-opacity duration-300 lg:p-6 md:p-4 border border-transparent hover:border-secondary rounded-lg ${
        isActive ? "opacity-100" : "opacity-35"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
    >
      <div
        ref = {overlayRef}
        className="-z-1 absolute h-[532px] w-[532px] rounded-full bg-muted-foreground opacity-0 bg-blend-soft-light blur-3xl transition-opacity group-hover:opacity-15 "
        style={{
          transform: "translate(var(--x), var(--y))"
        }}
      />
      <div className="col-span-3 mr-6">
        {duration}
      </div>
      <div className="col-span-7">
        <h3 className="text-lg font-bold">{title}</h3>
        <h3 className="">{company}</h3>
        <div className="mt-2">
          {formattedDescription}
        </div>
      </div>
    </div>
  )
}
"use client";

import { useRef, useCallback } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import Link from "next/link";
import { ExternalLinkIcon } from "../ui/external-link";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string | null;
  isActive: boolean;
  isHovered: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
}

export default function ProjectCard({title, description, link, isActive, isHovered, onHover, onHoverEnd}: ProjectCardProps) {

  const formattedDescription = description.split("\n").map((line, index) => (
    <p key={index} className="text-secondary-foreground py-1">{line}</p>
  ));

  const containerRef = useRef<HTMLDivElement | HTMLAnchorElement>(null);
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
    <>
      {link ? (
        <Link
          href={link}
          rel="noreferrer noopener"
          target="_blank"
          ref={containerRef as React.RefObject<HTMLAnchorElement>}
          className={`group relative overflow-hidden grid grid-cols-10 transition-opacity duration-300 lg:p-6 p-4 border border-transparent hover:border-secondary rounded-lg ${
            isActive ? "opacity-100" : "opacity-35"
          }`}
          onMouseEnter={onHover}
          onMouseLeave={onHoverEnd}
        >
          <div
            ref={overlayRef}
            className="-z-1 absolute h-[532px] w-[532px] rounded-full bg-muted-foreground opacity-0 bg-blend-soft-light blur-3xl transition-opacity group-hover:opacity-15 hidden md:block"
            style={{
              transform: "translate(var(--x), var(--y))"
            }}
          />
          <div className="col-span-10">
            <span>
              <span className="md:text-lg text-base font-bold mr-1">
                {title}
              </span>
              <ExternalLinkIcon isHovered={isHovered} />
            </span>
            <div className="md:text-base text-sm mt-2">
              {formattedDescription}
            </div>
          </div>
        </Link>
      ) : (
        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className={`group relative overflow-hidden grid grid-cols-10 transition-opacity duration-300 lg:p-6 p-4 border border-transparent hover:border-secondary rounded-lg ${
            isActive ? "opacity-100" : "opacity-35"
          }`}
          onMouseEnter={onHover}
          onMouseLeave={onHoverEnd}
        >
          <div
            ref={overlayRef}
            className="-z-1 absolute h-[532px] w-[532px] rounded-full bg-muted-foreground opacity-0 bg-blend-soft-light blur-3xl transition-opacity group-hover:opacity-15 hidden md:block"
            style={{
              transform: "translate(var(--x), var(--y))"
            }}
          />
          <div className="col-span-10">
            <span>
              <span className="md:text-lg text-base font-bold mr-1">
                {title}
              </span>
            </span>
            <div className="md:text-base text-sm mt-2">
              {formattedDescription}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
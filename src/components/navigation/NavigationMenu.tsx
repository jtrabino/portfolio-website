"use client";

import React, { useState, useEffect } from "react";
import NavigationItem from "@/components/navigation/NavigationItem";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function NavigationMenu() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const ioConfiguration = {
      rootMargin: '-50% 0% -50% 0%',
      threshold: 0
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target);
            const id = entry.target.getAttribute("id");
            if (id) {
              setSelected(id);
              window.history.pushState(null, "", `#${id}`);
            }
          }
        });
      },
      ioConfiguration
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (id: string) => {
    setSelected(id);
    window.history.pushState(null, "", `#${id}`);

    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="hidden lg:block lg:w-fit">
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              className="w-fit"
              href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <NavigationItem
                label={item.label}
                selected={selected === item.id && hasMounted}
                onClick={() => handleClick(item.id)}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

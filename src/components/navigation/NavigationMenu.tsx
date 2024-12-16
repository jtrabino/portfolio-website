"use client";

import React, { useState, useEffect } from "react";
import NavigationItem from "@/components/navigation/NavigationItem";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
]

export default function NavigationMenu() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const currentHash = window.location.hash.replace('#', '');
    if (currentHash) {
      const foundItem = NAV_ITEMS.find(item => item.id === currentHash);
      if (foundItem) {
        setSelected(foundItem.id);
      } else {
        setSelected(NAV_ITEMS[0].id);
      }
    } else {
      setSelected(NAV_ITEMS[0].id);
    }
    setHasMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              setSelected(id);
              window.history.pushState(null, '', `#${id}`);
            }
          }
        });
      },
      { threshold: 0.60 } // Adjust this threshold as needed
    );

    NAV_ITEMS.forEach(item => {
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
    window.history.pushState(null, '', `#${id}`);

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
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a className="w-fit" href={`#${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
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
  )
}
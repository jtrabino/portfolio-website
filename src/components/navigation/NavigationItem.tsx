"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

interface NavigationItemProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function NavigationItem({label, selected, onClick}: NavigationItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <div
        className="relative group flex items-center py-2 w-fit"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className={`absolute left-0 h-[2px] bg-foreground group-hover:bg-muted-foreground ${selected ? "bg-muted-foreground" : ""}`}
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: selected || isHovered ? 24 : 0,
            opacity: selected || isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.p
          className={`text-foreground font-semibold group-hover:text-muted-foreground ${selected ? "text-muted-foreground" : ""}`}
          initial={{ x: 0 }}
          animate={{ x: selected || isHovered ? 32 : 0 }}
          transition={{ duration: 0.3 }}
        >
            {label}
        </motion.p>
      </div>
  )
}
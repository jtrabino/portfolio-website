"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ExternalLinkIconProps {
  isHovered: boolean;
}

export const ExternalLinkIcon = ({ isHovered }: ExternalLinkIconProps) => {
  return (
    <motion.span
      initial={{ x: 0, y: 0 }}
      animate={{
        x: isHovered ? 4 : 0,
        y: isHovered ? -4 : 0,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-block"
    >
      <ArrowUpRight className="w-4 h-4" />
    </motion.span>
  );
};
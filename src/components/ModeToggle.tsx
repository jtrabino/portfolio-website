"use client"

import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  
  // Check if the theme is loaded before rendering
  const isMounted = typeof window !== 'undefined';
  const [mountedTheme, setMountedTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (isMounted) {
      setMountedTheme(theme);
    }
  }, [isMounted, theme]);

  return (
    <div className="hidden lg:flex lg:items-center">
      {mountedTheme && (
        <button className="text-foreground hover:text-muted-foreground transition-colors duration-300" onClick={() => setTheme(mountedTheme === 'dark' ? 'light' : 'dark')}>
          <motion.div
            key={mountedTheme}
            initial={{ x: mountedTheme === 'light' ? -10 : 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {mountedTheme === 'dark' ? <Moon size={19.2} /> : <Sun size={19.2} />}
          </motion.div>
        </button>
      )}
    </div>
  )
}
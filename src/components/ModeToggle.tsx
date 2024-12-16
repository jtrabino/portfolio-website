"use client"

import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

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
    <div className="flex items-center">
      {mountedTheme && (
        <button className="text-foreground" onClick={() => setTheme(mountedTheme === 'dark' ? 'light' : 'dark')}>
          {mountedTheme === 'dark' ? <Moon size={19.2} /> : <Sun size={19.2} />}
        </button>
      )}
    </div>
  )
}
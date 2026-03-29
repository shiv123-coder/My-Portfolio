import React from 'react';
import { Moon, Sun, MonitorPlay, MousePointerClick, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useAnimationToggle } from '../hooks/useAnimationToggle';
import { useCursor } from '../hooks/useCursor';
import { motion } from 'framer-motion';

export function Toggles({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const { isAnimationEnabled, toggleAnimation } = useAnimationToggle();
  const { isInteractiveEnabled, toggleInteractive } = useCursor();

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={toggleInteractive}
        title={`Toggle Interactive Cursors (${isInteractiveEnabled ? 'ON' : 'OFF'})`}
        className="p-2 rounded-full hover:bg-muted transition-colors relative"
      >
        <MousePointerClick size={18} className={isInteractiveEnabled ? 'text-primary' : 'text-muted-foreground opacity-50'} />
      </button>

      <button
        onClick={toggleAnimation}
        title={`Toggle Animations (${isAnimationEnabled ? 'ON' : 'OFF'})`}
        className="p-2 rounded-full hover:bg-muted transition-colors relative"
      >
        <MonitorPlay size={18} className={isAnimationEnabled ? 'text-primary' : 'text-muted-foreground opacity-50'} />
      </button>
      
      <button
        onClick={toggleTheme}
        title={`Toggle Theme (${theme})`}
        className="p-2 rounded-full hover:bg-muted transition-colors relative"
      >
        {theme === 'dark' ? <Moon size={18} className="text-primary" /> : <Sun size={18} className="text-primary" />}
      </button>
    </div>
  );
}

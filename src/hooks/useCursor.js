import { useState, useEffect } from 'react';

export function useCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isInteractiveEnabled, setIsInteractiveEnabled] = useState(() => {
    const stored = localStorage.getItem('interactiveEnabled');
    return stored ? JSON.parse(stored) : true;
  });

  useEffect(() => {
    localStorage.setItem('interactiveEnabled', JSON.stringify(isInteractiveEnabled));
    if (!isInteractiveEnabled) return;

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isInteractiveEnabled]);

  const toggleInteractive = () => setIsInteractiveEnabled(prev => !prev);

  return { position, isHovering, isInteractiveEnabled, toggleInteractive };
}

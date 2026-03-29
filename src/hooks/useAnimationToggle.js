import { useState, useEffect } from 'react';

export function useAnimationToggle() {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(() => {
    const stored = localStorage.getItem('animationEnabled');
    return stored ? JSON.parse(stored) : true;
  });

  useEffect(() => {
    localStorage.setItem('animationEnabled', JSON.stringify(isAnimationEnabled));
  }, [isAnimationEnabled]);

  const toggleAnimation = () => setIsAnimationEnabled(prev => !prev);

  return { isAnimationEnabled, toggleAnimation };
}

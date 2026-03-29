import React from 'react';
import { useCursor } from '../hooks/useCursor';
import { motion } from 'framer-motion';

export function AnimatedCursor() {
  const { position, isHovering, isInteractiveEnabled } = useCursor();

  if (!isInteractiveEnabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 border border-primary mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.1 }}
      />
    </>
  );
}

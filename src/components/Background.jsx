import React from 'react';
import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary/20 rounded-full blur-[100px] mix-blend-screen animate-blob" />
      <div className="absolute top-1/4 right-1/4 w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />
    </div>
  );
}

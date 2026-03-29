import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../hooks/useCursor';

export function Hero() {
  const { position, isInteractiveEnabled } = useCursor();
  
  // Calculate eye rotation based on cursor
  const [eyeProps, setEyeProps] = useState({ rx: 0, ry: 0 });

  useEffect(() => {
    if (!isInteractiveEnabled) return;
    
    // Very simple pupil following math
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20; // max 10px move
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setEyeProps({ rx: x, ry: y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isInteractiveEnabled]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    }
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" }}
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Area */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={childVariants} className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Welcome to my portfolio
          </motion.h2>

          <motion.h1 variants={childVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 mt-2 leading-tight">
            Hi, I'm <br className="hidden md:block"/>
            <span className="text-gradient">Shivshankar Mali</span>
          </motion.h1>

          <motion.p variants={childVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-10">
            Full Stack Developer & AI Engineer creating premium, high-performance web applications with modern technologies.
          </motion.p>

          <motion.div variants={childVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 hover:glow-lg hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300">
              View My Work
            </a>
            <a href="https://drive.google.com/file/d/1O9C42aodAA_c3rI1a-GVSH4i4llSk7we/view?usp=sharing" target="_blank" rel="noreferrer" className="px-8 py-4 bg-transparent border border-border text-foreground font-semibold rounded-full hover:bg-accent/50 transition-colors">
              View Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Visual / Eyes Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 flex justify-center items-center h-[300px] md:h-auto"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            
            {/* The Robot / Eyes Face */}
            <div className="absolute inset-0 flex items-center justify-center gap-6 z-10">
              <Eye rx={eyeProps.rx} ry={eyeProps.ry} />
              <Eye rx={eyeProps.rx} ry={eyeProps.ry} />
            </div>
            
            {/* Floating symbols managed outside if global */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Eye({ rx, ry }) {
  return (
    <div className="w-16 h-16 md:w-20 md:h-20 bg-foreground/10 rounded-full flex justify-center items-center overflow-hidden border border-border/50 backdrop-blur-sm shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]">
      <motion.div 
        animate={{ x: rx, y: ry }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
        className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full relative shadow-[0_0_15px_var(--accent-glow)] flex justify-center items-center"
      >
        <div className="w-2 h-2 bg-white rounded-full absolute top-[15%] right-[25%]" />
      </motion.div>
    </div>
  );
}

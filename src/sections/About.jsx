import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 }}
  };

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript", "TypeScript"] },
    { category: "Backend & DB", items: ["Node.js", "Express", "Firebase", "MongoDB", "PostgreSQL", "REST APIs"] },
    { category: "Tools & Others", items: ["Git", "GitHub", "Vite", "Docker", "Figma", "Vercel"] },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-lg text-muted-foreground leading-relaxed space-y-6"
          >
            <p>
              I am a passionate Full Stack Developer & AI Engineer dedicated to building robust, scalable, and visually compelling web applications. I bridge the gap between complex backend architecture and sleek, user-centric frontend interfaces.
            </p>
            <p>
              My philosophy is simple: write clean code, build intuitive interfaces, and continuously optimize for performance. I believe that exceptional design paired with solid engineering is the key to creating products that truly resonate with users.
            </p>
          </motion.div>

          {/* Skills Area */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6"
          >
            {skills.map((skillGroup, index) => (
              <motion.div key={index} variants={itemVariants} className="glass p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-muted/50 text-sm rounded-full border border-border/50">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

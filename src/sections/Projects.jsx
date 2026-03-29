import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "MuktiTech – Digital Identity System",
      description: "A comprehensive digital identity verification platform ensuring secure and immutable record keeping with modern encryption and streamlined user onboarding.",
      tags: ["React", "Firebase", "Tailwind CSS", "Node.js"],
      github: "https://github.com/shiv123-coder/MuktiTech",
      demo: "#",
    },
    {
      title: "LearnSphere – AI Course Platform",
      description: "An AI-powered learning management system offering personalized course recommendations, progress tracking, and interactive study modules.",
      tags: ["Next.js", "OpenAI API", "PostgreSQL", "Prisma"],
      github: "https://github.com/shiv123-coder",
      demo: "#",
    },
    {
      title: "Secure Banking System",
      description: "A full-featured banking application simulating transactions, account management, and advanced security protocols mimicking real-world financial architectures.",
      tags: ["React", "Express", "MongoDB", "Redux"],
      github: "https://github.com/shiv123-coder",
      demo: "#",
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-8 flex flex-col h-full group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] border border-border hover:border-primary/30"
            >
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                <div className="w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
              </div>
              
              <div className="flex justify-between items-start mb-6 z-10">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold text-xl">
                  {project.title.charAt(0)}
                </div>
                <div className="flex space-x-3 text-muted-foreground group-hover:text-foreground transition-colors">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                    <Github size={22} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 z-10 group-hover:text-primary transition-colors">{project.title.split(' – ')[0]}</h3>
              <p className="text-muted-foreground mb-8 flex-grow z-10 leading-relaxed text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 z-10 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-2 py-1 bg-background/50 rounded-md border border-border/50 text-foreground/70">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

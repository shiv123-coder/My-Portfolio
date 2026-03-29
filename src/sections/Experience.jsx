import React from 'react';
import { motion } from 'framer-motion';

export function Experience() {
  const experiences = [
    {
      title: "Java & DSA Intern",
      company: "Talent Battle Pvt. Ltd.",
      date: "1st July 2025 - 30th July 2025",
      description: "Completed an off-line internship focused on Java and Data Structures & Algorithms, strengthening problem-solving, core programming, and implementation fundamentals.",
      credential: "Certificate of Achievement",
    },
    {
      title: "Web Development Intern",
      company: "Oasis Infobyte",
      date: "2024",
      description: "Completed comprehensive web development tasks focusing on modern frontend frameworks, responsive UI design, and scalable application logic.",
      credential: "Certificate of Completion",
    },
    {
      title: "UI/UX & Frontend Developer",
      company: "Freelance",
      date: "2023 - Present",
      description: "Designed and implemented modern, performant interfaces for various clients, optimizing user experience and component reusability.",
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience & Journey</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_var(--accent-glow)]"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-border group-hover:border-primary/50 transition-colors shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <time className="font-mono text-sm text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">{item.date}</time>
                </div>
                <h4 className="font-medium text-foreground/80 mb-4">{item.company}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                {item.credential && (
                  <div className="inline-flex items-center space-x-2 text-xs font-semibold px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20">
                    <span>{item.credential}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

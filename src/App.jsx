import React from 'react';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';
import { AnimatedCursor } from './components/AnimatedCursor';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen">
      <AnimatedCursor />
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

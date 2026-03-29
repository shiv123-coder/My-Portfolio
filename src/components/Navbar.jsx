import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Toggles } from './Toggles';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 group outline-none">
          <img 
            src="/S-PNG.png" 
            alt="Shiv Logo" 
            className="w-10 h-10 object-contain group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all duration-300" 
          />
          <span className="font-bold text-xl tracking-tight">Shivshankar Mali</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-foreground/80 hover:text-primary transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-6 w-px bg-border mx-2" />
          <Toggles />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <Toggles className="mr-2" />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2 focus:outline-none"
            title="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border absolute w-full top-full left-0 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4 font-medium text-lg">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

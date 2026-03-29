import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      const { collection, addDoc } = await import('firebase/firestore');
      const { db } = await import('../config/firebase');
      
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        createdAt: new Date()
      });
      setFormStatus('sent');
      // Reset form on success after brief delay
      setTimeout(() => setFormStatus('idle'), 5000);
      e.target.reset();
    } catch (error) {
      console.error("Error sending message: ", error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Side Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col space-y-8 justify-center"
          >
            <div className="glass p-8 rounded-2xl flex flex-col gap-6 items-start">
              <h3 className="text-2xl font-semibold mb-2">Get in touch directly</h3>
              <a href="mailto:shivashankrmali7@gmail.com" className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail />
                </div>
                <span className="text-lg">shivashankrmali7@gmail.com</span>
              </a>
              <a href="https://github.com/shiv123-coder" target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github />
                </div>
                <span className="text-lg">github.com/shiv123-coder</span>
              </a>
              <a href="https://www.linkedin.com/in/shivshankar-mali-b46198314/" target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-muted-foreground hover:text-focus transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform text-[#0077b5]">
                  <Linkedin />
                </div>
                <span className="text-lg">linkedin.com/in/shivshankar-mali</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6 border border-border">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" id="name" required className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" id="email" required className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Enter your email" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea id="message" required rows="4" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="Write your message here..." />
                </div>
              </div>
              <button 
                type="submit" 
                disabled={formStatus === 'sending' || formStatus === 'sent'}
                className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl flex items-center justify-center space-x-2 hover:bg-primary/90 transition-all hover:shadow-[0_0_15px_var(--accent-glow)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'idle' && <><Send size={20} /> <span>Send Message</span></>}
                {formStatus === 'sending' && <span>Sending...</span>}
                {formStatus === 'sent' && <span>Message Sent!</span>}
                {formStatus === 'error' && <span>Error Sending! Try Again.</span>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

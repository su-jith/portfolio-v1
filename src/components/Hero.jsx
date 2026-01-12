import React from 'react';
import { motion } from 'framer-motion'; // Ensure framer-motion is imported
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import profilePic from '../assets/profile-pic.png';

// Reusable ScrollReveal component
const ScrollReveal = ({ children, delay = 0, x = 0, y = 30 }) => (
  <motion.div
    initial={{ opacity: 0, x: x, y: y, scale: 0.95 }}
    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.8, 
      delay: delay, 
      ease: [0.22, 1, 0.36, 1] 
    }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  return (
    <section 
      id="home" 
      className="w-full min-h-screen flex items-center justify-center bg-main-bg transition-colors duration-300 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Text Content */}
        <div className="w-full flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-7">
          
          <ScrollReveal delay={0.1} x={-50} y={0}>
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm">
              Nice to meet You!
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} x={-50} y={0}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-main-text">
              Hi, I'm <span className="text-blue-600">Sujith</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3} x={-50} y={0}>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Full-Stack Developer with a passion for bringing ideas to life. I spend most of my time crafting clean, responsive sites using <span className="text-main-text font-medium">React and Tailwind</span>, powered by Node.js on the backend.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={0.4} y={20}>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20"
              >
                View Projects <ArrowRight size={20} />
              </a>
              
              <div className="flex items-center gap-4">
                <a href="https://github.com/su-jith" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-700 transition-all transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/connect-sujith-s/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-700 transition-all transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Side: Image/Profile */}

<div className="flex-1 relative group">
            <ScrollReveal delay={0.3} x={50} y={0}>
              <div className="relative">
                {/* The Image Container */}
                <div className="relative z-10 w-full max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
                  <img 
                    src={profilePic} 
                    alt="About Me" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Decorative Background Frames */}
                <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-blue-600 rounded-tl-3xl -z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-blue-600 rounded-br-3xl -z-0"></div>
                
                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-blue-600/20 blur-3xl -z-10 rounded-full group-hover:bg-blue-600/30 transition-colors"></div>
              </div>
            </ScrollReveal>
          </div>
        

      </div>
    </section>
  );
};

export default Hero;
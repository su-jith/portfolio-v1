import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import profilePic from '../assets/profile-pic.png';

// Consistent ScrollReveal Wrapper
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

const About = () => {
  return (
    <section 
      id="about" 
      className="w-full min-h-screen flex items-center bg-main-bg transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Text Content */}
          <div className="flex-1 space-y-8">
            <ScrollReveal x={-50} y={0}>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-main-text">
                  About <span className="text-blue-600">Me</span>
                </h2>
                <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} x={-50} y={0}>
              <div className="space-y-6 text-lg md:text-xl text-main-text/80 leading-relaxed">
                <p>
                  I am a passionate developer with a background in designing and building 
                  scalable web applications. I love solving complex problems and turning 
                  them into simple, beautiful, and intuitive designs.
                </p>
                <p>
                  With a focus on modern technologies like <span className="text-blue-600 font-medium">JavaScript, React, Tailwind CSS</span>, and the <span className="text-blue-600 font-medium">MERN stack</span>, 
                  I strive to create digital experiences that are both functional and 
                  visually striking.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new design trends or 
                  fine-tuning my workflow to deliver the best possible results.
                </p>
              </div>
            </ScrollReveal>

            {/* Buttons */}
            <ScrollReveal delay={0.4} y={20}>
              <div className="flex flex-wrap gap-4 pt-6">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
                >
                  Get in touch <Mail size={20} />
                </a>

                <a 
                  href="/path-to-your-resume.pdf" // Replace with actual link
                  target="_blank"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all transform hover:-translate-y-1"
                >
                  Resume <Download size={20} />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 flex justify-center items-center">
          <ScrollReveal delay={0.5} x={50} y={0}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Background Decorative Circle */}
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 dark:opacity-10 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl border-4 border-blue-600 overflow-hidden hover:rotate-2 transition-transform duration-500 shadow-2xl">
                <img 
                  src={profilePic}
                  alt="Sujith Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
          
        </div>

      </div>
    </section>
  );
};

export default About;




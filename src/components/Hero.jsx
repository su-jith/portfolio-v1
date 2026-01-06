import React from 'react';
import { cn } from '../lib/utils';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import profilePic from '../assets/profile-pic.png';


const Hero = () => {
  return (
    <section 
      id="home" 
      className="w-full min-h-screen flex items-centerflex items-center justify-items-center bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Text Content */}
        <div className="w-full flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-7">
          <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest">
            Nice to meet You!
          </h2>
         <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white">
            Hi, I'm <span className="text-blue-600">Sujith </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
           Full-Stack Developer with a passion for bringing ideas to life. I spend most of my time crafting clean, responsive sites using React and Tailwind, powered by Node.js on the backend."</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105">
              View Projects <ArrowRight size={20} />
            </button>
            
            <div className="flex items-center gap-4">
              <a href="#" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors transform hover:scale-105">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors transform hover:scale-105">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Image/Profile */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Background Decorative Circle */}
            <div className="absolute inset-0 bg-yellow-600 rounded-full blur-2xl opacity-20 animate-ping"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-4xl border-2 border-blue-600 overflow-hidden hover:rotate-3 transition-transform duration-400 ">
              <img 
                src={profilePic}
                className="w-full h-full object-cover rotate-y-6 "
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
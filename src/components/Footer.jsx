import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand/Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Su<span className="text-blue-600">jith</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              © {currentYear} All rights reserved. Built with React & Tailwind.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a href="#home" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 mr-4 border-r border-slate-200 dark:border-slate-800 pr-6">
              <a href="https://github.com/su-jith" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/connect-sujith-s/" className="text-slate-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sujiths.bca2020@gmail.com" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
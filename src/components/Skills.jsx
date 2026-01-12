import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Consistent ScrollReveal Wrapper
const ScrollReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      duration: 0.5,
      delay: delay,
      ease: [0.22, 1, 0.36, 1]
    }}
  >
    {children}
  </motion.div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState('tech');

  const techStack = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expressjs/expressjs-original.svg' },
  ];

  const tools = [
    { name: 'Github', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'Vercel', logo: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
  ];

  const displaySkills = activeTab === 'tech' ? techStack : tools;

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto text-center bg-main-bg transition-colors duration-300">

      {/* Header with Reveal */}
      <ScrollReveal>
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-main-text mb-4">My Digital <span className="text-blue-600">Toolbox</span></h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I’m a big believer in using the right tool for the job. Here are the technologies I live in every day.
          </p>
        </div>
      </ScrollReveal>

      {/* Toggle Buttons with Reveal */}
      <ScrollReveal delay={0.2}>
        <div className="flex justify-center mb-16">
          <div className="bg-slate-400 dark:bg-slate-00 p-1.5 rounded-full flex items-center shadow-inner transition-colors">
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'tech' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-700 hover:text-gray-800'
                }`}
            >
              Tech Stack
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'tools' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Tools
            </button>
          </div>
        </div>

      </ScrollReveal>

      {/* Animated Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <AnimatePresence mode="wait">
          {displaySkills.map((skill, index) => (
            <motion.div
              key={skill.name} // Keeps AnimatePresence working for tab switches
              layout // Smoothly repositions icons when tab changes
            >
              <ScrollReveal delay={index * 0.05}>
                <div className="flex flex-col items-center justify-center p-8 
                  bg-main-bg border border-slate-200 dark:border-slate-800 
                  rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-500/50 
                  transition-all duration-300 group relative h-full">

                  <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity rounded-3xl -z-10" />

                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 mb-4 transition-transform duration-500 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  />
                  <span className="text-main-text font-bold text-sm tracking-tight">{skill.name}</span>
                </div>
              </ScrollReveal>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <ScrollReveal delay={0.5}>
        <p className="mt-16 text-sm text-slate-400 dark:text-slate-500 italic">
          "What's open on my second monitor"
        </p>
      </ScrollReveal>
    </section>
  );
};

export default Skills;



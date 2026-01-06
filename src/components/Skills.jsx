import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto text-center">
      {/* Conversational Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">My Digital Toolbox</h2>
      <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
        I’m a big believer in using the right tool for the job. Here are the technologies I live in every day and the software that keeps my workflow smooth.
      </p>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-16">
        <div className="bg-gray-100 p-1.5 rounded-full flex items-center shadow-inner">
          <button
            onClick={() => setActiveTab('tech')}
            className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'tech' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Tech Stack
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'tools' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Tools
          </button>
        </div>
      </div>

      {/* Animated Skills Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 "
      >
        <AnimatePresence mode="wait">
          {displaySkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow cursor-default "
            >
              <img 
                src={skill.logo} 
                alt={skill.name} 
                className="w-14 h-14 mb-4  transition-all duration-300 hover:rotate-7 hover:animate-bounce "
              />
              <span className="text-gray-800 font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Subtle Footer Note */}
      <p className="mt-16 text-sm text-gray-400 italic">
        "What's open on my second monitor"
      </p>
    </section>
  );
};

export default Skills;
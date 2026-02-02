import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

// 1. The ScrollReveal Wrapper (Inside the same file or imported)
const ScrollReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      duration: 0.6, 
      delay: delay, 
      ease: [0.22, 1, 0.36, 1] 
    }}
  >
    {children}
  </motion.div>
);

const projects = [
  {
    title: "E-village portal",
    description: "A full-stack MERN webapp to streamline the process of village administration.",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "A MERN powered task organizer that prioritizes your day based on deadlines.",
    tags: ["Next.js", "React", "MongoDB", "Tailwind"],
    github: "https://github.com/su-jith/to-do-app-v1",
    live: "https://to-do-app-v1-seven.vercel.app/"
  },
  {
    title: "Portfolio v2",
    description: "The very site you are looking at! Focused on performance and clean UI.",
    tags: ["Vite", "React", "Framer Motion"],
    github: "https://github.com/su-jith/portfolio-v1",
    live: "https://portfolio-v1-omega-blush.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-main-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header with Animation */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-main-text mb-4">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // 2. Wrap the card in ScrollReveal with a staggered delay
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group relative p-8 rounded-3xl bg-main-bg border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 shadow-sm hover:shadow-xl h-full">
                
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-3xl" />

                <div className="flex flex-col h-full relative z-10">
                  <div className="mb-6 p-3 w-fit rounded-xl bg-blue-600/10 text-blue-600">
                    <Code2 size={24} />
                  </div>

                  <h3 className="text-2xl font-bold text-main-text mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                    >
                      <Github size={18} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
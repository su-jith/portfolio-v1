import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { cn } from '../lib/utils';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack shop with Stripe integration and a custom admin dashboard.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Management AI",
    description: "AI-powered task organizer that prioritizes your day based on deadlines.",
    tags: ["Next.js", "OpenAI", "Tailwind"],
    github: "#",
    live: "#"
  },
  {
    title: "Portfolio v2",
    description: "The very site you are looking at! Focused on performance and clean UI.",
    tags: ["Vite", "React", "Framer Motion"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-24 bg-white dark:bg-slate-950 transition-colors duration-300 ">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-16 items-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50"
            >
              {/* --- THE HOVER ANIMATION BEHIND THE CARD --- */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
              
              {/* Card Content */}
              <div className="flex flex-col h-full">
                <div className="mb-6 p-3 w-fit rounded-lg bg-blue-600/10 text-blue-600">
                  <Code2 size={24} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 mt-auto">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { Download, Mail } from 'lucide-react';
import profilePic from '../assets/profile-pic.png'; // Using the import we discussed earlier

const About = () => {
  return (
    <section 
      id="about" 
      className="w-full min-h-screen flex items-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300 rounded-md"
    >
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                About <span className="text-blue-600">Me</span>
              </h2>
              <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I am a passionate developer with a background in designing and building 
                scalable web applications. I love solving complex problems and turning 
                them into simple, beautiful, and intuitive designs.
              </p>
              <p>
                With a focus on modern technologies like Javascript, Reactand Tailwind CSS, Node.js, Express.js and various others, 
                I strive to create digital experiences that are both functional and 
                visually striking.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends or 
                fine-tuning my workflow to deliver the best possible results for clients.
              </p>
            </div>

            {/* Contact Button */}
            <div className="pt-6">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 mr-10"
              >
                Get in touch <Mail size={20} />
              </a>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-amber-50 text-black rounded-xl font-semibold hover:bg-gray-200 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
              >
                Resume <Download size={20} />
              </a>
            </div>

            
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 relative group">
            <div className="relative z-10 w-full max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={profilePic} 
                alt="About Me" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Decorative Background Frame */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-blue-600 rounded-tl-3xl -z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-blue-600 rounded-br-3xl -z-0"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
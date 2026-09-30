import React from 'react';
import { projects } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const prefersReducedMotion = useReducedMotion();
  const isEven = index % 2 === 1;

  const animationClasses = prefersReducedMotion
    ? ''
    : `transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`;

  return (
    <div 
      ref={ref} 
      className={`group flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center ${animationClasses}`}
    >
      {/* Image Area */}
      <div className="w-full lg:w-1/2 overflow-hidden rounded-xl bg-transparent relative hover:-translate-y-2 transition-transform duration-500">
        <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="block w-full h-full" aria-label={`View ${project.title}`}>
          <div className="bg-[#1a1a1c] border border-white/5 rounded-xl aspect-video flex items-center justify-center group-hover:bg-[#1e1e20] group-hover:border-white/10 transition-colors duration-500 w-full relative">
            <span className="text-[#c8a97e]/20 text-7xl md:text-9xl font-bold font-['Sora'] group-hover:text-[#c8a97e]/30 transition-colors duration-500">
              {project.title[0]}
            </span>
          </div>
        </a>
      </div>

      {/* Text Area */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="mb-6 relative">
          <span className="absolute -top-12 -left-4 text-8xl font-black text-white/5 select-none pointer-events-none hidden md:block">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[#c8a97e] uppercase tracking-widest text-xs font-semibold mb-3 block">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold font-['Sora'] text-white mb-4">
            {project.title}
          </h3>
          <p className="text-[#a0a0a0] font-['Inter'] leading-relaxed text-lg mb-8">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((techItem, i) => (
            <span 
              key={i} 
              className="px-4 py-1.5 bg-[#111113] border border-white/5 rounded-full text-xs font-['Inter'] text-[#a0a0a0] tracking-wide"
            >
              {techItem}
            </span>
          ))}
        </div>

        {project.link && (
          <div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white font-medium hover:text-[#c8a97e] transition-colors duration-300 border-b border-transparent hover:border-[#c8a97e] pb-1"
            >
              View Project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  const animationClasses = prefersReducedMotion
    ? ''
    : `transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`;

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#111113] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div ref={ref} className={`mb-24 ${animationClasses}`}>
          <span className="text-[#c8a97e] uppercase tracking-widest text-sm font-semibold block mb-4">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Sora'] leading-tight">
            Latest Projects
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

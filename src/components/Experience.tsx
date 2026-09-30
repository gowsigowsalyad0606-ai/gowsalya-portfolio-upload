import React from 'react';
import { experience, education } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ExperienceEntryProps {
  company: string;
  role: string;
  duration: string;
  description: string;
  isCurrent?: boolean;
  isLeft?: boolean;
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({ company, role, duration, description, isCurrent, isLeft }) => {
  const { ref, isVisible } = useScrollReveal();
  const prefersReducedMotion = useReducedMotion();

  const animationClass = prefersReducedMotion
    ? 'opacity-100'
    : `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <div ref={ref} className={`mb-16 flex justify-between items-center w-full ${isLeft ? 'md:flex-row-reverse' : ''} ${animationClass}`}>
      <div className="hidden md:block w-5/12"></div>
      
      {/* Timeline Dot */}
      <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#111113] border-2 border-[#c8a97e] shrink-0 mx-4 md:mx-auto">
        {isCurrent && (
          <span className="w-3 h-3 rounded-full bg-[#c8a97e] animate-pulse"></span>
        )}
      </div>

      <div className="w-full md:w-5/12 ml-4 md:ml-0">
        <div className={`p-6 rounded-xl bg-[#1a1a1c] border border-white/5 hover:border-white/20 transition-colors duration-300 relative ${isLeft ? 'md:text-right' : 'text-left'}`}>
          {isCurrent && (
            <span className={`absolute top-4 ${isLeft ? 'md:left-4 right-4' : 'right-4'} px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-[#c8a97e] text-[#0a0a0b] rounded-full`}>
              Current
            </span>
          )}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{company}</h3>
          <h4 className="text-[#c8a97e] text-sm md:text-base font-medium mb-2">{role}</h4>
          <span className="inline-block text-xs md:text-sm text-[#a0a0a0] mb-4 bg-white/5 px-3 py-1 rounded-full">
            {duration}
          </span>
          <p className="text-[#a0a0a0] text-sm leading-relaxed whitespace-pre-wrap">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const EducationEntry: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const prefersReducedMotion = useReducedMotion();

  const animationClass = prefersReducedMotion
    ? 'opacity-100'
    : `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <div ref={ref} className={`mb-8 flex justify-between items-center w-full md:flex-row-reverse ${animationClass}`}>
      <div className="hidden md:block w-5/12"></div>
      
      {/* Timeline Dot */}
      <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#111113] border-2 border-[#c8a97e] shrink-0 mx-4 md:mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#c8a97e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      </div>

      <div className="w-full md:w-5/12 ml-4 md:ml-0">
        <div className="p-6 rounded-xl bg-[#1a1a1c] border border-white/5 hover:border-white/20 transition-colors duration-300 md:text-right text-left">
          <div className="flex items-center justify-start md:justify-end mb-2 text-[#c8a97e]">
            <span className="text-xs tracking-widest uppercase font-semibold">Education</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{education.degree}</h3>
          <h4 className="text-[#a0a0a0] text-sm md:text-base font-medium mb-2">{education.college}</h4>
          <span className="inline-block text-xs md:text-sm text-[#666] bg-white/5 px-3 py-1 rounded-full">
            {education.years}
          </span>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const prefersReducedMotion = useReducedMotion();

  const headerAnimationClass = prefersReducedMotion
    ? 'opacity-100'
    : `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section id="experience" className="py-24 bg-[#111113] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div ref={ref} className={`text-center mb-20 ${headerAnimationClass}`}>
          <span className="text-[#c8a97e] text-sm tracking-[0.3em] font-semibold uppercase mb-4 block">
            Career Path
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Experience
          </h2>
        </div>

        <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
          {/* Vertical Line */}
          <div className="absolute border-opacity-20 border-[#c8a97e] h-full border left-8 md:left-1/2 md:-ml-[1px]"></div>

          {experience.map((exp, index) => (
            <ExperienceEntry
              key={index}
              company={exp.company}
              role={exp.role}
              duration={exp.duration}
              description={exp.description}
              isCurrent={exp.isCurrent}
              isLeft={index % 2 !== 0}
            />
          ))}

          <EducationEntry />
        </div>
      </div>
    </section>
  );
};

export default Experience;

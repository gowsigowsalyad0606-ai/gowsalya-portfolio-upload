import React from 'react';
import { skills } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface SkillCategoryProps {
  category: string;
  items: string[];
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, items, index }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  
  // Stagger calculation based on index
  const delay = index * 150;
  
  const animationClasses = prefersReducedMotion
    ? ''
    : `transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`;

  return (
    <div 
      ref={ref}
      className={`bg-[#111113] border border-white/5 rounded-2xl p-8 hover:border-white/10 hover:bg-[#151518] transition-all duration-300 ${animationClasses}`}
      style={!prefersReducedMotion && isVisible ? { transitionDelay: `${delay}ms` } : {}}
    >
      <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
        <h3 className="text-xl font-bold font-['Sora'] text-white capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
        <span className="text-[#666666] font-mono text-sm">0{index + 1}</span>
      </div>
      
      <ul className="flex flex-col gap-4">
        {items.map((skill, i) => (
          <li key={i} className="group flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#333333] group-hover:bg-[#c8a97e] group-hover:scale-150 transition-all duration-300"></span>
            <span className="text-[#a0a0a0] font-['Inter'] group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  const animationClasses = prefersReducedMotion
    ? ''
    : `transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`;

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#0a0a0b] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div ref={ref} className={`mb-16 md:mb-24 ${animationClasses}`}>
          <span className="text-[#c8a97e] uppercase tracking-widest text-sm font-semibold block mb-4">
            Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Sora'] leading-tight">
            Core Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCategory 
              key={category} 
              category={category} 
              items={items as string[]} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { personalInfo, education } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useReducedMotion } from '../hooks/useReducedMotion';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  const animationClasses = prefersReducedMotion
    ? ''
    : `transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`;

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0b] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div ref={ref} className={`${animationClasses}`}>
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-[#c8a97e] uppercase tracking-widest text-sm font-semibold block mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Sora'] leading-tight">
              Scaling Ideas <br className="hidden md:block" /> Into Reality
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left Column (60%) */}
            <div className="lg:w-3/5 space-y-8">
              <p className="text-xl md:text-2xl text-[#a0a0a0] font-['Inter'] leading-relaxed font-light">
                {personalInfo.summary}
              </p>
              
              <p className="text-[#a0a0a0] font-['Inter'] leading-relaxed">
                Specializing in building seamless, high-performance web applications, I bring a detail-oriented approach to both frontend and backend development. My focus is on writing clean, scalable code while prioritizing exceptional user experiences.
              </p>

              {/* Decorative line */}
              <div className="h-px w-24 bg-white/10 my-10"></div>

              {/* Education Card */}
              <div className="bg-[#111113] border border-white/5 rounded-xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#c8a97e] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-[#c8a97e] uppercase tracking-wider text-xs font-semibold mb-4">Education</h3>
                <h4 className="text-xl font-['Sora'] text-white font-semibold mb-2">{education.degree}</h4>
                <p className="text-[#a0a0a0] mb-4">{education.college}</p>
                <span className="text-sm text-[#666666] px-3 py-1 bg-white/5 rounded-full">{education.years}</span>
              </div>
            </div>

            {/* Right Column (40%) */}
            <div className="lg:w-2/5 flex flex-col gap-6">
              {/* Stats Card 1 */}
              <div className="bg-[#111113] border border-white/5 rounded-xl p-8 flex flex-col justify-center items-start">
                <span className="text-5xl font-bold font-['Sora'] text-white mb-2">
                  {personalInfo.stats?.[0]?.value || '15+'}
                </span>
                <span className="text-[#a0a0a0] uppercase tracking-wider text-sm">
                  {personalInfo.stats?.[0]?.label || 'Digital Solutions'}
                </span>
              </div>

              {/* Stats Card 2 */}
              <div className="bg-[#111113] border border-white/5 rounded-xl p-8 flex flex-col justify-center items-start">
                <span className="text-5xl font-bold font-['Sora'] text-white mb-2">
                  {personalInfo.stats?.[1]?.value || '2+'}
                </span>
                <span className="text-[#a0a0a0] uppercase tracking-wider text-sm">
                  {personalInfo.stats?.[1]?.label || 'Years Experience'}
                </span>
              </div>

              {/* Status/Location Card */}
              <div className="bg-[#111113] border border-white/5 rounded-xl p-8">
                <div className="mb-6">
                  <span className="text-[#666666] uppercase tracking-wider text-xs block mb-1">Current Status</span>
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8a97e] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c8a97e]"></span>
                    </span>
                    <span className="text-white font-medium">{personalInfo.status}</span>
                  </div>
                </div>
                
                <div>
                  <span className="text-[#666666] uppercase tracking-wider text-xs block mb-1">Base</span>
                  <span className="text-white font-medium">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

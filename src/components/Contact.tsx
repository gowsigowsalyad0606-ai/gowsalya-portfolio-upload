import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const animationClass = prefersReducedMotion
    ? 'opacity-100'
    : `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (Frontend only - backend integration needed)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0b] relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div ref={ref} className={`flex flex-col lg:flex-row gap-16 lg:gap-8 ${animationClass}`}>
          
          {/* Left Side: Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-[#c8a97e] text-sm tracking-[0.3em] font-semibold uppercase mb-6 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Start <br /> Something Great
            </h2>
            <p className="text-[#a0a0a0] text-lg mb-12 max-w-md">
              {personalInfo.status}
            </p>

            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center group text-[#a0a0a0] hover:text-[#c8a97e] transition-colors duration-300 w-fit">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-6 group-hover:bg-[#c8a97e]/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-lg">{personalInfo.email}</span>
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center group text-[#a0a0a0] hover:text-[#c8a97e] transition-colors duration-300 w-fit">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-6 group-hover:bg-[#c8a97e]/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span className="text-lg">LinkedIn Profile</span>
              </a>

              <div className="flex items-center group text-[#a0a0a0] w-fit cursor-default">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-lg">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#111113] border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8a97e] opacity-[0.02] rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                {/* Note: Easy Backend Integration setup - replace alert with fetch/axios call */}
                
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-[#666] focus:outline-none focus:border-[#c8a97e] transition-colors rounded-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-[#666] focus:outline-none focus:border-[#c8a97e] transition-colors rounded-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-[#666] focus:outline-none focus:border-[#c8a97e] transition-colors resize-none rounded-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#c8a97e] text-[#0a0a0b] font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-none hover:bg-[#d4b88e] transition-colors duration-300 mt-4 focus:outline-none focus:ring-2 focus:ring-[#c8a97e] focus:ring-offset-2 focus:ring-offset-[#111113]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

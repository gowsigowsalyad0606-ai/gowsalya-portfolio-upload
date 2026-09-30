import { personalInfo } from '../data/portfolio';
import CursorCharacter from './CursorCharacter';

const Hero = () => {
  const fadeUpClass = "opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#0a0a0b] overflow-hidden pt-24 pb-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Radial gradient */}
        <div className="absolute top-1/2 right-0 md:right-1/4 -translate-y-1/2 translate-x-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#c8a97e]/[0.03] rounded-full blur-[80px] md:blur-[100px]" />
        
        {/* Corner grid pattern */}
        <div 
          className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-5" 
          style={{ 
            backgroundImage: 'radial-gradient(#c8a97e 1px, transparent 1px)', 
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom left, black, transparent)'
          }} 
        />
        
        {/* Thin horizontal line */}
        <div className="absolute top-1/3 left-0 w-1/3 md:w-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#c8a97e]/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Mobile: Character on top, Desktop: Character on right */}
          <div className="order-1 lg:order-2 flex justify-center items-center w-full">
            <div className={fadeUpClass} style={{ animationDelay: '0.2s' }}>
              <CursorCharacter />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start space-y-6 w-full">
            <span 
              className={`text-sm md:text-base text-gray-400 uppercase tracking-[0.3em] font-medium ${fadeUpClass}`} 
              style={{ animationDelay: '0.1s' }}
            >
              Hi, I'm
            </span>
            
            <h1 
              className={`text-5xl md:text-7xl lg:text-8xl font-bold font-sora text-white leading-[1.1] ${fadeUpClass}`} 
              style={{ animationDelay: '0.3s' }}
            >
              {personalInfo.name}
            </h1>
            
            <h2 
              className={`text-2xl md:text-3xl lg:text-4xl font-medium text-[#c8a97e] ${fadeUpClass}`} 
              style={{ animationDelay: '0.5s' }}
            >
              {personalInfo.title}
            </h2>
            
            <p 
              className={`text-gray-400 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed ${fadeUpClass}`} 
              style={{ animationDelay: '0.7s' }}
            >
              {personalInfo.summary}
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row flex-wrap gap-4 pt-6 w-full sm:w-auto ${fadeUpClass}`} 
              style={{ animationDelay: '0.9s' }}
            >
              <a 
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-8 py-4 bg-[#c8a97e] text-[#0a0a0b] font-bold text-sm tracking-widest hover:bg-white hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-hover"
              >
                VIEW PROJECTS
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-8 py-4 border border-[#c8a97e] text-[#c8a97e] font-bold text-sm tracking-widest hover:bg-[#c8a97e] hover:text-[#0a0a0b] hover:-translate-y-1 transition-all duration-300 text-center cursor-hover"
              >
                GET IN TOUCH
              </a>
            </div>
            
            <div className={`pt-6 ${fadeUpClass}`} style={{ animationDelay: '1.1s' }}>
              <a 
                href="/resume.pdf" 
                download 
                className="group flex items-center gap-3 text-sm text-gray-400 hover:text-[#c8a97e] transition-colors cursor-hover"
              >
                <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-[#c8a97e] bg-gray-900/50 transition-colors">
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:translate-y-0.5" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                  </svg>
                </div>
                <span className="uppercase tracking-widest font-medium border-b border-transparent group-hover:border-[#c8a97e] transition-colors pb-0.5">
                  Download Resume
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className={`flex flex-wrap gap-10 pt-8 mt-6 border-t border-gray-800/50 w-full ${fadeUpClass}`} style={{ animationDelay: '1.3s' }}>
              {personalInfo.stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-1.5">
                  <span className="text-3xl md:text-4xl font-bold font-sora text-white">{stat.value}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useEffect, useRef } from 'react';

const CursorCharacter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const isMobile = 'ontouchstart' in window || window.innerWidth < 768;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    const animate = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = mousePos.current.x - centerX;
      const dy = mousePos.current.y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      let targetX = 0;
      let targetY = 0;

      if (!isMobile && distance > 50) {
        const angle = Math.atan2(dy, dx);
        const factor = Math.min(distance / 500, 1);
        targetX = Math.cos(angle) * 12 * factor;
        targetY = Math.sin(angle) * 12 * factor;
      }

      // Smooth lerp
      currentPos.current.x += (targetX - currentPos.current.x) * 0.08;
      currentPos.current.y += (targetY - currentPos.current.y) * 0.08;

      const { x, y } = currentPos.current;

      // Glow moves smoothly with mouse cursor
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
      }

      // Interactive subtle light spot follows cursor
      if (lightRef.current) {
        lightRef.current.style.transform = `translate(${x * 2.5}px, ${y * 2.5}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full max-w-[320px] md:max-w-[420px]"
    >
      {/* Background ambient gold glow reacting to cursor */}
      <div
        ref={glowRef}
        className="absolute w-72 h-72 md:w-80 md:h-80 bg-[#c8a97e]/10 rounded-full blur-3xl pointer-events-none"
        style={{ willChange: 'transform' }}
      />

      {/* Main Portrait Container with User's Photo */}
      <div className="relative z-10 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        {/* Her Actual Photo */}
        <img
          src="/hero-portrait.png"
          alt="Gowsalya D — Software Developer"
          className="w-full h-auto object-cover rounded-2xl block"
          loading="eager"
          draggable={false}
        />

        {/* Interactive light sheen overlay following cursor */}
        <div
          ref={lightRef}
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#c8a97e]/[0.08] rounded-full blur-2xl pointer-events-none"
          style={{ willChange: 'transform' }}
        />

        {/* Bottom subtle dark gradient overlay for elegant blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-40 pointer-events-none" />

        {/* Corner framing accents */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#c8a97e]/50 rounded-tl pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#c8a97e]/50 rounded-tr pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#c8a97e]/50 rounded-bl pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#c8a97e]/50 rounded-br pointer-events-none" />
      </div>

      {/* Decorative code brackets */}
      <div className="absolute -right-6 md:-right-10 top-1/3 text-[#c8a97e]/20 font-mono text-xl select-none pointer-events-none">
        {'</>'}
      </div>
      <div className="absolute -left-6 md:-left-10 bottom-1/3 text-[#c8a97e]/20 font-mono text-xl select-none pointer-events-none">
        {'{ }'}
      </div>
    </div>
  );
};

export default CursorCharacter;

import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const auraPos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHovering.current = !!(target.closest('a, button, [role="button"], .cursor-hover'));
    };

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      }
      // Smooth trailing for aura
      auraPos.current.x += (posRef.current.x - auraPos.current.x) * 0.15;
      auraPos.current.y += (posRef.current.y - auraPos.current.y) * 0.15;
      if (auraRef.current) {
        const scale = isHovering.current ? 1.5 : 1;
        auraRef.current.style.transform = `translate(${auraPos.current.x}px, ${auraPos.current.y}px) scale(${scale})`;
        auraRef.current.style.opacity = isHovering.current ? '0.3' : '0.15';
      }
      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-[#c8a97e] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={auraRef}
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 border border-[#c8a97e]/30 rounded-full pointer-events-none z-[9998] transition-[opacity] duration-300"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;

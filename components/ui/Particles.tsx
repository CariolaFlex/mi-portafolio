'use client';

import { useEffect, useRef } from 'react';

export function Particles() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: var(--primary);
        border-radius: 50%;
        animation: float-particle 20s linear infinite;
        left: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 20}s;
        animation-duration: ${15 + Math.random() * 10}s;
      `;
      particlesRef.current.appendChild(particle);
    }

    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <div
        ref={particlesRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0"
      />

      <style jsx global>{`
        @keyframes float-particle {
          from {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          to {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

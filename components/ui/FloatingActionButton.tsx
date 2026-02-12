'use client';

import { useState, useEffect } from 'react';

export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl cursor-pointer transition-all duration-300 shadow-[0_10px_30px_rgba(0,217,255,0.3)] z-[100] hover:scale-110 hover:shadow-[0_15px_40px_rgba(0,217,255,0.5)] animate-[fadeIn_0.3s_ease]"
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { personalInfo } from '@/data/personal-info';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = personalInfo.title;

  // Efecto typewriter
  useEffect(() => {
    let index = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }, 1500);

    return () => clearTimeout(timer);
  }, [fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-24 pb-16 px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 animate-[bgMove_20s_ease-in-out_infinite]"
        style={{
          background: `radial-gradient(circle at 20% 50%, var(--primary) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, var(--secondary) 0%, transparent 50%),
                      radial-gradient(circle at 40% 20%, var(--accent) 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-[1400px] w-full mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column - Text Content */}
        <div className="animate-[fadeInLeft_1s_ease] text-center md:text-left">
          {/* Main Title with Typewriter Effect */}
          <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-tight mb-6 bg-gradient-to-r from-text to-primary bg-clip-text text-transparent min-h-[8rem] md:min-h-[12rem]">
            {displayedText}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary mb-6 font-semibold">
            {personalInfo.subtitle}
          </p>

          {/* Short Bio */}
          <p className="text-lg text-text-muted mb-8 leading-relaxed opacity-90">
            {personalInfo.shortBio}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-dark-card p-5 rounded-xl border border-border transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_10px_30px_rgba(0,217,255,0.2)]">
              <span className="text-3xl font-bold text-primary block">
                {personalInfo.stats.experience}
              </span>
              <span className="text-sm text-text-muted mt-1 block">
                Años Exp.
              </span>
            </div>
            <div className="bg-dark-card p-5 rounded-xl border border-border transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_10px_30px_rgba(0,217,255,0.2)]">
              <span className="text-xl md:text-2xl font-bold text-primary block leading-tight">
                {personalInfo.stats.field}
              </span>
              <span className="text-sm text-text-muted mt-1 block">
                Doble Especialidad
              </span>
            </div>
            <div className="bg-dark-card p-5 rounded-xl border border-border transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_10px_30px_rgba(0,217,255,0.2)]">
              <span className="text-3xl font-bold text-primary block">
                {personalInfo.stats.automation}
              </span>
              <span className="text-sm text-text-muted mt-1 block">
                Producción
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <Button
              variant="primary"
              onClick={() => scrollToSection('proyectos')}
              icon={<i className="fas fa-rocket"></i>}
            >
              Ver Proyectos
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.open('https://github.com/CariolaFlex', '_blank')}
              icon={<i className="fab fa-github"></i>}
            >
              GitHub
            </Button>
          </div>
        </div>

        {/* Right Column - Profile Visual */}
        <div className="relative animate-[fadeInRight_1s_ease] hidden md:block">
          <div className="relative w-[350px] h-[350px] mx-auto">
            {/* Animated Rings */}
            <div className="absolute w-full h-full rounded-full border-[3px] border-primary opacity-30 animate-[ringPulse_3s_ease-in-out_infinite]"></div>
            <div className="absolute w-full h-full rounded-full border-[3px] border-primary opacity-30 animate-[ringPulse_3s_ease-in-out_infinite] scale-110" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute w-full h-full rounded-full border-[3px] border-primary opacity-30 animate-[ringPulse_3s_ease-in-out_infinite] scale-120" style={{ animationDelay: '1s' }}></div>

            {/* Profile Image Container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-primary to-secondary rounded-full p-[5px] animate-[float_6s_ease-in-out_infinite] overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden bg-dark relative">
                <Image
                  src={personalInfo.profileImage || personalInfo.logo || 'https://i.postimg.cc/vBVjWBhw/Logo-HD.png'}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Status Badge */}
            <div className="absolute bottom-[10%] right-[10%] w-[60px] h-[60px] bg-accent rounded-full flex items-center justify-center border-4 border-dark animate-[statusPulse_2s_infinite]">
              <i className="fas fa-check text-white text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bgMove {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -10px) scale(0.95); }
        }

        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.1; }
        }

        @keyframes statusPulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 20px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}

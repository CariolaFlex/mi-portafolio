'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { personalInfo } from '@/data/personal-info';
import { contactInfo } from '@/data/contact';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
          : 'py-4'
      }`}
      style={{
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-4 no-underline" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>
          <div className="relative w-[50px] h-[50px] animate-[logoFloat_3s_ease-in-out_infinite]">
            <Image
              src={personalInfo.logo}
              alt={`${personalInfo.name} Logo`}
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
          <span className="text-xl font-bold text-text">{personalInfo.name}</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex list-none gap-8 items-center">
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className="nav-link text-text-muted no-underline font-medium transition-all duration-300 relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Inicio
            </button>
          </li>
          <li>
            <Link
              href="/herramientas"
              className="nav-link text-text-muted no-underline font-medium transition-all duration-300 relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Herramientas
            </Link>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className="nav-link text-text-muted no-underline font-medium transition-all duration-300 relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Portafolio
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('skills')}
              className="nav-link text-text-muted no-underline font-medium transition-all duration-300 relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Habilidades
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link text-text-muted no-underline font-medium transition-all duration-300 relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Contacto
            </button>
          </li>
          <li>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg no-underline font-semibold transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,217,255,0.3)] before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-white/20 before:transition-all before:duration-500 hover:before:left-full"
            >
              Contratar
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-transparent border-none text-text text-2xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-card border-t border-border mt-4 py-4 px-8">
          <ul className="flex flex-col gap-4 list-none">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="text-text-muted font-medium hover:text-primary w-full text-left"
              >
                Inicio
              </button>
            </li>
            <li>
              <Link
                href="/herramientas"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-muted font-medium hover:text-primary block"
              >
                Herramientas
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-text-muted font-medium hover:text-primary w-full text-left"
              >
                Portafolio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-text-muted font-medium hover:text-primary w-full text-left"
              >
                Habilidades
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-text-muted font-medium hover:text-primary w-full text-left"
              >
                Contacto
              </button>
            </li>
            <li>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg text-center font-semibold"
              >
                Contratar
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

<style jsx>{`
  @keyframes logoFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
`}</style>

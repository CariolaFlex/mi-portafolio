'use client';

import Link from 'next/link';

export function QuickAccess() {
  return (
    <section id="accesos-directos" className="py-20 px-8 relative">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Explora mis <span className="text-primary">Soluciones</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Descubre mis proyectos profesionales y herramientas gratuitas para todos
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Herramientas */}
          <Link href="/herramientas" className="group block">
            <div className="relative h-full bg-gradient-to-br from-dark-card via-dark-card to-dark-bg border border-border rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_20px_60px_rgba(0,217,255,0.3)] overflow-hidden">
              {/* Background Gradient Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="relative w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <i className="fa-solid fa-briefcase text-5xl text-primary"></i>
              </div>

              {/* Content */}
              <div className="relative text-center">
                <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300">
                  Mis Herramientas Profesionales
                </h3>
                <p className="text-text-muted mb-6 leading-relaxed">
                  Proyectos de Ingeniería Civil, Automatizaciones, Dashboards y más soluciones especializadas
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary font-semibold">
                    Ingeniería Civil
                  </span>
                  <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent font-semibold">
                    Automatización
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-xs text-secondary font-semibold">
                    Dashboards
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Ver herramientas</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: CariolaTools */}
          <Link href="/cariolatools" className="group block">
            <div className="relative h-full bg-gradient-to-br from-dark-card via-dark-card to-dark-bg border border-border rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent hover:shadow-[0_20px_60px_rgba(255,107,53,0.3)] overflow-hidden">
              {/* Background Gradient Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="relative w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <i className="fa-solid fa-tools text-5xl text-accent"></i>
              </div>

              {/* Content */}
              <div className="relative text-center">
                <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                  CariolaTools
                </h3>
                <p className="text-text-muted mb-6 leading-relaxed">
                  Herramientas web gratuitas para todos. Excel→JSON, Generador QR y más utilidades prácticas
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-xs text-green-400 font-semibold">
                    100% Gratis
                  </span>
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-400 font-semibold">
                    Sin registro
                  </span>
                  <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-400 font-semibold">
                    2 herramientas
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Usar herramientas</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

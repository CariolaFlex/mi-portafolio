import { Metadata } from 'next';
import Link from 'next/link';
import { tools } from '@/data/cariolatools';
import { ToolCard } from '@/components/cariolatools/ToolCard';

export const metadata: Metadata = {
  title: 'CariolaTools - Herramientas Gratuitas | Andrés Cariola',
  description: 'Colección de herramientas web gratuitas para desarrolladores, diseñadores y profesionales. Excel a JSON, generador de QR, y más.',
};

export default function CariolaToolsPage() {
  const featuredTools = tools.filter((tool) => tool.featured);
  const otherTools = tools.filter((tool) => !tool.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <i className="fas fa-tools text-primary"></i>
              <span className="text-primary font-semibold text-sm">Herramientas Gratuitas</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            Cariola<span className="text-primary">Tools</span>
          </h1>

          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Colección de herramientas web gratuitas, sin publicidad y sin registro.
            Todo funciona en tu navegador, tus datos nunca salen de tu dispositivo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-primary"></i>
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-lock text-primary"></i>
              <span>Privado y Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-bolt text-primary"></i>
              <span>Sin Registro</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-ban text-primary"></i>
              <span>Sin Publicidad</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      {featuredTools.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center gap-3 mb-8">
              <i className="fas fa-star text-primary text-2xl"></i>
              <h2 className="text-3xl font-bold text-text">Herramientas Destacadas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Tools */}
      {otherTools.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center gap-3 mb-8">
              <i className="fas fa-toolbox text-primary text-2xl"></i>
              <h2 className="text-3xl font-bold text-text">Más Herramientas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-text text-center mb-12">
            ¿Por qué CariolaTools?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <i className="fas fa-shield-alt text-3xl text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Privacidad Total</h3>
              <p className="text-text-muted leading-relaxed">
                Todo el procesamiento ocurre en tu navegador. Tus datos nunca se envían a ningún servidor.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <i className="fas fa-rocket text-3xl text-accent"></i>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Rápido y Simple</h3>
              <p className="text-text-muted leading-relaxed">
                Interfaces limpias y modernas. Sin complicaciones, sin pasos innecesarios.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <i className="fas fa-code text-3xl text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Open Source</h3>
              <p className="text-text-muted leading-relaxed">
                Código abierto y transparente. Puedes verificar exactamente qué hace cada herramienta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-text mb-4">
            ¿Tienes alguna sugerencia?
          </h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Estoy siempre buscando agregar nuevas herramientas útiles. Si tienes alguna idea o sugerencia,
            no dudes en contactarme.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-dark font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            <i className="fas fa-envelope"></i>
            <span>Enviar Sugerencia</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

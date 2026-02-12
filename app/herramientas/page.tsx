import { Metadata } from 'next';
import { categories } from '@/data/herramientas';
import { CategoryCard } from '@/components/herramientas/CategoryCard';

export const metadata: Metadata = {
  title: 'Herramientas y Proyectos | Andrés Cariola',
  description: 'Colección de herramientas, calculadoras y proyectos de ingeniería civil, productividad, finanzas y más.',
};

export default function HerramientasPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-8">
      {/* Page Header */}
      <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease]">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full mb-4">
          <i className="fas fa-tools text-primary"></i>
          <span className="text-primary text-sm font-semibold">HERRAMIENTAS Y PROYECTOS</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Explora Mis Proyectos
        </h1>

        <p className="text-text-muted text-lg max-w-[700px] mx-auto leading-relaxed">
          Descubre una colección de herramientas prácticas, calculadoras especializadas y proyectos web
          que he desarrollado para facilitar tareas de ingeniería, productividad y más.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      {/* Additional Info */}
      <div className="bg-dark-card border border-border rounded-2xl p-8 text-center">
        <i className="fas fa-lightbulb text-4xl text-primary mb-4"></i>
        <h3 className="text-xl font-bold text-text mb-2">¿Tienes una idea?</h3>
        <p className="text-text-muted mb-4">
          Si necesitas una herramienta personalizada o tienes un proyecto en mente, no dudes en contactarme.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:-translate-y-1 transition-transform duration-300"
        >
          <i className="fas fa-envelope"></i>
          Contáctame
        </a>
      </div>
    </div>
  );
}

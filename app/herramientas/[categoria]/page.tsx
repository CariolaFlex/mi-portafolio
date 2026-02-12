import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories, getCategoryById } from '@/data/herramientas';
import { SubcategoryCard } from '@/components/herramientas/SubcategoryCard';
import { ProjectCard } from '@/components/herramientas/ProjectCard';
import { Breadcrumb } from '@/components/herramientas/Breadcrumb';

interface CategoryPageProps {
  params: Promise<{ categoria: string }>;
}

// Generar rutas estáticas
export async function generateStaticParams() {
  return categories.map((category) => ({
    categoria: category.id,
  }));
}

// Metadata dinámica
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categoria } = await params;
  const category = getCategoryById(categoria);

  if (!category) {
    return {
      title: 'Categoría no encontrada',
    };
  }

  return {
    title: `${category.name} | Herramientas - Andrés Cariola`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoria } = await params;
  const category = getCategoryById(categoria);

  if (!category) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Herramientas', href: '/herramientas' },
    { label: category.name },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-8">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Page Header */}
      <div className="mb-12 animate-[fadeInUp_0.8s_ease]">
        <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${category.gradient} px-6 py-3 rounded-full mb-4`}>
          <i className={`fas ${category.icon} text-2xl text-white`}></i>
          <span className="text-white font-semibold">{category.name}</span>
        </div>

        <h1 className="text-4xl font-extrabold text-text mb-4">
          {category.name}
        </h1>

        <p className="text-text-muted text-lg max-w-[800px] leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Mostrar SUBCATEGORÍAS si hasSubcategories === true */}
      {category.hasSubcategories && category.subcategories && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.subcategories.map((subcategory) => (
            <SubcategoryCard
              key={subcategory.id}
              subcategory={subcategory}
              categoryId={category.id}
            />
          ))}
        </div>
      )}

      {/* Mostrar PROYECTOS DIRECTOS si hasSubcategories === false */}
      {!category.hasSubcategories && category.tools && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.tools.map((tool) => (
            <ProjectCard
              key={tool.id}
              tool={tool}
              categoryId={category.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

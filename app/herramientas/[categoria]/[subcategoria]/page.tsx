import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories, getCategoryById, getSubcategoryById } from '@/data/herramientas';
import { ProjectCard } from '@/components/herramientas/ProjectCard';
import { Breadcrumb } from '@/components/herramientas/Breadcrumb';

interface SubcategoryPageProps {
  params: Promise<{ categoria: string; subcategoria: string }>;
}

// Generar rutas estáticas
export async function generateStaticParams() {
  const params: { categoria: string; subcategoria: string }[] = [];

  categories.forEach((category) => {
    if (category.hasSubcategories && category.subcategories) {
      category.subcategories.forEach((subcategory) => {
        params.push({
          categoria: category.id,
          subcategoria: subcategory.id,
        });
      });
    }
  });

  return params;
}

// Metadata dinámica
export async function generateMetadata({ params }: SubcategoryPageProps): Promise<Metadata> {
  const { categoria, subcategoria } = await params;
  const category = getCategoryById(categoria);
  const subcategoryData = getSubcategoryById(categoria, subcategoria);

  if (!category || !subcategoryData) {
    return {
      title: 'Subcategoría no encontrada',
    };
  }

  return {
    title: `${subcategoryData.name} - ${category.name} | Andrés Cariola`,
    description: subcategoryData.description,
  };
}

export default async function SubcategoryPage({ params }: SubcategoryPageProps) {
  const { categoria, subcategoria } = await params;
  const category = getCategoryById(categoria);
  const subcategoryData = getSubcategoryById(categoria, subcategoria);

  if (!category || !subcategoryData) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Herramientas', href: '/herramientas' },
    { label: category.name, href: `/herramientas/${categoria}` },
    { label: subcategoryData.name },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-8">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Page Header */}
      <div className="mb-12 animate-[fadeInUp_0.8s_ease]">
        <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 px-5 py-2 rounded-full mb-4">
          <i className={`fas ${subcategoryData.icon} text-xl text-primary`}></i>
          <span className="text-primary font-semibold text-sm">{subcategoryData.name}</span>
        </div>

        <h1 className="text-4xl font-extrabold text-text mb-4">
          {subcategoryData.name}
        </h1>

        <p className="text-text-muted text-lg max-w-[800px] leading-relaxed">
          {subcategoryData.description}
        </p>

        <div className="mt-4 flex items-center gap-4 text-sm text-text-muted">
          <span>
            <i className="fas fa-folder-open mr-2 text-primary"></i>
            {subcategoryData.tools.length} {subcategoryData.tools.length === 1 ? 'herramienta' : 'herramientas'}
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      {subcategoryData.tools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subcategoryData.tools.map((tool) => (
            <ProjectCard
              key={tool.id}
              tool={tool}
              categoryId={categoria}
              subcategoryId={subcategoria}
            />
          ))}
        </div>
      ) : (
        <div className="bg-dark-card border border-border rounded-2xl p-12 text-center">
          <i className="fas fa-inbox text-6xl text-text-muted mb-4"></i>
          <h3 className="text-xl font-bold text-text mb-2">No hay herramientas aún</h3>
          <p className="text-text-muted">
            Esta subcategoría está en construcción. Pronto habrán herramientas disponibles.
          </p>
        </div>
      )}
    </div>
  );
}

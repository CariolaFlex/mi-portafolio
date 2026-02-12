import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { categories, getCategoryById, getToolById } from '@/data/herramientas';
import { ProjectIframe } from '@/components/herramientas/ProjectIframe';
import { Breadcrumb } from '@/components/herramientas/Breadcrumb';
import { TechBadge } from '@/components/herramientas/TechBadge';

interface ProjectPageProps {
  params: Promise<{ categoria: string; subcategoria: string; proyecto: string }>;
}

// Generar rutas estáticas para proyectos HTML
export async function generateStaticParams() {
  const params: { categoria: string; subcategoria: string; proyecto: string }[] = [];

  categories.forEach((category) => {
    if (category.hasSubcategories && category.subcategories) {
      // Categorías CON subcategorías
      category.subcategories.forEach((subcategory) => {
        subcategory.tools
          .filter((tool) => tool.type === 'html')
          .forEach((tool) => {
            params.push({
              categoria: category.id,
              subcategoria: subcategory.id,
              proyecto: tool.id,
            });
          });
      });
    } else if (category.tools) {
      // Categorías SIN subcategorías (usar "direct")
      category.tools
        .filter((tool) => tool.type === 'html')
        .forEach((tool) => {
          params.push({
            categoria: category.id,
            subcategoria: 'direct',
            proyecto: tool.id,
          });
        });
    }
  });

  return params;
}

// Metadata dinámica
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { categoria, subcategoria, proyecto } = await params;
  const subcat = subcategoria === 'direct' ? null : subcategoria;
  const tool = getToolById(categoria, subcat, proyecto);

  if (!tool) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  return {
    title: `${tool.name} | Herramientas - Andrés Cariola`,
    description: tool.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { categoria, subcategoria, proyecto } = await params;
  const category = getCategoryById(categoria);
  const subcat = subcategoria === 'direct' ? null : subcategoria;
  const tool = getToolById(categoria, subcat, proyecto);

  if (!category || !tool || tool.type !== 'html') {
    notFound();
  }

  // Breadcrumbs (sin mostrar "direct" si es categoría sin subcategorías)
  const breadcrumbItems = subcategoria === 'direct'
    ? [
        { label: 'Herramientas', href: '/herramientas' },
        { label: category.name, href: `/herramientas/${categoria}` },
        { label: tool.name },
      ]
    : [
        { label: 'Herramientas', href: '/herramientas' },
        { label: category.name, href: `/herramientas/${categoria}` },
        { label: subcategoria, href: `/herramientas/${categoria}/${subcategoria}` },
        { label: tool.name },
      ];

  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-8">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar con info del proyecto */}
        <div className="lg:col-span-1 space-y-4">
          {/* Back Button */}
          <Link
            href={subcategoria === 'direct' ? `/herramientas/${categoria}` : `/herramientas/${categoria}/${subcategoria}`}
            className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors duration-300 group mb-4"
          >
            <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform duration-300"></i>
            <span>Volver</span>
          </Link>

          {/* Project Info Card */}
          <div className="bg-dark-card border border-border rounded-xl p-6 sticky top-24">
            <h2 className="text-2xl font-bold text-text mb-2">{tool.name}</h2>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              {tool.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                Tecnologías
              </h3>
              <div className="flex flex-wrap gap-2">
                {tool.technologies.map((tech, index) => (
                  <TechBadge key={index} technology={tech} />
                ))}
              </div>
            </div>

            {/* Tags */}
            {tool.tags && tool.tags.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full border border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-2">
              {tool.htmlPath && (
                <a
                  href={tool.htmlPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 bg-primary/10 border border-primary text-primary rounded-lg text-sm font-semibold text-center hover:bg-primary hover:text-dark transition-all duration-300"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Abrir en nueva pestaña
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Iframe Viewer */}
        <div className="lg:col-span-3">
          <ProjectIframe tool={tool} />
        </div>
      </div>
    </div>
  );
}

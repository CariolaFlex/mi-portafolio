import { Category } from '@/types';

/**
 * BASE DE DATOS DE HERRAMIENTAS Y PROYECTOS
 *
 * Estructura:
 * - Categorías principales (con o sin subcategorías)
 * - Herramientas/Proyectos de dos tipos:
 *   1. HTML: Se muestran en iframe dentro del portafolio
 *   2. External: Redirigen a URL externa (apps en Vercel, etc.)
 *
 * Para agregar un nuevo proyecto, ver README.md sección "Agregar Herramientas"
 */

export const categories: Category[] = [
  // ============================================
  // CATEGORÍA 1: INGENIERÍA CIVIL (CON SUBCATEGORÍAS)
  // ============================================
  {
    id: "ingenieria-civil",
    name: "Herramientas de Ingeniería Civil",
    description: "Calculadoras y herramientas especializadas para ingeniería civil",
    icon: "fa-helmet-safety",
    gradient: "from-blue-500 to-cyan-500",
    hasSubcategories: true,
    subcategories: [
      {
        id: "control-gestion",
        name: "Control y Gestión de Obras",
        description: "Herramientas para gestión y control de proyectos de construcción",
        icon: "fa-clipboard-check",
        tools: [
          // Ejemplo: Proyecto HTML
          {
            id: "calc-avance-obra",
            name: "Calculadora de Avance de Obra",
            description: "Calcula porcentaje de avance, proyecciones de finalización y análisis de desviaciones en proyectos de construcción.",
            type: "html",
            htmlPath: "/herramientas/ingenieria-civil/control-gestion/calc-avance.html",
            thumbnail: "/thumbnails/calc-avance.png",
            technologies: ["HTML", "CSS", "JavaScript"],
            featured: true,
            tags: ["Destacado"]
          },
          // Ejemplo: Proyecto Externo
          {
            id: "dashboard-proyectos",
            name: "Dashboard de Gestión de Proyectos",
            description: "Sistema completo de gestión de obras con seguimiento en tiempo real, reportes automáticos y análisis de KPIs.",
            type: "external",
            externalUrl: "https://dashboard-proyectos-ejemplo.vercel.app",
            thumbnail: "/thumbnails/dashboard-proyectos.png",
            technologies: ["Next.js", "Firebase", "Tailwind", "Chart.js"],
            featured: true,
            tags: ["Nuevo", "Destacado"]
          },
          // Placeholder para más proyectos
          {
            id: "control-presupuesto",
            name: "Control de Presupuesto",
            description: "Herramienta para seguimiento y control de presupuesto de obra con alertas automáticas.",
            type: "html",
            htmlPath: "/herramientas/ingenieria-civil/control-gestion/control-presupuesto.html",
            thumbnail: "/thumbnails/placeholder.png",
            technologies: ["HTML", "CSS", "JavaScript"]
          }
        ]
      },
      {
        id: "estructuras",
        name: "Estructuras",
        description: "Calculadoras estructurales y análisis de elementos",
        icon: "fa-building",
        tools: [
          {
            id: "calc-vigas",
            name: "Calculadora de Vigas",
            description: "Cálculo de momentos, cortantes y deflexiones en vigas simplemente apoyadas y continuas.",
            type: "html",
            htmlPath: "/herramientas/ingenieria-civil/estructuras/calc-vigas.html",
            thumbnail: "/thumbnails/placeholder.png",
            technologies: ["HTML", "CSS", "JavaScript"]
          },
          {
            id: "calc-columnas",
            name: "Diseño de Columnas",
            description: "Diseño y verificación de columnas de hormigón armado según NCh430.",
            type: "html",
            htmlPath: "/herramientas/ingenieria-civil/estructuras/calc-columnas.html",
            thumbnail: "/thumbnails/placeholder.png",
            technologies: ["HTML", "CSS", "JavaScript"]
          }
        ]
      },
      {
        id: "hidraulica",
        name: "Hidráulica",
        description: "Herramientas para diseño y cálculo hidráulico",
        icon: "fa-droplet",
        tools: [
          {
            id: "calc-tuberias",
            name: "Cálculo de Tuberías",
            description: "Dimensionamiento de tuberías para agua potable y alcantarillado.",
            type: "html",
            htmlPath: "/herramientas/ingenieria-civil/hidraulica/calc-tuberias.html",
            thumbnail: "/thumbnails/placeholder.png",
            technologies: ["HTML", "CSS", "JavaScript"]
          }
        ]
      },
      {
        id: "geotecnia",
        name: "Geotecnia",
        description: "Análisis y cálculos geotécnicos",
        icon: "fa-mountain",
        tools: [
          {
            id: "calc-capacidad-portante",
            name: "Capacidad Portante",
            description: "Cálculo de capacidad portante de suelos según diferentes métodos.",
            type: "html",
            htmlPath: "/herramientas/ingenieria-civil/geotecnia/capacidad-portante.html",
            thumbnail: "/thumbnails/placeholder.png",
            technologies: ["HTML", "CSS", "JavaScript"]
          }
        ]
      },
      {
        id: "vial",
        name: "Vial",
        description: "Herramientas para diseño vial y transporte",
        icon: "fa-road",
        tools: [
          {
            id: "calc-curvas",
            name: "Diseño de Curvas Horizontales",
            description: "Cálculo de elementos de curvas circulares y de transición.",
            type: "html",
            htmlPath: "/herramientas/ingenieria-civil/vial/calc-curvas.html",
            thumbnail: "/thumbnails/placeholder.png",
            technologies: ["HTML", "CSS", "JavaScript"]
          }
        ]
      }
    ]
  },

  // ============================================
  // CATEGORÍA 2: HÁBITOS Y ORGANIZACIÓN (SIN SUBCATEGORÍAS)
  // ============================================
  {
    id: "habitos-organizacion",
    name: "Hábitos y Organización",
    description: "Apps de productividad, seguimiento de hábitos y organización personal",
    icon: "fa-calendar-check",
    gradient: "from-green-500 to-emerald-500",
    hasSubcategories: false,
    tools: [
      {
        id: "habit-tracker",
        name: "Habit Tracker",
        description: "Seguimiento diario de hábitos con estadísticas visuales y streaks motivacionales.",
        type: "html",
        htmlPath: "/herramientas/habitos-organizacion/habit-tracker.html",
        thumbnail: "/thumbnails/placeholder.png",
        technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        featured: true
      },
      {
        id: "pomodoro-app",
        name: "Pomodoro Timer Avanzado",
        description: "Timer Pomodoro con estadísticas, categorías de tareas y reportes semanales.",
        type: "external",
        externalUrl: "https://pomodoro-app-ejemplo.vercel.app",
        thumbnail: "/thumbnails/placeholder.png",
        technologies: ["React", "TypeScript", "Tailwind"],
        tags: ["Nuevo"]
      },
      {
        id: "task-manager",
        name: "Gestor de Tareas",
        description: "Sistema completo de gestión de tareas con prioridades, categorías y fechas límite.",
        type: "html",
        htmlPath: "/herramientas/habitos-organizacion/task-manager.html",
        thumbnail: "/thumbnails/placeholder.png",
        technologies: ["HTML", "CSS", "JavaScript"]
      }
    ]
  },

  // ============================================
  // CATEGORÍA 3: INFOGRAFÍAS (SIN SUBCATEGORÍAS)
  // ============================================
  {
    id: "infografias",
    name: "Infografías",
    description: "Infografías interactivas y recursos visuales educativos",
    icon: "fa-chart-simple",
    gradient: "from-purple-500 to-pink-500",
    hasSubcategories: false,
    tools: [
      {
        id: "proceso-constructivo",
        name: "Proceso Constructivo de un Edificio",
        description: "Infografía interactiva mostrando las etapas de construcción de un edificio paso a paso.",
        type: "html",
        htmlPath: "/herramientas/infografias/proceso-constructivo.html",
        thumbnail: "/thumbnails/placeholder.png",
        technologies: ["HTML", "CSS", "JavaScript", "SVG"]
      },
      {
        id: "tipos-fundaciones",
        name: "Tipos de Fundaciones",
        description: "Guía visual interactiva de diferentes tipos de fundaciones y sus aplicaciones.",
        type: "html",
        htmlPath: "/herramientas/infografias/tipos-fundaciones.html",
        thumbnail: "/thumbnails/placeholder.png",
        technologies: ["HTML", "CSS", "JavaScript"]
      }
    ]
  },

  // ============================================
  // CATEGORÍA 4: FINANZAS (SIN SUBCATEGORÍAS)
  // ============================================
  {
    id: "finanzas",
    name: "Finanzas",
    description: "Calculadoras financieras y herramientas de análisis económico",
    icon: "fa-dollar-sign",
    gradient: "from-yellow-500 to-orange-500",
    hasSubcategories: false,
    tools: [
      {
        id: "calc-interes-compuesto",
        name: "Calculadora de Interés Compuesto",
        description: "Calcula el crecimiento de inversiones con interés compuesto, aportes periódicos y proyecciones.",
        type: "html",
        htmlPath: "/herramientas/finanzas/interes-compuesto.html",
        thumbnail: "/thumbnails/placeholder.png",
        technologies: ["HTML", "CSS", "JavaScript", "Chart.js"]
      },
      {
        id: "presupuesto-personal",
        name: "Presupuesto Personal",
        description: "Herramienta para crear y seguir presupuestos mensuales con análisis de gastos.",
        type: "html",
        htmlPath: "/herramientas/finanzas/presupuesto-personal.html",
        thumbnail: "/thumbnails/placeholder.png",
        technologies: ["HTML", "CSS", "JavaScript"]
      },
      {
        id: "calculadora-roi",
        name: "Calculadora de ROI",
        description: "Calcula el retorno de inversión para proyectos y evalúa rentabilidad.",
        type: "html",
        htmlPath: "/herramientas/finanzas/calc-roi.html",
        thumbnail: "/thumbnails/placeholder.png",
        technologies: ["HTML", "CSS", "JavaScript"]
      }
    ]
  },

  // ============================================
  // CATEGORÍA 5: OTROS PROYECTOS (SIN SUBCATEGORÍAS)
  // ============================================
  {
    id: "otros",
    name: "Otros Proyectos",
    description: "Proyectos diversos y herramientas experimentales",
    icon: "fa-flask",
    gradient: "from-indigo-500 to-purple-500",
    hasSubcategories: false,
    tools: [
      {
        id: "generador-qr",
        name: "Generador de Códigos QR",
        description: "Genera códigos QR personalizados con opciones de color y tamaño.",
        type: "html",
        htmlPath: "/herramientas/otros/generador-qr.html",
        thumbnail: "/thumbnails/placeholder.png",
        technologies: ["HTML", "CSS", "JavaScript", "QRCode.js"]
      },
      {
        id: "conversor-unidades",
        name: "Conversor Universal de Unidades",
        description: "Conversor completo: longitud, masa, temperatura, área, volumen y más.",
        type: "html",
        htmlPath: "/herramientas/otros/conversor-unidades.html",
        thumbnail: "/thumbnails/placeholder.png",
        technologies: ["HTML", "CSS", "JavaScript"]
      }
    ]
  }
];

/**
 * FUNCIONES HELPER PARA NAVEGACIÓN
 */

// Obtener categoría por ID
export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find(cat => cat.id === categoryId);
}

// Obtener subcategoría por ID
export function getSubcategoryById(categoryId: string, subcategoryId: string) {
  const category = getCategoryById(categoryId);
  if (!category?.hasSubcategories || !category.subcategories) return undefined;
  return category.subcategories.find(sub => sub.id === subcategoryId);
}

// Obtener herramienta por ID
export function getToolById(categoryId: string, subcategoryId: string | null, toolId: string) {
  const category = getCategoryById(categoryId);
  if (!category) return undefined;

  if (category.hasSubcategories && subcategoryId) {
    const subcategory = getSubcategoryById(categoryId, subcategoryId);
    return subcategory?.tools.find(tool => tool.id === toolId);
  } else if (!category.hasSubcategories && category.tools) {
    return category.tools.find(tool => tool.id === toolId);
  }

  return undefined;
}

// Contar total de herramientas en una categoría
export function countToolsInCategory(category: Category): number {
  if (category.hasSubcategories && category.subcategories) {
    return category.subcategories.reduce((sum, sub) => sum + sub.tools.length, 0);
  } else if (category.tools) {
    return category.tools.length;
  }
  return 0;
}

// Obtener herramientas destacadas
export function getFeaturedTools(): { category: Category; tool: any }[] {
  const featured: { category: Category; tool: any }[] = [];

  categories.forEach(category => {
    if (category.hasSubcategories && category.subcategories) {
      category.subcategories.forEach(subcategory => {
        subcategory.tools
          .filter(tool => tool.featured)
          .forEach(tool => featured.push({ category, tool }));
      });
    } else if (category.tools) {
      category.tools
        .filter(tool => tool.featured)
        .forEach(tool => featured.push({ category, tool }));
    }
  });

  return featured;
}

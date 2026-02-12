// Tipos para el portafolio

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  stats: {
    value: string;
    label: string;
  }[];
  links?: {
    demo?: string;
    github?: string;
    live?: string;
  };
  isPlaceholder?: boolean;
  modalContent?: ProjectModalContent;
}

export interface ProjectModalContent {
  hasModal: boolean;
  dashboardData?: DashboardData;
  figures?: Figure[];
}

export interface DashboardData {
  title: string;
  subtitle: string;
  stats: StatBox[];
  charts: ChartConfig[];
  flows: FlowTab[];
}

export interface StatBox {
  title: string;
  value: string;
  trend: string;
  icon: string;
}

export interface ChartConfig {
  id: string;
  title: string;
  type: 'line' | 'bar' | 'doughnut' | 'pie';
  data: any;
}

export interface FlowTab {
  id: number;
  title: string;
  content: 'architecture' | 'placeholder';
}

export interface Figure {
  section: string;
  title: string;
  description: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  social: {
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  availableForWork: boolean;
  stats: {
    value: string;
    label: string;
  }[];
  profileImage: string;
  logo: string;
}

// ============================================
// TIPOS PARA SISTEMA DE HERRAMIENTAS
// ============================================

export type ProjectType = 'html' | 'external';

export interface Tool {
  id: string;
  name: string;
  description: string;
  type: ProjectType;

  // Si type === 'html'
  htmlPath?: string;              // ej: "/herramientas/ingenieria-civil/estructuras/calc-vigas.html"

  // Si type === 'external'
  externalUrl?: string;           // ej: "https://mi-app.vercel.app"

  // Común para ambos
  thumbnail: string;              // ruta a imagen
  technologies: string[];         // ["HTML", "CSS", "JS"] o ["Next.js", "Firebase"]
  featured?: boolean;             // destacar en home
  tags?: string[];                // Tags adicionales: "Nuevo", "Destacado", etc.
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  icon: string;                   // Font Awesome icon
  tools: Tool[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;               // Gradiente de color para la card
  hasSubcategories: boolean;      // true si tiene subcategorías

  // Si hasSubcategories === true
  subcategories?: Subcategory[];

  // Si hasSubcategories === false
  tools?: Tool[];
}

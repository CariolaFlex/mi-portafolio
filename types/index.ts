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

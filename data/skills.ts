import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    id: "mobile-dev",
    name: "Desarrollo Móvil Multiplataforma",
    icon: "fa-mobile-screen",
    skills: [
      {
        name: "Flutter",
        description: "Arquitectura offline-first, state management (Provider/Riverpod), sincronización cloud",
        level: "expert"
      },
      {
        name: "Apps Publicadas",
        description: "Google Play Store con suscripciones (RevenueCat + Stripe), autenticación multi-provider",
        level: "expert"
      },
      {
        name: "Bases de Datos Locales",
        description: "SQLite, sincronización bidireccional",
        level: "advanced"
      }
    ]
  },
  {
    id: "web-fullstack",
    name: "Desarrollo Web Full-Stack",
    icon: "fa-code",
    skills: [
      {
        name: "Next.js 14+",
        description: "App Router, TypeScript, Tailwind, SSR, Edge Computing",
        level: "expert"
      },
      {
        name: "Despliegues Profesionales",
        description: "Vercel CI/CD, Firebase/Supabase, APIs RESTful",
        level: "expert"
      },
      {
        name: "Plataformas SaaS",
        description: "Dashboards empresariales, autenticación, procesamiento de datos",
        level: "advanced"
      }
    ]
  },
  {
    id: "backend-cloud",
    name: "Backend & Cloud Infrastructure",
    icon: "fa-cloud",
    skills: [
      {
        name: "Firebase/GCP",
        description: "Firestore, Auth, Storage, Cloud Functions, hosting",
        level: "expert"
      },
      {
        name: "Arquitecturas Serverless",
        description: "Eventos, integraciones, reglas de seguridad",
        level: "advanced"
      },
      {
        name: "Modelado NoSQL",
        description: "Optimización de queries, estructuras escalables",
        level: "advanced"
      }
    ]
  },
  {
    id: "devops",
    name: "DevOps & Herramientas Profesionales",
    icon: "fa-gears",
    skills: [
      {
        name: "Git/GitHub Enterprise",
        description: "Feature branches, PRs, code reviews, releases",
        level: "expert"
      },
      {
        name: "VS Code Avanzado",
        description: "ESLint, Prettier, Type checking, extensiones",
        level: "expert"
      },
      {
        name: "Perplexity Pro + Claude",
        description: "Arquitectura de soluciones, desarrollo asistido por IA",
        level: "expert"
      }
    ]
  },
  {
    id: "ai-automation",
    name: "IA & Automatización",
    icon: "fa-robot",
    skills: [
      {
        name: "Integración LLM",
        description: "Claude, GPT, Gemini en flujos productivos",
        level: "advanced"
      },
      {
        name: "Prompting Avanzado",
        description: "Code generation, análisis técnico, documentación",
        level: "expert"
      },
      {
        name: "Google Apps Script",
        description: "Automatizaciones, Colab, conectores cloud",
        level: "advanced"
      }
    ]
  },
  {
    id: "civil-engineering",
    name: "Ingeniería Civil (Especialidad: Gestión)",
    icon: "fa-helmet-safety",
    skills: [
      {
        name: "Gestión de Proyectos",
        description: "Administración y control de obras",
        level: "expert"
      },
      {
        name: "Estructuras",
        description: "Análisis y diseño estructural",
        level: "advanced"
      },
      {
        name: "Geotecnia",
        description: "Mecánica de suelos, cimentaciones",
        level: "intermediate"
      },
      {
        name: "Hidráulica & Vial",
        description: "Fluidos, hidrología, diseño vial",
        level: "intermediate"
      }
    ]
  }
];

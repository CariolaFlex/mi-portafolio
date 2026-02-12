import { Project } from '@/types';
import { evoNeuroFigures } from './evoneuro-figures';

export const projects: Project[] = [
  {
    id: "evoneuro",
    title: "EvoNeuro Clinic System",
    description: "Sistema integral de transformación digital para clínicas. Incluye admisión de pacientes, gestión de historiales médicos y prescripción inteligente con IA.",
    tech: ["React", "Node.js", "AI Integration"],
    image: "https://i.postimg.cc/fWV1NHQx/1.png",
    stats: [
      { value: "99%", label: "Eficiencia" },
      { value: "600k", label: "Pacientes" },
      { value: "Auto", label: "Procesos" }
    ],
    links: {
      demo: "#"
    },
    modalContent: {
      hasModal: true,
      dashboardData: {
        title: "EvoNeuro Clinic System",
        subtitle: "INTEGRATED PATIENT MANAGEMENT PLATFORM",
        stats: [
          { title: "Tiempo Ahorrado", value: "99.2%", trend: "vs Manual", icon: "arrow-up" },
          { title: "Pacientes", value: "600k+", trend: "Activos", icon: "users" },
          { title: "Recetas/Mes", value: "15k", trend: "Procesadas", icon: "file-medical" },
          { title: "Uptime", value: "99.9%", trend: "AWS Cloud", icon: "server" }
        ],
        charts: [
          {
            id: "efficiencyChart",
            title: "Análisis de Eficiencia: Manual vs IA",
            type: "line",
            data: {
              labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
              datasets: [
                {
                  label: 'Tiempo Proceso Manual (min)',
                  data: [45, 48, 42, 50, 47, 45],
                  borderColor: '#ef4444',
                  tension: 0.4
                },
                {
                  label: 'Tiempo con EvoNeuro (min)',
                  data: [2, 1.5, 2, 1.8, 1.5, 1.2],
                  borderColor: '#00d9ff',
                  backgroundColor: 'rgba(0, 217, 255, 0.1)',
                  fill: true,
                  tension: 0.4
                }
              ]
            }
          },
          {
            id: "loadChart",
            title: "Distribución de Carga",
            type: "doughnut",
            data: {
              labels: ['Admisión', 'Clínica', 'Farmacia'],
              datasets: [{
                data: [30, 45, 25],
                backgroundColor: ['#7c3aed', '#00d9ff', '#10b981'],
                borderWidth: 0
              }]
            }
          }
        ],
        flows: [
          { id: 1, title: "Flujo 1: Registro & Admisión", content: "architecture" },
          { id: 2, title: "Flujo 2: Gestión Clínica", content: "placeholder" }
        ]
      },
      figures: evoNeuroFigures
    }
  },
  {
    id: "uberpro",
    title: "UberPro",
    description: "Sistema avanzado de gestión y optimización. Próximamente más detalles sobre esta implementación de automatización.",
    tech: ["Google Sheets", "Apps Script", "Dashboard"],
    image: "https://via.placeholder.com/400x200/1a2332/7c3aed?text=UberPro",
    stats: [
      { value: "New", label: "Proyecto" },
      { value: "AI", label: "Powered" },
      { value: "Cloud", label: "System" }
    ],
    modalContent: {
      hasModal: false
    }
  },
  // Placeholders para futuros proyectos
  {
    id: "placeholder-1",
    title: "Nuevo Proyecto",
    description: "Espacio reservado para futura implementación",
    tech: [],
    image: "",
    stats: [],
    isPlaceholder: true
  },
  {
    id: "placeholder-2",
    title: "Nuevo Proyecto",
    description: "",
    tech: [],
    image: "",
    stats: [],
    isPlaceholder: true
  },
  {
    id: "placeholder-3",
    title: "Nuevo Proyecto",
    description: "",
    tech: [],
    image: "",
    stats: [],
    isPlaceholder: true
  },
  {
    id: "placeholder-4",
    title: "Nuevo Proyecto",
    description: "",
    tech: [],
    image: "",
    stats: [],
    isPlaceholder: true
  },
  {
    id: "placeholder-5",
    title: "Nuevo Proyecto",
    description: "",
    tech: [],
    image: "",
    stats: [],
    isPlaceholder: true
  },
  {
    id: "placeholder-6",
    title: "Nuevo Proyecto",
    description: "",
    tech: [],
    image: "",
    stats: [],
    isPlaceholder: true
  }
];

'use client';

import { useEffect, useState } from 'react';
import { Project, Figure } from '@/types';
import Image from 'next/image';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeFlow, setActiveFlow] = useState(1);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project || !project.modalContent?.hasModal) return null;

  const { dashboardData, figures } = project.modalContent;

  // Configuración de gráficos
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#fff'
        }
      }
    },
    scales: {
      y: {
        grid: { color: '#334155' },
        ticks: { color: '#94a3b8' }
      },
      x: {
        grid: { color: '#334155' },
        ticks: { color: '#94a3b8' }
      }
    }
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: { color: '#fff' }
      }
    }
  };

  // Agrupar figuras por sección
  const groupedFigures: { [key: string]: Figure[] } = {};
  figures?.forEach((fig) => {
    if (!groupedFigures[fig.section]) {
      groupedFigures[fig.section] = [];
    }
    groupedFigures[fig.section].push(fig);
  });

  return (
    <>
      {/* Modal Overlay */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/95 z-[2000] overflow-y-auto py-8 px-0 animate-[fadeIn_0.3s_ease]"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Modal Content */}
        <div className="bg-dark rounded-2xl max-w-[1400px] mx-auto my-8 relative animate-[slideUp_0.3s_ease] border border-border shadow-[0_0_50px_rgba(0,0,0,0.8)] min-h-[80vh]">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/10 border-none text-white w-10 h-10 rounded-full text-2xl cursor-pointer transition-all duration-300 hover:bg-danger hover:rotate-90 flex items-center justify-center z-[100]"
          >
            <i className="fas fa-times"></i>
          </button>

          {/* Dashboard Container */}
          <div className="p-8">
            {/* Dashboard Header */}
            {dashboardData && (
              <>
                <div className="text-center mb-8 border-b border-border pb-4">
                  <h2 className="text-4xl font-extrabold text-white mb-2">
                    {dashboardData.title}
                  </h2>
                  <p className="text-primary font-mono text-lg tracking-wider">
                    {dashboardData.subtitle}
                  </p>
                </div>

                {/* Module Selector (Tabs) */}
                {dashboardData.flows && (
                  <div className="flex justify-center gap-4 mb-6">
                    {dashboardData.flows.map((flow) => (
                      <button
                        key={flow.id}
                        onClick={() => setActiveFlow(flow.id)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                          activeFlow === flow.id
                            ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-[0_5px_15px_rgba(0,217,255,0.3)]'
                            : 'bg-transparent border border-border text-text-muted hover:border-primary hover:text-white'
                        }`}
                      >
                        {flow.title}
                      </button>
                    ))}
                  </div>
                )}

                {/* Flow 1 Content */}
                {activeFlow === 1 && (
                  <div>
                    {/* Stats Panel */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                      {dashboardData.stats?.map((stat, index) => (
                        <div
                          key={index}
                          className="bg-dark-lighter p-6 rounded-xl border border-border relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-primary"
                        >
                          <h3 className="text-sm text-text-muted uppercase tracking-wide mb-2">
                            {stat.title}
                          </h3>
                          <div className="text-4xl font-extrabold text-white">
                            {stat.value}
                          </div>
                          <div className="text-sm text-accent flex items-center gap-1 mt-2">
                            <i className={`fas fa-${stat.icon}`}></i>
                            {stat.trend}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Charts Area */}
                    {dashboardData.charts && dashboardData.charts.length > 0 && (
                      <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {dashboardData.charts.map((chart) => (
                          <div
                            key={chart.id}
                            className="bg-dark-lighter p-6 rounded-xl border border-border"
                          >
                            <h3 className="text-white mb-4 text-lg">{chart.title}</h3>
                            {chart.type === 'line' && (
                              <Line data={chart.data} options={chartOptions} />
                            )}
                            {chart.type === 'doughnut' && (
                              <Doughnut data={chart.data} options={doughnutOptions} />
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Architecture Section */}
                    <div className="mt-16">
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold text-white mb-2">
                          Arquitectura del Sistema (Flujo 1)
                        </h2>
                        <p className="text-sm text-text-muted">
                          Desglose visual de los 49 nodos lógicos del sistema de admisión.
                        </p>
                      </div>

                      {/* Architecture Grid by Sections */}
                      {Object.entries(groupedFigures).map(([section, sectionFigures]) => (
                        <div key={section}>
                          {/* Section Divider */}
                          <div className="flex items-center gap-4 my-12">
                            <div className="h-px bg-border flex-grow"></div>
                            <span className="bg-dark-card border border-primary text-primary px-6 py-2 rounded-full font-bold">
                              {section}
                            </span>
                            <div className="h-px bg-border flex-grow"></div>
                          </div>

                          {/* Cards Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sectionFigures.map((fig, index) => {
                              const figNumber = figures?.indexOf(fig)! + 1;
                              return (
                                <div
                                  key={index}
                                  className="bg-dark-lighter border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_10px_30px_rgba(0,217,255,0.15)] flex flex-col"
                                >
                                  {/* Image Container */}
                                  <div
                                    className="h-[180px] overflow-hidden relative border-b border-border cursor-zoom-in"
                                    onClick={() => setLightboxImage(fig.image)}
                                  >
                                    <Image
                                      src={fig.image}
                                      alt={fig.title}
                                      fill
                                      className="object-cover transition-transform duration-500 hover:scale-110"
                                      loading="lazy"
                                    />
                                    <span className="absolute top-2 right-2 bg-black/80 text-primary px-2 py-1 rounded text-xs font-mono border border-border">
                                      FIG {figNumber.toString().padStart(2, '0')}
                                    </span>
                                  </div>

                                  {/* Card Body */}
                                  <div className="p-5">
                                    <div className="text-lg font-bold text-white mb-2">
                                      {fig.title}
                                    </div>
                                    <div className="text-sm text-text-muted">
                                      {fig.description}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Flow 2 Content - Placeholder */}
                {activeFlow === 2 && (
                  <div className="py-16 text-center">
                    <div className="bg-dark-lighter p-12 rounded-2xl border border-dashed border-border inline-block">
                      <i className="fas fa-code-branch text-6xl text-primary mb-4 block"></i>
                      <h3 className="text-white text-2xl mb-2">Módulo de Gestión Clínica</h3>
                      <p className="text-text-muted mb-4">
                        Este flujo detallará la interacción médico-paciente y la generación de recetas electrónicas.
                      </p>
                      <p className="text-accent text-sm">Próxima Actualización</p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox para imágenes */}
      {lightboxImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/98 z-[3000] flex justify-center items-center animate-[fadeIn_0.2s]"
          onClick={() => setLightboxImage(null)}
        >
          <span
            className="absolute top-8 right-8 text-white text-4xl cursor-pointer transition-colors duration-300 hover:text-primary"
            onClick={() => setLightboxImage(null)}
          >
            &times;
          </span>
          <div className="relative max-w-[90%] max-h-[90vh]">
            <Image
              src={lightboxImage}
              alt="Full Screen View"
              width={1200}
              height={800}
              className="rounded-lg shadow-[0_0_50px_rgba(0,217,255,0.2)] border border-border object-contain"
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

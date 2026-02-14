'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { Project } from '@/types';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    if (project.modalContent?.hasModal) {
      setSelectedProject(project);
    }
  };

  return (
    <>
      <section id="proyectos" className="py-20 px-8 bg-gradient-to-b from-dark to-dark-lighter">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease]">
            <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Portafolio de Proyectos
            </h2>
            <p className="text-text-muted text-lg max-w-[600px] mx-auto">
              Sistemas que combinan la robustez de la ingeniería con el poder de la Inteligencia Artificial.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className={`bg-dark-card rounded-2xl overflow-hidden border border-border transition-all duration-300 cursor-pointer flex flex-col ${
                  project.isPlaceholder
                    ? 'opacity-60 border-dashed justify-center items-center min-h-[300px] hover:opacity-80'
                    : 'hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,217,255,0.2)] hover:border-primary'
                }`}
              >
                {project.isPlaceholder ? (
                  <div className="text-center p-8">
                    <div className="text-6xl text-border mb-4">
                      <i className="fas fa-plus-circle"></i>
                    </div>
                    <h3 className="text-xl font-bold text-text-muted">{project.title}</h3>
                    {project.description && (
                      <p className="text-text-muted mt-2">{project.description}</p>
                    )}
                  </div>
                ) : (
                  <>
                    {/* Project Image */}
                    <div className="relative w-full h-[200px] bg-gradient-to-br from-dark-lighter to-dark overflow-hidden">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                        />
                      )}

                      {/* Tech Badges */}
                      <div className="absolute top-4 right-4 flex gap-2 flex-wrap justify-end">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-black/80 text-primary px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 relative z-10 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-text mb-3">
                        {project.title}
                      </h3>
                      <p className="text-text-muted text-sm mb-6 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      {/* Project Stats */}
                      {project.stats && project.stats.length > 0 && (
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {project.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                              <span className="block text-xl font-bold text-primary">
                                {stat.value}
                              </span>
                              <span className="block text-xs text-text-muted mt-1">
                                {stat.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Project Links */}
                      <div className="flex gap-3">
                        {project.modalContent?.hasModal ? (
                          <button
                            className="flex-1 px-3 py-3 bg-primary/10 border border-primary rounded-lg text-primary text-sm font-semibold transition-all duration-300 hover:bg-primary hover:text-dark flex items-center justify-center gap-2"
                            onClick={() => handleProjectClick(project)}
                          >
                            <i className="fas fa-eye"></i>
                            Ver Demo & Dashboard
                          </button>
                        ) : (
                          <span className="flex-1 px-3 py-3 bg-primary/10 border border-primary rounded-lg text-primary text-sm font-semibold text-center flex items-center justify-center gap-2">
                            <i className="fas fa-clock"></i>
                            Próximamente
                          </span>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

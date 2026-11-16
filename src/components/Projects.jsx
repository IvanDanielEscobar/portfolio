"use client";

import { useState } from "react";
import { projectsData } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { IconArrowRight, IconEye, IconArrowUpRight, IconGitHub, IconLock, TechIcon } from "./Icons";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", label: "Todos" },
    { id: "personal", label: "Proyectos Personales" },
    { id: "educational", label: "Proyectos Educacionales" },
    { id: "terceros", label: "Proyectos para Terceros" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.type === activeCategory);

  return (
    <section id="proyectos" className="py-28 sm:py-32 relative overflow-hidden bg-[#07080c]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              Portafolio de Software
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Mis Proyectos
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
              Selección de sistemas y aplicaciones desarrolladas con foco en arquitectura,
              rendimiento y soluciones reales.
            </p>
          </div>

          <div className="hidden lg:block text-right font-mono text-xs text-zinc-400">
            <span className="text-emerald-400 block font-semibold">
              Proyectos Personales • Educacionales • Terceros
            </span>
            <span>Desarrollo Frontend, Backend & Despliegues</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-3 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-white/10 text-white border border-white/20 shadow-sm"
                  : "bg-transparent text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center glass-card rounded-3xl border border-white/5">
            <p className="text-zinc-400 font-mono text-sm">
              No hay proyectos registrados en esta categoría por el momento.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between h-full group border border-white/10 hover:border-emerald-500/30 relative overflow-hidden transition-all duration-300"
              >
                {/* Title & Subtitle con alturas estandarizadas para alineación perfecta */}
                <div className="mb-6">
                  <div className="min-h-[3.25rem] flex items-start">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight line-clamp-2 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <div className="min-h-[2.5rem] flex items-start mt-2">
                    <p className="text-xs sm:text-sm font-mono text-zinc-400 leading-relaxed line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Tech Icons & Card Actions */}
                <div className="flex flex-col justify-between flex-1 mt-auto">
                  {/* Technology SVG Icons con altura uniforme */}
                  <div className="min-h-[4.75rem] flex flex-wrap content-start items-center gap-2 mb-6">
                    {project.badges.map((badge, idx) => (
                      <div
                        key={idx}
                        className="group/tech relative p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/10 text-zinc-400 hover:text-emerald-300 transition-all flex items-center justify-center shadow-sm"
                        title={badge}
                      >
                        <TechIcon name={badge} className="w-4 h-4" />
                        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 border border-white/15 rounded-md text-[10px] text-zinc-200 opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap z-20 shadow-xl font-mono">
                          {badge}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Action Bar uniforme y balanceado */}
                  <div className="flex items-center gap-2 pt-4 border-t border-white/10 mt-auto">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 min-w-0 flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-white/[0.04] group-hover:bg-emerald-500/15 border border-white/10 group-hover:border-emerald-500/30 text-xs font-medium text-zinc-200 group-hover:text-emerald-300 transition-all shadow-sm"
                    >
                      <IconEye className="w-4 h-4 shrink-0" />
                      <span className="truncate">Ver detalles</span>
                    </button>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all shadow-sm shadow-emerald-500/20 active:scale-95 shrink-0"
                        title="Ver proyecto en vivo"
                      >
                        <span>Ver proyecto</span>
                        <IconArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    )}

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/10 transition-all active:scale-95 shrink-0"
                        title="Ver repositorio en GitHub"
                        aria-label="Ver repositorio en GitHub"
                      >
                        <IconGitHub className="w-4 h-4" />
                      </a>
                    )}

                    {!project.demoUrl && project.isPrivate && (
                      <span
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/[0.02] border border-white/5 text-zinc-500 text-xs font-mono shrink-0 select-none"
                        title="Código en repositorio privado"
                      >
                        <IconLock className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Privado</span>
                      </span>
                    )}

                    {!project.demoUrl && !project.repoUrl && !project.isPrivate && (
                      <span
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/[0.02] border border-white/5 text-zinc-500 text-xs font-mono shrink-0 select-none"
                        title={project.typeLabel || "Educacional"}
                      >
                        <span>Educacional</span>
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

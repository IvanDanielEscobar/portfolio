"use client";

import { useState } from "react";
import { projectsData } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { IconArrowRight, IconEye, IconSparkles, IconArrowUpRight } from "./Icons";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", label: "Todos (5)" },
    { id: "saas", label: "Backend & Django (2)" },
    { id: "fintech", label: "Next.js & APIs (1)" },
    { id: "ecommerce", label: "E-Commerce (1)" },
    { id: "frontend", label: "Frontend & React (1)" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-24 relative overflow-hidden bg-[#07080c]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              Mis aplicaciones
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Mis Proyectos Personales
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-2xl">
              Aplicaciones que construí para poner a prueba lo aprendido en la carrera,
              explorar nuevas tecnologías y resolver necesidades concretas.
            </p>
          </div>

          <div className="hidden lg:block text-right font-mono text-xs text-zinc-400">
            <span className="text-emerald-400 block font-semibold">5 Proyectos de práctica real</span>
            <span>Frontend, Backend y Despliegue con Docker</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/5">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between group border border-white/10 relative overflow-hidden"
            >
              {/* Card top banner */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-zinc-300">
                  {project.categoryLabel}
                </span>

                <div className="flex items-center gap-1.5">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-mono text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 px-2.5 py-0.5 rounded-full border border-cyan-500/30 transition-colors"
                      title="Ver aplicación en vivo en Netlify"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                      <span>Demo en vivo</span>
                      <IconArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  {project.featured && !project.demoUrl && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <IconSparkles className="w-3 h-3" />
                      Destacado
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mb-3 line-clamp-1">
                  {project.subtitle}
                </p>
                <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
              </div>

              {/* Tech Badges */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.badges.slice(0, 4).map((badge, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-zinc-400 border border-white/5"
                    >
                      {badge}
                    </span>
                  ))}
                  {project.badges.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-zinc-400">
                      +{project.badges.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/[0.04] group-hover:bg-emerald-500/15 border border-white/10 group-hover:border-emerald-500/30 text-xs font-medium text-zinc-200 group-hover:text-emerald-300 transition-all"
                  >
                    <IconEye className="w-4 h-4" />
                    <span>Ver detalles</span>
                    <IconArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all shadow-sm shadow-emerald-500/20 active:scale-95 shrink-0"
                      title="Abrir aplicación en vivo"
                    >
                      <span>Demo</span>
                      <IconArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
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

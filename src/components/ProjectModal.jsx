"use client";

import { useEffect } from "react";
import { IconClose, IconArrowUpRight, IconGitHub, IconFileText, IconLock, TechIcon } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl my-8 glass-card border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 z-10 max-h-[90vh] overflow-y-auto bg-[#0d0f17]">
        {/* Header bar */}
        <div className="flex items-start justify-between gap-4 mb-6 border-b border-white/10 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono mb-2.5">
              {project.typeLabel || "Proyecto"}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">{project.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Cerrar ventana"
          >
            <IconClose className="w-6 h-6" />
          </button>
        </div>

        {/* Tech Stack Row */}
        {project.badges && project.badges.length > 0 && (
          <div className="mb-6">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Tecnologías Utilizadas
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-zinc-300"
                >
                  <TechIcon name={badge} className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-[11px]">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Description */}
        <div className="space-y-6 text-sm text-zinc-300 my-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
              Descripción del Proyecto
            </h4>
            <p className="leading-relaxed text-zinc-200 bg-white/[0.02] p-5 sm:p-6 rounded-2xl border border-white/5 text-sm sm:text-base font-normal">
              {project.description}
            </p>
          </div>
        </div>

        {/* Footer Links & Actions */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all shadow-md shadow-emerald-500/20 active:scale-95"
              >
                <span>{project.demoLabel || "Ver Proyecto en Vivo"}</span>
                <IconArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.apiUrl && (
              <a
                href={project.apiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-medium text-xs border border-cyan-500/30 transition-all active:scale-95"
              >
                <span>API REST & Swagger</span>
                <IconArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.docsUrl && (
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 font-medium text-xs border border-purple-500/30 transition-all active:scale-95"
              >
                <IconFileText className="w-3.5 h-3.5" />
                <span>Documento de Diseño UX</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white font-medium text-xs border border-white/10 transition-all active:scale-95"
              >
                <IconGitHub className="w-4 h-4" />
                <span>{project.repoBackendUrl ? "GitHub (Frontend)" : "Ver Código en GitHub"}</span>
              </a>
            )}
            {project.repoBackendUrl && (
              <a
                href={project.repoBackendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white font-medium text-xs border border-white/10 transition-all active:scale-95"
              >
                <IconGitHub className="w-4 h-4" />
                <span>GitHub (Backend API)</span>
              </a>
            )}
            {project.isPrivate && (
              <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-zinc-400 font-mono text-xs">
                <IconLock className="w-3.5 h-3.5 text-zinc-400" />
                <span>Repositorio Privado</span>
              </div>
            )}
            <span className="font-mono text-zinc-400 hidden sm:inline">
              {project.typeLabel || "Proyecto"} • Ivan Daniel Escobar
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

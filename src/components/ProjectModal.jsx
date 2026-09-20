"use client";

import { useEffect } from "react";
import {
  IconClose,
  IconCheckCircle,
  IconCpu,
  IconLayers,
  IconShield,
} from "./Icons";

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
      <div className="relative w-full max-w-3xl my-8 glass-card border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 z-10 max-h-[90vh] overflow-y-auto bg-[#0d0f17]">
        {/* Header bar */}
        <div className="flex items-start justify-between gap-4 mb-6 border-b border-white/10 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono mb-2">
              {project.categoryLabel}
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

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.badges.map((badge, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-white/[0.05] border border-white/10 text-zinc-300"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Modal Sections */}
        <div className="space-y-8 text-sm text-zinc-300">
          {/* Section 1: Motivation */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2.5">
              <IconShield className="w-4 h-4" />
              ¿Por qué lo creé & Qué problema quise resolver?
            </h4>
            <p className="leading-relaxed text-zinc-300 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
              {project.motivation}
            </p>
          </div>

          {/* Section 2: How It Works */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2.5">
              <IconCpu className="w-4 h-4" />
              ¿Cómo funciona por dentro?
            </h4>
            <p className="leading-relaxed text-zinc-300 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
              {project.howItWorks}
            </p>
          </div>

          {/* Section 3: Learnings & Challenges */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-3">
              <IconLayers className="w-4 h-4" />
              Lo que aprendí desarrollándolo (Desafíos Técnicos)
            </h4>
            <div className="space-y-2.5">
              {project.learnings.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 shrink-0"></span>
                  <p className="text-xs text-zinc-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Funcionalidades que implementé
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5"
                >
                  <IconCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
              
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium transition-colors"
          >
            Cerrar Ficha
          </button>
        </div>
      </div>
    </div>
  );
}

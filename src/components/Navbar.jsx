"use client";

import { useState, useEffect } from "react";
import { personalData } from "@/data/portfolioData";
import { IconMenu, IconClose, IconSparkles, IconGitHub, IconDownload } from "./Icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Mi Historia", href: "#sobre-mi" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Herramientas", href: "#habilidades" },
    { name: "Experiencia", href: "#trayectoria" },
    { name: "Estudios", href: "#educacion" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3.5 shadow-lg shadow-black/40" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#inicio"
          className="group flex items-center gap-3 text-zinc-100 hover:text-emerald-400 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-400 group-hover:border-emerald-400/60 group-hover:scale-105 transition-all shadow-sm shadow-emerald-500/10">
            IE
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-zinc-100 group-hover:text-emerald-400 transition-colors">
              Ivan Daniel Escobar
            </span>
            <span className="text-[11px] text-zinc-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-status-pulse inline-block"></span>
              Desarrollo de Software Full Stack
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={personalData.contact.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="CV-Ivan-Escobar.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all"
            title="Descargar CV"
          >
            <IconDownload className="w-3.5 h-3.5 text-emerald-400" />
            <span>CV</span>
          </a>

          <a
            href={personalData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all"
            title="Perfil de GitHub"
            aria-label="GitHub"
          >
            <IconGitHub className="w-4 h-4" />
          </a>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 rounded-xl transition-all shadow-sm hover:shadow-emerald-500/20 active:scale-95"
          >
            <IconSparkles className="w-3.5 h-3.5" />
            ¡Contacto!
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-white/10 px-6 py-5 mt-2 transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-emerald-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href={personalData.contact.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="CV-Ivan-Escobar.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-200 bg-white/[0.05] border border-white/10 rounded-xl"
              >
                <IconDownload className="w-4 h-4 text-emerald-400" />
                Descargar CV (PDF)
              </a>
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-300 bg-white/[0.03] border border-white/10 rounded-xl"
              >
                <IconGitHub className="w-4 h-4" />
                Ver GitHub
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-xl"
              >
                <IconSparkles className="w-4 h-4" />
                Contactar a Ivan
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

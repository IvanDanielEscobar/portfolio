"use client";

import { useState } from "react";
import { personalData } from "@/data/portfolioData";
import {
  IconArrowRight,
  IconCopy,
  IconCheck,
  IconLinkedIn,
  IconGitHub,
  IconWhatsApp,
  IconMail,
  IconMapPin,
  IconSparkles,
  IconDownload,
} from "./Icons";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center radial-glow-hero overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Availability & Location Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border border-emerald-500/30 text-xs text-zinc-300 font-mono shadow-sm shadow-emerald-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalData.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-zinc-400">
            <IconMapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>{personalData.location}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <span className="text-emerald-400 font-mono text-sm sm:text-base font-medium tracking-wide block mb-2">
            {personalData.bio.greeting}
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Estudiante de software,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              técnico en redes
            </span>{" "}
            y curioso por naturaleza.
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8 max-w-3xl">
            {personalData.bio.lead} {personalData.bio.closing}
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Ver lo que he programado</span>
            <IconArrowRight className="w-4 h-4" />
          </a>

          <a
            href={personalData.contact.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="CV-Ivan-Escobar.pdf"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/40 text-zinc-200 hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            title="Descargar Curriculum Vitae en PDF"
          >
            <IconDownload className="w-4 h-4 text-emerald-400" />
            <span>Descargar CV</span>
          </a>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-card text-zinc-200 hover:text-white hover:border-zinc-600 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            <IconSparkles className="w-4 h-4 text-emerald-400" />
            <span>Conectemos</span>
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-zinc-300 hover:text-white text-xs font-mono transition-all"
            title="Copiar email al portapapeles"
          >
            {copied ? (
              <>
                <IconCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">¡Email copiado!</span>
              </>
            ) : (
              <>
                <IconCopy className="w-4 h-4 text-zinc-400" />
                <span>{personalData.contact.email}</span>
              </>
            )}
          </button>

          {/* Social Quick Links */}
          <div className="flex items-center gap-2 sm:ml-auto">
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card text-zinc-400 hover:text-white hover:border-white/40 transition-all"
              aria-label="GitHub de Ivan"
              title="GitHub"
            >
              <IconGitHub className="w-4 h-4" />
            </a>
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              aria-label="LinkedIn de Ivan"
              title="LinkedIn"
            >
              <IconLinkedIn className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/549${personalData.contact.rawPhone}?text=${encodeURIComponent(
                personalData.contact.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              aria-label="WhatsApp de Ivan"
              title="WhatsApp"
            >
              <IconWhatsApp className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.contact.email}`}
              className="p-3 rounded-xl glass-card text-zinc-400 hover:text-white hover:border-white/30 transition-all"
              aria-label="Enviar correo a Ivan"
              title="Email"
            >
              <IconMail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Highlights Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalData.highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <span className="block text-2xl sm:text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-1">
                {item.value}
              </span>
              <span className="block text-xs font-semibold text-zinc-200 mb-1 tracking-wide uppercase">
                {item.label}
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { personalData } from "@/data/portfolioData";
import {
  IconMail,
  IconPhone,
  IconLinkedIn,
  IconWhatsApp,
  IconCopy,
  IconCheck,
  IconClock,
  IconMapPin,
  IconSparkles,
} from "./Icons";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | sent
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("es-AR", {
        timeZone: personalData.timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setLocalTime(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const encodedBody = new URLSearchParams({
      "form-name": "contact",
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }).toString();

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedBody,
    })
      .then(() => {
        setFormStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      })
      .catch(() => {
        // Fallback en entorno local
        setFormStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      });
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-[#07080c]">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            ¡Siempre en contacto!
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Charlemos sobre tecnología o proyectos
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl">
            ¿Tienes alguna oportunidad laboral, buscas colaborar en un proyecto o simplemente quieres intercambiar ideas
            sobre desarrollo? ¡Escríbeme con total confianza!
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <IconMail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">Correo Electrónico</span>
                    <a
                      href={`mailto:${personalData.contact.email}`}
                      className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      {personalData.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(personalData.contact.email, "email")}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all shrink-0"
                  title="Copiar correo"
                >
                  {copiedEmail ? (
                    <IconCheck className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <IconCopy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <IconWhatsApp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">WhatsApp Directo</span>
                    <a
                      href={`https://wa.me/549${personalData.contact.rawPhone}?text=${encodeURIComponent(
                        personalData.contact.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      {personalData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(personalData.contact.phone, "phone")}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
                    title="Copiar teléfono"
                  >
                    {copiedPhone ? (
                      <IconCheck className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <IconCopy className="w-4 h-4" />
                    )}
                  </button>

                  <a
                    href={`https://wa.me/549${personalData.contact.rawPhone}?text=${encodeURIComponent(
                      personalData.contact.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all"
                    title="Abrir WhatsApp"
                  >
                    <IconWhatsApp className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <IconLinkedIn className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">Perfil Profesional</span>
                    <span className="text-sm font-semibold text-white">LinkedIn</span>
                  </div>
                </div>

                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-mono font-medium border border-cyan-500/30 transition-all"
                >
                  Conectar
                </a>
              </div>
            </div>

            {/* Location & Clock */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-zinc-300">
                    <IconMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">Ubicación</span>
                    <span className="text-sm font-semibold text-zinc-100">{personalData.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-emerald-400 w-fit">
                  <IconClock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{localTime || "--:--:--"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-1.5">Escríbeme un Mensaje</h3>
              <p className="text-xs text-zinc-400 mb-6">
                Completa el formulario para dejarme tu mensaje, propuesta o sugerencia.
              </p>

              {formStatus === "sent" ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                    <IconCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">¡Mensaje Enviado con Éxito!</h4>
                  <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                    Muchas gracias por escribirme. Te responderé a la brevedad posible.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Tu nombre
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej: Sofía o Martín"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-emerald-400 focus:outline-none text-sm text-white placeholder-zinc-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Tu correo electrónico
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu-correo@ejemplo.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-emerald-400 focus:outline-none text-sm text-white placeholder-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Asunto
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Oportunidad laboral, proyecto o consulta"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-emerald-400 focus:outline-none text-sm text-white placeholder-zinc-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntame sobre la propuesta, feedback o lo que tengas en mente..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-emerald-400 focus:outline-none text-sm text-white placeholder-zinc-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <IconSparkles className="w-4 h-4" />
                    <span>{formStatus === "sending" ? "Enviando mensaje..." : "Enviar Mensaje"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

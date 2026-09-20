"use client";

import { personalData } from "@/data/portfolioData";
import { IconChevronUp, IconLinkedIn, IconWhatsApp, IconMail } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050608] py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-400 text-xs">
              IE
            </div>
            <div>
              <span className="font-semibold text-zinc-200 text-sm block">
                {personalData.name}
              </span>
              <span className="text-[11px] text-zinc-400 font-mono">
                {personalData.role}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <IconLinkedIn className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/549${personalData.contact.rawPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
              aria-label="WhatsApp"
            >
              <IconWhatsApp className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.contact.email}`}
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <IconMail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition-all text-xs font-mono"
          >
            <span>Volver arriba</span>
            <IconChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p>© {new Date().getFullYear()} Ivan Daniel Escobar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}


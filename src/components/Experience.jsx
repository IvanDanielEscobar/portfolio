import { experienceData } from "@/data/portfolioData";
import { IconMapPin, IconClock, IconCheckCircle } from "./Icons";

export default function Experience() {
  return (
    <section id="trayectoria" className="py-24 relative overflow-hidden bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            Mi Camino Laboral
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experiencias Reales que me Formaron
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-2xl">
            Antes y durante mis estudios en software, trabajé en logística masiva y telecomunicaciones.
            Estas experiencias me dieron la responsabilidad, la disciplina y el temple para resolver problemas reales.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-6 space-y-12">
          {experienceData.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              {/* Connector Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-emerald-500 group-hover:scale-125 group-hover:border-cyan-400 transition-all shadow-sm shadow-emerald-500/50" />

              {/* Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {item.role}
                    </h3>
                    <span className="text-sm font-semibold text-emerald-400 font-mono">
                      {item.company}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
                      <IconClock className="w-3.5 h-3.5 text-zinc-400" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-4 font-mono">
                  <IconMapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{item.location}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3">
                      <IconCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-zinc-300 leading-relaxed">{ach}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

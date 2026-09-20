import { educationData, awardsData } from "@/data/portfolioData";
import { IconAward, IconMapPin, IconClock, IconSparkles } from "./Icons";

export default function Education() {
  return (
    <section id="educacion" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            Formación Académica
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Mis Estudios & Logros
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-2xl">
            Mi formación técnica terciaria en software y el secundario que me dio bases sólidas de comunicación y pensamiento crítico.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Education Cards */}
          <div className="lg:col-span-8 space-y-6">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full w-fit">
                    {edu.status}
                  </span>
                </div>

                <div className="text-sm font-semibold text-zinc-300 font-mono mb-2">
                  {edu.institution}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 font-mono mb-4">
                  <span className="flex items-center gap-1.5">
                    <IconClock className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <IconMapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Side Award Card */}
          <div className="lg:col-span-4">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/30 bg-purple-950/10 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6">
                <IconAward className="w-6 h-6 text-purple-300" />
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 mb-2">
                <IconSparkles className="w-3.5 h-3.5" />
                Reconocimiento Académico
              </div>

              {awardsData.map((award, aIdx) => (
                <div key={aIdx} className="space-y-3">
                  <h4 className="text-lg font-bold text-white leading-snug">
                    {award.title}
                  </h4>
                  <span className="inline-block text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/20">
                    {award.category}
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed pt-2">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

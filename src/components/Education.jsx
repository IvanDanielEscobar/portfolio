import { educationData, awardsData } from "@/data/portfolioData";
import SectionHeader from "./SectionHeader";
import { IconAward, IconMapPin, IconClock, IconSparkles } from "./Icons";

export default function Education() {
  return (
    <section id="educacion" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          badge="Formación Académica"
          badgeColor="cyan"
          title="Mis Estudios & Reconocimientos"
          description="Mi formación técnica terciaria en software, mi educación secundaria con bases de comunicación y mis distinciones académicas provinciales."
        />

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Education Cards */}
          <div className="lg:col-span-7 space-y-6">
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

          {/* Reinforced Award Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/30 bg-purple-950/10 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                  <IconAward className="w-6 h-6 text-purple-300" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                  <IconSparkles className="w-3.5 h-3.5" />
                  Mérito Académico
                </span>
              </div>

              {awardsData.map((award, aIdx) => (
                <div key={aIdx} className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-white leading-snug mb-2">
                      {award.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-purple-300 bg-purple-500/15 px-2.5 py-1 rounded-lg border border-purple-500/30">
                        {award.distinction}
                      </span>
                      <span className="text-xs font-mono text-zinc-400 bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/10">
                        {award.date}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {award.description}
                  </p>

                  {/* Issuing Institutions Breakdown */}
                  <div className="pt-2 border-t border-purple-500/20">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-purple-300/80 mb-2">
                      Avales e Instituciones Emisoras
                    </span>
                    <div className="space-y-2">
                      {award.institutions.map((inst, iIdx) => (
                        <div
                          key={iIdx}
                          className="p-2.5 rounded-xl bg-black/40 border border-purple-500/15 text-xs"
                        >
                          <div className="font-semibold text-zinc-200">{inst.name}</div>
                          <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                            {inst.dept}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

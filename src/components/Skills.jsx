import { skillsData } from "@/data/portfolioData";
import { IconCode, IconNetwork, IconShield } from "./Icons";

export default function Skills() {
  const categories = [
    {
      key: "learning",
      data: skillsData.learning,
      icon: <IconCode className="w-5 h-5 text-emerald-400" />,
    },
    {
      key: "infra",
      data: skillsData.infra,
      icon: <IconNetwork className="w-5 h-5 text-cyan-400" />,
    },
    {
      key: "softSkills",
      data: skillsData.softSkills,
      icon: <IconShield className="w-5 h-5 text-purple-400" />,
    },
  ];

  return (
    <section id="habilidades" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
            Mi Caja de Herramientas
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tecnologías, Redes & Habilidades del Trabajo Real
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-2xl">
            Lo que uso para desarrollar mis proyectos, lo que aprendo en la carrera y las competencias humanas
            que incorporé trabajando más de 5 años en equipo.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map(({ key, data, icon }) => (
            <div
              key={key}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{data.category}</h3>
                    <p className="text-xs text-zinc-400">{data.description}</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3 mt-6">
                  {data.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold text-zinc-100">{skill.name}</span>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-relaxed">{skill.detail}</p>
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

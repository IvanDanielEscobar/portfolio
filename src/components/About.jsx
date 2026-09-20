import { personalData } from "@/data/portfolioData";
import {
  IconCode,
  IconNetwork,
  IconShield,
  IconAnalytics,
  IconAward,
  IconCheckCircle,
} from "./Icons";

export default function About() {
  const getPillarIcon = (type) => {
    switch (type) {
      case "code":
        return <IconCode className="w-5 h-5 text-emerald-400" />;
      case "network":
        return <IconNetwork className="w-5 h-5 text-cyan-400" />;
      case "shield":
        return <IconShield className="w-5 h-5 text-emerald-400" />;
      case "analytics":
        return <IconAnalytics className="w-5 h-5 text-purple-400" />;
      default:
        return <IconCode className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            Un poco más sobre mí
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Mi Historia: Entre el estudio, el trabajo y la pasión por programar
          </h2>
        </div>

        {/* Two Column Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Main Personal Story */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 leading-relaxed font-normal">
            <p className="text-lg text-zinc-200">
              {personalData.bio.story}
            </p>
            <p>
              Empecé en el mundo de la tecnología con curiosidad por entender cómo funcionaban las computadoras.
              Esa curiosidad me llevó primero a dar una mano en soporte informático en el{" "}
              <strong className="text-white font-medium">iTec</strong>, y luego a sumergirme de lleno en la{" "}
              <strong className="text-white font-medium">Tecnicatura Superior en Desarrollo de Software</strong>.
            </p>
            <p>
              Actualmente mi trabajo diario como{" "}
              <strong className="text-white font-medium">Técnico de Mantenimiento en Redes GPON</strong> en Fnet System.
              Diagnosticar enlaces de fibra óptica y resolver problemas de conectividad con clientes esto me ayudo entender qué pasa con los datos cuando viajan por la red física, la latencia y la estabilidad
              de conexión.
            </p>
            <p>
              Y antes de eso, más de 5 años en <strong className="text-white font-medium">Correo Argentino</strong>{" "}
              me enseñaron lo que significa la responsabilidad cotidiana: el trabajo en equipo, la puntualidad y cumplir
              procesos rigurosos bajo presión sin perder la calma.
            </p>

            {/* Quick bullets */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Estudiante comprometido y autodidacta",
                "Construyo proyectos reales para afianzar conceptos",
                "Comprensión práctica de redes e infraestructura",
                "Enfoque humilde, abierto a feedback y trabajo en equipo",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <IconCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side Highlights Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <IconAward className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Logro Académico</h3>
                  <span className="text-xs text-purple-300 font-mono">Olimpiada de Estadística</span>
                </div>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                Obtuve una distinción especial en la olimpíada de estadística, un reconocimiento que confirmó mi gusto
                por los números, el razonamiento lógico y la estructuración de datos desde muy pequeño. Es la base que hoy aplico cuando modelo
                o resuelvo problemas de lógica en código.
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2.5 font-mono text-xs text-zinc-400">
                <div className="flex justify-between items-center text-zinc-300">
                  <span>Carrera:</span>
                  <span className="text-emerald-400">Desarrollo de Software (iTec)</span>
                </div>
                <div className="flex justify-between items-center text-zinc-300">
                  <span>Situación:</span>
                  <span className="text-cyan-400">Último año</span>
                </div>
                <div className="flex justify-between items-center text-zinc-300">
                  <span>Meta:</span>
                  <span className="text-purple-400">Consolidarme como desarrollador</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {personalData.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4">
                  {getPillarIcon(pillar.icon)}
                </div>
                <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

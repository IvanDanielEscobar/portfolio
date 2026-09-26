import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://ivanescobarportfolio.netlify.app"),
  title: "Ivan Daniel Escobar | Desarrollador de Software & Especialista en Redes GPON",
  description:
    "Portafolio profesional de Ivan Daniel Escobar. Ingeniería de software full-stack (Django, Python, Next.js, React) y redes de fibra óptica de última milla (GPON/FTTH). Soluciones Micro-SaaS, E-Commerce y Fintech.",
  keywords: [
    "Ivan Daniel Escobar",
    "Desarrollo de Software",
    "Técnico GPON",
    "Python",
    "Django",
    "Next.js",
    "React",
    "PostgreSQL",
    "MySQL",
    "Linux",
    "Río Cuarto",
    "Córdoba",
    "Argentina",
  ],
  authors: [{ name: "Ivan Daniel Escobar" }],
  creator: "Ivan Daniel Escobar",
  openGraph: {
    title: "Ivan Daniel Escobar | Software Developer & GPON Specialist",
    description:
      "Desarrollador Full-Stack y Especialista en Redes GPON. Proyectos Micro-SaaS, Fintech y E-Commerce.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark scroll-smooth h-full">
      <body className="min-h-full flex flex-col bg-[#07080c] text-zinc-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}

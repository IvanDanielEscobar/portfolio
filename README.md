# Portafolio Personal — Ivan Daniel Escobar 🚀

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Portafolio web personal desarrollado con **Next.js (App Router)**, **React 19** y **Tailwind CSS v4** bajo una estética oscura de alta gama (*Dark Luxury / Modern Obsidian*).

Presenta mi perfil como **estudiante avanzado de la Tecnicatura Superior en Desarrollo de Software (iTec)** y **Técnico en Redes GPON (Fnet System)**, junto con casos de estudio y explicaciones de arquitectura de **6 proyectos reales** que he construido por iniciativa propia.

---

## 🌟 Características Principales

- **Estética Dark Luxury & UI/UX Moderna**: Paleta obsidiana profunda (`#07080c`) con reflejos radiales en verde esmeralda y cian, tarjetas con efecto *glassmorphism* y micro-interacciones fluidas.
- **6 Casos de Estudio de Proyectos**:
  - **StockBase POS**: Micro-SaaS de punto de venta, inventario y cuentas corrientes en Django 6, PostgreSQL y Docker.
  - **EasyBooking**: Sistema de gestión de turnos online 24/7 para salones y barberías.
  - **KromaCore Portal**: Landing institucional y vitrina en React 19 y PrimeReact.
  - **Dolariza2**: Monitor financiero en tiempo real con DolarAPI y revalidación en servidor (ISR).
  - **AutoKlick**: E-Commerce de detailing automotriz con Context API y carrito lateral.
  - **Vittas Indumentaria**: Boutique digital con diseño editorial y sistema de toasts.
- **Modales de Arquitectura**: Fichas técnicas interactivas para cada proyecto que explican la motivación, el funcionamiento interno y los aprendizajes técnicos adquiridos (sin exponer código propietario).
- **Herramientas de Contacto Rápido**: Botones de copiado en un clic para correo y teléfono, enlace directo a WhatsApp y perfil de LinkedIn.
- **Widget de Hora Local**: Reloj en vivo que muestra la hora actual de Río Cuarto, Córdoba (`GMT-3`).
- **100% Autónomo & Desplegable en Netlify**: Compilación estática sin dependencias bloqueantes de red externa.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Framework Web** | [Next.js](https://nextjs.org/) (App Router, Server & Client Components) |
| **Biblioteca UI** | [React 19](https://react.dev/) |
| **Estilos & Diseño** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Iconos** | Set SVG nativo optimizado (cero dependencias externas) |
| **Despliegue** | Compatible con [Netlify](https://www.netlify.com/) y [Vercel](https://vercel.com/) |

---

## 📂 Estructura del Proyecto

```text
portfolio/
├── public/                  # Recursos públicos y estáticos
├── src/
│   ├── app/
│   │   ├── globals.css      # Configuración de tema oscuro, glow meshes y scrollbar
│   │   ├── layout.js        # Metadatos SEO, OpenGraph y tipografía base
│   │   └── page.js          # Composición de la página principal
│   ├── components/
│   │   ├── Navbar.jsx       # Barra de navegación flotante y menú responsive
│   │   ├── Hero.jsx         # Sección principal, presentación y métricas
│   │   ├── About.jsx        # Mi historia, formación y pilares de ingeniería
│   │   ├── Projects.jsx     # Grid con filtros por categoría de proyectos
│   │   ├── ProjectModal.jsx # Ventana modal interactiva de arquitectura
│   │   ├── Skills.jsx       # Caja de herramientas y habilidades de campo
│   │   ├── Experience.jsx   # Línea de tiempo de trayectoria laboral
│   │   ├── Education.jsx    # Formación académica y mención en estadística
│   │   ├── Contact.jsx      # Formulario, canales directos y reloj local
│   │   ├── Footer.jsx       # Pie de página y retorno superior
│   │   └── Icons.jsx        # Componentes SVG reutilizables
│   └── data/
│       └── portfolioData.js # Datos centralizados y fichas técnicas
├── next.config.mjs          # Configuración de Next.js
└── package.json             # Dependencias y scripts
```

---

## 🚀 Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 📬 Contacto

- **Nombre:** Ivan Daniel Escobar
- **Ubicación:** Río Cuarto, Córdoba, Argentina
- **Email:** [ivanescobar.tfr@gmail.com](mailto:ivanescobar.tfr@gmail.com)
- **LinkedIn:** [linkedin.com/in/ivan-daniel-escobar-55493a186](https://www.linkedin.com/in/ivan-daniel-escobar-55493a186)
- **Teléfono:** [+54 9 358 6000456](tel:3586000456)

---
*Desarrollado con dedicación por Ivan Daniel Escobar • © 2026*

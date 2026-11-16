// Datos personales y proyectos de Ivan Daniel Escobar
// Enfoque personal, cercano y auténtico: Estudiante de desarrollo de software en iTec y técnico en redes GPON

export const personalData = {
  name: "Ivan Daniel Escobar",
  nickname: "Ivan",
  role: "Desarrollador FullStack & Técnico de Mantenimiento en Redes GPON",
  institution: "iTec Instituto Tecnológico Río Cuarto",
  location: "Río Cuarto, Córdoba, Argentina",
  timeZone: "America/Argentina/Cordoba",
  status: "Abierto a nuevas oportunidades como desarrollador",
  contact: {
    email: "ivanescobar.tfr@gmail.com",
    phone: "+54 9 358 6000456",
    rawPhone: "3586000456",
    linkedin: "https://www.linkedin.com/in/ivan-daniel-escobar/",
    linkedinShort: "linkedin.com/in/ivan-daniel-escobar/",
    github: "https://github.com/IvanDanielEscobar",
    githubShort: "github.com/IvanDanielEscobar",
    cvUrl: "/cv-ivan-escobar.pdf",
    whatsappMessage: "¡Hola Ivan! Vi tu portafolio y me gustaría conversar contigo sobre desarrollo de software.",
  },
  bio: {
    greeting: "¡Hola! Soy Ivan 👋",
    lead: "Estudiante de la Tecnicatura Superior en Desarrollo de Software en iTec y Técnico de Mantenimiento en Redes GPON. Apasionado por transformar la curiosidad en código y resolver problemas reales.",
    story:
      "Mi día a día combina el estudio constante en el instituto tecnológico con la práctica técnica como técnico en redes GPON de fibra óptica en Fnet System, donde fortalezco a diario mi lógica de análisis y la atención al detalle diagnosticando conectividad con clientes. Anteriormente, mi paso de más de 5 años por el sector operativo de Correo Argentino me formó en responsabilidad, trabajo en equipo y cumplimiento de procesos bajo presión. Todo mi tiempo libre lo dedico a programar: aprender nuevas tecnologías, leer documentación y construir proyectos completos para consolidarme profesionalmente en la industria del software.",
    closing: "¡Siempre con ganas de aprender cosas nuevas, colaborar en equipo para dar el salto como desarrollador!",
  },
  highlights: [
    {
      label: "Estudiante en iTec",
      value: "Último Año",
      description: "Materias aprobadas: 12/19.",
    },
    {
      label: "Proyectos Creados",
      value: "7+ Proyectos",
      description: "Proyectos personales y educacionales desarrollados con arquitectura robusta.",
    },
    {
      label: "Infraestructura & GPON",
      value: "Fibra Óptica",
      description: "Experiencia de campo en redes de alta velocidad, enlaces y conectividad.",
    },
  ],
  pillars: [
    {
      title: "Curiosidad Constante por el Código",
      description:
        "Investigo, leo documentación y desarrollo aplicaciones completas de forma complementaria a mis estudios.",
      icon: "code",
    },
    {
      title: "Visión de Redes & Conectividad",
      description:
        "Mi trabajo en redes GPON me permite entender no solo la aplicación, sino también la infraestructura física y el viaje que hacen los datos por la red.",
      icon: "network",
    },
    {
      title: "Disciplina & Responsabilidad Real",
      description:
        "Haber trabajado más de 5 años en logística masiva me enseñó a responder bajo presión, ser metódico y valorar la puntualidad y el trabajo en equipo.",
      icon: "shield",
    },
    {
      title: "Pensamiento Analítico & Lógico",
      description:
        "Me gusta descomponer problemas complejos en partes sencillas y lógicas, una habilidad que cultivo desde mi participación en la Olimpíada de Estadística de Córdoba (UNRC).",
      icon: "analytics",
    },
  ],
};

export const projectsData = [
  {
    id: "stockbase",
    title: "StockBase POS",
    subtitle: "Sistema Multi-Tenant de Punto de Venta, Caja & Cuentas Corrientes",
    type: "personal",
    typeLabel: "Proyecto Personal",
    badges: ["Django", "Python", "PostgreSQL", "Docker", "Tailwind CSS", "REST API", "Gunicorn", "Astral uv"],
    description:
      "Sistema SaaS integral y multi-tenant de punto de venta (POS), control de inventario y cuentas corrientes para comercios minoristas y mayoristas. Diseñado bajo la arquitectura de Capa de Servicios ('Skinny Views, Fat Services') con Django 5, DRF y PostgreSQL 16. Incorpora un mostrador ágil con atajos de teclado y medios de pago puros/mixtos (Efectivo, Débito, QR, Cta Cte), gestión de turnos de caja con arqueo ciego, emisión de tickets térmicos (80mm) para control interno no fiscal, protección inflacionaria mediante congelamiento de costo histórico, módulo de cuentas corrientes (fiado) con límites de crédito auditados, consola de administración SaaS (Platform Hub 360°) con métricas de salud (Health Score), API REST v1 desacoplada con SimpleJWT lista para aplicaciones móviles y una suite completa de 122 tests automatizados (100% OK).",
    isPrivate: true,
    demoUrl: null,
    repoUrl: null,
  },
  {
    id: "easybooking",
    title: "EasyBooking by KromaCore",
    subtitle: "Micro-SaaS de Reservas Online 24/7 & Gestión Multi-Salón",
    type: "personal",
    typeLabel: "Proyecto Personal",
    badges: ["Django", "Python", "PostgreSQL", "Docker", "Gunicorn", "Astral uv"],
    description:
      "Micro-SaaS inteligente de reservas online 24/7 y gestión multi-salón para barberías, salones de estética y profesionales independientes. Desarrollado con Django 6, Astral uv y PostgreSQL 16 (en producción vía Docker Compose y Gunicorn con 3 workers). Implementa un motor algorítmico de cálculo dinámico de franjas horarias con validación de concurrencia para evitar solapamientos de turnos, panel administrativo para la organización de agendas y suite de pruebas unitarias integradas.",
    isPrivate: true,
    demoUrl: null,
    repoUrl: null,
  },
  {
    id: "kromacore",
    title: "KromaCore Landing Page",
    subtitle: "Landing Institucional & Ecosistema de Soluciones de Software",
    type: "personal",
    typeLabel: "Proyecto Personal",
    badges: ["React", "Vite", "PrimeReact", "Docker", "Nginx", "PrimeFlex"],
    description:
      "Sitio web y landing institucional de KromaCore desarrollado con React 19 y Vite (JavaScript puro). Presenta el ecosistema integral de soluciones tecnológicas de la firma, exhibiendo los micro-SaaS StockBase POS y EasyBooking, planes de suscripción y canales de contacto directo (WhatsApp y correo). Construido con la suite de componentes de PrimeReact (Menubar, Button, InputText, Toast, Card, Badge), estilos personalizados sobre el tema lara-dark-cyan con la paleta de marca (#0E1117, #00FFFF, #FF7A00) y despliegue contenerizado mediante Docker con Nginx Alpine multi-stage build listo para producción.",
    demoUrl: "https://kromacoredev.com/",
    demoLabel: "Sitio Web en Vivo",
    isPrivate: true,
    repoUrl: null,
  },
  {
    id: "dolariza2",
    title: "Dolariza2",
    subtitle: "Monitor de Cotizaciones Financieras en Tiempo Real",
    type: "personal",
    typeLabel: "Proyecto Personal",
    demoUrl: "https://dolariza2.netlify.app/",
    repoUrl: "https://github.com/IvanDanielEscobar/dolariza2",
    badges: ["Next.js", "React", "Tailwind CSS", "REST API"],
    description:
      "Aplicación web financiera para consultar en tiempo real las cotizaciones del dólar (oficial, blue, tarjeta, MEP, CCL) y euro en Argentina. Consume la API pública DolarAPI y aprovecha el renderizado en servidor de Next.js (App Router) junto con revalidación periódica (ISR) para ofrecer tiempos de carga mínimos y datos actualizados.",
  },
  {
    id: "homedeco",
    title: "Home & Deco",
    subtitle: "E-Commerce Full Stack & Sistema de Gestión Comercial",
    type: "educational",
    typeLabel: "Proyecto Educacional",
    badges: ["Next.js", "React", "Django", "Python", "PostgreSQL", "Docker", "Tailwind CSS", "REST API"],
    description:
      "Plataforma completa de comercio electrónico y gestión comercial desarrollada de punta a punta (Full Stack) para una fábrica y tienda de muebles modernos en Río Cuarto, integrando las cátedras de Programación III e Ingeniería de Software (ITEC). El frontend en Next.js 16 y Tailwind CSS v4 ofrece catálogo interactivo con filtros por ambiente y madera, carrito lateral (Context API), autenticación JWT con control de roles (Admin, Empleado, Cliente), panel administrativo (Dashboard) con CRUD de muebles y pedidos, validaciones con Zod y React Hook Form, y testing con Vitest. El backend en Django REST Framework y PostgreSQL 16 implementa 10 modelos relacionales, reglas de negocio de cancelación (límite 24hs), congelamiento de precios, borrado lógico/físico, documentación OpenAPI 3.0 (Swagger UI / ReDoc) y 12 tests unitarios. Desplegado y operativo en Vercel (Frontend) y Render (Backend API).",
    demoUrl: "https://efi-programacion-iii.vercel.app",
    demoLabel: "E-Commerce en Vivo (Vercel)",
    apiUrl: "https://homedeco-backend.onrender.com/api",
    repoUrl: "https://github.com/IvanDanielEscobar/EFI-ProgramacionIII",
    repoBackendUrl: "https://github.com/IvanDanielEscobar/EFI-IngenieriaDeSoftware",
  },
  {
    id: "radarurbano",
    title: "Radar Urbano",
    subtitle: "Red Vecinal de Prevención & Geolocalización de Incidencias",
    type: "educational",
    typeLabel: "Proyecto Educacional",
    badges: ["React", "Vite", "Tailwind CSS", "Leaflet", "OpenStreetMap", "WCAG AA"],
    description:
      "Evaluación Final Integradora (EFI) para la Cátedra de Interfaz de Usuario (ITEC Río Cuarto). Single Page Application (SPA) colaborativa y mobile-first construida bajo estándares estrictos de accesibilidad universal (WCAG AA 1.4.1) para la prevención ciudadana y auxilio comunitario en Río Cuarto. Integra cartografía open source con Leaflet y OpenStreetMap (modo oscuro adaptativo), geocercas geodésicas (fórmula de Haversine con radios dinámicos de 1 a 15 km), simbología geométrica universal para usuarios con daltonismo, botón de pánico SOS con retención de 1.5s y respuesta háptica (Ley de Fitts), ergonomía integral para zurdos, compresión de fotos en cliente mediante Canvas HTML5 y sistema de gamificación cívica con reputación barrial y cupones de descuento.",
    demoUrl: "https://efi-interaz-de-usuario.vercel.app/",
    demoLabel: "Aplicación en Vivo (Vercel)",
    docsUrl: "https://docs.google.com/document/d/1eqap2D5Huw8SKxRVbw4Clj_6ofckJ26YL6qH6NdJank/edit?usp=sharing",
    repoUrl: "https://github.com/IvanDanielEscobar/EFI-InterazDeUsuario",
  },
  {
    id: "autoklick",
    title: "AutoKlick",
    subtitle: "E-Commerce de Accesorios & Repuestos Vehiculares",
    type: "personal",
    typeLabel: "Proyecto Personal",
    badges: ["Next.js", "React", "Tailwind CSS", "Context API", "Turbopack"],
    description:
      "Plataforma moderna de comercio electrónico especializada en la comercialización de accesorios y repuestos automotores, desarrollada con Next.js 16 (App Router con Turbopack) y Tailwind CSS con paleta personalizada de marca. Diseñada para máxima velocidad y conversión local, incorpora catálogo dinámico con fichas de producto (/producto/[id]), carrito de compras flotante (CartSidebar) con persistencia vía React Context API, cálculo dinámico de subtotales y un flujo de checkout inteligente con generación automática de orden única (#AK) y derivación de pedidos preformateados directo a WhatsApp para pagos en efectivo o transferencias.",
    isPrivate: true,
    demoUrl: null,
    repoUrl: null,
  },
];

export const skillsData = {
  learning: {
    category: "Lo que uso & sigo perfeccionando",
    description: "Tecnologías que aplico en mis proyectos personales y en la carrera de software.",
    skills: [
      { name: "Python (Django 6 & Flask)", level: "Práctica activa", detail: "Desarrollo de REST APIs desacopladas, ORM, autenticación y micro-SaaS completos." },
      { name: "React 19", level: "Práctica activa", detail: "Desarrollo de SPAs dinámicas (como KromaCore Portal), componentes modulares, hooks y librerías de UI (PrimeReact)." },
      { name: "Next.js (App Router)", level: "Práctica activa", detail: "Server & Client Components, Server-Side Rendering (SSR) y caching con ISR (Dolariza2)." },
      { name: "JavaScript & Node.js", level: "Práctica activa", detail: "Funciones modernas ES6+, async/await, promesas y servicios escalables." },
      { name: "PostgreSQL & MySQL", level: "Práctica activa", detail: "Diseño de modelos relacionales, consultas SQL, claves foráneas, índices y persistencia." },
      { name: "Tailwind CSS", level: "Práctica activa", detail: "Diseño responsivo, interfaces en modo oscuro, efectos glassmorphism y micro-interacciones." },
      { name: "Git, GitHub & Astral uv", level: "Práctica activa", detail: "Control de versiones, repositorios colaborativos y entornos reproducibles en Python." },
    ],
  },
  infra: {
    category: "Redes & Sistemas (Experiencia de Campo)",
    description: "Conocimientos reales adquiridos en mi trabajo diario y soporte técnico.",
    skills: [
      { name: "Redes Ópticas GPON / FTTH", level: "Técnico activo", detail: "Diagnóstico de atenuación, niveles de potencia, splitters y terminales ONT/OLT." },
      { name: "Linux (Debian / Ubuntu)", level: "Uso diario", detail: "Terminal, navegación, administración básica, permisos y servicios." },
      { name: "Docker & Docker Compose", level: "Despliegue local", detail: "Contenerización de aplicaciones Django/React con sus bases de datos." },
      { name: "Resolución de Conectividad", level: "Técnico activo", detail: "Aislamiento de fallas de cableado, enlaces de fibra, router y latencia." },
      { name: "Gunicorn & Nginx", level: "Configuración", detail: "Puesta en marcha de servicios WSGI y servidores web para proyectos web." },
    ],
  },
  softSkills: {
    category: "Valores & Habilidades del Trabajo Real",
    description: "Lo que aprendí en más de 5 años en Correo Argentino y en Fnet System.",
    skills: [
      { name: "Responsabilidad & Puntualidad", level: "Clave", detail: "Compromiso estricto con los horarios y los procesos operativos diarios." },
      { name: "Trabajo en Equipo", level: "Clave", detail: "Coordinación fluida con compañeros y áreas técnicas bajo alta demanda." },
      { name: "Atención y Empatía con Clientes", level: "Clave", detail: "Trato respetuoso al resolver problemas técnicos en el domicilio o comercio." },
      { name: "Ganas Constantes de Aprender", level: "Motor diario", detail: "Curiosidad por mejorar mi código, recibir feedback y sumar nuevas herramientas." },
    ],
  },
};

export const experienceData = [
  {
    role: "Técnico de Mantenimiento en Redes GPON",
    company: "Fnet System",
    period: "Mayo 2026 - Presente",
    location: "Río Cuarto, Córdoba",
    badge: "Trabajo Actual",
    description:
      "Trabajo de campo diagnosticando y reparando fallas de conectividad en redes de fibra óptica (GPON/FTTH). Es una experiencia que me ayuda a entender a fondo cómo funciona la red física de internet mientras continúo mis estudios en software.",
    achievements: [
      "Diagnóstico de niveles de potencia y atenuación óptica en enlaces de última milla.",
      "Configuración y cambio de módems y terminales ONT para garantizar el servicio al cliente.",
      "Práctica diaria de razonamiento metódico y paciencia para encontrar la causa raíz de cada falla.",
      "Atención directa y clara a los usuarios en sus domicilios y negocios.",
    ],
  },
  {
    role: "Auxiliar de Operaciones & Logística",
    company: "Correo Argentino",
    period: "Agosto 2020 - Mayo 2026 (5 años 10 meses)",
    location: "Río Cuarto, Córdoba",
    badge: "5+ Años",
    description:
      "Mi escuela en disciplina laboral y trabajo bajo presión. Realicé tareas operativas y logísticas en la planta de encomiendas de Río Cuarto, aprendiendo el valor del orden, los procesos y el compromiso.",
    achievements: [
      "Uso del sistema interno de Correo Argentino para registrar, clasificar y verificar el estado de envíos.",
      "Descarga y carga de correspondencia y paquetería coordinando con transportes interurbanos.",
      "Clasificación minuciosa de envíos según códigos postales y rutas de reparto.",
      "Desarrollo de gran capacidad de organización, puntualidad y trabajo coordinado en equipo.",
    ],
  },
  {
    role: "Asistente Técnico de Sistemas",
    company: "iTec Instituto Tecnológico Río Cuarto",
    period: "Noviembre 2018 - Noviembre 2019 (1 año 1 mes)",
    location: "Río Cuarto, Córdoba",
    badge: "Primeros Pasos en IT",
    description:
      "Colaboré en las tareas de soporte técnico y mantenimiento informático en la misma institución donde hoy estudio, lo que despertó mi vocación por la informática.",
    achievements: [
      "Mantenimiento e instalación de software en equipos de computación del instituto.",
      "Asistencia técnica a docentes y alumnos para el uso de proyectores y salas de informática.",
      "Primer acercamiento a la resolución de problemas informáticos y atención a usuarios.",
    ],
  },
];

export const educationData = [
  {
    degree: "Tecnicatura Superior en Desarrollo de Software",
    institution: "iTec Instituto Tecnológico Río Cuarto",
    period: "Marzo 2019 - Noviembre 2026",
    location: "Río Cuarto, Córdoba",
    description:
      "Carrera técnica terciaria donde me formo en programación estructurada y orientada a objetos, bases de datos relacionales, desarrollo web, análisis de sistemas y metodologías de trabajo.",
    status: "Cursando el último año",
  },
  {
    degree: "Bachiller en Ciencias Sociales y Humanidades",
    institution: "Instituto Superior Jerónimo Luis de Cabrera",
    period: "2012 - 2017",
    location: "Río Cuarto, Córdoba",
    description:
      "Secundario completado con orientación en humanidades y ciencias sociales, que me brindó bases sólidas en comprensión lectora, redacción y comunicación.",
    status: "Graduado",
  },
];

export const awardsData = [
  {
    title: "Olimpíada de Estadística de la Provincia de Córdoba",
    eventCode: "OEC",
    distinction: "Alumno Concursante (Instancia Provincial)",
    category: "Categoría F • Nivel Provincial",
    field: "Lógica, Estadística & Razonamiento Cuantitativo",
    date: "26 de Octubre de 2012",
    institutions: [
      {
        name: "Universidad Nacional de Río Cuarto (UNRC)",
        dept: "Facultad de Ciencias Exactas, Físico-Químicas y Naturales",
        signatory: "Dra. Rosa Cattana (Decana)",
      },
      {
        name: "Ministerio de Educación de Córdoba",
        dept: "Secretaría de Educación",
        signatory: "Prof. Walter Grahovac (Ministro)",
      },
      {
        name: "Ministerio de Ciencia y Tecnología de Córdoba",
        dept: "Dirección de Divulgación y Enseñanza de las Ciencias",
        signatory: "Ing. Roger H. Illanes (Ministro)",
      },
    ],
    description:
      "Certificación oficial de distinción como Alumno Concursante en la instancia provincial de la Olimpíada de Estadística de Córdoba (OEC), avalada conjuntamente por la Universidad Nacional de Río Cuarto (UNRC) y los Ministerios de Educación y de Ciencia y Tecnología de Córdoba. Un reconocimiento temprano que consolidó mi vocación por el análisis numérico, el rigor lógico y el pensamiento estructurado.",
  },
];

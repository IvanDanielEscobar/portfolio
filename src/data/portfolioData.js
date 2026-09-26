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
      value: "5 Proyectos",
      description: "Desarrollados de punta a punta por iniciativa propia para aprender y practicar.",
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
        "Me gusta descomponer problemas complejos en partes sencillas y lógicas, una habilidad que pulí desde mi participación en la olimpiada de estadística.",
      icon: "analytics",
    },
  ],
};

export const projectsData = [
  {
    id: "stockbase",
    title: "StockBase POS",
    subtitle: "Sistema de Punto de Venta, Control de Inventario & Cuentas Corrientes",
    category: "saas",
    categoryLabel: "Backend & Django",
    featured: true,
    badges: ["Django 6", "Python", "PostgreSQL 16", "Astral uv", "Docker", "Gunicorn"],
    summary:
      "Un proyecto que está en desarrollo para desafiarme creando un sistema de mostrador ágil para almacenes y comercios, con inventario en tiempo real y cuentas corrientes.",
    motivation:
      "Quería entender a fondo cómo se construye una arquitectura multi-organización y cómo resolver una necesidad común de los negocios de barrio: despachar rápido en mostrador y llevar registro prolijo de los 'fiados' sin papel.",
    howItWorks:
      "Diseñé el backend en Django separando la lógica en aplicaciones limpias. Implementé un POS rápido pensado para usarse con teclado y un lector de código de barras, un control de existencias que descuenta stock al momento y un módulo de cuenta corriente que registra deudas, abonos parciales e historial cronológico de compras.",
    learnings: [
      "Diseño de modelos relacionales en PostgreSQL con claves foráneas e índices para búsquedas veloces.",
      "Manejo de entornos reproducibles ultrarrápidos con Astral `uv` en Python.",
      "Contenerización con Docker y Docker Compose para correr web y base de datos con un solo comando.",
      "Importación masiva de planillas de productos usando `django-import-export`.",
    ],
    keyFeatures: [
      "Punto de venta súper ágil para cobrar rápido en mostrador.",
      "Control de inventario con aviso cuando queda poco stock de un producto.",
      "Gestión de cuentas corrientes para saber exactamente cuánto debe cada cliente.",
      "Módulo de compras a proveedores para actualizar costos y precios.",
      "Aislamiento para que varios comercios o sucursales puedan usarlo de forma independiente.",
    ],
  },
  {
    id: "easybooking",
    title: "EasyBooking",
    subtitle: "Plataforma de Reserva de Turnos Online",
    category: "saas",
    categoryLabel: "Backend & Django",
    featured: true,
    badges: ["Django 6", "Python", "PostgreSQL 16", "Astral uv", "Docker", "Pillow"],
    summary:
      "Esta plataforma está diseñada para que salones de belleza, barberos, tatuadores y profesionales independientes puedan recibir reservas de turnos las 24 horas sin tener que responder mensajes a deshoras.",
    motivation:
      "Charlando con barberos y peluqueros conocidos, vi el tiempo que perdían coordinando horarios por WhatsApp o planillas de cálculo. Me propuse construir una solución limpia y directa que automatizara todo el proceso.",
    howItWorks:
      "El cliente entra a un enlace web, elige el servicio, el profesional de su preferencia y el día/hora libre según la disponibilidad en tiempo real. Por detrás, el sistema valida que no haya solapamiento de turnos, descuenta la franja horaria y le muestra al administrador su agenda ordenada día a día.",
    learnings: [
      "Algoritmos de cálculo de franjas horarias y validaciones de concurrencia para evitar turnos duplicados.",
      "Estructuración de vistas y formularios limpios en Django.",
      "Procesamiento y optimización de imágenes de fotos de perfil y servicios con Pillow.",
      "Configuración de base de datos PostgreSQL 16 lista para producción en Docker.",
    ],
    keyFeatures: [
      "Los clientes pueden reservar su turno a cualquier hora del día desde el teléfono.",
      "Soporte para múltiples profesionales, cada uno con sus propios horarios y descansos.",
      "Catálogo con duración estimada y precio de cada corte o tratamiento.",
      "Panel de control para ver la agenda del día, de la semana y el historial de clientes.",
    ],
  },
  {
    id: "kromacore",
    title: "KromaCore Portal",
    subtitle: "Landing Institucional para mis Proyectos de Software",
    category: "frontend",
    categoryLabel: "Frontend & React",
    featured: true,
    badges: ["React 19", "Vite", "PrimeReact", "PrimeIcons", "Nginx", "Docker"],
    summary:
      "Un sitio web que diseñé y programé en React 19 para presentar mis proyectos de software con una identidad visual moderna y profesional bajo una firma.",
    motivation:
      "Tenía varios proyectos en mente y quería crear un 'hogar digital' donde agruparlos, practicar maquetación moderna en React y aprender a usar la librería de componentes PrimeReact.",
    howItWorks:
      "Es una Single Page Application (SPA) armada con Vite y React 19. Cuenta con secciones para mostrar las características de los proyectos, tablas de comparación de planes y botones de contacto que derivan directamente a WhatsApp o correo.",
    learnings: [
      "Uso de React 19 con Vite para lograr un empaquetado ultra ligero y veloz.",
      "Personalización de temas oscuros en PrimeReact (`lara-dark-cyan`).",
      "Creación de un Dockerfile multi-stage con Nginx Alpine para servir archivos estáticos con bajo consumo de memoria.",
    ],
    keyFeatures: [
      "Diseño moderno en modo oscuro con acentos cian y tipografía nítida.",
      "Tarjetas interactivas con detalles de las herramientas desarrolladas.",
      "Canales de contacto directo para consultas y presupuestos.",
      "Configuración lista para desplegar en cualquier servidor con Docker.",
    ],
  },
  {
    id: "dolariza2",
    title: "Dolariza2",
    subtitle: "Monitor de Cotizaciones de Monedas en Tiempo Real",
    category: "fintech",
    categoryLabel: "Next.js & APIs",
    featured: true,
    demoUrl: "https://dolariza2.netlify.app/",
    repoUrl: "https://github.com/IvanDanielEscobar/dolariza2",
    badges: ["Next.js (App Router)", "React 19", "Server Components", "DolarAPI REST", "Tailwind CSS"],
    summary:
      "Una app web para consultar al instante las cotizaciones del dólar y el euro en Argentina, consumiendo una API pública y aprovechando el renderizado en servidor.",
    motivation:
      "En Argentina las cotizaciones cambian constantemente. Quise crear una herramienta práctica para mí y mis conocidos, mientras exploraba las novedades del App Router de Next.js y el consumo de APIs en Server Components.",
    howItWorks:
      "La aplicación hace peticiones en el servidor a DolarAPI y revalida los datos cada 60 segundos (ISR). Esto permite que el usuario vea la información casi al instante sin sobrecargar de llamadas innecesarias a la API externa.",
    learnings: [
      "Estrategias de caching y revalidación (`revalidate: 60`) con Next.js App Router.",
      "Diferencias prácticas entre Client Components y Server Components en React 19.",
      "Manejo de errores y fallbacks en llamadas a APIs de terceros.",
      "Maquetación rápida y limpia con Tailwind CSS.",
    ],
    keyFeatures: [
      "Visualización clara del dólar oficial, blue, tarjeta, MEP, CCL y euro.",
      "Diferenciación instantánea entre precios de compra y venta.",
      "Hora exacta de la última actualización oficial de la cotización.",
      "Carga ultrarrápida y optimizada para ver desde el celular.",
    ],
  },
  {
    id: "autoklick",
    title: "AutoKlick",
    subtitle: "Catálogo & E-Commerce para Cuidado Automotor y Accesorios",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    featured: false,
    badges: ["Next.js", "React 19", "Tailwind CSS", "Context API", "Responsive"],
    summary:
      "Una tienda online temática orientada a productos de estética vehicular, donde implementé un carrito de compras interactivo y navegación por categorías.",
    motivation:
      "Me gustan los autos y el detailing, así que fue la excusa ideal para diseñar una experiencia de e-commerce completa y aprender a gestionar el estado global del carrito con Context API.",
    howItWorks:
      "El usuario puede navegar entre artículos de lavado, ceras y accesorios, ver fotos y detalles técnicos, y sumar productos a un carrito lateral deslizable que calcula el total sin tener que recargar la página.",
    learnings: [
      "Manejo de estado global en React con `createContext` y `useContext` para el carrito de compras.",
      "Rutas dinámicas en Next.js (`/producto/[slug]`) para renderizar fichas de producto.",
      "Diseño de interfaces atractivas con Tailwind CSS adaptadas a pantallas pequeñas.",
    ],
    keyFeatures: [
      "Catálogo dividido por categorías de detailing y confort.",
      "Carrito lateral deslizable con selector de cantidades y botón para vaciar.",
      "Fichas de producto con descripción y recomendaciones.",
      "Navegación fluida y adaptada a móviles.",
    ],
  },
];

export const skillsData = {
  learning: {
    category: "Lo que uso & sigo perfeccionando",
    description: "Tecnologías que aplico en mis proyectos personales y en la carrera de software.",
    skills: [
      { name: "Python & Django 6", level: "Práctica activa", detail: "Creación de modelos, vistas, ORM, autenticación y micro-SaaS completos." },
      { name: "React 19 & Next.js", level: "Práctica activa", detail: "App Router, Server/Client components, Context API y hooks personalizados." },
      { name: "PostgreSQL & MySQL", level: "Práctica activa", detail: "Diseño de tablas relacionales, consultas SQL, claves foráneas e índices." },
      { name: "JavaScript (ES6+)", level: "Práctica activa", detail: "Async/await, promesas, manipulación de datos y funciones modernas." },
      { name: "Tailwind CSS", level: "Práctica activa", detail: "Diseño responsivo, interfaces en modo oscuro y componentes limpios." },
      { name: "Astral uv & Git", level: "Práctica activa", detail: "Gestión de dependencias en Python y control de versiones con GitHub." },
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
    title: "Mención en Olimpiada de Estadística",
    category: "Lógica & Razonamiento Matemático",
    description:
      "Participación destacada en la olimpiada de estadística, un logro que me motivó a confiar en mi capacidad analítica para resolver problemas numéricos y estructurar datos.",
  },
];

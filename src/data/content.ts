export type Lang = "es" | "en";

/** Every locale is a pre-rendered route; `path` is what hreflang and the nav toggle point at. */
export const LOCALES: { lang: Lang; path: string; ogLocale: string; label: string; name: string }[] = [
  { lang: "es", path: "/", ogLocale: "es_CO", label: "ES", name: "Español" },
  { lang: "en", path: "/en/", ogLocale: "en_US", label: "EN", name: "English" },
];

/** Values marked `html` are injected with innerHTML (they carry `<em>` accents). */
export interface Content {
  meta: { title: string; description: string; photoAlt: string; langSwitch: string };
  nav: { stack: string; cta: string };
  hero: {
    eyebrow: string;
    name1: string;
    name2: string;
    roleLabel: string;
    roleValue: string;
    intro: string;
    statusLabel: string;
    statusValue: string;
    yearsLabel: string;
    yearsValue: string;
  };
  marquee: string[];
  about: {
    idx: string;
    /** html */
    title: string;
    /** html */
    lede: string;
    body: string[];
    stats: { num: string; suffix: string; label: string }[];
  };
  stack: {
    idx: string;
    /** html */
    title: string;
    cols: { title: string; list: [name: string, level: string][] }[];
  };
  contact: { overline: string; sub: string; socials: string[] };
  footer: { left: string; right: string };
}

const MARQUEE = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Python",
  "Go",
  "Java",
  "AWS",
  "GCP",
  "Kubernetes",
  "PostgreSQL",
  "Kafka",
  "Terraform",
];

export const SOCIAL_URLS: Record<string, string> = {
  GitHub: "https://github.com/AndrewAriza",
  LinkedIn: "https://linkedin.com/in/AndresAriza",
  X: "https://x.com/AndrewAriza",
};

export const EMAIL = "andrewariza.dev@gmail.com";

export const CONTENT: Record<Lang, Content> = {
  es: {
    meta: {
      title: "Andrés Ariza — Senior Software Engineer",
      description:
        "Senior Software Engineer. 15+ años construyendo producto en frontend, backend e infraestructura. Disponible para startups y consultorías.",
      photoAlt: "Andrés Ariza, Senior Software Engineer, retrato",
      langSwitch: "Idioma",
    },
    nav: { stack: "Stack", cta: "Contactar" },
    hero: {
      eyebrow: "Disponible para nuevos proyectos · 2026",
      name1: "Andrés",
      name2: "Ariza",
      roleLabel: "Rol",
      roleValue: "Senior Software Engineer",
      intro:
        "Ingeniero de Sistemas con más de 15 años construyendo producto en frontend, backend e infraestructura. Lidero equipos para startups y compañías que necesitan velocidad sin sacrificar calidad.",
      statusLabel: "Estado",
      statusValue: "Disponible",
      yearsLabel: "Experiencia",
      yearsValue: "15+ años",
    },
    marquee: MARQUEE,
    about: {
      idx: "01 / Sobre mí",
      title:
        "Construyo producto <em>de extremo a extremo,</em> desde la arquitectura hasta producción.",
      lede: "Empecé creando webs para pequeños negocios en 2010. Quince años después he liderado equipos en grandes empresas, construido MVPs para startups y enviado producto a millones de usuarios en LATAM.",
      body: [
        "Mi superpoder es moverme de manera transversal sin fricción: hoy modelo Kafka topics para un core bancario, mañana refino una animación en React Native. Me enfoco en crear soluciones pensando en producto, en la intersección de infraestructura y experiencia.",
        "Soy fan de Platzi (+100 cursos) y certificado en Scrum, me gusta usar nuevas tecnologías, automatizaciones e inteligencia artificial. Si tu startup necesita un ingeniero que tome decisiones de arquitectura y siga escribiendo código, hablemos.",
      ],
      stats: [
        { num: "15", suffix: "+", label: "Años en producto" },
        { num: "9", suffix: "", label: "Compañías" },
        { num: "100", suffix: "+", label: "Cursos Platzi" },
        { num: "7", suffix: "", label: "Países (clientes)" },
      ],
    },
    stack: {
      idx: "04 / Stack",
      title: "Herramientas que <em>uso a diario.</em>",
      cols: [
        {
          title: "Lenguajes",
          list: [
            ["TypeScript", "diario"],
            ["JavaScript", "diario"],
            ["Python", "diario"],
            ["Java", "frecuente"],
            ["Go", "ocasional"],
          ],
        },
        {
          title: "Frontend",
          list: [
            ["React", "diario"],
            ["Next.js", "diario"],
            ["React Native", "diario"],
            ["Vue", "frecuente"],
            ["Angular", "frecuente"],
            ["Ionic", "ocasional"],
          ],
        },
        {
          title: "Backend",
          list: [
            ["Node.js", "diario"],
            ["NestJS", "diario"],
            ["Express", "diario"],
            ["Spring Boot", "frecuente"],
            ["Django", "frecuente"],
            ["FastAPI", "ocasional"],
            ["Gin", "ocasional"],
          ],
        },
        {
          title: "Datos & Infra",
          list: [
            ["PostgreSQL", "diario"],
            ["MongoDB", "frecuente"],
            ["Redis", "diario"],
            ["Kafka", "diario"],
            ["Neo4j", "ocasional"],
            ["AWS", "diario"],
            ["GCP", "frecuente"],
            ["Kubernetes", "diario"],
            ["Terraform", "diario"],
          ],
        },
      ],
    },
    contact: {
      overline: "Hablemos",
      sub: "Si lideras una startup que necesita un ingeniero senior con criterio de producto e infra, estoy abierto a roles full-time y consultorías.",
      socials: ["GitHub", "LinkedIn", "X"],
    },
    footer: { left: "© 2026 Andrés Ariza", right: "Hecho en Colombia" },
  },

  en: {
    meta: {
      title: "Andrés Ariza — Senior Software Engineer",
      description:
        "Senior Software Engineer. 15+ years building product across frontend, backend and infrastructure. Available for startups and consulting.",
      photoAlt: "Andrés Ariza, Senior Software Engineer, portrait",
      langSwitch: "Language",
    },
    nav: { stack: "Stack", cta: "Get in touch" },
    hero: {
      eyebrow: "Available for new projects · 2026",
      name1: "Andrés",
      name2: "Ariza",
      roleLabel: "Role",
      roleValue: "Senior Software Engineer",
      intro:
        "Systems Engineer with 15+ years building product across frontend, backend and infrastructure. I lead teams for startups and companies that need speed without giving up on craft.",
      statusLabel: "Status",
      statusValue: "Available",
      yearsLabel: "Experience",
      yearsValue: "15+ years",
    },
    marquee: MARQUEE,
    about: {
      idx: "01 / About",
      title: "I build product <em>end to end,</em> from architecture to production.",
      lede: "I started building websites for small businesses in 2010. Fifteen years later I've led teams at large companies, built MVPs for startups, and shipped product to millions across LATAM.",
      body: [
        "My superpower is moving across the stack without friction: today I'm modeling Kafka topics for a banking core, tomorrow I'm polishing an animation in React Native. I focus on creating solutions with product thinking, at the intersection of infrastructure and experience.",
        "Big fan of Platzi (+100 courses) and Scrum-certified — I like using new technologies, automations and AI. If your startup needs an engineer who can make architecture calls and keep shipping code — let's talk.",
      ],
      stats: [
        { num: "15", suffix: "+", label: "Years in product" },
        { num: "9", suffix: "", label: "Companies" },
        { num: "100", suffix: "+", label: "Platzi courses" },
        { num: "7", suffix: "", label: "Countries (clients)" },
      ],
    },
    stack: {
      idx: "04 / Stack",
      title: "Tools <em>I use daily.</em>",
      cols: [
        {
          title: "Languages",
          list: [
            ["TypeScript", "daily"],
            ["JavaScript", "daily"],
            ["Python", "daily"],
            ["Java", "frequent"],
            ["Go", "occasional"],
          ],
        },
        {
          title: "Frontend",
          list: [
            ["React", "daily"],
            ["Next.js", "daily"],
            ["React Native", "daily"],
            ["Vue", "frequent"],
            ["Angular", "frequent"],
            ["Ionic", "occasional"],
          ],
        },
        {
          title: "Backend",
          list: [
            ["Node.js", "daily"],
            ["NestJS", "daily"],
            ["Express", "daily"],
            ["Spring Boot", "frequent"],
            ["Django", "frequent"],
            ["FastAPI", "occasional"],
            ["Gin", "occasional"],
          ],
        },
        {
          title: "Data & Infra",
          list: [
            ["PostgreSQL", "daily"],
            ["MongoDB", "frequent"],
            ["Redis", "daily"],
            ["Kafka", "daily"],
            ["Neo4j", "occasional"],
            ["AWS", "daily"],
            ["GCP", "frequent"],
            ["Kubernetes", "daily"],
            ["Terraform", "daily"],
          ],
        },
      ],
    },
    contact: {
      overline: "Let's talk",
      sub: "If you lead a startup that needs a senior engineer with product judgment and infra chops, I'm open to full-time roles and consulting.",
      socials: ["GitHub", "LinkedIn", "X"],
    },
    footer: { left: "© 2026 Andrés Ariza", right: "Made in Colombia" },
  },
};

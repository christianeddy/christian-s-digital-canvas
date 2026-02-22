import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Plataforma SaaS",
    description: "Diseño y desarrollo de una plataforma de gestión para startups, desde la arquitectura hasta el lanzamiento.",
    link: "#",
  },
  {
    name: "App de Productividad",
    description: "Consultoría de producto y liderazgo técnico para una app móvil con +50k usuarios activos.",
    link: "#",
  },
  {
    name: "Dashboard Analítico",
    description: "Sistema de visualización de datos en tiempo real para un equipo de operaciones en fintech.",
    link: "#",
  },
  {
    name: "E-commerce Headless",
    description: "Arquitectura e implementación de un commerce headless con Next.js y Stripe.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 md:py-32">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">Proyectos</h2>
        <p className="text-muted-foreground mb-12">Una selección de trabajo reciente.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              className="group block rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(234,88,12,0.08)] hover:-translate-y-0.5"
              style={{ borderLeft: "4px solid hsl(21, 90%, 48%)" }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-medium text-foreground">{project.name}</h3>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

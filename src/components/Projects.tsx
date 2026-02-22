import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "ERP para Dark Kitchens",
    description: "Sistema de gestión en la nube para grupos de restaurantes con múltiples marcas. Actualmente en desarrollo.",
    link: null,
  },
  {
    name: "BodhiBot — Flujo conversacional",
    description: "Piloto de asistente conversacional para enseñar a los clientes de Bodhi a usar sus productos y aumentar la probabilidad de crear un hábito.",
    link: "https://bodhibot-02c7fa.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 md:py-32">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">Proyectos</h2>
        <p className="text-muted-foreground mb-12">Una selección de trabajo reciente.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => {
            const Wrapper = project.link ? "a" : "div";
            const wrapperProps = project.link
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={project.name}
                {...wrapperProps}
                className="group block rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(234,88,12,0.08)] hover:-translate-y-0.5"
                style={{ borderLeft: "4px solid hsl(21, 90%, 48%)" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-medium text-foreground">{project.name}</h3>
                  {project.link && (
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.link && (
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground opacity-70 group-hover:opacity-100 group-hover:text-primary transition-all">
                    Ver piloto <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                )}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

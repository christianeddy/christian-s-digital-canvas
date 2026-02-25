import { ArrowUpRight } from "lucide-react";

const essays = [
  {
    title: "¿Cómo se ve la libertad?",
    date: "Febrero 2026",
    summary: "El yo es una historia que cuenta el cerebro para mantener coherencia. Un ensayo sobre identidad, conciencia y qué queda cuando dejas de obedecer esa narrativa.",
    link: "https://como-se-ve-la-libertad.netlify.app/",
  },
];

const Essays = () => {
  return (
    <section id="ensayos" className="py-24 md:py-32 bg-secondary/50">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">Ensayos</h2>
        <p className="text-muted-foreground mb-12">Ideas y reflexiones sobre tecnología y producto.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {essays.map((essay) => (
            <a
              key={essay.title}
              href={essay.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-border bg-background p-6 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(37,99,235,0.08)] hover:-translate-y-0.5"
              style={{ borderLeft: "4px solid hsl(217, 91%, 60%)" }}
            >
              <p className="text-xs text-muted-foreground mb-2 font-medium tracking-wide uppercase">
                {essay.date}
              </p>
              <h3 className="font-medium text-foreground mb-2">{essay.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {essay.summary}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground opacity-70 group-hover:opacity-100 group-hover:text-primary transition-all">
                Leer ensayo <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Essays;

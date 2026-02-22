import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-[90vh] flex items-center pt-14">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hola, soy Christian
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Technical creator
            <br />
            & consultor.
          </h1>
          <p
            className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-in"
            style={{ animationDelay: "0.35s" }}
          >
            Ayudo a equipos y startups a construir mejores productos a través de consultoría de producto, ingeniería y dirección técnica.
          </p>
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground border border-border rounded-full px-6 py-2.5 hover:bg-secondary transition-colors opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Ver proyectos
            <ArrowDown className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

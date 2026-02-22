import { ArrowDown } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jfif";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-[90vh] flex items-center pt-14"
      style={{ background: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fffbf7 100%)" }}
    >
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <div className="max-w-lg flex-1">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Hola, soy{" "}
              <span style={{ color: "#ea580c" }}>Christian</span>
            </h1>
            <p
              className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-in"
              style={{ animationDelay: "0.25s" }}
            >
              Ayudo a equipos y startups a construir mejores productos a través del diseño de sistemas a medida, ingeniería y dirección técnica.
            </p>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 text-sm font-medium text-white rounded-full px-6 py-2.5 transition-all opacity-0 animate-fade-in"
              style={{
                animationDelay: "0.5s",
                background: "linear-gradient(135deg, #f97316, #ea580c)",
                boxShadow: "0 4px 14px rgba(234, 88, 12, 0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #ea580c, #c2410c)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(234, 88, 12, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #f97316, #ea580c)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(234, 88, 12, 0.25)";
              }}
            >
              Ver proyectos
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="flex-shrink-0 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <img
              src={heroPhoto}
              alt="Christian - Technical Creator"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover object-top shadow-lg"
              style={{ boxShadow: "0 8px 30px rgba(234, 88, 12, 0.12)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

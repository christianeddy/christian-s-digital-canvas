const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-tight text-foreground">
          Christian
        </a>
        <div className="flex items-center gap-8">
          <a href="#inicio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#proyectos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Proyectos
          </a>
          <a href="#ensayos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Ensayos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

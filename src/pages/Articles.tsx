import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

const Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="container max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Artículos</h1>
          <p className="text-muted-foreground mb-12">Escritos sobre tecnología, producto e ingeniería.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles.map((article) => (
              <div
                key={article.slug}
                className="block rounded-xl border border-border bg-card p-6"
                style={{ borderLeft: "4px solid hsl(21, 90%, 48%)" }}
              >
                {article.date && (
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                      {article.date}
                    </p>
                    {article.readTime && (
                      <>
                        <span className="text-xs text-muted-foreground">·</span>
                        <p className="text-xs text-muted-foreground">{article.readTime}</p>
                      </>
                    )}
                  </div>
                )}
                <h3 className="font-medium text-foreground mb-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Articles;

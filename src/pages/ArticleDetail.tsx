import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-28 pb-24 container max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-semibold mb-4">Artículo no encontrado</h1>
          <Link to="/articulos" className="text-primary hover:underline">
            Volver a artículos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="container max-w-2xl mx-auto px-6">
          <Link
            to="/articulos"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Volver a artículos
          </Link>

          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime} de lectura</span>
            </div>
          </header>

          <div className="prose prose-stone max-w-none">
            {article.content.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-foreground/85 leading-[1.8] mb-6 text-[1.05rem]"
                dangerouslySetInnerHTML={{
                  __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default ArticleDetail;

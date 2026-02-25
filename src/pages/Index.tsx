import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ArticlesPreview from "@/components/ArticlesPreview";
import Essays from "@/components/Essays";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Projects />
      <ArticlesPreview />
      <Essays />
      <Footer />
    </div>
  );
};

export default Index;

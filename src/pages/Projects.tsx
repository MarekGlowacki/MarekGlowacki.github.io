
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import PropertyGrid from "@/components/PropertyGrid";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-5xl font-display text-estate-800 mb-16 text-center">{t("projects.title")}</h1>
          <PropertyGrid />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;

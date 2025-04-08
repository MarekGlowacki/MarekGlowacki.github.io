
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import PropertyGrid from "@/components/PropertyGrid";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const { t, language } = useLanguage();
  
  const portfolioProjects = [
    { 
      name: "Karolina Siemion", 
      url: "https://delicate-empanada-d272d8.netlify.app",
      type: language === "pl" ? "Strona personalna" : "Personal website"
    },
    { 
      name: "Arkadiusz Sikorski", 
      url: "https://ephemeral-brigadeiros-7225df.netlify.app",
      type: language === "pl" ? "Portfolio" : "Portfolio"
    },
    { 
      name: "Jacek Pęczak", 
      url: "https://animated-style-fusion.vercel.app",
      type: language === "pl" ? "Strona profesjonalna" : "Professional site"
    },
    { 
      name: "Daniel Sciborek", 
      url: "https://peaceful-gingersnap-e1d5f8.netlify.app",
      type: language === "pl" ? "Strona personalna" : "Personal website"
    },
    { 
      name: "Asia Kuźma", 
      url: "https://deft-starlight-518597.netlify.app",
      type: language === "pl" ? "Portfolio" : "Portfolio"
    },
    { 
      name: "DCA Crypto Monitor", 
      url: "https://gentle-klepon-d28eaf.netlify.app/",
      type: language === "pl" ? "Aplikacja webowa" : "Web application"
    }
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-5xl font-display text-estate-800 mb-16 text-center">{t("projects.title")}</h1>
          
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="projects">{language === "pl" ? "Projekty" : "Projects"}</TabsTrigger>
              <TabsTrigger value="portfolio">{language === "pl" ? "Portfolio" : "Portfolio"}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="projects" className="mt-0">
              <PropertyGrid />
            </TabsContent>
            
            <TabsContent value="portfolio" className="mt-0">
              <div className="mb-8">
                <h2 className="text-3xl font-display text-estate-800 mb-6 text-center">
                  {language === "pl" ? "Przykłady moich produkcji:" : "Examples of my work:"}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioProjects.map((project, index) => (
                  <a 
                    key={index}
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="block h-full group"
                  >
                    <Card className="h-full border-2 border-[#e8f4ff] hover:border-[#49be25] transition-all duration-300 bg-white hover:shadow-xl">
                      <CardContent className="p-0">
                        <div className="aspect-video w-full overflow-hidden">
                          <img 
                            src={`https://image.thum.io/get/width/600/crop/800/${project.url}`} 
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-display text-lg text-estate-800 mb-1 group-hover:text-[#49be25] transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-sm text-estate-600">{project.type}</p>
                          <div className="mt-2 flex items-center text-[#49be25] text-sm font-medium">
                            <span>{language === "pl" ? "Odwiedź stronę" : "Visit website"}</span>
                            <ExternalLink className="ml-1 w-3 h-3" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;

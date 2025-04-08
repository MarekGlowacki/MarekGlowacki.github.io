import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Container, TruckIcon, TrainFront, Database, LayoutDashboard, ChartBar, Activity, Clock } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useLanguage } from "@/contexts/LanguageContext";

const TOS111 = () => {
  const { language } = useLanguage();
  
  // Content based on language
  const content = {
    pl: {
      hero: {
        title: "Terminal Operation System",
        highlight: "111",
        subtitle: "Rewolucyjny system zarządzania operacjami transportowymi, który łączy zaawansowaną technologię z prostotą użytkowania.",
        demo: "Wypróbuj demo",
        login: "admin@tos111.pl",
        password: "123123",
        dashboard: "Nowoczesny dashboard",
        dashboardDesc: "Intuicyjny interfejs dla wszystkich operacji transportowych"
      },
      features: {
        title: "Kluczowe funkcjonalności",
        items: [
          {
            title: "Obsługa Pociągów",
            icon: <TrainFront className="w-12 h-12 text-[#49be25] mb-4" />,
            description: "Płynne przyjmowanie i wydawanie pociągów transportowych z zaawansowanym zarządzaniem ładunkami"
          },
          {
            title: "Transport Samochodowy",
            icon: <TruckIcon className="w-12 h-12 text-[#49be25] mb-4" />,
            description: "Kompleksowa obsługa floty samochodów transportowych z optymalizacją tras i ładunku"
          },
          {
            title: "Zarządzanie Kontenerami",
            icon: <Container className="w-12 h-12 text-[#49be25] mb-4" />,
            description: "Precyzyjne śledzenie i organizacja kontenerów z mapowaniem w czasie rzeczywistym"
          },
          {
            title: "Analiza Danych",
            icon: <Database className="w-12 h-12 text-[#49be25] mb-4" />,
            description: "Zaawansowane raportowanie i analityka bazująca na technologii wektorowej"
          },
          {
            title: "Panel Zarządzania",
            icon: <LayoutDashboard className="w-12 h-12 text-[#49be25] mb-4" />,
            description: "Intuicyjny interfejs do monitorowania wszystkich operacji w czasie rzeczywistym"
          },
          {
            title: "Optymalizacja Czasu",
            icon: <Clock className="w-12 h-12 text-[#49be25] mb-4" />,
            description: "Skrócenie czasu operacji dzięki inteligentnym rozwiązaniom i automatyzacji"
          },
          {
            title: "Monitoring Wydajności",
            icon: <Activity className="w-12 h-12 text-[#49be25] mb-4" />,
            description: "Zaawansowane narzędzia do śledzenia i optymalizowania sprawności operacji"
          }
        ]
      },
      benefits: {
        title: "Korzyści z systemu TOS 111",
        chart: {
          items: [
            { name: 'Wydajność', value: 90, color: '#49be25' }, 
            { name: 'Dokładność', value: 95, color: '#3ca31f' },
            { name: 'Oszczędność', value: 85, color: '#2f8919' },
            { name: 'Skalowalność', value: 88, color: '#226e13' },
            { name: 'Elastyczność', value: 92, color: '#15520c' },
          ],
          description: "TOS 111 znacząco podnosi kluczowe wskaźniki efektywności operacji terminalowych"
        }
      },
      system: {
        title: "Technologia nowej generacji",
        description: "Terminal Operation System (TOS) 111 wykorzystuje najnowocześniejsze technologie bazujące na bazach danych w chmurze, które obsługują zamianę danych na wektory dla zwiększenia wydajności operacyjnej.",
        cards: [
          {
            icon: <TrainFront className="w-14 h-14 text-[#49be25] mb-5" />,
            title: "Inteligentna obsługa transportu",
            description: "Płynne przyjmowanie i wydawanie pociągów z zaawansowaną funkcją podwójnego sprawdzania przypisania platform do kontenerów."
          },
          {
            icon: <TruckIcon className="w-14 h-14 text-[#49be25] mb-5" />,
            title: "Efektywna logistyka",
            description: "System z myślą o efektywnej obsłudze pociągów i samochodów transportujących kontenery, oferujący innowacyjne funkcje zwiększające wydajność."
          },
          {
            icon: <LayoutDashboard className="w-14 h-14 text-[#49be25] mb-5" />,
            title: "Zarządzanie przestrzenią",
            description: "Zaawansowane śledzenie stanów magazynowych umożliwiające szybsze i bardziej precyzyjne operacje przyjęć i wydań towarów."
          }
        ]
      },
      cta: {
        title: "Gotowy na rewolucję w zarządzaniu terminalem?",
        description: "Dzięki Terminal Operation System 111, terminale mogą osiągnąć nowy poziom efektywności i niezawodności.",
        button: "Przetestuj TOS 111"
      }
    },
    en: {
      hero: {
        title: "Terminal Operation System",
        highlight: "111",
        subtitle: "Revolutionary transport operations management system that combines advanced technology with ease of use.",
        demo: "Try demo",
        login: "admin@tos111.pl",
        password: "123123",
        dashboard: "Modern dashboard",
        dashboardDesc: "Intuitive interface for all transport operations"
      },
      features: {
        title: "Key Features",
        items: [
          {
            title: "Train Operations",
            icon: <TrainFront className="w-12 h-12 text-[#49be25] mb-4" />,
            description: "Smooth receiving and dispatching of transport trains with advanced cargo management"
          },
          {
            title: "Truck Transportation",
            icon: <TruckIcon className="w-12 h-12 text-[#49be25] mb-4" />,
            description: "Comprehensive fleet management with route and cargo optimization"
          },
          {
            title: "Container Management",
            icon: <Container className="w-12 h-12 text-[#49be25] mb-4" />,
            description: "Precise tracking and organization of containers with real-time mapping"
          },
          {
            title: "Data Analysis",
            icon: <Database className="w-12 h-12 text-[#49be25] mb-4" />,
            description: "Advanced reporting and analytics based on vector technology"
          },
          {
            title: "Management Panel",
            icon: <LayoutDashboard className="w-12 h-12 text-[#49be25] mb-4" />,
            description: "Intuitive interface for monitoring all operations in real-time"
          },
          {
            title: "Time Optimization",
            icon: <Clock className="w-12 h-12 text-[#49be25] mb-4" />,
            description: "Reduced operation time through intelligent solutions and automation"
          },
          {
            title: "Performance Monitoring",
            icon: <Activity className="w-12 h-12 text-[#49be25] mb-4" />,
            description: "Advanced tools for tracking and optimizing operational efficiency"
          }
        ]
      },
      benefits: {
        title: "Benefits of TOS 111 System",
        chart: {
          items: [
            { name: 'Efficiency', value: 90, color: '#49be25' }, 
            { name: 'Accuracy', value: 95, color: '#3ca31f' },
            { name: 'Cost Saving', value: 85, color: '#2f8919' },
            { name: 'Scalability', value: 88, color: '#226e13' },
            { name: 'Flexibility', value: 92, color: '#15520c' },
          ],
          description: "TOS 111 significantly improves key performance indicators of terminal operations"
        }
      },
      system: {
        title: "Next-generation technology",
        description: "Terminal Operation System (TOS) 111 utilizes cutting-edge technologies based on cloud databases that handle data conversion into vectors for increased operational efficiency.",
        cards: [
          {
            icon: <TrainFront className="w-14 h-14 text-[#49be25] mb-5" />,
            title: "Intelligent transport handling",
            description: "Smooth receiving and dispatching of trains with advanced double-checking of platform-to-container assignments."
          },
          {
            icon: <TruckIcon className="w-14 h-14 text-[#49be25] mb-5" />,
            title: "Effective logistics",
            description: "System designed for efficient handling of trains and trucks transporting containers, offering innovative features that increase efficiency."
          },
          {
            icon: <LayoutDashboard className="w-14 h-14 text-[#49be25] mb-5" />,
            title: "Space management",
            description: "Advanced inventory tracking enabling faster and more precise reception and dispatch operations."
          }
        ]
      },
      cta: {
        title: "Ready for a revolution in terminal management?",
        description: "With Terminal Operation System 111, terminals can achieve a new level of efficiency and reliability.",
        button: "Try TOS 111"
      }
    }
  };
  
  // Select the current language content
  const c = language === "pl" ? content.pl : content.en;
  
  // Use the same data structure but with translated content
  const benefitsData = c.benefits.chart.items;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#ecf8e8]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-estate-800 mb-6 leading-tight">
                {c.hero.title} <span className="text-[#49be25]">Operation</span> System
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#49be25] to-[#6dda4c]"> {c.hero.highlight}</span>
              </h1>
              
              <p className="text-lg text-estate-600 mb-8">
                {c.hero.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://tos111.netlify.app" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#49be25] hover:bg-[#3ca31f] text-white flex items-center gap-2 px-6 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                    {c.hero.demo} <ExternalLink className="w-5 h-5" />
                  </Button>
                </a>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md border-l-4 border-[#49be25] mt-4 md:mt-0 transition-all hover:shadow-lg">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-500 font-medium">Login</span>
                      <p className="text-estate-800 font-bold">{c.hero.login}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 font-medium">{language === 'pl' ? 'Hasło' : 'Password'}</span>
                      <p className="text-estate-800 font-bold">{c.hero.password}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="relative overflow-hidden rounded-xl shadow-2xl border-8 border-white">
                <img 
                  src="/images/TOS111.png"
                  alt="Terminal Operation System Dashboard" 
                  className="h-full md:h-[60vh] object-cover rounded-lg transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-semibold mb-2">{c.hero.dashboard}</h3>
                    <p>{c.hero.dashboardDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Carousel */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-display text-center text-estate-800 mb-12">{c.features.title}</h2>
          
          <Carousel
            opts={{ loop: true }}
            className="mx-auto max-w-5xl"
          >
            <CarouselContent>
              {c.features.items.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all h-full bg-gradient-to-br from-white to-[#ecf8e8]">
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      {feature.icon}
                      <h3 className="text-xl font-semibold mb-2 text-estate-800">{feature.title}</h3>
                      <p className="text-estate-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static border-[#49be25] text-[#49be25] hover:bg-[#ecf8e8] hover:text-[#49be25]" />
              <CarouselNext className="static border-[#49be25] text-[#49be25] hover:bg-[#ecf8e8] hover:text-[#49be25]" />
            </div>
          </Carousel>
        </div>
      </div>
      
      {/* Benefits Section with Chart */}
      <div className="py-16 bg-gradient-to-b from-[#ecf8e8] to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-display text-center text-estate-800 mb-12">{c.benefits.title}</h2>
          
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={benefitsData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 30,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fill: '#525252' }} />
                  <YAxis domain={[0, 100]} tick={{ fill: '#525252' }} />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Value']}
                    contentStyle={{ borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {benefitsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-8 text-center text-estate-600 text-lg">
              {c.benefits.chart.description}
            </div>
          </div>
          
          {/* System Description - Redesigned into cards with timeline */}
          <div className="space-y-16 mb-12">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#49be25] text-white mb-6">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-estate-800">{c.system.title}</h3>
              <p className="text-estate-600 text-lg">
                {c.system.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {c.system.cards.map((card, index) => (
                <Card key={index} className="p-8 shadow-xl border-t-4 border-t-[#49be25] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center h-full">
                    {card.icon}
                    <h4 className="text-xl font-semibold mb-3 text-estate-800">{card.title}</h4>
                    <p className="text-estate-600">
                      {card.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#49be25] to-[#6dda4c] rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">{c.cta.title}</h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                {c.cta.description}
              </p>
              <a href="https://tos111.netlify.app" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#49be25] hover:bg-gray-100 flex items-center gap-2 px-8 py-6 text-lg font-medium rounded-full">
                  {c.cta.button} <ExternalLink className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TOS111;

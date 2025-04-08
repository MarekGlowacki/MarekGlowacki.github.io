
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChartContainer } from "@/components/ui/chart";
import { ExternalLink, Container, TruckIcon, TrainFront, Database, LayoutDashboard, ChartBar, Activity, Clock } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const TOS111 = () => {
  const featureData = [
    {
      title: "Obsługa Pociągów",
      icon: <TrainFront className="w-12 h-12 text-purple-500 mb-4" />,
      description: "Płynne przyjmowanie i wydawanie pociągów transportowych z zaawansowanym zarządzaniem ładunkami"
    },
    {
      title: "Transport Samochodowy",
      icon: <TruckIcon className="w-12 h-12 text-blue-500 mb-4" />,
      description: "Kompleksowa obsługa floty samochodów transportowych z optymalizacją tras i ładunku"
    },
    {
      title: "Zarządzanie Kontenerami",
      icon: <Container className="w-12 h-12 text-emerald-500 mb-4" />,
      description: "Precyzyjne śledzenie i organizacja kontenerów z mapowaniem w czasie rzeczywistym"
    },
    {
      title: "Analiza Danych",
      icon: <Database className="w-12 h-12 text-amber-500 mb-4" />,
      description: "Zaawansowane raportowanie i analityka bazująca na technologii wektorowej"
    },
    {
      title: "Panel Zarządzania",
      icon: <LayoutDashboard className="w-12 h-12 text-indigo-500 mb-4" />,
      description: "Intuicyjny interfejs do monitorowania wszystkich operacji w czasie rzeczywistym"
    },
    {
      title: "Optymalizacja Czasu",
      icon: <Clock className="w-12 h-12 text-rose-500 mb-4" />,
      description: "Skrócenie czasu operacji dzięki inteligentnym rozwiązaniom i automatyzacji"
    },
    {
      title: "Monitoring Wydajności",
      icon: <Activity className="w-12 h-12 text-cyan-500 mb-4" />,
      description: "Zaawansowane narzędzia do śledzenia i optymalizowania sprawności operacji"
    }
  ];

  const benefitsData = [
    { name: 'Wydajność', value: 90, color: '#9b87f5' },
    { name: 'Dokładność', value: 95, color: '#7E69AB' },
    { name: 'Oszczędność', value: 85, color: '#6E59A5' },
    { name: 'Skalowalność', value: 88, color: '#8B5CF6' },
    { name: 'Elastyczność', value: 92, color: '#1EAEDB' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-estate-800 mb-6 leading-tight">
                Terminal <span className="text-[#9b87f5]">Operation</span> System
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#1EAEDB]"> 111</span>
              </h1>
              
              <p className="text-lg text-estate-600 mb-8">
                Rewolucyjny system zarządzania operacjami transportowymi, który łączy zaawansowaną technologię z prostotą użytkowania.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://tos111.netlify.app" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#8B5CF6] hover:bg-[#7c4ff1] text-white flex items-center gap-2 px-6 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                    Wypróbuj demo <ExternalLink className="w-5 h-5" />
                  </Button>
                </a>
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow mt-4 md:mt-0">
                  <p className="text-estate-800 font-medium">Login: admin@tos111.pl</p>
                  <p className="text-estate-800 font-medium">Hasło: 123123</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="relative overflow-hidden rounded-xl shadow-2xl border-8 border-white">
                <img 
                  src="/images/projekt-btc.jpg" 
                  alt="Terminal Operation System Dashboard" 
                  className="w-full h-[50vh] md:h-[60vh] object-cover rounded-lg transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-semibold mb-2">Nowoczesny dashboard</h3>
                    <p>Intuicyjny interfejs dla wszystkich operacji transportowych</p>
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
          <h2 className="text-3xl font-display text-center text-estate-800 mb-12">Kluczowe funkcjonalności</h2>
          
          <Carousel
            opts={{ loop: true }}
            className="mx-auto max-w-5xl"
          >
            <CarouselContent>
              {featureData.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all h-full bg-gradient-to-br from-white to-purple-50">
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
              <CarouselPrevious className="static" />
              <CarouselNext className="static" />
            </div>
          </Carousel>
        </div>
      </div>
      
      {/* Benefits Section with Chart */}
      <div className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-display text-center text-estate-800 mb-12">Korzyści z systemu TOS 111</h2>
          
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
                    formatter={(value) => [`${value}%`, 'Wartość']}
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
              TOS 111 znacząco podnosi kluczowe wskaźniki efektywności operacji terminalowych
            </div>
          </div>
          
          {/* System Description - Redesigned */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 shadow-lg border-none bg-gradient-to-br from-purple-50 to-white animate-fade-in">
              <div className="flex justify-center mb-4">
                <TrainFront className="w-12 h-12 text-[#8B5CF6]" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-estate-800">Innowacyjne zarządzanie</h3>
              <p className="text-estate-600 text-center">
                Z przyjemnością przedstawiam mój zaawansowany Terminal Operation System (TOS), który zrewolucjonizował sposób zarządzania operacjami transportowymi w terminalach.
              </p>
            </Card>
            
            <Card className="p-6 shadow-lg border-none bg-gradient-to-br from-purple-50 to-white animate-fade-in">
              <div className="flex justify-center mb-4">
                <TruckIcon className="w-12 h-12 text-[#7E69AB]" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-estate-800">Płynne operacje</h3>
              <p className="text-estate-600 text-center">
                Mój TOS umożliwia płynne przyjmowanie i wydawanie pociągów oraz efektywną obsługę kontenerów, co jest kluczowe dla sprawnego zarządzania ruchem w terminalu.
              </p>
            </Card>
            
            <Card className="p-6 shadow-lg border-none bg-gradient-to-br from-purple-50 to-white animate-fade-in">
              <div className="flex justify-center mb-4">
                <Database className="w-12 h-12 text-[#6E59A5]" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-estate-800">Technologia wektorowa</h3>
              <p className="text-estate-600 text-center">
                System bazuje na nowoczesnych bazach danych w chmurze, które obsługują zamianę danych na wektory, zapewniając szybki i efektywny dostęp do informacji.
              </p>
            </Card>
          </div>
          
          {/* Additional Description Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#8B5CF6]">
              <h3 className="text-2xl font-semibold mb-4 text-estate-800">Kompleksowe zarządzanie</h3>
              <p className="text-estate-600 leading-relaxed">
                System wspiera zarządzanie przestrzenią magazynową, umożliwiając śledzenie stanów magazynowych. 
                Dzięki temu operacje przyjęć i wydań towarów są nie tylko szybsze, ale także bardziej precyzyjne.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#7E69AB]">
              <h3 className="text-2xl font-semibold mb-4 text-estate-800">Zaawansowana technologia</h3>
              <p className="text-estate-600 leading-relaxed">
                Terminal Operation System (TOS) 111 wykorzystuje najnowocześniejsze technologie, 
                bazując na nowoczesnych bazach danych w chmurze, które obsługują zamianę danych na wektory 
                dla zwiększenia wydajności operacyjnej.
              </p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Gotowy na rewolucję w zarządzaniu terminalem?</h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Dzięki mojemu Terminal Operation System 111, terminale mogą osiągnąć nowy poziom efektywności i niezawodności, co jest kluczowe w dynamicznie zmieniającym się środowisku transportowym.
              </p>
              <a href="https://tos111.netlify.app" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#8B5CF6] hover:bg-gray-100 flex items-center gap-2 px-8 py-6 text-lg font-medium rounded-full">
                  Przetestuj TOS 111 <ExternalLink className="w-5 h-5" />
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

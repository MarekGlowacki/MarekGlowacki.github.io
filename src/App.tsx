
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import DCACryptoMonitor from "./pages/ProjectDetails/DCACryptoMonitor";
import AIForBusiness from "./pages/ProjectDetails/AIForBusiness";
import BitcoinConsulting from "./pages/ProjectDetails/BitcoinConsulting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/dca-crypto-monitor" element={<DCACryptoMonitor />} />
          <Route path="/project/ai-for-business" element={<AIForBusiness />} />
          <Route path="/project/bitcoin-consulting" element={<BitcoinConsulting />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

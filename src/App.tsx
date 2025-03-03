
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { LanguageProvider } from "@/contexts/LanguageContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import DCACryptoMonitor from "./pages/ProjectDetails/DCACryptoMonitor";
import AIForBusiness from "./pages/ProjectDetails/AIForBusiness";
import CRM from "./pages/ProjectDetails/CRM";
import WebDevelopment from "./pages/ServiceDetails/WebDevelopment";
import AIBusiness from "./pages/ServiceDetails/AIBusiness";
import BitcoinService from "./pages/ServiceDetails/BitcoinConsulting";
import LegalTerms from "./pages/LegalTerms";
import VerifyEmail from "./pages/VerifyEmail";
import EmailComposer from "./pages/EmailComposer";
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <GoogleAnalytics />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/ai-business" element={<AIBusiness />} />
            <Route path="/services/bitcoin-consulting" element={<BitcoinService />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/dca-crypto-monitor" element={<DCACryptoMonitor />} />
            <Route path="/project/ai-for-business" element={<AIForBusiness />} />
            <Route path="/project/crm" element={<CRM />} />
            <Route path="/legal" element={<LegalTerms />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/email-composer" element={<EmailComposer />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

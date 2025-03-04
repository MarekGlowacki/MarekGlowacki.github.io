import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "pl" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Słownik tłumaczeń
const translations: Record<Language, Record<string, string>> = {
  pl: {
    // Navbar
    "navbar.about": "O mnie",
    "navbar.services": "Moja oferta",
    "navbar.portfolio": "Portfolio",
    "navbar.contact": "Kontakt",
    "navbar.newsletter": "Bądź na bieżąco",
    "navbar.cv": "CV",

    // Hero
    "hero.title": "Innowacyjne Rozwiązania Technologiczne",
    "hero.subtitle": "Specjalizuję się w tworzeniu aplikacji internetowych, szkoleniach AI dla firm oraz doradztwie w zakresie Bitcoina.",
    "hero.cta.projects": "Zobacz projekty",
    "hero.cta.contact": "Skontaktuj się",

    // About 
    "about.title": "O mnie",
    "about.intro": "Jestem pasjonatem Bitcoina, programowania i finansów. Moją misją jest dzielenie się wiedzą i doświadczeniem z innymi.",
    "about.finance": "Wolność Finansowa",
    "about.finance.desc": "Osiągnąłem wolność finansową w wieku 33 lat!",
    "about.corporate": "Doświadczenie Korporacyjne",
    "about.corporate.desc": "Programista w największych korporacjach na świecie, zatrudniających 250,000 pracowników w 154 krajach.",
    "about.background": "Background Finansowy",
    "about.background.desc": "3 lata doświadczenia w finansach: 2,5 roku sprzedaży produktów finansowych opartych na funduszach inwestycyjnych oraz 0,5 roku jako bankier dla klientów biznesowych.",
    "about.security": "Cyberbezpieczeństwo",
    "about.security.desc": "Pasjonat cyberbezpieczeństwa, stale poszerzający wiedzę w tej dziedzinie.",
    "about.btcexpert": "Expert Bitcoin",
    "about.btcexpert.desc": "2,5 roku intensywnego szkolenia z inwestowania w Bitcoina u światowej klasy eksperta. Od 2020 roku jestem \"all in\" w Bitcoinie!",
    "about.bots": "Trading Bots",
    "about.bots.desc": "Od 13.05.2022 r. tworzę boty tradingowe dla kryptowalut.",
    "about.world": "Światowy człowiek",
    "about.world.desc": "Mieszkałem rok na Zanzibarze, co odmieniło moje życie.",
    
    // Why Choose
    "why.title": "Dlaczego warto?",
    "why.experience": "Doświadczenie i Wiedza",
    "why.experience.desc": "Posiadam bogate doświadczenie w tworzeniu aplikacji internetowych, szkoleniach AI oraz doradztwie w zakresie Bitcoina. Moje rozwiązania są zawsze dostosowane do indywidualnych potrzeb klienta.",
    "why.innovative": "Innowacyjne Podejście",
    "why.innovative.desc": "Wykorzystuję najnowsze technologie i trendy, aby dostarczać rozwiązania, które nie tylko spełniają obecne potrzeby, ale są też gotowe na przyszłe wyzwania.",
    "why.support": "Wsparcie na Każdym Etapie",
    "why.support.desc": "Zapewniam kompleksową obsługę od konsultacji, przez wdrożenie, aż po wsparcie techniczne. Zawsze jestem dostępny dla moich klientów.",
    "why.cta": "Nie czekaj - skontaktuj się już teraz!",
    "why.cta.desc": "Umów się na bezpłatną konsultację i dowiedz się, jak mogę pomóc w rozwoju Twojego biznesu.",
    "why.call": "Zadzwoń teraz: +48 514 383 545",
    "why.email": "Wyślij email",
    "why.experience.years": "5+ lat",
    "why.experience.text": "doświadczenia w branży IT",

    // Services
    "services.title": "Usługi",
    "services.all": "Zobacz wszystkie usługi",
    "services.web.title": "Tworzenie aplikacji internetowych",
    "services.web.subtitle1": "Zabłyśnij w internecie i poczuj moc najbardziej zaawansowanych komputerów świata",
    "services.web.subtitle2": "Robię szybko, robię tanio, robię dobrze",
    "services.web.subtitle3": "Zamów stronę, z której duma będzie Cię rozpierać",
    "services.web.desc": "Specjalizuję się w tworzeniu nowoczesnych aplikacji internetowych z wykorzystaniem najnowszych technologii. Od prostych stron po zaawansowane systemy zarządzania, tworzę rozwiązania szyte na miarę potrzeb klienta.",
    "services.ai.title": "Sztuczna Inteligencja dla Firm",
    "services.ai.desc": "Wykorzystaj potencjał sztucznej inteligencji w swojej firmie. Oferuję kompleksowe rozwiązania AI, które zautomatyzują procesy, zwiększą efektywność i pomogą w podejmowaniu lepszych decyzji biznesowych.",
    "services.btc.title": "Bitcoin Expert",
    "services.btc.desc": "Profesjonalne doradztwo w zakresie Bitcoina i technologii blockchain. Pomagam w bezpiecznym przechowywaniu środków, implementacji rozwiązań płatniczych i edukacji zespołów w zakresie kryptowalut.",
    "services.more": "Dowiedz się więcej",

    // Projects
    "projects.title": "Projekty",
    "projects.dca": "DCA Crypto Monitor",
    "projects.ai": "Firmowa Sztuczna Inteligencja",
    "projects.crm": "System zarządzania szkołą",
    "projects.location.poland": "Polska",
    "projects.location.biala": "Biała Podlaska",
    "projects.location.world": "Świat",

    // Vision
    "vision.title": "Moja Wizja",
    "vision.desc": "Moją misją jest tworzenie innowacyjnych rozwiązań technologicznych, które wyznaczają nowe standardy w branży IT.",
    "vision.apps": "Nowoczesne Aplikacje",
    "vision.apps.desc": "Tworzę wyjątkowe aplikacje internetowe łączące innowacyjność z funkcjonalnością.",
    "vision.ai": "Sztuczna Inteligencja",
    "vision.ai.desc": "Implementuję rozwiązania AI, które wspierają rozwój i automatyzację procesów biznesowych.",
    "vision.btc": "Bitcoin Expert",
    "vision.btc.desc": "Dostarczam profesjonalne doradztwo i wsparcie w zakresie inwestycji w Bitcoina.",

    // Footer
    "footer.about": "Jako programista tworzę innowacyjne rozwiązania technologiczne, które usprawniają procesy biznesowe i wspierają osiąganie celów firm. Dążę do doskonałości, łącząc pasję z technologią w każdym projekcie.",
    "footer.services": "Usługi",
    "footer.web": "Tworzenie aplikacji internetowych",
    "footer.ai": "Szkolenia Sztucznej Inteligencji dla Firm",
    "footer.btc": "Bitcoin Expert",
    "footer.discover": "Odkryj mnie",
    "footer.about.link": "O mnie",
    "footer.offer": "Moja oferta",
    "footer.portfolio": "Portfolio",
    "footer.contact": "Kontakt",
    "footer.legal": "Polityka prywatności & Regulamin",
    "footer.contact.title": "Kontakt",
    "footer.hours": "Godziny pracy:",
    "footer.weekdays": "Pon - Pt: 08:00 - 20:00",
    "footer.weekend": "Sobota - Niedziela: Zamknięte",
    "footer.newsletter": "Bądź na bieżąco",
    "footer.newsletter.title": "Dołącz do newslettera",
    "footer.newsletter.desc": "Zapisz się na newsletter, aby otrzymywać informacje o nowościach, ofertach specjalnych i przydatnych poradach.",
    "footer.newsletter.email": "Twój adres email",
    "footer.newsletter.submit": "Zapisz się",
    "footer.newsletter.submitting": "Wysyłanie...",
    "footer.newsletter.privacy": "Twoje dane są bezpieczne. W każdej chwili możesz wypisać się z newslettera.",
    "footer.rights": "Wszelkie prawa zastrzeżone.",
    "footer.terms": "Regulamin",
    "footer.privacy": "Polityka prywatności",
    "footer.cookies": "Cookies",
    "footer.cookies.manage": "Zarządzaj cookies",

    // Newsletter
    "footer.newsletter.invalidEmail.title": "Nieprawidłowy adres email",
    "footer.newsletter.invalidEmail.desc": "Proszę podać poprawny adres email.",
    "footer.newsletter.error.title": "Wystąpił błąd",
    "footer.newsletter.error.desc": "Nie udało się zapisać do newslettera. Spróbuj ponownie później.",
    "footer.newsletter.emailExists.title": "Email już istnieje",
    "footer.newsletter.emailExists.desc": "Ten adres email jest już zapisany do naszego newslettera.",
    
    "footer.newsletter.verificationSent.title": "Sprawdź swoją skrzynkę email",
    "footer.newsletter.verificationSent.desc": "Wysłaliśmy link weryfikacyjny na podany adres email.",
    "footer.newsletter.verificationSent.longDesc": "Aby dokończyć proces rejestracji, kliknij w link, który właśnie wysłaliśmy na podany adres email. Sprawdź również folder Spam, jeśli nie widzisz wiadomości w skrzynce odbiorczej.",
    "footer.newsletter.verificationSent.checkEmail": "Sprawdź swoją skrzynkę odbiorczą i kliknij w link weryfikacyjny.",
    "footer.newsletter.verificationSent.backToForm": "Powrót do formularza",

    // Language
    "language": "EN",
    "language.switch": "Zmień język na angielski"
  },
  en: {
    // Navbar
    "navbar.about": "About me",
    "navbar.services": "My offer",
    "navbar.portfolio": "Portfolio",
    "navbar.contact": "Contact",
    "navbar.newsletter": "Stay updated",
    "navbar.cv": "CV",

    // Hero
    "hero.title": "Innovative Technology Solutions",
    "hero.subtitle": "I specialize in creating web applications, AI training for businesses, and Bitcoin consulting.",
    "hero.cta.projects": "See projects",
    "hero.cta.contact": "Get in touch",

    // About
    "about.title": "About me",
    "about.intro": "I am passionate about Bitcoin, programming, and finance. My mission is to share knowledge and experience with others.",
    "about.finance": "Financial Freedom",
    "about.finance.desc": "I achieved financial freedom at the age of 33!",
    "about.corporate": "Corporate Experience",
    "about.corporate.desc": "Programmer in the world's largest corporations, employing 250,000 employees in 154 countries.",
    "about.background": "Financial Background",
    "about.background.desc": "3 years of experience in finance: 2.5 years of selling financial products based on investment funds and 0.5 years as a banker for business clients.",
    "about.security": "Cybersecurity",
    "about.security.desc": "Cybersecurity enthusiast, constantly expanding knowledge in this field.",
    "about.btcexpert": "Bitcoin Expert",
    "about.btcexpert.desc": "2.5 years of intensive training in Bitcoin investing with a world-class expert. Since 2020, I've been \"all in\" on Bitcoin!",
    "about.bots": "Trading Bots",
    "about.bots.desc": "Since May 13, 2022, I've been creating trading bots for cryptocurrencies.",
    "about.world": "Global Citizen",
    "about.world.desc": "I lived in Zanzibar for a year, which transformed my life.",
    
    // Why Choose
    "why.title": "Why choose me?",
    "why.experience": "Experience and Knowledge",
    "why.experience.desc": "I have extensive experience in creating web applications, AI training, and Bitcoin consulting. My solutions are always tailored to individual client needs.",
    "why.innovative": "Innovative Approach",
    "why.innovative.desc": "I use the latest technologies and trends to deliver solutions that not only meet current needs but are also ready for future challenges.",
    "why.support": "Support at Every Stage",
    "why.support.desc": "I provide comprehensive service from consultation, through implementation, to technical support. I am always available for my clients.",
    "why.cta": "Don't wait - get in touch now!",
    "why.cta.desc": "Schedule a free consultation and find out how I can help grow your business.",
    "why.call": "Call now: +48 514 383 545",
    "why.email": "Send email",
    "why.experience.years": "5+ years",
    "why.experience.text": "of experience in the IT industry",

    // Services
    "services.title": "Services",
    "services.all": "See all services",
    "services.web.title": "Web Application Development",
    "services.web.subtitle1": "Shine online and feel the power of the world's most advanced computers",
    "services.web.subtitle2": "I work fast, affordably, and well",
    "services.web.subtitle3": "Order a website that will make you proud",
    "services.web.desc": "I specialize in creating modern web applications using the latest technologies. From simple websites to advanced management systems, I create solutions tailored to the client's needs.",
    "services.ai.title": "Artificial Intelligence for Business",
    "services.ai.desc": "Harness the potential of artificial intelligence in your company. I offer comprehensive AI solutions that automate processes, increase efficiency, and help make better business decisions.",
    "services.btc.title": "Bitcoin Expert",
    "services.btc.desc": "Professional advice on Bitcoin and blockchain technology. I help with secure storage, implementation of payment solutions, and education of teams in the field of cryptocurrencies.",
    "services.more": "Learn more",

    // Projects
    "projects.title": "Projects",
    "projects.dca": "DCA Crypto Monitor",
    "projects.ai": "Corporate Artificial Intelligence",
    "projects.crm": "School Management System",
    "projects.location.poland": "Poland",
    "projects.location.biala": "Biala Podlaska",
    "projects.location.world": "World",

    // Vision
    "vision.title": "My Vision",
    "vision.desc": "My mission is to create innovative technological solutions that set new standards in the IT industry.",
    "vision.apps": "Modern Applications",
    "vision.apps.desc": "I create unique web applications combining innovation with functionality.",
    "vision.ai": "Artificial Intelligence",
    "vision.ai.desc": "I implement AI solutions that support the development and automation of business processes.",
    "vision.btc": "Bitcoin Expert",
    "vision.btc.desc": "I provide professional advice and support for Bitcoin investments.",

    // Footer
    "footer.about": "As a programmer, I create innovative technological solutions that streamline business processes and support the achievement of company goals. I strive for excellence, combining passion with technology in every project.",
    "footer.services": "Services",
    "footer.web": "Web Application Development",
    "footer.ai": "AI Training for Business",
    "footer.btc": "Bitcoin Expert",
    "footer.discover": "Discover me",
    "footer.about.link": "About me",
    "footer.offer": "My offer",
    "footer.portfolio": "Portfolio",
    "footer.contact": "Contact",
    "footer.legal": "Privacy Policy & Terms",
    "footer.contact.title": "Contact",
    "footer.hours": "Working hours:",
    "footer.weekdays": "Mon - Fri: 08:00 - 20:00",
    "footer.weekend": "Saturday - Sunday: Closed",
    "footer.newsletter": "Stay updated",
    "footer.newsletter.title": "Join our newsletter",
    "footer.newsletter.desc": "Subscribe to our newsletter to receive information about news, special offers, and useful tips.",
    "footer.newsletter.email": "Your email address",
    "footer.newsletter.submit": "Subscribe",
    "footer.newsletter.submitting": "Submitting...",
    "footer.newsletter.privacy": "Your data is secure. You can unsubscribe from the newsletter at any time.",
    "footer.rights": "All rights reserved.",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy Policy",
    "footer.cookies": "Cookies",
    "footer.cookies.manage": "Manage cookies",

    // Newsletter
    "footer.newsletter.invalidEmail.title": "Invalid email address",
    "footer.newsletter.invalidEmail.desc": "Please provide a valid email address.",
    "footer.newsletter.error.title": "An error occurred",
    "footer.newsletter.error.desc": "Failed to subscribe to the newsletter. Please try again later.",
    "footer.newsletter.emailExists.title": "Email already exists",
    "footer.newsletter.emailExists.desc": "This email address is already subscribed to our newsletter.",
    
    "footer.newsletter.verificationSent.title": "Check your email",
    "footer.newsletter.verificationSent.desc": "We've sent a verification link to your email address.",
    "footer.newsletter.verificationSent.longDesc": "To complete the registration process, click on the link we just sent to your email address. Also check your Spam folder if you don't see the message in your inbox.",
    "footer.newsletter.verificationSent.checkEmail": "Check your inbox and click on the verification link.",
    "footer.newsletter.verificationSent.backToForm": "Back to form",

    // Language
    "language": "PL",
    "language.switch": "Switch to Polish"
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Pobierz język z localStorage lub użyj domyślnego (polski)
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem("language") as Language) || "pl"
  );

  // Funkcja do tłumaczenia tekstów
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Zapisz wybrany język w localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook do używania kontekstu językowego
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

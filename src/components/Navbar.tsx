
import { Menu, Mail, Phone, Facebook, Twitter, Youtube, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  return (
    <>
      {/* Contact Info Bar */}
      <div className="bg-black py-2 w-full z-50">
        <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
              <Mail className="h-4 w-4" /> kontakt@marekglowacki.pl
            </div>
            <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
              <Phone className="h-4 w-4" /> +48 514 383 545
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-2xl font-display text-estate-800">Marek Głowacki</Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-estate-600 hover:text-estate-800 transition-colors whitespace-nowrap">
                 O mnie
              </Link>
              <Link to="/services" className="text-estate-600 hover:text-estate-800 transition-colors whitespace-nowrap">Moja oferta</Link>
              <Link to="/projects" className="text-estate-600 hover:text-estate-800 transition-colors">Portfolio</Link>
              <Link to="/contact" className="text-estate-600 hover:text-estate-800 transition-colors">Kontakt</Link>
              <Button
                className="w-full bg-[#49be25] text-white hover:bg-[#3da51e]"
                onClick={() => (window.location.href = '/cv.html')}>
                CV
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link to="/about" className="text-lg">O mnie</Link>
                    <Link to="/services" className="text-lg">Moja oferta</Link>
                    <Link to="/projects" className="text-lg">Porftolio</Link>
                    <Link to="/contact" className="text-lg">Kontakt</Link>
                    <Button
                      className="w-full bg-[#49be25] text-white hover:bg-[#3da51e]"
                      onClick={() => (window.location.href = '/cv.html')}>
                      CV
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

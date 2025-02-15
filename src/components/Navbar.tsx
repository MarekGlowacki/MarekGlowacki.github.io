
import { Menu, Mail, Phone, Facebook, Twitter, Youtube, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  return (
    <>
      {/* Contact Info Bar */}
      <div className="bg-white/90 backdrop-blur-sm py-2 w-full z-50">
        <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-estate-600 hover:text-estate-800 transition-colors">
              <Mail className="h-4 w-4" /> kontakt@marekglowacki.pl
            </div>
            <div className="flex items-center gap-2 text-estate-600 hover:text-estate-800 transition-colors">
              <Phone className="h-4 w-4" /> +48 514 383 545
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-estate-600 hover:text-estate-800 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-estate-600 hover:text-estate-800 transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-estate-600 hover:text-estate-800 transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" className="text-estate-600 hover:text-estate-800 transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="text-estate-600 hover:text-estate-800 transition-colors">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="text-2xl font-display text-estate-800">Marek Głowacki</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#projekty" className="text-estate-600 hover:text-estate-800 transition-colors">Projekty</a>
              <a href="#o-mnie" className="text-estate-600 hover:text-estate-800 transition-colors">O mnie</a>
              <a href="#uslugi" className="text-estate-600 hover:text-estate-800 transition-colors">Usługi</a>
              <a href="#kontakt" className="text-estate-600 hover:text-estate-800 transition-colors">Kontakt</a>
              <Button className="bg-estate-800 text-white hover:bg-estate-700">
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
                    <a href="#projekty" className="text-lg">Projekty</a>
                    <a href="#o-mnie" className="text-lg">O mnie</a>
                    <a href="#uslugi" className="text-lg">Usługi</a>
                    <a href="#kontakt" className="text-lg">Kontakt</a>
                    <Button className="w-full">CV</Button>
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

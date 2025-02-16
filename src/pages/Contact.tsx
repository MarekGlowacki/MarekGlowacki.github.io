
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-5xl font-display text-estate-800 mb-16 text-center">Kontakt</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-display text-estate-800 mb-6">Dane kontaktowe</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#49be25]" />
                  <span>kontakt@marekglowacki.pl</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#49be25]" />
                  <span>+48 514 383 545</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#49be25]" />
                  <span>Biała Podlaska 21-500, Lubelskie</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Imię" className="w-full p-3 border rounded" />
                  <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
                </div>
                <input type="text" placeholder="Temat" className="w-full p-3 border rounded" />
                <textarea placeholder="Wiadomość" rows={5} className="w-full p-3 border rounded"></textarea>
                <Button className="w-full bg-[#49be25] text-white hover:bg-[#3da51e]">
                  Wyślij wiadomość
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

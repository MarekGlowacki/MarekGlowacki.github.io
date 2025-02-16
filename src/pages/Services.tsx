
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-20">
        <Services />
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;

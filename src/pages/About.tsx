
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import AboutUs from "@/components/AboutUs";
import OurVision from "@/components/OurVision";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutUs />
      <OurVision />
      <Footer />
    </div>
  );
};

export default About;

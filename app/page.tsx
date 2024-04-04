import Navbar from "./components/Navbar/navbar";
import HeroSection from "./components/Home/home-hero";
import Section2 from "./components/Home/home-enroll";
import Homefeatured from "./components/Home/home-featuredkits";
import Section4 from "./components/Home/home-fasttrack";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <Section2 />
    <Homefeatured />
    <Section4 />
    <Footer />
  </div>
  );
}

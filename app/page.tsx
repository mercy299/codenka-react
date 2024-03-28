import Image from "next/image";
import Navbar from "./components/Navbar/navbar";
import HeroSection from "./components/Home/home-hero";

export default function Home() {
  return (
    <div>
    <Navbar />
    <HeroSection />
  </div>
  );
}

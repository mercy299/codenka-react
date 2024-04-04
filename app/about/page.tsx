import Navbar from "@/app/components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import AboutHero from "../components/About/about-hero";
import AboutWelcome from "../components/About/about-welcome";
import AboutFasttrack from "../components/About/about-fasttrack";
// import Footer from "../Footer/footer";

// export default function About() {
//     return (
//         <div>
//             <Navbar />
//             <Footer />
//         </div>
//     );
// }
const About: React.FC = () => {
    return (
      <div>
        <Navbar />
        <AboutHero />
        <AboutWelcome />
        <AboutFasttrack />
        <Footer />
      </div>
    );
  };

export default About;
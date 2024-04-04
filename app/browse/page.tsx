import Navbar from "@/app/components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import BrowseFilter from "../components/Browse/browse-filter";
import BrowseHero from "../components/Browse/browse-home";

// import Footer from "../Footer/footer";

const About: React.FC = () => {
    return (
      <div>
        <Navbar />
        <BrowseHero />
        <BrowseFilter/>
        <Footer />
      </div>
    );
  };

export default About;

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Team from "../components/Team";
import Games from "../components/Games";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import News from "../components/News";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Team />
      <Games />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

import { ArrowDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6">
            <img 
              src="/src/assets/bc6c90b7-d2b3-4c87-a2c6-59ceb64ddd40.png" 
              alt="TechStrike Game Studio Logo" 
              className="h-24 mx-auto mb-4"
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="gradient-text">TechStrike</span>
            </h1>
            <p className="text-2xl md:text-3xl text-primary">Game Studio</p>
          </div>
          <div className="bg-card p-6 rounded-lg pixel-border animate-pixel-pulse mb-8">
            <p className="text-lg md:text-xl text-foreground/90">
              {t.heroTagline}
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="#games"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-game transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
            >
              {t.ourGames}
            </a>
            <a
              href="#about"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-game transition-all duration-300"
            >
              {t.aboutUs}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-primary" size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

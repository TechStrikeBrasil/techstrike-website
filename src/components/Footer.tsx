import { Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-6 gradient-text">
            TechStrike Game Studio
          </h2>
          <div className="flex justify-center space-x-8 mb-6">
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
              {t.about}
            </a>
            <a href="#team" className="text-foreground/70 hover:text-primary transition-colors">
              {t.team}
            </a>
            <a href="#games" className="text-foreground/70 hover:text-primary transition-colors">
              {t.games}
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
              {t.contact}
            </a>
          </div>
          <div className="text-foreground/60 text-sm flex flex-col md:flex-row items-center justify-center">
            <span>© {year} {t.footerRights}</span>
            <span className="mx-2 hidden md:block">|</span>
            <span className="flex items-center mt-2 md:mt-0">
              {t.madeWith} <Heart size={14} className="mx-1 text-primary" /> {t.madeIn}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
